import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { JsonLd } from '@/components/JsonLd';
import { FaqItem } from '@/components/FaqItem';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, MapPin } from 'lucide-react';

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
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
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

        {resolved.map((g) => (
          <section key={g.id} className="space-y-6 mb-12" aria-labelledby={`grp-${g.id}`}>
            <div className="border-b border-slate-200 pb-4">
              <h2 id={`grp-${g.id}`} className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{g.heading}</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">{g.blurb}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {g.items.map((product) => (
                <div key={product.slug} className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group">
                  <Link href={`/shop/${product.slug}/`} className="block relative aspect-4/3 bg-slate-100 overflow-hidden">
                    <img src={product.images[0]} alt={`${product.name} for sale Australia`} width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">{product.brand}</span>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-sky-600 text-white">{product.badge}</span>
                    </div>
                  </Link>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug mb-1.5">
                        <Link href={`/shop/${product.slug}/`}>{product.name}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
                    </div>
                    {product.specs && (
                      <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-slate-600 font-medium">
                        {product.specs.motorPeak && <div className="flex items-center gap-1.5 truncate"><Zap className="w-3.5 h-3.5 text-orange-500 shrink-0" /><span className="truncate">{product.specs.motorPeak}</span></div>}
                        {product.specs.topSpeed && <div className="flex items-center gap-1.5 truncate"><Gauge className="w-3.5 h-3.5 text-sky-500 shrink-0" /><span className="truncate">{product.specs.topSpeed}</span></div>}
                        {product.specs.range && <div className="flex items-center gap-1.5 truncate"><Battery className="w-3.5 h-3.5 text-emerald-500 shrink-0" /><span className="truncate">{product.specs.range}</span></div>}
                        {(product.specs as Record<string, string>).legal && <div className="flex items-center gap-1.5 truncate"><ShieldCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" /><span className="truncate">{(product.specs as Record<string, string>).legal}</span></div>}
                      </div>
                    )}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-lg font-mono font-extrabold text-slate-900">${product.price.toLocaleString()} AUD</div>
                        <div className="text-[11px] text-orange-600 font-bold">${Math.round(product.price * 0.9).toLocaleString()} with Crypto (-10%)</div>
                      </div>
                      <Link href={`/shop/${product.slug}/`} className="px-3.5 py-2 bg-slate-900 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-1">
                        <span>View Bike</span><ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

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

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">{collectionName} — FAQ</h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FaqItem key={i} question={`${i + 1}. ${item.q}`}>{item.a}</FaqItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
