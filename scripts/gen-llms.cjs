// scripts/gen-llms.cjs
// Generates public/llms.txt (curated index, llmstxt.org format) and public/llms-full.txt (full Markdown documentation)
// from the single source of truth (src/config/site.ts, seo.ts, category-secondary.ts, category-sections.ts).
// Run: node scripts/gen-llms.cjs   (also wired as `npm run gen:llms`). Never hand-edit the generated files.
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const ROOT = path.resolve(__dirname, '..');
const cache = {};
function load(f) {
  f = path.resolve(f);
  if (cache[f]) return cache[f].exports;
  const out = ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { module: 'commonjs', target: 'es2020', esModuleInterop: true, jsx: 'react' } }).outputText;
  const m = { exports: {} };
  cache[f] = m;
  const req = (p) => {
    if (p.startsWith('@/')) p = path.resolve(ROOT, p.slice(2));
    else if (p.startsWith('.')) p = path.resolve(path.dirname(f), p);
    else return require(p);
    for (const e of ['', '.ts', '.tsx', '.js']) if (fs.existsSync(p + e) && fs.statSync(p + e).isFile()) return load(p + e);
    return require(p);
  };
  new Function('exports', 'require', 'module', '__filename', '__dirname', out)(m.exports, req, m, f, path.dirname(f));
  return m.exports;
}

const site = load(path.join(ROOT, 'src/config/site.ts'));
const seo = load(path.join(ROOT, 'src/config/seo.ts'));
const guides = load(path.join(ROOT, 'src/config/category-secondary.ts')).KEYWORD_GUIDES;
const extra = load(path.join(ROOT, 'src/config/category-sections.ts')).EXTRA_BLOCKS;
const { SITE, CONTACT, SHOP, PRODUCTS, POSTS, FAQ } = site;
const PAGE_SEO = seo.PAGE_SEO;
const B = `https://${SITE.domain}`;
const clean = (s) => String(s || '').replace(/\s+/g, ' ').replace(/&amp;/g, '&').trim();
const money = (n) => '$' + Number(n).toLocaleString('en-AU', { maximumFractionDigits: 2 }) + ' AUD';
const stripMd = (s) => String(s || '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\{\{product:[^}]+\}\}/g, '').replace(/\n{3,}/g, '\n\n').trim();
const label = (u) => (PAGE_SEO[u] ? clean(PAGE_SEO[u].h1 || PAGE_SEO[u].title) : u);

// ---- groups of pages ----
const urls = Object.keys(PAGE_SEO);
const CITY = urls.filter((u) => /\/electric-motor-bikes\/(sydney|melbourne|brisbane|perth|gold-coast|townsville)\/$/.test(u));
const GUIDE_PAGES = ['/electric-motor-bikes/e-bike-laws-australia/', '/electric-motor-bikes/best-electric-bikes-australia/', '/blog/', '/faq/'];
const CATS = urls.filter((u) => u !== '/' && !CITY.includes(u) && !GUIDE_PAGES.includes(u) && !u.startsWith('/brands') && u !== '/shop/' && !/rtr-ebike/.test(u));
const BRAND_PAGES = urls.filter((u) => u.startsWith('/brands/'));
const POLICY = [
  ['/shipping-and-delivery/', 'Shipping and delivery: Australia-wide freight, free over $1,500'],
  ['/returns-policy/', 'Returns and refund policy'],
  ['/warranty-and-service/', '12-month Australian warranty and workshop service'],
  ['/contact/', 'Contact the Mittagong NSW workshop'],
  ['/about/', 'About Electric Dirt Bike Australia'],
];
const postsSorted = [...POSTS].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
const f = (u) => `[${label(u)}](${B}${u})`;

const facts = [
  `- Business: ${SITE.name} (${SITE.shortName}), ABN ${CONTACT.abn}`,
  `- Location: ${CONTACT.address}, ${CONTACT.country} (online store, nationwide delivery; workshop pickup by arrangement)`,
  `- Phone / WhatsApp: ${CONTACT.phoneDisplay}`,
  `- Email: ${CONTACT.orderEmail}`,
  `- Hours: ${CONTACT.hours}`,
  `- Currency: ${SITE.currency} (prices include GST)`,
  `- Free freight: orders over $${SHOP.freeShippingThreshold.toLocaleString('en-AU')} AUD; flat $${SHOP.shippingFee} AUD below that; minimum order $${SHOP.minOrder} AUD`,
  `- Discount: ${SHOP.cryptoDiscount}% off when paying with crypto or PayID`,
  `- Warranty: ${SHOP.defaultWarranty}`,
  `- Catalogue: ${PRODUCTS.length} products, ${POSTS.length} buying guides. Off-road electric dirt bikes are for private property and designated off-road parks; road use depends on model and state rules.`,
];

// ---------------- llms.txt ----------------
const L = [];
L.push(`# ${SITE.name}`, '');
L.push('> Australian online dealer of electric dirt bikes, electric motorbikes, e-bikes, kids electric bikes, lithium battery packs and chargers (Sur-Ron, Talaria, Stark Varg, KTM SX-E, E-Ride Pro, RTR eBike and more), dispatched from Mittagong NSW with a 12-month Australian warranty.', '');
L.push(...facts, '');
L.push('## Shop and categories');
L.push(`- [Shop all products](${B}/shop/): every electric bike, dirt bike, battery, charger and part with price and specs`);
CATS.forEach((u) => L.push(`- ${f(u)}: ${clean(PAGE_SEO[u].description)}`));
L.push('', '## Delivery by city');
CITY.forEach((u) => L.push(`- ${f(u)}: ${clean(PAGE_SEO[u].description)}`));
L.push('', '## Brands');
BRAND_PAGES.forEach((u) => L.push(`- ${f(u)}: ${clean(PAGE_SEO[u]?.description || '')}`.replace(/: $/, '')));
L.push(`- [E-Ride Pro Australia](${B}/brands/e-ride-pro/): E-Ride Pro SS and SR electric dirt bikes with prices and specs`);
L.push('', '## Buying guides and rules');
GUIDE_PAGES.forEach((u) => L.push(`- ${f(u)}: ${clean(PAGE_SEO[u].description)}`));
postsSorted.slice(0, 25).forEach((p) => L.push(`- [${clean(p.title)}](${B}/blog/${p.slug}/): ${clean(p.excerpt).slice(0, 150)}`));
L.push('', '## Policies and contact');
POLICY.forEach(([u, d]) => L.push(`- [${d}](${B}${u})`));
L.push('', '## Full documentation');
L.push(`- [llms-full.txt](${B}/llms-full.txt): complete Markdown documentation of every category, product, FAQ and guide`);
L.push(`- [Sitemap](${B}/sitemap.xml): canonical URL list with lastmod`);
L.push('', '## Optional');
const featured = PRODUCTS.filter((p) => p.featured).slice(0, 12);
(featured.length ? featured : PRODUCTS.slice(0, 12)).forEach((p) => L.push(`- [${clean(p.name)}](${B}/shop/${p.slug}/): ${money(p.price)}. ${clean(p.shortDescription).slice(0, 120)}`));
L.push(`- [Agent discovery: API catalog](${B}/.well-known/api-catalog)`, `- [Agent skills](${B}/.well-known/agent-skills/index.json)`, '');
fs.writeFileSync(path.join(ROOT, 'public', 'llms.txt'), L.join('\n'));

// ---------------- llms-full.txt ----------------
const F = [];
F.push(`# ${SITE.name}: full documentation`, '');
F.push(`> Complete Markdown reference for ${B}. Generated from the site's source data. Prices are in ${SITE.currency} including GST. Last generated ${new Date().toISOString().slice(0, 10)}.`, '');
F.push('## Business facts', '', ...facts, '');
F.push('## How to buy', '', '1. Choose a product on the shop or a category page and add it to the cart.', `2. Pay by card, crypto or PayID (${SHOP.cryptoDiscount}% off with crypto or PayID).`, `3. Orders over $${SHOP.freeShippingThreshold.toLocaleString('en-AU')} AUD ship free and insured Australia-wide from Mittagong NSW.`, '4. Every bike carries a 12-month Australian warranty with workshop service and parts.', '');
F.push('## Frequently asked questions', '');
FAQ.forEach((q) => F.push(`### ${clean(q.question)}`, '', clean(q.answer), ''));
F.push('## Categories, brands and city pages', '');
[...['/'], ...(urls.includes('/shop/') ? ['/shop/'] : []), ...CATS, ...CITY, ...BRAND_PAGES, ...GUIDE_PAGES].filter((u, i, a) => PAGE_SEO[u] && a.indexOf(u) === i).forEach((u) => {
  const s = PAGE_SEO[u];
  F.push(`### ${clean(s.h1 || s.title)}`, '', `URL: ${B}${u}`, `Summary: ${clean(s.description)}`, '');
  const g = guides[u];
  if (g) { F.push(`#### ${clean(g.heading)}`, ''); g.paragraphs.forEach((p) => F.push(clean(p), '')); }
  const e = extra[u];
  if (e) {
    e.sections.forEach((sec) => { F.push(`#### ${clean(sec.heading)}`, ''); sec.paragraphs.forEach((p) => F.push(clean(p), '')); });
    e.faqs.forEach((q) => F.push(`**${clean(q.q)}** ${clean(q.a)}`, ''));
  }
});
F.push('## Product catalogue', '');
const byCat = {};
PRODUCTS.forEach((p) => { (byCat[p.category] ??= []).push(p); });
Object.entries(byCat).forEach(([cat, list]) => {
  F.push(`### ${cat.replace(/-/g, ' ')}`, '');
  list.forEach((p) => {
    const sp = p.specs && typeof p.specs === 'object' ? Object.entries(p.specs).slice(0, 8).map(([k, v]) => `${k}: ${clean(v)}`).join('; ') : '';
    F.push(`- **${clean(p.name)}**: ${money(p.price)}${p.inStock === false ? ' (out of stock)' : ''}. ${B}/shop/${p.slug}/${p.shortDescription ? ' ' + clean(p.shortDescription) : ''}${sp ? ' Specs: ' + sp + '.' : ''}`);
  });
  F.push('');
});
F.push('## Buying guides', '');
postsSorted.forEach((p) => {
  F.push(`### ${clean(p.title)}`, '', `URL: ${B}/blog/${p.slug}/`, `Published: ${p.date || ''}`, '', clean(p.excerpt), '');
  const heads = [...String(p.content || '').matchAll(/^##\s+(.+)$/gm)].map((m) => clean(m[1])).filter((h) => !/frequently asked/i.test(h)).slice(0, 10);
  if (heads.length) F.push('Covers: ' + heads.join('; ') + '.', '');
  (p.faqs || []).slice(0, 5).forEach((q) => F.push(`**${clean(q.q)}** ${clean(q.a).slice(0, 400)}`, ''));
});
fs.writeFileSync(path.join(ROOT, 'public', 'llms-full.txt'), F.join('\n'));
const sz = (n) => (fs.statSync(path.join(ROOT, 'public', n)).size / 1024).toFixed(0) + ' KB';
console.log('llms.txt', sz('llms.txt'), '| llms-full.txt', sz('llms-full.txt'));
