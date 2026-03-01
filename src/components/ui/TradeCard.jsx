import { Link } from 'react-router-dom';

export default function TradeCard({ trade, tagLine, accent, icon: Icon, link }) {
    return (
        <Link
            to={link}
            className="relative block bg-gradient-to-br from-[#1A1A2E] to-[#2D2D3D] rounded-2xl p-8 border border-white/10 overflow-hidden group hover:-translate-y-1.5 shadow-card hover:shadow-card-hover transition-all duration-300 min-h-[220px] flex flex-col justify-end"
        >
            {/* Top Border Accent */}
            <div
                className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: accent }}
            />

            {/* Background Icon */}
            <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 w-20 h-20">
                <Icon />
            </div>

            <div className="relative z-10 w-[85%]">
                <h3 className="text-2xl font-semibold text-white mb-2">{trade}</h3>
                <p className="text-white/80 text-sm mb-5 leading-snug">{tagLine}</p>
                <span
                    className="font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: accent }}
                >
                    Learn more &rarr;
                </span>
            </div>
        </Link>
    );
}
