# Dicor website (Next.js 14, App Router)
1. `npm install`
2. `cp .env.example .env.local` and set ADMIN_PASSWORD
3. `npm run dev` (http://localhost:3000), admin at /admin
Production: `npm run build && npm start` on a Node host (VPS, Render, Railway).
Inquiries and settings are saved in /data/*.json, so use a host with a persistent disk. On Vercel/serverless, swap lib/store.js for a database (Supabase, Neon, MongoDB).
Edit products, services and clients in lib/data.js.
