import { NextResponse } from 'next/server';
import { saveOrder } from '@/lib/orderStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml } from '@/lib/emailTemplate';
import { CONTACT, SITE, REPLY } from '@/src/config/site';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      ref,
      channel,
      customerName,
      email,
      phone,
      address,
      suburbState,
      items,
      subtotal,
      discount,
      shipping,
      total,
      paymentMethod,
      notes,
    } = body;

    if (!customerName || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required order details' }, { status: 400 });
    }

    const orderRef = ref || `EDBA-${Math.floor(10000 + Math.random() * 89999)}`;

    const stored = await saveOrder({
      ref: orderRef,
      channel: channel || 'email',
      status: 'pending',
      customerName,
      email: email || 'pending@customer.com',
      phone: phone || '',
      address: address || '',
      suburbState: suburbState || '',
      items,
      subtotal: subtotal || 0,
      discount: discount || 0,
      shipping: shipping || 0,
      total: total || 0,
      paymentMethod: paymentMethod || 'crypto',
      notes,
    });

    // 1. Send Order Confirmation to Customer (Mandatory Light Shell — NO bank details)
    if (email && email.includes('@')) {
      const itemsListHtml = items
        .map((i: { name: string; qty: number; price: number }) => `<div>• <strong>${i.qty}x</strong> ${i.name} — $${(i.price * i.qty).toLocaleString()} AUD</div>`)
        .join('');

      const customerHtml = buildEmailHtml({
        title: `Your Order ${orderRef} Has Been Received`,
        preheader: `Thank you for ordering with ${SITE.name}. Next step: watch for payment details.`,
        refBadge: orderRef,
        intro: `Hi ${customerName}, thank you for choosing ${SITE.name}. We have logged your order and our dispatch team in Mittagong NSW 2575 is currently allocating your vehicle crate.`,
        rows: [
          { label: 'Order Reference', value: orderRef, mono: true },
          { label: 'Selected Payment Rail', value: paymentMethod.toUpperCase() },
          { label: 'Purchased Items', html: itemsListHtml },
          { label: 'Subtotal', value: `$${subtotal.toLocaleString()} AUD`, mono: true },
          { label: 'Discount', value: `-$${discount.toLocaleString()} AUD`, mono: true },
          { label: 'Shipping', value: shipping === 0 ? 'FREE Aus Freight' : `$${shipping} AUD` },
          { label: 'Total Amount Due', value: `$${total.toLocaleString()} AUD`, highlight: true, mono: true },
        ],
        afterRows: `
        <div style="background:#f8fafc;padding:16px;border-radius:8px;border-left:4px solid ${REPLY.brand.primary};margin-top:12px;">
          <div style="font-weight:700;color:#0f172a;margin-bottom:4px;">Next Step: Payment Instructions</div>
          <div style="color:#475569;font-size:13px;line-height:1.5;">
            Our team will dispatch a separate payment email with our verified Australian bank details (or cryptocurrency address) and your freight reservation code shortly.
          </div>
        </div>`,
        cta: {
          label: 'Visit Electric Dirt Bike Australia',
          url: `https://${SITE.domain}/`,
        },
      });

      await sendMail({
        to: email,
        subject: `Order Confirmation: ${orderRef} | ${SITE.name}`,
        html: customerHtml,
        text: `Thank you for your order ${orderRef}. Total: $${total} AUD. Please watch for your payment instructions email.`,
      });
    }

    // 2. Send Admin Alert Email
    const adminNotificationHtml = buildEmailHtml({
      title: `New Order Received: ${orderRef}`,
      preheader: `Customer: ${customerName} · Total: $${total} AUD`,
      refBadge: orderRef,
      rows: [
        { label: 'Channel', value: channel === 'whatsapp' ? 'WhatsApp Checkout' : 'Website Form' },
        { label: 'Customer', value: customerName },
        { label: 'Email', value: email || 'N/A' },
        { label: 'Phone', value: phone || 'N/A' },
        { label: 'Delivery Location', value: `${address || ''} ${suburbState || ''}` },
        { label: 'Selected Payment', value: paymentMethod },
        { label: 'Total Value', value: `$${total.toLocaleString()} AUD`, highlight: true, mono: true },
      ],
      cta: {
        label: 'Open Order in Reply Portal →',
        url: `https://${SITE.domain}/admin/send-payment-email/?ref=${orderRef}`,
      },
    });

    await sendMail({
      to: CONTACT.orderEmail || CONTACT.email,
      subject: `🚨 [New Order] ${orderRef} - ${customerName} ($${total} AUD)`,
      html: adminNotificationHtml,
      text: `New order ${orderRef} from ${customerName} for $${total} AUD.`,
      replyTo: email,
    });

    return NextResponse.json({ success: true, orderRef, orderId: stored.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
