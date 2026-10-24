const fs = require('fs');
const path = require('path');
const D = path.join(process.env.TEMP, 'audit');
const urls = JSON.parse(fs.readFileSync(path.join(D, 'external-urls.json'), 'utf8')).filter((u) => !u.includes('electricdirtbikeaustralia.com.au'));
const pages = JSON.parse(fs.readFileSync(path.join(D, 'pages.json'), 'utf8'));
const usage = {};
pages.forEach((p) => p.external.forEach((l) => { (usage[l.href] = usage[l.href] || { n: 0, pages: new Set(), anchors: new Set() }); usage[l.href].n++; usage[l.href].pages.add(p.url); usage[l.href].anchors.add(l.text); }));

async function check(u) {
  const t0 = Date.now();
  for (const method of ['HEAD', 'GET']) {
    try {
      const ctl = new AbortController();
      const to = setTimeout(() => ctl.abort(), 15000);
      const r = await fetch(u, { method, redirect: 'manual', signal: ctl.signal, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36', Accept: 'text/html,*/*' } });
      clearTimeout(to);
      if (method === 'HEAD' && (r.status === 405 || r.status === 403 || r.status === 400 || r.status === 501)) continue;
      return { u, status: r.status, loc: r.headers.get('location') || '', ms: Date.now() - t0 };
    } catch (e) {
      if (method === 'GET') return { u, status: 0, loc: String(e.cause?.code || e.name), ms: Date.now() - t0 };
    }
  }
}
(async () => {
  const res = [];
  let i = 0;
  await Promise.all(Array.from({ length: 6 }, async () => { while (i < urls.length) { const u = urls[i++]; res.push(await check(u)); } }));
  res.sort((a, b) => a.u.localeCompare(b.u));
  console.log('unique external urls:', res.length);
  res.forEach((r) => {
    const us = usage[r.u];
    const flag = r.status === 200 ? 'OK ' : r.status >= 300 && r.status < 400 ? 'RDR' : 'BAD';
    console.log(`${flag} ${String(r.status).padEnd(3)} used=${String(us.n).padStart(3)}x/${String(us.pages.size).padStart(3)}pg  ${r.u}${r.loc ? '  -> ' + r.loc : ''}  [${[...us.anchors].slice(0, 2).join(' | ')}]`);
  });
  fs.writeFileSync(path.join(D, 'extcheck.json'), JSON.stringify(res));
})();
