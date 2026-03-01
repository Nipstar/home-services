import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../components/ui/SectionWrapper';
import { trackConversion } from '../utils/tracking';
import logoUrl from '../assets/logo.svg';

export default function OrderConfirmed() {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const subscriptionId = searchParams.get('subscription_id');
    const source = searchParams.get('source');

    useEffect(() => {
        // Fire conversion tracking on mount
        // The actual total would come from the session verification in production
        trackConversion(0, 'unknown');
    }, []);

    return (
        <>
            <Helmet>
                <html lang="en-GB" />
                <title>Order Confirmed | AI Voice Agents for Home Services</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Minimal header — logo only */}
            <div className="bg-white border-b border-border py-4">
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logoUrl} alt="AI Voice Agents Logo" className="w-10 h-10" />
                        <div className="flex flex-col">
                            <span className="text-dark font-display text-xl leading-none">AI Voice Agents</span>
                            <span className="text-text-light text-xs font-medium tracking-wide mt-0.5">for Home Services</span>
                        </div>
                    </Link>
                </div>
            </div>

            <SectionWrapper bg="white" className="pt-16 md:pt-24 pb-24">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Success icon */}
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <span className="text-green-500 text-5xl">✓</span>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl text-dark mb-6">
                        You're All Set!
                    </h1>

                    <p className="text-lg text-text mb-12 leading-relaxed">
                        Welcome to AI Voice Agents for Home Services. Here's what happens next:
                    </p>

                    {/* Next steps */}
                    <div className="bg-surface-soft rounded-2xl p-8 md:p-10 text-left space-y-6 mb-12 border border-border">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary">1</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-1">We'll ring you within 2 hours</h3>
                                <p className="text-text text-sm">During business hours, one of our team will call to configure your AI agent with your business details.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary">2</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-1">We set up your AI voice agent</h3>
                                <p className="text-text text-sm">We'll train it on your business — your trade, services, service area, pricing, and diary.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary">3</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-1">Your AI goes live — usually within 24 hours</h3>
                                <p className="text-text text-sm">You'll get a UK number (or divert your existing one) and never miss a call again.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact info */}
                    <div className="space-y-4">
                        <p className="text-text font-medium">Got questions? We're here to help.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="tel:03330389960" className="font-display text-2xl text-primary hover:text-primary-dark transition-colors">
                                0333 038 9960
                            </a>
                            <span className="hidden sm:block text-border">|</span>
                            <a href="mailto:info@antekautomation.com" className="text-primary hover:text-primary-dark transition-colors font-medium">
                                info@antekautomation.com
                            </a>
                        </div>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-text-light uppercase tracking-wider mt-12 pt-8 border-t border-border">
                        <span className="flex items-center gap-1.5">🛡️ GDPR Compliant</span>
                        <span className="flex items-center gap-1.5">📞 UK Voice & Number</span>
                        <span className="flex items-center gap-1.5">🔓 No Contracts</span>
                        <span className="flex items-center gap-1.5">⭐ Certified Retell AI Partner</span>
                    </div>
                </div>
            </SectionWrapper>

            {/* Minimal footer */}
            <div className="bg-[#1A1A2E] text-white/50 py-6 text-center text-sm">
                <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-4">
                    <span>&copy; {new Date().getFullYear()} Antek Automation</span>
                    <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </>
    );
}
