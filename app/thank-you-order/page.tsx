import React, { Suspense } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SITE, CONTACT } from '@/src/config/site';
import { CheckCircle, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { ThankYouOrderClient } from './ThankYouOrderClient';

export const metadata: Metadata = {
  title: 'Order Received | Electric Dirt Bike Australia',
  description: 'Thank you for your order. Watch your inbox for payment details.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouOrderPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 w-full">
        <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading order status...</div>}>
          <ThankYouOrderClient />
        </Suspense>
      </div>
    </div>
  );
}
