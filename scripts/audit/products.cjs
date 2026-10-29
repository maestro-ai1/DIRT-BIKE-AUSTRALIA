// Master Product Optimization Rule audit: every product page (live or local) against the 5 checklist items.
// usage: node scripts/audit/products.cjs [baseUrl] [--slug x]   (default https://electricdirtbikeaustralia.com.au)
const fs = require('fs');
const path = require('path');
const Module = require('module');
const ROOT = path.resolve(__dirname, '../..');
const ts = require(ROOT + '/node_modules/typescript');
const origResolve = Module._resolveFilename;
Module._resolveFilename = function (req, parent, ...rest) {
  if (req.startsWith('@/')) req = path.join(ROOT, req.slice(2));
  if (/^\.{1,2}\//.test(req) || path.isAbsolute(req)) {
    const base = path.isAbsolute(req) ? req : path.resolve(path.dirname(parent.filename), req);
    for (const ext of ['', '.ts', '.tsx', '.js', '/index.ts']) if (fs.existsSync(base + ext) && fs.statSync(base + ext).isFile()) return base + ext;
  }
  return origResolve.call(this, req, parent, ...rest);
};
Module._extensions['.ts'] = function (mod, filename) {
  mod._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText, filename);
};
const site = require(ROOT + '/src/config/site.ts');
const seo = require(ROOT + '/lib/productSeo.ts');
const BASE = (process.argv[2] && process.argv[2].startsWith('http') ? process.argv[2] : 'https://electricdirtbikeaustralia.com.au').replace(/\/$/, '');
const only = process.argv.includes('--slug') ? process.argv[process.argv.indexOf('--slug') + 1] : null;
const dec = (x) => x.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/\s+/g, ' ');

(async () => {
  const rows = [];
  const prods = site.PRODUCTS.filter((p) => !only || p.slug === only);
  let i = 0;
  const worker = async () => {
    while (i < prods.length) {
      const p = prods[i++];
      let html = '';
      try { html = await (await fetch(`${BASE}/shop/${p.slug}/`)).text(); } catch { rows.push({ slug: p.slug, err: 'fetch' }); continue; }
      const primary = seo.shortName(p.name);
      const sec = seo.productSecondary(p);
      const tags = seo.getProductTags(p);
      const title = dec((html.match(/<title>([^<]*)<\/title>/) || [, ''])[1]);
      const desc = dec((html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]);
      const h1s = [...html.matchAll(/<h1[\s\S]*?<\/h1>/g)].map((m) => strip(m[0]).trim());
      const h2 = (html.match(/<h2[\s>]/g) || []).length, h3 = (html.match(/<h3[\s>]/g) || []).length;
      const hrefs = [...html.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]);
      const ext = hrefs.filter((h) => /^https?:/.test(h) && !h.includes('electricdirtbikeaustralia.com.au') && !/wa\.me|facebook|instagram|youtube|tiktok|trustpilot/.test(h));
      const inCat = hrefs.filter((h) => /^\/(electric-|shop\/\?|brands\/|accessories)/.test(h));
      const faqSchema = /"@type":"FAQPage"/.test(html);
      const faqQs = (html.match(/"@type":"Question"/g) || []).length;
      const imgs = [...html.matchAll(/<img [^>]*>/g)].map((m) => m[0]).filter((t) => /width="1200"/.test(t));
      const alts = imgs.map((t) => (t.match(/alt="([^"]*)"/) || [, ''])[1]);
      const nTok = norm(primary).split(' ').filter((w) => w.length > 2);
      const hasPrimary = (s) => { const n = norm(s); return nTok.every((w) => n.includes(w)); };
      const nTags = tags.length, linkedTags = tags.filter((t) => t.href).length;
      const body = norm(strip(html));
      const secList = seo.productSecondaries(p);
      const secHits = secList.filter((k) => body.includes(norm(k))).length;
      const checks = {
        h1: h1s.length === 1 && hasPrimary(h1s[0]),
        headings: h2 >= 3 && h3 >= 1,
        inbound: inCat.length >= 3,
        outbound: ext.length >= 1,
        faq: faqSchema && faqQs >= 5,
        meta: hasPrimary(title) && hasPrimary(desc) && title.length <= 68 && desc.length >= 110 && desc.length <= 165,
        alt: alts.length > 0 && alts.every((a) => hasPrimary(a)),
        tags10: nTags === 10 && linkedTags === 10,
        secondary5: secList.length === 5 && secHits >= 5,
      };
      rows.push({ slug: p.slug, primary, h1: h1s.length, h2, h3, inCat: inCat.length, ext: ext.length, faqQs, imgs: alts.length, altOk: alts.filter(hasPrimary).length, tags: nTags, linked: linkedTags, titleLen: title.length, descLen: desc.length, secUsed: secHits, checks });
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  rows.sort((a, b) => a.slug.localeCompare(b.slug));
  const keys = ['h1', 'headings', 'inbound', 'outbound', 'faq', 'meta', 'alt', 'tags10', 'secondary5'];
  console.log('products audited:', rows.length);
  for (const k of keys) console.log(k.padEnd(10), rows.filter((r) => r.checks && r.checks[k]).length + '/' + rows.length);
  const perfect = rows.filter((r) => r.checks && keys.every((k) => r.checks[k])).length;
  console.log('products passing all 8 checks:', perfect);
  fs.writeFileSync(path.join(process.env.TEMP || '.', 'products-audit.json'), JSON.stringify(rows, null, 1));
  const worst = {};
  for (const r of rows) if (r.checks) for (const k of keys) if (!r.checks[k]) (worst[k] = worst[k] || []).push(r.slug);
  for (const k of Object.keys(worst)) console.log('FAIL ' + k + ':', worst[k].length, worst[k].slice(0, 4).join(', '));
  const t = rows.map((r) => r.tags);
  console.log('tag counts:', [...new Set(t)].map((n) => n + 'x' + t.filter((x) => x === n).length).join(' '));
  console.log('tags not clickable (total):', rows.reduce((a, r) => a + (r.tags - r.linked), 0));
})();
