'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'edba_admin_passcode';

export function useAdminPasscode() {
  const [passcode, setPasscode] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPasscode(stored);
        setIsUnlocked(true);
      }
    } catch {
      // ignore
    } finally {
      setIsChecking(false);
    }
  }, []);

  const unlock = (entered: string): boolean => {
    const trimmed = entered.trim();
    if (trimmed.length > 0) {
      setPasscode(trimmed);
      setIsUnlocked(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, trimmed);
      } catch {
        // ignore
      }
      return true;
    }
    return false;
  };

  const lock = () => {
    setPasscode('');
    setIsUnlocked(false);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const getAuthHeaders = (): Record<string, string> => {
    return {
      'Content-Type': 'application/json',
      'X-Admin-Passcode': passcode,
    };
  };

  return {
    passcode,
    isUnlocked,
    isChecking,
    unlock,
    lock,
    getAuthHeaders,
  };
}
