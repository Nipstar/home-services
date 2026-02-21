import ProblemTemplate from '../../components/layout/ProblemTemplate';

export default function WeekendEmergencyCalls() {
    return (
        <ProblemTemplate
            slug="weekend-emergency-calls-tradesmen"
            title="Managing Weekend Emergency Calls for Tradesmen | UK"
            description="Should you offer 24/7 emergency callouts? See how AI Voice Agents let you capture high-value weekend trade jobs without ruining your days off."
            overline="THE WEEKEND DILEMMA"
            h1="Weekends: Work, Rest, or Catching Up?"
            introHighlight="The highest-paying jobs happen at the strangest hours. But if you're 'always on', you'll burn out. What's the solution?"
            paragraphs={[
                "Emergency callouts on a Saturday night or Sunday afternoon are the most lucrative jobs in the trade industry. A standard £80 fix on a Wednesday afternoon easily becomes a £250+ cash job on a Sunday.",
                "But nobody wants to sit staring at their phone on a Sunday while they're having a roast dinner with the family. The mental toll of being 'on call' 24/7 is the primary reason so many independent tradesmen suffer from burnout.",
                "If you turn your phone off, you lose thousands of pounds a year to competitors. If you leave it on, you never truly get a day of rest.",
                "The middle ground used to be an answering service. But human operators cost £2 a call, and they often miscategorise emergencies. An AI voice agent acts as your weekend gatekeeper. It answers the call, determines if it's genuinely an emergency based on your exact rules, quotes your weekend rates, and only bothers you if it's a high-value job you actually want to take."
            ]}
            bulletPoints={[
                "Weekend emergency rates are typically 1.5x to 3x higher than standard daytime rates",
                "Callers in an emergency state panic and will call up to 5 companies until someone answers",
                "Many weekend callers just want to book a standard slot for Monday, but calling them back on Monday is too late",
                "Prequalifying weekend jobs by clearly stating callout fees upfront filters out the time-wasters"
            ]}
        />
    );
}
