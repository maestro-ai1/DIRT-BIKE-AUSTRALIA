# Indexing queue (Google Search Console + Bing/IndexNow)

Rule (owner, 2026-10-27): at the end of EVERY session, request indexing for the next priority pages here (about 6 to 8 per day, GSC quota), then run `npm run indexnow` (Bing + other engines) after every deploy. Update this file: tick done URLs with the date.

Method: GSC Overview -> search icon -> paste URL -> Enter -> wait ~12 s -> if "URL is not on Google" click REQUEST INDEXING (wait ~60 s for the Indexing requested dialog). If "URL is on Google" tick it as already indexed. Always make sure the tab is the electricdirtbikeaustralia.com.au property (resource_id=https%3A%2F%2Felectricdirtbikeaustralia.com.au%2F).

## Done
- [x] 2026-10-27 /about/, /electric-motor-bikes/, /electric-motor-bikes/melbourne/, /electric-motor-bikes/perth/, /shipping-and-delivery/, /warranty-and-service/ (requested)
- [x] already on Google 2026-10-27: /accessories/, /blog/, /electric-motor-bikes/kids/, Light Bee X, KTM SX-E 5, Stark Varg EX, Talaria Sting R MX4, all round-2 blog posts checked

- [x] 2026-10-28 requested (all "URL is not on Google" -> Indexing requested): /blog/electric-trail-bike-australia-guide/, road-legal-electric-bike-australia-guide, electric-motorbike-for-7-year-old-australia, e-bikes-for-10-year-olds-australia, electric-scrambler-bike-australia, high-performance-e-bikes-australia, electric-motorbike-for-5-year-old-australia, battery-for-motorbike-electric-australia

- [x] 2026-10-29 requested (Indexing requested): /blog/beach-cruising-electric-bikes-australia/, /blog/electric-motorbike-for-3-year-old-australia/, /shop/e-ride-pro-sr/, /shop/segway-x260-dirt-ebike/, /shop/razor-mx650-electric-kids/, /shop/sur-ron-ultra-bee/, /shop/talaria-xxx-black-edition/, /shop/rfn-ares-rally-pro/
- [x] 2026-10-29 recrawl requested (rewritten in place): /blog/electric-pit-bike-australia-guide/, /blog/electric-enduro-bike-australia-review/. 35 thin posts merged by 308 (IndexNow sent). Quota used: 10 today.
- Product pages re-optimised 2026-10-29 (10 clickable tags, 5 secondaries); IndexNow sent (375 URLs).

## Queue (in priority order)
- [ ] /shop/talaria-dragon-enduro/
- [ ] /shop/edba-moto-50-kids-beginner/
- [ ] /shop/10a-compact-touring-charger/
- [ ] /shop/15a-fast-charger-60v-72v/
- [ ] /shop/220mm-floating-rotor-kit/
- [ ] /shop/60v-53ah-high-capacity-pack/
- [ ] /shop/84v-45ah-extreme-voltage-battery/
- [ ] /shop/ace-adventure-fat-tyre-electric-bike/
- [ ] /shop/ace-mini-electric-fat-bike/
- [ ] /shop/ace-pro-dual-suspension-fat-tyre-electric-bike/
- [ ] /shop/ace-x-demon-dual-motor-fat-electric-bike/
- [ ] /shop/ace-x-mini-pro-electric-bike/
- [ ] /shop/acerbis-x-factory-handguards/
- [ ] /shop/anderson-to-qs8-heavy-duty-adapter/
- [ ] /shop/arctic-leopard-e-xe-880/
- [ ] /shop/ares-rally-endurance-road-electric-dirt-bike/
- [ ] /shop/baja-designs-squadron-headlight/
- [ ] /shop/bonnell-775-mx-electric-dirt-bike/
- [ ] /shop/caofen-f80-dual-sport/
- [ ] /shop/chubbie-s-v3-electric-beach-cruiser/
- [ ] /shop/cnc-wide-gripper-footpegs/
- [ ] /shop/dhz-16-400w-electric-balance-bike/
- [ ] /shop/did-420-nz3-gold-chain/
- [ ] /shop/dragster-60-electric-pit-bike-3300w-60v/
- [ ] /shop/dunlop-geomax-dirt-tyre-set/
- [ ] /shop/e-ride-pro-se-17-17-electric-dirt-bike/
- [ ] /shop/etm-rtr-sport-2026-electric-pit-bike/
- [ ] /shop/evo-racing-16-electric-bike/
- [ ] /shop/evo-racing-18-kids-electric-bike/
- [ ] /shop/evo-racing-20-electric-bike/
- [ ] /shop/ext-ferro-36-inverted-fork/
- [ ] /shop/fastace-alx13rc-inverted-fork/
- [ ] /shop/fatboy-the-bagus-v3-en15194-certified-ebike/
- [ ] /shop/fatboy-the-bagus-v3-ultra-e-bike/
- [ ] /shop/fatboy-the-harlem-v3-ultra-ebike-52v-20ah-battery/
- [ ] /shop/fatboy-the-scrambler-v2-e-bike-52v-20ah/
- [ ] /shop/fatboy-the-scrambler-v3-ultra-electric-bike-52v-20ah/
- [ ] /shop/flight-risk-fr101-ages-4-7-yrs/
- [ ] /shop/flight-risk-fr666/
- [ ] /shop/formula-cura-4-brake-kit/
- [ ] /shop/heavy-duty-folding-loading-ramp/
- [ ] /shop/kke-18-21-enduro-wheel-kit/
- [ ] /shop/kuberg-ranger-multi-purpose/
- [ ] /shop/lil-rippa-16-kids-fat-electric-bike/
- [ ] /shop/magura-mt7-pro-brake-set/
- [ ] /shop/maxxis-maxxcross-tyre-combo/
- [ ] /shop/oset-20-0-racing-junior/
- [ ] /shop/pro-taper-pillow-top-grips/
- [ ] /shop/qs8-s-armoured-connector-kit/
- [ ] /shop/rfn-warrior-youth-sx-e5-electric-dirt-bike/
- [ ] /shop/riptide-electric-beach-cruiser-bike/
- [ ] /shop/riptide-s-electric-beach-cruiser-bike/
- [ ] /shop/ronster-rides-electro-co-the-rizzler-60v-5000w/
- [ ] /shop/rtr-ebike-s-classic/
- [ ] /shop/sm-pro-platinum-16-19-wheelset/
- [ ] /shop/stealth-f-37-trail-fighter/
- [ ] /shop/stealth-h-52-competition/
- [ ] /shop/super-soco-cpx-electric-moped/
- [ ] /shop/super73-rx-mojave/
- [ ] /shop/super73-s2-adventure/
- [ ] /shop/sur-ron-oem-60v-40ah-replacement/
- [ ] /shop/sur-ron-storm-bee-mx/
- [ ] /shop/talaria-oem-60v-45ah-replacement/
- [ ] /shop/the-original-stubbie-s-electric-bike/
- [ ] /shop/torp-tc1000-controller/
- [ ] /shop/torrot-motocross-two-junior/
- [ ] /shop/velimotor-vmx12-motocross/
- [ ] /shop/vmoto-soco-tc-max-electric/
- [ ] /shop/warp9-54t-billet-sprocket/
- [ ] /shop/warp9-direct-mount-riser/
- [ ] /blog/e-ride-pro-australia-buyers-guide/
- [ ] /blog/electric-motorcycle-price-australia-what-you-get/
- [ ] /blog/oset-bikes-australia-review-junior-electric/

## Low priority (tag pages, request last)
- [ ] /blog/tag/adult-electric-dirt-bike/
- [ ] /blog/tag/best-electric-dirt-bike/
- [ ] /blog/tag/cheap-electric-motorbikes/
- [ ] /blog/tag/cycle-fat-tyre/
- [ ] /blog/tag/electric-minibikes/
- [ ] /blog/tag/electric-motorcycle-australia-price/
- [ ] /blog/tag/electric-trail-bike/
- [ ] /blog/tag/emotorbike/
- [ ] /blog/tag/fastest-e-bike-australia/
- [ ] /blog/tag/ktm-electric-dirt-bike/
- [ ] /blog/tag/lithium-bike-battery/
- [ ] /blog/tag/miniature-electric-bike/

## New posts to add after publishing (check each in GSC, request if not on Google)
- (round 3 posts are at the top of the Queue; add future posts at the top)
