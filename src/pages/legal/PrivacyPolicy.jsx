import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../../components/ui/SectionWrapper';

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <html lang="en-GB" />
                <title>Privacy Policy | Antek Automation Ltd</title>
                <meta name="description" content="Privacy Policy for AI Voice Agents for Home Services, powered by Antek Automation Ltd." />
                <link rel="canonical" href="https://www.aivoiceagentsforhomeservices.co.uk/privacy-policy" />
            </Helmet>

            <SectionWrapper bg="white" className="pt-12 md:pt-20 pb-20 border-b border-border">
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h1 className="font-display text-4xl text-dark mb-8">Privacy Policy</h1>
                    <p className="text-text-light text-sm mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to AI Voice Agents for Home Services ("we," "our," or "us"), a trading name of Antek Automation Ltd.
                        We respect your privacy and are committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                    </p>
                    <p>
                        This Privacy Policy explains how we collect, use, and share information when you use our website (aivoiceagentsforhomeservices.co.uk) and our AI voice agent services.
                    </p>

                    <h2>2. The Data We Collect</h2>
                    <p>We may collect and process the following data about you:</p>
                    <ul>
                        <li><strong>Identity Data:</strong> First name, last name, trade/business name.</li>
                        <li><strong>Contact Data:</strong> Email address, telephone numbers, business address.</li>
                        <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, operating system.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                        <li><strong>Communication Data:</strong> Transcripts and recordings of AI voice agent conversations (processed strictly as a Data Processor on your behalf).</li>
                    </ul>

                    <h2>3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use it in the following circumstances:</p>
                    <ul>
                        <li>To perform the contract we are about to enter into or have entered into with you.</li>
                        <li>To run and manage your AI voice agent, including processing caller transcripts to send you job summaries via SMS, email, or webhook.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>

                    <h2>4. Third-Party Services & Sub-processors</h2>
                    <p>
                        To provide our AI voice agents, we utilise industry-leading third-party sub-processors, specifically Retell AI (for conversational intelligence) and associated LLM models.
                        We hold data processing agreements with these providers ensuring they meet strict security standards and do not use your customer data to train their public models.
                    </p>

                    <h2>5. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way.
                        We limit access to your personal data to those employees, agents, contractors, and other third parties who have a strict business need to know.
                    </p>

                    <h2>6. Your Legal Rights</h2>
                    <p>Under data protection laws in the UK, you have rights including:</p>
                    <ul>
                        <li>Request access to your personal data.</li>
                        <li>Request correction of your personal data.</li>
                        <li>Request erasure of your personal data.</li>
                        <li>Object to processing of your personal data.</li>
                        <li>Request restriction of processing your personal data.</li>
                    </ul>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy or our privacy practices, please contact us at:<br />
                        <strong>Antek Automation Ltd</strong><br />
                        Hampshire, United Kingdom<br />
                        Email: info@antekautomation.com
                    </p>

                </div>
            </SectionWrapper>
        </>
    );
}
