import { SITE } from '@/src/config/site';

// Default social/preview image for pages that declare their own openGraph (a page-level openGraph replaces the layout's, images included).
export const DEFAULT_OG_IMAGES = [
  {
    url: `https://${SITE.domain}/images/hero_surron_trail_1790338185425.jpg`,
    width: 1200,
    height: 675,
    alt: 'Electric dirt bikes for sale in Australia: Electric Dirt Bike Australia',
  },
];
