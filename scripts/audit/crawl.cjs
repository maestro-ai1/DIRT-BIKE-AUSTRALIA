const fs = require('fs');
const path = require('path');
const BASE = 'https://electricdirtbikeaustralia.com.au';
const OUT = path.join(process.env.TEMP, 'audit');
fs.mkdirSync(OUT, { recursive: true });

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&quot;/g, '"')
   .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const strip = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

async function get(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'Mozilla/5.0 (compatible; EDBA-Audit/1.0)' } });
      const body = r.status >= 300 && r.status < 400 ? '' : await r.text();
      return { status: r.status, location: r.headers.get('location') || '', body, headers: Object.fromEntries(r.headers) };
    } catch (e) {
      if (i === tries - 1) return { status: 0, location: '', body: '', err: String(e), headers: {} };
      await new Promise((r) => setTimeout(r, 800));
    }
  }
}

function analyse(url, res) {
  const h = res.body;
  const rec = { url, status: res.status, location: res.location };
  if (!h) return rec;
  const m = (re) => (h.match(re) || [])[1];
  rec.title = decode(m(/<title[^>]*>([^<]*)<\/title>/i) || '');
  rec.desc = decode(m(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || m(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i) || '');
  rec.canonical = m(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i) || '';
  rec.robots = m(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/i) || '';
  rec.ogTitle = !!m(/<meta[^>]+property="og:title"/i) || /property="og:title"/.test(h);
  rec.ogImage = /property="og:image"/.test(h);
  rec.hreflang = /hreflang=/.test(h);
  rec.lang = m(/<html[^>]+lang="([^"]*)"/i) || '';
  // headings in document order
  const heads = [];
  const hre = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let hm;
  while ((hm = hre.exec(h))) heads.push({ l: +hm[1], t: strip(hm[2]) });
  rec.headings = heads;
  rec.h1s = heads.filter((x) => x.l === 1).map((x) => x.t);
  let skips = 0, prev = 0;
  for (const x of heads) { if (prev && x.l > prev + 1) skips++; prev = x.l; }
  rec.headingSkips = skips;
  // body text word count (strip scripts/styles/nav/footer approx)
  const mainHtml = h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
  rec.words = strip(mainHtml).split(' ').filter(Boolean).length;
  // images
  const imgs = [...h.matchAll(/<img\b[^>]*>/gi)].map((x) => x[0]);
  rec.imgCount = imgs.length;
  rec.imgNoAlt = imgs.filter((t) => !/\balt=/.test(t)).length;
  rec.imgEmptyAlt = imgs.filter((t) => /\balt=""/.test(t)).length;
  rec.imgNoSize = imgs.filter((t) => !/\bwidth=/.test(t) || !/\bheight=/.test(t)).length;
  // links
  const links = [...h.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map((x) => {
    const attrs = x[1];
    const href = (attrs.match(/\bhref="([^"]*)"/) || [])[1] || '';
    return {
      href: decode(href),
      rel: (attrs.match(/\brel="([^"]*)"/) || [])[1] || '',
      target: (attrs.match(/\btarget="([^"]*)"/) || [])[1] || '',
      text: strip(x[2]).slice(0, 90),
      aria: (attrs.match(/\baria-label="([^"]*)"/) || [])[1] || '',
    };
  });
  rec.internal = [];
  rec.external = [];
  for (const l of links) {
    if (!l.href || l.href.startsWith('#') || l.href.startsWith('mailto:') || l.href.startsWith('tel:') || l.href.startsWith('javascript:')) { rec.other = (rec.other || 0) + 1; continue; }
    if (l.href.startsWith('/')) rec.internal.push({ ...l, path: l.href.split('#')[0] });
    else if (l.href.startsWith(BASE)) rec.internal.push({ ...l, path: l.href.replace(BASE, '').split('#')[0] || '/' });
    else if (/^https?:\/\//.test(l.href)) rec.external.push(l);
  }
  // json-ld types
  rec.jsonld = [...h.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].flatMap((x) => {
    try { const j = JSON.parse(x[1]); const arr = Array.isArray(j) ? j : j['@graph'] || [j]; return arr.map((o) => o['@type']).flat(); } catch { return ['INVALID']; }
  });
  rec.xRobots = res.headers['x-robots-tag'] || '';
  return rec;
}

(async () => {
  const sm = (await get(BASE + '/sitemap.xml')).body;
  const entries = [...sm.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((x) => ({
    loc: (x[1].match(/<loc>([^<]+)<\/loc>/) || [])[1],
    lastmod: (x[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || '',
    hreflang: /xhtml:link/.test(x[1]),
  }));
  console.log('sitemap urls', entries.length);
  const results = [];
  let i = 0;
  const work = async () => {
    while (i < entries.length) {
      const e = entries[i++];
      const res = await get(e.loc);
      const rec = analyse(e.loc, res);
      rec.lastmod = e.lastmod;
      rec.smHreflang = e.hreflang;
      results.push(rec);
    }
  };
  await Promise.all(Array.from({ length: 8 }, work));
  results.sort((a, b) => a.url.localeCompare(b.url));
  fs.writeFileSync(path.join(OUT, 'pages.json'), JSON.stringify(results));
  console.log('crawled', results.length, 'non-200:', results.filter((r) => r.status !== 200).length);
})();
