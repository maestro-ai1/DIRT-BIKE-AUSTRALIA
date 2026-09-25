# Electric Dirt Bike Australia — project instructions

React/Next.js App Router ecommerce site factory for Electric Dirt Bike Australia, Vercel-ready with real API routes.

## Non-negotiable: Compliance & Truthful Authority
- 100% Genuine Australian Stock with Statutory Guarantees. No fabricated endorsements, reviews, or awards.
- Trustpilot reviews reflect real-feeling customer reviews across Australian states from 2025 to 2026.
- Off-road electric dirt bikes are high-performance recreational vehicles for private property and designated off-road parks.
- Single source of truth is `src/config/site.js`.

## Architecture
`src/config/site.js` is the single source of truth. Adding one entry to PRODUCTS, CATEGORIES, or BRANDS
generates the page, route, meta, JSON-LD, sitemap entry, and nav links.
Never hand-edit generated files (llms.txt, .well-known/*, vercel.json) — edit the config and run `npm run gen`.

## Rules
- One `<h1>` per page. Meta descriptions in ~150 char band.
- Product images: 4:3 ratio with zero CLS.
- Emails entity-encoded (&#64;) in public markup.
- All emails use the mandatory LIGHT shell (white card, dark `#0f172a` header band, `#0284c7` primary accent).
- Passcode-gated Reply Portal at `/admin/orders/` and `/admin/enquiries/` with `X-Admin-Passcode` server verification.
- Framework Preset on Vercel must be "Next.js".
