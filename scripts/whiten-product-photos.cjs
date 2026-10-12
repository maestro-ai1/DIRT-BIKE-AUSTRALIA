// scripts/whiten-product-photos.cjs
// Brings real product photos with dark (studio black) or off-white backgrounds to the site image rule: 1200x900, bright white background,
// whole product visible. No stock photos and no AI: the background is the region connected to the image border that is near the border colour.
// Usage: node scripts/whiten-product-photos.cjs [--dry] [--out <dir>] [--only <substring>]
//   default: writes the cleaned image over the original path (same extension) after copying the original to <backup>/<path>.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
sharp.cache(false); // Windows: libvips otherwise keeps source files open, which blocks overwriting them
const ts = require('typescript');

const ROOT = path.resolve(__dirname, '..');
const PUB = path.join(ROOT, 'public');
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const ONLY = args.includes('--only') ? args[args.indexOf('--only') + 1] : '';
const PREVIEW = args.includes('--preview') ? args[args.indexOf('--preview') + 1] : '';
const EXCLUDE = (args.includes('--exclude') ? args[args.indexOf('--exclude') + 1] : '').split(',').filter(Boolean);
const BACKUP = args.includes('--out') ? args[args.indexOf('--out') + 1] : path.resolve(ROOT, '..', 'seo-backup-2026-10-12', 'images-before-whitening');

// ---- list every product image referenced by PRODUCTS ----
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
const { PRODUCTS } = load(path.join(ROOT, 'src/config/site.ts'));
const imgs = new Set();
PRODUCTS.forEach((p) => (p.images || []).forEach((i) => i && imgs.add(i)));

// ---- background detection + flood fill ----
const lum = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

async function analyse(file) {
  const { data, info } = await sharp(fs.readFileSync(file)).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  // border colour = median of border pixels
  const border = [];
  const push = (x, y) => { const i = (y * w + x) * 3; border.push([data[i], data[i + 1], data[i + 2]]); };
  for (let x = 0; x < w; x += 3) { push(x, 0); push(x, h - 1); }
  for (let y = 0; y < h; y += 3) { push(0, y); push(w - 1, y); }
  const med = [0, 1, 2].map((c) => border.map((p) => p[c]).sort((a, b) => a - b)[Math.floor(border.length / 2)]);
  return { data, w, h, bg: med, bgLum: lum(...med) };
}

function floodBackground(data, w, h, bg, tol) {
  const mask = new Uint8Array(w * h); // 1 = background
  const q = new Int32Array(w * h);
  let qs = 0, qe = 0;
  const close = (i) => Math.abs(data[i * 3] - bg[0]) <= tol && Math.abs(data[i * 3 + 1] - bg[1]) <= tol && Math.abs(data[i * 3 + 2] - bg[2]) <= tol;
  const seed = (x, y) => { const i = y * w + x; if (!mask[i] && close(i)) { mask[i] = 1; q[qe++] = i; } };
  for (let x = 0; x < w; x++) { seed(x, 0); seed(x, h - 1); }
  for (let y = 0; y < h; y++) { seed(0, y); seed(w - 1, y); }
  while (qs < qe) {
    const i = q[qs++];
    const x = i % w, y = (i - x) / w;
    if (x > 0) { const j = i - 1; if (!mask[j] && close(j)) { mask[j] = 1; q[qe++] = j; } }
    if (x < w - 1) { const j = i + 1; if (!mask[j] && close(j)) { mask[j] = 1; q[qe++] = j; } }
    if (y > 0) { const j = i - w; if (!mask[j] && close(j)) { mask[j] = 1; q[qe++] = j; } }
    if (y < h - 1) { const j = i + w; if (!mask[j] && close(j)) { mask[j] = 1; q[qe++] = j; } }
  }
  return mask;
}

async function whiten(file) {
  const a = await analyse(file);
  const { data, w, h, bg } = a;
  const isDark = a.bgLum < 70;
  const tol = isDark ? 26 : 14;
  const mask = floodBackground(data, w, h, bg, tol);
  const bgShare = mask.reduce((s, v) => s + v, 0) / (w * h);
  // soften the cut: a foreground pixel touching background and still close to the background colour is treated as background (kills halos)
  const out = Buffer.alloc(w * h * 3, 255);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (mask[i]) continue;
      const touches = (x > 0 && mask[i - 1]) || (x < w - 1 && mask[i + 1]) || (y > 0 && mask[i - w]) || (y < h - 1 && mask[i + w]);
      const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2];
      if (touches && Math.abs(lum(r, g, b) - a.bgLum) < (isDark ? 30 : 10)) continue; // stays white
      out[i * 3] = r; out[i * 3 + 1] = g; out[i * 3 + 2] = b;
    }
  }
  return { out, w, h, bgShare, isDark };
}

async function render(file) {
  const r = await whiten(file);
  // reject if the fill ate almost nothing (background not uniform) or almost everything (dark product on dark field)
  if (r.bgShare < 0.12 || r.bgShare > 0.96) return { skip: `bg share ${(r.bgShare * 100).toFixed(0)}%` };
  const base = sharp(r.out, { raw: { width: r.w, height: r.h, channels: 3 } });
  const trimmed = await base.clone().trim({ background: '#ffffff', threshold: 10 }).png().toBuffer();
  const fit = await sharp(trimmed).resize({ width: 1020, height: 760, fit: 'inside' }).png().toBuffer();
  const buf = await sharp({ create: { width: 1200, height: 900, channels: 3, background: '#ffffff' } }).composite([{ input: fit, gravity: 'centre' }]);
  return { sharp: buf, share: r.bgShare };
}

(async () => {
  const report = [];
  let n = 0;
  for (const rel of [...imgs].sort()) {
    if (ONLY && !rel.includes(ONLY)) continue;
    if (EXCLUDE.some((x) => rel.includes(x))) continue; // photos with a floor shadow/reflection: left untouched
    const file = path.join(PUB, rel);
    if (!fs.existsSync(file)) continue;
    let a;
    try { a = await analyse(file); } catch { continue; }
    const needs = a.bgLum < 252;
    if (!needs) continue; // already bright white
    const res = await render(file);
    if (res.skip) { report.push([rel, 'SKIP', res.skip]); continue; }
    n++;
    report.push([rel, DRY ? 'would clean' : 'cleaned', `bg ${(res.share * 100).toFixed(0)}% (border lum ${a.bgLum.toFixed(0)})`]);
    if (DRY) continue;
    if (PREVIEW) { fs.mkdirSync(PREVIEW, { recursive: true }); await res.sharp.jpeg({ quality: 88 }).toFile(path.join(PREVIEW, rel.replace(/[/]/g, '__').replace(/.(avif|webp|png)$/i, '.jpg'))); continue; }
    const bk = path.join(BACKUP, rel);
    if (!fs.existsSync(bk)) { fs.mkdirSync(path.dirname(bk), { recursive: true }); fs.copyFileSync(file, bk); }
    const ext = path.extname(file).toLowerCase();
    const s = res.sharp;
    const tmp = file + '.tmp';
    if (ext === '.png') await s.png().toFile(tmp);
    else if (ext === '.webp') await s.webp({ quality: 88 }).toFile(tmp);
    else if (ext === '.avif') await s.avif({ quality: 70 }).toFile(tmp);
    else await s.jpeg({ quality: 90 }).toFile(tmp);
    try { fs.renameSync(tmp, file); } catch { fs.copyFileSync(tmp, file); fs.unlinkSync(tmp); }
  }
  report.forEach((r) => console.log(r.join(' | ')));
  console.log('candidates', report.length, '| written', DRY ? 0 : n);
})();
