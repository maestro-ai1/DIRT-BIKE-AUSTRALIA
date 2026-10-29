// Re-points hard-coded blog slugs of retired posts (src/config/retired-posts.ts) in related-guides.ts and lib/productGuide.ts.
const fs = require('fs');
const sub = (f, pairs) => { let t = fs.readFileSync(f, 'utf8'); const crlf = t.includes('\r\n'); t = t.replace(/\r\n/g, '\n'); for (const [a, b] of pairs) { if (!t.includes(a)) throw new Error(f + ' missing: ' + a.slice(0, 60)); t = t.split(a).join(b); } fs.writeFileSync(f, crlf ? t.replace(/\n/g, '\r\n') : t); };
sub('lib/productGuide.ts', [
  ["['what-age-can-kids-ride-electric-dirt-bikes', 'what age kids can ride electric dirt bikes']", "['kids-electric-motorbike-australia-buyers-guide', 'kids electric motorbike buyers guide']"],
  ["['electric-dirt-bike-licence-requirements-australia', 'electric dirt bike licence rules']", "['road-legal-electric-motorcycle-australia-guide', 'road legal electric motorcycle rules']"],
  ["['future-of-electric-motocross-racing-in-australia', 'the future of electric motocross in Australia']", "['electric-dirt-motorcycle-power-classes-explained', 'electric dirt motorcycle power classes explained']"],
  ["['how-to-charge-maintain-electric-dirt-bike-batteries', 'how to charge and maintain electric dirt bike batteries']", "['e-bike-battery-replacement-australia-cost-guide', 'e-bike battery replacement cost guide']"],
  ["['essential-aftermarket-mods-for-surron-light-bee-x', 'essential aftermarket mods'], ['electric-dirt-bike-servicing-cost-guide-australia', 'electric dirt bike servicing costs']", "['e-bike-battery-guide-voltage-capacity-range', 'e-bike battery guide'], ['electric-dirt-motorcycle-power-classes-explained', 'electric dirt motorcycle power classes explained']"],
]);
sub('src/config/related-guides.ts', [
  ["'e-ride-pro-australia-buyers-guide', 'e-ride-pro-ss-2-0-vs-sr-specs-price', 'e-ride-pro-australia-review'", "'e-ride-pro-australia-buyers-guide', 'e-ride-pro-ss-2-0-vs-sr-specs-price'"],
  ["'sur-ron-horsepower-power-specs-explained', 'essential-aftermarket-mods-for-surron-light-bee-x'", "'sur-ron-light-bee-x-price-australia-what-you-get'"],
  ["'cheapest-electric-dirt-bike-australia-price-ladder', 'electric-dirt-bike-cost-australia-price-guide', 'electric-dirt-bike-finance-payment-plans-australia'", "'cheapest-electric-dirt-bike-australia-price-ladder', 'affordable-dirt-bikes-australia-electric-value', 'low-cost-electric-bike-australia-guide'"],
]);
console.log('ok');
