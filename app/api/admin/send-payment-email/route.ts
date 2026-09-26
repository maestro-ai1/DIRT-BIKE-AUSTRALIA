import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { updateOrderStatus } from '@/lib/orderStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml, escapeHtml } from '@/lib/emailTemplate';
import { SITE, CONTACT } from '@/src/config/site';

export async function POST(request: Request) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { orderRef, customerEmail, customerName, amount, paymentMethod, details } = body;

    if (!orderRef || !customerEmail || !details) {
      return NextResponse.json({ error: 'Missing payment dispatch parameters' }, { status: 400 });
    }

    const waConfirmText = encodeURIComponent(
      `Hi! I have completed payment for order ${orderRef}. Amount: ${amount}. Please confirm receipt. Thank you!`
    );

    // Render the admin-typed instructions with line breaks preserved
    const detailsHtml = escapeHtml(details).replace(/\n/g, '<br>');

    const emailHtml = buildEmailHtml({
      title: `Payment Details — ${orderRef}`,
      preheader: `Hi ${customerName}, here are your payment details for order ${orderRef}.`,
      refBadge: orderRef,
      intro: `Hi ${customerName}, please use the details below to complete your payment and secure your order.`,
      rows: [
        { label: 'Amount Due', value: amount, highlight: true, mono: true },
      ],
      afterRows: `
        <div style="margin:0 0 12px 0;padding:16px;background:#f8fafc;border-left:4px solid #0284c7;border-radius:6px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:13px;color:#0f172a;line-height:1.8;">
          ${detailsHtml}
        </div>
        <div style="padding:14px 16px;background:#0f172a;border-radius:8px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;margin-bottom:8px;">Payment Terms</div>
          <ul style="margin:0;padding-left:16px;color:#cbd5e1;font-size:12px;line-height:1.8;">
            <li>Pay within 48 hours to secure your order</li>
            <li>Use <span style="font-family:ui-monospace,monospace;color:#7dd3fc;font-weight:700;">${escapeHtml(orderRef)}</span> as your payment reference</li>
            <li>Once paid, send your receipt to <a href="mailto:${CONTACT.email}" style="color:#38bdf8;font-weight:600;">${CONTACT.email}</a> or WhatsApp ${CONTACT.phoneDisplay}</li>
          </ul>
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
      text: `Hi ${customerName},\n\nPayment details for order ${orderRef}.\nAmount Due: ${amount}\n\n${details}\n\nPayment Terms:\n- Pay within 48 hours\n- Use ${orderRef} as your reference\n- Send receipt to ${CONTACT.email}\n\n${SITE.name}`,
      replyTo: CONTACT.email,
    });

    await updateOrderStatus(orderRef, 'payment-sent');

    return NextResponse.json({ success: true, emailSent: mailRes.sent });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
