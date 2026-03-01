import { useState } from 'react';
import { calculateTotal } from '../../data/pricing';
import { trackCheckoutStarted, trackFormSubmitted } from '../../utils/tracking';
import { LockIcon } from '../svg/LandingIcons';

export default function PaymentButtons({ selectedPlan, selectedAddons, onPay, disabled }) {
    const [isLoading, setIsLoading] = useState(null); // 'stripe' | 'paypal' | null
    const total = calculateTotal(selectedPlan, selectedAddons);

    const handlePay = async (method) => {
        if (isLoading) return; // Prevent concurrent clicks on either button
        setIsLoading(method);
        trackFormSubmitted(total);
        trackCheckoutStarted(method, total);
        try {
            await onPay(method);
        } finally {
            setIsLoading(null);
        }
    };

    const isDisabled = disabled || !selectedPlan || isLoading;

    const spinner = (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
    );

    return (
        <div className="space-y-4">
            {/* Stripe (Card) Button — Primary */}
            <button
                type="button"
                onClick={() => handlePay('stripe')}
                disabled={isDisabled}
                className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full py-4 text-base shadow-cta hover:shadow-[0_6px_20px_rgba(108,60,225,0.4)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer flex items-center justify-center gap-2"
            >
                {isLoading === 'stripe' ? (
                    <span className="flex items-center gap-2">{spinner} Redirecting to Stripe...</span>
                ) : (
                    <>{'\uD83D\uDCB3'} Pay with Card &rarr;</>
                )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
                <div className="flex-grow h-px bg-border" />
                <span className="text-xs text-text-light font-medium">or</span>
                <div className="flex-grow h-px bg-border" />
            </div>

            {/* PayPal Button — Secondary */}
            <button
                type="button"
                onClick={() => handlePay('paypal')}
                disabled={isDisabled}
                className="w-full bg-[#FFC439] text-[#253B80] font-bold rounded-full py-4 text-base hover:bg-[#F0B72A] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer flex items-center justify-center gap-2 border border-[#FFC439]/80"
            >
                {isLoading === 'paypal' ? (
                    <span className="flex items-center gap-2">{spinner} Redirecting to PayPal...</span>
                ) : (
                    <>Pay with PayPal</>
                )}
            </button>

            {/* Trust signals */}
            <div className="text-center space-y-2 pt-3">
                <p className="flex items-center justify-center gap-1.5 text-xs text-text-light">
                    <LockIcon className="w-3.5 h-3.5 text-text-light" />
                    256-bit encryption · Payments secured by Stripe
                </p>
                <p className="text-xs text-text-light">
                    You'll be charged <strong className="text-dark">£{total}/month</strong>. First payment today.
                </p>
                <p className="text-xs text-text-light">
                    Cancel anytime — no penalties, no questions.
                </p>
            </div>
        </div>
    );
}
