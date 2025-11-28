"use client";

import { useScrollSpy, useScrollToSection, useTranslations } from "@/hooks";
import LanguageDropdown from './LanguageDropdown';

export default function Header() {
  const t = useTranslations('navigation');
  const activeSection = useScrollSpy({ offset: 100 });
  const scrollToSection = useScrollToSection();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-5xl px-6 py-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">

      <div className="flex items-center justify-between">

        <button
          className="flex items-center gap-3 cursor-pointer"
          type="button"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-inner">
            EA
          </div>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-white font-semibold text-sm">
              Esteban Abanto
            </span>
            <span className="text-gray-400 text-xs">
              {t('title')}
            </span>
          </div>
        </button>

        <div className="flex items-center gap-6">

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button
              className={`nav-link cursor-pointer ${activeSection === "experience" ? "active" : ""}`}
              type="button"
              onClick={() => scrollToSection("experience")}
            >
              {t('experience')}
            </button>

            <button
              className={`nav-link cursor-pointer ${activeSection === "projects" ? "active" : ""}`}
              type="button"
              onClick={() => scrollToSection("projects")}
            >
              {t('projects')}
            </button>

            <button
              className={`nav-link cursor-pointer ${activeSection === "contact" ? "active" : ""}`}
              type="button"
              onClick={() => scrollToSection("contact")}
            >
              {t('contact')}
            </button>
          </nav>

          <LanguageDropdown />
        </div>

      </div>
    </header>
  );
}
