import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { POSTS, PRODUCTS, SITE } from '@/src/config/site';
import { indexableTags, tagTarget } from '@/src/config/blog-seo';
import { NEW_POSTS } from '@/src/config/posts-2026-10';
import { JsonLd } from '@/components/JsonLd';
import { ProductCard } from '@/components/ProductCard';
import { toCard } from '@/lib/productCard';
import { productImageAlt } from '@/lib/productSeo';

interface Props { params: Promise<{ tag: string }>; }

// Tag pages exist only for tags used by 4+ posts that are not already a category keyword (see indexableTags). Each page lists the guides, the
// products those guides recommend, the questions they answer, and links to the matching category, so it adds something a category page does not.
const tags = () => indexableTags(POSTS.map((p) => p.slug));

export const dynamicParams = false;
export async function generateStaticParams() {
  return tags().map(([k]) => ({ tag: k }));
}

const title = (s: string) => s.replace(/\b[a-z]/g, (c) => c.toUpperCase());

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const hit = tags().find(([k]) => k === tag);
  if (!hit) return {};
  const label = hit[1].label;
  const n = hit[1].slugs.length;
  const t = `${title(label)}: ${n} Guides, Prices & Models | EDBA`;
  const d = `${n} Electric Dirt Bike Australia guides on ${label}: prices, models, safety and buying advice, plus the matching bikes and parts in stock.`;
  return {
    title: t.length > 65 ? `${title(label)} Guides & Models | EDBA` : t,
    description: d.length > 160 ? d.slice(0, 157) + '...' : d,
    alternates: { canonical: `https://${SITE.domain}/blog/tag/${tag}/` },
    robots: { index: true, follow: true },
    openGraph: { title: t, description: d, url: `https://${SITE.domain}/blog/tag/${tag}/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const hit = tags().find(([k]) => k === tag);
  if (!hit) notFound();
  const { label, slugs } = hit[1];
  const posts = slugs.map((s) => POSTS.find((p) => p.slug === s)).filter(Boolean) as typeof POSTS;
  const target = tagTarget(label);
  const url = `https://${SITE.domain}/blog/tag/${tag}/`;

  // Products the guides recommend, most-mentioned first.
  const counts = new Map<string, number>();
  for (const s of slugs) for (const ps of NEW_POSTS.find((p) => p.slug === s)?.products ?? []) counts.set(ps, (counts.get(ps) ?? 0) + 1);
  const products = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([s]) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCTS;
  // One question per guide, taken from that guide's own FAQ.
  const questions = slugs.map((s) => ({ slug: s, faq: NEW_POSTS.find((p) => p.slug === s)?.faqs[0] })).filter((x) => x.faq).slice(0, 6) as { slug: string; faq: { q: string; a: string } }[];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://${SITE.domain}/blog/` },
        { '@type': 'ListItem', position: 3, name: title(label), item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${title(label)} guides`,
      url,
      mainEntity: { '@type': 'ItemList', itemListElement: posts.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `https://${SITE.domain}/blog/${p.slug}/`, name: p.title })) },
    },
  ];
  return (
    <div className="py-12 min-h-screen">
      <JsonLd data={schema} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-slate-600 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link><span>/</span>
          <Link href="/blog/" className="hover:text-sky-600">Blog</Link><span>/</span>
          <span className="text-slate-900 font-bold">{title(label)}</span>
        </nav>
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{title(label)}: Guides, Prices &amp; Models</h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {posts.length} Electric Dirt Bike Australia guides cover {label}. {products.length > 0 ? `They recommend ${products.length} bikes and parts from our range, listed below with current prices. ` : ''}
            To compare everything in one place, browse our <Link href={target.href} className="text-sky-700 underline font-semibold">{target.name}</Link> or the <Link href="/shop/" className="text-sky-700 underline font-semibold">full shop</Link>.
          </p>
        </header>

        <section aria-labelledby="tag-guides" className="space-y-4">
          <h2 id="tag-guides" className="text-xl font-extrabold text-slate-900 tracking-tight">Guides about {label}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="block h-full p-5 bg-white rounded-2xl border border-slate-200 hover:border-sky-500 shadow-xs hover:shadow-md transition-all group">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block mb-1">{p.category}</span>
                  <h3 className="font-bold text-slate-900 group-hover:text-sky-700 leading-snug mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {products.length > 0 && (
          <section aria-labelledby="tag-products" className="space-y-4">
            <h2 id="tag-products" className="text-xl font-extrabold text-slate-900 tracking-tight">Bikes and parts these guides recommend</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {products.map((p) => <ProductCard key={p.slug} product={toCard(p)} alt={productImageAlt(p)} as="h3" />)}
            </div>
          </section>
        )}

        {questions.length > 0 && (
          <section aria-labelledby="tag-faq" className="space-y-3">
            <h2 id="tag-faq" className="text-xl font-extrabold text-slate-900 tracking-tight">Questions answered in these guides</h2>
            <ul className="space-y-2">
              {questions.map((x) => (
                <li key={x.slug} className="bg-white p-4 rounded-xl border border-slate-200">
                  <Link href={`/blog/${x.slug}/#frequently-asked-questions`} className="font-semibold text-sky-800 hover:underline text-sm sm:text-base">{x.faq.q}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
