import { MetadataRoute } from 'next';
import { SITE, PRODUCTS, POSTS } from '@/src/config/site';
import { indexableTags } from '@/src/config/blog-seo';

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod must only change when a page's content really changes. A build-time timestamp makes every URL look
  // freshly modified on every deploy, and Bing and Google then stop trusting lastmod. Bump UPDATED when content changes.
  const NEW_PAGES = '2026-10-07'; // pages and posts first published on this date
  const UPDATED = '2026-10-06'; // titles, descriptions, headings and layout changed on every indexed page on this date

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
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${BASE}/shop/${product.slug}/`,
    lastModified: UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    // Posts whose title tag was shortened on UPDATED (see app/blog/[slug]/page.tsx) count as modified that day.
    lastModified: post.title.length + 11 > 70 ? UPDATED : post.date ? new Date(post.date).toISOString().slice(0, 10) : UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Tag pages exist only for tags used by two or more posts (single-post tags are not linked, so they are not in the sitemap).
  const tagPages: MetadataRoute.Sitemap = indexableTags(POSTS.map((p) => p.slug))
    .map(([k]) => ({ url: `${BASE}/blog/tag/${k}/`, lastModified: NEW_PAGES, changeFrequency: 'monthly' as const, priority: 0.5 }));

  return [...staticPages, ...productPages, ...blogPages, ...tagPages];
}
