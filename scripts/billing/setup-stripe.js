#!/usr/bin/env node

/**
 * Stripe Product & Price Setup Script
 *
 * Creates all products and recurring prices for:
 * - 3 subscription plans (Starter, Professional, Growth)
 * - 1 voice agent add-on (Extra 100 Minutes)
 * - 3 chatbot add-on tiers
 *
 * Usage:
 *   1. Fill in .env.billing with your Stripe test key
 *   2. Run: node scripts/billing/setup-stripe.js
 *   3. Copy the output into your Vercel environment variables
 *
 * Safe to run multiple times — checks for existing products first.
 */

import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config({ path: '.env.billing' });
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ─── PRODUCT & PRICE DEFINITIONS ───────────────────────────────

const PLANS = [
  {
    envKey: 'VITE_STRIPE_PRICE_STARTER',
    product: {
      name: 'AI Voice Agent — Starter',
      description: 'For sole traders wanting to catch missed calls. Up to 100 conversation minutes/month. UK local number, SMS/email summaries, business hours availability.',
      metadata: { tier: 'starter', type: 'plan' }
    },
    price: { unit_amount: 9700, currency: 'gbp', recurring: { interval: 'month' } }
  },
  {
    envKey: 'VITE_STRIPE_PRICE_PROFESSIONAL',
    product: {
      name: 'AI Voice Agent — Professional',
      description: 'For busy tradespeople handling out-of-hours calls. Up to 200 conversation minutes/month. 24/7/365 availability, emergency escalation, basic CRM/calendar integration.',
      metadata: { tier: 'professional', type: 'plan' }
    },
    price: { unit_amount: 15700, currency: 'gbp', recurring: { interval: 'month' } }
  },
  {
    envKey: 'VITE_STRIPE_PRICE_GROWTH',
    product: {
      name: 'AI Voice Agent — Growth',
      description: 'For growing teams and multi-van operations. Up to 360 conversation minutes/month. Multiple local lines, website voice widget, advanced integrations, full call recording.',
      metadata: { tier: 'growth', type: 'plan' }
    },
    price: { unit_amount: 21700, currency: 'gbp', recurring: { interval: 'month' } }
  }
];

const ADDONS = [
  {
    envKey: 'VITE_STRIPE_PRICE_ADDON_MINUTES',
    product: {
      name: 'Extra 100 Minutes',
      description: 'Add 100 extra conversation minutes to your monthly allowance.',
      metadata: { type: 'addon', addon_key: 'extra_minutes' }
    },
    price: { unit_amount: 2700, currency: 'gbp', recurring: { interval: 'month' } }
  }
];

const CHATBOTS = [
  {
    envKey: 'VITE_STRIPE_PRICE_CHATBOT_BASIC',
    product: {
      name: 'Basic Website Chatbot',
      description: 'Lead capture chat widget for your website. FAQ auto-responses, 24/7 availability, email notifications.',
      metadata: { type: 'chatbot', chatbot_tier: 'basic' }
    },
    price: { unit_amount: 4700, currency: 'gbp', recurring: { interval: 'month' } }
  },
  {
    envKey: 'VITE_STRIPE_PRICE_CHATBOT_PRO',
    product: {
      name: 'Pro Website Chatbot',
      description: '24/7 smart chat with booking capability. Appointment booking, WhatsApp handoff, intelligent conversations.',
      metadata: { type: 'chatbot', chatbot_tier: 'pro' }
    },
    price: { unit_amount: 6700, currency: 'gbp', recurring: { interval: 'month' } }
  },
  {
    envKey: 'VITE_STRIPE_PRICE_CHATBOT_INTEGRATED',
    product: {
      name: 'Integrated Voice Agent + Chatbot',
      description: 'One AI brain for phone + website. Unified knowledge base, shared context across channels, seamless handoff.',
      metadata: { type: 'chatbot', chatbot_tier: 'integrated' }
    },
    price: { unit_amount: 9700, currency: 'gbp', recurring: { interval: 'month' } }
  }
];

// ─── MAIN SETUP FUNCTION ───────────────────────────────────────

async function findExistingProduct(name) {
  const products = await stripe.products.search({
    query: `name:"${name}" AND active:"true"`
  });
  return products.data.length > 0 ? products.data[0] : null;
}

async function createProductAndPrice(item) {
  // Check if product already exists
  let product = await findExistingProduct(item.product.name);

  if (product) {
    console.log(`  ⏭  Product already exists: ${item.product.name} (${product.id})`);
  } else {
    product = await stripe.products.create(item.product);
    console.log(`  ✅ Created product: ${item.product.name} (${product.id})`);
  }

  // Check if a matching active price exists for this product
  const existingPrices = await stripe.prices.list({
    product: product.id,
    active: true,
    limit: 10
  });

  const matchingPrice = existingPrices.data.find(p =>
    p.unit_amount === item.price.unit_amount &&
    p.currency === item.price.currency &&
    p.recurring?.interval === item.price.recurring.interval
  );

  if (matchingPrice) {
    console.log(`  ⏭  Price already exists: £${(matchingPrice.unit_amount / 100).toFixed(2)}/mo (${matchingPrice.id})`);
    return { envKey: item.envKey, priceId: matchingPrice.id, productId: product.id };
  }

  const price = await stripe.prices.create({
    product: product.id,
    ...item.price
  });

  console.log(`  ✅ Created price: £${(price.unit_amount / 100).toFixed(2)}/mo (${price.id})`);
  return { envKey: item.envKey, priceId: price.id, productId: product.id };
}

async function main() {
  console.log('\n🔧 STRIPE PRODUCT & PRICE SETUP');
  console.log('================================\n');

  // Verify connection
  try {
    const account = await stripe.accounts.retrieve();
    const isTest = process.env.STRIPE_SECRET_KEY.startsWith('sk_test');
    console.log(`Connected to: ${account.settings?.dashboard?.display_name || account.id}`);
    console.log(`Mode: ${isTest ? '🧪 TEST' : '🔴 LIVE'}\n`);

    if (!isTest) {
      console.log('⚠️  WARNING: You are using LIVE credentials!');
      console.log('   Press Ctrl+C within 5 seconds to cancel...\n');
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  } catch (err) {
    console.error('❌ Failed to connect to Stripe:', err.message);
    console.error('   Check your STRIPE_SECRET_KEY in .env.billing');
    process.exit(1);
  }

  const results = [];

  // Create Plans
  console.log('📦 SUBSCRIPTION PLANS');
  console.log('─────────────────────');
  for (const plan of PLANS) {
    try {
      results.push(await createProductAndPrice(plan));
    } catch (err) {
      console.error(`  ❌ Failed: ${plan.product.name} — ${err.message}`);
    }
  }

  // Create Add-on
  console.log('\n📦 VOICE AGENT ADD-ON');
  console.log('────────────────────');
  for (const addon of ADDONS) {
    try {
      results.push(await createProductAndPrice(addon));
    } catch (err) {
      console.error(`  ❌ Failed: ${addon.product.name} — ${err.message}`);
    }
  }

  // Create Chatbot tiers
  console.log('\n📦 CHATBOT ADD-ONS');
  console.log('──────────────────');
  for (const chatbot of CHATBOTS) {
    try {
      results.push(await createProductAndPrice(chatbot));
    } catch (err) {
      console.error(`  ❌ Failed: ${chatbot.product.name} — ${err.message}`);
    }
  }

  // Output environment variables
  console.log('\n\n═══════════════════════════════════════════════════');
  console.log('📋 COPY THESE INTO YOUR VERCEL ENVIRONMENT VARIABLES');
  console.log('═══════════════════════════════════════════════════\n');

  for (const result of results) {
    console.log(`${result.envKey}=${result.priceId}`);
  }

  console.log(`\nVITE_STRIPE_PUBLISHABLE_KEY=${process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_REPLACE_ME'}`);
  console.log(`STRIPE_SECRET_KEY=${process.env.STRIPE_SECRET_KEY}`);

  console.log('\n═══════════════════════════════════════════════════\n');
  console.log(`✅ Done! ${results.length} products/prices configured.`);
  console.log('Next steps:');
  console.log('  1. Copy the environment variables above into Vercel');
  console.log('  2. Set up your Stripe webhook endpoint (see setup guide)');
  console.log('  3. Test the checkout flow on your site');
  console.log('  4. When ready for live: switch to live keys and re-run this script\n');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
