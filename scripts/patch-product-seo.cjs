// One-off patch (2026-10-29): Master Product Optimization Rule in lib/productSeo.ts.
// - productSecondaries(p): 5 secondary keywords per product (bank keywords, no stuffing)
// - getProductTags(p): EXACTLY 10 unique tags, every one a link
// - productSeoTitle: never longer than 68 characters
// - productImageAlt: keyword once (no "electric dirt bike electric dirt bike" stutter)
const fs = require('fs');
const f = 'lib/productSeo.ts';
let s = fs.readFileSync(f, 'utf8');
const crlf = s.includes('\r\n');
s = s.replace(/\r\n/g, '\n');

// 1. replace getProductTags body
const a = s.indexOf('export function getProductTags(p: P): ProductTag[] {');
const b = s.indexOf('// Image alt text:');
if (a < 0 || b < 0) throw new Error('anchors');
const oldFn = s.slice(a, b);

const newFn = `// Five secondary keywords per product (Master Product Optimization Rule): the product's transactional and commercial bank keyword,
// then three more commercial bank keywords for its type, rotated by product so the tail differs between products.
export function productSecondaries(p: P): string[] {
  const kind = productKind(p);
  const { t, c } = productSecondary(p);
  const out: string[] = [];
  const seen = new Set<string>();
  const add = (k: string) => { const key = k.toLowerCase(); if (k && !seen.has(key)) { seen.add(key); out.push(k); } };
  add(t); add(c);
  const pool = C_TAG_POOL[kind] ?? [];
  const start = pool.length ? hash(p.slug) % pool.length : 0;
  for (let i = 0; i < pool.length && out.length < 5; i++) add(pool[(start + i) % pool.length]);
  for (const k of T_TAGS[kind] ?? []) if (out.length < 5) add(k);
  return out.slice(0, 5);
}

// Exactly 10 unique tags per product, each one a link (indexable): three product-name tags, the brand tag, the five secondary keywords and
// one spec or noun tag. Every tag links to the category, brand or hub page that targets it.
export function getProductTags(p: P): ProductTag[] {
  const kind = productKind(p);
  const short = shortName(p.name);
  const vehicle = !['battery', 'charger', 'part'].includes(kind);
  const out: ProductTag[] = [];
  const seen = new Set<string>();
  const hrefFor = (label: string) => { const sp = SPECIAL_HREF.find(([re]) => re.test(label.toLowerCase())); return sp ? sp[1] : HREF[kind]; };
  const add = (label: string, href?: string) => {
    const key = label.toLowerCase();
    if (!label || seen.has(key) || out.length >= 10) return;
    seen.add(key);
    out.push({ label, href: href ?? hrefFor(label) });
  };
  const brandSlug = p.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const brandHref = /sur-?ron/i.test(p.brand) ? '/electric-dirt-bikes/sur-ron/' : /^e-ride pro$/i.test(p.brand) ? '/brands/e-ride-pro/' : \`/shop/?brand=\${encodeURIComponent(brandSlug)}\`;
  // 1. Product-name tags (long-tail, match the product exactly)
  add(\`\${short} Australia\`);
  add(\`buy \${short}\`);
  add(\`\${short} price\`);
  add(\`\${p.brand} Australia\`, brandHref);
  // 2. The five secondary keywords (bank keywords)
  const secs = productSecondaries(p);
  secs.forEach((k) => add(k, /sur-?ron/i.test(p.brand) && /sur ?ron|surron/i.test(k) ? brandHref : undefined));
  // 3. One spec or noun tag
  const batt = spec(p, 'battery') || spec(p, 'voltage') || '';
  const v = batt.match(/(\\d{2,3})\\s?V/i)?.[1];
  const power = spec(p, 'motorPeak') || spec(p, 'peakPower') || '';
  const kwNum = power.match(/(\\d+(?:\\.\\d+)?)\\s*kW/i)?.[1];
  const wNum = power.match(/([\\d,]{3,6})\\s*Watts?/i)?.[1];
  const watts = kwNum ? Math.round(parseFloat(kwNum) * 1000) : wNum ? parseInt(wNum.replace(/,/g, ''), 10) : undefined;
  const powerLabel = watts ? (watts < 1000 ? watts + 'W' : (watts / 1000) + 'kW') : undefined;
  const noun = kind === 'moped' ? 'electric moped' : kind === 'ebike' ? 'electric bike' : kind === 'kids' || kind === 'balance' ? 'kids electric bike' : kind === 'emoto' || kind === 'fattyre' || kind === 'offroad' || kind === 'motocross' || kind === 'pit' ? 'electric dirt bike' : '';
  if (vehicle && noun && v) add(\`\${v}V \${noun}\`);
  else if (vehicle && noun && powerLabel) add(\`\${powerLabel} \${noun}\`);
  if (!vehicle) for (const [re, tags] of NOUNS) if (re.test(p.slug)) tags.forEach((t) => add(t));
  // 4. Pad from the commercial pool so every product has exactly 10
  const pool = C_TAG_POOL[kind] ?? [];
  const start = pool.length ? hash(p.slug) % pool.length : 0;
  for (let i = 0; i < pool.length && out.length < 10; i++) add(pool[(start + i) % pool.length]);
  for (const k of T_TAGS[kind] ?? []) add(k);
  return out.slice(0, 10);
}

`;
s = s.slice(0, a) + newFn + s.slice(b);

// 2. image alt without stutter
s = s.replace("  const base = `${shortName(p.name)} ${ALT_KEYWORD[productKind(p as P)]}`;", "  const kw = ALT_KEYWORD[productKind(p as P)];\n  const nm = shortName(p.name);\n  const base = nm.toLowerCase().includes(kw.toLowerCase()) ? nm : `${nm} ${kw}`;");

// 3. title never longer than 68
s = s.replace("  return `${short} | ${price}`;\n}", "  const bare = `${short} | ${price}`;\n  if (bare.length <= MAX) return bare;\n  const w = short.split(' ');\n  while (w.length > 2 && `${w.join(' ')} | ${price}`.length > MAX) w.pop();\n  return `${w.join(' ').replace(/[,&|-]+$/, '').trim()} | ${price}`;\n}");

fs.writeFileSync(f, crlf ? s.replace(/\n/g, '\r\n') : s);
console.log('patched', f);
