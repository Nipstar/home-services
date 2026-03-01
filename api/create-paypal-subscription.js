// Vercel Serverless Function — PayPal Subscription Creator
// Set PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_MODE, SITE_URL, and N8N_PAYPAL_WEBHOOK_URL in Vercel Environment Variables

const PAYPAL_MODE = process.env.PAYPAL_MODE || 'live';
const BASE_URL = PAYPAL_MODE === 'live'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';
const SITE_URL = process.env.SITE_URL || 'https://www.aivoiceagentsforhomeservices.co.uk';
const N8N_WEBHOOK_URL = process.env.N8N_PAYPAL_WEBHOOK_URL;

// Build whitelist from env vars (available on Vercel, may be empty locally)
const VALID_PLANS = new Set([
    process.env.VITE_PAYPAL_PLAN_STARTER,
    process.env.VITE_PAYPAL_PLAN_PROFESSIONAL,
    process.env.VITE_PAYPAL_PLAN_GROWTH,
].filter(Boolean));

async function getAccessToken() {
    const credentials = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString('base64');

    const response = await fetch(`${BASE_URL}/v1/oauth2/token`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
        throw new Error(`PayPal auth failed: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
}

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
            planId,
            totalAmount,
            customerName,
            customerEmail,
            businessName,
            trade,
            phone,
            postcode,
            website,
            callsPerDay,
            notes,
            planName,
            addonDetails,
            utm = {},
        } = req.body;

        if (!planId) {
            return res.status(400).json({ error: 'PayPal plan ID is required' });
        }

        // Validate plan ID against whitelist (skipped in local dev if env vars not loaded)
        if (VALID_PLANS.size > 0 && !VALID_PLANS.has(planId)) {
            return res.status(400).json({ error: 'Invalid PayPal plan ID' });
        }

        // Validate totalAmount if provided
        if (totalAmount !== undefined && totalAmount !== null) {
            if (typeof totalAmount !== 'number' || totalAmount <= 0 || !isFinite(totalAmount)) {
                return res.status(400).json({ error: 'Invalid total amount' });
            }
        }

        const token = await getAccessToken();

        // Split customer name into given/surname
        const nameParts = (customerName || '').trim().split(/\s+/);
        const givenName = nameParts[0] || '';
        const surname = nameParts.slice(1).join(' ') || '';

        // Build subscription body
        const subscriptionBody = {
            plan_id: planId,
            subscriber: {
                name: { given_name: givenName, surname },
                email_address: customerEmail,
            },
            application_context: {
                brand_name: 'AI Voice Agents for Home Services',
                return_url: `${SITE_URL}/order-confirmed?paypal=true`,
                cancel_url: `${SITE_URL}/pricing?cancelled=true`,
                shipping_preference: 'NO_SHIPPING',
                user_action: 'SUBSCRIBE_NOW',
            },
            custom_id: [
                (trade || '').substring(0, 20),
                (phone || '').substring(0, 20),
                (postcode || '').substring(0, 10),
                (businessName || '').substring(0, 60),
            ].join('|'),
        };

        // Override plan price if add-ons change the total
        if (totalAmount) {
            subscriptionBody.plan = {
                billing_cycles: [
                    {
                        sequence: 1,
                        pricing_scheme: {
                            fixed_price: {
                                value: totalAmount.toFixed(2),
                                currency_code: 'GBP',
                            },
                        },
                    },
                ],
            };
        }

        const response = await fetch(`${BASE_URL}/v1/billing/subscriptions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Prefer': 'return=representation',
            },
            body: JSON.stringify(subscriptionBody),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('PayPal subscription error:', JSON.stringify(data));
            return res.status(500).json({ error: 'Failed to create PayPal subscription' });
        }

        // Find the approval URL
        const approveLink = data.links?.find(l => l.rel === 'approve');

        if (!approveLink) {
            return res.status(500).json({ error: 'No PayPal approval URL returned' });
        }

        // Forward signup details to n8n BEFORE responding (Vercel may freeze after res.json)
        if (N8N_WEBHOOK_URL) {
            await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    event: 'new_signup',
                    paymentMethod: 'paypal',
                    paypalSubscriptionId: data.id,
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

        res.status(200).json({ url: approveLink.href, subscriptionId: data.id });
    } catch (error) {
        console.error('PayPal subscription error:', error.message);
        res.status(500).json({ error: 'Failed to create PayPal subscription' });
    }
}
