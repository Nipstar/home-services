export default function MissedCallsStack() {
    return (
        <div className="relative mx-auto w-full max-w-sm mt-8 pb-12">
            {/* Background Cards */}
            <div className="absolute top-0 right-0 left-0 bg-white border border-border rounded-xl p-4 shadow-sm opacity-60 transform translate-y-8 rotate-3 z-0 h-24 border-l-4 border-l-border" />
            <div className="absolute top-0 right-2 left-[-8px] bg-white border border-border rounded-xl p-4 shadow-sm opacity-80 transform translate-y-4 -rotate-2 z-10 h-24 border-l-4 border-l-border" />

            {/* Front Card 1 */}
            <div className="relative bg-white border border-border rounded-xl p-5 shadow-card z-30 transform hover:-translate-y-1 transition-transform border-l-4 border-l-[#EF4444] min-h-[96px] mb-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        <span className="font-semibold text-dark text-sm">Missed Call — Sarah Mitchell</span>
                    </div>
                    <span className="text-xs text-text-light font-medium">2 mins ago</span>
                </div>
                <div className="flex justify-between items-end pl-4">
                    <span className="text-sm text-text">Emergency leak</span>
                    <span className="font-semibold text-[#EF4444] bg-[#FEF2F2] px-2 py-1 rounded">~£250</span>
                </div>
            </div>

            {/* Front Card 2 */}
            <div className="relative bg-white border border-border rounded-xl p-5 shadow-card z-20 transform hover:-translate-y-1 transition-transform border-l-4 border-l-[#EF4444] min-h-[96px] mb-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        <span className="font-semibold text-dark text-sm">Missed Call — James Cooper</span>
                    </div>
                    <span className="text-xs text-text-light font-medium">18 mins ago</span>
                </div>
                <div className="flex justify-between items-end pl-4">
                    <span className="text-sm text-text">Boiler service</span>
                    <span className="font-semibold text-[#EF4444] bg-[#FEF2F2] px-2 py-1 rounded">~£120</span>
                </div>
            </div>

            {/* Front Card 3 */}
            <div className="relative bg-white border border-border rounded-xl p-5 shadow-card z-10 transform hover:-translate-y-1 transition-transform border-l-4 border-l-[#EF4444] min-h-[96px]">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        <span className="font-semibold text-dark text-sm">Missed Call — Unknown</span>
                    </div>
                    <span className="text-xs text-text-light font-medium">1 hr ago</span>
                </div>
                <div className="flex justify-between items-end pl-4">
                    <span className="text-sm text-text italic">Didn't leave message</span>
                    <span className="font-semibold text-text-light bg-surface-soft px-2 py-1 rounded">~£??</span>
                </div>
            </div>

            {/* Total Tally Line */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 mt-6">
                <div className="h-px bg-border flex-grow"></div>
                <div className="font-bold text-coral bg-white px-4">Today's lost revenue: ~£370+</div>
                <div className="h-px bg-border flex-grow"></div>
            </div>
        </div>
    );
}
