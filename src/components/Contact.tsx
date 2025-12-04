"use client";

import { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";
import { useTranslations } from "@/hooks";

export default function Contact() {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = "esteban.abanto.2709@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Error al copiar email: ", err));
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-2">
          {t("title")}
        </h3>
        <p className="text-gray-400 mb-8">
          {t("description")}
        </p>

        <div className="glass-card p-6 rounded-2xl border border-white/10 inline-flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-white text-base sm:text-lg font-medium">
            <span className="text-2xl"><Mail /></span>
            <span className="break-all">esteban.abanto.2709@gmail.com</span>
          </div>
          <button
            onClick={copyEmail}
            className={`p-2 rounded-lg border transition-all duration-200 shrink-0 ${copied
                ? "bg-emerald-500/30 border-emerald-500/40 text-emerald-300"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            title={copied ? "✓ Copiado" : "Copiar email"}
            aria-label="Copiar email"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </section>
  );
}