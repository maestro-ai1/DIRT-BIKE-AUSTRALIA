// lib/order.ts — Payment methods and terms logic (Single source of truth)
import { REPLY, SITE } from '@/src/config/site';

export interface PaymentMethodConfig {
  id: string;
  label: string;
  opening: string;
  closing: string;
  instantRailNote?: string;
  discount?: { percent: number; label: string };
}

export function getPaymentMethod(id: string): PaymentMethodConfig | undefined {
  return REPLY.paymentMethods.find((m) => m.id === id);
}

export function paymentMethodParts(
  methodId: string,
  amount: string,
  ref: string
): { opening: string; closing: string; label: string; instantRailNote?: string } {
  const method = getPaymentMethod(methodId) || REPLY.paymentMethods[0];
  const opening = method.opening.replace(/{amount}/g, amount).replace(/{ref}/g, ref);
  const closing = method.closing.replace(/{amount}/g, amount).replace(/{ref}/g, ref);

  return {
    label: method.label,
    opening,
    closing,
    instantRailNote: method.instantRailNote,
  };
}

export function paymentTermsLines(ref: string, methodId?: string): string[] {
  const lines: string[] = [];
  lines.push(`Complete payment within ${REPLY.deadlineHours} hours to lock in stock allocation.`);
  lines.push(`Use your order reference — ${ref} — as the transfer description.`);

  if (methodId) {
    const method = getPaymentMethod(methodId);
    if (method?.instantRailNote) {
      lines.push(method.instantRailNote);
    }
  }

  lines.push(REPLY.dispatchLine);

  const contactClause = REPLY.channels.whatsapp
    ? `Once paid, send a transfer receipt screenshot to ${REPLY.channels.email} or WhatsApp ${REPLY.channels.whatsapp} for instant dispatch confirmation.`
    : `Once paid, reply to your confirmation email with the payment receipt screenshot.`;
  lines.push(contactClause);

  return lines;
}

export function paymentTermsHtml(ref: string, methodId?: string): string {
  const lines = paymentTermsLines(ref, methodId);
  return `
  <div style="background:#f8fafc;border-left:4px solid ${REPLY.brand.primary};padding:14px 18px;border-radius:6px;margin:16px 0;">
    <div style="font-weight:700;color:#0f172a;margin-bottom:8px;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">
      Payment Instructions & Order Terms
    </div>
    <ul style="margin:0;padding-left:18px;color:#334155;font-size:13px;line-height:1.6;">
      ${lines.map((l) => `<li style="margin-bottom:6px;">${l}</li>`).join('')}
    </ul>
  </div>`;
}

export function instructionsParts(opening: string, detail: string, closing: string): string {
  return `${opening}\n\n${detail.trim()}\n\n${closing}`;
}
