import { PRODUCTS, type ProductItem } from '@/src/config/site';

// Server-only: reads the whole catalogue, so keep it out of client components.
export const MIN_PRODUCTS_PER_PAGE = 9;

// Genuine catalogue bikes used to top a listing page up to MIN_PRODUCTS_PER_PAGE, closest range first.
export function topUpProducts(shownSlugs: string[], min = MIN_PRODUCTS_PER_PAGE): ProductItem[] {
  const shown = new Set(shownSlugs);
  if (shown.size >= min) return [];
  const shownItems = PRODUCTS.filter((p) => shown.has(p.slug));
  const leadCategory = shownItems[0]?.category;
  const avgPrice = shownItems.length ? shownItems.reduce((n, p) => n + p.price, 0) / shownItems.length : 0;
  return PRODUCTS.filter((p) => !shown.has(p.slug) && !['accessories', 'parts-upgrades'].includes(p.category))
    .sort(
      (a, b) =>
        Number(b.category === leadCategory) - Number(a.category === leadCategory) ||
        Number(b.featured) - Number(a.featured) ||
        Math.abs(a.price - avgPrice) - Math.abs(b.price - avgPrice)
    )
    .slice(0, min - shown.size);
}
