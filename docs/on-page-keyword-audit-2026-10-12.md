# On-Page SEO Keyword Structure Audit & Mapping Report
**Site:** electricdirtbikeaustralia.com.au · **Audit date:** 12 Oct 2026 · **Crawl:** live site, 347 sitemap URLs · **Keyword source:** the 10 SEMrush AU CSV exports in the project folder

> All volumes/KD/intent below come from the SEMrush exports (monthly AU searches). `*` after an intent = SEMrush gave no label (keyword under ~50 searches/mo), so the intent is inferred from wording. "Not in bank" = the phrase is in none of the CSVs, so no volume is quoted.

---

## 1. Executive Summary & Architecture Overview

### 1.1 Verdict

The keyword hierarchy is **structurally sound and well ahead of most retail sites** (one canonical URL per topic, every product has a title keyword, no duplicate product titles, no noindex or canonical errors). Weaknesses are concentrated in three places: **(a)** high-volume primaries that sit in body copy only, not in a title/H1/H2; **(b)** a cluster of overlapping assignments that split authority between the home, `/shop/`, `/electric-dirt-bikes/` and the motorbike/motorcycle pages; **(c)** demand the site has no page for (scooters, Gold Coast, spelling variants, "dirt bicycle").

| Scorecard | Result |
|---|---|
| Pages crawled | 347 (1 home, 34 category/brand/guide/utility pages, 153 products, 102 blog posts, 57 blog tag pages) |
| Keyword bank | 36,895 unique keywords; 11,899 have volume; 1,139 have 50+ searches and a SEMrush intent label |
| **Main** keywords (30 mapped pages) in **title AND H1** | **7 of 30 (23%)**; 13 in one of the two; **10 in neither** |
| **Primary** keywords (110 mapped) in a title/H1/H2/H3 | **63 (57%)** = 117,700 of 150,380 mapped monthly searches; 41 in body only; 6 not on the page at all |
| Products with a bank Transactional/Commercial keyword in title and meta | 153 of 153 (100%); in H1: 77 of 153 (50%) |
| Bank demand not found anywhere on the site | Transactional: 44 keywords / 7,270 vol; Commercial: 428 / 80,040; Informational+Navigational: 83 / 12,120 |
| Titles over 60 characters (likely truncated in Google) | 235 of 347; 32 over 70 |
| Blog posts under 600 words | 29 of 102 |

### 1.2 Architecture at a glance

```
HOME  /  main: electric dirt bike for sale (170, KD13, [T])
│
├─ /shop/ ........................ buy electric dirt bike (40)           ← 247 words, H1 duplicates /electric-dirt-bikes/
├─ /electric-dirt-bikes/ ......... electric dirt bikes for sale (110)
│    ├─ /cheap/ .................. cheap electric dirt bikes (260, [I])
│    ├─ /kids/ ................... electric dirt bike for kids (320)
│    └─ /sur-ron/ ................ surron for sale (260, [T])
├─ /electric-bikes/ .............. electric bikes for sale (1,600, KD36)
│    └─ /cheap/ .................. cheap electric bikes for sale (110)
├─ /electric-motor-bikes/ ........ electric motorbikes for sale (210)
│    ├─ /kids/ /rtr-ebike/ /commuter-mopeds/ /best-electric-bikes-australia/ /e-bike-laws-australia/
│    └─ /sydney/ /melbourne/ /brisbane/ /perth/   (city pages, topic is "electric bikes")
├─ /electric-motorcycles/ ........ electric motorcycle for sale (260)
├─ /electric-motocross-bikes/  /electric-mini-bikes/  /electric-pit-bikes/  /electric-balance-bikes/  /electric-fat-tyre-bikes/
├─ /electric-bike-batteries/  /accessories/
├─ /brands/ → /brands/e-ride-pro/
├─ /blog/ (102 posts, 57 tag pages)   /faq/   (+ about, contact, returns, shipping, warranty)
└─ /shop/<product>/ (153)
```

### 1.3 Cannibalisation, funnel gaps and misalignments (summary)

1. **Home vs `/shop/` vs `/electric-dirt-bikes/`** all target "electric dirt bike(s) for sale Australia". Titles start with the same phrase, `/shop/` and `/electric-dirt-bikes/` share an **identical H1**, and "electric dirt bikes" (1,000) is a primary on both.
2. **`/electric-motor-bikes/` vs `/electric-motorcycles/`** are assigned the same primaries ("electric motorcycle" 1,900 and "electric motorcycle australia" 1,900).
3. **Two kids pages** (`/electric-motor-bikes/kids/` and `/electric-dirt-bikes/kids/`) split the "kids electric dirt bike" family (590 + 110 + 110 + 70 + 70).
4. **Wrong owner for "e ride pro" (2,900, [N])** in `seo.ts`: assigned to `/faq/`, while `/brands/e-ride-pro/` is the page that ranks for it and has no entry in `seo.ts`.
5. **"electric bike laws australia" (210)** is main on three pages in `seo.ts` (laws page, `/blog/`, `/faq/`) and is not present on `/blog/` or `/faq/` at all.
6. **Blog vs category**: 20 of 102 posts carry "electric dirt bike" in the title/H1 (the exact primary of `/electric-dirt-bikes/` and `/blog/`); 9 carry "electric dirt bikes"; the kids (9 posts), battery (12), laws (7), cost/price (13) and "best" (7) families each overlap internally.
7. **Tag pages**: 31 of 57 `/blog/tag/` titles contain a category keyword ("E Bike Battery", "Electric Bikes For Sale Australia", "Best Electric Motorcycle"), so they compete with the category pages for the same query.
8. **URL tree vs keyword**: city pages, "best electric bikes", RTR and kids sit under `/electric-motor-bikes/` while their topic is *electric bikes*. URLs are frozen (sitemaps submitted), so this is solved with internal links, not moves.
9. **Funnel gap (Awareness)**: only 16 of 121 informational/navigational bank keywords (50+ searches) appear in a heading anywhere on the site; 83 (12,120 vol) are not on the site.
10. **No page** for: electric scooters (17 bank keywords, 6,230 vol), Gold Coast ("electric bicycle gold coast" 1,600), "dirt bicycle for sale" (1,900, [T]).

---

## 2. Keyword Structure & Hierarchy Mapping (per page)

Tier rules used: **Main** = the page's assigned keyword in `src/config/seo.ts` (Transactional on money pages); **Primary** = the assigned Commercial keywords; **Secondary** = other bank Transactional/Commercial keywords (50+ searches) that belong to the page's topic (closest token match; `[+]` on page, `[-]` missing); **Supporting** = informational/low-volume (under 50) or navigational variants on the topic. Pages with no `seo.ts` entry are marked (manual).

### `/`
*Title:* Electric Dirt Bike for Sale Australia | Best Sur-Ron & Electric Bikes · *H1:* Electric Dirt Bike Australia: Shop the Best Electric Dirt Bikes for Sale · *3748 words, 8 H2s*

- **Main:** electric dirt bike for sale (170)
- **Primary:** electric dirt bike australia (1,300); electric dirt bikes australia (320); electric dirtbike australia (90)
- **Secondary:** [+] dirt bike (12,100); [+] dirt bikes (3,600); [+] dirt bike australia (170); [+] dirt bike cost (110); [+] best electric dirt bikes (50); [-] dirt bikes and (6,600, missing); [-] electric bikes dirt (4,400, missing); [-] e bikes dirt (1,900, missing); [-] moto dirt bikes for sale (1,900, missing); [-] motorcycle dirt bike for sale (1,600, missing)
- **Supporting / LSI:** [+] are electric dirt bikes legal (20); [+] electric dirt (20); [+] electric dirt bike cost (20); [+] electric dirt bikes for (20); [-] moto dirt bike (2,900, missing); [-] dirt bike 250cc (480, missing); [-] just dirt bikes (260, missing)

### `/accessories/`
*Title:* E-Bike Parts, 72V Batteries & Chargers Australia | Buy Online · *H1:* Electric Dirt Bike Accessories Australia — 72V Batteries, Fast Chargers & Parts · *1708 words, 4 H2s*

- **Main:** e bike parts australia (90)
- **Primary:** electric bike parts australia (110); ebike battery australia (40); electric dirt bike parts (20)
- **Secondary:** [-] ebike australia (1,300, missing); [-] ebike in australia (880, missing); [-] best ebike australia (720, missing); [-] australian ebike (390, missing); [-] australia ebike (210, missing)
- **Supporting / LSI:** [+] ebike (20); [-] what is the best ebike in australia (30, missing); [-] e dirt bike parts (20, missing); [-] what is the best ebike to buy in australia (20, missing)

### `/blog/`
*Title:* Electric Dirt Bike Blog Australia | Guides, Reviews & Riding Tips · *H1:* Electric Dirt Bike Blog — Guides, Reviews & Riding Tips Australia · *4107 words, 102 H2s*

- **Main:** electric bike laws australia (210)
- **Primary:** electric dirt bike (6,600); electric bike laws australia (210)
- **Secondary:** -
- **Supporting / LSI:** [-] new electric bike laws (170, missing); [-] electric bicycle law (110, missing); [-] victoria electric bike laws (70, missing)

### `/brands/`
*Title:* Electric Bike Brands Australia | Sur-Ron, Talaria, Stark Varg, E-Ride Pro · *H1:* Electric Bike Brands in Australia: Sur-Ron, Talaria, Stark Varg, E-Ride Pro & More · *1242 words, 27 H2s*

- **Main:** electric bike brands australia (90)
- **Primary:** electric dirt bike brands (20); e ride pro australia (170)
- **Secondary:** [+] electric bike brands (480); [+] e ride pro ss (110); [-] dirt bike brand (110, missing); [-] e ride pro ss australia (50, missing)
- **Supporting / LSI:** [+] e ride pro ss 2 0 (40); [+] best electric dirt bike brands (20); [+] ride pro ss (20); [+] e ride pro models (10); [-] e ride industries (480, missing); [-] e ride pro aus (40, missing); [-] e ride shop (40, missing)

### `/brands/e-ride-pro/`
*Title:* E Ride Pro Australia | E-Ride Pro SS Electric Dirt Bikes for Sale · *H1:* E-Ride Pro Australia: Electric Dirt Bikes for Sale · *1149 words, 8 H2s*

- **Main:** e ride pro australia (170) (manual)
- **Primary:** e ride pro (2,900)
- **Secondary:** -
- **Supporting / LSI:** -

### `/electric-balance-bikes/`
*Title:* Electric Balance Bike for Sale Australia | Kids E-Bikes From $749 · *H1:* Electric Balance Bikes for Kids: For Sale in Australia · *1392 words, 7 H2s*

- **Main:** electric balance bike for sale (20)
- **Primary:** electric balance bike australia (70)
- **Secondary:** -
- **Supporting / LSI:** [+] 12 electric balance bike (20); [-] best electric balance bike (30, missing); [-] best electric balance bike australia (30, missing); [-] electric balance bike 12 inch (30, missing)

### `/electric-bike-batteries/`
*Title:* Electric Bike Batteries Australia | 60V-84V Lithium Packs · *H1:* Electric Bike Batteries Australia: Lithium Packs & Chargers · *1136 words, 9 H2s*

- **Main:** electric bike batteries australia (90)
- **Primary:** ebike batteries australia (50); lithium bike battery (n/a)
- **Secondary:** [-] battery electric bicycle (480, missing); [-] batteries for electric bicycles (390, missing); [-] electric cycle battery (260, missing); [-] battery for a electric bike (170, missing); [-] electric battery for bicycle (140, missing)
- **Supporting / LSI:** [-] electric bicycle battery replacement (210, missing); [-] battery bike for kids (30, missing); [-] kids battery bike (30, missing)

### `/electric-bikes/`
*Title:* Electric Bikes for Sale Australia | E-Bikes, E-Motos & Mopeds · *H1:* Electric Bikes for Sale in Australia · *1533 words, 9 H2s*

- **Main:** electric bikes for sale (1,600)
- **Primary:** electric bike (27,100); e bike (22,200); electric bikes (5,400); electric bike australia (1,900); electric bikes australia (1,900); e bike australia (1,900)
- **Secondary:** [+] price e bike (590); [+] electric bike price (480); [+] electric bike cost (320); [+] australian e bike (110); [+] australia electric bike (90); [-] e bike electric (5,400, missing); [-] low cost electric bike (2,900, missing); [-] electric bike melbourne (1,000, missing); [-] e bike battery (1,000, missing); [-] electric motorcycle bikes (720, missing)
- **Supporting / LSI:** [+] e bike safety australia (70); [+] e bike regulations (50); [+] e bike rules (30); [+] road legal electric bikes (30); [-] childrens electric bikes (480, missing); [-] nsw e bike certification laws (320, missing); [-] fast electric bikes (260, missing)

### `/electric-bikes/cheap/`
*Title:* Cheap Electric Bikes for Sale Australia | Affordable E-Bikes & Kids Bikes · *H1:* Cheap Electric Bikes for Sale in Australia · *1394 words, 7 H2s*

- **Main:** cheap electric bikes for sale (110)
- **Primary:** cheap electric bikes (720); cheap electric bikes australia (390); electric bike cheap (320); cheapest electric bike australia (210); cheap e bikes australia (170); electric cheap bikes (2,900)
- **Secondary:** [+] e bikes (8,100); [+] e bikes australia (1,600); [-] e bikes melbourne (1,000, missing); [-] e bikes perth (1,000, missing); [-] best e bikes australia (880, missing); [-] cheap electric bikes australia under $500 (720, missing); [-] e bikes in australia (390, missing)
- **Supporting / LSI:** [+] kids e bikes (40); [+] rules for e bikes (10); [-] laws for e bikes (140, missing); [-] legal e bikes nsw (140, missing); [-] e bikes laws (110, missing)

### `/electric-dirt-bikes/`
*Title:* Electric Dirt Bikes for Sale Australia | Off-Road, Trail & Enduro · *H1:* Electric Dirt Bikes for Sale in Australia · *2655 words, 6 H2s*

- **Main:** electric dirt bikes for sale (110)
- **Primary:** electric dirt bike (6,600); electric dirt bikes (1,000); electric dirtbike (1,000); e dirt bike (1,000); electric dirt bike for adults (320); electric off road bike (590)
- **Secondary:** [+] adult electric dirt bike (260); [+] off road electric bike (210); [+] dirt bike for adults (90); [-] off road electric bikes (480, missing); [-] e bike off road (320, missing); [-] adult electric bike (320, missing); [-] electric dirt bike adults (210, missing); [-] electric bike for adults australia (210, missing)
- **Supporting / LSI:** [+] best adult electric dirt bike (20); [+] off road electric dirt bike (20); [+] road electric bike for adults (10); [-] e bike dirt (1,600, missing); [-] kids e dirt bike (40, missing); [-] off road ebike australia (40, missing)

### `/electric-dirt-bikes/cheap/`
*Title:* Cheap Electric Dirt Bikes Australia | Prices From $899 · *H1:* Cheap Electric Dirt Bikes for Sale in Australia · *1230 words, 8 H2s*

- **Main:** cheap electric dirt bikes (260)
- **Primary:** cheap electric dirt bike (140); cheap e dirt bike (140); electric dirt bike cheap (90); affordable electric dirt bike (50)
- **Secondary:** [+] dirt bike cheap (70); [-] affordable dirt bike (140, missing); [-] electric dirt bike australia cheap (90, missing); [-] cheap dirt bikes for sale under $1000 (70, missing); [-] cheap dirt bikes for sale under 200 (70, missing)
- **Supporting / LSI:** [+] dirt bikes cheap (30); [+] cheap electric dirt bikes for sale (20); [+] a cheap electric dirt bike (10); [+] cheap electric dirt bikes for kids (10); [-] cheap e bike australia (40, missing); [-] cheap electric dirt bikes for adults (30, missing); [-] e dirt bike cheap (30, missing)

### `/electric-dirt-bikes/kids/`
*Title:* Electric Dirt Bike for Kids Australia | Youth Bikes from $899 · *H1:* Electric Dirt Bikes for Kids: Youth Bikes for Sale in Australia · *1383 words, 7 H2s*

- **Main:** electric dirt bike for kids (320)
- **Primary:** electric dirt bike kids (110); electric kids dirt bike (110); electric dirt bikes for kids (70); kids electric dirtbike (70)
- **Secondary:** [+] dirt bikes for kids (320); [+] kids electric bikes (170); [-] kids dirt bikes (260, missing); [-] electric bikes for kids (110, missing); [-] kids electric dirt bikes (50, missing); [-] electric kids bikes (50, missing)
- **Supporting / LSI:** [+] electric kids (30); [+] best electric dirt bike for kids (20); [+] dirt bike kids electric (10); [-] electric bikes kids (40, missing); [-] kid dirt bikes (30, missing); [-] dirt bikes kids (30, missing)

### `/electric-dirt-bikes/sur-ron/`
*Title:* Surron for Sale Australia | Sur-Ron Electric Bike Prices · *H1:* Surron for Sale in Australia: Sur-Ron Electric Bike Prices · *1155 words, 8 H2s*

- **Main:** surron for sale (260)
- **Primary:** sur ron ebike for sale (140); surron electric bike for sale (50); surrons for sale (110)
- **Secondary:** [-] sur ron shop near me (90, missing)
- **Supporting / LSI:** -

### `/electric-fat-tyre-bikes/`
*Title:* Electric Fat Bikes for Sale Australia | Fat Tyre E-Bikes & Beach Cruisers · *H1:* Electric Fat Bikes & Beach Cruisers for Sale in Australia · *1653 words, 9 H2s*

- **Main:** beach cruiser for sale (50)
- **Primary:** electric fat bike (720); best fat tyre electric bike australia (320); fat bike australia (210); electric fat tyre bike (210); fat tyre electric bike australia (140); e bike cruiser (390)
- **Secondary:** [+] fat tyre electric bike (1,000); [+] fat tyre (320); [+] electric fat tyre bikes (90); [+] fat tyre e bike (50); [-] bicyclette fat bike (260, missing); [-] electric fat bike australia (90, missing); [-] cruiser e bike (90, missing); [-] fat bike tyres australia (90, missing); [-] fat tyre electric bikes australia (70, missing)
- **Supporting / LSI:** [-] beach cruiser retro (70, missing); [-] fat tyre folding electric bike australia (40, missing); [-] fat wheel electric bike australia (40, missing)

### `/electric-mini-bikes/`
*Title:* Mini Electric Bikes for Sale Australia | Mini E-Bikes & Fat Bikes · *H1:* Mini Electric Bikes for Sale in Australia · *1040 words, 7 H2s*

- **Main:** electric mini bikes for sale (20)
- **Primary:** mini e bike (1,000); electric mini bike (590); mini electric bike (590); mini ebike (590)
- **Secondary:** [+] electric mini bikes (110); [+] mini electric bikes (90); [-] electric mini bike motorcycle (480, missing); [-] bike electric mini (480, missing); [-] electric mini motocross bike (110, missing); [-] mini bike electric (70, missing); [-] mini e bike australia (70, missing)
- **Supporting / LSI:** [+] mini electric bikes for sale (20); [-] electric mini bike australia (40, missing); [-] mini ebike australia (40, missing); [-] mini ebike for kids (30, missing)

### `/electric-motocross-bikes/`
*Title:* Electric Motocross Bikes for Sale Australia | Stark Varg & Sur-Ron · *H1:* Electric Motocross Bike & Motorcycle for Sale in Australia · *1060 words, 8 H2s*

- **Main:** electric motocross bike for sale (20)
- **Primary:** electric motocross motorcycle (880); electric motocross bike (720); e motocross bike (260); electric mx bike (90)
- **Secondary:** [+] motocross bike (320); [-] electric motocross bicycle (260, missing)
- **Supporting / LSI:** [+] motocross bike for sale (30); [+] electric motocross (20); [+] motocross electric (20); [-] electric ktm motocross bike (170, missing); [-] childs electric motocross bike (30, missing); [-] motocross bike electric (30, missing)

### `/electric-motor-bikes/`
*Title:* Electric Motorbikes for Sale Australia | Dirt, Commuter & Kids · *H1:* Electric Motorbikes & Motorcycles for Sale in Australia · *1483 words, 6 H2s*

- **Main:** electric motorbikes for sale (210)
- **Primary:** electric motorbike (6,600); electric motorbike australia (1,300); electric motorcycle (1,900); electric motorcycle australia (1,900); electric motor bike (1,000); electric motor bikes (1,000)
- **Secondary:** [+] electric motorbikes (1,000); [+] kids electric motorbikes (170); [-] electric motor scooter australia (720, missing); [-] childrens electric motor bike (590, missing); [-] electric motorbikes australia (480, missing); [-] australia electric motorcycle (390, missing); [-] electric motor scooters australia (390, missing)
- **Supporting / LSI:** [+] australian electric motorcycle (1,300); [+] electric enduro motorcycle (30); [+] electric motorbikes for sale in australia (20); [+] top electric motor bikes (10); [-] electric motor ebike (170, missing); [-] electric sportbike motorcycle (70, missing); [-] offroad electric motorbike (40, missing)

### `/electric-motor-bikes/best-electric-bikes-australia/`
*Title:* Best Electric Bikes Australia 2026 — Top 10 Expert Ranked | EDBA · *H1:* Best Electric Bikes Australia 2026 — Expert Buyer's Guide · *1276 words, 7 H2s*

- **Main:** buy electric bike australia (90)
- **Primary:** best electric bike australia (1,300); best electric bikes australia (590)
- **Secondary:** -
- **Supporting / LSI:** -

### `/electric-motor-bikes/brisbane/`
*Title:* E Bikes Brisbane | Electric Bikes for Sale Brisbane, QLD Delivery · *H1:* E Bikes Brisbane: Electric Bikes for Sale with Delivery to QLD · *1035 words, 8 H2s*

- **Main:** electric bikes for sale brisbane (90)
- **Primary:** e bikes brisbane (1,300); electric motorbike brisbane (90)
- **Secondary:** [-] electric scooter brisbane (880, missing); [-] used electric bikes brisbane (90, missing); [-] e bikes for sale brisbane (70, missing); [-] electric bikes brisbane milton (50, missing)
- **Supporting / LSI:** [-] electric bicycle brisbane (590, missing); [-] e scooter shops brisbane (40, missing); [-] electric bicycles brisbane (40, missing)

### `/electric-motor-bikes/commuter-mopeds/`
*Title:* Electric Moped Australia | Road-Legal, LAMS Approved Mopeds for Sale · *H1:* Electric Moped Australia: Mopeds & Commuter E-Bikes for Sale · *1103 words, 6 H2s*

- **Main:** moped prices (70)
- **Primary:** electric moped australia (1,000); electric motorcycle moped (1,000); electric moped bike (390); electric mopeds australia (110)
- **Secondary:** [-] electric moped bicycle (140, missing); [-] best electric moped australia (110, missing); [-] cheap electric mopeds (90, missing); [-] electric mopeds cheap (90, missing); [-] electric moped cycle (70, missing)
- **Supporting / LSI:** [+] electric moped road legal (40); [-] motorcycle scooter moped (140, missing); [-] buy moped (40, missing); [-] electric moped law (40, missing)

### `/electric-motor-bikes/e-bike-laws-australia/`
*Title:* Electric Bike Laws Australia 2026 | Are Electric Dirt Bikes Legal? · *H1:* Are E-Bikes Legal in Australia? NSW, VIC, QLD & WA Laws 2026 · *1412 words, 7 H2s*

- **Main:** electric bike laws australia (210)
- **Primary:** electric bike laws australia (210); electric bike laws qld (880); electric bike regulations nsw (480)
- **Secondary:** -
- **Supporting / LSI:** [+] electric bike regulations (70); [-] e bike regulations nsw (260, missing); [-] legal electric bike nsw (70, missing); [-] electric bike legal nsw (50, missing)

### `/electric-motor-bikes/kids/`
*Title:* Kids Electric Bike & Childrens Electric Dirt Bike for Sale Australia · *H1:* Kids Electric Bikes & Childrens Electric Dirt Bikes for Sale in Australia · *1509 words, 6 H2s*

- **Main:** kids dirt bike for sale (20)
- **Primary:** kids electric bike (4,400); childs electric motorcycle (2,400); childrens electric dirt bike (1,300); kids electric motorbike (1,300); childrens electric motorbike (1,300); children electric bike (1,000); kids electric dirt bike (590)
- **Secondary:** [-] childrens dirt bike (1,000, missing); [-] dirt bike for kids (720, missing); [-] electric motorbike kids (590, missing); [-] electric bike kids (590, missing); [-] electric kids bike (480, missing)
- **Supporting / LSI:** [+] childrens electric (20); [-] kids petrol dirt bike (40, missing); [-] childrens electric mountain bike (40, missing); [-] kids e motorbike (40, missing)

### `/electric-motor-bikes/melbourne/`
*Title:* Electric Bikes Melbourne | Electric Bikes for Sale Melbourne, VIC · *H1:* Electric Bikes Melbourne: For Sale with Fast Delivery to VIC · *1067 words, 7 H2s*

- **Main:** electric bikes for sale melbourne (170)
- **Primary:** electric bikes melbourne (1,900); electric moped melbourne (1,300); electric motorbike melbourne (50)
- **Secondary:** [+] melbourne electric bikes (880); [-] electric scooter melbourne (1,300, missing); [-] electric bicycle melbourne (1,000, missing); [-] electric bikes melbourne australia (720, missing); [-] melbourne electric bicycles (590, missing); [-] electric bikes melbourne victoria (390, missing)
- **Supporting / LSI:** [-] electric bicycle shop melbourne (40, missing); [-] hybrid bikes melbourne (40, missing); [-] electric scooters for sale melbourne (30, missing)

### `/electric-motor-bikes/perth/`
*Title:* Electric Bikes Perth | Electric Bikes for Sale Perth, WA Delivery · *H1:* Electric Bikes Perth: For Sale with Delivery to WA · *1012 words, 6 H2s*

- **Main:** electric bikes for sale perth (140)
- **Primary:** electric bikes perth (1,900); electric moped perth (590); electric motorbike perth (170)
- **Secondary:** [+] electric bicycle perth (720); [-] quad bikes perth (480, missing); [-] electric bikes perth australia (390, missing); [-] best electric bikes perth (110, missing); [-] electric scooters for sale perth (70, missing)
- **Supporting / LSI:** [-] chinese quad bikes perth (20, missing); [-] farm quad bikes perth (20, missing); [-] perth pit bikes review (20, missing)

### `/electric-motor-bikes/rtr-ebike/`
*Title:* RTR eBike for Sale Australia | Buy RTR E Bike Online, No Licence · *H1:* RTR eBike Australia Road-Legal Electric Commuter Range · *1120 words, 7 H2s*

- **Main:** rtr ebike for sale (n/a)
- **Primary:** rtr e bike (1,600); rtr ebike (880); rtr electric bike (320); rtr bike (320)
- **Secondary:** -
- **Supporting / LSI:** [-] rtr dirt bike for sale (10, missing); [-] rtr dirt bike price (10, missing)

### `/electric-motor-bikes/sydney/`
*Title:* E Bikes for Sale Sydney | Electric Bikes Sydney & Ebike Delivery · *H1:* Electric Bikes Sydney: E Bikes and Ebikes for Sale · *1059 words, 8 H2s*

- **Main:** e bikes for sale sydney (110)
- **Primary:** ebike sydney (1,600); electric bikes sydney (880); ebikes sydney (480); e bikes sydney (390)
- **Secondary:** [+] ebikes (8,100); [-] ebikes australia (1,000, missing); [-] best ebikes australia (480, missing); [-] sydney ebikes (320, missing); [-] electric cycles sydney (210, missing); [-] electric bikes for sale sydney (70, missing)
- **Supporting / LSI:** [-] ebike 101 sydney (260, missing); [-] best electric bikes sydney (40, missing); [-] australia ebikes (30, missing)

### `/electric-motorcycles/`
*Title:* Electric Motorcycles for Sale Australia | Road-Legal & Off-Road · *H1:* Electric Motorcycles for Sale in Australia · *1071 words, 8 H2s*

- **Main:** electric motorcycle for sale (260)
- **Primary:** electric motorcycle (1,900); electric motorcycle australia (1,900); electric motorcycles australia (590); electric motorcycles (720); e motorcycle (880)
- **Secondary:** [+] electric motorcycles and scooters (480); [+] electric motorcycles for sale (90); [+] best electric motorcycles (70); [-] motorcycle e (1,000, missing); [-] children s electric motorcycles (260, missing); [-] e motorcycle australia (210, missing); [-] electric motorcycles for adults (170, missing)
- **Supporting / LSI:** [+] australian electric motorcycles (20); [+] electric motorcycles for sale in australia (20); [+] electric motorcycles in australia (20); [+] are electric motorcycles (10); [-] good electric motorcycles (30, missing); [-] production electric motorcycles (30, missing); [-] are electric motorcycles worth it (20, missing)

### `/electric-pit-bikes/`
*Title:* Electric Pit Bike for Sale Australia | Ebox, Dragster & ETM · *H1:* Electric Pit Bikes for Sale in Australia · *1278 words, 7 H2s*

- **Main:** electric pit bike for sale (20)
- **Primary:** electric pit bike (720); electric pit bikes (110); e pit bike (110); fast electric pit bike (110); electric pit bike australia (90)
- **Secondary:** [+] pit bikes australia (210); [+] pit bike australia (110); [-] pit bikes au (170, missing); [-] fast bike electric (90, missing)
- **Supporting / LSI:** [+] pit bike electric (30); [+] electric pit bikes for sale (10); [+] pit bikes electric (10); [-] electric pit bike for adults (40, missing); [-] eletric pit bike (40, missing); [-] fast electric bike australia (30, missing)

### `/faq/`
*Title:* Electric Dirt Bike FAQ Australia | E-Ride Pro, Laws, Price & Delivery · *H1:* Electric Dirt Bike FAQ Australia: Frequently Asked Questions · *1536 words, 23 H2s*

- **Main:** e ride pro (2,900)
- **Primary:** brisbane electric bikes (480); electric bikes in brisbane (210); electric bike laws australia (210)
- **Secondary:** -
- **Supporting / LSI:** -

### `/shop/`
*Title:* Electric Dirt Bikes for Sale Australia | Shop All Models, Free Freight · *H1:* Electric Dirt Bikes for Sale in Australia · *247 words, 3 H2s*

- **Main:** buy electric dirt bike (40)
- **Primary:** electric dirt bikes (1,000); electric dirt bikes australia (320)
- **Secondary:** -
- **Supporting / LSI:** -

Pages with no mapped keywords (utility): `/about/`, `/contact/`, `/returns-policy/`, `/shipping-and-delivery/`, `/warranty-and-service/`. Keep them out of the keyword plan; they correctly carry brand/trust terms only.

---

## 3. Detailed Audit Table

Alignment key: **Yes** = keyword is in a title, H1 or H2/H3 and the intent fits the page; **Needs Optimization** = only in meta/body, in title or H1 but not both (Main), or assigned to more than one page; **No** = not on the page. Bracket shows where it was found. Full data (same rows) in `on-page-keyword-audit-2026-10-12.csv`.

#### `/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric dirt bike for sale | Main | [T] Transactional | 170 | 13 | Needs Optimization (title + meta + H2/H3 + body) |
| electric dirt bike australia | Primary | [C] Commercial | 1,300 | 17 | Yes (H1 + body) |
| electric dirt bikes australia | Primary | [C] Commercial | 320 | 37 | No (not on page); also assigned to /shop/ |
| electric dirtbike australia | Primary | [C] Commercial | 90 | 12 | No (not on page) |
| dirt bike | Secondary | [C] Commercial | 12,100 | 30 | Yes (title + meta + H1 + H2/H3 + body) |
| dirt bikes | Secondary | [C] Commercial | 3,600 | 27 | Yes (H1 + H2/H3 + body) |
| dirt bike australia | Secondary | [C] Commercial | 170 | 33 | Yes (H1 + body) |
| dirt bike cost | Secondary | [C] Commercial | 110 | 21 | Yes (H2/H3 + body) |
| best electric dirt bikes | Secondary | [C] Commercial | 50 | 14 | Yes (H1 + body) |
| dirt bikes and | Secondary | [C] Commercial | 6,600 | 30 | No: not on page, add to an H2/FAQ |
| electric bikes dirt | Secondary | [C] Commercial | 4,400 | 17 | No: not on page, add to an H2/FAQ |
| e bikes dirt | Secondary | [C] Commercial | 1,900 | 14 | No: not on page, add to an H2/FAQ |
| moto dirt bikes for sale | Secondary | [T] Transactional | 1,900 | 28 | No: not on page, add to an H2/FAQ |
| motorcycle dirt bike for sale | Secondary | [T] Transactional | 1,600 | 15 | No: not on page, add to an H2/FAQ |
| are electric dirt bikes legal | Supporting | [I] Informational* | 20 | 0 | Yes (H2/H3 + body) |
| electric dirt | Supporting | [C] Commercial* | 20 | 0 | Yes (title + meta + H1 + H2/H3 + body) |
| electric dirt bike cost | Supporting | [T] Transactional* | 20 | 0 | Yes (H2/H3 + body) |
| electric dirt bikes for | Supporting | [C] Commercial* | 20 | 0 | Yes (H1 + body) |
| moto dirt bike | Supporting | [I] Informational | 2,900 | 28 | No: not on page, add |
| dirt bike 250cc | Supporting | [I] Informational | 480 | 20 | No: not on page, add |
| just dirt bikes | Supporting | [N] Navigational | 260 | 24 | No: not on page, add |

#### `/accessories/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| e bike parts australia | Main | [T] Transactional | 90 | 5 | Needs Optimization (H2/H3 + body) |
| electric bike parts australia | Primary | [C] Commercial | 110 | 5 | Needs Optimization (body) |
| ebike battery australia | Primary | [C] Commercial* | 40 | 0 | Needs Optimization (body) |
| electric dirt bike parts | Primary | [C] Commercial* | 20 | 0 | Needs Optimization (meta + body) |
| ebike australia | Secondary | [C] Commercial | 1,300 | 30 | No: not on page, add to an H2/FAQ |
| ebike in australia | Secondary | [C] Commercial | 880 | 37 | No: not on page, add to an H2/FAQ |
| best ebike australia | Secondary | [C] Commercial | 720 | 9 | No: not on page, add to an H2/FAQ |
| australian ebike | Secondary | [C] Commercial | 390 | 27 | No: not on page, add to an H2/FAQ |
| australia ebike | Secondary | [C] Commercial | 210 | 29 | No: not on page, add to an H2/FAQ |
| ebike | Supporting | [C] Commercial* | 20 | 0 | Needs Optimization (body) |
| what is the best ebike in australia | Supporting | [I] Informational* | 30 | 0 | No: not on page, add |
| e dirt bike parts | Supporting | [C] Commercial* | 20 | 0 | No: not on page, add |
| what is the best ebike to buy in australia | Supporting | [T] Transactional* | 20 | 0 | No: not on page, add |

#### `/blog/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric bike laws australia | Main | [I] Informational | 210 | 23 | No (not on page); also assigned to /electric-motor-bikes/e-bike-laws-australia/, /electric-motor-bikes/e-bike-laws-australia/, /faq/ |
| electric dirt bike | Primary | [C] Commercial | 6,600 | 19 | Needs Optimization (title + meta + H1 + H2/H3 + body); also assigned to /electric-dirt-bikes/ |
| electric bike laws australia | Primary | [I] Informational | 210 | 23 | No (not on page); also assigned to /electric-motor-bikes/e-bike-laws-australia/, /electric-motor-bikes/e-bike-laws-australia/, /faq/ |
| new electric bike laws | Supporting | [I] Informational | 170 | 25 | No: not on page, add |
| electric bicycle law | Supporting | [I] Informational | 110 | 0 | No: not on page, add |
| victoria electric bike laws | Supporting | [I] Informational | 70 | 17 | No: not on page, add |

#### `/brands/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric bike brands australia | Main | [C] Commercial | 90 | 13 | Needs Optimization (title + H2/H3 + body) |
| electric dirt bike brands | Primary | [C] Commercial* | 20 | 0 | Needs Optimization (body) |
| e ride pro australia | Primary | [C] Commercial | 170 | 10 | Needs Optimization (H2/H3 + body); also assigned to /brands/e-ride-pro/ |
| electric bike brands | Secondary | [C] Commercial | 480 | 31 | Yes (title + meta + H1 + H2/H3 + body) |
| e ride pro ss | Secondary | [C] Commercial | 110 | 14 | Needs Optimization (body) |
| dirt bike brand | Secondary | [C] Commercial | 110 | 18 | No: not on page, add to an H2/FAQ |
| e ride pro ss australia | Secondary | [C] Commercial | 50 | 6 | No: not on page, add to an H2/FAQ |
| e ride pro ss 2 0 | Supporting | [C] Commercial* | 40 | 0 | Needs Optimization (body) |
| best electric dirt bike brands | Supporting | [C] Commercial* | 20 | 0 | Needs Optimization (body) |
| ride pro ss | Supporting | [C] Commercial* | 20 | 0 | Needs Optimization (body) |
| e ride pro models | Supporting | [C] Commercial* | 10 | 0 | Needs Optimization (body) |
| e ride industries | Supporting | [N] Navigational | 480 | 22 | No: not on page, add |
| e ride pro aus | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| e ride shop | Supporting | [T] Transactional* | 40 | 0 | No: not on page, add |

#### `/brands/e-ride-pro/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| e ride pro australia | Main | [C] Commercial | 170 | 10 | Needs Optimization (title + meta + H1 + H2/H3 + body); also assigned to /brands/ |
| e ride pro | Primary | [N] Navigational | 2,900 | 17 | Needs Optimization (title + meta + H1 + H2/H3 + body); also assigned to /faq/ |

#### `/electric-balance-bikes/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric balance bike for sale | Main | [T] Transactional* | 20 | 0 | Needs Optimization (title + meta + H2/H3 + body) |
| electric balance bike australia | Primary | [C] Commercial | 70 | 5 | Yes (H2/H3 + body) |
| 12 electric balance bike | Supporting | [C] Commercial* | 20 | 0 | Yes (H2/H3 + body) |
| best electric balance bike | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |
| best electric balance bike australia | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |
| electric balance bike 12 inch | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |

#### `/electric-bike-batteries/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric bike batteries australia | Main | [C] Commercial | 90 | 8 | Yes (title + H1 + H2/H3 + body) |
| ebike batteries australia | Primary | [C] Commercial | 50 | 6 | Yes (H2/H3 + body) |
| lithium bike battery | Primary | [C] Commercial* | n/a | n/a | Yes (not in bank; H2/H3 + body) |
| battery electric bicycle | Secondary | [C] Commercial | 480 | 17 | No: not on page, add to an H2/FAQ |
| batteries for electric bicycles | Secondary | [C] Commercial | 390 | 10 | No: not on page, add to an H2/FAQ |
| electric cycle battery | Secondary | [C] Commercial | 260 | 7 | No: not on page, add to an H2/FAQ |
| battery for a electric bike | Secondary | [C] Commercial | 170 | 12 | No: not on page, add to an H2/FAQ |
| electric battery for bicycle | Secondary | [C] Commercial | 140 | 6 | No: not on page, add to an H2/FAQ |
| electric bicycle battery replacement | Supporting | [I] Informational | 210 | 8 | No: not on page, add |
| battery bike for kids | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |
| kids battery bike | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |

#### `/electric-bikes/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric bikes for sale | Main | [T] Transactional | 1,600 | 36 | Yes (title + H1 + body) |
| electric bike | Primary | [C] Commercial | 27,100 | 35 | Yes (H2/H3 + body) |
| e bike | Primary | [C] Commercial | 22,200 | 29 | Yes (H2/H3 + body) |
| electric bikes | Primary | [C] Commercial | 5,400 | 29 | Yes (title + meta + H1 + H2/H3 + body) |
| electric bike australia | Primary | [C] Commercial | 1,900 | 39 | Yes (H2/H3 + body) |
| electric bikes australia | Primary | [C] Commercial | 1,900 | 28 | Yes (H2/H3 + body) |
| e bike australia | Primary | [C] Commercial | 1,900 | 45 | Yes (H2/H3 + body) |
| price e bike | Secondary | [C] Commercial | 590 | 25 | Needs Optimization (body) |
| electric bike price | Secondary | [T] Transactional | 480 | 30 | Needs Optimization (body) |
| electric bike cost | Secondary | [C] Commercial | 320 | 27 | Yes (H2/H3 + body) |
| australian e bike | Secondary | [C] Commercial | 110 | 24 | Needs Optimization (body) |
| australia electric bike | Secondary | [C] Commercial | 90 | 37 | Needs Optimization (body) |
| e bike electric | Secondary | [C] Commercial | 5,400 | 46 | No: not on page, add to an H2/FAQ |
| low cost electric bike | Secondary | [C] Commercial | 2,900 | 25 | No: not on page, add to an H2/FAQ |
| electric bike melbourne | Secondary | [C] Commercial | 1,000 | 46 | No: not on page, add to an H2/FAQ |
| e bike battery | Secondary | [C] Commercial | 1,000 | 10 | No: not on page, add to an H2/FAQ |
| electric motorcycle bikes | Secondary | [C] Commercial | 720 | 24 | No: not on page, add to an H2/FAQ |
| e bike safety australia | Supporting | [N] Navigational | 70 | 15 | Needs Optimization (body) |
| e bike regulations | Supporting | [I] Informational | 50 | 34 | Needs Optimization (body) |
| e bike rules | Supporting | [I] Informational* | 30 | 0 | Needs Optimization (body) |
| road legal electric bikes | Supporting | [I] Informational* | 30 | 0 | Yes (H2/H3 + body) |
| childrens electric bikes | Supporting | [I] Informational | 480 | 16 | No: not on page, add |
| nsw e bike certification laws | Supporting | [I] Informational | 320 | 20 | No: not on page, add |
| fast electric bikes | Supporting | [I] Informational | 260 | 14 | No: not on page, add |

#### `/electric-bikes/cheap/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| cheap electric bikes for sale | Main | [T] Transactional | 110 | 19 | Yes (title + H1 + body) |
| cheap electric bikes | Primary | [C] Commercial | 720 | 28 | Yes (title + meta + H1 + H2/H3 + body) |
| cheap electric bikes australia | Primary | [C] Commercial | 390 | 25 | Yes (H2/H3 + body) |
| electric bike cheap | Primary | [C] Commercial | 320 | 16 | Needs Optimization (body) |
| cheapest electric bike australia | Primary | [C] Commercial | 210 | 24 | Yes (H2/H3 + body) |
| cheap e bikes australia | Primary | [C] Commercial | 170 | 15 | Needs Optimization (body) |
| electric cheap bikes | Primary | [C] Commercial | 2,900 | 20 | Needs Optimization (body) |
| e bikes | Secondary | [C] Commercial | 8,100 | 32 | Yes (title + meta + H2/H3 + body) |
| e bikes australia | Secondary | [C] Commercial | 1,600 | 38 | Needs Optimization (body) |
| e bikes melbourne | Secondary | [C] Commercial | 1,000 | 25 | No: not on page, add to an H2/FAQ |
| e bikes perth | Secondary | [C] Commercial | 1,000 | 17 | No: not on page, add to an H2/FAQ |
| best e bikes australia | Secondary | [C] Commercial | 880 | 8 | No: not on page, add to an H2/FAQ |
| cheap electric bikes australia under $500 | Secondary | [C] Commercial | 720 | 23 | No: not on page, add to an H2/FAQ |
| e bikes in australia | Secondary | [C] Commercial | 390 | 30 | No: not on page, add to an H2/FAQ |
| kids e bikes | Supporting | [C] Commercial* | 40 | 0 | Needs Optimization (body) |
| rules for e bikes | Supporting | [I] Informational* | 10 | 0 | Needs Optimization (body) |
| laws for e bikes | Supporting | [I] Informational | 140 | 29 | No: not on page, add |
| legal e bikes nsw | Supporting | [I] Informational | 140 | 14 | No: not on page, add |
| e bikes laws | Supporting | [I] Informational | 110 | 38 | No: not on page, add |

#### `/electric-dirt-bikes/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric dirt bikes for sale | Main | [T] Transactional | 110 | 11 | Yes (title + meta + H1 + body) |
| electric dirt bike | Primary | [C] Commercial | 6,600 | 19 | Needs Optimization (H2/H3 + body); also assigned to /blog/ |
| electric dirt bikes | Primary | [C] Commercial | 1,000 | 19 | Needs Optimization (title + meta + H1 + H2/H3 + body); also assigned to /shop/ |
| electric dirtbike | Primary | [C] Commercial | 1,000 | 23 | Needs Optimization (body) |
| e dirt bike | Primary | [C] Commercial | 1,000 | 11 | Needs Optimization (body) |
| electric dirt bike for adults | Primary | [C] Commercial | 320 | 14 | Yes (H2/H3 + body) |
| electric off road bike | Primary | [C] Commercial | 590 | 11 | Needs Optimization (body) |
| adult electric dirt bike | Secondary | [C] Commercial | 260 | 14 | Needs Optimization (body) |
| off road electric bike | Secondary | [C] Commercial | 210 | 6 | Needs Optimization (body) |
| dirt bike for adults | Secondary | [C] Commercial | 90 | 20 | Yes (H2/H3 + body) |
| off road electric bikes | Secondary | [C] Commercial | 480 | 5 | No: not on page, add to an H2/FAQ |
| e bike off road | Secondary | [C] Commercial | 320 | 6 | No: not on page, add to an H2/FAQ |
| adult electric bike | Secondary | [C] Commercial | 320 | 17 | No: not on page, add to an H2/FAQ |
| electric dirt bike adults | Secondary | [C] Commercial | 210 | 11 | No: not on page, add to an H2/FAQ |
| electric bike for adults australia | Secondary | [C] Commercial | 210 | 30 | No: not on page, add to an H2/FAQ |
| best adult electric dirt bike | Supporting | [C] Commercial* | 20 | 0 | Needs Optimization (body) |
| off road electric dirt bike | Supporting | [C] Commercial* | 20 | 0 | Yes (H2/H3 + body) |
| road electric bike for adults | Supporting | [C] Commercial* | 10 | 0 | Needs Optimization (body) |
| e bike dirt | Supporting | [I] Informational | 1,600 | 12 | No: not on page, add |
| kids e dirt bike | Supporting | [C] Commercial | 40 | 4 | No: not on page, add |
| off road ebike australia | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |

#### `/electric-dirt-bikes/cheap/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| cheap electric dirt bikes | Main | [I] Informational | 260 | 13 | Yes (title + meta + H1 + H2/H3 + body) |
| cheap electric dirt bike | Primary | [C] Commercial | 140 | 14 | Yes (H2/H3 + body) |
| cheap e dirt bike | Primary | [C] Commercial | 140 | 14 | Yes (H2/H3 + body) |
| electric dirt bike cheap | Primary | [C] Commercial | 90 | 13 | Needs Optimization (body) |
| affordable electric dirt bike | Primary | [C] Commercial | 50 | 17 | Yes (H2/H3 + body) |
| dirt bike cheap | Secondary | [C] Commercial | 70 | 23 | Needs Optimization (body) |
| affordable dirt bike | Secondary | [C] Commercial | 140 | 23 | No: not on page, add to an H2/FAQ |
| electric dirt bike australia cheap | Secondary | [C] Commercial | 90 | 10 | No: not on page, add to an H2/FAQ |
| cheap dirt bikes for sale under $1000 | Secondary | [T] Transactional | 70 | 10 | No: not on page, add to an H2/FAQ |
| cheap dirt bikes for sale under 200 | Secondary | [T] Transactional | 70 | 19 | No: not on page, add to an H2/FAQ |
| dirt bikes cheap | Supporting | [C] Commercial* | 30 | 0 | Needs Optimization (body) |
| cheap electric dirt bikes for sale | Supporting | [T] Transactional* | 20 | 0 | Yes (H1 + body) |
| a cheap electric dirt bike | Supporting | [C] Commercial* | 10 | 0 | Needs Optimization (body) |
| cheap electric dirt bikes for kids | Supporting | [C] Commercial* | 10 | 0 | Yes (H2/H3 + body) |
| cheap e bike australia | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| cheap electric dirt bikes for adults | Supporting | [C] Commercial | 30 | 11 | No: not on page, add |
| e dirt bike cheap | Supporting | [C] Commercial | 30 | 9 | No: not on page, add |

#### `/electric-dirt-bikes/kids/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric dirt bike for kids | Main | [C] Commercial | 320 | 18 | Needs Optimization (title + meta + H2/H3 + body) |
| electric dirt bike kids | Primary | [C] Commercial | 110 | 13 | Needs Optimization (body) |
| electric kids dirt bike | Primary | [C] Commercial | 110 | 13 | Yes (H2/H3 + body) |
| electric dirt bikes for kids | Primary | [C] Commercial | 70 | 11 | Yes (H1 + H2/H3 + body) |
| kids electric dirtbike | Primary | [C] Commercial | 70 | 16 | Yes (H2/H3 + body) |
| dirt bikes for kids | Secondary | [C] Commercial | 320 | 21 | Yes (H1 + H2/H3 + body) |
| kids electric bikes | Secondary | [C] Commercial | 170 | 8 | Needs Optimization (body) |
| kids dirt bikes | Secondary | [C] Commercial | 260 | 24 | No: not on page, add to an H2/FAQ |
| electric bikes for kids | Secondary | [C] Commercial | 110 | 9 | No: not on page, add to an H2/FAQ |
| kids electric dirt bikes | Secondary | [C] Commercial | 50 | 12 | No: not on page, add to an H2/FAQ |
| electric kids bikes | Secondary | [C] Commercial | 50 | 9 | No: not on page, add to an H2/FAQ |
| electric kids | Supporting | [C] Commercial* | 30 | 0 | Yes (H2/H3 + body) |
| best electric dirt bike for kids | Supporting | [C] Commercial* | 20 | 0 | Yes (H2/H3 + body) |
| dirt bike kids electric | Supporting | [C] Commercial* | 10 | 0 | Needs Optimization (body) |
| electric bikes kids | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| kid dirt bikes | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |
| dirt bikes kids | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |

#### `/electric-dirt-bikes/sur-ron/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| surron for sale | Main | [T] Transactional | 260 | 14 | Yes (title + meta + H1 + H2/H3 + body) |
| sur ron ebike for sale | Primary | [T] Transactional | 140 | 8 | Yes (H2/H3 + body) |
| surron electric bike for sale | Primary | [T] Transactional | 50 | 9 | Needs Optimization (body) |
| surrons for sale | Primary | [T] Transactional | 110 | 17 | Needs Optimization (body) |
| sur ron shop near me | Secondary | [T] Transactional | 90 | 36 | No: not on page, add to an H2/FAQ |

#### `/electric-fat-tyre-bikes/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| beach cruiser for sale | Main | [T] Transactional | 50 | 13 | Needs Optimization (H2/H3 + body) |
| electric fat bike | Primary | [C] Commercial | 720 | 9 | Yes (meta + H2/H3 + body) |
| best fat tyre electric bike australia | Primary | [C] Commercial | 320 | 18 | Needs Optimization (body) |
| fat bike australia | Primary | [C] Commercial | 210 | 14 | Needs Optimization (body) |
| electric fat tyre bike | Primary | [C] Commercial | 210 | 10 | Needs Optimization (body) |
| fat tyre electric bike australia | Primary | [C] Commercial | 140 | 16 | Yes (H2/H3 + body) |
| e bike cruiser | Primary | [C] Commercial | 390 | 12 | Needs Optimization (body) |
| fat tyre electric bike | Secondary | [C] Commercial | 1,000 | 16 | Yes (H2/H3 + body) |
| fat tyre | Secondary | [C] Commercial | 320 | 6 | Yes (title + meta + H2/H3 + body) |
| electric fat tyre bikes | Secondary | [C] Commercial | 90 | 18 | Yes (H2/H3 + body) |
| fat tyre e bike | Secondary | [C] Commercial | 50 | 15 | Needs Optimization (body) |
| bicyclette fat bike | Secondary | [C] Commercial | 260 | 12 | No: not on page, add to an H2/FAQ |
| electric fat bike australia | Secondary | [C] Commercial | 90 | 14 | No: not on page, add to an H2/FAQ |
| cruiser e bike | Secondary | [C] Commercial | 90 | 6 | No: not on page, add to an H2/FAQ |
| fat bike tyres australia | Secondary | [C] Commercial | 90 | 6 | No: not on page, add to an H2/FAQ |
| fat tyre electric bikes australia | Secondary | [C] Commercial | 70 | 13 | No: not on page, add to an H2/FAQ |
| beach cruiser retro | Supporting | [I] Informational | 70 | 0 | No: not on page, add |
| fat tyre folding electric bike australia | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| fat wheel electric bike australia | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |

#### `/electric-mini-bikes/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric mini bikes for sale | Main | [T] Transactional* | 20 | 0 | Needs Optimization (H2/H3 + body) |
| mini e bike | Primary | [C] Commercial | 1,000 | 15 | Yes (H2/H3 + body) |
| electric mini bike | Primary | [C] Commercial | 590 | 17 | Needs Optimization (body) |
| mini electric bike | Primary | [C] Commercial | 590 | 20 | Yes (meta + H2/H3 + body) |
| mini ebike | Primary | [C] Commercial | 590 | 17 | Yes (H2/H3 + body) |
| electric mini bikes | Secondary | [C] Commercial | 110 | 16 | Yes (H2/H3 + body) |
| mini electric bikes | Secondary | [C] Commercial | 90 | 14 | Yes (title + H1 + H2/H3 + body) |
| electric mini bike motorcycle | Secondary | [C] Commercial | 480 | 15 | No: not on page, add to an H2/FAQ |
| bike electric mini | Secondary | [C] Commercial | 480 | 20 | No: not on page, add to an H2/FAQ |
| electric mini motocross bike | Secondary | [C] Commercial | 110 | 16 | No: not on page, add to an H2/FAQ |
| mini bike electric | Secondary | [C] Commercial | 70 | 13 | No: not on page, add to an H2/FAQ |
| mini e bike australia | Secondary | [C] Commercial | 70 | 0 | No: not on page, add to an H2/FAQ |
| mini electric bikes for sale | Supporting | [T] Transactional* | 20 | 0 | Yes (title + H1 + body) |
| electric mini bike australia | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| mini ebike australia | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| mini ebike for kids | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |

#### `/electric-motocross-bikes/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric motocross bike for sale | Main | [T] Transactional* | 20 | 0 | Needs Optimization (H2/H3 + body) |
| electric motocross motorcycle | Primary | [C] Commercial | 880 | 14 | Needs Optimization (body) |
| electric motocross bike | Primary | [C] Commercial | 720 | 17 | Yes (meta + H1 + H2/H3 + body) |
| e motocross bike | Primary | [C] Commercial | 260 | 17 | Yes (H2/H3 + body) |
| electric mx bike | Primary | [C] Commercial | 90 | 17 | Yes (H2/H3 + body) |
| motocross bike | Secondary | [C] Commercial | 320 | 29 | Yes (meta + H1 + H2/H3 + body) |
| electric motocross bicycle | Secondary | [C] Commercial | 260 | 27 | No: not on page, add to an H2/FAQ |
| motocross bike for sale | Supporting | [T] Transactional* | 30 | 0 | Yes (H2/H3 + body) |
| electric motocross | Supporting | [C] Commercial* | 20 | 0 | Yes (title + meta + H1 + H2/H3 + body) |
| motocross electric | Supporting | [C] Commercial* | 20 | 0 | Needs Optimization (body) |
| electric ktm motocross bike | Supporting | [I] Informational | 170 | 12 | No: not on page, add |
| childs electric motocross bike | Supporting | [C] Commercial | 30 | 7 | No: not on page, add |
| motocross bike electric | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |

#### `/electric-motor-bikes/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric motorbikes for sale | Main | [T] Transactional | 210 | 17 | Needs Optimization (title + H2/H3 + body) |
| electric motorbike | Primary | [C] Commercial | 6,600 | 20 | Needs Optimization (body) |
| electric motorbike australia | Primary | [C] Commercial | 1,300 | 26 | Needs Optimization (body) |
| electric motorcycle | Primary | [C] Commercial | 1,900 | 22 | Needs Optimization (body); also assigned to /electric-motorcycles/ |
| electric motorcycle australia | Primary | [C] Commercial | 1,900 | 26 | Needs Optimization (body); also assigned to /electric-motorcycles/ |
| electric motor bike | Primary | [C] Commercial | 1,000 | 19 | Yes (H2/H3 + body) |
| electric motor bikes | Primary | [C] Commercial | 1,000 | 23 | Yes (H2/H3 + body) |
| electric motorbikes | Secondary | [C] Commercial | 1,000 | 32 | Yes (title + meta + H1 + H2/H3 + body) |
| kids electric motorbikes | Secondary | [C] Commercial | 170 | 17 | Needs Optimization (body) |
| electric motor scooter australia | Secondary | [C] Commercial | 720 | 31 | No: not on page, add to an H2/FAQ |
| childrens electric motor bike | Secondary | [C] Commercial | 590 | 15 | No: not on page, add to an H2/FAQ |
| electric motorbikes australia | Secondary | [C] Commercial | 480 | 26 | No: not on page, add to an H2/FAQ |
| australia electric motorcycle | Secondary | [C] Commercial | 390 | 17 | No: not on page, add to an H2/FAQ |
| electric motor scooters australia | Secondary | [C] Commercial | 390 | 35 | No: not on page, add to an H2/FAQ |
| australian electric motorcycle | Supporting | [I] Informational | 1,300 | 17 | Needs Optimization (body) |
| electric enduro motorcycle | Supporting | [C] Commercial* | 30 | 0 | Needs Optimization (body) |
| electric motorbikes for sale in australia | Supporting | [T] Transactional* | 20 | 0 | Yes (H2/H3 + body) |
| top electric motor bikes | Supporting | [C] Commercial* | 10 | 0 | Needs Optimization (body) |
| electric motor ebike | Supporting | [I] Informational | 170 | 25 | No: not on page, add |
| electric sportbike motorcycle | Supporting | [I] Informational | 70 | 0 | No: not on page, add |
| offroad electric motorbike | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |

#### `/electric-motor-bikes/best-electric-bikes-australia/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| buy electric bike australia | Main | [T] Transactional | 90 | 33 | Needs Optimization (body) |
| best electric bike australia | Primary | [C] Commercial | 1,300 | 12 | Yes (H2/H3 + body) |
| best electric bikes australia | Primary | [C] Commercial | 590 | 9 | Yes (title + H1 + H2/H3 + body) |

#### `/electric-motor-bikes/brisbane/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric bikes for sale brisbane | Main | [T] Transactional | 90 | 21 | Needs Optimization (title + H2/H3 + body) |
| e bikes brisbane | Primary | [C] Commercial | 1,300 | 37 | Yes (title + H1 + H2/H3 + body) |
| electric motorbike brisbane | Primary | [C] Commercial | 90 | 16 | Needs Optimization (body) |
| electric scooter brisbane | Secondary | [C] Commercial | 880 | 18 | No: not on page, add to an H2/FAQ |
| used electric bikes brisbane | Secondary | [C] Commercial | 90 | 16 | No: not on page, add to an H2/FAQ |
| e bikes for sale brisbane | Secondary | [T] Transactional | 70 | 8 | No: not on page, add to an H2/FAQ |
| electric bikes brisbane milton | Secondary | [T] Transactional | 50 | 18 | No: not on page, add to an H2/FAQ |
| electric bicycle brisbane | Supporting | [N] Navigational | 590 | 32 | No: not on page, add |
| e scooter shops brisbane | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| electric bicycles brisbane | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |

#### `/electric-motor-bikes/commuter-mopeds/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| moped prices | Main | [T] Transactional | 70 | 18 | Needs Optimization (body) |
| electric moped australia | Primary | [C] Commercial | 1,000 | 31 | Yes (title + H1 + H2/H3 + body) |
| electric motorcycle moped | Primary | [C] Commercial | 1,000 | 17 | Needs Optimization (body) |
| electric moped bike | Primary | [C] Commercial | 390 | 12 | Needs Optimization (body) |
| electric mopeds australia | Primary | [C] Commercial | 110 | 36 | Yes (H2/H3 + body) |
| electric moped bicycle | Secondary | [C] Commercial | 140 | 6 | No: not on page, add to an H2/FAQ |
| best electric moped australia | Secondary | [C] Commercial | 110 | 16 | No: not on page, add to an H2/FAQ |
| cheap electric mopeds | Secondary | [C] Commercial | 90 | 0 | No: not on page, add to an H2/FAQ |
| electric mopeds cheap | Secondary | [C] Commercial | 90 | 9 | No: not on page, add to an H2/FAQ |
| electric moped cycle | Secondary | [C] Commercial | 70 | 14 | No: not on page, add to an H2/FAQ |
| electric moped road legal | Supporting | [I] Informational* | 40 | 0 | Yes (H2/H3 + body) |
| motorcycle scooter moped | Supporting | [I] Informational | 140 | 17 | No: not on page, add |
| buy moped | Supporting | [T] Transactional* | 40 | 0 | No: not on page, add |
| electric moped law | Supporting | [I] Informational* | 40 | 0 | No: not on page, add |

#### `/electric-motor-bikes/e-bike-laws-australia/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric bike laws australia | Main | [I] Informational | 210 | 23 | Needs Optimization (title + H2/H3 + body); also assigned to /blog/, /blog/, /faq/ |
| electric bike laws australia | Primary | [I] Informational | 210 | 23 | Needs Optimization (title + H2/H3 + body); also assigned to /blog/, /blog/, /faq/ |
| electric bike laws qld | Primary | [I] Informational | 880 | 28 | Needs Optimization (body) |
| electric bike regulations nsw | Primary | [I] Informational | 480 | 22 | Needs Optimization (body) |
| electric bike regulations | Supporting | [I] Informational | 70 | 28 | Needs Optimization (body) |
| e bike regulations nsw | Supporting | [I] Informational | 260 | 22 | No: not on page, add |
| legal electric bike nsw | Supporting | [I] Informational | 70 | 15 | No: not on page, add |
| electric bike legal nsw | Supporting | [I] Informational | 50 | 31 | No: not on page, add |

#### `/electric-motor-bikes/kids/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| kids dirt bike for sale | Main | [T] Transactional* | 20 | 0 | Needs Optimization (body) |
| kids electric bike | Primary | [C] Commercial | 4,400 | 16 | Yes (title + H2/H3 + body) |
| childs electric motorcycle | Primary | [C] Commercial | 2,400 | 15 | Yes (H2/H3 + body) |
| childrens electric dirt bike | Primary | [C] Commercial | 1,300 | 14 | Yes (title + body) |
| kids electric motorbike | Primary | [C] Commercial | 1,300 | 17 | Yes (H2/H3 + body) |
| childrens electric motorbike | Primary | [C] Commercial | 1,300 | 20 | Needs Optimization (body) |
| children electric bike | Primary | [C] Commercial | 1,000 | 13 | Needs Optimization (body) |
| kids electric dirt bike | Primary | [C] Commercial | 590 | 15 | Yes (H2/H3 + body) |
| childrens dirt bike | Secondary | [C] Commercial | 1,000 | 24 | No: not on page, add to an H2/FAQ |
| dirt bike for kids | Secondary | [C] Commercial | 720 | 22 | No: not on page, add to an H2/FAQ |
| electric motorbike kids | Secondary | [C] Commercial | 590 | 17 | No: not on page, add to an H2/FAQ |
| electric bike kids | Secondary | [C] Commercial | 590 | 12 | No: not on page, add to an H2/FAQ |
| electric kids bike | Secondary | [C] Commercial | 480 | 16 | No: not on page, add to an H2/FAQ |
| childrens electric | Supporting | [C] Commercial* | 20 | 0 | Yes (title + meta + H1 + body) |
| kids petrol dirt bike | Supporting | [C] Commercial | 40 | 0 | No: not on page, add |
| childrens electric mountain bike | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| kids e motorbike | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |

#### `/electric-motor-bikes/melbourne/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric bikes for sale melbourne | Main | [T] Transactional | 170 | 13 | Needs Optimization (title + H2/H3 + body) |
| electric bikes melbourne | Primary | [C] Commercial | 1,900 | 24 | Yes (title + H1 + H2/H3 + body) |
| electric moped melbourne | Primary | [C] Commercial | 1,300 | 23 | Yes (H2/H3 + body) |
| electric motorbike melbourne | Primary | [C] Commercial | 50 | 30 | Needs Optimization (body) |
| melbourne electric bikes | Secondary | [C] Commercial | 880 | 26 | Yes (title + body) |
| electric scooter melbourne | Secondary | [C] Commercial | 1,300 | 28 | No: not on page, add to an H2/FAQ |
| electric bicycle melbourne | Secondary | [C] Commercial | 1,000 | 26 | No: not on page, add to an H2/FAQ |
| electric bikes melbourne australia | Secondary | [C] Commercial | 720 | 55 | No: not on page, add to an H2/FAQ |
| melbourne electric bicycles | Secondary | [C] Commercial | 590 | 28 | No: not on page, add to an H2/FAQ |
| electric bikes melbourne victoria | Secondary | [C] Commercial | 390 | 38 | No: not on page, add to an H2/FAQ |
| electric bicycle shop melbourne | Supporting | [T] Transactional* | 40 | 0 | No: not on page, add |
| hybrid bikes melbourne | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| electric scooters for sale melbourne | Supporting | [T] Transactional* | 30 | 0 | No: not on page, add |

#### `/electric-motor-bikes/perth/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric bikes for sale perth | Main | [T] Transactional | 140 | 12 | Needs Optimization (title + body) |
| electric bikes perth | Primary | [C] Commercial | 1,900 | 23 | Yes (title + H1 + H2/H3 + body) |
| electric moped perth | Primary | [C] Commercial | 590 | 25 | Needs Optimization (body) |
| electric motorbike perth | Primary | [C] Commercial | 170 | 14 | Needs Optimization (body) |
| electric bicycle perth | Secondary | [C] Commercial | 720 | 16 | Yes (H2/H3 + body) |
| quad bikes perth | Secondary | [C] Commercial | 480 | 20 | No: not on page, add to an H2/FAQ |
| electric bikes perth australia | Secondary | [C] Commercial | 390 | 16 | No: not on page, add to an H2/FAQ |
| best electric bikes perth | Secondary | [C] Commercial | 110 | 13 | No: not on page, add to an H2/FAQ |
| electric scooters for sale perth | Secondary | [T] Transactional | 70 | 9 | No: not on page, add to an H2/FAQ |
| chinese quad bikes perth | Supporting | [C] Commercial* | 20 | 0 | No: not on page, add |
| farm quad bikes perth | Supporting | [C] Commercial* | 20 | 0 | No: not on page, add |
| perth pit bikes review | Supporting | [I] Informational* | 20 | 0 | No: not on page, add |

#### `/electric-motor-bikes/rtr-ebike/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| rtr ebike for sale | Main | [T] Transactional* | n/a | n/a | Needs Optimization (not in bank; title + body) |
| rtr e bike | Primary | [C] Commercial | 1,600 | 7 | Yes (title + meta + H2/H3 + body) |
| rtr ebike | Primary | [C] Commercial | 880 | 7 | Yes (title + meta + H1 + H2/H3 + body) |
| rtr electric bike | Primary | [C] Commercial | 320 | 17 | Yes (H2/H3 + body) |
| rtr bike | Primary | [C] Commercial | 320 | 5 | Needs Optimization (body) |
| rtr dirt bike for sale | Supporting | [T] Transactional* | 10 | 0 | No: not on page, add |
| rtr dirt bike price | Supporting | [T] Transactional* | 10 | 0 | No: not on page, add |

#### `/electric-motor-bikes/sydney/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| e bikes for sale sydney | Main | [T] Transactional | 110 | 19 | Needs Optimization (title + H2/H3 + body) |
| ebike sydney | Primary | [C] Commercial | 1,600 | 26 | Yes (H2/H3 + body) |
| electric bikes sydney | Primary | [C] Commercial | 880 | 32 | Yes (title + H1 + H2/H3 + body) |
| ebikes sydney | Primary | [C] Commercial | 480 | 39 | Needs Optimization (body) |
| e bikes sydney | Primary | [C] Commercial | 390 | 32 | Needs Optimization (body) |
| ebikes | Secondary | [C] Commercial | 8,100 | 45 | Yes (H1 + body) |
| ebikes australia | Secondary | [C] Commercial | 1,000 | 29 | No: not on page, add to an H2/FAQ |
| best ebikes australia | Secondary | [C] Commercial | 480 | 8 | No: not on page, add to an H2/FAQ |
| sydney ebikes | Secondary | [C] Commercial | 320 | 53 | No: not on page, add to an H2/FAQ |
| electric cycles sydney | Secondary | [C] Commercial | 210 | 50 | No: not on page, add to an H2/FAQ |
| electric bikes for sale sydney | Secondary | [T] Transactional | 70 | 28 | No: not on page, add to an H2/FAQ |
| ebike 101 sydney | Supporting | [I] Informational | 260 | 14 | No: not on page, add |
| best electric bikes sydney | Supporting | [C] Commercial* | 40 | 0 | No: not on page, add |
| australia ebikes | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |

#### `/electric-motorcycles/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric motorcycle for sale | Main | [T] Transactional | 260 | 20 | Needs Optimization (H2/H3 + body) |
| electric motorcycle | Primary | [C] Commercial | 1,900 | 22 | Needs Optimization (meta + H2/H3 + body); also assigned to /electric-motor-bikes/ |
| electric motorcycle australia | Primary | [C] Commercial | 1,900 | 26 | Needs Optimization (body); also assigned to /electric-motor-bikes/ |
| electric motorcycles australia | Primary | [C] Commercial | 590 | 37 | Yes (H2/H3 + body) |
| electric motorcycles | Primary | [C] Commercial | 720 | 27 | Yes (title + H1 + H2/H3 + body) |
| e motorcycle | Primary | [C] Commercial | 880 | 24 | Needs Optimization (body) |
| electric motorcycles and scooters | Secondary | [C] Commercial | 480 | 18 | Needs Optimization (body) |
| electric motorcycles for sale | Secondary | [T] Transactional | 90 | 23 | Yes (title + H1 + body) |
| best electric motorcycles | Secondary | [C] Commercial | 70 | 22 | Needs Optimization (body) |
| motorcycle e | Secondary | [C] Commercial | 1,000 | 28 | No: not on page, add to an H2/FAQ |
| children s electric motorcycles | Secondary | [C] Commercial | 260 | 18 | No: not on page, add to an H2/FAQ |
| e motorcycle australia | Secondary | [C] Commercial | 210 | 33 | No: not on page, add to an H2/FAQ |
| electric motorcycles for adults | Secondary | [C] Commercial | 170 | 17 | No: not on page, add to an H2/FAQ |
| australian electric motorcycles | Supporting | [C] Commercial* | 20 | 0 | Yes (H2/H3 + body) |
| electric motorcycles for sale in australia | Supporting | [T] Transactional* | 20 | 0 | Yes (H1 + body) |
| electric motorcycles in australia | Supporting | [C] Commercial* | 20 | 0 | Needs Optimization (body) |
| are electric motorcycles | Supporting | [C] Commercial* | 10 | 0 | Yes (H2/H3 + body) |
| good electric motorcycles | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |
| production electric motorcycles | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |
| are electric motorcycles worth it | Supporting | [C] Commercial* | 20 | 0 | No: not on page, add |

#### `/electric-pit-bikes/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| electric pit bike for sale | Main | [T] Transactional* | 20 | 0 | Needs Optimization (title + meta + body) |
| electric pit bike | Primary | [C] Commercial | 720 | 16 | Yes (title + meta + H2/H3 + body) |
| electric pit bikes | Primary | [C] Commercial | 110 | 17 | Yes (H1 + H2/H3 + body) |
| e pit bike | Primary | [C] Commercial | 110 | 13 | Yes (H2/H3 + body) |
| fast electric pit bike | Primary | [C] Commercial | 110 | 16 | Yes (H2/H3 + body) |
| electric pit bike australia | Primary | [C] Commercial | 90 | 19 | Needs Optimization (body) |
| pit bikes australia | Secondary | [C] Commercial | 210 | 24 | Yes (H2/H3 + body) |
| pit bike australia | Secondary | [C] Commercial | 110 | 30 | Needs Optimization (body) |
| pit bikes au | Secondary | [C] Commercial | 170 | 19 | No: not on page, add to an H2/FAQ |
| fast bike electric | Secondary | [C] Commercial | 90 | 0 | No: not on page, add to an H2/FAQ |
| pit bike electric | Supporting | [C] Commercial* | 30 | 0 | Needs Optimization (body) |
| electric pit bikes for sale | Supporting | [T] Transactional* | 10 | 0 | Yes (H1 + body) |
| pit bikes electric | Supporting | [C] Commercial* | 10 | 0 | Needs Optimization (body) |
| electric pit bike for adults | Supporting | [C] Commercial | 40 | 26 | No: not on page, add |
| eletric pit bike | Supporting | [C] Commercial | 40 | 9 | No: not on page, add |
| fast electric bike australia | Supporting | [C] Commercial* | 30 | 0 | No: not on page, add |

#### `/faq/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| e ride pro | Main | [N] Navigational | 2,900 | 17 | Needs Optimization (title + meta + H2/H3 + body); also assigned to /brands/e-ride-pro/ |
| brisbane electric bikes | Primary | [N] Navigational | 480 | 28 | No (not on page) |
| electric bikes in brisbane | Primary | [N] Navigational | 210 | 32 | No (not on page) |
| electric bike laws australia | Primary | [I] Informational | 210 | 23 | No (not on page); also assigned to /blog/, /blog/, /electric-motor-bikes/e-bike-laws-australia/, /electric-motor-bikes/e-bike-laws-australia/ |

#### `/shop/`

| Keyword / Phrase | Tier | Intent | SV | KD | Current Content Alignment |
|---|---|---|---:|---:|---|
| buy electric dirt bike | Main | [T] Transactional | 40 | 17 | Needs Optimization (body) |
| electric dirt bikes | Primary | [C] Commercial | 1,000 | 19 | Needs Optimization (title + meta + H1 + H2/H3 + body); also assigned to /electric-dirt-bikes/ |
| electric dirt bikes australia | Primary | [C] Commercial | 320 | 37 | Needs Optimization (body); also assigned to / |

---

## 4. Cannibalisation & Misalignment Register

| # | Conflict | Pages | Keywords involved | Severity | Recommended fix (no URL changes) |
|---|---|---|---|---|---|
| 1 | Same H1 + near-identical titles | `/shop/`, `/electric-dirt-bikes/`, `/` | electric dirt bikes for sale (110), electric dirt bikes (1,000), electric dirt bike for sale (170) | High | Give `/shop/` a utility H1 ("Shop All Electric Dirt Bikes, E-Bikes & Parts") and drop "electric dirt bikes" as its primary; leave "electric dirt bikes" with `/electric-dirt-bikes/` only. |
| 2 | Shared primaries | `/electric-motor-bikes/`, `/electric-motorcycles/` | electric motorcycle (1,900), electric motorcycle australia (1,900) | High | Make `/electric-motorcycles/` the only owner of the motorcycle family (add H2s for each) and keep `/electric-motor-bikes/` on motorbike / motor bike / road-legal terms. |
| 3 | Kids split | `/electric-motor-bikes/kids/`, `/electric-dirt-bikes/kids/` | kids electric dirt bike (590), electric dirt bike kids (110), electric kids dirt bike (110), kids electric dirtbike (70) | High | Motor-bikes/kids owns "kids electric bike / motorbike / childs motorcycle"; dirt-bikes/kids owns every "dirt bike" kids phrase. Remove "kids electric dirt bike" from the first page's primary list. |
| 4 | Brand term owned by FAQ | `/faq/` vs `/brands/e-ride-pro/` | e ride pro (2,900, [N]), e ride pro australia (170) | High | Register `/brands/e-ride-pro/` in `seo.ts` with main "e ride pro australia" + primary "e ride pro"; remove "e ride pro" from the FAQ main and the FAQ title. |
| 5 | Triple-assigned informational main | `/electric-motor-bikes/e-bike-laws-australia/`, `/blog/`, `/faq/` | electric bike laws australia (210) | Medium | Only the laws page owns it. `/blog/` main becomes "electric dirt bike blog australia" (it is already in the title); FAQ keeps Navigational delivery/brand questions. |
| 6 | Blog index primary is a category keyword | `/blog/` vs `/electric-dirt-bikes/` | electric dirt bike (6,600) | Medium | Remove from `/blog/` primaries; it should rank for guides/reviews, not the head term. |
| 7 | Blog posts against category pages | 20 posts + `/electric-dirt-bikes/` | electric dirt bike (6,600) | Medium | Posts keep long-tail primaries; first link in each post to the owner category with the exact anchor. |
| 8 | Brand duplication | `/brands/` vs `/brands/e-ride-pro/` | e ride pro australia (170) | Low | `/brands/` primary should be the hub terms only (electric bike brands australia); link to the brand page for E Ride Pro. |
| 9 | Tag pages competing with categories | 31 `/blog/tag/*` pages | e bike battery (1,000), electric bikes for sale australia, best electric motorcycle, e bike cost (390) | Medium | Add `noindex,follow` to tags whose keyword matches a category/product keyword, or fold the tag into the category page; keep the 26 purely informational tags indexed. |
| 10 | Same family across 7+ blog posts | kids (9), batteries (12), laws (7), cost/price (13), "best" (7) | kids/childs/childrens dirt bike, e bike battery, laws qld/nsw, e bike cost | Medium | Choose one pillar post per family; point the others to it and differentiate their primaries (age, state, battery voltage). |
| 11 | Cheap pages with different intent labels | `/electric-dirt-bikes/cheap/` | cheap electric dirt bikes (260, [I]) | Low | Main is labelled Informational by SEMrush. Add the Transactional variants from the bank (cheap dirt bikes for sale under $1000, 70) as an H2 to match the money intent. |

---

## 5. Visual Funnel & Intent Preview

### 5.1 Bank demand vs on-site coverage (keywords with 50+ searches)

```
AWARENESS      (Informational + Navigational) - 121 keywords, 26,600 combined monthly volume
  in a title/H1/H2/H3 : ████                             16 (13%) · 10,250 vol
  body copy only      : █████                            22 (18%) · 4,230 vol
  not on site         : █████████████████████            83 (69%) · 12,120 vol

CONSIDERATION  (Commercial) - 815 keywords, 342,090 combined monthly volume
  in a title/H1/H2/H3 : █████████                        241 (30%) · 223,670 vol
  body copy only      : █████                            146 (18%) · 38,380 vol
  not on site         : ████████████████                 428 (53%) · 80,040 vol

CONVERSION     (Transactional) - 99 keywords, 20,420 combined monthly volume
  in a title/H1/H2/H3 : ███████████                      36 (36%) · 8,700 vol
  body copy only      : ██████                           19 (19%) · 4,450 vol
  not on site         : █████████████                    44 (44%) · 7,270 vol

```

*(Volumes are the sum of each keyword's own monthly volume; related keywords overlap, so treat as relative size, not unique searches. 52 bank keywords have no intent label and are excluded.)*

### 5.2 Journey map: which pages serve which stage

```
AWARENESS ─────────────────►  CONSIDERATION ───────────────►  CONVERSION
Informational / Navigational     Commercial                      Transactional

/blog/  102 posts + 57 tags      /electric-dirt-bikes/           /shop/<product>/  ×153
/faq/   (23 Q&A headings)          /electric-bikes/ (+cheap)       /shop/  (main: buy electric dirt bike)
/e-bike-laws-australia/ [I]      /electric-motor-bikes/          /electric-dirt-bikes/sur-ron/ [T ×3]
/best-electric-bikes-aus/ [T/C]  /electric-motorcycles/          city pages: "…for sale <city>" [T]
"how fast…", "what is…",         kids / mini / pit / fat / motocross   cart + checkout
"are … legal", voltage guides    /brands/  /brands/e-ride-pro/   

Gap: scooters, Gold Coast, "dirt bicycle", misspellings, "price"/"cost" Transactional H2s on category pages
```

### 5.3 Main keyword intent across the 30 mapped pages

| Intent of main keyword | Pages | Comment |
|---|---:|---|
| [T] Transactional | 16 | Correct for category/city pages |
| [C] Commercial | 4 | `/brands/`, `/brands/e-ride-pro/`, `/electric-bike-batteries/`, `/electric-dirt-bikes/kids/`: acceptable, but add a Transactional phrase to the title |
| [I] Informational | 3 | Laws page (correct), `/blog/` (duplicate), `/electric-dirt-bikes/cheap/` (money page: switch to a T main) |
| [N] Navigational | 1 | `/faq/` main "e ride pro" (wrong owner, see register #4) |
| Unlabelled (inferred, ≤20 searches) | 6 | kids, mini, pit, balance, motocross, rtr: the real driver is the primary, so make sure it sits in the title |

---

## 6. Priority Actions (ranked by search volume at stake)

| Priority | Action | Volume at stake | Effort |
|---|---|---:|---|
| 1 | Put "electric motorbike" (6,600), "electric motorcycle" (1,900), "electric motorbike australia" (1,300) in H2s on `/electric-motor-bikes/`; today they are body-only | 9,800 | Low |
| 2 | Home page: add "electric dirt bikes australia" (320), "electric dirtbike australia" (90) and the T phrases below as H2/H3; they are not on the page | 410 + T | Low |
| 3 | Resolve the three assignment clashes (#1-#3 in the register) | ~8,650 | Low |
| 4 | Add an H2 for each missing Secondary on `/electric-bikes/` (e.g. "low cost electric bike" 2,900, "electric bike melbourne" 1,000, "e bike battery" 1,000 linked to the battery page) | ~11,000 | Medium |
| 5 | Add Gold Coast city page ("electric bicycle gold coast" 1,600) and decide on an electric scooter category (17 keywords, 6,230) | 7,830 | Medium |
| 6 | Add the Transactional gaps: "dirt bicycle for sale" (1,900), "moto dirt bikes for sale" (1,900), "motorcycle dirt bike for sale" (1,600) to `/electric-dirt-bikes/` FAQ/H2 or a buying guide (check they fit electric stock) | 5,400 | Medium |
| 7 | Shorten titles over 60 characters (235 of 347 sitewide; start with the 34 category pages) | n/a (CTR) | Low |
| 8 | Consolidate the 7 near-identical blog families to one pillar each; noindex 31 tag pages that mirror category keywords | n/a | Medium |
| 9 | Expand 29 posts under 600 words and add keyword H2s | n/a | High |

## 7. Method and Limits

- **Bank:** the 10 SEMrush AU "all keywords" CSVs (3 from 25 Sep 2026 in `electric dirt bikes/`, 7 from 7 Oct 2026 in `new keywords e bikes/`), merged by keyword with the highest volume kept, hyphens normalised ("e-bike" = "e bike"), and degenerate repeated-word phrases dropped.
- **Crawl:** every URL in the live `sitemap.xml` on 12 Oct 2026; title, meta description, H1, H2/H3 and visible body text of `<main>`. A keyword counts as present only as an exact phrase (word-order variants such as "electric bikes dirt" are listed as missing even if the words appear).
- **Assignments** (Main/Primary) are read from `src/config/seo.ts`; `/brands/e-ride-pro/` has no entry there, so its keywords were set manually.
- **Secondary/Supporting** are not assigned in code: they are the bank keywords whose words overlap the page's assigned phrases by 50% (secondary) or 40% (supporting).
- **Not in bank (no volume quoted):** "rtr ebike for sale", "lithium bike battery". Brand/model terms (Talaria, Stark Varg, Segway, Super73, Apollo, Ampd, helmets, controllers) have no usable volume in the CSVs.
- **Off-core demand deliberately not recommended:** petrol bike terms (125cc, 2 stroke, "vin search dirt bike": 8 keywords, 3,000 vol), quad/ATV/UTV (630 vol) and non-English phrases.