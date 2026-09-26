import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ThankYouOrderClient } from './ThankYouOrderClient';

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your order has been received. Complete payment to confirm dispatch.',
  robots: { index: false, follow: true },
};

export default function ThankYouOrderPage() {
  return (
    <div className="py-10 sm:py-16 bg-slate-100 min-h-screen px-4">
      <div className="max-w-2xl mx-auto w-full">
        <Suspense fallback={<div className="p-8 text-center text-slate-500 text-sm">Loading…</div>}>
          <ThankYouOrderClient />
        </Suspense>
      </div>
    </div>
  );
}
