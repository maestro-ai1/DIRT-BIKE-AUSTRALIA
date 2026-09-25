import React from 'react';
import Link from 'next/link';
import { SITE, SHOP, CONTACT } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Truck, ShieldCheck, Clock, MapPin, PackageCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Australia | Electric Dirt Bike Australia',
  description: 'Learn about our Australia-wide insured freight, free delivery on orders over $1,500 AUD, tailgate delivery, and crate tracking from Mittagong NSW.',
  alternates: {
    canonical: `https://${SITE.domain}/shipping-and-delivery/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function ShippingDeliveryPage() {
  const schemaData = {
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
        name: 'Shipping & Delivery',
        item: `https://${SITE.domain}/shipping-and-delivery/`,
      },
    ],
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Shipping &amp; Delivery</span>
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold mb-3 border border-sky-400/30">
            <Truck className="w-3.5 h-3.5" />
            <span>Heavy Crate Logistics</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Australia-Wide Freight &amp; Delivery Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Insured nationwide dispatch direct from our warehouse in Mittagong NSW 2575 with specialized tailgate delivery.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-sky-600" />
              <span>1. Free Freight Threshold</span>
            </h2>
            <p>
              We provide <strong>100% FREE heavy-vehicle freight</strong> on all electric dirt bike and accessories orders with a subtotal exceeding <strong>$1,500 AUD</strong> to all mainland Australian metropolitan and regional delivery areas.
            </p>
            <p>
              For orders below $1,500 AUD (such as individual tyres, skid plates, or cables), a flat shipping fee of <strong>$200 AUD</strong> applies for insured regional road transport.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-600" />
              <span>2. Delivery Timelines by Region</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="font-bold text-slate-900 block">Sydney, Newcastle, Wollongong, ACT</span>
                <span className="text-slate-500">1 to 3 Business Days</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="font-bold text-slate-900 block">Melbourne, Brisbane, Gold Coast</span>
                <span className="text-slate-500">2 to 4 Business Days</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="font-bold text-slate-900 block">Adelaide, Perth, Regional VIC/NSW/QLD</span>
                <span className="text-slate-500">3 to 6 Business Days</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="font-bold text-slate-900 block">Tasmania, NT &amp; Remote WA/QLD</span>
                <span className="text-slate-500">5 to 8 Business Days</span>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>3. Specialized Heavy-Duty Steel Crate Packaging</span>
            </h2>
            <p>
              Electric dirt bikes are precision machines. Each unit is bolted inside a reinforced steel tubular transport cage encased in heavy cardboard. The freight driver uses a hydraulic tailgate lift to safely unload the pallet onto your driveway.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-600" />
              <span>4. Warehouse Collection in Mittagong NSW 2575</span>
            </h2>
            <p>
              Local riders are welcome to collect their pre-assembled and fully charged bike directly from our facility at {CONTACT.address}. Please notify our sales team in advance so your bike can be inspected and ready on the showroom floor.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
