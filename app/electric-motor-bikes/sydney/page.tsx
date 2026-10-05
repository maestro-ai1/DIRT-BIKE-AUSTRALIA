import React from 'react';
import { SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: ebike sydney 1,600, electric bikes sydney 880, ebikes sydney 480, e bikes sydney 390 (Commercial);
// e bikes for sale sydney 110, electric bike for sale sydney 90, electric bikes for sale sydney 70 (Transactional).
const seo = seoFor('/electric-motor-bikes/sydney/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-motor-bikes/sydney/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-motor-bikes/sydney/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

export default function ElectricBikesSydneyPage() {
  return (
    <CategoryLanding
      path="/electric-motor-bikes/sydney/"
      crumbs={[{ name: 'Electric Motor Bikes', href: '/electric-motor-bikes/' }, { name: 'Sydney' }]}
      eyebrow="Electric Bikes Sydney · NSW"
      h1={seo.h1 as string}
      intro="Buy an electric bike online for Sydney from Electric Dirt Bike Australia. We are based in Mittagong in the NSW Southern Highlands and ship e-bikes, electric motorbikes, mopeds and electric dirt bikes to Sydney and across New South Wales. Free insured freight on orders over $1,500, a 12-month Australian warranty, and workshop pickup consultations by arrangement."
      chips={['NSW-Based Workshop', 'Free Insured Freight Over $1,500', '12-Month AU Warranty', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'commuter', heading: 'E-Bikes & Mopeds for Sydney Commuters', blurb: 'Road-legal RTR eBikes need no licence or registration. Electric mopeds are road-registered.', slugs: ['rtr-ebike-pro-commuter', 'rtr-ebike-s-classic', 'niu-nqi-gt-electric-moped', 'super-soco-cpx-electric-moped'] },
        { id: 'dirt', heading: 'Electric Dirt Bikes for NSW Trails and Tracks', blurb: 'Off-road electric dirt bikes for private property and designated off-road parks.', slugs: ['sur-ron-light-bee-x', 'talaria-sting-r-mx4', 'sur-ron-ultra-bee'] },
      ]}
      links={[
        { href: '/electric-bikes/', label: 'Electric bikes for sale in Australia' },
        { href: '/electric-motor-bikes/e-bike-laws-australia/', label: 'Electric bike laws in Australia' },
        { href: '/blog/electric-bike-registration-nsw-guide/', label: 'Electric bike registration rules in NSW' },
        { href: '/contact/', label: 'Contact our Mittagong workshop', note: 'arrange a pickup consultation' },
      ]}
      faqs={[
        { q: 'Where can I buy an e bike in Sydney?', a: 'You can buy an e bike for Sydney online from Electric Dirt Bike Australia. We are based in Mittagong, NSW, and deliver electric bikes to Sydney. Browse the RTR eBike range and electric mopeds on this page, or contact us to arrange a workshop pickup consultation.' },
        { q: 'Do you deliver electric bikes to Sydney?', a: 'Yes. We ship electric bikes, motorbikes and dirt bikes to Sydney and all of NSW from our Mittagong workshop. Free insured freight applies to orders over $1,500 AUD. Message us on WhatsApp for a delivery estimate to your suburb.' },
        { q: 'Are electric bikes legal in NSW?', a: 'Pedal-assist e-bikes that meet the Australian 250W and 25 km/h assist standard, like the RTR eBike, are treated as bicycles and need no licence or registration. Higher-powered electric motorbikes must be registered for the road or used off-road only. Rules vary by state, so read our NSW registration guide and electric bike laws guide.' },
        { q: 'How much do electric bikes cost in Sydney?', a: 'Our road-legal RTR eBikes start at $2,790 and electric mopeds start at $5,490. Adult electric dirt bikes start at $5,490. All prices are in AUD including GST, and you save 10% when you pay with crypto or PayID.' },
      ]}
      collectionName="Electric Bikes Sydney"
    />
  );
}
