// lib/whatsapp.ts — WhatsApp message and link generator
import { SITE, REPLY } from '@/src/config/site';

const WA_HEADER = `*${SITE.name}*`;

export function toWhatsAppNumber(raw: string): string {
  // Cleans Australian phone formats: e.g., 0420 128 746 or +61 420 128 746 -> 61420128746
  const cleaned = raw.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    return '61' + cleaned.slice(1);
  }
  if (cleaned.startsWith('61')) {
    return cleaned;
  }
  return cleaned;
}

export function waLink(number: string, message: string): string {
  const norm = toWhatsAppNumber(number);
  return `https://wa.me/${norm}?text=${encodeURIComponent(message)}`;
}

export interface OrderItemPayload {
  name: string;
  qty: number;
  price: number;
}

export interface WaOrderPayload {
  ref: string;
  items: OrderItemPayload[];
  total: number;
  paymentMethod: string;
  customerName: string;
  customerPhone?: string;
  suburbState?: string;
  notes?: string;
}

export function waOrderLink(order: WaOrderPayload): string {
  const num = REPLY.channels.whatsapp || '+61420128746';
  const itemLines = order.items
    .map((item) => `• ${item.qty}x ${item.name} ($${item.price.toLocaleString()} AUD)`)
    .join('\n');

  const text = `${WA_HEADER}
*New Order Inquiry: ${order.ref}*

*Customer:* ${order.customerName}${order.customerPhone ? ` (${order.customerPhone})` : ''}
*Delivery Location:* ${order.suburbState || 'Australia'}

*Items:*
${itemLines}

*Total:* $${order.total.toLocaleString()} AUD
*Preferred Payment:* ${order.paymentMethod}

${order.notes ? `*Notes:* ${order.notes}\n` : ''}
Please confirm availability and dispatch schedule. Thank you!`;

  return waLink(num, text);
}

export function waPaymentDetailsMessage(orderRef: string, customerName: string, amount: string, paymentMethod: string, details: string): string {
  return `${WA_HEADER}
*Payment Instructions for Order ${orderRef}*

Hi ${customerName},
Thank you for your order with ${SITE.name}!

*Order Reference:* ${orderRef}
*Total Amount Due:* ${amount}
*Selected Rail:* ${paymentMethod}

*Payment Details:*
${details}

*Terms:*
• Complete payment within ${REPLY.deadlineHours} hours to secure stock.
• Use order reference *${orderRef}* as the transaction description.
• ${REPLY.dispatchLine}

Once completed, please send a screenshot of the transfer receipt here!`;
}
