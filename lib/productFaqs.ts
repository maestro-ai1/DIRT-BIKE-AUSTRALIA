// lib/productFaqs.ts
// Kept as the import path used by the product page and product view.
// The generator now lives in lib/productSeo.ts: keyword-led Q&A (five per product) built only from each
// product's own specs and site policy. The previous version made claims that could not be sourced from
// product data (for example range gains from riders, cycle-life figures and "included charger").
export { getProductFaqs, getProductTags } from './productSeo';
export type { ProductFaq, ProductTag } from './productSeo';
