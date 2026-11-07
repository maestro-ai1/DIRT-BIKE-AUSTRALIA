// Site-wide on-page gate. Usage: node scripts/audit/page-gate.cjs [baseUrl]
// For every sitemap URL: status 200, one H1 that is the first heading, title <=60, meta 110-158, canonical, BreadcrumbList (all but home),
// no duplicate title / meta / H1 across URLs, blog words/FAQ/TOC info, plus a broken-link check of every unique internal link found.
const fs = require('fs');
const base = process.argv[2] || 'http://localhost:3210';
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
(async () => {
  const sm = await (await fetch(base + '/sitemap.xml')).text();
  const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, ''));
  const pages = []; const fails = {}; const T = new Map(), M = new Map(), H = new Map(); const internal = new Set();
  const q = urls.slice();
  async function one(u) {
    const r = await fetch(base + u); const html = await r.text(); const f = [];
    if (r.status !== 200) f.push('status' + r.status);
    const heads = [...html.matchAll(/<(h[1-6])[\s>]/g)].map((m) => m[1]);
    const h1n = heads.filter((x) => x === 'h1').length;
    if (h1n !== 1) f.push('h1=' + h1n);
    else if (heads[0] !== 'h1') f.push('h1-not-first');
    let prev = 0, skip = false; for (const h of heads) { const n = +h[1]; if (prev && n > prev + 1) skip = true; prev = n; } if (skip) f.push('skipped-heading-level');
    const title = dec((html.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1]);
    const meta = dec((html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]);
    const h1 = dec(((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]).replace(/<[^>]+>/g, '')).trim();
    if (title.length > 60) f.push('title' + title.length);
    if (meta.length < 110 || meta.length > 158) f.push('meta' + meta.length);
    if (!/<link rel="canonical"/.test(html)) f.push('no-canonical');
    const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join(' ');
    if (u !== '/' && !/BreadcrumbList/.test(ld)) f.push('no-breadcrumb-schema');
    const text = dec(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
    const words = text.split(' ').filter(Boolean).length;
    if (u.startsWith('/blog/') && !/^\/blog\/(tag|category|page)\//.test(u) && u !== '/blog/') {
      if (words < 1500) f.push('blog-words=' + words);
      if ((ld.match(/"@type":"Question"/g) || []).length < 5) f.push('blog-faq<5');
    }
    for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)"/g)) if (!m[1].startsWith('//')) internal.add(m[1]);
    const add = (mp, k) => (mp.get(k) || mp.set(k, []).get(k)).push(u);
    add(T, title); add(M, meta); add(H, h1);
    pages.push({ u, words, title: title.length, meta: meta.length, f });
    f.forEach((x) => { const k = x.replace(/=?\d+$/, ''); fails[k] = (fails[k] || 0) + 1; });
  }
  await Promise.all(Array.from({ length: 8 }, async () => { while (q.length) await one(q.shift()); }));
  const dup = (mp, name) => { let n = 0; for (const [k, l] of mp) if (k && l.length > 1) { n += l.length; l.forEach((u) => pages.find((p) => p.u === u).f.push('dup-' + name)); } if (n) fails['dup-' + name] = n; };
  dup(T, 'title'); dup(M, 'meta'); dup(H, 'h1');
  // broken internal links
  const bad = []; const il = [...internal].filter((x) => !/^\/(_next|images|api)\//.test(x) && !/\.(png|jpe?g|webp|svg|ico|pdf|xml|txt)$/.test(x));
  const lq = il.slice();
  await Promise.all(Array.from({ length: 10 }, async () => { while (lq.length) { const x = lq.shift(); try { const r = await fetch(base + x, { redirect: 'manual' }); if (r.status >= 400) bad.push(x + ' ' + r.status); } catch (e) { bad.push(x + ' ERR'); } } }));
  console.log('sitemap URLs', pages.length, '| pages with a failure', pages.filter((p) => p.f.length).length, '| unique internal links checked', il.length, '| broken', bad.length);
  console.log(fails);
  if (bad.length) console.log('BROKEN:', bad.slice(0, 30).join(' | '));
  fs.writeFileSync(process.env.TEMP + '/page-gate.json', JSON.stringify(pages, null, 1));
  const by = {}; pages.filter((p) => p.f.length).forEach((p) => p.f.forEach((x) => { const k = x.replace(/=?\d+$/, ''); (by[k] = by[k] || []).push(p.u); }));
  for (const [k, l] of Object.entries(by)) console.log(k.padEnd(24), l.length, l.slice(0, Number(process.env.SHOW || 4)).join(' '));
})();
