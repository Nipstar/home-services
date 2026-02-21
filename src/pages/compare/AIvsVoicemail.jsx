import CompareTemplate from '../../components/layout/CompareTemplate';

export default function AIvsVoicemail() {
    return (
        <CompareTemplate
            title="AI Voice Answering vs Voicemail | Stop Losing Trade Leads"
            description="85% of people hang up on voicemails. See why replacing your voicemail with an AI Voice Agent is the easiest way to grow your trade business."
            canonicalUrl="/compare/ai-vs-voicemail"
            overline="AI VS TRADITIONAL VOICEMAIL"
            h1="Why Voicemail is Costing You Jobs Every Week"
            introText="Voicemail is free. But the cost of missed jobs is immense. When a customer has an emergency, they will not wait for the beep. They will hang up and call your competitor. Here is how AI changes the game entirely."
            tableHeaders={[
                "Feature",
                "AI Voice Agent",
                "Standard Voicemail"
            ]}
            tableRows={[
                { feature: "Customer Experience", ai: "Natural, helpful, two-way conversation", competitor1: "'Please leave a message after the tone... beep.'" },
                { feature: "Hang-Up Rate", ai: "Less than 5%", competitor1: "Over 85% of new callers hang up" },
                { feature: "Lead Qualification", ai: "Asks triage questions (postcode, emergency type)", competitor1: "None. You hope they leave enough info." },
                { feature: "Speed to Book", ai: "Can confirm viewing slots immediately", competitor1: "Requires you to play phone tag later" },
                { feature: "Professional Image", ai: "Sounds like a large, organised firm", competitor1: "Sounds like a one-man band who is busy" }
            ]}
            conclusionTitle="The True Cost of 'Free' Voicemail"
            conclusionText1="Yes, standard voicemail is free with your phone contract. But if an emergency callout is worth £150, and 8 out of 10 people hang up on your voicemail, you are losing £1,200 for every 10 calls you miss."
            conclusionText2="An AI Voice Agent answers the phone, understands the problem, reassures the customer, and secures the lead. It stops them dialing the next plumber on Google."
        />
    );
}
