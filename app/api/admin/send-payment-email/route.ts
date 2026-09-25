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

    const emailHtml = buildEmailHtml({
      title: `Payment Instructions for Order ${orderRef}`,
      preheader: `Please complete payment for ${orderRef} to secure your vehicle allocation.`,
      refBadge: orderRef,
      intro: `Hi ${customerName}, thank you for your order with ${SITE.name}. Please follow the instructions below to complete your payment.`,
      rows: [
        { label: 'Order Reference', value: orderRef, mono: true },
        { label: 'Amount Due', value: amount, highlight: true, mono: true },
        { label: 'Selected Payment Method', value: paymentMethod },
        { label: 'Payment Account & Transfer Details', value: details, block: true, mono: true },
      ],
      afterRows: paymentTermsHtml(orderRef, paymentMethod),
      secondaryCta: {
        label: 'Contact Support via WhatsApp',
        url: `https://${SITE.domain}/contact/`,
      },
    });

    const mailRes = await sendMail({
      to: customerEmail,
      subject: `Payment Instructions: ${orderRef} | ${SITE.name}`,
      html: emailHtml,
      text: `Payment instructions for order ${orderRef}.\nTotal: ${amount}\n\nDetails:\n${details}`,
      replyTo: CONTACT.orderEmail || CONTACT.email,
    });

    await updateOrderStatus(orderRef, 'payment-sent');

    return NextResponse.json({ success: true, emailSent: mailRes.sent });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
