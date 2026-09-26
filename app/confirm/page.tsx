import { Suspense } from 'react';
import type { Metadata } from 'next';
import { ConfirmClient } from './ConfirmClient';

export const metadata: Metadata = {
  title: 'Upload Payment Proof | Electric Dirt Bike Australia',
  robots: { index: false, follow: false },
};

export default function ConfirmPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <Suspense fallback={<div className="p-8 text-center text-slate-500 text-sm">Loading...</div>}>
          <ConfirmClient />
        </Suspense>
      </div>
    </div>
  );
}
