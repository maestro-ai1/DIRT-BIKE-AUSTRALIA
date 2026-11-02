import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { getAllOrders, getSetting, updateOrderStatus } from '@/lib/orderStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml, escapeHtml } from '@/lib/emailTemplate';
import { SITE, CONTACT } from '@/src/config/site';
import { INVOICE } from '@/src/config/invoice';

const aud = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Emails the tax invoice (bank transfer / Osko) to the customer. Amounts and bank details come from the server, never from the browser.
export async function POST(request: Request) {
  if (!checkAdminPasscode(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await request.json().catch(() => ({}));
    const ref = String(body.ref || '').trim();
    const email = String(body.email || '').trim();
    const address = String(body.address || '').trim().slice(0, 300);
    const phone = String(body.phone || '').trim().slice(0, 40);
    if (!ref || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid order reference and customer email are required.' }, { status: 400 });
    }

    const orders = await getAllOrders();
    const order = orders.find((o) => o.ref === ref || o.id === ref);
    if (!order) return NextResponse.json({ error: 'Order not found.' }, { status: 404 });

    const rawBank = await getSetting('invoice-bank');
    const bank = rawBank ? JSON.parse(rawBank) : null;
    if (!bank || !bank.accountName || !bank.bsb || !bank.accountNumber) {
      return NextResponse.json({ error: 'Save your bank details on the invoice page first.' }, { status: 400 });
    }

    const total = order.total;
    const gst = Math.round((total / (1 + INVOICE.gstRate)) * INVOICE.gstRate * 100) / 100;
    const exGst = Math.round((total - gst) * 100) / 100;
    const date = new Date(order.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
    const bsb = bank.bsb.length === 6 ? `${bank.bsb.slice(0, 3)}-${bank.bsb.slice(3)}` : bank.bsb;
    const billTo = [escapeHtml(order.customerName), address && escapeHtml(address), phone && escapeHtml(phone)].filter(Boolean).join('<br>');

    const cell = 'padding:9px 14px;font-size:12px;color:#334155;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;';
    const itemRows = order.items.map((it) => `
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="${cell}">${it.qty}× ${escapeHtml(it.name)}</td>
        <td align="right" style="${cell}font-weight:600;color:#0f172a;white-space:nowrap;">${aud(it.price * it.qty)}</td>
      </tr>`).join('');
    const totalRow = (label: string, value: string, bold = false) => `
      <tr><td style="${cell}${bold ? 'font-weight:800;color:#0f172a;' : 'color:#64748b;'}">${label}</td>
      <td align="right" style="${cell}${bold ? 'font-weight:800;color:#0f172a;' : ''}white-space:nowrap;">${value}</td></tr>`;

    const bankLine = (l: string, v: string) => `<tr><td style="padding:3px 0;font-size:12px;color:#64748b;width:120px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">${l}</td><td style="padding:3px 0;font-size:13px;font-weight:700;color:#0f172a;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,monospace;">${escapeHtml(v)}</td></tr>`;

    const html = buildEmailHtml({
      title: `Tax Invoice ${order.ref}`,
      preheader: `Tax invoice ${order.ref} for ${aud(total)} AUD. Pay by bank transfer (Osko).`,
      refBadge: order.ref,
      intro: `Hi ${escapeHtml(order.customerName)}, thank you for your order. Your tax invoice is below. Please pay by bank transfer (Osko) using the details at the bottom so we can dispatch your order.`,
      rows: [
        { label: 'Invoice date', value: date },
        { label: 'Amount due (AUD, incl. GST)', value: aud(total), highlight: true, mono: true },
      ],
      afterRows: `
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#0284c7;margin:6px 0 4px 0;">Tax invoice from</div>
        <p style="margin:0 0 12px 0;font-size:12px;color:#475569;line-height:1.6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">Electric Dirt Bike Australia &middot; ABN ${escapeHtml(CONTACT.abn)}<br>${escapeHtml(CONTACT.address)}</p>
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#0284c7;margin:6px 0 4px 0;">Bill to</div>
        <p style="margin:0 0 12px 0;font-size:12px;color:#475569;line-height:1.6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">${billTo}</p>
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin:12px 0;border:1px solid #e2e8f0;border-radius:8px;">
          ${itemRows}
          ${totalRow('Subtotal', aud(order.subtotal))}
          ${order.discount > 0 ? totalRow('Discount', '&minus;' + aud(order.discount)) : ''}
          ${totalRow('Shipping (Australia-wide)', order.shipping > 0 ? aud(order.shipping) : 'FREE')}
          ${totalRow('Total excluding GST', aud(exGst))}
          ${totalRow('GST (10%)', aud(gst))}
          ${totalRow('Total AUD (incl. GST)', aud(total), true)}
        </table>
        <div style="border-top:2px solid #0284c7;padding-top:14px;margin-top:4px;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#0284c7;margin-bottom:8px;">Pay by bank transfer (Osko)</div>
        </div>
        <div style="background:#f8fafc;border-left:4px solid #0284c7;padding:14px 16px;border-radius:0 6px 6px 0;margin-bottom:14px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            ${bankLine('Account name', bank.accountName)}
            ${bank.bankName ? bankLine('Bank', bank.bankName) : ''}
            ${bankLine('BSB', bsb)}
            ${bankLine('Account number', bank.accountNumber)}
            ${bank.payId ? bankLine('PayID' + (bank.payIdType ? ` (${bank.payIdType})` : ''), bank.payId) : ''}
            ${bankLine('Amount', aud(total) + ' AUD')}
            ${bankLine('Reference', order.ref)}
          </table>
        </div>
        <p style="margin:0 0 6px 0;font-size:12px;color:#64748b;line-height:1.6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">Please use <b>${escapeHtml(order.ref)}</b> as your payment reference. Osko payments clear within minutes. Once paid, reply to this email or WhatsApp ${escapeHtml(CONTACT.whatsappDisplay)} with your receipt. ${escapeHtml(INVOICE.paymentTerms)} Prices include 10% GST.</p>`,
    });

    // Preview only: return the rendered email, send nothing.
    if (body.preview) return NextResponse.json({ html });

    const text = [
      `Tax invoice ${order.ref} - Electric Dirt Bike Australia (ABN ${CONTACT.abn})`,
      `Bill to: ${order.customerName}${address ? ', ' + address : ''}`,
      ...order.items.map((it) => `${it.qty} x ${it.name}: ${aud(it.price * it.qty)}`),
      order.discount > 0 ? `Discount: -${aud(order.discount)}` : '',
      `Shipping: ${order.shipping > 0 ? aud(order.shipping) : 'FREE'}`,
      `GST (10%): ${aud(gst)}`,
      `TOTAL (incl. GST): ${aud(total)} AUD`,
      '',
      'Pay by bank transfer (Osko):',
      `Account name: ${bank.accountName}`,
      `BSB: ${bsb}`,
      `Account number: ${bank.accountNumber}`,
      bank.payId ? `PayID: ${bank.payId}` : '',
      `Reference: ${order.ref}`,
    ].filter(Boolean).join('\n');

    const mailRes = await sendMail({
      to: email,
      subject: `Tax Invoice ${order.ref} | ${SITE.name}`,
      html,
      text,
      replyTo: CONTACT.email,
    });
    if (!mailRes.sent) {
      return NextResponse.json({ error: mailRes.reason === 'not-configured' ? 'Email is not configured on the server (SMTP).' : 'The email could not be sent.' }, { status: 502 });
    }
    if (order.status === 'pending') await updateOrderStatus(order.ref, 'payment-sent');
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}
