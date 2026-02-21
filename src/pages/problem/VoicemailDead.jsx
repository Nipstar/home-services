import ProblemTemplate from '../../components/layout/ProblemTemplate';

export default function VoicemailDead() {
    return (
        <ProblemTemplate
            slug="voicemail-killing-your-trade-business"
            title="Why Voicemail Is Killing Your UK Trade Business Leads"
            description="85% of people hang up when they hear a voicemail beep. Learn why voicemail is costing your trade business thousands, and how AI can fix it instantly."
            overline="THE DEATH OF THE BEEP"
            h1="Voicemail is Dead. And It's Killing Your Business."
            introHighlight="When was the last time you happily left a voicemail? Exactly. Your customers hate it just as much as you do."
            paragraphs={[
                "We've looked at the data across hundreds of UK home service businesses. When a customer rings a tradesman and gets the 'Please leave a message after the tone' greeting, a massive 85% of them immediately hang up.",
                "Why? Because we live in an instant world. If a customer is ringing you, they've got a problem they want solved right now. A voicemail tells them 'I am busy and I might ringing you back later tonight, or maybe tomorrow, or maybe never.'",
                "So what do they do? They go straight back to Google and dial the next plumber, builder, or sparky on the list. They will keep ringing down the list until a human (or something that sounds like one) actually answers the phone.",
                "The craziest part? You're still paying the marketing costs to get your phone to ring. You paid Checkatrade, or you paid for your van signwriting, or you spent time building your reputation. The phone rang. You did the hard part. And then you lost the lead to the beep."
            ]}
            bulletPoints={[
                "85% of inbound callers to small businesses will not leave a voicemail",
                "79% of those callers will contact a competitor within 30 minutes",
                "Voicemail creates double the work: you have to listen to it, take notes, and then play phone tag trying to ring them back",
                "Younger homeowners (Millennials and Gen Z) actively avoid leaving voice messages under any circumstances"
            ]}
        />
    );
}
