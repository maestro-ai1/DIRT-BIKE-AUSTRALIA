// Trimmed product shape passed to the client-side ProductCard. Keeps long descriptions out of the page payload.
export interface CardProduct {
  slug: string;
  name: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  badge: string;
  shortDescription: string;
  image: string;
  darkImage: boolean;
  specs: string[];
}

// Nine Ampd Bros models ship studio photos shot on solid black (black bikes on black), which cannot be turned white without cutting the bike out.
// They are shown on a matching black well instead of inside white letterbox bars. Replace with white-background photos when the supplier provides them.
const DARK_PHOTO = /\/images\/ampd\/(ace-|evo-racing-|rfn-warrior-)/;
export const isDarkPhoto = (src: string | undefined) => !!src && DARK_PHOTO.test(src);

const SPEC_KEYS = ['motorPeak', 'topSpeed', 'range', 'battery'] as const;

// Anything product-shaped (catalogue item or a trimmed client copy) can become a card.
export interface CardSource {
  slug: string;
  name: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  badge: string;
  shortDescription: string;
  images: string[];
  specs?: Record<string, string>;
}

export function toCard(p: CardSource): CardProduct {
  const specs = SPEC_KEYS.map((k) => p.specs?.[k]).filter(Boolean) as string[];
  return {
    slug: p.slug,
    name: p.name,
    brand: p.brand,
    price: p.price,
    compareAtPrice: p.compareAtPrice,
    category: p.category,
    badge: p.badge,
    shortDescription: p.shortDescription,
    image: p.images[0],
    darkImage: isDarkPhoto(p.images[0]),
    specs: specs.slice(0, 2),
  };
}

// One grid for every product listing so cards line up the same everywhere.
export const PRODUCT_GRID = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch';
export const PRODUCT_GRID_4 = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch';
