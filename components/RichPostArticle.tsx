import React from 'react';
import Link from 'next/link';
import { POSTS, SITE } from '@/src/config/site';
import { JsonLd } from '@/components/JsonLd';
import { indexableTags, blogTags, tagSlug, tagTarget } from '@/src/config/blog-seo';
import type { NewPost } from '@/src/config/posts-2026-10';
import { parseRich, RichContent, plainFaqAnswer, renderInline } from '@/components/BlogRichContent';
import { Calendar, Clock } from 'lucide-react';
import { AuthorityLinks } from '@/components/AuthorityLinks';

// Article layout for the keyword-led blog posts: H1, table of contents (H2 + H3), body with images/product cards/tables, 5 FAQs, 20 tags.
export function RichPostArticle({ post }: { post: NewPost }) {
  const blocks = parseRich(post.content);
  const toc: { id: string; text: string; subs: { id: string; text: string }[] }[] = [];
  for (const b of blocks) {
    if (b.kind !== 'h') continue;
    if (b.level === 2) toc.push({ id: b.id, text: b.text, subs: [] });
    else if (b.level === 3 && toc.length) toc[toc.length - 1].subs.push({ id: b.id, text: b.text });
  }
  if (post.faqs.length) toc.push({ id: 'frequently-asked-questions', text: 'Frequently Asked Questions', subs: [] });

  const wordCount = post.content.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean).length + post.faqs.reduce((n, f) => n + f.a.split(/\s+/).length, 0);
  const url = `https://${SITE.domain}/blog/${post.slug}/`;

  const linkable = new Set(indexableTags(POSTS.map((p) => p.slug)).map(([k]) => k));
  const mySet = new Set(post.tags.map(tagSlug));
  const related = POSTS.filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: blogTags(p.slug).filter((t) => mySet.has(tagSlug(t))).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.p);

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: `https://${SITE.domain}${post.image}`,
      inLanguage: 'en-AU',
      wordCount,
      keywords: post.tags.join(', '),
      articleSection: post.category,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Organization', name: SITE.name },
      publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `https://${SITE.domain}/images/hero_surron_trail_1790338185425.jpg` } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://${SITE.domain}/blog/` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
    ...(post.faqs.length
      ? [{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(f.a) } })),
        }]
      : []),
  ];

  return (
    <div className="py-12 min-h-screen">
      <JsonLd data={schemaData} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-slate-600 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/blog/" className="hover:text-sky-600">Blog</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{post.title}</span>
        </nav>

        <header className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 bg-sky-100 text-sky-800 font-bold text-xs rounded-full uppercase tracking-wider">{post.category}</span>
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{post.title}</h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{post.excerpt}</p>
        </header>

        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
          <img src={post.image} alt={post.imageAlt} width={1200} height={900} className="w-full h-auto aspect-[4/3] object-contain bg-white" />
        </div>

        <nav aria-label="Table of contents" className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm">
          <p className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">Table of contents</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-decimal list-inside text-sm text-slate-700">
            {toc.map((t) => (
              <li key={t.id} className="leading-snug">
                <a href={`#${t.id}`} className="text-sky-800 hover:underline font-semibold">{t.text}</a>
                {t.subs.length > 0 && (
                  <ul className="mt-1 ml-5 list-disc space-y-0.5 text-xs text-slate-600">
                    {t.subs.map((s) => <li key={s.id}><a href={`#${s.id}`} className="hover:underline">{s.text}</a></li>)}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <article className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm text-slate-800 text-sm sm:text-base leading-relaxed space-y-5">
          <RichContent blocks={blocks} />

          {post.faqs.length > 0 && (
            <section aria-labelledby="frequently-asked-questions" className="space-y-4 pt-4">
              <h2 id="frequently-asked-questions" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight scroll-mt-28">Frequently Asked Questions</h2>
              {post.faqs.map((f, i) => (
                <div key={i} className="border-t border-slate-200 pt-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{f.q}</h3>
                  <p className="mt-1 text-slate-700 leading-relaxed">{renderInline(f.a, `faq${i}`)}</p>
                </div>
              ))}
            </section>
          )}
        </article>

        <AuthorityLinks path={`/blog/${post.slug}/`} className="mb-0" />

        {post.tags.length > 0 && (
          <section className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3" aria-labelledby="post-tags">
            <h2 id="post-tags" className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Related Topics</h2>
            <ul className="flex flex-wrap gap-2">
              {post.tags.map((t) => {
                const k = tagSlug(t);
                const linked = linkable.has(k);
                const target = linked ? `/blog/tag/${k}/` : tagTarget(t).href;
                return (
                  <li key={t}>
                    <Link href={target} className="inline-block px-3 py-1.5 rounded-full bg-slate-50 text-xs font-semibold text-sky-800 border border-slate-200 hover:border-sky-500">{t}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="space-y-6 pt-2" aria-labelledby="more-guides">
            <div className="flex items-center justify-between">
              <h2 id="more-guides" className="text-xl font-bold text-slate-900 tracking-tight">More Riding Guides &amp; Buying Advice</h2>
              <Link href="/blog/" className="text-xs font-bold text-sky-700 hover:text-sky-900">Browse All Guides →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}/`} className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-sky-500 shadow-xs hover:shadow-md transition-all group block">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block mb-1">{r.category}</span>
                  <h3 className="font-bold text-slate-900 group-hover:text-sky-700 text-sm leading-snug mb-2 transition-colors">{r.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
