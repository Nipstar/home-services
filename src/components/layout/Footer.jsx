import { Link } from 'react-router-dom';
import logoUrl from '../../assets/logo.svg';

export default function Footer() {
    return (
        <footer className="bg-[#1A1A2E] text-white/70 pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column (takes up 2 cols on lg) */}
                    <div className="lg:col-span-2 lg:pr-8">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img src={logoUrl} alt="AI Voice Agents Logo" className="w-10 h-10 md:w-12 md:h-12" />
                            <div className="flex flex-col">
                                <span className="text-white font-display text-2xl leading-none">AI Voice Agents</span>
                                <span className="text-white/80 text-sm font-medium tracking-wide mt-1">for Home Services</span>
                            </div>
                        </Link>
                        <p className="text-white/80 mb-6 font-medium">Stop playing secretary. Start getting paid.</p>
                        <p className="text-sm">Powered by Antek Automation — Hampshire, UK</p>
                    </div>

                    {/* Trades */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Trades</h4>
                        <ul className="space-y-4">
                            <li><Link to="/ai-voice-agent-for-plumbers" className="hover:text-white transition-colors">Plumbers</Link></li>
                            <li><Link to="/ai-voice-agent-for-electricians" className="hover:text-white transition-colors">Electricians</Link></li>
                            <li><Link to="/ai-voice-agent-for-heating-engineers" className="hover:text-white transition-colors">Heating Engineers</Link></li>
                            <li><Link to="/ai-voice-agent-for-builders" className="hover:text-white transition-colors">Builders</Link></li>
                            <li><Link to="/ai-voice-agent-for-locksmiths" className="hover:text-white transition-colors">Locksmiths</Link></li>
                            <li><Link to="/trades" className="text-primary-light hover:text-primary-50 transition-colors">All Trades &rarr;</Link></li>
                        </ul>
                    </div>

                    {/* Learn */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Learn</h4>
                        <ul className="space-y-4">
                            <li><Link to="/how-ai-voice-agents-work" className="hover:text-white transition-colors">How It Works</Link></li>
                            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="/missed-calls-costing-tradesmen-money" className="hover:text-white transition-colors">Missed Call Stats</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="/voicemail-killing-your-trade-business" className="hover:text-white transition-colors">Is Voicemail Dead?</Link></li>
                            <li><Link to="/phone-tag-losing-customers" className="hover:text-white transition-colors">Stop Playing Phone Tag</Link></li>
                        </ul>
                    </div>

                    {/* Compare */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Compare</h4>
                        <ul className="space-y-4">
                            <li><Link to="/ai-voice-agent-vs-call-centre" className="hover:text-white transition-colors">AI vs Call Centre</Link></li>
                            <li><Link to="/compare/ai-vs-virtual-receptionist" className="hover:text-white transition-colors">AI vs Receptionist</Link></li>
                            <li><Link to="/compare/ai-vs-voicemail" className="hover:text-white transition-colors">AI vs Voicemail</Link></li>
                            <li><Link to="/compare/answering-service-prices" className="hover:text-white transition-colors">Price Comparison</Link></li>
                            <li><Link to="/compare/best-answering-service-tradesmen" className="hover:text-white transition-colors">Best for Tradesmen</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="https://antekautomation.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About Antek &rarr;</a></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* SEO Links Block (Solutions/Problems) */}
                <div className="pt-8 mb-8 border-t border-white/10 hidden md:block">
                    <p className="text-white/80 text-sm font-semibold mb-4 uppercase tracking-wider">Solutions & Use Cases</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                        <Link to="/after-hours-calls-tradesmen" className="hover:text-white transition-colors">After Hours Calls</Link>
                        <Link to="/cant-answer-phone-on-the-job" className="hover:text-white transition-colors">Can't Answer On Job</Link>
                        <Link to="/too-busy-to-answer-phone-tradesman" className="hover:text-white transition-colors">Too Busy To Answer</Link>
                        <Link to="/customer-expects-instant-response" className="hover:text-white transition-colors">Instant Response Expectations</Link>
                        <Link to="/weekend-emergency-calls-tradesmen" className="hover:text-white transition-colors">Weekend Emergencies</Link>
                        <Link to="/checkatrade-leads-missing-calls" className="hover:text-white transition-colors">Checkatrade Leads</Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
                    <p>&copy; {new Date().getFullYear()} Antek Automation.</p>
                    <div className="flex flex-wrap justify-center gap-4 gap-y-2">
                        <span className="flex items-center gap-1.5"><span className="text-primary-light">⭐</span> Certified Retell AI Partner</span>
                        <span className="hidden md:inline text-white/20">|</span>
                        <span className="flex items-center gap-1.5"><span className="text-success">🛡️</span> GDPR Compliant</span>
                        <span className="hidden md:inline text-white/20">|</span>
                        <span className="flex items-center gap-1.5"><span className="text-primary-light">🔓</span> No Contracts</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
