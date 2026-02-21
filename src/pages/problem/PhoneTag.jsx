import ProblemTemplate from '../../components/layout/ProblemTemplate';

export default function PhoneTag() {
    return (
        <ProblemTemplate
            slug="phone-tag-losing-customers"
            title="Stop Playing Phone Tag with Customers | UK Tradesmen"
            description="Missed call. Callback. No answer. Voicemail. The endless cycle of phone tag is losing you trade jobs. Here's how to stop it today."
            overline="THE ENDLESS CYCLE"
            h1="The Exhausting Game of Phone Tag"
            introHighlight="You missed their call at 11am. You rang back at 1pm, but they were in a meeting. They ring back at 3pm, but you're driving. The job goes nowhere."
            paragraphs={[
                "There is nothing more frustrating in business than 'phone tag'. It's the silent killer of productivity and lead conversion.",
                "Here's how it normally goes: A potential customer rings you while you're working. You miss the call. Two hours later, you wipe your hands down, get back in the van, and ring the number back. It rings out, because the customer has gone back to their desk and can't answer personal calls.",
                "So you leave a voicemail. They get out of work at 5:30pm and ring you back. But you're dealing with the kids' bath time, so you miss it.",
                "By 9am the next morning, that customer has simply rung a different firm who answered on the first ring, and the job is gone. You've wasted time, headspace, and lost revenue, all because neither of you were free at the exact same moment."
            ]}
            bulletPoints={[
                "Every round of phone tag drops the chance of closing the sale by over 40%",
                "It looks disorganised to the customer, damaging trust before the job begins",
                "It eats into your personal time — evenings are spent returning calls instead of relaxing",
                "Modern customers simply do not have the patience for multi-day communication cycles"
            ]}
        />
    );
}
