import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: React.ReactNode;
  children: React.ReactNode;
  as?: 'h2' | 'h3';
  defaultOpen?: boolean;
}

export function FaqItem({ question, children, as: Heading = 'h3', defaultOpen = false }: FaqItemProps) {
  return (
    <details
      open={defaultOpen}
      className="group bg-white border border-slate-200/90 rounded-2xl shadow-xs open:border-sky-300 open:shadow-sm transition-colors"
    >
      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden px-5 py-4 sm:px-6 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 hover:bg-slate-50 group-open:hover:bg-transparent">
        <Heading className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-700 group-open:text-sky-700 transition-colors">
          {question}
        </Heading>
        <span
          aria-hidden="true"
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-slate-500 transition-transform duration-200 group-open:rotate-180 group-open:bg-sky-50 group-open:text-sky-600"
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </summary>
      <div className="px-5 pb-5 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <p className="bg-slate-50 p-4 rounded-xl border border-slate-100">{children}</p>
      </div>
    </details>
  );
}
