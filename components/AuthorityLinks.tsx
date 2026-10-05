import React from 'react';
import { ExternalLink } from 'lucide-react';
import { authorityLinksFor } from '@/src/config/authority-links';

// "Official Guides & Resources": followed editorial links out to government, regulator, fire-service and reference sources relevant to the page.
export function AuthorityLinks({ path, className = 'mb-12' }: { path: string; className?: string }) {
  const links = authorityLinksFor(path);
  if (links.length === 0) return null;
  return (
    <aside className={`bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm ${className}`} aria-labelledby={`auth-${path.replace(/\W+/g, '-')}`}>
      <h2 id={`auth-${path.replace(/\W+/g, '-')}`} className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
        Official Guides &amp; Resources
      </h2>
      <p className="text-xs text-slate-600 mt-1">Rules, safety advice and background from Australian governments, regulators and trusted references.</p>
      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {links.map((l) => (
          <li key={l.url} className="text-xs leading-snug">
            <a
              href={l.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-start gap-1.5 font-bold text-sky-800 hover:underline"
            >
              <span>{l.label}</span>
              <ExternalLink className="w-3 h-3 mt-0.5 shrink-0" aria-hidden="true" />
            </a>
            <span className="block text-slate-600">
              {l.source}. {l.note}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
