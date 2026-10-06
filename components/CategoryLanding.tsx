import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { JsonLd } from '@/components/JsonLd';
import { FaqItem } from '@/components/FaqItem';
import { CheckCircle, MapPin } from 'lucide-react';
import { AuthorityLinks } from '@/components/AuthorityLinks';
import { ProductPager } from '@/components/ProductPager';
import { RelatedGuides } from '@/components/RelatedGuides';

// Shared landing page for keyword categories and city pages. Lists only products that exist in PRODUCTS.
export interface LandingGroup { id: string; heading: string; blurb: string; slugs: string[]; }
export interface LandingProps {
  path: string;
  crumbs: { name: string; href?: string }[];
  eyebrow: string;
  h1: string;
  intro: string;
  chips?: string[];
  groups: LandingGroup[];
  links?: { href: string; label: string; note?: string }[];
  faqs: { q: string; a: string }[];
  collectionName: string;
}

export function CategoryLanding({ path, crumbs, eyebrow, h1, intro, chips = [], groups, links = [], faqs, collectionName }: LandingProps) {
  const resolved = groups.map((g) => ({ ...g, items: g.slugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCTS }));
  const all = resolved.flatMap((g) => g.items);
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        ...crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 2, name: c.name, item: `https://${SITE.domain}${c.href || path}` })),
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: collectionName,
      url: `https://${SITE.domain}${path}`,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: all.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `https://${SITE.domain}/shop/${p.slug}/`, name: p.name })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <div className="py-12 min-h-screen">
      <JsonLd data={schemaData} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          {crumbs.map((c, i) => (
            <React.Fragment key={c.name}>
              <span>/</span>
              {i < crumbs.length - 1 && c.href ? <Link href={c.href} className="hover:text-sky-600">{c.name}</Link> : <span className="text-slate-900 font-bold">{c.name}</span>}
            </React.Fragment>
          ))}
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/30 inline-block">{eyebrow}</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">{h1}</h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{intro}</p>
            {chips.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
                {chips.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />{t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-12">
          <ProductPager
            groups={resolved.map((g) => ({ id: `grp-${g.id}`, heading: g.heading, blurb: g.blurb, items: g.items, alt: (p) => `${p.name} for sale Australia` }))}
          />
        </div>

        {links.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm mb-12 space-y-3" aria-labelledby="landing-links">
            <h2 id="landing-links" className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-600" /> More Guides and Categories
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sky-700 font-semibold hover:underline">{l.label}</Link>{l.note ? ` — ${l.note}` : ''}</li>
              ))}
            </ul>
          </section>
        )}

        <RelatedGuides path={path} />


        <AuthorityLinks path={path} />

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">{collectionName} — FAQ</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            {faqs.map((item, i) => (
              <FaqItem key={i} question={`${i + 1}. ${item.q}`}>{item.a}</FaqItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
