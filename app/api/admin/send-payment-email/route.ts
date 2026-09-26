import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { updateOrderStatus } from '@/lib/orderStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml } from '@/lib/emailTemplate';
import { paymentTermsHtml, instructionsParts, paymentTermsLines } from '@/lib/order';
import { SITE, CONTACT, REPLY } from '@/src/config/site';

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

    const emailHtml = buildEmailHtml({
      title: `Payment Instructions for Order ${orderRef}`,
      preheader: `Please complete payment for ${orderRef} to secure your vehicle allocation.`,
      refBadge: orderRef,
      intro: `Hi ${customerName}, thank you for your order with ${SITE.name}. Please follow the payment instructions below to confirm your order.`,
      rows: [
        { label: 'Order Reference', value: orderRef, mono: true },
        { label: 'Amount Due', value: amount, highlight: true, mono: true },
        { label: 'Payment Method', value: paymentMethod },
        { label: 'Payment Details', value: details, block: true, mono: true },
      ],
      afterRows: paymentTermsHtml(orderRef, paymentMethod) + `
      <div style="margin-top:16px;padding:14px;background:#f0f9ff;border-radius:8px;border:1px solid #bae6fd;">
        <div style="font-weight:700;color:#0f172a;font-size:13px;margin-bottom:6px;">Once paid — send us your payment screenshot:</div>
        <div style="font-size:13px;color:#334155;">
          📧 Email: <a href="mailto:sales@electricdirtbikeaustralia.com.au" style="color:#0284c7;font-weight:600;">sales&#64;electricdirtbikeaustralia.com.au</a><br>
          💬 WhatsApp: <strong>+61 420 128 746</strong>
        </div>
      </div>`,
      cta: {
        label: 'Upload Payment Proof →',
        url: `https://${SITE.domain}/confirm/?ref=${encodeURIComponent(orderRef)}`,
      },
      secondaryCta: {
        label: 'Confirm via WhatsApp',
        url: `https://wa.me/61420128746?text=${waConfirmText}`,
      },
    });

    const mailRes = await sendMail({
      to: customerEmail,
      subject: `Payment Instructions: ${orderRef} | ${SITE.name}`,
      html: emailHtml,
      text: `Payment instructions for order ${orderRef}.\nTotal: ${amount}\n\nDetails:\n${details}`,
      replyTo: CONTACT.email,
    });

    await updateOrderStatus(orderRef, 'payment-sent');

    return NextResponse.json({ success: true, emailSent: mailRes.sent });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
