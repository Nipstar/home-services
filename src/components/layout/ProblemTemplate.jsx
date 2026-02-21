import SEOHead from './SEOHead';
import SectionWrapper from '../ui/SectionWrapper';
import OverlineTag from '../ui/OverlineTag';
import Button from '../ui/Button';
import MissedCallsStack from '../hero/MissedCallsStack';
import TrustBar from '../ui/TrustBar';

export default function ProblemTemplate({
    title,
    description,
    overline,
    h1,
    introHighlight,
    paragraphs,
    bulletPoints,
    slug
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": h1,
        "description": description
    };

    return (
        <>
            <SEOHead
                title={title}
                description={description}
                path={`/${slug}`}
                ogType="article"
                schema={schema}
            />

            {/* Hero Section */}
            <SectionWrapper bg="white" className="pt-24 lg:pt-32 border-b border-border">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <OverlineTag>{overline}</OverlineTag>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark mb-6 leading-tight">
                            {h1}
                        </h1>
                        <p className="text-xl md:text-2xl text-text leading-relaxed">
                            {introHighlight}
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <MissedCallsStack />
                    </div>
                </div>
            </SectionWrapper>

            {/* Content Section */}
            <SectionWrapper bg="soft">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-card border border-border">
                    <div className="prose prose-lg prose-indigo max-w-none">
                        {paragraphs.map((para, index) => (
                            <p key={index} className="text-text leading-relaxed mb-6 font-body">
                                {para}
                            </p>
                        ))}

                        {bulletPoints && bulletPoints.length > 0 && (
                            <div className="bg-surface-accent/30 p-8 rounded-2xl my-8 border border-primary/10">
                                <h3 className="text-xl font-bold text-dark mb-4">The Reality Check:</h3>
                                <ul className="space-y-4 m-0 p-0 list-none">
                                    {bulletPoints.map((point, index) => (
                                        <li key={index} className="flex gap-3 text-text">
                                            <span className="text-primary flex-shrink-0 mt-1">→</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <h3 className="text-2xl font-display text-dark mt-10 mb-4">How AI Voice Agents Fix This</h3>
                        <p className="text-text leading-relaxed">
                            You don't need a full-time receptionist. An AI voice agent answers your phone 24/7/365, holding natural conversations with your customers just like a real human. It captures their details, understands their problem, and texts you the summary instantly. You get to finish your job in peace, and your customer gets booked in instead of calling your competitor.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            <TrustBar />

            {/* CTA */}
            <SectionWrapper bg="gradient" className="text-center">
                <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur border border-white/20 p-10 md:p-16 rounded-3xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6">
                        Ready to Stop Losing Jobs to Missed Calls?
                    </h2>
                    <p className="text-xl text-white/80 mb-10">
                        Try our AI voice agents completely free for 7 days. If it doesn't pay for itself, walk away.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="https://cal.com/antekautomation" variant="secondary-light">Book a 15-Min Demo</Button>
                        <Button variant="primary">Start Your 7-Day Free Trial</Button>
                    </div>
                    <p className="text-white/50 text-sm mt-6">No credit card required. Cancel anytime.</p>
                </div>
            </SectionWrapper>
        </>
    );
}
