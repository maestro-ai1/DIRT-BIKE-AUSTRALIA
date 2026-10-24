import { Metadata } from 'next';
import { SITE } from '@/src/config/site';
import { JsonLd } from '@/components/JsonLd';

import { DEFAULT_OG_IMAGES } from '@/lib/ogDefaults';
export const metadata: Metadata = {
  title: 'Contact Electric Dirt Bike Australia | Mittagong NSW Sales & Service',
  description: 'Call, WhatsApp or email our Mittagong NSW 2575 workshop for expert advice on Sur-Ron, Talaria, Stark Varg, batteries and nationwide delivery.',
  keywords: 'contact electric dirt bike australia, electric dirt bike dealer contact, electric bike shop australia phone, sur ron dealer contact nsw, electric dirt bike enquiry australia',
  alternates: {
    canonical: `https://${SITE.domain}/contact/`,
  },
  openGraph: {
    title: 'Contact Electric Dirt Bike Australia — Mittagong NSW Workshop',
    description: 'Call, WhatsApp or email our Mittagong NSW 2575 workshop. Expert advice on Sur-Ron, Talaria, Stark Varg & nationwide delivery.',
    url: `https://${SITE.domain}/contact/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
    images: DEFAULT_OG_IMAGES,
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `https://${SITE.domain}/contact/` },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}
