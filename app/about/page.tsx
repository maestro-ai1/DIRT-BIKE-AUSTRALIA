import React from 'react';
import Link from 'next/link';
import { SITE, CONTACT, BRAND } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { MapPin, ShieldCheck, Wrench, Truck, Award, CheckCircle, Navigation, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Electric Dirt Bike Australia | Mittagong NSW 2575 Headquarters',
  description: 'Learn about Electric Dirt Bike Australia, our dedicated Southern Highlands NSW 2575 prep facility, genuine Australian stock, and our commitment to riders.',
  alternates: {
    canonical: `https://${SITE.domain}/about/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function AboutPage() {
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': ['AboutPage', 'Organization'],
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
      url: `https://${SITE.domain}/about/`,
      sameAs: BRAND.sameAs,
      areaServed: ['Australia', 'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia'],
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
          name: 'About Us',
          item: `https://${SITE.domain}/about/`,
        },
      ],
    },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/30 inline-block">
              Southern Highlands NSW 2575 Headquarters
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Pioneering High-Performance Electric Off-Road Moto in Australia
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded in {BRAND.foundingYear}, Electric Dirt Bike Australia is the country’s dedicated high-power electric motocross and trail motorcycle specialist. We test, crate, and dispatch bikes across Australia from our Mittagong NSW facility.
            </p>

            {/* ABN strictly on About us and Footer per user instructions */}
            <div className="pt-2">
              <span className="inline-block bg-slate-800 text-sky-400 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700">
                Official Entity ABN: {CONTACT.abn}
              </span>
            </div>
          </div>
        </div>

        {/* Narrative & Authority (>700 words entity-rich prose) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm leading-relaxed">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Our Journey: From Passion to Australia’s Premier Electric Moto Destination
            </h2>

            <p>
              When high-torque mid-drive electric dirt bikes first emerged, Australian enthusiasts had only two choices: wait months for uncertain grey-market overseas shipments without statutory protections, or navigate complex customs clearance alone. In {BRAND.foundingYear}, our founders recognised the need for a dedicated, trustworthy Australian specialist with physical presence, statutory guarantees, and real technical expertise.
            </p>

            <p>
              Based in <strong>Mittagong in the NSW Southern Highlands (postcode 2575)</strong>, our facility was strategically chosen for its proximity to premier Australian trail testing grounds — including the rugged escarpments, river beds, and fire trails of the Southern Tablelands. Here, we push every model to its thermal and mechanical limits, ensuring the suspension, controllers, and battery thermal management perform under intense Australian heat.
            </p>

            <h3 className="text-xl font-bold text-slate-900 pt-2">
              Genuine Australian Stock &amp; Statutory Warranty
            </h3>

            <p>
              Every bike dispatched by Electric Dirt Bike Australia is certified genuine Australian stock. Unlike parallel drop-shippers, every vehicle undergoes our rigorous <strong>Pre-Delivery Inspection (PDI)</strong> before crating. Our technicians bleed hydraulic brakes, verify torque specifications on structural chassis bolts, calibrate controllers, and test individual cell balance on every 60V and 74V lithium battery pack.
            </p>

            <p>
              Should you ever require service, replacement parts, or performance upgrades, our Mittagong parts warehouse stocks original Sur-Ron and Talaria sprockets, belts, chains, brake pads, and fast chargers ready for next-day dispatch.
            </p>

            <h3 className="text-xl font-bold text-slate-900 pt-2">
              Nationwide Logistics: Heavy Freight Direct to Your Door
            </h3>

            <p>
              Shipping high-powered electric dirt bikes requires specialized handling. We partner with Australia’s premier heavy-freight carriers equipped with hydraulic tailgate trucks. Each bike is securely bolted inside a steel-reinforced transit crate, ensuring it arrives at your home or depot in immaculate, showroom condition. All bike orders over $1,500 AUD include <strong>100% FREE freight</strong> across Australian mainland metropolitan and regional centers.
            </p>
          </div>

          {/* Right Column: Site Map & Facility Details for Mittagong NSW 2575 */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Location Map Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <MapPin className="w-5 h-5 text-sky-600" />
                  <span>Mittagong NSW 2575 Facility</span>
                </div>
                <span className="text-[11px] font-mono bg-sky-50 text-sky-700 px-2 py-0.5 rounded font-bold">
                  NSW 2575
                </span>
              </div>

              {/* Styled Interactive/Visual Location Graphic */}
              <div className="relative h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 flex flex-col items-center justify-center text-center p-4">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="mt-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-900 shadow-sm">
                    {CONTACT.address}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">
                    Coordinates: 34.4533° S, 150.4485° E
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 text-[10px] text-slate-400 bg-white/80 px-2 py-0.5 rounded">
                  Southern Highlands NSW
                </div>
              </div>

              {/* Contact Details List */}
              <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Warehouse Address:</strong> {CONTACT.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <span><strong>Direct Line:</strong> {CONTACT.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <span><strong>General Inquiries:</strong> {CONTACT.email}</span>
                </div>
                <div className="pt-2 text-[11px] text-slate-500 font-mono">
                  <strong>Registered Business ABN:</strong> {CONTACT.abn}
                </div>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 text-xs text-sky-950 space-y-3">
              <div className="font-bold text-sm text-sky-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>The Electric Dirt Bike Australia Promise</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>Real Australian stock with statutory warranty backing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>Fast crate dispatch direct from Southern Highlands NSW</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>10% Instant crypto discount with zero hidden merchant fees</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Milestones Timeline */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Key Operational Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {BRAND.milestones.map((m) => (
              <div key={m.year} className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                <div className="font-mono text-base font-extrabold text-sky-600">
                  {m.year}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.event}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
