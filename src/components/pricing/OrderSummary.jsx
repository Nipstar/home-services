import { plans, addons, calculateTotal } from '../../data/pricing';
import { ShieldIcon, PhoneBadgeIcon, StarBadgeIcon } from '../svg/LandingIcons';

export default function OrderSummary({ selectedPlan, selectedAddons, onScrollToForm }) {
    const plan = plans.find(p => p.id === selectedPlan);
    const total = calculateTotal(selectedPlan, selectedAddons);
    const chatbotTier = selectedAddons.chatbotTier
        ? addons.chatbot.tiers.find(t => t.id === selectedAddons.chatbotTier)
        : null;

    if (!plan) {
        return (
            <div className="bg-surface-soft rounded-2xl border border-border p-6 text-center">
                <p className="text-text font-medium">Select a plan to see your order summary</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-border shadow-card p-6">
            <h3 className="font-bold text-dark text-lg mb-6">Your Order</h3>

            <div className="space-y-4 mb-6">
                {/* Plan */}
                <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-text font-medium">
                        <span className="text-primary text-xs">✓</span>
                        {plan.name} Plan
                    </span>
                    <span className="font-bold text-dark">£{plan.price}/mo</span>
                </div>

                {/* Extra Minutes */}
                {selectedAddons.extraMinutes && (
                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2 text-text">
                            <span className="text-primary text-xs">✓</span>
                            Extra 100 Minutes
                        </span>
                        <span className="font-medium text-dark">£{addons.extraMinutes.price}/mo</span>
                    </div>
                )}

                {/* Chatbot Tier */}
                {chatbotTier && (
                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2 text-text">
                            <span className="text-primary text-xs">✓</span>
                            {chatbotTier.name}
                        </span>
                        <span className="font-medium text-dark">£{chatbotTier.price}/mo</span>
                    </div>
                )}
            </div>

            <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-dark text-lg">Monthly Total</span>
                    <span className="font-display text-3xl text-dark">£{total}</span>
                </div>
                <p className="text-xs text-text-light mt-1">/month · All prices inc. VAT</p>
            </div>

            <p className="text-xs text-text-light text-center font-medium mb-4">No contract · Cancel anytime</p>

            <button
                type="button"
                onClick={onScrollToForm}
                className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full py-4 shadow-cta hover:shadow-[0_6px_20px_rgba(108,60,225,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
                Continue to Details &darr;
            </button>

            <div className="mt-6 space-y-3">
                <p className="text-xs text-text-light text-center">Setup: <strong className="text-dark">FREE</strong> (usually £149)</p>
                <div className="flex flex-col gap-2 pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-text-light">
                        <ShieldIcon className="w-4 h-4 shrink-0" />
                        <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-light">
                        <PhoneBadgeIcon className="w-4 h-4 shrink-0" />
                        <span>UK Voice & Number</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-light">
                        <StarBadgeIcon className="w-4 h-4 shrink-0" />
                        <span>Certified Retell AI Partner</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Compact mobile version for sticky bottom bar
export function MobileOrderBar({ selectedPlan, selectedAddons, onScrollToForm }) {
    const plan = plans.find(p => p.id === selectedPlan);
    const total = calculateTotal(selectedPlan, selectedAddons);

    if (!plan) return null;

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div>
                    <p className="font-bold text-dark">{plan.name} Plan</p>
                    <p className="text-sm text-text">£{total}/mo · No contract</p>
                </div>
                <button
                    type="button"
                    onClick={onScrollToForm}
                    className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full px-6 py-3 text-sm shadow-cta cursor-pointer"
                >
                    Continue &darr;
                </button>
            </div>
        </div>
    );
}
