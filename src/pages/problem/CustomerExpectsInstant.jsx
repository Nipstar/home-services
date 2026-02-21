import ProblemTemplate from '../../components/layout/ProblemTemplate';

export default function CustomerExpectsInstant() {
    return (
        <ProblemTemplate
            slug="customer-expects-instant-response"
            title="Why Customers Demand Instant Responses from Trades | UK"
            description="The Amazon Prime era has ruined customer patience. If you don't answer instantly, they move on. Here is how AI helps UK tradesmen keep up."
            overline="THE NEW REALITY"
            h1="Welcome to the 'Amazon Prime' Era of Trade Customers"
            introHighlight="Fifteen years ago, a customer would leave a message on your answering machine and happily wait two days for you to call them back. Those days are dead."
            paragraphs={[
                "Modern consumers have been conditioned by Uber, Amazon Prime, and Deliveroo to expect instant gratification. When they want something, they want it now. When they have a problem, they expect to speak to someone immediately who can fix it.",
                "This is a massive headache for UK tradespeople. You aren't Amazon. You're a bloke in a van doing hard physical graft. But the customer doesn't care. Their expectation of customer service has been set by billion-pound tech companies.",
                "If you don't answer the phone within four rings, they assume you're disorganised, out of business, or 'don't want the work'. So they open up Google Maps, find the next business down the list, and press call.",
                "You can't change consumer behaviour. Complaining about it won't pay the mortgage. The only solution is to adapt — by giving them the instant response they crave, without having to actually drop your tools to do it."
            ]}
            bulletPoints={[
                "Consumers are 21x more likely to convert if they get a response within 5 minutes",
                "Over 60% of consumers cite 'fast response times' as the primary reason they chose a service provider",
                "Patience for 'leave a message' systems is at an all-time low across all demographics",
                "A fast response builds immediate trust — it proves you are reliable and professional before you've even picked up a spanner"
            ]}
        />
    );
}
