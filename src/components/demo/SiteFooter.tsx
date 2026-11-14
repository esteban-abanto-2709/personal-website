"use client";

import { Gamepad2, Github, Linkedin } from "lucide-react";
import { useTranslations } from "@/hooks";

const socials = [
  { href: "https://www.linkedin.com/in/esteban-abanto", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/esteban-abanto-2709", icon: Github, label: "GitHub" },
  { href: "https://estebanabanto2709.itch.io", icon: Gamepad2, label: "Itch.io" },
];

export default function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-bone/10 px-6 py-10 md:px-10">
      <div className="flex flex-col gap-6 font-label text-xs uppercase tracking-[0.2em] text-bone/60 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p>{t("madeWith")}</p>
          <p>&copy; {new Date().getFullYear()} Esteban Abanto</p>
        </div>
        <div className="flex gap-6">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ember"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
