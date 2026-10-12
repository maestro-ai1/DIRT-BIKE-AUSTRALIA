import React from 'react';
import { SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: electric bikes townsville 320, e bikes townsville 210, electric bike townsville 90 (Commercial).
const seo = seoFor('/electric-motor-bikes/townsville/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-motor-bikes/townsville/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-motor-bikes/townsville/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

export default function ElectricBikesTownsvillePage() {
  return (
    <CategoryLanding
      path="/electric-motor-bikes/townsville/"
      crumbs={[{ name: 'Electric Motor Bikes', href: '/electric-motor-bikes/' }, { name: 'Townsville' }]}
      eyebrow="Electric Bikes Townsville · North QLD"
      h1={seo.h1 as string}
      intro="Buy an electric bike online for Townsville from Electric Dirt Bike Australia. We ship e-bikes, electric motorbikes, mopeds and electric dirt bikes from Mittagong NSW to Townsville and across North Queensland. Free insured freight on orders over $1,500, a 12-month Australian warranty and 10% off with crypto or PayID."
      chips={["Delivered to Townsville & North QLD","Free Insured Freight Over $1,500","12-Month AU Warranty","10% Crypto & PayID Discount"]}
      groups={[
        { id: 'commuter', heading: 'E-Bikes & Mopeds for Townsville Riders', blurb: 'Road-legal RTR eBikes need no licence or registration. Electric mopeds are road-registered.', slugs: ['rtr-ebike-pro-commuter', 'rtr-ebike-s-classic', 'niu-nqi-gt-electric-moped', 'super-soco-cpx-electric-moped'] },
        { id: 'dirt', heading: 'Electric Dirt Bikes for Queensland Trails', blurb: 'Off-road electric dirt bikes for private property and designated off-road parks in North Queensland.', slugs: ['sur-ron-light-bee-x', 'talaria-sting-r-mx4', 'sur-ron-ultra-bee'] },
      ]}
      links={[
        { href: '/electric-bikes/', label: 'Electric bikes for sale in Australia' },
        { href: '/electric-motor-bikes/e-bike-laws-australia/', label: 'Electric bike laws in Australia', note: 'including Queensland' },
        { href: '/shipping-and-delivery/', label: 'Shipping and delivery' },
        { href: '/faq/', label: 'Electric dirt bike FAQ' },
      ]}
      faqs={[
        { q: "Where can I buy electric bikes in Townsville?", a: "You can buy electric bikes for Townsville online from Electric Dirt Bike Australia. We dispatch from Mittagong NSW and deliver across North Queensland, with free insured freight over $1,500." },
        { q: "Do e bikes in Townsville cope with the heat?", a: "Lithium e-bike batteries work well in heat if they are charged in the shade and not left in a hot vehicle. Our bikes use quality lithium packs backed by a 12-month Australian warranty." },
        { q: "Do you deliver an electric bike to Townsville?", a: "Yes. We ship e-bikes, mopeds and electric dirt bikes to Townsville and North QLD. Message us on WhatsApp for a delivery estimate." },
      ]}
      collectionName="Electric Bikes Townsville"
    />
  );
}
