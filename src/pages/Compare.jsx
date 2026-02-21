import SEOHead from '../components/layout/SEOHead';
import SectionWrapper from '../components/ui/SectionWrapper';
import OverlineTag from '../components/ui/OverlineTag';
import Button from '../components/ui/Button';

export default function Compare() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aivoiceagentsforhomeservices.co.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://aivoiceagentsforhomeservices.co.uk/ai-voice-agent-vs-call-centre" }
        ]
    };

    return (
        <>
            <SEOHead
                title="AI Voice Agent vs Call Centre for Tradesmen UK | Honest Comparison"
                description="Comparing AI phone answering software against traditional call centres (like Moneypenny) and standard voicemail for UK trades businesses."
                schema={schema}
                path="/ai-voice-agent-vs-call-centre"
            />

            <SectionWrapper bg="soft" className="pt-10 md:pt-16 pb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <OverlineTag>HONEST COMPARISON</OverlineTag>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
                        AI Voice Agent vs Traditional Answering Service — Which Is Right for Your Trade?
                    </h1>
                    <p className="text-lg text-text leading-relaxed">
                        There are brilliant human call centres out there. We're not saying they're bad. We're saying for 90% of local tradespeople, they are overkill, overpriced, and often don't actually understand the difference between a combi boiler and a fuse board.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper bg="white">
                <div className="max-w-6xl mx-auto overflow-x-auto">
                    <table className="w-full min-w-[800px] border-collapse bg-white">
                        <thead>
                            <tr className="border-b-2 border-dark text-left">
                                <th className="py-6 px-4 font-display text-xl w-1/4">Feature</th>
                                <th className="py-6 px-4 font-display text-xl text-primary w-1/4">AI Voice Agent</th>
                                <th className="py-6 px-4 font-display text-xl text-dark/70 w-1/4">Traditional Service</th>
                                <th className="py-6 px-4 font-display text-xl text-dark/40 w-1/4">Your Answerphone</th>
                            </tr>
                        </thead>
                        <tbody className="text-[15px] divide-y divide-border">
                            <tr className="hover:bg-surface-soft transition-colors">
                                <td className="py-5 px-4 font-semibold text-dark">Cost</td>
                                <td className="py-5 px-4 text-primary font-bold">From £97/mo flat</td>
                                <td className="py-5 px-4">£1-2/call (~£150+/mo)</td>
                                <td className="py-5 px-4 line-through text-text-light">Free (but costly)</td>
                            </tr>
                            <tr className="hover:bg-surface-soft transition-colors">
                                <td className="py-5 px-4 font-semibold text-dark">Available</td>
                                <td className="py-5 px-4 font-medium"><span className="text-success mr-2">✓</span>24/7/365</td>
                                <td className="py-5 px-4 text-text">Business hours mostly</td>
                                <td className="py-5 px-4 text-text">Always on, rarely answered</td>
                            </tr>
                            <tr className="hover:bg-surface-soft transition-colors">
                                <td className="py-5 px-4 font-semibold text-dark">Response time</td>
                                <td className="py-5 px-4 font-medium"><span className="text-success mr-2">✓</span>Under 1 second</td>
                                <td className="py-5 px-4 text-text">15-30 seconds</td>
                                <td className="py-5 px-4 text-coral">Never</td>
                            </tr>
                            <tr className="hover:bg-surface-soft transition-colors">
                                <td className="py-5 px-4 font-semibold text-dark">Knows your trade</td>
                                <td className="py-5 px-4 font-medium"><span className="text-success mr-2">✓</span>Yes — trained on your business</td>
                                <td className="py-5 px-4 text-warning">Generic script reading</td>
                                <td className="py-5 px-4 text-text-light">N/A</td>
                            </tr>
                            <tr className="hover:bg-surface-soft transition-colors">
                                <td className="py-5 px-4 font-semibold text-dark">Handles emergencies</td>
                                <td className="py-5 px-4 font-medium"><span className="text-success mr-2">✓</span>Flags and escalates instantly</td>
                                <td className="py-5 px-4 text-text">Just takes a message</td>
                                <td className="py-5 px-4 text-coral">Records voicemail nobody listens to</td>
                            </tr>
                            <tr className="hover:bg-surface-soft transition-colors">
                                <td className="py-5 px-4 font-semibold text-dark">Setup time</td>
                                <td className="py-5 px-4 font-medium"><span className="text-success mr-2">✓</span>1 day</td>
                                <td className="py-5 px-4 text-text">1-2 weeks</td>
                                <td className="py-5 px-4 text-text-light">Already there</td>
                            </tr>
                            <tr className="hover:bg-surface-soft transition-colors">
                                <td className="py-5 px-4 font-semibold text-dark">Contracts</td>
                                <td className="py-5 px-4 font-medium"><span className="text-success mr-2">✓</span>None — monthly rolling</td>
                                <td className="py-5 px-4 text-warning">Usually 3-12 months</td>
                                <td className="py-5 px-4 text-text-light">N/A</td>
                            </tr>
                            <tr className="hover:bg-surface-soft transition-colors">
                                <td className="py-5 px-4 font-semibold text-dark">Call capacity</td>
                                <td className="py-5 px-4 font-medium"><span className="text-success mr-2">✓</span>Unlimited simultaneous</td>
                                <td className="py-5 px-4 text-text">Depends on staff</td>
                                <td className="py-5 px-4 text-text">One at a time</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="max-w-3xl mx-auto mt-16 p-8 bg-surface-soft border border-border rounded-2xl">
                    <h3 className="font-display text-2xl text-dark mb-4">A Note on the Big Names</h3>
                    <p className="text-text leading-relaxed">
                        Brands like Moneypenny, AllDayPA, and Message Direct have been serving businesses well for years. They are genuinely great if you want a real human person answering the phone, and you run a law firm or estate agency.
                    </p>
                    <p className="text-text leading-relaxed mt-4">
                        But for most tradespeople — especially sole traders — they are pricey, often limited to office hours, and the operators simply don't have the technical knowledge to answer properly. They don't know a combi boiler from a megger. Our AI is trained specifically on your trade.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper bg="gradient" className="text-center">
                <h2 className="text-white font-display text-4xl mb-8">Stop paying £1.50 for someone to say "He's not available."</h2>
                <Button href="/pricing" variant="secondary-light" className="bg-white !text-primary hover:!bg-white/90">View AI Pricing</Button>
            </SectionWrapper>
        </>
    );
}
