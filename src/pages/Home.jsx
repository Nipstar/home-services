import SEOHead from '../components/layout/SEOHead';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import OverlineTag from '../components/ui/OverlineTag';
import TrustBar from '../components/ui/TrustBar';
import ConversationMockup from '../components/hero/ConversationMockup';
import MissedCallsStack from '../components/hero/MissedCallsStack';
import FeatureCard from '../components/ui/FeatureCard';
import TradeCard from '../components/ui/TradeCard';
import StatCard from '../components/ui/StatCard';
import StepCard from '../components/ui/StepCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import DemoSection from '../components/ui/DemoSection';
import { features } from '../data/features';
import { trades } from '../data/trades';
import { testimonials } from '../data/testimonials';
import { stats } from '../data/stats';
import { MoreTradesIcon } from '../components/svg/TradeIcons';
import PremiumTrustBadges from '../components/ui/PremiumTrustBadges';

export default function Home() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.aivoiceagentsforhomeservices.co.uk",
        "name": "AI Voice Agents for Home Services",
        "description": "AI phone answering for UK tradespeople. Answers calls 24/7, books jobs, captures leads while you're on the tools.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hampshire",
            "addressCountry": "UK"
        }
    };

    return (
        <>
            <SEOHead
                title="AI Voice Agents for Home Services UK | Never Miss a Job Again"
                description="AI phone answering for UK tradespeople. Answers calls 24/7, books jobs, captures leads while you're on the tools. From £97/mo. Try free."
                schema={schema}
            />

            {/* Hero Section */}
            <SectionWrapper bg="white" className="pt-10 md:pt-16 pb-20 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <OverlineTag>CERTIFIED RETELL AI PARTNER</OverlineTag>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] text-dark mb-6 tracking-tight">
                            Your Phone Rings. You're Under a Sink. The Job Goes to Someone Else.
                        </h1>
                        <p className="text-text text-lg mb-8 leading-relaxed max-w-xl">
                            Not anymore. AI voice agents built specifically for UK tradespeople — plumbers, sparks, heating engineers, builders, and every trade in between.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <Button href="/pricing" variant="primary">See Plans & Pricing &rarr;</Button>
                            <Button href="#demo" variant="secondary">Hear Our AI In Action</Button>
                        </div>
                        <p className="text-sm text-text-light font-medium mb-8">
                            Starting from £97/month &middot; No contracts &middot; Live in 24 hours
                        </p>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <PremiumTrustBadges />
                        </div>
                    </div>
                    <div className="lg:pl-8 flex justify-center lg:justify-end">
                        <ConversationMockup />
                    </div>
                </div>
            </SectionWrapper>

            {/* Trust Bar */}
            <div className="bg-surface-soft">
                <TrustBar title="Integrates with the platforms you already use" />
            </div>

            {/* The Problem */}
            <SectionWrapper bg="white">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <MissedCallsStack />
                    </div>
                    <div className="order-1 lg:order-2">
                        <OverlineTag>THE REAL COST OF A MISSED CALL</OverlineTag>
                        <h2 className="font-display text-3xl md:text-4xl text-dark mb-6">
                            "I'll Ring Them Back Later..."<br className="hidden md:block" /> (You Won't. And They Won't Wait.)
                        </h2>
                        <div className="space-y-4 text-text leading-relaxed">
                            <p>
                                You're halfway up a ladder. Under a boiler. Elbow-deep in a U-bend. Your phone's going off in your pocket but you can't answer — you're covered in muck, your hands are full, and the customer in front of you is watching.
                            </p>
                            <p>
                                By the time you ring back at 6pm with a cuppa in hand, <strong>they've already booked another plumber.</strong> Sound familiar? Every missed call is money walking out the door.
                            </p>
                            <p>
                                Here's the thing — 34% of tradespeople have admitted losing actual work from not picking up. And <strong>80% of callers won't try you again</strong> if you don't answer first time round.
                            </p>
                            <p>
                                The mad thing is — most tradesmen know this but think 'that's just how it is.' It doesn't have to be.
                            </p>
                        </div>
                        <blockquote className="mt-8 border-l-4 border-primary pl-5 py-2 text-lg italic text-dark font-medium leading-relaxed bg-surface-accent/30 rounded-r-lg">
                            "What if someone answered every single call — instantly, professionally, 24 hours a day — for less than the daily rate of a part-time member of staff?"
                        </blockquote>
                    </div>
                </div>
            </SectionWrapper>

            {/* Stats Bar */}
            <SectionWrapper bg="gradient" className="text-white relative z-10 py-16 md:py-20 shadow-xl shadow-primary/20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <StatCard value={stats[1].value} label="of inbound calls to home service businesses go completely unanswered" />
                    <StatCard value={stats[2].value} label="of callers won't leave a voicemail — they'll ring the next bloke on Google" />
                    <StatCard value={stats[0].value} label="lost every year by the average UK tradesperson from missed calls alone" />
                    <StatCard value={stats[6].value} label="more likely to book if you respond within 5 minutes" />
                </div>
            </SectionWrapper>

            {/* The Solution — Features */}
            <SectionWrapper bg="white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <OverlineTag>THE SOLUTION</OverlineTag>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark mb-6">
                        Meet Your New AI Team Member (Who Never Pulls a Sickie)
                    </h2>
                    <p className="text-lg text-text">
                        No tech knowledge needed. No contracts. Up and running in a day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} {...feature} />
                    ))}
                </div>
            </SectionWrapper>

            {/* Built for Your Trade */}
            <SectionWrapper bg="soft">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <OverlineTag>BUILT FOR YOUR TRADE</OverlineTag>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark mb-6">
                        Your Trade. Your Problems. Your AI.
                    </h2>
                    <p className="text-lg text-text">
                        Every trade has different pain points, different emergencies, different busy seasons. We build AI voice agents that actually understand your work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['plumbers', 'electricians', 'heating-engineers', 'builders', 'locksmiths'].map(slug => {
                        const trade = trades[slug];
                        return (
                            <TradeCard key={slug} trade={trade.name} tagLine={trade.tagLine} accent={trade.accent} icon={trade.icon} link={`/ai-voice-agent-for-${slug}`} />
                        );
                    })}

                    <TradeCard
                        trade="More Trades Coming"
                        tagLine="Roofers, cleaners, landscapers, painters, and more coming soon"
                        accent="#6C3CE1"
                        icon={MoreTradesIcon}
                        link="/trades"
                    />
                </div>
            </SectionWrapper>

            {/* How It Works */}
            <SectionWrapper bg="white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <OverlineTag>GETTING STARTED</OverlineTag>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark mb-6">
                        Up and Running in a Day. Seriously.
                    </h2>
                    <p className="text-lg text-text">
                        No tech knowledge required. We do the heavy lifting — you just tell us about your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
                    <StepCard number="1" title="We Learn Your Business" description="Tell us about your trade, your services, your patch, your pricing. We train your AI to sound like it's been working for you for years." />
                    <StepCard number="2" title="We Set Up Your Number" description="Get a local UK number or divert your existing one. Calls route to your AI when you can't answer. Simple as that." />
                    <StepCard number="3" title="You Get On With the Job" description="Every call answered. Every lead captured. Every message sent straight to your phone. You focus on the work that earns you money." isLast />
                </div>

                <div className="text-center">
                    <Button href="/pricing" variant="primary">Get Started — It's Free for 7 Days</Button>
                </div>
            </SectionWrapper>

            {/* Testimonials */}
            <SectionWrapper bg="soft">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <OverlineTag>REAL RESULTS</OverlineTag>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark mb-12">
                        What Tradespeople Are Saying
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                    {/* TODO: Replace with real testimonials when available */}
                </div>
            </SectionWrapper>

            {/* Live Demo */}
            <SectionWrapper bg="accent" id="demo">
                <DemoSection />
            </SectionWrapper>

            {/* Final CTA */}
            <SectionWrapper bg="white" className="pb-24">
                <div className="bg-gradient-to-br from-[#2D1B69] via-primary to-primary-light rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                    {/* Background glow effects */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-dark/40 blur-3xl"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                            Ready to Stop Losing Jobs to Missed Calls?
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                            No card required. No contracts. No tech knowledge needed. If you can answer a phone, you can set this up.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <Button href="/pricing" variant="secondary-light" className="bg-white !text-primary hover:!bg-white/90 !border-transparent">Try It Free for 7 Days</Button>
                            <Button href="https://cal.com/antek-automation/30min" variant="secondary-light">Book a 15-Min Demo</Button>
                        </div>
                        <p className="text-sm font-medium text-white/50 tracking-wide">
                            No card required &middot; No contracts &middot; Cancel anytime
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
