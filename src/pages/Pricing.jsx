import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import SectionWrapper from '../components/ui/SectionWrapper';
import FAQAccordion from '../components/ui/FAQAccordion';
import OverlineTag from '../components/ui/OverlineTag';
import PlanSelector from '../components/pricing/PlanSelector';
import FeatureComparison from '../components/pricing/FeatureComparison';
import AddonSelector from '../components/pricing/AddonSelector';
import OrderSummary, { MobileOrderBar } from '../components/pricing/OrderSummary';
import OrderForm from '../components/pricing/OrderForm';
import PaymentButtons from '../components/pricing/PaymentButtons';
import { pricingFaqs } from '../data/faqs';
import { plans, getStripeLineItems, paypalPlanIds, calculateTotal } from '../data/pricing';
import { getUtmParams, captureUtmParams } from '../utils/tracking';

export default function Pricing() {
    const [searchParams] = useSearchParams();
    const initialTrade = searchParams.get('trade') || '';
    const wasCancelled = searchParams.get('cancelled') === 'true';

    const [selectedPlan, setSelectedPlan] = useState('professional');
    const [selectedAddons, setSelectedAddons] = useState({
        extraMinutes: false,
        chatbotTier: null,
    });
    const [formError, setFormError] = useState('');

    useEffect(() => {
        captureUtmParams();
    }, []);

    const scrollToForm = () => {
        const el = document.getElementById('order-form');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                const firstInput = el.querySelector('input, select');
                firstInput?.focus();
            }, 600);
        }
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
                    setFormError('Something went wrong creating your checkout session. Please try again or contact us.');
                }
            } catch {
                setFormError('Unable to connect to payment service. Please try again or contact us on 0333 038 9960.');
            }
        } else if (formData.paymentMethod === 'paypal') {
            const planId = paypalPlanIds[selectedPlan];
            if (!planId) {
                setFormError('PayPal is not yet configured for this plan. Please use card payment or contact us.');
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

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivoiceagentsforhomeservices.co.uk/" },
                    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.aivoiceagentsforhomeservices.co.uk/pricing" }
                ]
            },
            {
                "@type": "Product",
                "name": "AI Voice Agent for Tradespeople",
                "description": "24/7 AI phone answering for UK tradespeople",
                "brand": { "@type": "Brand", "name": "AI Voice Agents for Home Services" },
                "offers": plans.map(plan => ({
                    "@type": "Offer",
                    "name": plan.name,
                    "price": plan.price.toString(),
                    "priceCurrency": "GBP",
                    "priceValidUntil": "2027-12-31",
                    "availability": "https://schema.org/InStock"
                }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": pricingFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                }))
            }
        ]
    };

    return (
        <>
            <SEOHead
                title="AI Voice Agent Plans for Tradespeople | From £97/mo | No Contracts"
                description="Choose your AI phone answering plan. Answers every call, books jobs, texts you the details. Built for UK plumbers, electricians, builders. Live in 24 hours."
                schema={schema}
                path="/pricing"
            />

            {/* Cancelled payment message */}
            {wasCancelled && (
                <div className="bg-primary/5 border-b border-primary/20">
                    <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 text-center">
                        <p className="text-dark font-medium">
                            No worries — your plan selection is still here. Pick up where you left off whenever you're ready.
                        </p>
                    </div>
                </div>
            )}

            {/* Header */}
            <SectionWrapper bg="soft" className="pt-10 md:pt-16 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <OverlineTag>NO HIDDEN FEES</OverlineTag>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
                        Simple Pricing. No Contracts. No Surprises.
                    </h1>
                    <p className="text-lg md:text-xl text-text leading-relaxed">
                        We're tradespeople at heart — we hate hidden fees as much as you do. Here's exactly what it costs, no small print, no 'call us for a quote' rubbish.
                    </p>
                </div>
            </SectionWrapper>

            {/* Main pricing content */}
            <SectionWrapper bg="white" className="bg-surface-soft">
                <div className="max-w-7xl mx-auto">
                    <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-10">
                        {/* Main column */}
                        <div className="space-y-12">
                            {/* Step 1: Plan Cards */}
                            <div>
                                <h2 className="font-display text-2xl md:text-3xl text-dark mb-6">1. Choose Your Plan</h2>
                                <PlanSelector selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />

                                <div className="text-center mt-8">
                                    <h4 className="font-semibold text-dark text-lg mb-2">What's a minute?</h4>
                                    <p className="text-text text-sm max-w-xl mx-auto">
                                        A minute of actual conversation. 15-second spam calls barely dent your allowance. 100 minutes is roughly 50-80 typical calls per month.
                                    </p>
                                </div>
                            </div>

                            {/* Feature Comparison */}
                            <FeatureComparison />

                            {/* Step 2: Add-ons */}
                            <div>
                                <h2 className="font-display text-2xl md:text-3xl text-dark mb-6">2. Customise Your Agent</h2>
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
                            </div>

                            {/* Urgency bar */}
                            <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-6 border border-primary/10 text-center">
                                <p className="font-semibold text-dark mb-1">Free setup this month (usually £149)</p>
                                <p className="text-sm text-text">Average setup time: 24 hours. Join 50+ UK tradespeople already using AI.</p>
                            </div>

                            {/* Step 3: Order Form */}
                            <div>
                                <h2 className="font-display text-2xl md:text-3xl text-dark mb-2">3. Your Details</h2>
                                <p className="text-text mb-6">Fill in your details below and choose how to pay. We'll ring you within 2 hours to get your AI agent configured.</p>

                                <div className="bg-white rounded-2xl border border-border shadow-card p-6 md:p-8">
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

                                    {/* Micro-testimonials */}
                                    <div className="mt-6 pt-6 border-t border-border">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <blockquote className="text-sm text-text italic">
                                                "Best thing I've done for my business this year."
                                                <footer className="text-xs text-text-light mt-1 not-italic font-medium">— Dave, Plumber</footer>
                                            </blockquote>
                                            <blockquote className="text-sm text-text italic">
                                                "Paid for itself in the first week. Wish I'd done it sooner."
                                                <footer className="text-xs text-text-light mt-1 not-italic font-medium">— Sarah, Electrician</footer>
                                            </blockquote>
                                        </div>
                                    </div>

                                    {/* Payment Buttons */}
                                    <div className="mt-8">
                                        <PaymentButtons
                                            selectedPlan={selectedPlan}
                                            selectedAddons={selectedAddons}
                                            disabled={!selectedPlan}
                                            onPay={(method) => {
                                                // Dispatch a custom event that OrderForm listens for
                                                const event = new CustomEvent('pricing-pay', { detail: { method } });
                                                document.dispatchEvent(event);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticky sidebar (desktop only) */}
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
            </SectionWrapper>

            {/* ROI Comparison Box */}
            <SectionWrapper bg="white">
                <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2D3D] rounded-3xl p-8 md:p-12 text-white border border-white/10 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 font-display text-9xl">£</div>
                    <h2 className="font-display text-3xl md:text-4xl mb-8 relative z-10">Do the maths. It pays for itself.</h2>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-white/80">AI Voice Agent</span>
                            <span className="font-bold text-success text-xl">£97 - £217 /mo</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-white/80">Traditional answering service</span>
                            <span className="font-bold text-white">~£150 - £300 /mo</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-white/80">Part-time receptionist</span>
                            <span className="font-bold text-white">~£800 - £1,200 /mo</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-white/80">Full-time receptionist</span>
                            <span className="font-bold text-coral">£2,000+ /mo</span>
                        </div>
                        <div className="col-span-full mt-4 flex justify-between items-center p-6 bg-coral/10 rounded-xl border border-coral/20">
                            <span className="text-coral font-bold text-lg">Missing ONE single job</span>
                            <span className="font-bold text-coral text-2xl">£150 - £5,000+</span>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* FAQ */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-5 md:px-8">
                    <h2 className="font-display text-3xl md:text-4xl text-dark text-center mb-4">Pricing FAQs</h2>
                    <p className="text-text text-center mb-12 max-w-lg mx-auto">Everything you need to know before you decide.</p>
                    <div className="bg-surface-soft rounded-2xl shadow-card border border-border p-8 md:p-10">
                        {pricingFaqs.map((faq, i) => (
                            <FAQAccordion key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile order bar (replaces default MobileCTA on this page) */}
            <MobileOrderBar
                selectedPlan={selectedPlan}
                selectedAddons={selectedAddons}
                onScrollToForm={scrollToForm}
            />
        </>
    );
}
