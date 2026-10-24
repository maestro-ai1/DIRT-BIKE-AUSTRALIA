const fs = require('fs');
const path = require('path');
const D = path.join(process.env.TEMP, 'audit');
const BASE = 'https://electricdirtbikeaustralia.com.au';
const pages = JSON.parse(fs.readFileSync(path.join(D, 'pages.json'), 'utf8'));
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
const strip = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const typeOf = (u) => { const p = u.replace(BASE, ''); if (p === '/') return 'home'; if (/^\/shop\/[^/]+\/$/.test(p)) return 'product'; if (/^\/blog\/tag\//.test(p)) return 'blog-tag'; if (/^\/blog\/[^/]+\/$/.test(p)) return 'blog-post'; if (p === '/blog/' || p === '/shop/') return 'index'; return 'category/info'; };
(async () => {
  const recs = [];
  let i = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (i < pages.length) {
      const p = pages[i++];
      const h = (await (await fetch(p.url)).text()).replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
      const paras = [...h.matchAll(/<(p|li|summary|h2|h3|h4)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((m) => ({ tag: m[1], t: strip(m[2]) })).filter((x) => x.t.split(' ').length >= 5);
      recs.push({ url: p.url, type: typeOf(p.url), paras });
    }
  }));
  const freq = {};
  recs.forEach((r) => new Set(r.paras.map((x) => x.t)).forEach((t) => (freq[t] = (freq[t] || 0) + 1)));
  const boiler = (t) => freq[t] >= Math.max(8, recs.length * 0.12);
  recs.forEach((r) => {
    r.uniqueWords = r.paras.filter((x) => !boiler(x.t)).reduce((a, x) => a + x.t.split(' ').length, 0);
    r.proseWords = r.paras.filter((x) => x.tag === 'p' && !boiler(x.t)).reduce((a, x) => a + x.t.split(' ').length, 0);
    r.text = r.paras.filter((x) => !boiler(x.t)).map((x) => x.t).join(' \n ');
  });
  fs.writeFileSync(path.join(D, 'unique.json'), JSON.stringify(recs.map((r) => ({ url: r.url, type: r.type, uniqueWords: r.uniqueWords, proseWords: r.proseWords, text: r.text }))));
  const q = (arr, k) => { const v = arr.map((x) => x[k]).sort((a, b) => a - b); return `n=${v.length} min=${v[0]} p25=${v[Math.floor(v.length * 0.25)]} med=${v[Math.floor(v.length / 2)]} p75=${v[Math.floor(v.length * 0.75)]} max=${v[v.length - 1]}`; };
  for (const ty of ['blog-post', 'product', 'category/info', 'blog-tag']) console.log(ty.padEnd(14), 'unique-words:', q(recs.filter((x) => x.type === ty), 'uniqueWords'));
  const bp = recs.filter((x) => x.type === 'blog-post').sort((a, b) => a.uniqueWords - b.uniqueWords);
  console.log('\nBLOG POSTS unique words: <600:', bp.filter((x) => x.uniqueWords < 600).length, ' 600-999:', bp.filter((x) => x.uniqueWords >= 600 && x.uniqueWords < 1000).length, ' 1000-1499:', bp.filter((x) => x.uniqueWords >= 1000 && x.uniqueWords < 1500).length, ' >=1500:', bp.filter((x) => x.uniqueWords >= 1500).length);
  console.log('Thinnest 25 blog posts:'); bp.slice(0, 25).forEach((x) => console.log('  ' + String(x.uniqueWords).padStart(5) + 'w ' + x.url.replace(BASE, '')));
  const pr = recs.filter((x) => x.type === 'product').sort((a, b) => a.uniqueWords - b.uniqueWords);
  console.log('\nThinnest 12 product pages:'); pr.slice(0, 12).forEach((x) => console.log('  ' + String(x.uniqueWords).padStart(5) + 'w ' + x.url.replace(BASE, '')));
  console.log('Product pages < 250 unique words:', pr.filter((x) => x.uniqueWords < 250).length, 'of', pr.length);
  const cat = recs.filter((x) => x.type === 'category/info').sort((a, b) => a.uniqueWords - b.uniqueWords);
  console.log('\nThinnest 12 category/info:'); cat.slice(0, 12).forEach((x) => console.log('  ' + String(x.uniqueWords).padStart(5) + 'w ' + x.url.replace(BASE, '')));
  // RTR contradiction
  const risky = /RTR[^.\n]{0,120}(250\s?W|pedal[- ]assist|licen[cs]e[- ]free|classified as a bicycle)|(250\s?W|pedal[- ]assist)[^.\n]{0,100}RTR/i;
  console.log('\nRTR contradiction scan:'); recs.filter((r) => risky.test(r.text)).forEach((r) => console.log('  ' + r.url.replace(BASE, '') + ' :: ' + (r.text.match(risky) || [''])[0].slice(0, 200)));
})();
