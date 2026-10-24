import { Suspense } from 'react';
import type { Metadata } from 'next';
import { CryptoPayClient } from './CryptoPayClient';

export const metadata: Metadata = {
  title: 'Pay with Crypto',
  robots: { index: false, follow: false },
};

export default function CryptoPayPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-5">Pay with Crypto</h1>
        <Suspense fallback={<p className="text-sm text-slate-600">Loading your order…</p>}>
          <CryptoPayClient />
        </Suspense>
      </div>
    </div>
  );
}
