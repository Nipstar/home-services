import CompareTemplate from '../../components/layout/CompareTemplate';

export default function AnsweringServicePrices() {
    return (
        <CompareTemplate
            title="Answering Service Prices for Tradesmen | Hidden Costs Explained"
            description="Compare UK answering service prices. Stop paying per-call or per-minute rates. See how fixed-fee AI solutions are cheaper and better for trades."
            canonicalUrl="/compare/answering-service-prices"
            overline="PRICING BREAKDOWN"
            h1="The Hidden Costs of UK Answering Services"
            introText="Many call answering services advertise 'From £15 a month', but bury the extra per-call, per-minute, and out-of-hours fees in the fine print. Let's look at what you actually end up paying."
            tableHeaders={[
                "Cost Structure",
                "AI Voice Agent",
                "Traditional Call Centre"
            ]}
            tableRows={[
                { feature: "Base Retainer", ai: "From £97/month", competitor1: "£15 - £50/month" },
                { feature: "Per-Call Fees", ai: "Included in tier limits (pennies thereafter)", competitor1: "£1.00 to £2.50 per call answered" },
                { feature: "Per-Minute Fees", ai: "None. Conversations can take as long as needed.", competitor1: "Extra 90p per minute after the first minute" },
                { feature: "Out-of-Hours Surplus", ai: "None. 24/7 is standard.", competitor1: "Often double rate for evenings/weekends" },
                { feature: "Setup Fees", ai: "£0 via simple self-serve integration", competitor1: "£50 - £150 onboarding fee" },
                { feature: "Spam Call Charges", ai: "Filtered instantly; no charge", competitor1: "You often pay the base fee if they answer a spammer" }
            ]}
            conclusionTitle="Why Per-Call Pricing Punishes Success"
            conclusionText1="When you run a marketing campaign or hit the winter boiler rush, your phone rings constantly. Under a traditional model, your bill skyrockets just when you're busiest, often hitting £200-£300 a month."
            conclusionText2="With an AI Voice Agent, you pay a predictable, flat or easily managed software fee. You aren't punished for having a successful marketing month."
        />
    );
}
