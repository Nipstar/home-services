import { plans } from '../../data/pricing';
import { trackPlanSelected } from '../../utils/tracking';
import { SoloTraderIcon, BusyOperationIcon, GrowingTeamIcon } from '../svg/LandingIcons';

const planIcons = {
    starter: SoloTraderIcon,
    professional: BusyOperationIcon,
    growth: GrowingTeamIcon,
};

export default function PlanSelector({ selectedPlan, onSelectPlan }) {
    return (
        <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => {
                const isSelected = selectedPlan === plan.id;
                const isHighlighted = plan.highlighted;
                const PlanIcon = planIcons[plan.id];

                return (
                    <button
                        key={plan.id}
                        type="button"
                        onClick={() => {
                            onSelectPlan(plan.id);
                            trackPlanSelected(plan.name, plan.price);
                        }}
                        className={`relative rounded-3xl p-8 text-left flex flex-col transition-all duration-300 cursor-pointer ${
                            isSelected
                                ? 'ring-[3px] ring-primary shadow-[0_0_24px_rgba(108,60,225,0.18)] scale-[1.02]'
                                : 'opacity-[0.88] hover:opacity-100 hover:shadow-card-hover hover:-translate-y-0.5'
                        } ${
                            isHighlighted
                                ? 'bg-dark text-white border border-primary'
                                : 'bg-white border border-border'
                        }`}
                        aria-pressed={isSelected}
                        aria-label={`Select ${plan.name} plan at £${plan.price} per month`}
                    >
                        {plan.badge && (
                            <div className="absolute -top-4 inset-x-0 flex justify-center">
                                <span className="bg-gradient-to-r from-primary to-primary-light text-white text-xs font-bold uppercase tracking-widest py-1.5 px-6 rounded-full shadow-cta">
                                    {plan.badge}
                                </span>
                            </div>
                        )}

                        <div className="flex items-center gap-3 mb-3">
                            {PlanIcon && (
                                <PlanIcon className={`w-7 h-7 ${isHighlighted ? 'text-white/70' : 'text-primary'}`} />
                            )}
                            <h3 className={`text-2xl font-bold ${isHighlighted ? 'text-white' : 'text-dark'}`}>
                                {plan.name}
                            </h3>
                        </div>
                        <p className={`mb-6 text-sm ${isHighlighted ? 'text-white/80' : 'text-text'}`}>
                            {plan.description}
                        </p>

                        <div className="mb-6">
                            <span className={`text-[2.75rem] font-display leading-none ${isHighlighted ? 'text-white' : 'text-dark'}`}>
                                £{plan.price}
                            </span>
                            <span className={`text-sm font-medium ${isHighlighted ? 'text-white/80' : 'text-text-light'}`}>
                                /month
                            </span>
                        </div>

                        <div className={`w-full py-3 rounded-full font-semibold text-sm text-center transition-all mb-8 ${
                            isSelected
                                ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-cta'
                                : isHighlighted
                                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                    : 'bg-surface-soft text-dark border border-border hover:border-primary'
                        }`}>
                            {isSelected ? '✓ Selected' : 'Select This Plan'}
                        </div>

                        <ul className={`space-y-3.5 flex-grow ${isHighlighted ? 'text-white/90' : ''}`}>
                            {plan.features.map((feat, i) => (
                                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                                    <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 ${
                                        isHighlighted
                                            ? 'bg-primary-light/20 text-primary-light'
                                            : 'bg-primary/10 text-primary'
                                    }`}>✓</span>
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <p className={`mt-6 text-xs font-medium ${isHighlighted ? 'text-white/80' : 'text-text-light'}`}>
                            Live in 24 hours · No contract
                        </p>
                    </button>
                );
            })}
        </div>
    );
}
