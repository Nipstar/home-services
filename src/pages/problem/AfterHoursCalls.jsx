import ProblemTemplate from '../../components/layout/ProblemTemplate';

export default function AfterHoursCalls() {
    return (
        <ProblemTemplate
            slug="after-hours-calls-tradesmen"
            title="Handling After Hours Calls for UK Tradesmen | AI Voice Agents"
            description="Stop working 24 hours a day just to answer the phone. See how UK tradesmen use AI to handle after-hours emergency calls and out-of-hours leads."
            overline="THE AFTER-HOURS TRAP"
            h1="Why You Can't Shut Off At 5pm (But You Really Need To)"
            introHighlight="The tools go in the back of the van at 5:30. But the business? That stays switched on. If you're running a trade business, after-hours calls are the ultimate double-edged sword."
            paragraphs={[
                "Let's be honest. Customers don't only experience emergencies between the hours of 9 and 5. Boilers break down at 9pm on a Tuesday. Pipes burst at 2am on a Sunday. People get locked out of their houses when they've come back from a night out.",
                "And even for non-emergencies, when do people sit down to sort out their lives? After work. Usually around 6:30pm to 8:30pm. They sit on the sofa, remember they need a quote for an extension, and start ringing builders.",
                "If you don't answer, they ring the next bloke on Checkatrade.",
                "But handling after-hours calls ruins your personal life. You're trying to eat dinner, put the kids to bed, or just finally watch something on the telly, and the phone buzzes. You answer it because you know every missed call is money walking out the door. You're trapped."
            ]}
            bulletPoints={[
                "Customers expect a 24/7 response in the Amazon Prime era",
                "If you let it go to voicemail, 85% of people will just hang up",
                "Answering the phone during family time burns you out and strains relationships",
                "Traditional answering services charge £1.50+ per call and just take a basic message",
                "Missing genuine high-value emergencies (like a flood or lockout) costs you premium weekend rates"
            ]}
        />
    );
}
