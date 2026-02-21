import { Link } from 'react-router-dom';
import SEOHead from '../../components/layout/SEOHead';
import SectionWrapper from '../../components/ui/SectionWrapper';
import OverlineTag from '../../components/ui/OverlineTag';
import Button from '../../components/ui/Button';
import { trades } from '../../data/trades';

export default function AllTrades() {
    const allTradesList = Object.values(trades);

    return (
        <>
            <SEOHead
                title="AI Voice Agents for UK Tradespeople | All Supported Trades"
                description="We build bespoke AI phone answering agents for plumbers, electricians, builders, roofers, and every other UK home service trade."
                canonicalUrl="/trades"
            />

            {/* Hero */}
            <SectionWrapper bg="gradient" className="pt-32 pb-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <OverlineTag>CHOOSE YOUR TRADE</OverlineTag>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
                        Built Specifically for <span className="text-primary-light">Your Business</span>
                    </h1>
                    <p className="text-lg text-white/70 mb-8">
                        Every trade is different. A boiler breakdown isn't the same as a garden redesign. We train our AI voice agents to understand the exact terminology, pricing, and emergencies of your specific trade.
                    </p>
                </div>
            </SectionWrapper>

            {/* Trades Grid */}
            <SectionWrapper bg="soft">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allTradesList.map((trade) => {
                        const Icon = trade.icon;
                        return (
                            <Link
                                key={trade.slug}
                                to={`/ai-voice-agent-for-${trade.slug}`}
                                className="group relative overflow-hidden bg-white border border-border rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"
                            >
                                {/* Top border accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                                    style={{ backgroundColor: trade.accent }}
                                />

                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-dark mb-2">{trade.name}</h3>
                                        <p className="text-sm text-text-light pr-4">{trade.tagLine}</p>
                                    </div>
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
                                        style={{ backgroundColor: `${trade.accent}15`, color: trade.accent }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="font-semibold text-sm inline-flex items-center gap-1" style={{ color: trade.accent }}>
                                    Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Can't see trade box */}
                <div className="mt-16 bg-white border border-border rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-card">
                    <h3 className="text-xl font-bold text-dark mb-3">Can't see your trade?</h3>
                    <p className="text-text mb-6">
                        We build custom AI voice agents for any home service business. Whether you're a tree surgeon, a driveways specialist, or a chimney sweep, we can build an agent that sounds like an expert.
                    </p>
                    <Button href="/contact">Contact Us for a Custom Build</Button>
                </div>
            </SectionWrapper>
        </>
    );
}
