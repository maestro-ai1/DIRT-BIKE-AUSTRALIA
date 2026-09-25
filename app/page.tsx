import React from 'react';
import Link from 'next/link';
import { HeroSlider } from '@/components/HeroSlider';
import { TrustpilotSection } from '@/components/TrustpilotSection';
import { JsonLd } from '@/components/JsonLd';
import { PRODUCTS, BRANDS, CATEGORIES, FAQ, SITE, CONTACT, BRAND, SHOP } from '@/src/config/site';
import { Zap, ShieldCheck, Truck, ArrowRight, Award, BatteryCharging, Wrench, ChevronRight, CheckCircle, Flame } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electric Dirt Bike Australia | Brand New Electric Bike | Powerful Electric Dirt bikes',
  description: 'Australia’s leading specialist for Sur-Ron, Talaria, Stark Varg electric dirt bikes, high-output 72V batteries, and fast chargers. Dispatched from NSW 2575.',
  alternates: {
    canonical: `https://${SITE.domain}/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

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
      mainEntity: FAQ.map((item) => ({
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

      {/* 2. Trust Bar (4 Value Propositions) */}
      <section className="bg-slate-900 text-white py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/20">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">Free Nationwide Freight</div>
                <div className="text-slate-400 text-xs">On all bike orders over $1,500 AUD</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">12-Mo Factory Warranty</div>
                <div className="text-slate-400 text-xs">Genuine stock &amp; statutory backing</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-400/20">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">10% Crypto &amp; PayID Discount</div>
                <div className="text-slate-400 text-xs">Instant checkout discount on BTC/USDT</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-400/20">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">Mittagong NSW Workshop</div>
                <div className="text-slate-400 text-xs">Real technicians, parts &amp; support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trending Brands Bar */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">
                Australia’s Most Purchased
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Trending Electric Dirt Bike Brands
              </h2>
            </div>
            <Link
              href="/brands/"
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group"
            >
              <span>Explore All Brands</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                href={`/shop/?brand=${b.slug}`}
                className="group p-4 bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-sky-500/80 rounded-xl text-center transition-all hover:shadow-md"
              >
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">
                  {b.badge}
                </div>
                <div className="font-extrabold text-slate-900 group-hover:text-sky-600 text-sm mb-1 transition-colors">
                  {b.name}
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {b.popularModels[0]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Electric Dirt Bikes Grid */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                High-Performance Lineup
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Featured Electric Dirt Bikes &amp; Motocross
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
                Ready for aggressive singletrack, farm work, and motocross tracks. Dispatched crated with pre-delivery inspection.
              </p>
            </div>

            <Link
              href="/shop/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shrink-0 shadow-sm"
            >
              <span>View All Bikes ({PRODUCTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBikes.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with 4:3 Aspect Ratio and Badges */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-orange-600 text-white shadow-xs">
                      {product.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                      {product.brand}
                    </span>
                  </div>
                  {product.compareAtPrice && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold">
                      Save ${(product.compareAtPrice - product.price).toLocaleString()}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 mb-1">
                      <Link href={`/shop/${product.slug}/`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>

                    {/* Key Specs Row */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-4 text-slate-600">
                      <div>
                        <span className="text-slate-400 block text-[9px] uppercase font-bold">Power</span>
                        <span className="font-bold text-slate-900">{product.specs.motorPeak || 'High Torque'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[9px] uppercase font-bold">Battery</span>
                        <span className="font-bold text-slate-900">{product.specs.battery?.split(' ')[0] || 'Lithium'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-base sm:text-lg font-mono font-extrabold text-slate-900">
                        ${product.price.toLocaleString()} <span className="text-xs font-normal text-slate-500">AUD</span>
                      </div>
                      <div className="text-[10px] text-orange-600 font-semibold">
                        ${Math.round(product.price * 0.9).toLocaleString()} with Crypto (-10%)
                      </div>
                    </div>

                    <Link
                      href={`/shop/${product.slug}/`}
                      className="px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
                    >
                      View Specs
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Accessories & Batteries Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Power Upgrades &amp; Protection
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Batteries, Fast Chargers &amp; Bush Armor
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
                High-discharge 72V Molicel lithium battery packs, 15A smart fast chargers with Australian plugs, and heavy-duty 5mm alloy skid plates.
              </p>
            </div>

            <Link
              href="/accessories/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors shrink-0 shadow-sm"
            >
              <span>All Accessories →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAccessories.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-sky-600 text-white">
                      {product.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 mb-1.5">
                      <Link href={`/shop/${product.slug}/`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-base font-mono font-extrabold text-slate-900">
                        ${product.price.toLocaleString()} AUD
                      </div>
                      <div className="text-[10px] text-orange-600 font-semibold">
                        -${Math.round(product.price * 0.1).toLocaleString()} on Crypto
                      </div>
                    </div>

                    <Link
                      href={`/shop/${product.slug}/`}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Brand Authority & Mittagong NSW 2575 Facility Section */}
      <section className="py-14 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-400/30">
                <Award className="w-4 h-4" />
                <span>Authorised Australian Dealer · Founded {BRAND.foundingYear}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Authentic Australian Stock, Workshop Backed &amp; Built for Local Dirt
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Operating out of our dedicated warehouse and prep facility in <strong>Mittagong, Southern Highlands NSW 2575</strong>, we test and crate each bike with complete pre-delivery checks. Unlike drop-shippers, we stock genuine replacement parts, controllers, batteries, and performance sprockets right here in New South Wales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Real PDI Inspection</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Brake bleeding, bolt torque inspection, and battery health verification prior to crate dispatch.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-sky-400" />
                    <span>Express Tailgate Freight</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Insured heavy-freight delivery to metro and regional residential addresses across all states.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about/"
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Our Mittagong Facility &amp; Location Map →
                </Link>
                <Link
                  href="/contact/"
                  className="px-5 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-xs rounded-xl transition-colors"
                >
                  Book Workshop Pickup Consultation
                </Link>
              </div>
            </div>

            {/* Right: Technical Stats Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Operational Statistics
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-sky-400">
                    1,200+
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Bikes Dispatched Aus-Wide</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#00b67a]">
                    4.9 / 5
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Trustpilot Verified Rating</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-orange-400">
                    10%
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Instant Crypto Discount</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-purple-400">
                    NSW 2575
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Southern Highlands HQ</div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                <strong>Australian Entity Registration:</strong> Fully registered business operated in New South Wales under official Australian statutory oversight.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Trustpilot Reviews Section (Placed directly after products per brief) */}
      <TrustpilotSection />

      {/* 8. FAQ Section */}
      <section className="py-14 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Everything you need to know about off-road electric bike legality, shipping, crypto discounts, and battery maintenance in Australia.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 transition-all hover:bg-slate-100/80"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Have a question not listed here?{' '}
            <Link href="/contact/" className="text-sky-600 font-bold hover:underline">
              Contact our Mittagong sales &amp; service team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
