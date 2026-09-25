# Electric Dirt Bike Australia

Production-grade Next.js ecommerce site for **Electric Dirt Bike Australia** (`electricdirtbikeaustralia.com.au`), engineered to WebForge v10 specifications.

## Key Features
- **Mobile-First & Responsive**: Zero horizontal overflow, strict viewport rules, smooth responsive navigation.
- **Hero Slider**: 3-slide visual showcase with single H1 on slide 1, dynamic slide transitions, and clear CTAs.
- **Catalog & Filter**: Real-time filtering by category, brand (Sur-Ron, Talaria, Stark Varg, RFN, Super73), and search keywords.
- **Trustpilot Reviews**: 4.9/5 Excellent rating showcase with reviews from 1 year ago till date (2025–2026) and verified buyer badges.
- **Recent Sales Popup**: Smooth bottom-left notification displaying recent purchases with non-repeating order numbers.
- **Checkout & Alt-Payment**: Full cart drawer with automated 10% Crypto discount calculator and instant WhatsApp / Direct Order options.
- **Reply Portal**: Passcode-gated admin hub (`/admin/orders/`, `/admin/enquiries/`, `/admin/send-payment-email/`) for payment dispatch.
- **Agent-Ready**: Full static (A–N) and live (V1–V6) agent compatibility (robots.txt, llms.txt, auth.md, .well-known linkset, MCP Streamable HTTP).

## Deployment Instructions (Vercel)
1. Initialize Git and commit repository files.
2. Push to GitHub.
3. Import into Vercel and verify **Framework Preset = "Next.js"**.
4. Configure SMTP environment variables if using custom mail servers:
   - `EMAIL_SERVER_HOST`, `EMAIL_SERVER_PORT`, `EMAIL_SERVER_USER`, `EMAIL_SERVER_PASSWORD`, `EMAIL_FROM`.
   - `ADMIN_PASSCODE` (default: `edba2026`).
