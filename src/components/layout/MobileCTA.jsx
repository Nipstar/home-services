import { Link } from 'react-router-dom';

export default function MobileCTA() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/90 to-transparent z-40">
            <Link
                to="/pricing"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-base rounded-full py-3.5 shadow-cta active:scale-[0.98] transition-all"
            >
                <span className="text-white/70 text-sm">From £97/mo</span>
                <span className="w-px h-4 bg-white/30" />
                <span>Get Started &rarr;</span>
            </Link>
        </div>
    );
}
