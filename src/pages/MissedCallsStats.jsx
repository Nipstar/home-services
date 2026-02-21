import SEOHead from '../components/layout/SEOHead';
import SectionWrapper from '../components/ui/SectionWrapper';
import OverlineTag from '../components/ui/OverlineTag';
import MissedCallsStack from '../components/hero/MissedCallsStack';
import StatCard from '../components/ui/StatCard';
import Button from '../components/ui/Button';
import { stats } from '../data/stats';

export default function MissedCallsStats() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Missed Calls Are Costing UK Tradesmen £24,000 a Year | The Data",
        "description": "Comprehensive statistics and data on missed calls in the UK home services industry, their financial impact, and customer behavior.",
        "author": { "@type": "Organization", "name": "AI Voice Agents for Home Services" }
    };

    return (
        <>
            <SEOHead
                title="Missed Calls Are Costing UK Tradesmen £24,000 a Year | The Data"
                description="Comprehensive statistics and data on missed calls in the UK home services industry, their financial impact, and customer behavior."
                schema={schema}
                path="/missed-calls-costing-tradesmen-money"
            />

            <SectionWrapper bg="soft" className="pt-12 md:pt-20 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <OverlineTag>THE DATA BEHIND THE PROBLEM</OverlineTag>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
                        Missed Calls Are Costing UK Tradesmen Thousands Every Year. Here Are the Numbers.
                    </h1>
                    <p className="text-lg md:text-xl text-text leading-relaxed">
                        We've compiled the most up-to-date statistics on how UK customers behave when trying to book a tradesperson, and exactly how much money is walking out the door when the phone goes to voicemail.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper bg="white">
                <div className="max-w-3xl mx-auto prose prose-lg prose-indigo prose-headings:font-display prose-headings:text-dark text-text leading-relaxed">
                    <h2 className="text-3xl font-bold mb-6">The Hard Reality of Not Picking Up</h2>
                    <p className="mb-6">
                        If you run a trades business, you already know missing calls is bad. But when you look at the raw data, the financial impact is staggering. According to <em>Quality Company Formations</em>, UK businesses lose an estimated <strong>£30 billion</strong> annually specifically due to missed calls. The worst hit sector? Local home services.
                    </p>

                    <div className="my-12 p-8 bg-surface-soft border-l-4 border-primary rounded-r-2xl">
                        <h3 className="text-2xl font-bold text-dark mb-4">The 80% Rule</h3>
                        <p className="text-lg m-0">
                            According to Forbes, <strong>80% of callers sent to voicemail won't leave a message</strong> because they don't believe they will be heard or called back. They will simply hang up and dial the next number on Google.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 mt-12">Customer Expectations in 2026</h2>
                    <p className="mb-6">
                        Consumer impatience is at an all-time high. A study by the Brevet Group showed that responding to an enquiry within 5 minutes makes you <strong>21 times</strong> more likely to book the job compared to responding after 30 minutes.
                    </p>
                    <p className="mb-12">
                        But how often do tradespeople actually respond that quickly? Rarely. <em>Digital X Marketing</em> found that a massive <strong>{stats.find(s => s.label.includes('unanswered')).value}</strong> of inbound calls to small home service businesses go completely unanswered.
                    </p>

                    <div className="flex justify-center my-12 hidden md:flex">
                        <MissedCallsStack />
                    </div>

                    <h2 className="text-3xl font-bold mb-6 mt-12">The £24,000 Annual Leak</h2>
                    <p className="mb-6">
                        Let's break down the maths for an average independent tradesman. A recent survey of 220 tradespeople by Fix Radio found that <strong>34%</strong> explicitly admitted to losing work simply because they were too busy on site to answer the phone.
                    </p>
                    <p className="mb-6">
                        If an average job (or emergency callout) is worth £250, and you miss just two viable leads a week to a competitor, that's £500 a week. Over a 48-week working year, that equates to <strong>£24,000</strong>. This assumes you only miss two actual jobs. Many established plumbers or electricians miss 5+ calls a day during busy seasons.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 mt-12">The Solution</h2>
                    <p className="mb-6">
                        You can't answer your phone safely while working. Voicemail is effectively a dead end. And human call centres are often prohibitively expensive (£1-2 per call).
                    </p>
                    <p className="mb-12">
                        This is why AI voice agents are becoming the standard for modern trades businesses. An AI answers instantly 24/7 without fail, captures the exact details of the job, and lets you focus on the work that pays.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mt-16 p-8 bg-dark rounded-3xl relative overflow-hidden text-center shadow-xl shadow-primary/20">
                    <h3 className="text-3xl font-display text-white mb-6">Stop contributing to these statistics.</h3>
                    <Button href="/pricing" variant="primary">Try an AI Voice Agent Free</Button>
                </div>
            </SectionWrapper>
        </>
    );
}
