// One-off: put 13 over-length blog titles into SEO_TITLES (<=60 chars, primary-led) and stop the " | EDBA Blog" suffix pushing titles past 60.
const fs = require('fs');
const f = require('path').resolve(__dirname, '../../src/config/blog-seo.ts');
let t = fs.readFileSync(f, 'utf8');
const N = {
  'talaria-sting-review-australia': 'Talaria Sting Review Australia: Tested Power & Price',
  'electric-bike-laws-qld-2026': 'Electric Bike Laws QLD 2026: Power, Age, Licence, Fines',
  'australian-electric-motorcycle-guide-2026': 'Australian Electric Motorcycle Guide 2026: Models & Prices',
  'e-ride-pro-ss-2-0-vs-sr-specs-price': 'E-Ride Pro SS 2.0 vs SR: Specs, Price & Which to Buy',
  'e-bike-safety-australia-guide': 'E-Bike Safety Australia: Helmets, Batteries & Riding Tips',
  'childs-dirt-bike-australia-electric-options': 'Childs Dirt Bike Australia: Best Electric Options by Age',
  'adult-electric-dirt-bike-australia-best-models': 'Adult Electric Dirt Bike Australia: Best Models by Use',
  '125cc-dirt-bike-australia-electric-alternatives': '125cc Dirt Bike Australia: Electric Alternatives Compared',
  'kids-ebike-australia-evo-racing-lil-rippa-compared': 'Kids Ebike Australia: EVO Racing, Lil Rippa, Warrior',
  'cheapest-electric-dirt-bike-australia-price-ladder': 'Cheapest Electric Dirt Bike Australia: Price Ladder',
  '2-stroke-dirt-bike-vs-electric-dirt-bike': '2 Stroke Dirt Bike vs Electric Dirt Bike: Cost & Power',
  'affordable-dirt-bikes-australia-electric-value': 'Affordable Dirt Bikes Australia: Electric Options by Budget',
  'e-bikes-victoria-buying-guide': 'E Bikes Victoria: Buying Guide for Melbourne Riders',
};
const start = t.indexOf('export const SEO_TITLES');
const end = t.indexOf('\n};', start);
let body = t.slice(start, end);
for (const [k, v] of Object.entries(N)) {
  const line = '  "' + k + '": "' + v.replace(/"/g, '\\"') + '",';
  const idx = body.indexOf('"' + k + '":');
  if (idx >= 0) { const e = body.indexOf('\n', idx); body = body.slice(0, body.lastIndexOf('\n', idx) + 1) + line + body.slice(e); }
  else body += '\n' + line;
}
t = t.slice(0, start) + body + t.slice(end);
t = t.replace('return title.length + 11 <= 70 ? `${title} | EDBA Blog` : title;', 'return title.length + 12 <= 60 ? `${title} | EDBA Blog` : title;');
fs.writeFileSync(f, t);
console.log('suffix rule updated:', t.includes('title.length + 12 <= 60'), '| keys present:', Object.keys(N).filter((k) => t.includes('"' + k + '"')).length);
