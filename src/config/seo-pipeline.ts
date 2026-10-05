// src/config/seo-pipeline.ts
// DRAFT ONLY. Not imported by any page, sitemap entry or navigation. Nothing here is published.
// Categories and products with real Semrush AU demand (25 Sep 2026 export) that the shop does not stock yet.
// To publish one: add the real products to PRODUCTS (name, price, specs, images, inStock), then create the page
// from components/CategoryLanding.tsx and add it to app/sitemap.ts. Do not list a product before you can supply it.

export interface PipelineItem {
  theme: string;
  plannedUrl: string;
  mainKeyword: string;
  stock: string;
  semrushVolume: number;
  topKeywords: string[];
  needFromOwner: string;
}

export const PIPELINE: PipelineItem[] = [
  {
    theme: "Electric pit bikes",
    plannedUrl: "/electric-pit-bikes/",
    mainKeyword: "electric pit bike",
    stock: "Not stocked",
    semrushVolume: 1960,
    topKeywords: ["electric pit bike (720/mo, KD 16, Commercial)","pit bikes australia (210/mo, KD 24, Commercial)","pit bikes au (170/mo, KD 19, Commercial)","electric pit bikes (110/mo, KD 17, Commercial)","e pit bike (110/mo, KD 13, Commercial)"],
    needFromOwner: "At least 2 electric pit bikes: name, brand, price, motor, battery, wheel size, seat height, rider limits, photos.",
  },
  {
    theme: "Folding / small e-bikes",
    plannedUrl: "/electric-bikes/folding/",
    mainKeyword: "folding electric bike australia",
    stock: "Not stocked",
    semrushVolume: 1500,
    topKeywords: ["small electric bicycle (260/mo, KD 10, Informational, Commercial)","small electric bike (260/mo, KD 16, Informational)","ebike folding australia (70/mo, KD 10, Informational, Commercial)","electric bike foldable australia (70/mo, KD -, (unlabelled))","small electric bikes (50/mo, KD 12, Commercial)"],
    needFromOwner: "Folding or compact e-bike models if you want to serve this demand.",
  },
  {
    theme: "Electric scooters",
    plannedUrl: "/electric-scooters/",
    mainKeyword: "electric scooter for sale",
    stock: "Out of current scope",
    semrushVolume: 15980,
    topKeywords: ["electric scooter australia (1,900/mo, KD 42, Commercial)","electric scooter melbourne (1,300/mo, KD 28, Commercial)","moped e scooter (1,000/mo, KD 20, Informational, Commercial)","e scooters australia (1,000/mo, KD 42, Commercial)","e scooter australia (1,000/mo, KD 31, Commercial)"],
    needFromOwner: "Decision on whether scooters are in scope, then models, prices, specs and photos.",
  },
  {
    theme: "E-bike & riding helmets",
    plannedUrl: "/accessories/helmets/",
    mainKeyword: "e bike helmets",
    stock: "Not stocked on this site (available from Ampd Bros)",
    semrushVolume: 290,
    topKeywords: ["e bike helmets (260/mo, KD 17, Informational, Commercial)","beach cruiser bike helmets (20/mo, KD -, (unlabelled))","beach cruiser helmets (10/mo, KD -, (unlabelled))"],
    needFromOwner: "Ampd Bros lists 6 e-bike helmets in stock ($49.95 to $149.95, including the Ampd Bros Epic V2 and an Oakley MIPS model). They can be imported with scripts/sync-ampd-products.mjs. Confirm you want helmets and their AS/NZS certification wording first.",
  },
];

export const PIPELINE_CITIES = [
  {
    "city": "Gold Coast",
    "url": "/electric-motor-bikes/gold-coast/",
    "kws": [
      "electric bicycle gold coast (1,600/mo, KD 33, Commercial)",
      "electric bike gold coast (140/mo, KD 31, Commercial)"
    ],
    "vol": 1740
  },
  {
    "city": "Townsville",
    "url": "/electric-motor-bikes/townsville/",
    "kws": [
      "electric bikes townsville (320/mo, KD 28)",
      "e bikes townsville (210/mo, KD 14)",
      "electric bike townsville (90/mo, KD 26)"
    ],
    "vol": 620
  }
];

// Fields needed for each new product (matches ProductItem in src/config/site.ts)
export const PRODUCT_TEMPLATE = {
  slug: 'kebab-case-name',
  name: 'Brand Model (key spec)',
  brand: 'Brand',
  price: 0, // AUD including GST
  compareAtPrice: undefined as number | undefined,
  category: 'dirt-bikes | motocross | electric-motorbikes | accessories | parts-upgrades',
  badge: 'e.g. New Arrival',
  featured: false,
  shortDescription: 'One sentence with the real headline specs.',
  description: 'Real product description. Do not copy unverified claims.',
  specs: { motorPeak: '', battery: '', topSpeed: '', range: '', weight: '' },
  images: ['/images/your-photo.jpg'], // 4:3, you are sourcing these
  inStock: true,
};
