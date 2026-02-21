import ProblemTemplate from '../../components/layout/ProblemTemplate';

export default function CantAnswerOnJob() {
    return (
        <ProblemTemplate
            slug="cant-answer-phone-on-the-job"
            title="Why Tradesmen Can't Answer the Phone On Site | AI Solutions"
            description="You can't answer the phone when you're covered in mud or holding a live wire. See how AI voice agents solve the biggest problem for UK trades on site."
            overline="ON THE TOOLS"
            h1="Why You Physically Cannot Answer the Phone on a Job"
            introHighlight="There is a massive disconnect between the people who run businesses in offices, and the people who run them from the back of a Transit van."
            paragraphs={[
                "If you work at a desk, answering the phone consists of clicking a mouse or picking up a headset. If you're a tradesman, answering the phone is an entirely different story.",
                "You might be halfway up a ladder. You might have your hands covered in plaster. You might be working with 240V electricity. You might have ear defenders on while using a petrol Stihl saw. You might be in a customer's loft surrounded by fibreglass.",
                "When the phone rings, it's not an interruption — it's a safety hazard. Or a massive inconvenience. So you let it ring out.",
                "But your customer sitting in their nice warm office doesn't know that. They just know they rang a number they found on Google, nobody answered, and so they rang the next number. The physical reality of your job is actively preventing you from growing your business."
            ]}
            bulletPoints={[
                "Health and safety restricts phone usage when operating loud or dangerous machinery",
                "Answering the phone with dirty hands ruins thousands of pounds worth of smartphones",
                "Stopping mid-task (like when laying fast-setting adhesive) ruins the job",
                "Customers standing right in front of you think it's incredibly rude if you start taking other quotes while on their time"
            ]}
        />
    );
}
