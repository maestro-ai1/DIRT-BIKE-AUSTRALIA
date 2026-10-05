# SEO keyword allocation and change log (5 Oct 2026)

Source of all volumes, KD and intent: your three Semrush AU CSVs (25 Sep 2026). Nothing here is deployed yet.

## Allocation rule
| Semrush intent | Used for |
|---|---|
| Transactional | MAIN keyword of a page (title and H1), product tags, product Q&A |
| Commercial | PRIMARY keywords (H1, headings, description), categories, sub-categories, products |
| Informational | Blog posts and blog tags (`src/config/blog-seo.ts`) |
| Navigational | FAQ entries (`FAQ_SEO` in `src/config/seo.ts`) |

Where Semrush has no transactional keyword for a topic (kids, motocross, RTR), the main keyword is composed from the best commercial keyword plus "for sale" and is marked "composed".

## Page by page
| URL | New title | Main keyword (transactional) | Primary keywords (commercial) |
|---|---|---|---|
| `/` | Electric Dirt Bike for Sale Australia \| Sur-Ron, Talaria & Stark Varg | electric dirt bike for sale (170/mo, KD 13, Transactional) | electric dirt bike australia (1,300/mo, KD 17, Informational, Commercial); electric dirt bikes australia (320/mo, KD 37, Commercial); electric dirtbike australia (90/mo, KD 12, Informational, Commercial) |
| `/shop/` | Electric Dirt Bikes for Sale Australia — Shop All Models \| EDBA | buy electric dirt bike (40/mo, KD 17, Transactional) | electric dirt bikes (1,000/mo, KD 19, Informational, Commercial); electric dirt bikes australia (320/mo, KD 37, Commercial) |
| `/electric-dirt-bikes/` | Electric Dirt Bikes for Sale Australia — Off-Road, Trail & Enduro \| EDBA | electric dirt bikes for sale (110/mo, KD 11, Transactional) | electric dirt bike (6,600/mo, KD 19, Informational, Commercial); electric dirt bikes (1,000/mo, KD 19, Informational, Commercial); electric dirtbike (1,000/mo, KD 23, Commercial); e dirt bike (1,000/mo, KD 11, Informational, Commercial); electric dirt bike for adults (320/mo, KD 14, Commercial); electric off road bike (590/mo, KD 11, Informational, Commercial) |
| `/electric-motor-bikes/` | Electric Motorbikes for Sale Australia — Dirt, Commuter & Kids \| EDBA | electric motorbikes for sale (210/mo, KD 17, Transactional) | electric motorbike (6,600/mo, KD 20, Commercial); electric motorbike australia (1,300/mo, KD 26, Commercial); electric motorcycle (1,900/mo, KD 22, Informational, Commercial); electric motorcycle australia (1,900/mo, KD 26, Commercial); electric motor bike (1,000/mo, KD 19, Informational, Commercial); electric motor bikes (1,000/mo, KD 23, Informational, Commercial) |
| `/electric-motor-bikes/kids/` | Kids Electric Bikes & Motorbikes for Sale Australia — Ages 3–16 \| EDBA | kids dirt bike for sale (20/mo, no KD, unlabelled) | kids electric bike (4,400/mo, KD 16, Commercial); childs electric motorcycle (2,400/mo, KD 15, Commercial); childrens electric dirt bike (1,300/mo, KD 14, Commercial); kids electric motorbike (1,300/mo, KD 17, Commercial); childrens electric motorbike (1,300/mo, KD 20, Commercial); children electric bike (1,000/mo, KD 13, Commercial); kids electric dirt bike (590/mo, KD 15, Commercial) |
| `/electric-motor-bikes/rtr-ebike/` | RTR eBike for Sale Australia — Buy RTR E Bike Online \| EDBA | rtr ebike for sale (composed, not in bank) | rtr e bike (1,600/mo, KD 7, Commercial); rtr ebike (880/mo, KD 7, Commercial); rtr electric bike (320/mo, KD 17, Commercial); rtr bike (320/mo, KD 5, Commercial) |
| `/electric-motor-bikes/commuter-mopeds/` | Electric Mopeds for Sale Australia — Road-Legal, LAMS Approved \| EDBA | moped prices (70/mo, KD 18, Transactional) | electric moped australia (1,000/mo, KD 31, Informational, Commercial); electric motorcycle moped (1,000/mo, KD 17, Commercial); electric moped bike (390/mo, KD 12, Informational, Commercial); electric mopeds australia (110/mo, KD 36, Commercial) |
| `/electric-motor-bikes/best-electric-bikes-australia/` | Best Electric Bikes Australia 2026 — Top 10 Expert Ranked \| EDBA | buy electric bike australia (90/mo, KD 33, Transactional) | best electric bike australia (1,300/mo, KD 12, Commercial); best electric bikes australia (590/mo, KD 9, Commercial) |
| `/electric-motor-bikes/e-bike-laws-australia/` | Electric Bike Laws Australia 2026 — Are Electric Dirt Bikes Legal? State-by-State Guide \| EDBA | electric bike laws australia (210/mo, KD 23, Informational) | electric bike laws australia (210/mo, KD 23, Informational); electric bike laws qld (880/mo, KD 28, Informational); electric bike regulations nsw (480/mo, KD 22, Informational) |
| `/electric-motor-bikes/melbourne/` | Electric Bikes for Sale Melbourne — Motorbikes & Mopeds, Free Delivery \| EDBA | electric bikes for sale melbourne (170/mo, KD 13, Transactional) | electric bikes melbourne (1,900/mo, KD 24, Commercial); electric moped melbourne (1,300/mo, KD 23, Informational, Commercial); electric motorbike melbourne (50/mo, KD 30, Commercial) |
| `/electric-motor-bikes/perth/` | Electric Bikes for Sale Perth — Motorbikes & Mopeds, Free Delivery \| EDBA | electric bikes for sale perth (140/mo, KD 12, Transactional) | electric bikes perth (1,900/mo, KD 23, Commercial); electric moped perth (590/mo, KD 25, Commercial); electric motorbike perth (170/mo, KD 14, Commercial) |
| `/accessories/` | Electric Bike Parts & Dirt Bike Accessories Australia — 72V Batteries & Chargers \| EDBA | e bike parts australia (90/mo, KD 5, Informational, Transactional) | electric bike parts australia (110/mo, KD 5, Informational, Commercial); ebike battery australia (40/mo, no KD, unlabelled); electric dirt bike parts (20/mo, no KD, unlabelled) |
| `/brands/` | Electric Bike Brands Australia — Sur-Ron, Talaria, Stark Varg, E-Ride Pro \| EDBA | e ride pro (2,900/mo, KD 17, Navigational) | electric bike brands australia (90/mo, KD 13, Commercial); e ride pro australia (170/mo, KD 10, Commercial) |
| `/blog/` | Electric Dirt Bike Blog Australia — Guides, Reviews & Riding Tips \| EDBA | electric bike laws australia (210/mo, KD 23, Informational) | electric dirt bike (6,600/mo, KD 19, Informational, Commercial); electric bike laws australia (210/mo, KD 23, Informational) |
| `/faq/` | Electric Dirt Bike FAQ Australia — E-Ride Pro, Laws, Price & Delivery \| EDBA | e ride pro (2,900/mo, KD 17, Navigational) | brisbane electric bikes (480/mo, KD 28, Navigational); electric bikes in brisbane (210/mo, KD 32, Navigational); electric bike laws australia (210/mo, KD 23, Informational) |
| `/electric-bikes/` | Electric Bikes for Sale Australia — E-Bikes, E-Motos & Mopeds \| EDBA | electric bikes for sale (1,600/mo, KD 36, Transactional) | electric bike (27,100/mo, KD 35, Informational, Commercial); e bike (22,200/mo, KD 29, Informational, Commercial); electric bikes (5,400/mo, KD 29, Commercial); electric bike australia (1,900/mo, KD 39, Informational, Commercial); electric bikes australia (1,900/mo, KD 28, Informational, Commercial); e bike australia (1,900/mo, KD 45, Informational, Commercial) |
| `/electric-motocross-bikes/` | Electric Motocross Bikes for Sale Australia — Stark Varg, Sur-Ron Storm Bee \| EDBA | electric motocross bike for sale (20/mo, no KD, unlabelled) | electric motocross motorcycle (880/mo, KD 14, Commercial); electric motocross bike (720/mo, KD 17, Commercial); e motocross bike (260/mo, KD 17, Commercial); electric mx bike (90/mo, KD 17, Commercial) |
| `/electric-motorcycles/` | Electric Motorcycles for Sale Australia — Road-Legal & Off-Road \| EDBA | electric motorcycle for sale (260/mo, KD 20, Transactional) | electric motorcycle (1,900/mo, KD 22, Informational, Commercial); electric motorcycle australia (1,900/mo, KD 26, Commercial); electric motorcycles australia (590/mo, KD 37, Commercial); electric motorcycles (720/mo, KD 27, Commercial); e motorcycle (880/mo, KD 24, Commercial) |
| `/electric-motor-bikes/sydney/` | Electric Bikes for Sale Sydney — E-Bikes, Motorbikes & Mopeds \| EDBA | e bikes for sale sydney (110/mo, KD 19, Transactional) | ebike sydney (1,600/mo, KD 26, Commercial); electric bikes sydney (880/mo, KD 32, Commercial); ebikes sydney (480/mo, KD 39, Commercial); e bikes sydney (390/mo, KD 32, Commercial) |
| `/electric-motor-bikes/brisbane/` | Electric Bikes for Sale Brisbane — E-Bikes, Motorbikes & Mopeds \| EDBA | electric bikes for sale brisbane (90/mo, KD 21, Transactional) | e bikes brisbane (1,300/mo, KD 37, Navigational, Commercial); electric motorbike brisbane (90/mo, KD 16, Commercial) |
| `/electric-fat-tyre-bikes/` | Electric Fat Bikes & Beach Cruisers for Sale Australia — Fat Tyre E-Bikes \| EDBA | beach cruiser for sale (50/mo, KD 13, Transactional) | electric fat bike (720/mo, KD 9, Informational, Commercial); best fat tyre electric bike australia (320/mo, KD 18, Commercial); fat bike australia (210/mo, KD 14, Commercial); electric fat tyre bike (210/mo, KD 10, Informational, Commercial); fat tyre electric bike australia (140/mo, KD 16, Commercial); e bike cruiser (390/mo, KD 12, Informational, Commercial) |
| `/electric-mini-bikes/` | Mini Electric Bikes for Sale Australia — Mini E Bikes & Mini Fat Bikes \| EDBA | electric mini bikes for sale (20/mo, no KD, unlabelled) | mini e bike (1,000/mo, KD 15, Commercial); electric mini bike (590/mo, KD 17, Informational, Commercial); mini electric bike (590/mo, KD 20, Commercial); mini ebike (590/mo, KD 17, Commercial) |
| `/electric-bikes/cheap/` | Cheap Electric Bikes for Sale Australia — Affordable E-Bikes & Kids Bikes \| EDBA | cheap electric bikes for sale (110/mo, KD 19, Transactional) | cheap electric bikes (720/mo, KD 28, Informational, Commercial); cheap electric bikes australia (390/mo, KD 25, Informational, Commercial); electric bike cheap (320/mo, KD 16, Commercial); cheapest electric bike australia (210/mo, KD 24, Commercial); cheap e bikes australia (170/mo, KD 15, Commercial); electric cheap bikes (2,900/mo, KD 20, Informational, Commercial) |

## What changed on pages that already exist (title, H1)
These are the only 16 existing pages whose title, H1 or description changed. Every URL, slug and canonical is identical.

| URL | Old title | New title | Old H1 | New H1 |
|---|---|---|---|---|
| `/about/` | (same) | (same) | Australia\'s Authorised Electric Dirt Bike Dealer — Mittagong NSW 2575 | Australia's Authorised Electric Dirt Bike Dealer — Mittagong NSW 2575 |
| `/brands/` | Electric Dirt Bike Brands Australia — Sur-Ron, Talaria, Stark Varg & More \| EDBA | Electric Bike Brands Australia — Sur-Ron, Talaria, Stark Varg, E-Ride Pro \| EDBA | (same) | (same) |
| `/blog/` | (same) | (same) | (same) | (same) |
| `/shop/` | (same) | (same) | (same) | (same) |
| `/` | Buy Electric Dirt Bikes Australia \| Sur-Ron, Talaria & Stark Varg | Electric Dirt Bike for Sale Australia \| Sur-Ron, Talaria & Stark Varg | Electric Dirt Bike Australia \| Brand New Electric Bike \| Powerful Electric Dirt bikes | Electric Dirt Bike Australia — Electric Dirt Bikes for Sale |
| `/faq/` | Electric Dirt Bike FAQ Australia — Legality, Cost, Speed & Warranty \| EDBA | Electric Dirt Bike FAQ Australia — E-Ride Pro, Laws, Price & Delivery \| EDBA | Frequently Asked Questions | Electric Dirt Bike FAQ Australia: Frequently Asked Questions |
| `/electric-motor-bikes/rtr-ebike/` | RTR eBike Australia — Buy Online, Free AU Delivery \| EDBA | RTR eBike for Sale Australia — Buy RTR E Bike Online \| EDBA | (same) | (same) |
| `/electric-motor-bikes/commuter-mopeds/` | Electric Commuter Mopeds Australia — Road-Legal, LAMS Approved \| EDBA | Electric Mopeds for Sale Australia — Road-Legal, LAMS Approved \| EDBA | Electric Commuter Mopeds & e-Bikes Australia | Electric Mopeds & Commuter E-Bikes for Sale in Australia |
| `/electric-motor-bikes/kids/` | Kids Electric Bikes & Motorbikes Australia — Junior Range Ages 3–16 \| EDBA | Kids Electric Bikes & Motorbikes for Sale Australia — Ages 3–16 \| EDBA | Kids Electric Motorbikes Australia | Kids Electric Bikes & Motorbikes for Sale in Australia |
| `/electric-motor-bikes/` | Electric Motorbikes Australia — Dirt, Commuter & Kids Range \| EDBA | Electric Motorbikes for Sale Australia — Dirt, Commuter & Kids \| EDBA | Top Electric Motor Bikes in Australia | Electric Motorbikes & Motorcycles for Sale in Australia |
| `/accessories/` | Electric Dirt Bike Accessories Australia — 72V Batteries, Fast Chargers & Parts \| EDBA | Electric Bike Parts & Dirt Bike Accessories Australia — 72V Batteries & Chargers \| EDBA | (same) | (same) |
| `/electric-dirt-bikes/` | Electric Dirt Bikes Australia — Off-Road Trail & Enduro Performance \| EDBA | Electric Dirt Bikes for Sale Australia — Off-Road, Trail & Enduro \| EDBA | Electric Dirt Bikes in Australia | Electric Dirt Bikes for Sale in Australia |
| `/electric-motor-bikes/best-electric-bikes-australia/` | (same) | (same) | (same) | (same) |
| `/electric-motor-bikes/melbourne/` | Electric Motor Bikes Melbourne VIC — Buy Online, Free Delivery \| EDBA | Electric Bikes for Sale Melbourne — Motorbikes & Mopeds, Free Delivery \| EDBA | Electric Motor Bikes Melbourne — Fast Delivery to VIC | Electric Bikes for Sale in Melbourne — Fast Delivery to VIC |
| `/electric-motor-bikes/e-bike-laws-australia/` | E-Bike Laws Australia 2026 — Are Electric Dirt Bikes Legal? State-by-State Guide \| EDBA | Electric Bike Laws Australia 2026 — Are Electric Dirt Bikes Legal? State-by-State Guide \| EDBA | (same) | (same) |
| `/electric-motor-bikes/perth/` | Electric Motor Bikes Perth WA — Buy Online, Free Delivery to Perth \| EDBA | Electric Bikes for Sale Perth — Motorbikes & Mopeds, Free Delivery \| EDBA | Electric Motor Bikes Perth — Delivered Free to WA | Electric Bikes for Sale in Perth — Delivered Free to WA |

## New pages (additive URLs, all added to the sitemap)
- `/electric-bikes/`: electric bikes for sale (1,600/mo transactional); electric bike 27,100, e bike 22,200
- `/electric-motorcycles/`: electric motorcycle for sale (260/mo); electric motorcycle 1,900
- `/electric-motocross-bikes/`: electric motocross motorcycle 880, electric motocross bike 720
- `/electric-motor-bikes/sydney/`: e bikes for sale sydney (110/mo); ebike sydney 1,600
- `/electric-motor-bikes/brisbane/`: electric bikes for sale brisbane (90/mo); e bikes brisbane 1,300

## Every other change
- **All 70 product pages:** 19 to 20 keyword tags each and 8 to 10 questions and answers each (was 5). Answers use only each product's own price, specs and site policy. Product titles, slugs and canonicals are untouched.
- **Home page:** one permanent H1 (it used to disappear when the slider rotated), a keyword-led "shop by category" section with links to every category, and 5 extra FAQ entries.
- **FAQ page:** 10 new entries (navigational brand and city terms, plus buying questions), one price answer corrected (kids bikes start at $899, not $3,690).
- **Blog posts:** tags from Semrush Informational keywords, shown under each post and added to meta keywords.
- **/electric-motor-bikes/ hub:** removed internal research labels shown to customers ("12K+/mo", "KD 7", "Easy Win") and added links to the new pages.
- **Footer and sitemap:** new links and 5 new sitemap entries. No existing entry was removed or changed.
- **Text bugs fixed:** a visible backslash in "Australia\'s" on 7 pages and "FAQ\'s" in the footer on every page.

## Safety checks run before handing over
- TypeScript check: 0 errors. Production build: 0 warnings, 185 pages generated.
- Crawled all 150 URLs from your live sitemap on the new build: all 200, canonical unchanged, exactly one H1, no noindex, valid structured data.
- Sitemap: 0 URLs removed, 5 added.
- Not run: Google Search Console or ranking data (no access). Titles changed on 12 existing pages, so expect some normal short-term ranking movement while Google recrawls them. All brand names already in those titles were kept.

## Deploy and recovery
1. Review locally, then deploy when you approve. Nothing is live until you deploy.
2. After deploying, submit the changed and new URLs through IndexNow (you already have the key file) and in Search Console.
3. Original versions of every edited file are in `..\seo-backup-2026-10-05-ORIGINAL-FILES` (outside the project). Copy a file back to restore it.
