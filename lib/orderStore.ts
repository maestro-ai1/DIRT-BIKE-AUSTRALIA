// lib/orderStore.ts — Order persistence (Upstash Redis when configured, in-memory fallback for local dev)
import { randomBytes } from 'crypto';

export interface StoredOrder {
  id: string;
  ref: string;
  confirmToken: string;
  channel: 'whatsapp' | 'email';
  status: 'pending' | 'payment-sent' | 'paid' | 'dispatched' | 'cancelled';
  customerName: string;
  email: string;
  phone: string;
  address: string;
  suburbState: string;
  items: Array<{
    name: string;
    qty: number;
    price: number;
    slug?: string;
  }>;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  notes?: string;
  createdAt: string;
}

// ── Upstash Redis via REST pipeline ──────────────────────────────
const ORDERS_HASH = 'edba:orders:h';

function hasRedis(): boolean {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function redis(cmd: string, ...args: (string | number)[]): Promise<unknown> {
  const url = (process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/$/, '');
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || '';
  const res = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([[cmd, ...args]]),
  });
  if (!res.ok) throw new Error(`Redis ${cmd} failed: ${res.status}`);
  const json = await res.json() as Array<{ result: unknown }>;
  return json[0]?.result ?? null;
}

// ── In-memory fallback (local dev only — does NOT persist on Vercel) ────
declare global {
  // eslint-disable-next-line no-var
  var __EDBA_ORDERS__: StoredOrder[] | undefined;
}

if (!global.__EDBA_ORDERS__) {
  global.__EDBA_ORDERS__ = [
    {
      id: 'ord-101',
      ref: 'EDBA-84920',
      confirmToken: 'demo-84920',
      channel: 'email',
      status: 'pending',
      customerName: 'Marcus Thornton',
      email: 'm.thornton@gmail.com',
      phone: '0412 890 123',
      address: '42 Scenic Ridge Dr',
      suburbState: 'Newcastle, NSW 2300',
      items: [
        { name: 'Talaria Sting R MX4 (60V 45Ah / 8kW)', qty: 1, price: 7290, slug: 'talaria-sting-r-mx4' },
        { name: '15A Smart Fast Charger (Dual 60V / 72V Auto-Detect)', qty: 1, price: 380, slug: '15a-fast-charger-60v-72v' },
      ],
      subtotal: 7670,
      discount: 767,
      shipping: 0,
      total: 6903,
      paymentMethod: 'crypto',
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
    {
      id: 'ord-102',
      ref: 'EDBA-71295',
      confirmToken: 'demo-71295',
      channel: 'whatsapp',
      status: 'payment-sent',
      customerName: 'Braden Kelly',
      email: 'braden.k@stationoutback.com.au',
      phone: '0429 555 812',
      address: 'RMB 419 Old Dubbo Rd',
      suburbState: 'Dubbo, NSW 2830',
      items: [
        { name: 'Sur-Ron Ultra Bee (74V 55Ah / 12.5kW)', qty: 1, price: 10990, slug: 'sur-ron-ultra-bee' },
      ],
      subtotal: 10990,
      discount: 1099,
      shipping: 0,
      total: 9891,
      paymentMethod: 'payid',
      createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    },
  ];
}

// ── Public API ────────────────────────────────────────────────────

export async function getAllOrders(): Promise<StoredOrder[]> {
  if (hasRedis()) {
    const raw = await redis('HGETALL', ORDERS_HASH) as string[] | null;
    if (!raw || raw.length === 0) return [];
    const orders: StoredOrder[] = [];
    for (let i = 0; i < raw.length; i += 2) {
      try { orders.push(JSON.parse(raw[i + 1])); } catch { /* skip malformed */ }
    }
    return orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  return [...(global.__EDBA_ORDERS__ || [])];
}

export async function getOrderById(id: string): Promise<StoredOrder | undefined> {
  const orders = await getAllOrders();
  return orders.find((o) => o.id === id || o.ref === id);
}

export async function saveOrder(
  order: Omit<StoredOrder, 'id' | 'createdAt' | 'confirmToken'>
): Promise<StoredOrder> {
  const newOrder: StoredOrder = {
    ...order,
    id: `ord-${Date.now()}`,
    confirmToken: randomBytes(24).toString('hex'),
    createdAt: new Date().toISOString(),
  };

  if (hasRedis()) {
    await redis('HSET', ORDERS_HASH, newOrder.id, JSON.stringify(newOrder));
    return newOrder;
  }

  if (!global.__EDBA_ORDERS__) global.__EDBA_ORDERS__ = [];
  global.__EDBA_ORDERS__.unshift(newOrder);
  return newOrder;
}

export async function updateOrderStatus(
  id: string,
  status: StoredOrder['status']
): Promise<StoredOrder | null> {
  const order = await getOrderById(id);
  if (!order) return null;
  order.status = status;

  if (hasRedis()) {
    await redis('HSET', ORDERS_HASH, order.id, JSON.stringify(order));
  }
  return order;
}

export async function deleteOrder(id: string): Promise<boolean> {
  const order = await getOrderById(id);
  if (!order) return false;

  if (hasRedis()) {
    await redis('HDEL', ORDERS_HASH, order.id);
    return true;
  }

  if (!global.__EDBA_ORDERS__) return false;
  const before = global.__EDBA_ORDERS__.length;
  global.__EDBA_ORDERS__ = global.__EDBA_ORDERS__.filter((o) => o.id !== id && o.ref !== id);
  return global.__EDBA_ORDERS__.length < before;
}
