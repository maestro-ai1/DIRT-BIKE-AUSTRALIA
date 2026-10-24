const fs = require('fs');
const path = require('path');
const D = path.join(process.env.TEMP, 'audit');
const BASE = 'https://electricdirtbikeaustralia.com.au';
const pages = JSON.parse(fs.readFileSync(path.join(D, 'pages.json'), 'utf8'));
const notIdx = new Set(fs.readFileSync(path.join(D, 'gsc-not-indexed.txt'), 'utf8').split(/\r?\n/).filter(Boolean));

const typeOf = (u) => {
  const p = u.replace(BASE, '');
  if (p === '/') return 'home';
  if (p === '/shop/') return 'shop-index';
  if (/^\/shop\/[^/]+\/$/.test(p)) return 'product';
  if (p === '/blog/') return 'blog-index';
  if (/^\/blog\/tag\//.test(p)) return 'blog-tag';
  if (/^\/blog\/[^/]+\/$/.test(p)) return 'blog-post';
  return 'category/info';
};
pages.forEach((p) => (p.type = typeOf(p.url)));
const byType = {};
pages.forEach((p) => (byType[p.type] = (byType[p.type] || 0) + 1));
console.log('PAGE TYPES', byType);

const out = (title, arr, fmt) => {
  console.log(`\n== ${title}: ${arr.length}`);
  arr.slice(0, 25).forEach((x) => console.log('  ' + fmt(x)));
  if (arr.length > 25) console.log('  ... +' + (arr.length - 25) + ' more');
};
const P = (p) => p.url.replace(BASE, '') || '/';

// ---- on-page ----
out('Title >60 chars', pages.filter((p) => p.title.length > 60), (p) => `${p.title.length} ${P(p)} :: ${p.title}`);
out('Title <30 chars', pages.filter((p) => p.title.length < 30), (p) => `${p.title.length} ${P(p)} :: ${p.title}`);
out('Meta desc >160', pages.filter((p) => p.desc.length > 160), (p) => `${p.desc.length} ${P(p)}`);
out('Meta desc <70', pages.filter((p) => p.desc.length < 70), (p) => `${p.desc.length} ${P(p)} :: ${p.desc}`);
const dupBy = (k) => { const m = {}; pages.forEach((p) => (m[p[k]] = (m[p[k]] || []).concat(P(p)))); return Object.entries(m).filter(([a, b]) => a && b.length > 1); };
out('Duplicate titles', dupBy('title'), ([t, u]) => `${u.length}x "${t}" -> ${u.slice(0, 4).join(', ')}`);
out('Duplicate meta descriptions', dupBy('desc'), ([t, u]) => `${u.length}x "${t.slice(0, 70)}" -> ${u.slice(0, 4).join(', ')}`);
out('H1 count != 1', pages.filter((p) => p.h1s.length !== 1), (p) => `${p.h1s.length} ${P(p)}`);
out('Heading level skips', pages.filter((p) => p.headingSkips > 0), (p) => `${p.headingSkips} skips ${P(p)}`);
out('Canonical mismatch', pages.filter((p) => p.canonical !== p.url), (p) => `${P(p)} canonical=${p.canonical}`);
out('Robots noindex', pages.filter((p) => /noindex/i.test(p.robots + p.xRobots)), (p) => P(p));
out('Missing og:image', pages.filter((p) => !p.ogImage), (p) => P(p));
out('No hreflang on page', pages.filter((p) => !p.hreflang), (p) => P(p));
out('Images missing alt attr', pages.filter((p) => p.imgNoAlt > 0), (p) => `${p.imgNoAlt} ${P(p)}`);
out('Images with empty alt', pages.filter((p) => p.imgEmptyAlt > 0), (p) => `${p.imgEmptyAlt} ${P(p)}`);
out('Images missing width/height', pages.filter((p) => p.imgNoSize > 0), (p) => `${p.imgNoSize}/${p.imgCount} ${P(p)}`);
const thin = { product: 300, 'blog-post': 900, 'category/info': 350 };
out('Thin content (words incl. nav)', pages.filter((p) => thin[p.type] && p.words < thin[p.type]), (p) => `${p.words}w ${p.type} ${P(p)}`);
const schemaNeed = { product: ['Product'], 'blog-post': ['BlogPosting', 'Article'], home: ['Organization', 'WebSite'] };
out('Missing expected JSON-LD', pages.filter((p) => schemaNeed[p.type] && !schemaNeed[p.type].some((t) => p.jsonld.includes(t))), (p) => `${P(p)} has [${p.jsonld.join(',')}]`);
out('Has INVALID JSON-LD', pages.filter((p) => p.jsonld.includes('INVALID')), (p) => P(p));
out('Missing BreadcrumbList', pages.filter((p) => p.type !== 'home' && !p.jsonld.includes('BreadcrumbList')), (p) => `${p.type} ${P(p)}`);
out('Stale lastmod (>30d)', pages.filter((p) => p.lastmod && (Date.now() - new Date(p.lastmod)) / 864e5 > 30), (p) => `${p.lastmod} ${P(p)}`);

// ---- internal link graph ----
const norm = (x) => { let p = x.split('?')[0]; if (!p.endsWith('/') && !/\.[a-z0-9]+$/i.test(p)) p += '/'; return p; };
const inbound = {};
pages.forEach((p) => (inbound[P(p)] = new Set()));
pages.forEach((p) => p.internal.forEach((l) => { const t = norm(l.path); if (inbound[t] && t !== P(p)) inbound[t].add(P(p)); }));
pages.forEach((p) => (p.inbound = inbound[P(p)].size));
const stat = (arr) => { const v = arr.map((p) => p.inbound).sort((a, b) => a - b); return { n: v.length, min: v[0], median: v[Math.floor(v.length / 2)], max: v[v.length - 1], lt3: v.filter((x) => x < 3).length }; };
console.log('\n== INTERNAL LINKS (unique linking pages)');
console.log('  indexed-side  :', stat(pages.filter((p) => !notIdx.has(p.url))));
console.log('  GSC not-idx   :', stat(pages.filter((p) => notIdx.has(p.url))));
out('Orphans (0 inbound)', pages.filter((p) => p.inbound === 0), (p) => `${p.type} ${P(p)}`);
out('Weak (1-2 inbound)', pages.filter((p) => p.inbound > 0 && p.inbound < 3), (p) => `${p.inbound} ${p.type} ${P(p)}`);
const typeInb = {};
pages.forEach((p) => { (typeInb[p.type] = typeInb[p.type] || []).push(p.inbound); });
for (const [t, v] of Object.entries(typeInb)) v.sort((a, b) => a - b), console.log(`  ${t.padEnd(14)} n=${v.length} min=${v[0]} med=${v[Math.floor(v.length / 2)]} max=${v[v.length - 1]}`);
console.log('\n== GSC not-indexed that are NOT in current sitemap:');
const smSet = new Set(pages.map((p) => p.url));
[...notIdx].filter((u) => !smSet.has(u)).forEach((u) => console.log('  ' + u));
console.log('== GSC not-indexed that ARE in sitemap by type:');
const nt = {}; pages.filter((p) => notIdx.has(p.url)).forEach((p) => (nt[p.type] = (nt[p.type] || 0) + 1)); console.log('  ', nt);
const tot = {}; pages.forEach((p) => (tot[p.type] = (tot[p.type] || 0) + 1));
console.log('  share not indexed by type:', Object.fromEntries(Object.entries(tot).map(([t, n]) => [t, `${nt[t] || 0}/${n}`])));

// ---- outbound ----
console.log('\n== OUTBOUND LINKS');
const dom = {};
let totalExt = 0;
const relIssues = [];
pages.forEach((p) => p.external.forEach((l) => {
  totalExt++;
  let h; try { h = new URL(l.href).hostname.replace(/^www\./, ''); } catch { h = 'INVALID'; }
  const d = (dom[h] = dom[h] || { n: 0, pages: new Set(), rels: new Set(), urls: new Set(), nofollow: 0, noopener: 0, blank: 0 });
  d.n++; d.pages.add(P(p)); d.urls.add(l.href);
  if (l.rel) l.rel.split(/\s+/).forEach((r) => d.rels.add(r));
  if (/nofollow|sponsored|ugc/.test(l.rel)) d.nofollow++;
  if (/noopener/.test(l.rel)) d.noopener++;
  if (l.target === '_blank') d.blank++;
  if (l.target === '_blank' && !/noopener/.test(l.rel)) relIssues.push(`${P(p)} -> ${l.href}`);
}));
console.log('  total external anchors:', totalExt, ' unique domains:', Object.keys(dom).length);
Object.entries(dom).sort((a, b) => b[1].n - a[1].n).forEach(([h, d]) => console.log(`  ${String(d.n).padStart(4)}x ${h.padEnd(32)} pages=${d.pages.size} urls=${d.urls.size} rel=[${[...d.rels].join(' ')}] nofollow=${d.nofollow} blank=${d.blank}`));
console.log('  _blank without noopener:', relIssues.length, relIssues.slice(0, 5));
const extByType = {};
pages.forEach((p) => { const e = extByType[p.type] = extByType[p.type] || { pages: 0, withExt: 0, total: 0 }; e.pages++; if (p.external.length) e.withExt++; e.total += p.external.length; });
console.log('  by page type (pages / pages with >=1 external / total external):');
Object.entries(extByType).forEach(([t, e]) => console.log(`   ${t.padEnd(14)} ${e.pages} / ${e.withExt} / ${e.total}`));
const nofollowAll = pages.flatMap((p) => p.external.filter((l) => /nofollow/.test(l.rel)).map((l) => `${P(p)} -> ${l.href}`));
console.log('  nofollow external links:', nofollowAll.length, nofollowAll.slice(0, 8));
const noExtPosts = pages.filter((p) => p.type === 'blog-post' && p.external.length === 0);
console.log('  blog posts with ZERO external links:', noExtPosts.length, 'of', tot['blog-post']);
const genericAnchors = pages.flatMap((p) => p.external.filter((l) => /^(click here|here|read more|link|website|source|this)$/i.test(l.text.trim())).map((l) => `${P(p)} "${l.text}" -> ${l.href}`));
console.log('  generic anchor text on externals:', genericAnchors.length, genericAnchors.slice(0, 5));
const emptyInternal = pages.flatMap((p) => p.internal.filter((l) => !l.text && !l.aria).map((l) => `${P(p)} -> ${l.path}`));
console.log('  internal links with no anchor text / aria-label:', emptyInternal.length, emptyInternal.slice(0, 5));

fs.writeFileSync(path.join(D, 'pages-analysed.json'), JSON.stringify(pages.map((p) => ({ url: p.url, type: p.type, inbound: p.inbound, notIdx: notIdx.has(p.url), ext: p.external.length, int: p.internal.length, words: p.words, title: p.title, h1: p.h1s[0] }))));
fs.writeFileSync(path.join(D, 'external-urls.json'), JSON.stringify([...new Set(pages.flatMap((p) => p.external.map((l) => l.href)))]));
