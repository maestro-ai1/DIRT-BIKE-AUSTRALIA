// lib/relatedProducts.ts
// Internal-link selection that spreads link equity across the whole catalogue.
// Before: every product linked to the first three products of its category, so ~150 products had almost no internal links.
// Now: each product links to its price-neighbours on a ring of the same product kind, so every product is linked from several siblings.
import { PRODUCTS, type ProductItem } from '@/src/config/site';
import { productKind, type ProductKind } from '@/lib/productSeo';

const hash = (s: string) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
const byPrice = (a: ProductItem, b: ProductItem) => a.price - b.price || a.slug.localeCompare(b.slug);

// Up to `count` related products for a product page: price-neighbours of the same kind first, then same brand, then same category.
export function relatedProducts(product: ProductItem, count = 6): ProductItem[] {
  const out: ProductItem[] = [];
  const add = (p?: ProductItem, limit = count) => {
    if (p && p.slug !== product.slug && out.length < limit && !out.some((o) => o.slug === p.slug)) out.push(p);
  };
  const kind = productKind(product);
  const ring = PRODUCTS.filter((p) => productKind(p) === kind).sort(byPrice);
  const at = ring.findIndex((p) => p.slug === product.slug);
  if (ring.length > 1 && at >= 0) {
    for (const d of [1, -1, 2, -2, 3, -3]) add(ring[(((at + d) % ring.length) + ring.length) % ring.length], 4);
  }
  const near = (a: ProductItem, b: ProductItem) => Math.abs(a.price - product.price) - Math.abs(b.price - product.price) || a.slug.localeCompare(b.slug);
  PRODUCTS.filter((p) => p.brand === product.brand).sort(near).forEach((p) => add(p));
  PRODUCTS.filter((p) => p.category === product.category).sort(near).forEach((p) => add(p));
  PRODUCTS.filter((p) => p.featured).sort(near).forEach((p) => add(p));
  return out;
}

interface Rule { test: RegExp; kinds?: ProductKind[]; brand?: RegExp }

// Which products suit a blog post, chosen from the post slug (first matching rule wins).
const RULES: Rule[] = [
  { test: /sur-?ron|surron|light-bee|storm-bee|ultra-bee/, brand: /sur-?ron/i },
  { test: /talaria/, brand: /talaria/i },
  { test: /stark/, brand: /stark/i },
  { test: /e-ride/, brand: /e-ride/i },
  { test: /ktm|husqvarna|gasgas/, kinds: ['kids'] },
  { test: /oset|kids|child|junior|teen|12-year|toddler|balance|age/, kinds: ['kids', 'balance'] },
  { test: /pit-bike|mini-dirt|mini-bike/, kinds: ['pit', 'mini'] },
  { test: /fat|cruiser|beach|sand/, kinds: ['fattyre', 'cruiser'] },
  { test: /battery|charger|cells|72v|60v|range|torp|controller|lithium|solar/, kinds: ['battery', 'charger'] },
  { test: /mods|upgrade|suspension|brak|wheel|tyre|lighting|sprocket|transport|maintenance|servicing/, kinds: ['part'] },
  { test: /moped|scooter|lams|motorcycle|motorbike|motor-bike|road|registration|licence|insurance|laws|nsw|qld|victoria/, kinds: ['moped', 'emoto', 'ebike'] },
  { test: /motocross|race|racing/, kinds: ['motocross'] },
  { test: /ebike|e-bike|electric-bike|commut|low-cost|cheap|cost|price|finance|payid|crypto/, kinds: ['ebike', 'fattyre', 'cruiser', 'mini'] },
];
export const VEHICLE_KINDS: ProductKind[] = ['offroad', 'motocross', 'kids', 'pit', 'balance', 'ebike', 'emoto', 'moped', 'fattyre', 'cruiser', 'mini'];

// `count` products relevant to a blog post, spread across the catalogue by hashing the post slug. `avoid` holds slugs the post already links.
export function productsForPost(slug: string, count = 3, avoid: string[] = [], vehiclesOnly = false): ProductItem[] {
  const skip = new Set(avoid);
  const rule = RULES.find((r) => r.test.test(slug));
  const allowed = (p: ProductItem) => !skip.has(p.slug) && (!vehiclesOnly || VEHICLE_KINDS.includes(productKind(p)));
  let pool = PRODUCTS.filter((p) => allowed(p) && (rule?.kinds ? rule.kinds.includes(productKind(p)) : rule?.brand ? rule.brand.test(p.brand) : ['offroad', 'motocross', 'kids'].includes(productKind(p))));
  if (pool.length < count) pool = [...pool, ...PRODUCTS.filter((p) => allowed(p) && !pool.includes(p) && ['offroad', 'motocross', 'kids', 'ebike'].includes(productKind(p)))];
  pool = pool.sort((a, b) => a.slug.localeCompare(b.slug));
  const out: ProductItem[] = [];
  const perBrand: Record<string, number> = {};
  const start = pool.length ? hash(slug) % pool.length : 0;
  for (let i = 0; i < pool.length && out.length < count; i++) {
    const p = pool[(start + i) % pool.length];
    if ((perBrand[p.brand] ?? 0) >= 2) continue;
    perBrand[p.brand] = (perBrand[p.brand] ?? 0) + 1;
    out.push(p);
  }
  return out;
}
