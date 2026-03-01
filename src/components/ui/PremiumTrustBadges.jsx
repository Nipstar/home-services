import React from 'react';

const PremiumTrustBadges = ({ className = '' }) => {
    return (
        <div className={`flex flex-wrap gap-3 mt-8 ${className}`}>
            {/* GDPR Target: Green theme */}
            <div className="group relative flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-md hover:border-success/30 transition-all duration-300 ease-out hover:-translate-y-0.5">
                <div className="flex items-center justify-center p-1 bg-success/10 rounded-full group-hover:bg-success/20 transition-colors">
                    <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <span className="text-xs md:text-sm font-semibold text-text group-hover:text-dark transition-colors">GDPR Compliant</span>
            </div>

            {/* UK Voice & Number: Purple theme */}
            <div className="group relative flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-md hover:border-primary/30 transition-all duration-300 ease-out hover:-translate-y-0.5">
                <div className="flex items-center justify-center p-1 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <span className="text-xs md:text-sm font-semibold text-text group-hover:text-dark transition-colors">UK Voice & Number</span>
            </div>

            {/* No Contracts: Coral/Red theme */}
            <div className="group relative flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-md hover:border-coral/30 transition-all duration-300 ease-out hover:-translate-y-0.5">
                <div className="flex items-center justify-center p-1 bg-coral/10 rounded-full group-hover:bg-coral/20 transition-colors">
                    <svg className="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                </div>
                <span className="text-xs md:text-sm font-semibold text-text group-hover:text-dark transition-colors">No Contracts</span>
            </div>

            {/* Partner: Gold theme + Shimmer */}
            <div className="group relative flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-br from-[#FFFAEB] to-white rounded-full border border-warning/40 shadow-[0_4px_15px_-3px_rgba(245,158,11,0.15)] hover:shadow-[0_8px_25px_-5px_rgba(245,158,11,0.25)] hover:border-warning/60 transition-all duration-300 ease-out hover:-translate-y-0.5 overflow-hidden">
                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out bg-gradient-to-r from-transparent via-white/80 to-transparent z-0"></div>

                <div className="relative z-10 flex items-center justify-center p-1 bg-warning/20 rounded-full group-hover:bg-warning/30 transition-colors shadow-inner">
                    <svg className="w-4 h-4 text-warning drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </div>
                <span className="relative z-10 text-xs md:text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#b45309]">
                    Certified Retell AI Partner
                </span>
            </div>
        </div>
    );
};

export default PremiumTrustBadges;
