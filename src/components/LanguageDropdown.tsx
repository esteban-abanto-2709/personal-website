"use client";

import { useState, useEffect, useRef } from 'react';
import { useLocale } from '../lib/i18n/components/LocaleProvider';
import { Locale } from '@/lib/i18n';

export default function LanguageDropdown() {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-white transition flex items-center gap-2"
        aria-label="Select language"
      >
        <span>{locale.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-24 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
          <button
            onClick={() => handleChange('es')}
            className={`w-full px-4 py-2 text-left text-sm transition ${locale === 'es'
                ? 'bg-emerald-500/20 text-emerald-300'
                : 'text-white hover:bg-white/10'
              }`}
          >
            ES
          </button>
          <button
            onClick={() => handleChange('en')}
            className={`w-full px-4 py-2 text-left text-sm transition ${locale === 'en'
                ? 'bg-emerald-500/20 text-emerald-300'
                : 'text-white hover:bg-white/10'
              }`}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
}