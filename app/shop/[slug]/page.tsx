import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, SITE, SHOP, CONTACT } from '@/src/config/site';
import { JsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';
import { ProductDetailClient } from './ProductDetailClient';
import { getProductFaqs, getProductTags } from '@/lib/productFaqs';
import { productSeoTitle, productSeoDescription } from '@/lib/productSeo';
import { ProductGuide } from '@/components/ProductGuide';
import { AuthorityLinks } from '@/components/AuthorityLinks';

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

  // Title and description lead with the product's buyer-intent keyword from the Semrush bank (see productSecondary in lib/productSeo.ts).
  const title = productSeoTitle(product);
  const ampProduct = (product as { source?: string }).source === 'ampd-bros';
  const oldProduct = (product as { source?: string }).source === 'old-site';
  const offer = ampProduct || oldProduct ? 'Ships Australia-wide.' : 'Free freight over $1,500, 12-month warranty.';
  const description = productSeoDescription(product, offer);
  const descRaw = description;

  const brandLower = product.brand.toLowerCase();
  const nameLower = product.name.toLowerCase();
  const tagKeywords = getProductTags(product).map((t) => t.label.toLowerCase()).slice(0, 12).join(', ');
  const keywords = `${nameLower} australia, buy ${nameLower} australia, ${nameLower} for sale, ${brandLower} australia, ${nameLower} price australia, ${tagKeywords}`;

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
        validFrom: '2026-10-07',
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'AU',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 14,
          merchantReturnLink: `https://${SITE.domain}/returns-policy/`,
        },
        // Free freight applies on orders over $1,500 AUD (store policy); below that the rate is confirmed at checkout, so no rate is published.
        ...(product.price > 1500
          ? {
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'AUD' },
                shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'AU' },
              },
            }
          : {}),
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
    <div className="py-10 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-600 mb-8 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/shop/" className="hover:text-sky-600">Shop</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Client Product View */}
        <ProductDetailClient product={product} related={related} />

        <ProductGuide product={product} />

        <AuthorityLinks path={`/shop/${product.slug}/`} className="mt-12" />
      </div>
    </div>
  );
}
