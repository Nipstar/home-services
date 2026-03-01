import Button from './Button';

export default function MiniPricingCard({ tradeSlug }) {
    const href = tradeSlug ? `/pricing?trade=${tradeSlug}` : '/pricing';

    return (
        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-6 md:p-8 border border-primary/10 text-center">
            <p className="font-display text-2xl md:text-3xl text-dark mb-2">Your AI Receptionist</p>
            <p className="text-text mb-6">
                From <strong className="text-dark">£97/month</strong> &middot; No contract &middot; Answers calls, books jobs, texts you.
            </p>
            <Button href={href} variant="primary">
                Choose Your Plan &rarr;
            </Button>
            <p className="text-xs text-text-light mt-3">Free setup &middot; Live in 24 hours &middot; Cancel anytime</p>
        </div>
    );
}
