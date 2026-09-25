import { NextResponse } from 'next/server';
import { PRODUCTS, SITE } from '@/src/config/site';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const brand = searchParams.get('brand');
  const q = searchParams.get('q');
  const limit = searchParams.get('limit');

  let results = [...PRODUCTS];

  if (category) {
    results = results.filter((p) => p.category === category);
  }

  if (brand) {
    results = results.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
  }

  if (q) {
    const query = q.toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query)
    );
  }

  if (limit) {
    const num = parseInt(limit, 10);
    if (!isNaN(num)) {
      results = results.slice(0, num);
    }
  }

  const items = results.map((p) => ({
    slug: p.slug,
    name: p.name,
    brand: p.brand,
    price: p.price,
    currency: SITE.currency,
    category: p.category,
    badge: p.badge,
    shortDescription: p.shortDescription,
    url: `https://${SITE.domain}/shop/${p.slug}/`,
    images: p.images.map((img) => `https://${SITE.domain}${img}`),
    inStock: p.inStock,
  }));

  return NextResponse.json(
    { products: items, total: items.length },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
