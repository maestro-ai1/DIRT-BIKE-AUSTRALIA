import { MetadataRoute } from 'next';
import { SITE, PRODUCTS, POSTS } from '@/src/config/site';
import { indexableTags } from '@/src/config/blog-seo';

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod must only change when a page's content really changes. A build-time timestamp makes every URL look
  // freshly modified on every deploy, and Bing and Google then stop trusting lastmod. Bump UPDATED when content changes.
  const NEW_PAGES = '2026-10-24'; // 2026-10-24: Open Graph image, official outbound links and corrected Queensland licence wording added
  const UPDATED = '2026-10-24'; // 2026-10-24: audit fixes (official outbound links, Open Graph image, corrected Queensland e-bike licence wording, best electric bike title)
  const STABLE = '2026-10-24'; // 2026-10-24: every product page now links six related products and carries de-duplicated, brand-specific outbound links
  const TITLE_FIX = '2026-10-27'; // 2026-10-27: 10 new keyword-led guides (kids ages, scrambler, trail, road legal, battery) and unique-keyword rewrites

  // A tag page changes when a post it lists is published: use the newest member post date.
  const tagLastMod = (slugs: string[]) => slugs.map((sl) => POSTS.find((p) => p.slug === sl)?.date).filter(Boolean).map((d) => new Date(d as string).toISOString().slice(0, 10)).sort().pop();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/shop/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/blog/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/about/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/brands/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/shipping-and-delivery/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${BASE}/returns-policy/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${BASE}/warranty-and-service/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.55 },
    // Category pages
    { url: `${BASE}/electric-dirt-bikes/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/electric-motor-bikes/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/electric-bikes/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/electric-motorcycles/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-fat-tyre-bikes/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-mini-bikes/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-bikes/cheap/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motocross-bikes/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/accessories/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    // New category pages (2026-10-07)
    { url: `${BASE}/electric-dirt-bikes/sur-ron/`, lastModified: NEW_PAGES, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/electric-dirt-bikes/cheap/`, lastModified: NEW_PAGES, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-dirt-bikes/kids/`, lastModified: NEW_PAGES, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-pit-bikes/`, lastModified: NEW_PAGES, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/electric-balance-bikes/`, lastModified: NEW_PAGES, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/brands/e-ride-pro/`, lastModified: '2026-10-08', changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE}/electric-bike-batteries/`, lastModified: NEW_PAGES, changeFrequency: 'weekly', priority: 0.8 },
    // Electric motor bike sub-pages
    { url: `${BASE}/electric-motor-bikes/kids/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motor-bikes/rtr-ebike/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motor-bikes/commuter-mopeds/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motor-bikes/best-electric-bikes-australia/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motor-bikes/e-bike-laws-australia/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/electric-motor-bikes/melbourne/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/electric-motor-bikes/perth/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/electric-motor-bikes/sydney/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/electric-motor-bikes/brisbane/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/electric-motor-bikes/gold-coast/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/electric-motor-bikes/townsville/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.75 },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${BASE}/shop/${product.slug}/`,
    lastModified: STABLE,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: TITLE_FIX,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Tag pages exist only for tags used by two or more posts (single-post tags are not linked, so they are not in the sitemap).
  const tagPages: MetadataRoute.Sitemap = indexableTags(POSTS.map((p) => p.slug))
    .map(([k, v]) => ({ url: `${BASE}/blog/tag/${k}/`, lastModified: tagLastMod(v.slugs) || NEW_PAGES, changeFrequency: 'monthly' as const, priority: 0.5 }));

  // Single-language, single-region site: each URL declares itself as en-AU and x-default so hreflang is explicit and consistent with <html lang="en-AU">.
  return [...staticPages, ...productPages, ...blogPages, ...tagPages].map((e) => ({ ...e, alternates: { languages: { 'en-AU': e.url, 'x-default': e.url } } }));
}
