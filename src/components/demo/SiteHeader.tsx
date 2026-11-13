"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { useScrollSpy, useTranslations } from "@/hooks";
import { useLocale } from "@/lib/i18n/components/LocaleProvider";

const links = ["experience", "projects", "stack"] as const;
const locales = ["es", "en"] as const;

export default function SiteHeader() {
  const t = useTranslations("navigation");
  const { locale, setLocale } = useLocale();
  const lenis = useLenis();
  const active = useScrollSpy();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-6 py-4 transition-colors duration-300 md:px-10 ${
        scrolled ? "border-bone/10 bg-ink/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <button
        type="button"
        onClick={() => lenis?.scrollTo(0)}
        className="cursor-pointer font-label text-xs uppercase tracking-[0.25em]"
      >
        Esteban Abanto
      </button>

      <div className="flex items-center gap-8">
        <nav className="hidden gap-8 md:flex">
          {links.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => lenis?.scrollTo(`#${id}`)}
              className={`cursor-pointer font-label text-xs uppercase tracking-[0.25em] transition-colors ${
                active === id ? "text-ember" : "text-bone/70 hover:text-bone"
              }`}
            >
              {t(id)}
            </button>
          ))}
        </nav>

        <div
          role="group"
          aria-label="Language"
          className="flex items-center gap-2 font-label text-xs uppercase tracking-[0.25em]"
        >
          {locales.map((l, i) => (
            <span key={l} className="flex items-center gap-2">
              {i > 0 && <span className="text-bone/60">/</span>}
              <button
                type="button"
                aria-pressed={locale === l}
                onClick={() => setLocale(l)}
                className={`cursor-pointer ${locale === l ? "text-ember" : "text-bone/60 hover:text-bone"}`}
              >
                {l.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
