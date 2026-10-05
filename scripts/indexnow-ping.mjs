// scripts/indexnow-ping.mjs
// Tells Bing (and other IndexNow engines) which URLs exist or changed, using the IndexNow key file in /public.
// Usage:   node scripts/indexnow-ping.mjs            (all URLs in the live sitemap)
//          node scripts/indexnow-ping.mjs /shop/ /electric-bikes/    (only these paths)
// Run it after every deploy that adds or changes pages. Bing accepts up to 10,000 URLs per request.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'electricdirtbikeaustralia.com.au';
const keyFile = fs.readdirSync(path.join(root, 'public')).find((f) => /indexnow\.txt$/.test(f));
if (!keyFile) throw new Error('No IndexNow key file found in public/');
const key = fs.readFileSync(path.join(root, 'public', keyFile), 'utf8').trim();
const keyLocation = `https://${HOST}/${keyFile}`;

async function urls() {
  const args = process.argv.slice(2);
  if (args.length) return args.map((p) => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`);
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urlList = await urls();
// The key file must be reachable and match, otherwise IndexNow rejects the submission with 403.
const check = await fetch(keyLocation);
const body = (await check.text()).trim();
console.log(`key file ${keyLocation} -> HTTP ${check.status}, matches key: ${body === key}`);
if (check.status !== 200 || body !== key) throw new Error('IndexNow key file is not reachable or does not match.');

for (const endpoint of ['https://www.bing.com/indexnow', 'https://api.indexnow.org/indexnow']) {
  const r = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
  });
  // 200 = accepted, 202 = accepted and key validation pending. 403 = key invalid. 422 = URLs do not match host. 429 = too many requests.
  console.log(`${endpoint} -> HTTP ${r.status} (${urlList.length} URLs)`);
}
