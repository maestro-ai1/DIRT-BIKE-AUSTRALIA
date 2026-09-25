'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyFieldProps {
  label: string;
  value: string;
  className?: string;
  mono?: boolean;
}

export function CopyField({ label, value, className = '', mono = true }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}: ${value}`}
      className={`group flex items-center justify-between gap-3 px-3.5 py-2 rounded-lg border text-left transition-all cursor-pointer ${
        copied
          ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
      } ${className}`}
    >
      <div className="flex flex-col min-w-0">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <span className={`text-sm font-semibold truncate ${mono ? 'font-mono' : ''}`}>
          {value}
        </span>
      </div>
      <div className="shrink-0 ml-2">
        {copied ? (
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-100/80 px-2 py-0.5 rounded">
            <Check className="w-3.5 h-3.5" />
            Copied!
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-slate-400 group-hover:text-slate-700">
            <Copy className="w-3.5 h-3.5" />
            Copy
          </span>
        )}
      </div>
    </button>
  );
}
