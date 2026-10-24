# Site audit and fixes, 24 Oct 2026

Method: crawl of all 350 sitemap URLs (`scripts/audit/crawl.cjs`, `analyse.cjs`), outbound link check (`extcheck.cjs`), unique-content word counts (`unique.cjs`), Search Console Page indexing report, keywords checked against the Semrush CSV bank (`new keywords e bikes/fullbank.cjs`).
Re-run: `node scripts/audit/crawl.cjs` then `node scripts/audit/analyse.cjs` (outputs go to `%TEMP%\audit`; put the Search Console "not indexed" URL list in `gsc-not-indexed.txt` there).

## Search Console (before)
256 indexed, 105 not indexed: 1 noindex (`/search/`, intended) and 104 "Discovered - currently not indexed" (80 of 155 products, 12 tag pages, 8 category/info pages, 3 posts, blog index). "Crawled - currently not indexed" = 0, so Google had not rejected anything on quality; it simply had not crawled them.

## Root cause and fix: internal links
Every product linked to the first 3 products of its category (`related = filter(...).slice(0,3)`), so the long tail had a median of 2 inbound links, and every legacy post promoted the same bike (`PRODUCTS[0]`).
- `lib/relatedProducts.ts`: each product now links 6 related products (price-neighbours of the same kind, then same brand, then category).
- `components/BlogRelatedBikes.tsx`: every guide shows 3 relevant catalogue products (chosen from the slug, spread by hash, never repeating a product the post already links); the "recommended bike" callout is now topical.
- Result (median unique linking pages): products/pages in the GSC "not indexed" set 4 -> 11 (pages under 3 links: 35 -> 2); rest of site 5 -> 8 (72 -> 24).

## Outbound links
- Queensland e-bike link was dead (Street Smarts redirects to a TMR 404) on 32 pages: now `qld.gov.au` e-bike rules page.
- 8 other redirecting URLs updated (Battery University www, ACCC, infrastructure.gov.au, NSW registration, KTM AU, Husqvarna AU, NIU global, Stark Future).
- 195 pages linked the same URL twice (product guide + "Official Guides" box): now 16 (the rest are deliberate repeat citations in long articles).
- Added state sources: Transport Victoria, SA, Tasmania, ACT, NT (all loaded in a browser 24 Oct 2026; SA/TAS/ACT return 403 to scripts only).
- Added verified official manufacturer links by slug: Sur-Ron, Stark Future, KTM AU, Husqvarna AU, Kuberg, Razor, Vmoto, SUPER73, Segway, NIU. Pages with an official brand link: 16 -> 35. Talaria, E-Ride Pro, Super Soco and OSET were NOT added (no official site could be confirmed; osetbikes.com timed out from this network).
- 140 internal links used `https://www.` (308 redirect): now the canonical host.
- External anchors 2,217 -> 1,883 (duplicates and www links removed; no unique link removed). Unique domains 29 -> 38.

## On-page technical
- Meta descriptions over 160: 2 -> 0. Heading level skips (product cards as h4 after h2): 14 -> 0. Pages with no og:image: 86 -> 0 (page-level openGraph replaced the layout image). Images without width/height: 2 -> 0. `/contact/` breadcrumb schema added.
- Title tags: 36 posts with 67-83 character titles now have a <=60 character `<title>` (`SEO_TITLES` in `blog-seo.ts`; H1s unchanged). Blog titles over 65: 61 -> 24. Product titles (<=68) left as is.
- `/electric-motor-bikes/best-electric-bikes-australia/` now targets the singular "best electric bike australia" (1,300/mo, KD 12, Commercial) instead of the plural (590/mo).
- Sitemap `lastmod` bumped to 2026-10-24 for pages whose content changed; `llms.txt` / `llms-full.txt` regenerated.

## Accuracy fixes (important)
- Queensland: since 31 Aug 2026 e-bike riders must be 16 and hold a licence (min. Learner); official source qld.gov.au. About 15 places said e-bikes need "no licence" nationally (Brisbane, Gold Coast, e-bike laws table, commuter mopeds, kids, best bikes, FAQs, seo.ts). Now qualified. The e-bike laws table row for QLD (was 200W / no licence) rewritten from the official page.
- RTR: 8 posts still described the RTR as a road-legal 22 kg pedal-assist commuter (the 12 Oct cleanup missed them; RTR eBike Pro is the 72V 25Ah 80 kg off-road bike). Removed; the comparison column now uses the CHUBBIE 3 from catalogue data. Fixed "four models" counts and an orphaned list item left behind.

## Not done / backlog
- 58 blog posts have only 165-400 unique words (the original 40 posts plus 18 added 2026-09-20..28); the rich posts are 1,500+ words. Expanding the high-volume T/C ones is the biggest remaining content gap.
- Outbound sets are still topical-but-repeated (nsw lithium page on ~190 pages). Brand-specific sources for Talaria / E-Ride Pro need a confirmed official site.
- DNS-AID (needs registrar DNS records), UCP commerce (optional).
