import { NextResponse } from 'next/server';
import { PRODUCTS, POSTS, SITE } from '@/src/config/site';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get('q') || '').toLowerCase().trim();

  const matchingProducts = PRODUCTS.filter((p) => {
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
    );
  }).map((p) => ({
    type: 'product',
    slug: p.slug,
    name: p.name,
    brand: p.brand,
    price: p.price,
    currency: SITE.currency,
    url: `https://${SITE.domain}/shop/${p.slug}/`,
  }));

  const matchingPosts = POSTS.filter((post) => {
    if (!q) return true;
    return post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
  }).map((post) => ({
    type: 'post',
    slug: post.slug,
    title: post.title,
    url: `https://${SITE.domain}/blog/${post.slug}/`,
  }));

  return NextResponse.json(
    {
      query: q,
      products: matchingProducts,
      posts: matchingPosts,
      total: matchingProducts.length + matchingPosts.length,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
