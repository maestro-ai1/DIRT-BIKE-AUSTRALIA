// lib/enquiryStore.ts — Enquiry store for contact and wholesale messages (Redis when configured, memory fallback for local dev)
import { hasRedis, getSetting, setSetting } from './orderStore';

export interface StoredEnquiry {
  id: string;
  type: 'contact' | 'wholesale';
  status: 'new' | 'replied' | 'archived';
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  companyName?: string;
  abn?: string;
  estimatedUnits?: string;
  createdAt: string;
}

declare global {
  // eslint-disable-next-line no-var
  var __EDBA_ENQUIRIES__: StoredEnquiry[] | undefined;
}

if (!global.__EDBA_ENQUIRIES__) {
  global.__EDBA_ENQUIRIES__ = process.env.NODE_ENV === 'production' ? [] : [
    {
      id: 'enq-1',
      type: 'contact',
      status: 'new',
      name: 'Dave Morrison',
      email: 'dave.morrison@outbacktours.com.au',
      phone: '0438 123 456',
      subject: 'Inquiry on Talaria Sting R MX4 suspension setup',
      message: 'Hi team, I am 92kg and planning to ride steep rocky trails near Bathurst. Would you recommend upgrading the rear spring rate before shipping or is the stock 450lb spring sufficient?',
      createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    },
    {
      id: 'enq-2',
      type: 'wholesale',
      status: 'new',
      name: 'Samantha Vance',
      email: 'samantha@vancemoto.com.au',
      phone: '02 4920 1144',
      companyName: 'Vance Powersports Hunter Valley',
      abn: '45 109 822 711',
      estimatedUnits: '6-10 units / quarter',
      message: 'Interested in becoming a regional service agent and stocking Sur-Ron Light Bee X and fast chargers in our Maitland dealership showroom.',
      createdAt: new Date(Date.now() - 3600000 * 26).toISOString(),
    }
  ];
}

const ENQ_KEY = 'enquiries';

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
    id: `enq-${Date.now()}`,
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
