import { MetadataRoute } from 'next';
import { SITE, PRODUCTS, POSTS } from '@/src/config/site';

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod must only change when a page's content really changes. A build-time timestamp makes every URL look
  // freshly modified on every deploy, and Bing and Google then stop trusting lastmod. Bump UPDATED when content changes.
  const UPDATED = '2026-10-05';
  const UNCHANGED = '2026-09-28';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/shop/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/blog/`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/about/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/brands/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/shipping-and-delivery/`, lastModified: UNCHANGED, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${BASE}/returns-policy/`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${BASE}/warranty-and-service/`, lastModified: UNCHANGED, changeFrequency: 'monthly', priority: 0.55 },
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
    lastModified: post.date ? new Date(post.date).toISOString().slice(0, 10) : UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
