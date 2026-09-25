'use client';

import React, { useState } from 'react';
import { Lock, KeyRound, ShieldAlert } from 'lucide-react';
import { useAdminPasscode } from '@/lib/useAdminPasscode';

export function PasscodeGate({ children }: { children: React.ReactNode }) {
  const { isUnlocked, isChecking, unlock } = useAdminPasscode();
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState(false);

  if (isChecking) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-8">
        <div className="animate-spin w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) {
      setError(true);
      return;
    }
    const success = unlock(inputVal);
    if (!success) {
      setError(true);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-xl text-center">
        <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-sky-100">
          <Lock className="w-7 h-7" />
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
          Reply Portal Passcode
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Enter the administrative passcode to access orders, enquiries, and the payment details composer.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              autoFocus
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                setError(false);
              }}
              placeholder="Enter passcode (default: edba2026)"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-center font-mono text-base tracking-widest focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {error && (
            <div className="flex items-center justify-center gap-1.5 text-xs text-red-600 font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>Invalid administrative passcode</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-sm transition-colors shadow-md shadow-sky-600/20"
          >
            Unlock Portal
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
          Protected by <code className="font-mono">X-Admin-Passcode</code> server-only gate.
        </div>
      </div>
    </div>
  );
}
