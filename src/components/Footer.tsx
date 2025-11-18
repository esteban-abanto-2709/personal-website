"use client";

import { useTranslations } from "@/hooks";

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="mt-24 py-8 border-t border-white/10 text-center text-sm text-gray-500">
      <p>&copy; 2025 Esteban Abanto. {t('madeWith')}</p>
      <div className="mt-4 flex justify-center gap-6">
        <a
          href="mailto:esteban.abanto.2709@gmail.com"
          className="hover:text-white transition"
        >
          esteban.abanto.2709@gmail.com
        </a>
        <a
          href="https://github.com/esteban-abanto-2709"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/esteban-abanto"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}