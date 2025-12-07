"use client";

import { Github, Linkedin, Gamepad2 } from "lucide-react";
import SocialIcon from "@/ui/SocialIcon";
import { useTranslations } from "@/hooks";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-24 py-8 border-t border-white/10 text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
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
              glowClass="bg-green-500/20"
              hoverClass="group-hover:text-green-400"
            />

            <SocialIcon
              href="https://estebanabanto2709.itch.io"
              ariaLabel="Itch.io"
              Icon={Gamepad2}
              glowClass="bg-red-500/20"
              hoverClass="group-hover:text-red-400"
            />
          </div>
        </div>

      </div>
    </footer>
  );
}