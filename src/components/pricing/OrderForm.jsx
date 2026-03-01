import { useState, useRef, useEffect, useCallback } from 'react';
import { tradeOptions, callsPerDayOptions, plans, addons, calculateTotal } from '../../data/pricing';
import { trackFormStarted } from '../../utils/tracking';

// UK phone validation: starts with 0 (11 digits) or +44
function isValidUkPhone(phone) {
    const cleaned = phone.replace(/[\s\-()]/g, '');
    return /^(0\d{10}|\+44\d{10})$/.test(cleaned);
}

// UK postcode validation
function isValidUkPostcode(postcode) {
    return /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(postcode.trim());
}

export default function OrderForm({ selectedPlan, selectedAddons, initialTrade, onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        trade: initialTrade || '',
        phone: '',
        email: '',
        postcode: '',
        website: '',
        callsPerDay: '',
        notes: '',
    });
    const [errors, setErrors] = useState({});
    const [hasStartedForm, setHasStartedForm] = useState(false);
    const formRef = useRef(null);

    // Update trade when URL param changes
    useEffect(() => {
        if (initialTrade && !formData.trade) {
            setFormData(prev => ({ ...prev, trade: initialTrade }));
        }
    }, [initialTrade]);

    // Ref for handleSubmit so the event listener always calls the latest version
    const handleSubmitRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }

        if (!hasStartedForm) {
            setHasStartedForm(true);
            trackFormStarted();
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Please enter your name';
        if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your business name';
        if (!formData.trade) newErrors.trade = 'Please select your trade';
        if (!formData.phone.trim()) {
            newErrors.phone = 'Please enter your phone number';
        } else if (!isValidUkPhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid UK phone number';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.postcode.trim()) {
            newErrors.postcode = 'Please enter your postcode';
        } else if (!isValidUkPostcode(formData.postcode)) {
            newErrors.postcode = 'Please enter a valid UK postcode';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (paymentMethod) => {
        if (!validate()) {
            const firstErrorField = formRef.current?.querySelector('[aria-invalid="true"]');
            firstErrorField?.focus();
            return;
        }

        const plan = plans.find(p => p.id === selectedPlan);
        const chatbotTier = selectedAddons.chatbotTier
            ? addons.chatbot.tiers.find(t => t.id === selectedAddons.chatbotTier)
            : null;

        onSubmit({
            ...formData,
            selectedPlan,
            selectedAddons,
            total: calculateTotal(selectedPlan, selectedAddons),
            planName: plan?.name,
            chatbotTierName: chatbotTier?.name || null,
            paymentMethod,
        });
    };

    // Keep ref current so the event listener always calls the latest handleSubmit
    handleSubmitRef.current = handleSubmit;

    // Listen for payment button events (set up once, uses ref for fresh state)
    useEffect(() => {
        const handler = (e) => {
            const method = e.detail?.method;
            if (method) handleSubmitRef.current(method);
        };
        document.addEventListener('pricing-pay', handler);
        return () => document.removeEventListener('pricing-pay', handler);
    }, []);

    const plan = plans.find(p => p.id === selectedPlan);
    const total = calculateTotal(selectedPlan, selectedAddons);

    const inputClasses = (field) =>
        `w-full px-4 py-3 rounded-lg border outline-none transition-all bg-surface-soft ${
            errors[field]
                ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'
        }`;

    return (
        <div ref={formRef} id="order-form">
            <div className="space-y-5">
                {/* Name + Business */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="order-name" className="block text-sm font-semibold text-dark mb-2">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            id="order-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClasses('name')}
                            placeholder="Dave Smith"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="order-business" className="block text-sm font-semibold text-dark mb-2">
                            Business Name *
                        </label>
                        <input
                            type="text"
                            id="order-business"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className={inputClasses('businessName')}
                            placeholder="Smith Plumbing"
                            aria-invalid={!!errors.businessName}
                            aria-describedby={errors.businessName ? 'business-error' : undefined}
                        />
                        {errors.businessName && <p id="business-error" className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                    </div>
                </div>

                {/* Trade */}
                <div>
                    <label htmlFor="order-trade" className="block text-sm font-semibold text-dark mb-2">
                        Your Trade *
                    </label>
                    <select
                        id="order-trade"
                        name="trade"
                        value={formData.trade}
                        onChange={handleChange}
                        className={inputClasses('trade')}
                        aria-invalid={!!errors.trade}
                    >
                        <option value="">Select your trade...</option>
                        {tradeOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    {errors.trade && <p className="text-red-500 text-xs mt-1">{errors.trade}</p>}
                </div>

                {/* Phone + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="order-phone" className="block text-sm font-semibold text-dark mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            id="order-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClasses('phone')}
                            placeholder="07700 900123"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                        <label htmlFor="order-email" className="block text-sm font-semibold text-dark mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="order-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClasses('email')}
                            placeholder="dave@smithplumbing.co.uk"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                </div>

                {/* Postcode + Website */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="order-postcode" className="block text-sm font-semibold text-dark mb-2">
                            Postcode *
                        </label>
                        <input
                            type="text"
                            id="order-postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleChange}
                            className={inputClasses('postcode')}
                            placeholder="SO21 3AB"
                            style={{ textTransform: 'uppercase' }}
                            inputMode="text"
                            autoCapitalize="characters"
                            aria-invalid={!!errors.postcode}
                            aria-describedby={errors.postcode ? 'postcode-error' : undefined}
                        />
                        {errors.postcode && <p id="postcode-error" className="text-red-500 text-xs mt-1">{errors.postcode}</p>}
                    </div>
                    <div>
                        <label htmlFor="order-website" className="block text-sm font-semibold text-dark mb-2">
                            Website Address
                        </label>
                        <input
                            type="url"
                            id="order-website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className={inputClasses('website')}
                            placeholder="www.smithplumbing.co.uk"
                        />
                        <p className="text-text-light text-xs mt-1">Helps us train your AI on your services</p>
                    </div>
                </div>

                {/* Calls per day */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="order-calls" className="block text-sm font-semibold text-dark mb-2">
                            Calls per day?
                        </label>
                        <select
                            id="order-calls"
                            name="callsPerDay"
                            value={formData.callsPerDay}
                            onChange={handleChange}
                            className={inputClasses('callsPerDay')}
                        >
                            <option value="">Roughly how many...</option>
                            {callsPerDayOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Notes */}
                <div>
                    <label htmlFor="order-notes" className="block text-sm font-semibold text-dark mb-2">
                        Any questions or special requirements?
                    </label>
                    <textarea
                        id="order-notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-soft resize-none"
                        placeholder="Tell us anything we should know..."
                    />
                </div>

                {/* Order summary in-form */}
                {plan && (
                    <div className="bg-surface-soft rounded-xl p-5 border border-border">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-text">Selected plan</span>
                            <span className="font-semibold text-dark">{plan.name} — £{plan.price}/mo</span>
                        </div>
                        {selectedAddons.extraMinutes && (
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-text">Extra minutes</span>
                                <span className="text-dark">+£27/mo</span>
                            </div>
                        )}
                        {selectedAddons.chatbotTier && (
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-text">
                                    {addons.chatbot.tiers.find(t => t.id === selectedAddons.chatbotTier)?.name}
                                </span>
                                <span className="text-dark">
                                    +£{addons.chatbot.tiers.find(t => t.id === selectedAddons.chatbotTier)?.price}/mo
                                </span>
                            </div>
                        )}
                        <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
                            <span className="font-bold text-dark">Monthly total</span>
                            <span className="font-display text-2xl text-dark">£{total}/mo</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
