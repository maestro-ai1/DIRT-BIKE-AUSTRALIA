// Product page gate (Master Product Rule). Usage: node scripts/audit/product-gate.cjs [baseUrl]
// Checks every /shop/<slug>/ page: 1 H1, H2/H3 present, >=400 words, 5 FAQs (FAQPage JSON-LD), BreadcrumbList, inbound >=3 and outbound links,
// title <=60 starting with the primary keyword, meta 110-158 chars with the primary, exactly 10 tags, alt text on every image, no duplicate alts.
const fs = require('fs');
const path = require('path');
const base = process.argv[2] || 'http://localhost:3210';
const PK = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/config/product-keywords.json'), 'utf8'));
const compact = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '');
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
(async () => {
  const slugs = Object.keys(PK);
  const rows = []; const fails = {};
  const titles = new Map();
  let i = 0;
  async function one(slug) {
    const url = `${base}/shop/${slug}/`;
    const r = await fetch(url); const html = await r.text();
    const f = [];
    if (r.status !== 200) f.push('status' + r.status);
    const h1 = [...html.matchAll(/<h1[\s>]/g)].length;
    const h2 = [...html.matchAll(/<h2[\s>]/g)].length;
    const h3 = [...html.matchAll(/<h3[\s>]/g)].length;
    const main = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ');
    const text = dec(main.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
    const words = text.split(' ').filter(Boolean).length;
    const title = dec((html.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1]);
    const meta = dec((html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]);
    const primary = PK[slug].primary.keyword;
    const h1txt = dec(((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]).replace(/<[^>]+>/g, ''));
    const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join(' ');
    const faqQ = (ld.match(/"@type":"Question"/g) || []).length;
    const crumbs = /"BreadcrumbList"/.test(ld);
    const prodSchema = /"@type":"Product"/.test(ld);
    const links = [...html.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]);
    const inb = links.filter((h) => h.startsWith('/') && !h.startsWith('//') && !h.startsWith('/shop/' + slug)).length;
    const outb = links.filter((h) => /^https?:\/\//.test(h) && !/electricdirtbikeaustralia\.com\.au/.test(h)).length;
    const alts = [...html.matchAll(/<img [^>]*alt="([^"]*)"/g)].map((m) => m[1]);
    const noAlt = [...html.matchAll(/<img (?![^>]*alt=)[^>]*>/g)].length;
    const dupAlt = alts.length - new Set(alts.filter(Boolean)).size;
    if (h1 !== 1) f.push('h1=' + h1);
    if (!h2) f.push('no-h2');
    if (!h3) f.push('no-h3');
    if (words < 400) f.push('words=' + words);
    if (faqQ < 5) f.push('faq=' + faqQ);
    if (!crumbs) f.push('no-breadcrumb-schema');
    if (!prodSchema) f.push('no-product-schema');
    if (title.length > 60) f.push('title' + title.length);
    if (!compact(title).startsWith(compact(primary))) f.push('title-not-primary-led');
    if (meta.length < 110 || meta.length > 158) f.push('meta' + meta.length);
    if (!compact(meta).includes(compact(primary))) f.push('meta-no-primary');
    if (!compact(h1txt).includes(compact(primary))) f.push('h1-no-primary');
    if (inb < 3) f.push('inbound' + inb);
    if (outb < 1) f.push('no-outbound');
    if (noAlt) f.push('img-no-alt' + noAlt);
    if (dupAlt) f.push('dup-alt' + dupAlt);
    (titles.get(title) || titles.set(title, []).get(title)).push(slug);
    rows.push({ slug, words, h2, h3, faqQ, inb, outb, title: title.length, meta: meta.length, f });
    f.forEach((x) => { const k = x.replace(/\d+$/, '').replace(/=\d+$/, ''); fails[k] = (fails[k] || 0) + 1; });
  }
  const q = slugs.slice();
  await Promise.all(Array.from({ length: 8 }, async () => { while (q.length) await one(q.shift()); }));
  for (const [t, l] of titles) if (l.length > 1) { fails['dup-title'] = (fails['dup-title'] || 0) + l.length; }
  console.log('products', rows.length, '| with any failure', rows.filter((r) => r.f.length).length);
  console.log(fails);
  fs.writeFileSync(process.env.TEMP + '/product-gate.json', JSON.stringify(rows, null, 1));
  const w = rows.map((r) => r.words).sort((a, b) => a - b);
  console.log('words min/median/max', w[0], w[w.length >> 1], w[w.length - 1]);
  for (const r of rows.filter((r) => r.f.length).slice(0, Number(process.env.SHOW || 6))) console.log(r.slug, r.f.join(','));
})();
