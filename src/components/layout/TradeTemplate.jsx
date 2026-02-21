import SEOHead from './SEOHead';
import SectionWrapper from '../ui/SectionWrapper';
import OverlineTag from '../ui/OverlineTag';
import Button from '../ui/Button';
import FAQAccordion from '../ui/FAQAccordion';
import ConversationMockup from '../hero/ConversationMockup';
import TradeCard from '../ui/TradeCard';
import { trades } from '../../data/trades';

export default function TradeTemplate({ slug }) {
    const trade = trades[slug];
    if (!trade) return <div>Trade not found</div>;

    const Icon = trade.icon;
    const otherTrades = Object.entries(trades).filter(([key]) => key !== slug).slice(0, 3);

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivoiceagentsforhomeservices.co.uk/" },
                    { "@type": "ListItem", "position": 2, "name": "Trades", "item": "https://www.aivoiceagentsforhomeservices.co.uk/trades" },
                    { "@type": "ListItem", "position": 3, "name": trade.name, "item": `https://www.aivoiceagentsforhomeservices.co.uk/ai-voice-agent-for-${slug}` }
                ]
            },
            {
                "@type": "Service",
                "name": `AI Voice Agent for ${trade.name}`,
                "provider": { "@type": "Organization", "name": "AI Voice Agents for Home Services" },
                "offers": {
                    "@type": "Offer",
                    "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "GBP", "price": "29" }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": trade.faqs.map(faq => ({
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
                title={trade.title}
                description={trade.description}
                schema={schema}
                path={`/ai-voice-agent-for-${slug}`}
            />

            {/* Hero Section */}
            <SectionWrapper bg="white" className="pt-10 md:pt-16 pb-20 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <OverlineTag>FOR {trade.name.toUpperCase()}</OverlineTag>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-dark mb-6 tracking-tight">
                            {trade.h1}
                        </h1>
                        <p className="text-text text-lg mb-8 leading-relaxed">
                            {trade.opening}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/pricing" variant="primary">Start 7-Day Free Trial</Button>
                        </div>
                    </div>
                    <div className="lg:pl-8 flex justify-center lg:justify-end">
                        {/* Show a shortened version of the conversation in the hero */}
                        <ConversationMockup messages={trade.conversation.slice(0, 4)} />
                    </div>
                </div>
            </SectionWrapper>

            {/* Pain Points */}
            <SectionWrapper bg="soft">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <OverlineTag>SOUND FAMILIAR?</OverlineTag>
                        <h2 className="font-display text-3xl md:text-4xl text-dark mb-6">The Daily Reality of Being a {trade.name.slice(0, -1)}</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12">
                        <ul className="space-y-6">
                            {trade.painPoints.map((point, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500 font-bold mt-0.5">✕</span>
                                    <span className="text-lg text-text leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Solution Highlights */}
            <SectionWrapper bg="white" className="text-center">
                <div className="max-w-3xl mx-auto">
                    <OverlineTag>THE FIX</OverlineTag>
                    <h2 className="font-display text-3xl md:text-5xl text-dark mb-8">Let AI Handle the Phone While You Work</h2>
                    <p className="text-lg text-text leading-relaxed mb-12">
                        Your AI voice agent is specifically trained on how {trade.name.toLowerCase()} work. It knows what questions to ask, it knows how to spot genuine emergencies, and it books the jobs straight into your phone.
                    </p>
                    <Button href="/how-ai-voice-agents-work" variant="secondary">See Exactly How It Works &rarr;</Button>
                </div>
            </SectionWrapper>

            {/* Sample Conversation */}
            <SectionWrapper bg="accent" className="border-y border-primary/10 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                        <h2 className="font-display text-3xl md:text-4xl text-dark mb-6">Listen to a Live Call</h2>
                        <p className="text-lg text-dark/80 mb-6 leading-relaxed">
                            This is an exact transcript of how the AI handles genuine customer enquiries for {trade.name.toLowerCase()}. Natural, professional, and entirely tailored to your business.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <ConversationMockup messages={trade.conversation} />
                    </div>
                </div>
            </SectionWrapper>

            {/* ROI Box */}
            <SectionWrapper bg="gradient" className="text-white">
                <div className="max-w-4xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
                    <OverlineTag className="bg-white/10 !text-white border border-white/20">DO THE MATHS</OverlineTag>
                    <h2 className="font-display text-3xl md:text-5xl mb-8">What Is Missing a Call Costing You?</h2>
                    <div className="text-[3rem] md:text-[5rem] font-display text-success leading-none mb-6">
                        {trade.roiJobValue}
                    </div>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">Potential value of a single missed job.</p>
                    <p className="text-white/80 leading-relaxed max-w-3xl mx-auto mb-10 text-lg">
                        {trade.roiDescription}
                    </p>
                    <Button href="/pricing" variant="secondary-light" className="bg-white !text-dark hover:!bg-white/90">View Plans From £97/mo</Button>
                </div>
            </SectionWrapper>

            {/* FAQ */}
            <SectionWrapper bg="white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl text-dark">Trade-Specific FAQs for {trade.name}</h2>
                    </div>
                    <div className="bg-surface-soft rounded-2xl shadow-sm border border-border p-8 md:p-10">
                        {trade.faqs.map((faq, i) => (
                            <FAQAccordion key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Live Demo */}
            <SectionWrapper bg="accent" id="demo">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <OverlineTag>HEAR IT FOR YOURSELF</OverlineTag>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark mb-6">
                        Call Our Live AI Voice Agents
                    </h2>
                    <p className="text-lg text-dark/80">
                        These are real AI voice agents we've built for UK trades businesses. Ring them up and see exactly what your customers will experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                    <div className="bg-white p-8 rounded-2xl border border-primary/20 text-center shadow-lg hover:-translate-y-1 transition-transform">
                        <OverlineTag className="bg-primary/5 text-primary">ELECTRICAL DEMO</OverlineTag>
                        <h3 className="text-xl font-semibold mb-6">Bolt Electrical AI Reception</h3>
                        <a href="tel:07782214455" className="block text-4xl md:text-5xl font-display text-primary hover:text-primary-dark transition-colors mb-4">
                            07782 214455
                        </a>
                        <p className="text-sm font-medium text-text-light">Prompt: Try asking about a fuse board replacement</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-primary/20 text-center shadow-lg hover:-translate-y-1 transition-transform">
                        <OverlineTag className="bg-primary/5 text-primary">PLUMBING & HEATING DEMO</OverlineTag>
                        <h3 className="text-xl font-semibold mb-6">Antek Plumbing & Heating AI Receptionist</h3>
                        <a href="tel:03330510944" className="block text-4xl md:text-5xl font-display text-primary hover:text-primary-dark transition-colors mb-4">
                            0333 051 0944
                        </a>
                        <p className="text-sm font-medium text-text-light">Prompt: Try booking a boiler service</p>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-dark/60">
                        Calls are answered by AI 24/7. Give it a ring now and experience the difference.
                    </p>
                </div>
            </SectionWrapper>

            {/* Related Trades */}
            <SectionWrapper bg="soft" className="border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <h3 className="font-display text-2xl text-dark mb-8">See Also</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherTrades.map(([key, t]) => (
                            <TradeCard key={key} trade={t.name} tagLine={t.tagLine} accent={t.accent} icon={t.icon} link={`/ai-voice-agent-for-${key}`} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
