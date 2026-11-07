# SEO gate report 2026-11-07 (final, run on the production build before push)

Run: `node scripts/audit/product-gate.cjs` and `node scripts/audit/page-gate.cjs` against `next start -p 3210`.

## Result
- Products: 155/155 pass (1 H1, H2/H3, >=1,104 words, 5 FAQ in FAQPage schema, BreadcrumbList + Product schema, inbound >=3, outbound >=1, title <=60 and primary-led, meta 110-158 with primary, H1 carries primary, no missing/duplicate image alts).
- Site: 342 sitemap URLs, 0 failures, 0 broken internal links (343 checked), 1 H1 on every page, titles <=60, metas 110-158, canonical + BreadcrumbList on all non-home pages, 0 duplicate titles/metas/H1.
- Blog: every post >=1,500 words on the page, >=5 FAQ items in FAQPage schema (26 legacy posts upgraded: 13 rewritten to 1,500+ words, 13 given FAQs).
- Keyword ownership (pages + posts + products): 1,439 declared keywords, 0 on more than one URL (was 116).

## Still open
- 44 of 93 posts lack a free primary or 5 secondary bank keywords: docs/post-keyword-contract-2026-11-07.csv (status needs-semrush-keywords).
- 149 of 155 products use the product name as primary (source "name"): the bank has no model-level keywords. Seeds: docs/semrush-seed-list-products-2026-11-07.csv (89 phrases).
- Not verified: Search Console state, visual check of product photos.
