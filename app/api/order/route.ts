import { NextResponse } from 'next/server';
import { after } from 'next/server';
import { saveOrder } from '@/lib/orderStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml } from '@/lib/emailTemplate';
import { generateOrderRef } from '@/lib/order';
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

    const orderRef = ref || generateOrderRef();

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

    // Respond immediately; send emails in background
    after(async () => {
      try {
        const methodLabel =
          paymentMethod === 'crypto'        ? 'Crypto (BTC / USDT / ETH)' :
          paymentMethod === 'payid'         ? 'PayID (Instant Bank Rail)'  :
          paymentMethod === 'bank-transfer' ? 'Bank Transfer (EFT/OSKO)'   :
          paymentMethod;

        // 1. Customer confirmation email
        if (email && email.includes('@')) {
          const waText = encodeURIComponent(
            `Hi! I have completed payment for order *${orderRef}*. Amount: $${total.toLocaleString()} AUD via ${methodLabel}. Please confirm receipt. Thank you!`
          );

          const termsHtml = `
          <div style="background:#0f172a;border-radius:10px;padding:20px 22px;margin:16px 0;">
            <div style="color:#94a3b8;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">Before Your Order Ships</div>
            <ul style="margin:0;padding:0;list-style:none;color:#e2e8f0;font-size:13px;line-height:1.6;">
              <li style="padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">&#10003;&nbsp; This order is confirmed once payment is received.</li>
              <li style="padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-weight:700;color:#fff;">&#10003;&nbsp; Use your order number — <span style="font-family:monospace;color:#38bdf8;">${orderRef}</span> — as the payment reference.</li>
              <li style="padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">&#10003;&nbsp; Ships within 2 business days of payment confirmation.</li>
              <li style="padding:5px 0;">&#10003;&nbsp; Refund or re-ship within 7 days if there is a problem.</li>
            </ul>
            <div style="margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08);font-size:12px;color:#94a3b8;">
              Once paid — send your payment screenshot to confirm dispatch:<br>
              <span style="color:#38bdf8;">&#9993;&nbsp;sales&#64;electricdirtbikeaustralia.com.au</span>&nbsp;&nbsp;&#9993;&nbsp;<span style="color:#4ade80;">WhatsApp +61 420 128 746</span>
            </div>
          </div>`;

          const customerHtml = buildEmailHtml({
            title: `Order ${orderRef} — Payment Awaited`,
            preheader: `Hi ${customerName}, your order is in. Complete payment to dispatch your bike.`,
            refBadge: orderRef,
            rows: [
              { label: 'Amount Due', value: `$${total.toLocaleString()} AUD`, highlight: true, mono: true },
              { label: 'Payment Method', value: methodLabel },
              { label: 'Customer', value: customerName },
            ],
            afterRows: termsHtml,
            ctaButtons: [
              {
                label: "I\'ve Paid — Upload Confirmation →",
                url: `https://${SITE.domain}/confirm/?ref=${encodeURIComponent(orderRef)}`,
                style: 'primary',
              },
              {
                label: 'Confirm via WhatsApp →',
                url: `https://wa.me/61420128746?text=${waText}`,
                style: 'green',
              },
              {
                label: 'Reply to us →',
                url: `mailto:sales@electricdirtbikeaustralia.com.au?subject=Order%20${encodeURIComponent(orderRef)}`,
                style: 'dark',
              },
            ],
          });

          const custResult = await sendMail({
            to: email,
            subject: `Order ${orderRef} Confirmed | ${SITE.name}`,
            html: customerHtml,
            text: `Order ${orderRef} confirmed. Amount Due: $${total} AUD via ${methodLabel}.\n\nTo confirm dispatch: send payment screenshot to sales@electricdirtbikeaustralia.com.au or WhatsApp +61 420 128 746.\n\nUpload proof: https://${SITE.domain}/confirm/?ref=${orderRef}`,
          });
          if (!custResult.sent) {
            console.error(`[order/${orderRef}] Customer email failed:`, custResult);
          }
        }

        // 2. Admin notification — encode order data in the link so the reply portal
        //    works even when the order can\'t be retrieved from the store (no Redis yet)
        const adminParams = new URLSearchParams({
          ref: orderRef,
          n: customerName || '',
          e: email || '',
          p: phone || '',
          t: String(total),
          m: paymentMethod,
          a: suburbState || '',
        });
        (items as Array<{ qty: number; name: string; price: number }>).forEach((item) => {
          adminParams.append('i', `${item.qty}|${item.name}|${item.price}`);
        });

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
            url: `https://${SITE.domain}/admin/send-payment-email/?${adminParams.toString()}`,
          },
        });

        const adminResult = await sendMail({
          to: CONTACT.email,
          subject: `[New Order] ${orderRef} - ${customerName} ($${total} AUD)`,
          html: adminNotificationHtml,
          text: `New order ${orderRef} from ${customerName} for $${total} AUD.\n\nEmail: ${email}\nPhone: ${phone}\nPayment: ${paymentMethod}\nAddress: ${address}, ${suburbState}`,
          replyTo: email,
        });
        if (!adminResult.sent) {
          console.error(`[order/${orderRef}] Admin notification email failed:`, adminResult);
        }
      } catch (emailErr) {
        console.error(`[order/${orderRef}] Background email error:`, emailErr);
      }
    });

    return NextResponse.json({ success: true, orderRef, orderId: stored.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
