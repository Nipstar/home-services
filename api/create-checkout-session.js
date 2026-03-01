// Vercel Serverless Function — Stripe Checkout Session Creator
// Install: npm install stripe (at project root)
// Set STRIPE_SECRET_KEY, SITE_URL, and N8N_STRIPE_WEBHOOK_URL in Vercel Environment Variables

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const SITE_URL = process.env.SITE_URL || 'https://www.aivoiceagentsforhomeservices.co.uk';
const N8N_WEBHOOK_URL = process.env.N8N_STRIPE_WEBHOOK_URL;

// Build whitelist from env vars (available on Vercel, may be empty locally)
const VALID_PRICES = new Set([
    process.env.VITE_STRIPE_PRICE_STARTER,
    process.env.VITE_STRIPE_PRICE_PROFESSIONAL,
    process.env.VITE_STRIPE_PRICE_GROWTH,
    process.env.VITE_STRIPE_PRICE_ADDON_MINUTES,
    process.env.VITE_STRIPE_PRICE_CHATBOT_BASIC,
    process.env.VITE_STRIPE_PRICE_CHATBOT_PRO,
    process.env.VITE_STRIPE_PRICE_CHATBOT_INTEGRATED,
].filter(Boolean));

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', SITE_URL);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const {
            planPriceId,
            addonPriceIds = [],
            customerName,
            customerEmail,
            businessName,
            trade,
            phone,
            postcode,
            callsPerDay,
            notes,
            website,
            planName,
            totalAmount,
            addonDetails,
            utm = {},
        } = req.body;

        if (!planPriceId) {
            return res.status(400).json({ error: 'Plan price ID is required' });
        }

        // Validate price IDs against whitelist (skipped in local dev if env vars not loaded)
        if (VALID_PRICES.size > 0) {
            if (!VALID_PRICES.has(planPriceId)) {
                return res.status(400).json({ error: 'Invalid plan price ID' });
            }
            for (const id of addonPriceIds) {
                if (id && !VALID_PRICES.has(id)) {
                    return res.status(400).json({ error: 'Invalid addon price ID' });
                }
            }
        }

        // Validate totalAmount if provided
        if (totalAmount !== undefined && totalAmount !== null) {
            if (typeof totalAmount !== 'number' || totalAmount <= 0 || !isFinite(totalAmount)) {
                return res.status(400).json({ error: 'Invalid total amount' });
            }
        }

        // Build line items: plan + any add-ons
        const lineItems = [{ price: planPriceId, quantity: 1 }];
        addonPriceIds.forEach(priceId => {
            if (priceId) lineItems.push({ price: priceId, quantity: 1 });
        });

        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: lineItems,
            customer_email: customerEmail,
            success_url: `${SITE_URL}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${SITE_URL}/pricing?cancelled=true`,
            metadata: {
                source: 'aivoiceagentsforhomeservices.co.uk',
                customer_name: (customerName || '').substring(0, 500),
                business_name: (businessName || '').substring(0, 500),
                trade: (trade || '').substring(0, 500),
                phone: (phone || '').substring(0, 500),
                postcode: (postcode || '').substring(0, 500),
                calls_per_day: callsPerDay || '',
                notes: (notes || '').substring(0, 500),
                utm_source: utm.source || '',
                utm_medium: utm.medium || '',
                utm_campaign: utm.campaign || '',
                utm_term: utm.term || '',
                utm_content: utm.content || '',
            },
            subscription_data: {
                metadata: {
                    business_name: (businessName || '').substring(0, 500),
                    trade: trade || '',
                    phone: phone || '',
                },
            },
            allow_promotion_codes: true,
            billing_address_collection: 'auto',
            tax_id_collection: { enabled: true },
        });

        // Forward signup details to n8n BEFORE responding (Vercel may freeze after res.json)
        if (N8N_WEBHOOK_URL) {
            await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    event: 'new_signup',
                    paymentMethod: 'stripe',
                    stripeSessionId: session.id,
                    customer: {
                        name: customerName,
                        email: customerEmail,
                        businessName,
                        trade,
                        phone,
                        postcode,
                        website: website || '',
                        callsPerDay: callsPerDay || '',
                        notes: notes || '',
                    },
                    plan: {
                        name: planName || '',
                        total: totalAmount || null,
                        addons: addonDetails || {},
                    },
                    utm,
                    timestamp: new Date().toISOString(),
                }),
            }).catch(err => console.error('n8n forwarding error:', err.message));
        }

        res.status(200).json({ url: session.url });
    } catch (error) {
        console.error('Stripe checkout session error:', error.message);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
}
