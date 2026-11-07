// Builds src/config/product-keywords.json: one primary + 5 secondary + 5 FAQ keywords per product (Golden Keyword Rule, Master Product Rule).
// Run from the repo root:  node scripts/gen-product-keywords.cjs
// Bank keywords (source "bank") come from the user's Semrush AU exports via "new keywords e bikes/fullbank.cjs".
// Where the bank has no keyword that names the model, the product gets name-based phrases (source "name") built from its own name, which are
// unique per product by construction. Those are listed in docs/semrush-seed-list-products.csv as the Semrush request list; they are never shown as bank keywords.
const fs = require('fs');
const path = require('path');
const R = path.resolve(__dirname, '..') + '/';
const KW = path.resolve(R, '../new keywords e bikes');
const ts = require(R + 'node_modules/typescript');
const cache = {};
function load(f) {
  f = path.resolve(f);
  if (cache[f]) return cache[f].exports;
  const out = ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { module: 'commonjs', target: 'es2020', esModuleInterop: true, jsx: 'react' } }).outputText;
  const m = { exports: {} };
  cache[f] = m;
  const req = (p) => {
    if (p.startsWith('@/')) p = path.resolve(R, p.slice(2));
    else if (p.startsWith('.')) p = path.resolve(path.dirname(f), p);
    else return require(R + 'node_modules/' + p);
    for (const e of ['', '.ts', '.tsx', '.js', '.json']) if (fs.existsSync(p + e) && fs.statSync(p + e).isFile()) return /\.json$/.test(p + e) ? JSON.parse(fs.readFileSync(p + e, 'utf8')) : load(p + e);
    return require(p);
  };
  new Function('exports', 'require', 'module', '__filename', '__dirname', out)(m.exports, req, m, f, path.dirname(f));
  return m.exports;
}
process.chdir(KW);
const { bank } = require(KW + '/fullbank.cjs');
const norm = (s) => String(s).toLowerCase().replace(/\+/g, ' plus ').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const compact = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '');
const stem = (s) => norm(s).split(' ').map((w) => (w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w)).join(' ').replace(/\bebike\b/g, 'e bike').replace(/\bdirtbike\b/g, 'dirt bike');
const cls = (r) => (/transactional/i.test(r) ? 'T' : /commercial/i.test(r) ? 'C' : /navigational/i.test(r) ? 'N' : /informational/i.test(r) ? 'I' : '?');
const s = load(R + 'src/config/site.ts');
const seo = load(R + 'src/config/seo.ts');
const ps = load(R + 'lib/productSeo.ts');

// keywords already owned by a page or a blog primary are never given to a product
const claimed = new Set();
for (const e of Object.values(seo.PAGE_SEO)) [e.main, ...(e.primary || []), ...String(e.keywords || '').split(',').map((x) => x.trim())].forEach((k) => k && claimed.add(stem(k)));
for (const p of s.POSTS) if (p.primaryKeyword) claimed.add(stem(p.primaryKeyword));

const GEN = new Set('e ebike bike bikes electric dirt motorbike motorcycle for sale price cheap australia australian au buy online review specs best new kids kid youth the a vs near me cost'.split(' '));
const COMMON = new Set('black white blue red green pink grey gray silver orange yellow pearl mini pro lite sport trail enduro motocross mx off road offroad fat tyre tire pit balance cruiser commuter junior youth adult teen teens plus max ultra air x xl xs s m l one 2 3 4 5 lithium battery charger kit set edition inch 12 14 16 20 24 26 dual suspension full hydraulic front rear seat motor moto v1 v2 v3 mk ii'.split(' '));
const B = [...bank.values()].map((k) => ({ kw: k.kw, n: norm(k.kw), st: stem(k.kw), vol: k.vol, kd: k.kd, i: cls(k.raw) })).filter((k) => k.vol >= 50 && k.kd <= 28);

const rows = [];
const info = s.PRODUCTS.map((p) => {
  const kind = ps.productKind(p);
  const short = ps.shortName(p.name);
  const brand = norm(p.brand).split(' ');
  const name = norm(short).split(' ');
  const set = new Set([...name, ...brand, ...(/sur ron/.test(norm(p.brand)) ? ['surron'] : [])]);
  const model = name.filter((w) => !brand.includes(w) && !GEN.has(w) && !COMMON.has(w) && !/^\d+(v|ah|w|kw|wh|mm|cc|kg|km|h)?$/.test(w));
  let fallback = false;
  if (!model.length) fallback = true;
  if (!model.length) model.push(...name.filter((w) => !brand.includes(w) && !GEN.has(w) && !/^d+(v|ah|w|kw|wh|mm|cc|kg|km|h)?$/.test(w)));
  const vehicle = !['part', 'battery', 'charger'].includes(kind);
  const cand = vehicle ? B.filter((k) => { const w = k.n.split(' '); return w.length >= 2 && w.every((t) => set.has(t) || GEN.has(t)) && model.some((m) => w.includes(m)) && (!fallback || w.some((t) => brand.includes(t) || (t === 'surron'))) && compact(p.name).includes(compact(k.kw)); }) : [];
  return { p, short, kind, name, set, cand };
});
// a bank keyword goes to the one product whose name covers it best
const best = new Map();
for (const x of info) for (const k of x.cand) { const sc = k.n.split(' ').filter((t) => x.set.has(t)).length / x.name.length; const b = best.get(k.st); if (!b || sc > b.sc || (sc === b.sc && x.name.length < b.len)) best.set(k.st, { slug: x.p.slug, sc, len: x.name.length }); }

const out = {};
for (const x of info) {
  const mine = x.cand.filter((k) => !claimed.has(k.st) && best.get(k.st).slug === x.p.slug);
  const tc = mine.filter((k) => /[TC]/.test(k.i)).sort((a, b) => b.vol - a.vol || (a.i === 'T' ? -1 : 1));
  const nn = mine.filter((k) => !/[TC]/.test(k.i)).sort((a, b) => b.vol - a.vol);
  let primary = tc[0] || null;
  if (nn[0] && (!primary || nn[0].vol >= 2 * primary.vol)) primary = nn[0];
  const short = x.short.split(',')[0].replace(/\s+/g, ' ').trim();
  const entry = { primary: null, secondary: [], faq: [] };
  const used = new Set();
  const push = (arr, kw, src, meta) => { const key = stem(kw); if (used.has(key)) return; used.add(key); arr.push(Object.assign({ keyword: kw, source: src }, meta || {})); };
  if (primary) { push([], primary.kw, 'bank'); entry.primary = { keyword: primary.kw, volume: primary.vol, kd: primary.kd, intent: primary.i, source: 'bank' }; claimed.add(primary.st); }
  else { entry.primary = { keyword: short, source: 'name' }; used.add(stem(entry.primary.keyword)); }
  for (const k of tc.filter((k) => k !== primary).slice(0, 5)) { push(entry.secondary, k.kw, 'bank', { volume: k.vol, kd: k.kd, intent: k.i }); claimed.add(k.st); }
  for (const kw of [`${short} for sale`, `${short} price`, `buy ${short}`, `${short} specs`, `${short} warranty`, `order ${short}`, `${short} Australia`]) { if (entry.secondary.length >= 5) break; push(entry.secondary, kw, 'name'); }
  for (const kw of [`${short} range`, `${short} top speed`, `${short} battery`, `${short} delivery`, `${short} finance`]) push(entry.faq, kw, 'name');
  out[x.p.slug] = entry;
  rows.push([x.p.slug, x.p.brand, short, entry.primary.keyword, entry.primary.source, entry.primary.volume || '', entry.primary.kd || '', entry.primary.intent || '', entry.secondary.filter((k) => k.source === 'bank').length]);
}
fs.writeFileSync(R + 'src/config/product-keywords.json', JSON.stringify(out, null, 1));
const bankN = rows.filter((r) => r[4] === 'bank').length;
console.log('products', rows.length, '| bank primary', bankN, '| name-based primary', rows.length - bankN, '| bank secondaries', rows.reduce((a, r) => a + r[8], 0));
fs.writeFileSync(R + 'docs/product-keyword-map-2026-11-07.csv', 'slug,brand,name,primary,source,volume,kd,intent,bank_secondaries\n' + rows.map((r) => r.map((x) => '"' + String(x).replace(/"/g, '""') + '"').join(',')).join('\n'));
