// scripts/gen-category-heroes.cjs
// Builds the home-page category card images to the site image rule: 1200x900, bright white (#FFFFFF) background, whole product visible
// with even margins, keyword-based file names (public/images/categories/<keyword>.webp). Source photos are never modified.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const IMG = path.join(ROOT, 'public', 'images');
const OUT = path.join(IMG, 'categories');
fs.mkdirSync(OUT, { recursive: true });

// [output keyword name, source image under public/images]
const JOBS = [
  ['electric-dirt-bikes-for-sale', 'product-sur-ron-ultra-bee.jpg'],
  ['electric-motorbikes-motorcycles', 'product-super-soco-cpx.jpg'],
  ['kids-electric-bikes-motorbikes', 'product-ktm-sx-e-5-side.jpg'],
  ['electric-bikes-for-sale', 'catalog/fatboy-the-harlem-v3-en15194-certified-electric-fat-tyre-bike-1.webp'],
  ['electric-mopeds', 'product-niu-nqi-gt.webp'],
  ['electric-balance-bikes', 'catalog/apollo-rxf-dna-16-inch-170w-balance-electric-balance-bike-1.webp'],
  ['electric-motocross-bikes', 'product-stark-varg-mx.jpg'],
  ['electric-fat-tyre-bikes', 'ampd/the-original-stubbie-fat-tyre-electric-bike-1.jpg'],
  ['mini-electric-bikes', 'catalog/mxr-mxe-72v-mini-varg-dirt-kids-dirt-bike-1.webp'],
  ['cheap-electric-bikes', 'ampd/chubbie-v3-electric-beach-cruiser-1.jpg'],
  ['electric-motorcycles', 'product-vmoto-tc-max.jpg'],
  ['e-bike-parts-batteries', 'product-72v-40ah-battery.jpg'],
];

(async () => {
  for (const [name, src] of JOBS) {
    const file = path.join(IMG, src);
    // flatten onto white, lift near-white backgrounds to pure white, crop empty margin, then centre on a 1200x900 white canvas
    let img = sharp(file).flatten({ background: '#ffffff' }).linear(1.045, 0);
    const trimmed = await img.trim({ background: '#ffffff', threshold: 14 }).toBuffer();
    const fit = await sharp(trimmed).resize({ width: 1020, height: 760, fit: 'inside' }).toBuffer();
    await sharp({ create: { width: 1200, height: 900, channels: 3, background: '#ffffff' } })
      .composite([{ input: fit, gravity: 'centre' }])
      .webp({ quality: 86 })
      .toFile(path.join(OUT, name + '.webp'));
    console.log('ok', name);
  }
})();
