import { NextResponse } from 'next/server';
import { PRODUCTS, SITE } from '@/src/config/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, { params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      {
        status: 404,
        headers: { 'Access-Control-Allow-Origin': '*' },
      }
    );
  }

  return NextResponse.json(
    {
      ...product,
      currency: SITE.currency,
      url: `https://${SITE.domain}/shop/${product.slug}/`,
      images: product.images.map((img) => `https://${SITE.domain}${img}`),
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
