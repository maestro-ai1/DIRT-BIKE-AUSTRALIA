// 2026-10-29: product tags and secondary keywords become PRODUCT-SPECIFIC so no keyword repeats across product pages.
// Primary = product short name. Five secondaries = "<name> price / buy <name> / <name> for sale / <name> specs / <name> warranty".
// Ten tags = those five + five more name-based phrases, each linking to a relevant existing page (category, brand, shop, warranty, delivery).
const fs = require('fs');
const f = 'lib/productSeo.ts';
let s = fs.readFileSync(f, 'utf8');
const crlf = s.includes('\r\n');
s = s.replace(/\r\n/g, '\n');
const a = s.indexOf('// Five secondary keywords per product');
const b = s.indexOf('// Image alt text:');
if (a < 0 || b < 0) throw new Error('anchors');
const block = `// Five secondary keywords per product (Master Product Optimization Rule). They are built from the product's own name so every product has
// different ones: shared bank keywords belong to the category, brand and blog pages that own them, and are never repeated on product pages.
export function productSecondaries(p: P): string[] {
  const short = shortName(p.name);
  return [\`\${short} price\`, \`buy \${short}\`, \`\${short} for sale\`, \`\${short} specs\`, \`\${short} warranty\`];
}

// Exactly 10 tags per product, all unique to the product and all links (indexable): the five secondaries plus five more name-based phrases.
// Links go to relevant existing pages: the product's category, its brand page, the shop, warranty and delivery pages.
export function getProductTags(p: P): ProductTag[] {
  const kind = productKind(p);
  const short = shortName(p.name);
  const brandSlug = p.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const brandHref = /sur-?ron/i.test(p.brand) ? '/electric-dirt-bikes/sur-ron/' : /^e-ride pro$/i.test(p.brand) ? '/brands/e-ride-pro/' : \`/shop/?brand=\${encodeURIComponent(brandSlug)}\`;
  const cat = HREF[kind];
  const [price, buy, sale, specs, warranty] = productSecondaries(p);
  return [
    { label: price, href: cat },
    { label: buy, href: cat },
    { label: sale, href: cat },
    { label: specs, href: cat },
    { label: warranty, href: '/warranty-and-service/' },
    { label: \`\${short} Australia\`, href: cat },
    { label: \`order \${short}\`, href: brandHref },
    { label: \`\${short} delivery\`, href: '/shipping-and-delivery/' },
    { label: \`\${short} online\`, href: '/shop/' },
    { label: \`\${short} features\`, href: cat },
  ];
}

`;
s = s.slice(0, a) + block + s.slice(b);
fs.writeFileSync(f, crlf ? s.replace(/\n/g, '\r\n') : s);
console.log('patched');
