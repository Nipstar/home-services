#!/usr/bin/env node

/**
 * PayPal Subscription Plan Setup Script
 *
 * Creates:
 * - 1 PayPal catalog product
 * - 3 subscription plans (Starter, Professional, Growth)
 *
 * PayPal doesn't support multi-line-item subscriptions like Stripe,
 * so add-ons are handled by overriding the plan price at checkout time
 * (plan + add-ons combined into one amount).
 *
 * Usage:
 *   1. Fill in .env.billing with your PayPal sandbox credentials
 *   2. Run: node scripts/billing/setup-paypal.js
 *   3. Copy the output into your Vercel environment variables
 */

import dotenv from 'dotenv';

dotenv.config({ path: '.env.billing' });

const PAYPAL_MODE = process.env.PAYPAL_MODE || 'sandbox';
const BASE_URL = PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

// ─── PLAN DEFINITIONS ──────────────────────────────────────────

const PLANS = [
  {
    envKey: 'VITE_PAYPAL_PLAN_STARTER',
    name: 'AI Voice Agent — Starter',
    description: 'For sole traders. Up to 100 conversation minutes/month. UK local number included.',
    amount: '97.00'
  },
  {
    envKey: 'VITE_PAYPAL_PLAN_PROFESSIONAL',
    name: 'AI Voice Agent — Professional',
    description: 'For busy tradespeople. Up to 200 conversation minutes/month. 24/7 availability, emergency escalation.',
    amount: '157.00'
  },
  {
    envKey: 'VITE_PAYPAL_PLAN_GROWTH',
    name: 'AI Voice Agent — Growth',
    description: 'For growing teams. Up to 360 conversation minutes/month. Advanced integrations, full call recording.',
    amount: '217.00'
  }
];

// ─── API HELPERS ───────────────────────────────────────────────

async function getAccessToken() {
  const credentials = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString('base64');

  const response = await fetch(`${BASE_URL}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get access token: ${response.status} — ${error}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function paypalRequest(token, method, path, body = null) {
  const options = {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Prefer': 'return=representation'
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${path}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`PayPal API error: ${response.status} — ${JSON.stringify(data)}`);
  }

  return data;
}

// ─── MAIN SETUP FUNCTION ───────────────────────────────────────

async function main() {
  console.log('\n🔧 PAYPAL SUBSCRIPTION PLAN SETUP');
  console.log('==================================\n');
  console.log(`Mode: ${PAYPAL_MODE === 'live' ? '🔴 LIVE' : '🧪 SANDBOX'}`);
  console.log(`API: ${BASE_URL}\n`);

  if (PAYPAL_MODE === 'live') {
    console.log('⚠️  WARNING: You are using LIVE credentials!');
    console.log('   Press Ctrl+C within 5 seconds to cancel...\n');
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  // Get access token
  let token;
  try {
    token = await getAccessToken();
    console.log('✅ Authenticated with PayPal\n');
  } catch (err) {
    console.error('❌ Failed to authenticate:', err.message);
    console.error('   Check PAYPAL_CLIENT_ID and PAYPAL_SECRET in .env.billing');
    process.exit(1);
  }

  // Create Product
  console.log('📦 CREATING PRODUCT');
  console.log('───────────────────');

  let product;
  try {
    // Check for existing products first
    const existingProducts = await paypalRequest(token, 'GET', '/v1/catalogs/products?page_size=20');
    const existing = existingProducts.products?.find(p =>
      p.name === 'AI Voice Agent for Home Services'
    );

    if (existing) {
      product = existing;
      console.log(`  ⏭  Product already exists: ${product.name} (${product.id})`);
    } else {
      product = await paypalRequest(token, 'POST', '/v1/catalogs/products', {
        name: 'AI Voice Agent for Home Services',
        description: 'AI phone answering service for UK tradespeople. Answers calls 24/7, sounds human, books jobs.',
        type: 'SERVICE',
        category: 'SOFTWARE'
      });
      console.log(`  ✅ Created product: ${product.name} (${product.id})`);
    }
  } catch (err) {
    console.error('  ❌ Failed to create product:', err.message);
    process.exit(1);
  }

  // Create Plans
  console.log('\n📦 CREATING SUBSCRIPTION PLANS');
  console.log('──────────────────────────────');

  const results = [];

  for (const plan of PLANS) {
    try {
      // Check for existing plan
      const existingPlans = await paypalRequest(token, 'GET',
        `/v1/billing/plans?product_id=${product.id}&page_size=20`
      );
      const existing = existingPlans.plans?.find(p =>
        p.name === plan.name && p.status === 'ACTIVE'
      );

      if (existing) {
        console.log(`  ⏭  Plan already exists: ${plan.name} (${existing.id})`);
        results.push({ envKey: plan.envKey, planId: existing.id });
        continue;
      }

      const createdPlan = await paypalRequest(token, 'POST', '/v1/billing/plans', {
        product_id: product.id,
        name: plan.name,
        description: plan.description,
        status: 'ACTIVE',
        billing_cycles: [
          {
            frequency: {
              interval_unit: 'MONTH',
              interval_count: 1
            },
            tenure_type: 'REGULAR',
            sequence: 1,
            total_cycles: 0, // 0 = infinite (until cancelled)
            pricing_scheme: {
              fixed_price: {
                value: plan.amount,
                currency_code: 'GBP'
              }
            }
          }
        ],
        payment_preferences: {
          auto_bill_outstanding: true,
          setup_fee: {
            value: '0.00',
            currency_code: 'GBP'
          },
          setup_fee_failure_action: 'CONTINUE',
          payment_failure_threshold: 3
        },
        taxes: {
          percentage: '0', // VAT included in price
          inclusive: true
        }
      });

      console.log(`  ✅ Created plan: ${plan.name} — £${plan.amount}/mo (${createdPlan.id})`);
      results.push({ envKey: plan.envKey, planId: createdPlan.id });

    } catch (err) {
      console.error(`  ❌ Failed: ${plan.name} — ${err.message}`);
    }
  }

  // Output environment variables
  console.log('\n\n═══════════════════════════════════════════════════');
  console.log('📋 COPY THESE INTO YOUR VERCEL ENVIRONMENT VARIABLES');
  console.log('═══════════════════════════════════════════════════\n');

  console.log(`VITE_PAYPAL_CLIENT_ID=${process.env.PAYPAL_CLIENT_ID}`);
  for (const result of results) {
    console.log(`${result.envKey}=${result.planId}`);
  }

  console.log('\n═══════════════════════════════════════════════════\n');
  console.log(`✅ Done! Product + ${results.length} plans configured.`);
  console.log('');
  console.log('Note about add-ons with PayPal:');
  console.log('  PayPal subscriptions don\'t support multiple line items.');
  console.log('  Add-ons are handled by overriding the plan price at checkout');
  console.log('  time (plan + add-ons combined into one monthly amount).');
  console.log('  The frontend calculates the total and passes it via plan_override.');
  console.log('');
  console.log('Next steps:');
  console.log('  1. Copy the environment variables above into Vercel');
  console.log('  2. Set up your PayPal webhook endpoint in the Developer Dashboard');
  console.log('  3. Test with a PayPal sandbox buyer account');
  console.log('  4. When ready for live: change PAYPAL_MODE=live and re-run\n');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
