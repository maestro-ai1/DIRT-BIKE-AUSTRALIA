import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: React.ReactNode;
  children: React.ReactNode;
  as?: 'h2' | 'h3';
  defaultOpen?: boolean;
  compact?: boolean;
}

export function FaqItem({ question, children, as: Heading = 'h3', defaultOpen = false, compact = true }: FaqItemProps) {
  return (
    <details
      open={defaultOpen}
      className={`group bg-white border border-slate-300 shadow-xs open:border-sky-400 open:shadow-sm transition-colors ${compact ? 'rounded-xl' : 'rounded-2xl'}`}
    >
      <summary className={`flex items-center justify-between gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 hover:bg-slate-50 group-open:hover:bg-transparent ${compact ? 'px-4 py-2.5 rounded-xl' : 'px-5 py-4 sm:px-6 rounded-2xl'}`}>
        <Heading className={`font-bold text-slate-900 group-hover:text-sky-800 group-open:text-sky-800 transition-colors ${compact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>
          {question}
        </Heading>
        <span
          aria-hidden="true"
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-slate-600 transition-transform duration-200 group-open:rotate-180 group-open:bg-sky-50 group-open:text-sky-600"
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </summary>
      <div className={`text-slate-700 leading-relaxed ${compact ? 'px-4 pb-3 text-xs' : 'px-5 pb-5 sm:px-6 text-xs sm:text-sm'}`}>
        <p className={`bg-slate-50 rounded-xl border border-slate-200 ${compact ? 'p-3' : 'p-4'}`}>{children}</p>
      </div>
    </details>
  );
}
