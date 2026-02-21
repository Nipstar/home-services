import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import logoUrl from '../../assets/logo.svg';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [tradesDropdownOpen, setTradesDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setTradesDropdownOpen(false);
    }, [location]);

    const trades = [
        { name: 'Plumbers', path: '/ai-voice-agent-for-plumbers' },
        { name: 'Electricians', path: '/ai-voice-agent-for-electricians' },
        { name: 'Heating Engineers', path: '/ai-voice-agent-for-heating-engineers' },
        { name: 'Builders', path: '/ai-voice-agent-for-builders' },
        { name: 'Locksmiths', path: '/ai-voice-agent-for-locksmiths' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 bg-[#1A1A2E] border-b border-white/8 ${isScrolled ? 'backdrop-blur-md bg-[#1A1A2E]/90' : ''}`}>
            <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 relative z-50">
                    <img src={logoUrl} alt="AI Voice Agents Logo" className="w-8 h-8 md:w-10 md:h-10" />
                    <div className="flex flex-col">
                        <span className="text-white font-display text-xl md:text-2xl leading-none">AI Voice Agents</span>
                        <span className="text-white/60 text-xs font-medium tracking-wide mt-1">for Home Services</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <div
                        className="relative"
                        onMouseEnter={() => setTradesDropdownOpen(true)}
                        onMouseLeave={() => setTradesDropdownOpen(false)}
                    >
                        <button className="text-white/90 hover:text-white font-medium flex items-center gap-1.5 py-4">
                            For Trades
                            <svg className={`w-4 h-4 transition-transform ${tradesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        {/* Dropdown */}
                        {tradesDropdownOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-dark-card border border-white/10 rounded-2xl shadow-xl py-3 animate-fade-in">
                                {trades.map((trade) => (
                                    <Link key={trade.path} to={trade.path} className="block px-5 py-2.5 text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                                        {trade.name}
                                    </Link>
                                ))}
                                <div className="h-px bg-white/10 my-2"></div>
                                <Link to="/trades" className="block px-5 py-2.5 text-primary-light font-medium hover:text-primary-50 transition-colors">
                                    All Trades &rarr;
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/how-ai-voice-agents-work" className="text-white/90 hover:text-white font-medium transition-colors">How It Works</Link>
                    <Link to="/pricing" className="text-white/90 hover:text-white font-medium transition-colors">Pricing</Link>
                    <Link to="/ai-voice-agent-vs-call-centre" className="text-white/90 hover:text-white font-medium transition-colors">Compare</Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Button href="/#demo" variant="primary" className="py-2.5 px-6 shrink-0">Try Our AI &rarr;</Button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#1A1A2E] pt-24 px-5 pb-8 overflow-y-auto lg:hidden flex flex-col">
                    <nav className="flex flex-col gap-6 text-xl font-display">
                        <div>
                            <div className="text-white/50 text-sm font-sans font-semibold uppercase tracking-wider mb-4">For Trades</div>
                            <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                                {trades.map((trade) => (
                                    <Link key={trade.path} to={trade.path} className="text-white/90">{trade.name}</Link>
                                ))}
                                <Link to="/trades" className="text-primary-light">All Trades &rarr;</Link>
                            </div>
                        </div>
                        <Link to="/how-ai-voice-agents-work" className="text-white/90">How It Works</Link>
                        <Link to="/pricing" className="text-white/90">Pricing</Link>
                        <Link to="/ai-voice-agent-vs-call-centre" className="text-white/90">Compare</Link>
                        <Link to="/missed-calls-costing-tradesmen-money" className="text-white/90">Missed Calls Stats</Link>
                    </nav>
                    <div className="mt-auto pt-8">
                        <Button href="/#demo" className="w-full">Try Our AI &rarr;</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
