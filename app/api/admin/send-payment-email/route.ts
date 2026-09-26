import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { updateOrderStatus } from '@/lib/orderStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml, escapeHtml } from '@/lib/emailTemplate';
import { SITE, CONTACT } from '@/src/config/site';

interface OrderItem { qty: number; name: string; price: number; }

export async function POST(request: Request) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { orderRef, customerEmail, customerName, amount, paymentMethod, details, notes, items } = body;

    if (!orderRef || !customerEmail || !details) {
      return NextResponse.json({ error: 'Missing payment dispatch parameters' }, { status: 400 });
    }

    const waConfirmText = encodeURIComponent(
      `Hi! I have completed payment for order ${orderRef}. Amount: ${amount}. Please confirm receipt. Thank you!`
    );

    // Render admin-typed instructions with line breaks
    const detailsHtml = escapeHtml(details).replace(/\n/g, '<br>');

    // Order items rows
    const itemsList = Array.isArray(items) && items.length > 0
      ? `<table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin:12px 0;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
          ${(items as OrderItem[]).map((item) => `
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td style="padding:9px 14px;font-size:12px;color:#334155;">${item.qty}× ${escapeHtml(item.name)}</td>
            <td align="right" style="padding:9px 14px;font-size:12px;font-weight:600;color:#0f172a;white-space:nowrap;">$${item.price.toLocaleString()}</td>
          </tr>`).join('')}
          <tr style="background:#f8fafc;">
            <td style="padding:9px 14px;font-size:12px;color:#94a3b8;">Shipping (Australia-wide)</td>
            <td align="right" style="padding:9px 14px;font-size:12px;font-weight:700;color:#16a34a;">FREE</td>
          </tr>
        </table>`
      : '';

    // Payment method label
    const methodLabels: Record<string, string> = {
      payid: 'PayID (Instant)',
      'bank-transfer': 'Bank Transfer (EFT/OSKO)',
      crypto: 'Crypto (BTC / USDT / ETH)',
    };
    const methodLabel = methodLabels[paymentMethod] || paymentMethod;

    const emailHtml = buildEmailHtml({
      title: `Payment Details — ${orderRef}`,
      preheader: `Hi ${customerName}, here are your payment details for order ${orderRef}.`,
      refBadge: orderRef,
      intro: `Hi ${customerName}, please complete your payment using the details below to dispatch your order.`,
      rows: [
        { label: 'Amount Due', value: amount, highlight: true, mono: true },
      ],
      afterRows: `
        ${itemsList}
        <div style="border-top:2px solid #0284c7;padding-top:14px;margin-top:4px;">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#0284c7;margin-bottom:6px;">
            Pay via ${escapeHtml(methodLabel)}
          </div>
          <p style="margin:0 0 10px 0;font-size:13px;color:#475569;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
            Please pay exactly <strong style="color:#0f172a;">${escapeHtml(amount)}</strong> using the details below:
          </p>
        </div>
        <div style="background:#f8fafc;border-left:4px solid #0284c7;padding:14px 16px;border-radius:0 6px 6px 0;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:13px;color:#0f172a;line-height:1.8;margin-bottom:14px;">
          ${detailsHtml}
        </div>
        ${notes ? `<p style="font-size:12px;color:#64748b;font-style:italic;margin:0 0 14px 0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">${escapeHtml(notes)}</p>` : ''}
        <div style="background:#0f172a;padding:16px 18px;border-radius:8px;">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;margin-bottom:10px;">Before Your Order Ships</div>
          <div style="font-size:12px;color:#cbd5e1;line-height:1.9;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
            • Pay within 48 hours to confirm this order.<br>
            • Use <span style="font-family:ui-monospace,monospace;color:#7dd3fc;font-weight:700;">${escapeHtml(orderRef)}</span> as your payment reference.<br>
            • Once paid, send your receipt to <a href="mailto:${CONTACT.email}" style="color:#38bdf8;font-weight:600;">${CONTACT.email}</a> or WhatsApp ${CONTACT.phoneDisplay}.<br>
            • Ships within 2 business days of payment confirmation.
          </div>
        </div>`,
      ctaButtons: [
        {
          label: 'Upload Payment Proof →',
          url: `https://${SITE.domain}/confirm/?ref=${encodeURIComponent(orderRef)}`,
          style: 'primary',
        },
        {
          label: 'Confirm via WhatsApp',
          url: `https://wa.me/61420128746?text=${waConfirmText}`,
          style: 'green',
        },
      ],
    });

    const mailRes = await sendMail({
      to: customerEmail,
      subject: `Payment Details: ${orderRef} | ${SITE.name}`,
      html: emailHtml,
      text: `Hi ${customerName},\n\nPayment details for order ${orderRef}.\nAmount Due: ${amount}\n\n${details}\n\nTerms:\n- Pay within 48 hours\n- Use ${orderRef} as your reference\n- Send receipt to ${CONTACT.email}\n\n${SITE.name}`,
      replyTo: CONTACT.email,
    });

    await updateOrderStatus(orderRef, 'payment-sent');

    return NextResponse.json({ success: true, emailSent: mailRes.sent });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
