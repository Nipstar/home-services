import { useState } from 'react';
import { featureComparison } from '../../data/pricing';

function CellValue({ value }) {
    if (value === true) return <span className="text-success font-bold">✓</span>;
    if (value === false) return <span className="text-text-light">—</span>;
    return <span className="text-sm font-medium text-dark">{value}</span>;
}

export default function FeatureComparison() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-soft/50 transition-colors cursor-pointer"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-dark text-lg">Full Feature Comparison</span>
                <span className={`text-text-light transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>

            {isOpen && (
                <div className="border-t border-border overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-surface-soft">
                                <th className="text-left p-4 font-semibold text-dark min-w-[200px]">Feature</th>
                                <th className="text-center p-4 font-semibold text-dark w-28">Starter</th>
                                <th className="text-center p-4 font-semibold text-primary w-28">Professional</th>
                                <th className="text-center p-4 font-semibold text-dark w-28">Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {featureComparison.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-soft/30'}>
                                    <td className="p-4 text-text font-medium">{row.feature}</td>
                                    <td className="p-4 text-center"><CellValue value={row.starter} /></td>
                                    <td className="p-4 text-center bg-primary/[0.03]"><CellValue value={row.professional} /></td>
                                    <td className="p-4 text-center"><CellValue value={row.growth} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
