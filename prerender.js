import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to prerender (from sitemap.xml)
const routes = [
  '/',
  '/how-ai-voice-agents-work',
  '/pricing',
  '/ai-voice-agent-vs-call-centre',
  '/missed-calls-costing-tradesmen-money',
  '/trades',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/ai-voice-agent-for-plumbers',
  '/ai-voice-agent-for-electricians',
  '/ai-voice-agent-for-heating-engineers',
  '/ai-voice-agent-for-builders',
  '/ai-voice-agent-for-locksmiths',
  '/ai-voice-agent-for-roofers',
  '/ai-voice-agent-for-cleaners',
  '/ai-voice-agent-for-landscapers',
  '/ai-voice-agent-for-painters-decorators',
  '/ai-voice-agent-for-handymen',
  '/ai-voice-agent-for-pest-control',
  '/ai-voice-agent-for-drainage-engineers',
  '/ai-voice-agent-for-bathroom-fitters',
  '/ai-voice-agent-for-window-fitters',
  '/ai-voice-agent-for-carpet-fitters',
  '/after-hours-calls-tradesmen',
  '/voicemail-killing-your-trade-business',
  '/cant-answer-phone-on-the-job',
  '/too-busy-to-answer-phone-tradesman',
  '/customer-expects-instant-response',
  '/weekend-emergency-calls-tradesmen',
  '/phone-tag-losing-customers',
  '/checkatrade-leads-missing-calls',
  '/compare/ai-vs-virtual-receptionist',
  '/compare/ai-vs-voicemail',
  '/compare/answering-service-prices',
  '/compare/best-answering-service-tradesmen',
  '/blog',
  '/blog/how-to-get-more-plumbing-leads-uk',
  '/blog/google-business-profile-setup-tradesmen',
  '/blog/checkatrade-vs-mybuilder-vs-rated-people',
  '/blog/busiest-months-uk-trades',
  '/blog/grow-trade-business-no-staff',
];

async function prerender() {
  const distPath = path.join(__dirname, 'dist');
  const templatePath = path.join(distPath, 'index.html');

  // Read the client-built index.html as template
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Import the SSR-built render function
  const { render } = await import('./dist/server/entry-server.js');

  console.log('Pre-rendering pages...');
  let successCount = 0;

  for (const route of routes) {
    try {
      // Render the app for this route
      const { html: appHtml, helmet } = render(route);

      // Start with the template
      let html = template;

      // Inject rendered content into root div
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Inject helmet tags into <head>
      if (helmet) {
        const titleTag = helmet.title ? helmet.title.toString() : '';
        const metaTags = helmet.meta ? helmet.meta.toString() : '';
        const linkTags = helmet.link ? helmet.link.toString() : '';
        const scriptTags = helmet.script ? helmet.script.toString() : '';

        // Replace the default title with the page-specific one
        if (titleTag) {
          html = html.replace(
            /<title>.*?<\/title>/,
            titleTag
          );
        }

        // Replace the default description with page-specific one
        if (metaTags) {
          // Remove the fallback description meta tag if helmet provides one
          if (metaTags.includes('name="description"')) {
            html = html.replace(
              /<meta name="description" content="AI phone answering for UK tradespeople[^"]*" \/>/,
              ''
            );
          }
          // Insert meta tags before </head>
          html = html.replace('</head>', `${metaTags}\n</head>`);
        }

        // Insert link tags (canonical, etc.) before </head>
        if (linkTags) {
          html = html.replace('</head>', `${linkTags}\n</head>`);
        }

        // Insert script tags (JSON-LD schema) before </head>
        if (scriptTags) {
          html = html.replace('</head>', `${scriptTags}\n</head>`);
        }
      }

      // Determine output path
      let outputPath;
      if (route === '/') {
        outputPath = path.join(distPath, 'index.html');
      } else {
        const routePath = route.startsWith('/') ? route.slice(1) : route;
        outputPath = path.join(distPath, routePath, 'index.html');
      }

      // Create directory if needed
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Write the prerendered HTML
      fs.writeFileSync(outputPath, html, 'utf-8');

      successCount++;
      console.log(`  ✓ ${route}`);
    } catch (error) {
      console.error(`  ✗ ${route}: ${error.message}`);
    }
  }

  // Clean up server build (not needed in production)
  fs.rmSync(path.join(distPath, 'server'), { recursive: true, force: true });

  console.log(`\nPre-rendering complete: ${successCount}/${routes.length} pages generated.`);
}

prerender().catch(console.error);
