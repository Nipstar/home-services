// ──────────────────────────────────────────────
// Conversion Tracking Utilities
// ──────────────────────────────────────────────

// Capture UTM parameters from URL and store in sessionStorage
export function captureUtmParams() {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    const utm = {};
    let hasUtm = false;

    utmKeys.forEach(key => {
        const value = params.get(key);
        if (value) {
            utm[key.replace('utm_', '')] = value;
            hasUtm = true;
        }
    });

    if (hasUtm) {
        sessionStorage.setItem('utm_params', JSON.stringify(utm));
    }

    return utm;
}

// Retrieve stored UTM parameters
export function getUtmParams() {
    try {
        return JSON.parse(sessionStorage.getItem('utm_params')) || {};
    } catch {
        return {};
    }
}

// Fire purchase conversion event (on order-confirmed page)
export function trackConversion(orderTotal, planName) {
    // Google Ads conversion
    // Andy: Replace YOUR_CONVERSION_ID and YOUR_CONVERSION_LABEL in Google Tag script
    if (window.gtag) {
        gtag('event', 'conversion', {
            send_to: 'AW-YOUR_CONVERSION_ID/YOUR_CONVERSION_LABEL',
            value: orderTotal,
            currency: 'GBP',
        });

        // GA4 purchase event
        gtag('event', 'purchase', {
            currency: 'GBP',
            value: orderTotal,
            items: [{ item_name: planName, price: orderTotal }],
        });
    }

    // Facebook Pixel
    if (window.fbq) {
        fbq('track', 'Purchase', {
            value: orderTotal,
            currency: 'GBP',
        });
    }
}

// Fire micro-conversion events throughout the funnel
export function trackMicroConversion(eventName, data = {}) {
    if (window.gtag) {
        gtag('event', eventName, data);
    }

    // Facebook custom events
    if (window.fbq) {
        fbq('trackCustom', eventName, data);
    }
}

// Pre-defined micro-conversion helpers
export const trackPlanSelected = (planName, price) =>
    trackMicroConversion('plan_selected', { plan: planName, value: price, currency: 'GBP' });

export const trackAddonSelected = (addonName, price) =>
    trackMicroConversion('addon_selected', { addon: addonName, value: price, currency: 'GBP' });

export const trackFormStarted = () =>
    trackMicroConversion('form_started');

export const trackFormSubmitted = (total) =>
    trackMicroConversion('form_submitted', { value: total, currency: 'GBP' });

export const trackCheckoutStarted = (method, total) =>
    trackMicroConversion('checkout_started', { method, value: total, currency: 'GBP' });
