import { MetadataRoute } from 'next';
import { SITE, PRODUCTS, POSTS } from '@/src/config/site';

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/shop/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/brands/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq/`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/shipping-and-delivery/`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${BASE}/returns-policy/`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${BASE}/warranty-and-service/`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    // Category pages
    { url: `${BASE}/electric-dirt-bikes/`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/electric-motor-bikes/`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/accessories/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    // Electric motor bike sub-pages
    { url: `${BASE}/electric-motor-bikes/kids/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motor-bikes/rtr-ebike/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motor-bikes/commuter-mopeds/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motor-bikes/best-electric-bikes-australia/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/electric-motor-bikes/e-bike-laws-australia/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/electric-motor-bikes/melbourne/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/electric-motor-bikes/perth/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${BASE}/shop/${product.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
