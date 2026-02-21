import SEOHead from '../components/layout/SEOHead';
import SectionWrapper from '../components/ui/SectionWrapper';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import OverlineTag from '../components/ui/OverlineTag';
import { pricingFaqs } from '../data/faqs';

export default function Pricing() {
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
                "@type": "Offer",
                "name": "Starter Plan",
                "price": "97.00",
                "priceCurrency": "GBP"
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
                title="AI Voice Agent Pricing for Tradespeople | From £97/mo | No Contracts"
                description="Simple, upfront pricing for UK trades. AI phone answering from £97/mo. No setup fees, no contracts, cancel anytime. Free 7-day trial."
                schema={schema}
                path="/pricing"
            />

            <SectionWrapper bg="soft" className="pt-10 md:pt-16 pb-16">
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

            <SectionWrapper bg="white" className="pt-4 md:pt-8 bg-surface-soft">
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Starter Plan */}
                    <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col">
                        <h3 className="text-2xl font-bold text-dark mb-2">Starter</h3>
                        <p className="text-text mb-6">For sole traders wanting to catch missed calls</p>
                        <div className="mb-6">
                            <span className="text-5xl font-display text-dark">£97</span>
                            <span className="text-text-light font-medium">/month</span>
                        </div>
                        <Button href="/contact" variant="secondary" className="mb-8 w-full">Start 7-Day Free Trial</Button>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex gap-3"><span className="text-success">✓</span> Up to 100 conversation minutes</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> Business hours availability</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> UK local or mobile number</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> SMS/email summaries</li>
                        </ul>
                    </div>

                    {/* Professional Plan */}
                    <div className="bg-dark rounded-3xl p-8 border border-primary relative shadow-2xl shadow-primary/20 flex flex-col transform md:-translate-y-4">
                        <div className="absolute -top-4 inset-x-0 flex justify-center">
                            <span className="bg-gradient-to-r from-primary to-primary-light text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">Most Popular</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                        <p className="text-white/60 mb-6">For busy tradespeople handling out-of-hours</p>
                        <div className="mb-6">
                            <span className="text-5xl font-display text-white">£157</span>
                            <span className="text-white/60 font-medium">/month</span>
                        </div>
                        <Button href="/contact" variant="primary" className="mb-8 w-full">Start 7-Day Free Trial</Button>

                        <ul className="space-y-4 mb-8 text-white/90 flex-grow">
                            <li className="flex gap-3"><span className="text-success">✓</span> Up to 200 conversation minutes</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> <strong>24/7/365 availability</strong></li>
                            <li className="flex gap-3"><span className="text-success">✓</span> UK local or mobile number</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> Emergency escalation paths</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> Basic CRM/Calendar integration</li>
                        </ul>
                    </div>

                    {/* Growth Plan */}
                    <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col">
                        <h3 className="text-2xl font-bold text-dark mb-2">Growth</h3>
                        <p className="text-text mb-6">For growing teams and multi-van operations</p>
                        <div className="mb-6">
                            <span className="text-5xl font-display text-dark">£217</span>
                            <span className="text-text-light font-medium">/month</span>
                        </div>
                        <Button href="/contact" variant="secondary" className="mb-8 w-full">Start 7-Day Free Trial</Button>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex gap-3"><span className="text-success">✓</span> Up to 360 conversation minutes</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> 24/7/365 availability</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> Multiple local lines included</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> Website voice widget included</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> Advanced integrations</li>
                            <li className="flex gap-3"><span className="text-success">✓</span> Full call recording</li>
                        </ul>
                    </div>

                </div>

                <div className="text-center mt-10 max-w-2xl mx-auto">
                    <h4 className="font-semibold text-dark text-lg mb-2">What's a minute?</h4>
                    <p className="text-text">A minute of actual conversation. 15-second spam calls barely dent your allowance. 100 minutes is roughly 50-80 typical calls per month. We don't charge for ring time or hangups.</p>
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
            <SectionWrapper bg="soft">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl text-dark">Pricing FAQs</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-card border border-border p-8 md:p-10">
                        {pricingFaqs.map((faq, i) => (
                            <FAQAccordion key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
