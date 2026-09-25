import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS, SITE, PRODUCTS } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Zap } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Electric Dirt Bike Australia`,
    description: post.excerpt,
    alternates: {
      canonical: `https://${SITE.domain}/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: `https://${SITE.domain}${post.image}`,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug);
  const featuredBike = PRODUCTS[0];

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: `https://${SITE.domain}${post.image}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Organization',
        name: SITE.name,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE.name,
        logo: {
          '@type': 'ImageObject',
          url: `https://${SITE.domain}/images/hero_surron_trail_1790338185425.jpg`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://${SITE.domain}/blog/${post.slug}/`,
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
          name: 'Blog',
          item: `https://${SITE.domain}/blog/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: `https://${SITE.domain}/blog/${post.slug}/`,
        },
      ],
    },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/blog/" className="hover:text-sky-600">Blog</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-sky-100 text-sky-800 font-bold text-xs rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm text-slate-800 text-sm sm:text-base leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h2 key={index} className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 tracking-tight">
                  {paragraph.replace('### ', '')}
                </h2>
              );
            }
            return (
              <p key={index} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}

          {/* Contextual Product Callout */}
          <div className="mt-8 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                Recommended Bike for Australian Trails
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {featuredBike.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {featuredBike.shortDescription}
              </p>
            </div>
            <Link
              href={`/shop/${featuredBike.slug}/`}
              className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs rounded-xl shrink-0 transition-colors shadow-md"
            >
              View Model Specs →
            </Link>
          </div>
        </article>

        {/* Other Guides */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                More Riding Guides &amp; Comparisons
              </h3>
              <Link
                href="/blog/"
                className="text-xs font-bold text-sky-600 hover:text-sky-800"
              >
                Browse All Guides →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.slice(0, 4).map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}/`}
                  className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-sky-500 shadow-xs hover:shadow-md transition-all group block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block mb-1">
                    {r.category}
                  </span>
                  <h4 className="font-bold text-slate-900 group-hover:text-sky-600 text-sm leading-snug mb-2 transition-colors">
                    {r.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
