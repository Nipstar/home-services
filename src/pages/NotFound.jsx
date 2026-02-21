import { Link } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';

export default function NotFound() {
    return (
        <>
            <SEOHead
                title="Page Not Found | AI Voice Agents for Home Services"
                description="The page you're looking for cannot be found."
                canonicalUrl="/404"
            />

            <SectionWrapper bg="white" className="flex-grow flex items-center text-center py-32 md:py-48">
                <div className="max-w-2xl mx-auto">
                    <div className="w-24 h-24 bg-surface-accent rounded-full flex items-center justify-center mx-auto mb-8">
                        <span className="text-4xl">🕳️</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display text-dark mb-6">
                        Looks like this page has done a runner.
                    </h1>
                    <p className="text-xl text-text mb-10">
                        Bit like the last plumber you tried to call. Let's get you back on track before you start leaving angry voicemails.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/">Back to Homepage</Button>
                        <Button href="/trades" variant="secondary">See All Trades</Button>
                        <Button href="/pricing" variant="secondary">View Pricing</Button>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
