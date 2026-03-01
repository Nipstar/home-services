import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dotenv from 'dotenv'

// Load .env.billing for local dev so the Stripe serverless function works
dotenv.config({ path: '.env.billing' })

function vercelApiPlugin() {
  function createApiMiddleware(server, route, modulePath) {
    server.middlewares.use(route, async (req, res) => {
      if (req.method === 'OPTIONS') {
        res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type' })
        return res.end()
      }
      if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ error: 'Method not allowed' }))
      }
      let body = ''
      req.on('data', chunk => { body += chunk })
      req.on('end', async () => {
        try {
          const { default: handler } = await server.ssrLoadModule(modulePath)
          const mockReq = { method: 'POST', body: JSON.parse(body) }
          const mockRes = {
            statusCode: 200,
            headers: {},
            setHeader(k, v) { this.headers[k] = v },
            status(code) { this.statusCode = code; return this },
            json(data) {
              res.writeHead(this.statusCode, { 'Content-Type': 'application/json', ...this.headers })
              res.end(JSON.stringify(data))
            },
            end() { res.end() },
          }
          await handler(mockReq, mockRes)
        } catch (err) {
          console.error('Dev API error:', err)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: err.message }))
        }
      })
    })
  }

  return {
    name: 'vercel-api-dev',
    configureServer(server) {
      createApiMiddleware(server, '/api/create-checkout-session', '/api/create-checkout-session.js')
      createApiMiddleware(server, '/api/create-paypal-subscription', '/api/create-paypal-subscription.js')
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cssInjectedByJsPlugin(),
    vercelApiPlugin(),
  ],
  build: {
    sourcemap: 'hidden',
    modulePreload: { polyfill: true },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
        },
      },
    },
  },
  ssr: {
    // Bundle all deps into the SSR output to avoid CJS/ESM mismatches
    noExternal: true,
  },
})
