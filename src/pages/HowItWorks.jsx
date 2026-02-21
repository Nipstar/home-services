import SEOHead from '../components/layout/SEOHead';
import SectionWrapper from '../components/ui/SectionWrapper';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import OverlineTag from '../components/ui/OverlineTag';
import { howItWorksFaqs } from '../data/faqs';

export default function HowItWorks() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivoiceagentsforhomeservices.co.uk/" },
                    { "@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://www.aivoiceagentsforhomeservices.co.uk/how-ai-voice-agents-work" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": howItWorksFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                }))
            },
            {
                "@type": "HowTo",
                "name": "How an AI Voice Agent Works for Tradespeople",
                "step": [
                    { "@type": "HowToStep", "name": "Your Phone Rings, You Can't Answer", "text": "Normal day, hands full, phone buzzing. Instead of voicemail, call diverts to your AI voice agent." },
                    { "@type": "HowToStep", "name": "Your AI Picks Up Like a Receptionist", "text": "Answers with your business name. UK accent. Knows your trade, services, area, availability." },
                    { "@type": "HowToStep", "name": "It Has a Proper Conversation", "text": "Asks name, address, problem, urgency. Answers basic questions about your services and prices." },
                    { "@type": "HowToStep", "name": "You Get the Details Instantly", "text": "Summary sent to your phone (text or email). Caller's name, number, postcode, what they need, urgency level." },
                    { "@type": "HowToStep", "name": "You Ring Back and Book the Job", "text": "Armed with all info, you call them back to book the job." }
                ]
            }
        ]
    };

    return (
        <>
            <SEOHead
                title="How AI Voice Agents Work for Tradespeople | Plain English Guide"
                description="We explain exactly how our AI phone answering works for UK tradespeople. No tech jargon, just exactly what happens when a customer calls."
                schema={schema}
                path="/how-ai-voice-agents-work"
            />

            <SectionWrapper bg="soft" className="pt-10 md:pt-16 pb-16 border-b border-border">
                <div className="max-w-3xl mx-auto">
                    <OverlineTag>PLAIN ENGLISH GUIDE</OverlineTag>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark mb-8 leading-tight">
                        How It Actually Works (No Tech Waffle, We Promise)
                    </h1>
                    <div className="text-lg md:text-xl text-text leading-relaxed font-medium space-y-6">
                        <p>Right, let's cut through the nonsense. You've probably seen 'AI' plastered all over the internet and thought 'that's not for me, I'm a plumber not a programmer.' Fair enough.</p>
                        <p>But this is genuinely simple — and you don't need to understand how it works to use it. You don't know how your van's ECU works either, but you still drive to jobs every day.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper bg="white">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {[
                            { num: '1', title: 'Your Phone Rings, You Can\'t Answer', text: "Normal day, hands full, phone buzzing. Instead of voicemail, call diverts to your AI voice agent. It's an automatic setting on your phone — ring standard 15 seconds, then divert." },
                            { num: '2', title: 'Your AI Picks Up Like a Receptionist', text: "Answers instantly with your business name. 'Good morning, you're through to Dave's Plumbing.' It has a natural UK accent. It knows your trade, your services, your patch, your availability." },
                            { num: '3', title: 'It Has a Proper Conversation', text: "It asks their name, address, what the problem is, and how urgent it is. It answers basic questions about your services and ballpark prices (if you want it to). It handles it exactly like a human receptionist would." },
                            { num: '4', title: 'You Get the Details Instantly', text: "The second they hang up, a summary is sent straight to your phone by text or email. You see the caller's name, number, postcode, exactly what they need, and whether it's an emergency." },
                            { num: '5', title: 'You Ring Back and Book the Job', text: "Armed with all the info, you ring back when you're free. 'Hi Sarah, I understand you've got a leaky kitchen tap in SO16? I can pop round Thursday morning if that works?' The job is secured before you even picked up the phone." }
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 md:gap-8">
                                <div className="shrink-0 flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light text-white font-display text-xl flex items-center justify-center shadow-lg">
                                        {step.num}
                                    </div>
                                    {idx !== 4 && <div className="w-px h-full bg-border mt-4 hidden md:block" />}
                                </div>
                                <div className="pb-12 border-b border-border md:border-0 md:pb-0">
                                    <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
                                    <p className="text-lg text-text leading-relaxed">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper bg="soft">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <OverlineTag>NO STUPID QUESTIONS</OverlineTag>
                        <h2 className="font-display text-3xl md:text-5xl text-dark mb-6">Frequently Asked Questions</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-card border border-border p-8 md:p-10">
                        {howItWorksFaqs.map((faq, i) => (
                            <FAQAccordion key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper bg="gradient" className="text-center">
                <div className="max-w-2xl mx-auto text-white">
                    <h2 className="font-display text-4xl mb-6">Makes sense? Let's get it set up.</h2>
                    <p className="text-lg mb-8 text-white/80">Try it out on your own phone completely free for 7 days. If you don't like it, cancel with a click.</p>
                    <Button href="/pricing" variant="secondary-light" className="bg-white !text-primary hover:!bg-white/90 !border-transparent w-full sm:w-auto">View Pricing & Start Trial</Button>
                </div>
            </SectionWrapper>
        </>
    );
}
