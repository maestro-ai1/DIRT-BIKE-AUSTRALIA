import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Message Received | Electric Dirt Bike Australia',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouContactPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 w-full bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Message Sent Successfully
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Thank you for contacting Electric Dirt Bike Australia. Our team in Mittagong NSW will review your question and reply within 2 to 4 business hours.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
