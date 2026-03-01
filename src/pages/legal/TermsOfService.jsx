import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../../components/ui/SectionWrapper';

export default function TermsOfService() {
    return (
        <>
            <Helmet>
                <html lang="en-GB" />
                <title>Terms of Service | Antek Automation</title>
                <meta name="description" content="Terms of Service and Business conditions for AI Voice Agents for Home Services." />
                <link rel="canonical" href="https://www.aivoiceagentsforhomeservices.co.uk/terms" />
            </Helmet>

            <SectionWrapper bg="white" className="pt-12 md:pt-20 pb-20 border-b border-border">
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h1 className="font-display text-4xl text-dark mb-8">Terms of Service</h1>
                    <p className="text-text-light text-sm mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

                    <h2>1. Introduction</h2>
                    <p>
                        These Terms of Service ("Terms") dictate the rules and regulations for the use of the services provided by Antek Automation ("we", "us", "our"), trading as AI Voice Agents for Home Services.
                    </p>
                    <p>
                        By accessing this website and utilizing our AI voice agent services, we assume you accept these Terms in full. Do not continue to use our services if you do not agree to all the Terms stated on this page.
                    </p>

                    <h2>2. Provision of Service</h2>
                    <p>
                        We provide artificial intelligence-driven telephone answering and appointment booking agents customised for UK-based tradesmen and home service businesses.
                        The service operates via a diverting or dedicated phone number mapping system.
                    </p>

                    <h2>3. Subscription and Payments</h2>
                    <ul>
                        <li>Our service is provided on a rolling monthly subscription basis as detailed on our Pricing page.</li>
                        <li>There are strictly <strong>no lock-in contracts</strong> and <strong>no hidden setup fees</strong>.</li>
                        <li>You may cancel your subscription at any time. Cancellations take effect at the end of the current paid billing cycle. No partial refunds are issued for mid-month cancellations.</li>
                        <li>"Fair use" limits apply to our unlimited tiers to prevent abuse, robocall routing, or system exhaustion. We reserve the right to throttle or terminate accounts actively seeking to abuse these limits.</li>
                    </ul>

                    <h2>4. AI Performance and Liability</h2>
                    <p>
                        While our AI agents are highly advanced and strictly prompted to follow your business rules, natural language processing can occasionally result in misunderstood intents, hallucinated responses, or failure to capture data due to background noise or heavy accents.
                    </p>
                    <p>
                        <strong>Limitation of Liability:</strong> Antek Automation shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from lost business, missed appointments, or miscommunications caused by the AI agent. The tradesperson assumes the inherent risks of automated communication.
                    </p>

                    <h2>5. Data and Privacy (Data Processing Addendum)</h2>
                    <p>
                        In providing this service, Antek Automation acts as a Data Processor, while you (the business owner) act as the Data Controller under the UK GDPR.
                        You are responsible for ensuring you have the legal right to record and process caller information.
                    </p>
                    <p>
                        We utilise secure third-party infrastructure (e.g., OpenAI, Retell AI) to transcribe and process calls. You agree to this data flow as part of the service.
                    </p>

                    <h2>6. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of England and Wales.
                        Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
                    </p>

                    <h2>7. Contact Information</h2>
                    <p>
                        For any queries regarding these Terms, please contact us:<br />
                        <strong>Antek Automation</strong><br />
                        Hampshire, United Kingdom<br />
                        Email: info@antekautomation.com
                    </p>
                </div>
            </SectionWrapper>
        </>
    );
}
