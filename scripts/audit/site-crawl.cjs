// Local/live crawl: sitemap URLs must be 200; every internal link on those pages must resolve (200) ; retired URLs must 308 to a live page.
const B = (process.argv[2] || 'http://localhost:3210').replace(/\/$/, '');
const fs = require('fs');
const retired = Object.fromEntries([...fs.readFileSync(__dirname + '/../../src/config/retired-posts.ts', 'utf8').matchAll(/^  '([^']+)': '([^']+)'/gm)].map((m) => [m[1], m[2]]));
(async () => {
  const sm = await (await fetch(B + '/sitemap.xml')).text();
  const urls = [...sm.matchAll(/<loc>https:\/\/electricdirtbikeaustralia\.com\.au([^<]*)<\/loc>/g)].map((m) => m[1]);
  console.log('sitemap urls', urls.length);
  const links = new Map(); const bad = []; let i = 0;
  const w = async () => { while (i < urls.length) { const u = urls[i++]; const r = await fetch(B + u, { redirect: 'manual' }); if (r.status !== 200) { bad.push(['SITEMAP ' + r.status, u]); continue; }
    const h = await r.text(); for (const m of h.matchAll(/href="(\/[^"#?]*)"/g)) { const l = m[1]; if (/^\/(images|_next|favicon|api)/.test(l) || /\.[a-z0-9]+$/i.test(l)) continue; if (!links.has(l)) links.set(l, u); } } };
  await Promise.all(Array.from({ length: 8 }, w));
  const ls = [...links.keys()]; let j = 0;
  const w2 = async () => { while (j < ls.length) { const l = ls[j++]; const r = await fetch(B + l, { redirect: 'manual' }); if (r.status !== 200) bad.push(['LINK ' + r.status + (r.headers.get('location') ? ' -> ' + r.headers.get('location') : ''), l + '   (on ' + links.get(l) + ')']); } };
  await Promise.all(Array.from({ length: 8 }, w2));
  console.log('internal links checked', ls.length);
  for (const [s, d] of Object.entries(retired)) { const r = await fetch(B + '/blog/' + s + '/', { redirect: 'manual' }); const loc = r.headers.get('location') || ''; if (r.status !== 308 || !loc.endsWith(d)) bad.push(['RETIRED ' + r.status + ' ' + loc, s]); }
  console.log('retired checked', Object.keys(retired).length);
  bad.forEach((b) => console.log(b.join(' | ')));
  console.log('PROBLEMS', bad.length);
})();
