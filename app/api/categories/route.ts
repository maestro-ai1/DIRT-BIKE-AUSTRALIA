import { NextResponse } from 'next/server';
import { CATEGORIES, PRODUCTS, SITE } from '@/src/config/site';

export async function GET() {
  const data = CATEGORIES.map((c) => {
    const count = PRODUCTS.filter((p) => p.category === c.slug).length;
    return {
      slug: c.slug,
      name: c.name,
      title: c.title,
      description: c.description,
      productCount: count,
      url: `https://${SITE.domain}/shop/?category=${c.slug}`,
    };
  });

  return NextResponse.json(
    { categories: data },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
