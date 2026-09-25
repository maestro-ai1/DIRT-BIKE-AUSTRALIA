// lib/enquiryStore.ts — Enquiry store for contact and wholesale messages

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
  global.__EDBA_ENQUIRIES__ = [
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

export async function getAllEnquiries(): Promise<StoredEnquiry[]> {
  return global.__EDBA_ENQUIRIES__ || [];
}

export async function getEnquiryById(id: string): Promise<StoredEnquiry | undefined> {
  const list = await getAllEnquiries();
  return list.find((e) => e.id === id);
}

export async function saveEnquiry(enquiry: Omit<StoredEnquiry, 'id' | 'createdAt'>): Promise<StoredEnquiry> {
  const newEnq: StoredEnquiry = {
    ...enquiry,
    id: `enq-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  if (!global.__EDBA_ENQUIRIES__) {
    global.__EDBA_ENQUIRIES__ = [];
  }
  global.__EDBA_ENQUIRIES__.unshift(newEnq);
  return newEnq;
}

export async function updateEnquiryStatus(id: string, status: StoredEnquiry['status']): Promise<StoredEnquiry | null> {
  const list = await getAllEnquiries();
  const item = list.find((e) => e.id === id);
  if (!item) return null;
  item.status = status;
  return item;
}

export async function deleteEnquiry(id: string): Promise<boolean> {
  if (!global.__EDBA_ENQUIRIES__) return false;
  const initialLen = global.__EDBA_ENQUIRIES__.length;
  global.__EDBA_ENQUIRIES__ = global.__EDBA_ENQUIRIES__.filter((e) => e.id !== id);
  return global.__EDBA_ENQUIRIES__.length < initialLen;
}
