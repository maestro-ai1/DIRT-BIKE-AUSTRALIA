// 2026-11-02: reply portal storage fix.
// 1) Redis credentials: accept the Vercel KV / Upstash integration names (KV_REST_API_URL / KV_REST_API_TOKEN) as well as UPSTASH_REDIS_REST_*.
// 2) Demo orders and enquiries are seeded only outside production.
// 3) Enquiries persist in Redis (they were memory only, so they vanished between requests on Vercel).
const fs = require('fs');
const edit = (f, fn) => { let t = fs.readFileSync(f, 'utf8'); const crlf = t.includes('\r\n'); t = t.replace(/\r\n/g, '\n'); t = fn(t); fs.writeFileSync(f, crlf ? t.replace(/\n/g, '\r\n') : t); };
const need = (t, a) => { if (!t.includes(a)) throw new Error('missing: ' + a.slice(0, 60)); };

edit('lib/orderStore.ts', (t) => {
  const a = "function hasRedis(): boolean {\n  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);\n}";
  need(t, a);
  t = t.replace(a, "// Vercel's Redis/KV integration names these KV_REST_API_URL and KV_REST_API_TOKEN; older setups use UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.\nfunction redisCreds(): { url: string; token: string } {\n  return {\n    url: (process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || '').replace(/\\/$/, ''),\n    token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || '',\n  };\n}\n\nexport function hasRedis(): boolean {\n  const c = redisCreds();\n  return !!(c.url && c.token);\n}");
  const b = "  const url = (process.env.UPSTASH_REDIS_REST_URL || '').replace(/\\/$/, '');\n  const token = process.env.UPSTASH_REDIS_REST_TOKEN || '';\n";
  need(t, b);
  t = t.replace(b, "  const { url, token } = redisCreds();\n");
  const c = "global.__EDBA_ORDERS__ = [\n";
  need(t, c);
  t = t.replace(c, "global.__EDBA_ORDERS__ = process.env.NODE_ENV === 'production' ? [] : [\n");
  return t;
});

edit('lib/enquiryStore.ts', (t) => {
  const seed = "global.__EDBA_ENQUIRIES__ = [\n";
  need(t, seed);
  t = t.replace(seed, "global.__EDBA_ENQUIRIES__ = process.env.NODE_ENV === 'production' ? [] : [\n");
  t = t.replace("// lib/enquiryStore.ts — Enquiry store for contact and wholesale messages\n", "// lib/enquiryStore.ts — Enquiry store for contact and wholesale messages (Redis when configured, memory fallback for local dev)\nimport { hasRedis, getSetting, setSetting } from './orderStore';\n");
  const i = t.indexOf('export async function getAllEnquiries');
  need(t, 'export async function getAllEnquiries');
  t = t.slice(0, i) + `const ENQ_KEY = 'enquiries';

async function load(): Promise<StoredEnquiry[]> {
  if (hasRedis()) {
    const raw = await getSetting(ENQ_KEY);
    return raw ? (JSON.parse(raw) as StoredEnquiry[]) : [];
  }
  return global.__EDBA_ENQUIRIES__ || [];
}

async function persist(list: StoredEnquiry[]): Promise<void> {
  if (hasRedis()) await setSetting(ENQ_KEY, JSON.stringify(list));
  else global.__EDBA_ENQUIRIES__ = list;
}

export async function getAllEnquiries(): Promise<StoredEnquiry[]> {
  return load();
}

export async function getEnquiryById(id: string): Promise<StoredEnquiry | undefined> {
  const list = await load();
  return list.find((e) => e.id === id);
}

export async function saveEnquiry(enquiry: Omit<StoredEnquiry, 'id' | 'createdAt'>): Promise<StoredEnquiry> {
  const newEnq: StoredEnquiry = {
    ...enquiry,
    id: \`enq-\${Date.now()}\`,
    createdAt: new Date().toISOString(),
  };
  const list = await load();
  list.unshift(newEnq);
  await persist(list);
  return newEnq;
}

export async function updateEnquiryStatus(id: string, status: StoredEnquiry['status']): Promise<StoredEnquiry | null> {
  const list = await load();
  const item = list.find((e) => e.id === id);
  if (!item) return null;
  item.status = status;
  await persist(list);
  return item;
}

export async function deleteEnquiry(id: string): Promise<boolean> {
  const list = await load();
  const next = list.filter((e) => e.id !== id);
  if (next.length === list.length) return false;
  await persist(next);
  return true;
}
`;
  return t;
});

edit('app/admin/send-payment-email/page.tsx', (t) => {
  const a = "add <strong>UPSTASH_REDIS_REST_URL</strong> and <strong>UPSTASH_REDIS_REST_TOKEN</strong> to your Vercel environment variables.";
  need(t, a);
  return t.replace(a, "connect a Redis database (KV_REST_API_URL and KV_REST_API_TOKEN, or UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN) in your Vercel environment variables.");
});
console.log('patched');
