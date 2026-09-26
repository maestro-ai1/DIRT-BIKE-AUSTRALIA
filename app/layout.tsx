import type { Metadata } from 'next';
import './globals.css';
import { SITE, CONTACT } from '@/src/config/site';
import { CartProvider } from '@/lib/cartContext';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { RecentSalesPopup } from '@/components/RecentSalesPopup';
import { WhatsAppLiveChat } from '@/components/WhatsAppLiveChat';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} | Electric Bikes, Batteries & Accessories`,
    template: `%s | ${SITE.name}`,
  },
  description: 'Australia\'s premier destination for high-performance electric dirt bikes, Stark Varg, Sur-Ron, Talaria, 72V batteries, and fast chargers. Dispatched from NSW 2575.',
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} | Brand New Electric Bikes Australia`,
    description: 'Australia\'s authorised dealer for Sur-Ron, Talaria, Stark Varg electric dirt bikes, lithium batteries, and fast chargers. Australian factory warranty.',
    url: `https://${SITE.domain}/`,
    images: [
      {
        url: `https://${SITE.domain}/images/hero_surron_trail_1790338185425.jpg`,
        width: 1200,
        height: 675,
        alt: 'Electric Dirt Bike Australia - High Performance Trail Riding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Powerful Electric Dirt Bikes`,
    description: 'Sur-Ron, Talaria, Stark Varg and 72V high-discharge batteries. 10% Crypto Discount & Free Aus-Wide freight over $1,500.',
    images: [`https://${SITE.domain}/images/hero_surron_trail_1790338185425.jpg`],
  },
  alternates: {
    canonical: `https://${SITE.domain}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: SITE.gscVerification,
    other: {
      'msvalidate.01': [SITE.bingVerification],
    },
  },
  other: {
    'og:updated_time': new Date().toISOString(),
    'indexnow-key': SITE.indexNowKey,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.locale}>
      <head>
        {/* Preload LCP hero image so browser fetches it as early as possible */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-1-electric-dirt-bike-australia.avif"
          type="image/avif"
          fetchPriority="high"
        />
        <script src="/js/webmcp.js" defer></script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white relative" suppressHydrationWarning>
        {/* Ambient Electric Dirt Bike Theme Cover Backdrop */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <img
            src="/images/theme_dirtbike_cover.jpg"
            alt="Electric dirt bike Australia — off-road trail riding background"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-[0.15] sm:opacity-[0.18] scale-105 transition-opacity"
          />
          {/* Sky-Blue and White Blending Overlays for Optimal Content Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-sky-50/35 to-white/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/30 via-transparent to-white/60" />
        </div>

        <CartProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <AnnouncementBar />
            <Nav />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <CartDrawer />
          <RecentSalesPopup />
          <WhatsAppLiveChat />
        </CartProvider>
      </body>
    </html>
  );
}
