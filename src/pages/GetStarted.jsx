import { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '../components/ui/FAQAccordion';
import PlanSelector from '../components/pricing/PlanSelector';
import AddonSelector from '../components/pricing/AddonSelector';
import OrderSummary from '../components/pricing/OrderSummary';
import OrderForm from '../components/pricing/OrderForm';
import PaymentButtons from '../components/pricing/PaymentButtons';
import ConversationMockup from '../components/hero/ConversationMockup';
import { plans, getStripeLineItems, paypalPlanIds, calculateTotal } from '../data/pricing';
import { howItWorksFaqs, landingExtraFaqs } from '../data/faqs';
import { getUtmParams, captureUtmParams } from '../utils/tracking';
import logoUrl from '../assets/logo.svg';
import {
    AnswersEveryCallIcon, SoundsHumanIcon, BooksJobsIcon,
    ChoosePlanStepIcon, SetupAIStepIcon, GoLiveStepIcon,
    ShieldIcon, PhoneBadgeIcon, NoContractIcon, StarBadgeIcon,
} from '../components/svg/LandingIcons';
import PremiumTrustBadges from '../components/ui/PremiumTrustBadges';
import DemoSection from '../components/ui/DemoSection';

const allFaqs = [...howItWorksFaqs.slice(0, 6), ...landingExtraFaqs];

// ─── Progress Indicator ────────────────────────────────
function ProgressBar({ currentStep }) {
    const steps = [
        { num: 1, label: 'Choose Plan' },
        { num: 2, label: 'Your Details' },
        { num: 3, label: 'Payment' },
    ];
    return (
        <div className="flex items-center justify-center gap-2 md:gap-0 max-w-md mx-auto mb-10">
            {steps.map((step, i) => {
                const isCompleted = step.num < currentStep;
                const isCurrent = step.num === currentStep;
                return (
                    <div key={step.num} className="flex items-center flex-1">
                        <div className="flex flex-col items-center flex-1">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${isCompleted ? 'bg-primary text-white' :
                                isCurrent ? 'bg-primary text-white ring-4 ring-primary/20' :
                                    'bg-surface-soft text-text-light border border-border'
                                }`}>
                                {isCompleted ? '✓' : step.num}
                            </div>
                            <span className={`text-xs mt-1.5 font-medium ${isCurrent ? 'text-primary' : 'text-text-light'}`}>
                                {step.label}
                            </span>
                        </div>
                        {i < steps.length - 1 && (
                            <div className={`h-0.5 w-full mt-[-18px] mx-1 ${isCompleted ? 'bg-primary' : 'bg-border'}`} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default function GetStarted() {
    const [searchParams] = useSearchParams();
    const initialTrade = searchParams.get('trade') || '';

    const [selectedPlan, setSelectedPlan] = useState('professional');
    const [selectedAddons, setSelectedAddons] = useState({
        extraMinutes: false,
        chatbotTier: null,
    });
    const [formError, setFormError] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        captureUtmParams();
    }, []);

    // Track which step is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const step = Number(entry.target.dataset.step);
                        if (step) setCurrentStep(step);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const targets = document.querySelectorAll('[data-step]');
        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToForm = () => {
        const el = document.getElementById('order-form');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                el.querySelector('input, select')?.focus();
            }, 600);
        }
    };

    const scrollToPlans = () => {
        const el = document.getElementById('plans');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleFormSubmit = useCallback(async (formData) => {
        setFormError('');
        const utm = getUtmParams();

        if (formData.paymentMethod === 'stripe') {
            try {
                const CHECKOUT_ENDPOINT = import.meta.env.VITE_CHECKOUT_ENDPOINT || '/api/create-checkout-session';
                const lineItems = getStripeLineItems(selectedPlan, selectedAddons);
                const plan = plans.find(p => p.id === selectedPlan);

                const total = calculateTotal(selectedPlan, selectedAddons);
                const response = await fetch(CHECKOUT_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        planPriceId: plan?.stripePriceId,
                        addonPriceIds: lineItems.slice(1).map(i => i.price),
                        customerName: formData.name,
                        customerEmail: formData.email,
                        businessName: formData.businessName,
                        trade: formData.trade,
                        phone: formData.phone,
                        postcode: formData.postcode,
                        callsPerDay: formData.callsPerDay,
                        notes: formData.notes,
                        website: formData.website,
                        planName: plan?.name,
                        totalAmount: total,
                        addonDetails: { extraMinutes: selectedAddons.extraMinutes, chatbotTier: selectedAddons.chatbotTier },
                        utm,
                    }),
                });

                const data = await response.json();
                if (data.url) {
                    window.location.href = data.url;
                } else {
                    setFormError('Something went wrong. Please try again or contact us.');
                }
            } catch {
                setFormError('Unable to connect to payment service. Please contact us on 0333 038 9960.');
            }
        } else if (formData.paymentMethod === 'paypal') {
            const planId = paypalPlanIds[selectedPlan];
            if (!planId) {
                setFormError('PayPal is not yet configured. Please use card payment or contact us.');
                return;
            }
            try {
                const ppPlan = plans.find(p => p.id === selectedPlan);
                const ppTotal = calculateTotal(selectedPlan, selectedAddons);
                const response = await fetch('/api/create-paypal-subscription', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        planId,
                        totalAmount: ppTotal,
                        customerName: formData.name,
                        customerEmail: formData.email,
                        businessName: formData.businessName,
                        trade: formData.trade,
                        phone: formData.phone,
                        postcode: formData.postcode,
                        website: formData.website,
                        callsPerDay: formData.callsPerDay,
                        notes: formData.notes,
                        planName: ppPlan?.name,
                        addonDetails: { extraMinutes: selectedAddons.extraMinutes, chatbotTier: selectedAddons.chatbotTier },
                        utm,
                    }),
                });

                const data = await response.json();
                if (data.url) {
                    window.location.href = data.url;
                } else {
                    setFormError('Something went wrong creating your PayPal subscription. Please try again or contact us.');
                }
            } catch {
                setFormError('Unable to connect to PayPal. Please try again or contact us on 0333 038 9960.');
            }
        }
    }, [selectedPlan, selectedAddons]);

    const total = calculateTotal(selectedPlan, selectedAddons);

    return (
        <>
            <Helmet>
                <html lang="en-GB" />
                <title>Get Your AI Voice Agent | From £97/mo | Live in 24 Hours</title>
                <meta name="description" content="AI phone answering for tradespeople. Answers calls 24/7, sounds human, books jobs straight into your diary. No contracts. Choose your plan now." />
                <link rel="canonical" href="https://www.aivoiceagentsforhomeservices.co.uk/get-started" />
            </Helmet>

            {/* ─── Minimal Header ─────────────────────────────── */}
            <div className="bg-white border-b border-border py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logoUrl} alt="AI Voice Agents Logo" className="w-10 h-10" />
                        <div className="flex flex-col">
                            <span className="text-dark font-display text-xl leading-none">AI Voice Agents</span>
                            <span className="text-text-light text-xs font-medium tracking-wide mt-0.5">for Home Services</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* ─── Hero Section ───────────────────────────────── */}
            <section className="bg-gradient-to-br from-white via-[#f8f7ff] to-white py-16 md:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-xl">
                            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-dark mb-6 leading-[1.1] tracking-tight">
                                Stop Losing Jobs to Missed Calls
                            </h1>
                            <p className="text-lg md:text-xl text-text leading-relaxed mb-8">
                                AI answers your phone 24/7. Sounds human. Books jobs. From £97/mo.
                            </p>
                            <button
                                type="button"
                                onClick={scrollToPlans}
                                className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full px-10 py-4 shadow-cta hover:shadow-[0_6px_20px_rgba(108,60,225,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer text-lg mb-4"
                            >
                                See Plans & Pricing &darr;
                            </button>
                            <p className="text-sm text-text-light font-medium mb-8">
                                Starting from £97/month &middot; No contracts &middot; Live in 24 hours
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <PremiumTrustBadges />
                            </div>
                        </div>

                        {/* Phone mockup — hidden on mobile */}
                        <div className="hidden lg:flex justify-center lg:justify-end">
                            <ConversationMockup />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Testimonial Strip ─────────────────────────── */}
            <div className="bg-dark py-5">
                <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
                    <p className="text-white/90 text-sm md:text-base italic">
                        "Best thing I've done for my business this year. Haven't missed a call since."
                    </p>
                    <p className="text-white/80 text-xs mt-1">— Dave, Plumber, Hampshire</p>
                </div>
            </div>

            {/* ─── 3 Benefit Cards ────────────────────────────── */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-5 md:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: AnswersEveryCallIcon,
                                title: 'Answers Every Call',
                                text: '24/7, 365 days a year. No missed calls, no voicemail, no lost jobs.',
                            },
                            {
                                icon: SoundsHumanIcon,
                                title: 'Sounds Like a Real Person',
                                text: 'UK accent. Knows your trade. Customers think you\'ve hired a receptionist.',
                            },
                            {
                                icon: BooksJobsIcon,
                                title: 'Books Jobs for You',
                                text: 'Captures name, number, postcode, urgency — texts you the details instantly.',
                            },
                        ].map((benefit, i) => (
                            <div key={i} className="text-center p-8 rounded-2xl bg-surface-soft border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                                <benefit.icon className="w-16 h-16 mx-auto mb-5" />
                                <h2 className="font-display text-xl text-dark mb-3">{benefit.title}</h2>
                                <p className="text-text text-sm leading-relaxed">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Demo Section ─────────────────────────────── */}
            <section className="bg-[#F0EBFF] py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <DemoSection
                        heading="Don't Take Our Word for It — Try It Now"
                        subheading="Ring a demo agent right now. Takes 30 seconds. No signup needed."
                        overline="HEAR IT FOR YOURSELF"
                    />
                </div>
            </section>

            {/* ─── Plan Selection + Order Form ────────────────── */}
            <section className="bg-surface-soft py-20 md:py-28" id="plans" data-step="1">
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <ProgressBar currentStep={currentStep} />

                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl text-dark mb-4">Choose Your Plan</h2>
                        <p className="text-text max-w-lg mx-auto">All plans include a free 7-day trial. No setup fees. Cancel anytime.</p>
                    </div>

                    <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-10">
                        <div className="space-y-12">
                            <PlanSelector selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />

                            {/* Urgency bar */}
                            <div className="bg-white rounded-xl border border-primary/20 p-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text">
                                <span className="font-semibold text-primary">Free setup this month</span>
                                <span className="text-text-light">(usually £149)</span>
                                <span className="hidden md:inline text-border">|</span>
                                <span>Most tradespeople are live within 24 hours</span>
                            </div>

                            <AddonSelector
                                selectedAddons={selectedAddons}
                                onToggleExtraMinutes={() => setSelectedAddons(prev => ({
                                    ...prev,
                                    extraMinutes: !prev.extraMinutes,
                                }))}
                                onSelectChatbotTier={(tierId) => setSelectedAddons(prev => ({
                                    ...prev,
                                    chatbotTier: tierId,
                                }))}
                            />

                            {/* Social proof between sections */}
                            <div className="bg-white rounded-xl border border-border p-5 text-center">
                                <p className="text-text italic text-sm">
                                    "I was sceptical about AI answering my calls. After a week I wondered how I managed without it."
                                </p>
                                <p className="text-text-light text-xs mt-2">— Mark, Electrician, Surrey</p>
                            </div>

                            {/* Order Form */}
                            <div className="bg-white rounded-2xl border border-border shadow-card p-6 md:p-8" data-step="2">
                                <h3 className="font-display text-2xl text-dark mb-2">Almost There — Tell Us About Your Business</h3>
                                <p className="text-sm text-text-light mb-6">We'll use these details to set up your AI voice agent.</p>
                                <OrderForm
                                    selectedPlan={selectedPlan}
                                    selectedAddons={selectedAddons}
                                    initialTrade={initialTrade}
                                    onSubmit={handleFormSubmit}
                                />

                                {formError && (
                                    <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
                                        {formError}
                                    </div>
                                )}

                                <div className="mt-8" data-step="3">
                                    <PaymentButtons
                                        selectedPlan={selectedPlan}
                                        selectedAddons={selectedAddons}
                                        disabled={!selectedPlan}
                                        onPay={(method) => {
                                            const event = new CustomEvent('pricing-pay', { detail: { method } });
                                            document.dispatchEvent(event);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sticky sidebar */}
                        <div className="hidden lg:block">
                            <div className="sticky top-24">
                                <OrderSummary
                                    selectedPlan={selectedPlan}
                                    selectedAddons={selectedAddons}
                                    onScrollToForm={scrollToForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── How It Works — Timeline ────────────────────── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-5 md:px-8">
                    <h2 className="font-display text-3xl md:text-4xl text-dark text-center mb-16">How It Works</h2>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
                        {/* Connecting line (desktop only) */}
                        <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 border-t-2 border-dashed border-primary/20" />

                        {[
                            {
                                num: 1,
                                Icon: ChoosePlanStepIcon,
                                title: 'Choose Your Plan',
                                text: 'Pick the plan that fits your workload. No contracts, cancel anytime.',
                            },
                            {
                                num: 2,
                                Icon: SetupAIStepIcon,
                                title: 'We Set Up Your AI',
                                text: 'We train your agent on your trade, services, and area. Takes about a day.',
                            },
                            {
                                num: 3,
                                Icon: GoLiveStepIcon,
                                title: 'Go Live in 24 Hours',
                                text: 'Your AI answers every call. You get the details. You win more jobs.',
                            },
                        ].map((step) => (
                            <div key={step.num} className="relative text-center bg-surface-soft rounded-2xl p-8 border border-border">
                                {/* Step number badge */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-cta">
                                    {step.num}
                                </div>
                                <step.Icon className="w-20 h-20 mx-auto mb-4 mt-2" />
                                <h3 className="font-display text-lg text-dark mb-2">{step.title}</h3>
                                <p className="text-sm text-text leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Social Proof Bar ───────────────────────────── */}
            <div className="bg-surface-soft border-y border-border py-6">
                <div className="max-w-4xl mx-auto px-5 md:px-8">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-text font-medium">
                        <span>Plumbers</span>
                        <span className="text-border">·</span>
                        <span>Electricians</span>
                        <span className="text-border">·</span>
                        <span>Builders</span>
                        <span className="text-border">·</span>
                        <span>Heating Engineers</span>
                        <span className="text-border">·</span>
                        <span>Locksmiths</span>
                        <span className="text-border">·</span>
                        <span className="text-primary font-semibold">and more</span>
                    </div>
                </div>
            </div>

            {/* ─── FAQ ────────────────────────────────────────── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-5 md:px-8">
                    <h2 className="font-display text-3xl md:text-4xl text-dark text-center mb-4">Questions? We've Got Answers.</h2>
                    <p className="text-text text-center mb-12 max-w-lg mx-auto">Everything you need to know before you decide.</p>
                    <div className="bg-surface-soft rounded-2xl shadow-card border border-border p-8 md:p-10">
                        {allFaqs.map((faq, i) => (
                            <FAQAccordion key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Final CTA ──────────────────────────────────── */}
            <section className="bg-surface-soft py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-5 md:px-8">
                    <div className="bg-gradient-to-br from-[#2D1B69] via-primary to-primary-light rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-dark/40 blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="font-display text-3xl md:text-4xl mb-4">
                                Still Have Questions?
                            </h2>
                            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                                Give us a ring — we're tradespeople-friendly and happy to talk you through it. No hard sell, just honest answers.
                            </p>
                            <a
                                href="tel:03330389960"
                                className="inline-flex items-center gap-2 bg-white text-primary font-semibold rounded-full px-10 py-4 hover:bg-white/90 transition-all text-lg shadow-lg mb-4"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                Call Us: 0333 038 9960
                            </a>
                            <div className="mt-4">
                                <button
                                    type="button"
                                    onClick={scrollToPlans}
                                    className="text-white/70 hover:text-white text-sm underline underline-offset-4 cursor-pointer transition-colors"
                                >
                                    Or scroll up to choose your plan &uarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Minimal Footer ─────────────────────────────── */}
            <div className="bg-[#1A1A2E] text-white/80 py-6 text-center text-sm">
                <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-4">
                    <span>&copy; {new Date().getFullYear()} Antek Automation</span>
                    <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </>
    );
}
