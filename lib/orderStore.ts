// lib/orderStore.ts — Order persistence store (In-memory + Redis compatible)

export interface StoredOrder {
  id: string;
  ref: string;
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

// Global in-memory list ensuring hot reloads or state in server instance
declare global {
  // eslint-disable-next-line no-var
  var __EDBA_ORDERS__: StoredOrder[] | undefined;
}

if (!global.__EDBA_ORDERS__) {
  global.__EDBA_ORDERS__ = [
    {
      id: 'ord-101',
      ref: 'EDBA-84920',
      channel: 'email',
      status: 'pending',
      customerName: 'Marcus Thornton',
      email: 'm.thornton@gmail.com',
      phone: '0412 890 123',
      address: '42 Scenic Ridge Dr',
      suburbState: 'Newcastle, NSW 2300',
      items: [
        { name: 'Talaria Sting R MX4 (60V 45Ah / 8kW)', qty: 1, price: 7290, slug: 'talaria-sting-r-mx4' },
        { name: '15A Smart Fast Charger (Dual 60V / 72V Auto-Detect)', qty: 1, price: 380, slug: '15a-fast-charger-60v-72v' }
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
      channel: 'whatsapp',
      status: 'payment-sent',
      customerName: 'Braden Kelly',
      email: 'braden.k@stationoutback.com.au',
      phone: '0429 555 812',
      address: 'RMB 419 Old Dubbo Rd',
      suburbState: 'Dubbo, NSW 2830',
      items: [
        { name: 'Sur-Ron Ultra Bee (74V 55Ah / 12.5kW)', qty: 1, price: 10990, slug: 'sur-ron-ultra-bee' }
      ],
      subtotal: 10990,
      discount: 1099,
      shipping: 0,
      total: 9891,
      paymentMethod: 'payid',
      createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    }
  ];
}

export async function getAllOrders(): Promise<StoredOrder[]> {
  return global.__EDBA_ORDERS__ || [];
}

export async function getOrderById(id: string): Promise<StoredOrder | undefined> {
  const orders = await getAllOrders();
  return orders.find((o) => o.id === id || o.ref === id);
}

export async function saveOrder(order: Omit<StoredOrder, 'id' | 'createdAt'>): Promise<StoredOrder> {
  const newOrder: StoredOrder = {
    ...order,
    id: `ord-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  if (!global.__EDBA_ORDERS__) {
    global.__EDBA_ORDERS__ = [];
  }
  global.__EDBA_ORDERS__.unshift(newOrder);
  return newOrder;
}

export async function updateOrderStatus(id: string, status: StoredOrder['status']): Promise<StoredOrder | null> {
  const orders = await getAllOrders();
  const order = orders.find((o) => o.id === id || o.ref === id);
  if (!order) return null;
  order.status = status;
  return order;
}

export async function deleteOrder(id: string): Promise<boolean> {
  if (!global.__EDBA_ORDERS__) return false;
  const initialLen = global.__EDBA_ORDERS__.length;
  global.__EDBA_ORDERS__ = global.__EDBA_ORDERS__.filter((o) => o.id !== id && o.ref !== id);
  return global.__EDBA_ORDERS__.length < initialLen;
}
