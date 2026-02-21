import ProblemTemplate from '../../components/layout/ProblemTemplate';

export default function TooBusyToAnswer() {
    return (
        <ProblemTemplate
            slug="too-busy-to-answer-phone-tradesman"
            title="Too Busy to Answer the Phone? The Tradesman's Dilemma"
            description="When your trade business gets busy, your customer service drops. Learn how to break the cycle of being too busy to answer the phone to new leads."
            overline="THE SUCCESS CYCLE"
            h1="The Brutal Irony of Being a Successful Tradesman"
            introHighlight="When you're quiet, you stare at the phone willing it to ring. When you're busy, you stare at the phone wishing it would stop."
            paragraphs={[
                "Every successful one-man-band or small trade business hits the same brick wall. It's the point where you have exactly enough work to be run off your feet, but not quite enough guaranteed long-term revenue to justify hiring a £25,000-a-year full-time receptionist.",
                "This is the 'Too Busy Trap'. Because you are busy doing the work, you stop answering the phone to new enquiries. Because you stop answering new enquiries, your pipeline for next month dries up. Because your pipeline dries up, you have a quiet month next month.",
                "So you spend money on advertising again. The phone rings. You get busy. You stop answering the phone. The cycle repeats.",
                "The only way to break the feast-or-famine cycle is to decouple your lead generation from your physical time. Your new enquiries need to be captured, triaged, and booked while you are busy earning today's money."
            ]}
            bulletPoints={[
                "The feast-or-famine cycle is caused by poor lead capture during busy periods",
                "Hiring staff is a massive financial commitment with NI, pension, and sick pay",
                "Stopping a job to answer a 'tyre kicker' enquiry wastes your valuable time",
                "High-quality commercial clients expect businesses they work with to answer promptly during business hours"
            ]}
        />
    );
}
