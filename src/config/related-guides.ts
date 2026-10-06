// Which blog guides are linked from which category page (path -> blog slugs). Titles and excerpts come from POSTS, so they never drift from the post itself.
export const RELATED_GUIDES: Record<string, string[]> = {
  '/electric-dirt-bikes/': ['adult-electric-dirt-bike-australia-best-models', 'high-performance-electric-dirt-bike-australia', '125cc-dirt-bike-australia-electric-alternatives', 'childs-dirt-bike-australia-electric-options'],
  '/electric-motor-bikes/': ['australian-electric-motorcycle-guide-2026', 'electric-moped-vs-e-scooter-australia-lams-guide', 'electric-bike-laws-qld-2026', 'electric-bike-regulations-nsw-2026'],
  '/electric-motor-bikes/kids/': ['childs-dirt-bike-australia-electric-options', 'kids-ebike-australia-evo-racing-lil-rippa-compared', 'e-bike-safety-australia-guide'],
  '/electric-motor-bikes/commuter-mopeds/': ['electric-moped-vs-e-scooter-australia-lams-guide', 'electric-bike-laws-qld-2026', 'electric-bike-regulations-nsw-2026'],
  '/electric-motor-bikes/rtr-ebike/': ['electric-bike-laws-qld-2026', 'electric-bike-regulations-nsw-2026', 'e-bike-safety-australia-guide'],
  '/electric-motor-bikes/e-bike-laws-australia/': ['electric-bike-laws-qld-2026', 'electric-bike-regulations-nsw-2026', 'e-bike-safety-australia-guide'],
  '/electric-motor-bikes/sydney/': ['electric-bike-regulations-nsw-2026', 'e-bike-safety-australia-guide'],
  '/electric-motor-bikes/brisbane/': ['electric-bike-laws-qld-2026', 'e-bike-safety-australia-guide'],
  '/electric-bikes/': ['electric-bike-laws-qld-2026', 'electric-bike-regulations-nsw-2026', 'kids-ebike-australia-evo-racing-lil-rippa-compared', 'e-bike-safety-australia-guide'],
  '/electric-bikes/cheap/': ['kids-ebike-australia-evo-racing-lil-rippa-compared', 'electric-bike-laws-qld-2026', 'electric-bike-regulations-nsw-2026'],
  '/electric-fat-tyre-bikes/': ['kids-ebike-australia-evo-racing-lil-rippa-compared', 'e-bike-safety-australia-guide'],
  '/electric-mini-bikes/': ['kids-ebike-australia-evo-racing-lil-rippa-compared', 'childs-dirt-bike-australia-electric-options'],
  '/electric-motocross-bikes/': ['high-performance-electric-dirt-bike-australia', '125cc-dirt-bike-australia-electric-alternatives'],
  '/electric-motorcycles/': ['australian-electric-motorcycle-guide-2026', 'electric-moped-vs-e-scooter-australia-lams-guide', 'high-performance-electric-dirt-bike-australia'],
  '/brands/': ['e-ride-pro-australia-buyers-guide', 'e-ride-pro-ss-2-0-vs-sr-specs-price'],
  '/accessories/': ['e-bike-safety-australia-guide'],
};
