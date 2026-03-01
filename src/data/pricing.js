// ──────────────────────────────────────────────
// Pricing Data — Plans, Add-ons, Feature Matrix
// ──────────────────────────────────────────────

export const plans = [
    {
        id: 'starter',
        name: 'Starter',
        price: 97,
        description: 'For sole traders wanting to catch missed calls',
        minutes: 100,
        availability: 'Business hours',
        badge: null,
        highlighted: false,
        features: [
            'Up to 100 conversation minutes',
            'Business hours availability',
            'UK local or mobile number',
            'SMS/email summaries',
        ],
        stripePriceId: import.meta.env.VITE_STRIPE_PRICE_STARTER || '',
    },
    {
        id: 'professional',
        name: 'Professional',
        price: 157,
        description: 'For busy tradespeople handling out-of-hours',
        minutes: 200,
        availability: '24/7/365',
        badge: 'Most Popular',
        highlighted: true,
        features: [
            'Up to 200 conversation minutes',
            '24/7/365 availability',
            'UK local or mobile number',
            'Emergency escalation paths',
            'Basic CRM/Calendar integration',
        ],
        stripePriceId: import.meta.env.VITE_STRIPE_PRICE_PROFESSIONAL || '',
    },
    {
        id: 'growth',
        name: 'Growth',
        price: 217,
        description: 'For growing teams and multi-van operations',
        minutes: 360,
        availability: '24/7/365',
        badge: null,
        highlighted: false,
        features: [
            'Up to 360 conversation minutes',
            '24/7/365 availability',
            'Multiple local lines included',
            'Website voice widget included',
            'Advanced integrations',
            'Full call recording',
        ],
        stripePriceId: import.meta.env.VITE_STRIPE_PRICE_GROWTH || '',
    },
];

export const addons = {
    extraMinutes: {
        id: 'extra_minutes',
        name: 'Extra 100 Minutes',
        price: 27,
        description: 'Add 100 extra conversation minutes to your monthly allowance',
        type: 'toggle',
        stripePriceId: import.meta.env.VITE_STRIPE_PRICE_ADDON_MINUTES || '',
    },
    chatbot: {
        id: 'chatbot',
        name: 'AI Website Chatbot',
        type: 'tiered',
        tiers: [
            {
                id: 'chatbot_basic',
                name: 'Basic Chatbot',
                price: 47,
                description: 'Lead capture widget for your website',
                features: [
                    'Lead capture chat widget',
                    'FAQ auto-responses',
                    '24/7 availability',
                    'Email notifications',
                ],
                stripePriceId: import.meta.env.VITE_STRIPE_PRICE_CHATBOT_BASIC || '',
            },
            {
                id: 'chatbot_pro',
                name: 'Pro Chatbot',
                price: 67,
                description: '24/7 smart chat with booking',
                features: [
                    'Everything in Basic, plus:',
                    '24/7 smart conversations',
                    'Appointment booking',
                    'WhatsApp handoff',
                    'Multi-page support',
                ],
                stripePriceId: import.meta.env.VITE_STRIPE_PRICE_CHATBOT_PRO || '',
            },
            {
                id: 'chatbot_integrated',
                name: 'Integrated Voice Agent',
                price: 97,
                badge: 'Best Value',
                description: 'One AI brain for phone + website',
                features: [
                    'Everything in Pro, plus:',
                    'Unified AI across phone & chat',
                    'Shared knowledge base',
                    'Seamless channel handoff',
                    'Full CRM sync',
                ],
                stripePriceId: import.meta.env.VITE_STRIPE_PRICE_CHATBOT_INTEGRATED || '',
            },
        ],
    },
};

export const featureComparison = [
    { feature: 'Included minutes/month', starter: '100', professional: '200', growth: '360' },
    { feature: '24/7 call answering', starter: false, professional: true, growth: true },
    { feature: 'UK voice & number', starter: true, professional: true, growth: true },
    { feature: 'Call transcripts', starter: true, professional: true, growth: true },
    { feature: 'SMS/email summaries', starter: true, professional: true, growth: true },
    { feature: 'Appointment booking', starter: false, professional: true, growth: true },
    { feature: 'Calendar integration', starter: false, professional: true, growth: true },
    { feature: 'Emergency call triage', starter: false, professional: true, growth: true },
    { feature: 'Custom greeting', starter: 'Basic', professional: 'Full', growth: 'Full' },
    { feature: 'CRM integration', starter: false, professional: false, growth: true },
    { feature: 'Multi-engineer routing', starter: false, professional: false, growth: true },
    { feature: 'WhatsApp notifications', starter: false, professional: true, growth: true },
    { feature: 'Priority support', starter: false, professional: false, growth: true },
    { feature: 'Setup fee', starter: 'Free', professional: 'Free', growth: 'Free' },
];

export const tradeOptions = [
    { value: 'plumber', label: 'Plumber' },
    { value: 'electrician', label: 'Electrician' },
    { value: 'heating-engineer', label: 'Heating Engineer' },
    { value: 'builder', label: 'Builder' },
    { value: 'locksmith', label: 'Locksmith' },
    { value: 'roofer', label: 'Roofer' },
    { value: 'cleaner', label: 'Cleaner' },
    { value: 'landscaper', label: 'Landscaper' },
    { value: 'painter-decorator', label: 'Painter / Decorator' },
    { value: 'handyman', label: 'Handyman' },
    { value: 'pest-control', label: 'Pest Control' },
    { value: 'drainage-engineer', label: 'Drainage Engineer' },
    { value: 'bathroom-fitter', label: 'Bathroom Fitter' },
    { value: 'window-fitter', label: 'Window Fitter' },
    { value: 'carpet-fitter', label: 'Carpet Fitter' },
    { value: 'other', label: 'Other Trade' },
];

export const callsPerDayOptions = [
    { value: '1-5', label: '1-5 calls/day' },
    { value: '5-10', label: '5-10 calls/day' },
    { value: '10-20', label: '10-20 calls/day' },
    { value: '20+', label: '20+ calls/day' },
];

// PayPal plan ID mappings
export const paypalPlanIds = {
    starter: import.meta.env.VITE_PAYPAL_PLAN_STARTER || '',
    professional: import.meta.env.VITE_PAYPAL_PLAN_PROFESSIONAL || '',
    growth: import.meta.env.VITE_PAYPAL_PLAN_GROWTH || '',
};

// Calculate order total from selections
export function calculateTotal(selectedPlan, selectedAddons) {
    const plan = plans.find(p => p.id === selectedPlan);
    if (!plan) return 0;

    let total = plan.price;

    if (selectedAddons.extraMinutes) {
        total += addons.extraMinutes.price;
    }

    if (selectedAddons.chatbotTier) {
        const tier = addons.chatbot.tiers.find(t => t.id === selectedAddons.chatbotTier);
        if (tier) total += tier.price;
    }

    return total;
}

// Build line items for Stripe checkout
export function getStripeLineItems(selectedPlan, selectedAddons) {
    const plan = plans.find(p => p.id === selectedPlan);
    if (!plan) return [];

    const items = [{ price: plan.stripePriceId, quantity: 1 }];

    if (selectedAddons.extraMinutes) {
        items.push({ price: addons.extraMinutes.stripePriceId, quantity: 1 });
    }

    if (selectedAddons.chatbotTier) {
        const tier = addons.chatbot.tiers.find(t => t.id === selectedAddons.chatbotTier);
        if (tier) items.push({ price: tier.stripePriceId, quantity: 1 });
    }

    return items;
}
