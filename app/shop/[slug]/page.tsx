import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, SITE, SHOP, CONTACT } from '@/src/config/site';
import { JsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';
import { ProductDetailClient } from './ProductDetailClient';
import { getProductFaqs } from '@/lib/productFaqs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  const priceStr = `AUD $${product.price.toLocaleString()}`;
  const candidateTitle = `Buy ${product.name} in Australia | ${priceStr} | EDBA`;
  const title = candidateTitle.length <= 60 ? candidateTitle : `${product.name} Australia | ${priceStr} | EDBA`;

  const descRaw = `${product.shortDescription} Genuine AU stock, 12-month factory warranty. Free delivery Australia-wide from Mittagong NSW 2575.`;
  const description = descRaw.length > 160 ? descRaw.slice(0, 157) + '...' : descRaw;

  const brandLower = product.brand.toLowerCase();
  const nameLower = product.name.toLowerCase();
  const keywords = `${nameLower} australia, buy ${nameLower} australia, ${nameLower} for sale, ${brandLower} australia, ${nameLower} price australia, electric dirt bike for sale australia`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://${SITE.domain}/shop/${product.slug}/`,
    },
    openGraph: {
      title: `${product.name} — Electric Dirt Bike Australia`,
      description: descRaw.slice(0, 155),
      url: `https://${SITE.domain}/shop/${product.slug}/`,
      siteName: 'Electric Dirt Bike Australia',
      locale: 'en_AU',
      type: 'website',
      images: [
        {
          url: `https://${SITE.domain}${product.images[0]}`,
          width: 1200,
          height: 900,
          alt: `${product.name} — Electric Dirt Bike Australia`,
        },
      ],
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const related = PRODUCTS.filter((p) => p.slug !== product.slug && (p.category === product.category || p.brand === product.brand)).slice(0, 3);
  const faqs = getProductFaqs(product);

  // Schema.org Product, Offer, Brand, BreadcrumbList, FAQPage
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: `https://${SITE.domain}${product.images[0]}`,
      sku: `EDBA-${product.slug.toUpperCase()}`,
      brand: {
        '@type': 'Brand',
        name: product.brand,
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'AUD',
        price: product.price,
        priceValidUntil: '2027-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
        seller: {
          '@type': 'Organization',
          name: SITE.name,
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://${SITE.domain}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Shop',
          item: `https://${SITE.domain}/shop/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.name,
          item: `https://${SITE.domain}/shop/${product.slug}/`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    },
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/shop/" className="hover:text-sky-600">Shop</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Client Product View */}
        <ProductDetailClient product={product} related={related} />
      </div>
    </div>
  );
}
