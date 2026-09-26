import { Metadata } from 'next';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Contact Electric Dirt Bike Australia — Mittagong NSW Workshop | EDBA',
  description: 'Contact Australia\'s electric dirt bike specialists. Call, WhatsApp or email our Mittagong NSW 2575 workshop. Expert advice on Sur-Ron, Talaria, Stark Varg, battery upgrades and nationwide delivery.',
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
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
