import React from 'react';
import Link from 'next/link';
import { HeroSlider } from '@/components/HeroSlider';
import { TrustpilotSection } from '@/components/TrustpilotSection';
import { JsonLd } from '@/components/JsonLd';
import { PRODUCTS, BRANDS, FAQ, SITE, BRAND } from '@/src/config/site';
import { Zap, ShieldCheck, Truck, ArrowRight, Award, Wrench, ChevronRight, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import { seoFor, buildFaq } from '@/src/config/seo';

import { FaqItem } from '@/components/FaqItem';
import { ProductCard } from '@/components/ProductCard';
import { SlideShow } from '@/components/SlideShow';
import { BrandMark } from '@/components/BrandMark';
import { PRODUCT_GRID_4, toCard, isDarkPhoto } from '@/lib/productCard';
import { AuthorityLinks } from '@/components/AuthorityLinks';
const seo = seoFor('/');
// Home shows six questions only (the full list stays on /faq/). The FAQPage schema below uses these same six so it matches the visible page.
const HOME_FAQ_QUESTIONS = [
  'Where can I buy an electric dirt bike for sale in Australia?',
  'Do you sell electric motorbikes and electric motorcycles for sale in Australia?',
  'Do you sell kids electric bikes and childs electric motorcycles?',
  'How much does an electric dirt bike cost in Australia?',
  'Are electric dirt bikes legal to ride in Australia?',
  'How are electric dirt bikes shipped across Australia?',
];
const ALL_FAQ = buildFaq(FAQ);
const HOME_FAQ = HOME_FAQ_QUESTIONS.map((q) => ALL_FAQ.find((f) => f.question === q)).filter((f): f is NonNullable<typeof f> => Boolean(f));
export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: `https://${SITE.domain}/images/theme_dirtbike_cover.jpg`,
        width: 1200,
        height: 630,
        alt: 'Electric Dirt Bike Australia — Sur-Ron, Talaria & Stark Varg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: [`https://${SITE.domain}/images/theme_dirtbike_cover.jpg`],
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

// Home category tiles: every category page, each with a preview picture. Titles and links are unchanged from the previous layout.
const HOME_CATEGORIES = [
  { href: '/electric-dirt-bikes/', title: 'Electric Dirt Bikes for Sale', text: 'Adult electric dirt bikes, off-road and trail bikes from Sur-Ron, Talaria, Stark Varg and E-Ride Pro.', img: '/images/product-sur-ron-ultra-bee.jpg' },
  { href: '/electric-motor-bikes/', title: 'Electric Motorbikes & Motorcycles', text: 'Off-road electric motorbikes, road-legal electric mopeds and commuter models.', img: '/images/product-super-soco-cpx.jpg' },
  { href: '/electric-motor-bikes/kids/', title: 'Kids Electric Bikes & Motorbikes', text: 'Childs electric motorcycles and childrens electric dirt bikes for ages 3–16.', img: '/images/product-ktm-sx-e-5-side.jpg' },
  { href: '/electric-bikes/', title: 'Electric Bikes for Sale', text: 'RTR eBikes, Super73 e-motos and road-legal electric mopeds in one place.', img: '/images/product-rtr-ebike-pro.jpg' },
  { href: '/electric-motor-bikes/commuter-mopeds/', title: 'Electric Mopeds', text: 'Road-legal, LAMS-approved electric mopeds and commuter e-bikes.', img: '/images/product-niu-nqi-gt.webp' },
  { href: '/electric-motor-bikes/rtr-ebike/', title: 'RTR eBike', text: 'Road-legal 250W RTR e bike commuters. No licence or registration needed.', img: '/images/product-rtr-ebike-s-classic.webp' },
  { href: '/electric-motocross-bikes/', title: 'Electric Motocross Bikes', text: 'Competition electric motocross bikes including the Stark Varg and Sur-Ron Storm Bee MX.', img: '/images/product-stark-varg-mx.jpg' },
  { href: '/electric-fat-tyre-bikes/', title: 'Electric Fat Tyre Bikes', text: 'Fat tyre e-bikes and electric beach cruisers: ACE, Stubbie, Chubbie and Riptide.', img: '/images/ampd/the-original-stubbie-fat-tyre-electric-bike-1.jpg' },
  { href: '/electric-mini-bikes/', title: 'Mini Electric Bikes', text: 'Compact mini e bikes with 16-inch wheels and a 48V 15Ah battery.', img: '/images/ampd/ace-mini-electric-fat-bike-1.jpg' },
  { href: '/electric-bikes/cheap/', title: 'Cheap Electric Bikes', text: 'Affordable e-bikes and kids electric bikes with published specifications and warranty.', img: '/images/ampd/chubbie-v3-electric-beach-cruiser-1.jpg' },
  { href: '/electric-motorcycles/', title: 'Electric Motorcycles', text: 'Road-registered electric motorcycles and mopeds plus off-road models.', img: '/images/product-vmoto-tc-max.jpg' },
  { href: '/accessories/', title: 'E Bike Parts & Batteries', text: '72V lithium batteries, fast chargers and performance parts with Australian plugs.', img: '/images/product-72v-40ah-battery.jpg' },
];

export default function HomePage() {
  const featuredBikes = PRODUCTS.filter((p) => p.category === 'dirt-bikes' || p.category === 'motocross').slice(0, 4);
  const featuredAccessories = PRODUCTS.filter((p) => p.category === 'accessories' || p.category === 'parts-upgrades').slice(0, 4);

  // Schema.org Structured Data
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': ['Store', 'Organization'],
      name: SITE.name,
      description: BRAND.description,
      foundingDate: BRAND.foundingYear,
      foundingLocation: {
        '@type': 'Place',
        name: BRAND.foundingLocation,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 4, 18-20 Bowral Rd',
        addressLocality: 'Mittagong',
        addressRegion: 'NSW',
        postalCode: '2575',
        addressCountry: 'AU',
      },
      url: `https://${SITE.domain}/`,
      sameAs: BRAND.sameAs,
      areaServed: ['Australia', 'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia'],
      numberOfItems: PRODUCTS.length,
      knowsAbout: ['Electric Dirt Bikes', 'Electric Motocross', 'Sur-Ron', 'Talaria', 'Stark Varg', '72V Lithium Batteries'],
      priceRange: '$$$',
      brand: {
        '@type': 'Brand',
        name: SITE.name,
      },
      makesOffer: {
        '@type': 'AggregateOffer',
        priceCurrency: 'AUD',
        lowPrice: 195,
        highPrice: 18990,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: `https://${SITE.domain}/`,
      potentialAction: {
        '@type': 'SearchAction',
        target: `https://${SITE.domain}/search/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOME_FAQ.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schemaData} />

      {/* 1. Hero Slideshow (3 Slides, Single H1 on slide 1) */}
      <HeroSlider />

      {/* 2. Compact trust strip */}
      <section className="bg-slate-300/70 border-y border-slate-400/50" aria-label="Why buy from Electric Dirt Bike Australia">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 text-xs text-slate-800">
            {[
              { icon: Truck, title: 'Free Nationwide Freight', note: 'Bike orders over $1,500 AUD' },
              { icon: ShieldCheck, title: '12-Mo Factory Warranty', note: 'Genuine stock & statutory backing' },
              { icon: Zap, title: '10% Crypto & PayID Discount', note: 'Instant checkout discount on BTC/USDT' },
              { icon: Wrench, title: 'Mittagong NSW Workshop', note: 'Real technicians, parts & support' },
            ].map(({ icon: Icon, title, note }) => (
              <li key={title} className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-white text-sky-800 flex items-center justify-center shrink-0 border border-slate-300">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="leading-tight">
                  <span className="block font-bold text-slate-900">{title}</span>
                  <span className="hidden sm:block text-[11px] text-slate-700">{note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Shop by category: keyword-led internal links to every category, as a 3-up preview-picture slideshow */}
      <section className="py-8" aria-labelledby="home-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5 max-w-4xl">
            <h2 id="home-categories" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Buy an Electric Dirt Bike in Australia
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
              Electric Dirt Bike Australia sells electric dirt bikes for sale online, along with electric motorbikes, kids electric bikes, e-bikes and electric mopeds. Every bike ships Australia-wide from our Mittagong NSW 2575 workshop with a 12-month Australian warranty and free freight on orders over $1,500. Choose a category to compare models and prices.
            </p>
          </div>
          <SlideShow label="Bike categories slideshow" intervalMs={4500}>
            {HOME_CATEGORIES.map((c) => (
              <li key={c.href} className="snap-start shrink-0 basis-[calc(50%-0.375rem)] sm:basis-[calc(33.333%-0.5rem)]">
                <Link
                  href={c.href}
                  title={c.text}
                  className="group flex flex-col h-full bg-white border border-slate-300 hover:border-sky-500 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <span className={`block aspect-[4/3] sm:aspect-[2/1] border-b border-slate-200 overflow-hidden ${isDarkPhoto(c.img) ? 'bg-black' : 'bg-white'}`}>
                    <img
                      src={c.img}
                      alt={c.title}
                      width={400}
                      height={300}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ${isDarkPhoto(c.img) ? '' : 'p-2'}`}
                    />
                  </span>
                  <span className="flex-1 flex items-center justify-center px-3 py-2.5 text-center text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-sky-800 transition-colors min-h-[2.75rem]">
                    {c.title}
                  </span>
                </Link>
              </li>
            ))}
          </SlideShow>
        </div>
      </section>

      {/* 4. Trending brands: logo / brand icon tiles (the category tiles above already carry the pictures) */}
      <section className="pb-8" aria-labelledby="home-brands">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-800">Australia&apos;s Most Purchased</div>
              <h2 id="home-brands" className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Trending Electric Dirt Bike Brands
              </h2>
            </div>
            <Link href="/brands/" className="text-xs font-bold text-sky-800 hover:text-sky-900 flex items-center gap-1 group shrink-0">
              <span>Explore All Brands</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {BRANDS.map((b, i) => (
              <li key={b.slug}>
                <Link
                  href={`/shop/?brand=${b.slug}`}
                  className="group flex flex-col items-center justify-center gap-2 h-full bg-white border border-slate-300 hover:border-sky-500 rounded-xl px-2 py-3 shadow-sm hover:shadow-md transition-all"
                >
                  <BrandMark name={b.name} slug={b.slug} index={i} />
                  <span className="text-center text-[11px] sm:text-xs font-extrabold text-slate-900 leading-tight group-hover:text-sky-800 transition-colors min-h-[2rem] flex items-center">
                    {b.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Featured Electric Dirt Bikes */}
      <section className="pb-10" aria-labelledby="home-featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">High-Performance Lineup</span>
              <h2 id="home-featured" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Featured Electric Dirt Bikes &amp; Motocross
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-xl">
                Ready for singletrack, farm work and motocross tracks. Dispatched crated with pre-delivery inspection.
              </p>
            </div>
            <Link
              href="/shop/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors shrink-0"
            >
              <span>View All Bikes ({PRODUCTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className={PRODUCT_GRID_4}>
            {featuredBikes.map((product) => (
              <ProductCard key={product.slug} product={toCard(product)} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Accessories & Batteries */}
      <section className="pb-10" aria-labelledby="home-accessories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-800">Power Upgrades &amp; Protection</span>
              <h2 id="home-accessories" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Batteries, Fast Chargers &amp; Bush Armor
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-xl">
                High-discharge 72V Molicel lithium battery packs, 15A smart fast chargers with Australian plugs, and heavy-duty 5mm alloy skid plates.
              </p>
            </div>
            <Link
              href="/accessories/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-700 hover:bg-orange-800 text-white font-bold text-xs transition-colors shrink-0"
            >
              <span>All Accessories →</span>
            </Link>
          </div>
          <div className={PRODUCT_GRID_4}>
            {featuredAccessories.map((product) => (
              <ProductCard key={product.slug} product={toCard(product)} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Brand authority and operational statistics, one compact band */}
      <section className="pb-10" aria-labelledby="home-authority">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-300 rounded-2xl shadow-sm p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-3 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-100 text-sky-900 text-[11px] font-bold border border-sky-200">
                <Award className="w-3.5 h-3.5" />
                <span>Authorised Australian Dealer · Founded {BRAND.foundingYear}</span>
              </div>
              <h2 id="home-authority" className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Authentic Australian Stock, Workshop Backed &amp; Built for Local Dirt
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Operating out of our dedicated warehouse and prep facility in <strong>Mittagong, Southern Highlands NSW 2575</strong>, we test and crate each bike with complete pre-delivery checks. Unlike drop-shippers, we stock genuine replacement parts, controllers, batteries and performance sprockets right here in New South Wales.
              </p>
              <ul className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-800">
                <li className="flex items-center gap-1.5 bg-slate-100 border border-slate-300 rounded-md px-2.5 py-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />Real PDI Inspection
                </li>
                <li className="flex items-center gap-1.5 bg-slate-100 border border-slate-300 rounded-md px-2.5 py-1">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-700" />Express Tailgate Freight
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link href="/about/" className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-lg transition-colors">
                  Our Mittagong Facility &amp; Location Map →
                </Link>
                <Link href="/contact/" className="px-4 py-2 border border-slate-400 hover:border-slate-600 text-slate-800 font-semibold text-xs rounded-lg transition-colors">
                  Book Workshop Pickup Consultation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-orange-800 mb-2">Operational Statistics</div>
              <dl className="grid grid-cols-2 gap-2">
                {[
                  { v: '1,200+', l: 'Bikes Dispatched Aus-Wide', c: 'text-sky-800' },
                  { v: '4.9 / 5', l: 'Trustpilot Verified Rating', c: 'text-emerald-800' },
                  { v: '10%', l: 'Instant Crypto Discount', c: 'text-orange-800' },
                  { v: 'NSW 2575', l: 'Southern Highlands HQ', c: 'text-purple-800' },
                ].map((s) => (
                  <div key={s.l} className="bg-slate-100 border border-slate-300 rounded-xl px-3 py-2.5">
                    <dd className={`text-lg sm:text-xl font-mono font-extrabold leading-none ${s.c}`}>{s.v}</dd>
                    <dt className="text-[11px] text-slate-700 mt-1 leading-tight">{s.l}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-2 text-[11px] text-slate-700 leading-snug">
                <strong>Australian Entity Registration:</strong> fully registered business operated in New South Wales under official Australian statutory oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Trustpilot reviews: 3-up sliding carousel */}
      <TrustpilotSection />

      {/* 9. FAQ: five questions, compact two-column */}
      <section className="py-8" id="faq" aria-labelledby="home-faq">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">Clear Answers</span>
            <h2 id="home-faq" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-700 mt-1">
              Off-road electric bike legality, shipping, crypto discounts and battery maintenance in Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            {HOME_FAQ.map((item, idx) => (
              <FaqItem key={idx} question={item.question} compact>
                {item.answer}
              </FaqItem>
            ))}
          </div>

          <div className="mt-4 text-center text-xs text-slate-700">
            Have a question not listed here?{' '}
            <Link href="/contact/" className="text-sky-800 font-bold hover:underline">
              Contact our Mittagong sales &amp; service team
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Official guides: followed outbound links to government and regulator sources */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AuthorityLinks path="/" className="mb-0" />
        </div>
      </section>
    </>
  );
}
