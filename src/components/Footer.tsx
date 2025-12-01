"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import SocialIcon from "@/ui/SocialIcon";

import { useTranslations } from "@/hooks";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-24 py-6 border-t border-white/10 text-center text-sm text-gray-500">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="mb-2 md:mb-0">
          <p>{t("madeWith")}</p>
          <p>&copy; 2025 Esteban Abanto.</p>
        </div>

        <div className="flex items-center space-x-4">
          <SocialIcon
            href="https://www.linkedin.com/in/esteban-abanto/"
            ariaLabel="LinkedIn"
            Icon={Linkedin}
            glowClass="bg-blue-500/20"
            hoverClass="group-hover:text-blue-400"
          />

          <SocialIcon
            href="https://github.com/esteban-abanto-2709"
            ariaLabel="GitHub"
            Icon={Github}
            glowClass="bg-purple-500/20"
            hoverClass="group-hover:text-purple-400"
          />

          <SocialIcon
            href="mailto:esteban.abanto.2709@gmail.com"
            ariaLabel="Email"
            Icon={Mail}
            glowClass="bg-yellow-500/20"
            hoverClass="group-hover:text-yellow-400"
          />
        </div>
      </div>
    </footer>
  );
}
