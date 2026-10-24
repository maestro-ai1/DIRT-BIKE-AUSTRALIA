import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { getOrderById, updateOrderStatus } from '@/lib/orderStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml } from '@/lib/emailTemplate';
import { SITE, CONTACT } from '@/src/config/site';

// Owner presses "Payment received" after checking the screenshot against the wallet.
export async function POST(request: Request) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { ref } = await request.json();
    const order = ref ? await getOrderById(String(ref)) : undefined;
    if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    if (order.paymentMethod !== 'crypto') {
      return NextResponse.json({ error: 'This is not a crypto order.' }, { status: 400 });
    }

    await updateOrderStatus(order.id, 'payment-confirmed');

    let emailSent = false;
    if (order.email.includes('@') && !order.email.endsWith('.local')) {
      const first = order.customerName.split(' ')[0];
      const res = await sendMail({
        to: order.email,
        subject: `Payment received: order ${order.ref} | ${SITE.name}`,
        html: buildEmailHtml({
          title: 'Payment received',
          preheader: `Your crypto payment for order ${order.ref} is confirmed.`,
          refBadge: order.ref,
          intro: `Hi ${first}, we have received your crypto payment. Your order is confirmed and goes into dispatch now.`,
          rows: [
            { label: 'Order', value: order.ref, mono: true },
            { label: 'Amount paid', value: `$${order.total.toLocaleString()} AUD`, highlight: true, mono: true },
            { label: 'Payment method', value: 'Crypto (BTC / USDT)' },
          ],
          afterRows: `<p style="font-size:13px;color:#475569;line-height:1.6;">Orders ship within 2 business days of payment confirmation. We will email your tracking details once your order is on its way.</p>`,
          ctaButtons: [{ label: 'Reply to us →', url: `mailto:${CONTACT.email}?subject=Order%20${encodeURIComponent(order.ref)}`, style: 'dark' }],
        }),
        text: `Hi ${first}, we have received your crypto payment for order ${order.ref} ($${order.total} AUD). Your order is confirmed and goes into dispatch now.`,
        replyTo: CONTACT.email,
      });
      emailSent = res.sent;
    }

    return NextResponse.json({ success: true, emailSent });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
