"use client";

import { useTranslations } from "@/hooks";
import { useState } from "react";
import { Mail, MessageCircle, Linkedin, Copy, Check } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  const [showNotification, setShowNotification] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = "esteban.abanto.2709@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowNotification(true);
        setCopied(true);

        setTimeout(() => {
          setShowNotification(false);
          setCopied(false);
        }, 2000);
      })
      .catch((err) => console.error("Error al copiar email: ", err));
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white my-16">
          {t("title")}
        </h2>

        <div className="glass-card p-8 rounded-2xl border border-white/10">
          <p className="text-gray-400 mb-12 text-base md:text-lg leading-relaxed">
            {t("description")} <br />
            {t("description2")} <br />
            {t("description3")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <span className="text-white text-lg font-medium text-center sm:text-left">
              esteban.abanto.2709@gmail.com
            </span>
            <button
              onClick={copyEmail}
              className={`copy-button ${copied ? "bg-emerald-500/40" : ""}`}
              title={t("copyEmail")}
              aria-label="Copiar email"
            >
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>

          {showNotification && (
            <div className="copy-notification">{t("emailCopied")}</div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="mailto:esteban.abanto.2709@gmail.com?subject=Oportunidad laboral&body=Hola Esteban,%0A%0AMe interesa conocer más sobre tu perfil profesional.%0A%0ASaludos"
              className="contact-btn bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-500/30"
            >
              <Mail className="w-6 h-6" />
              {t("sendProposal")}
            </a>

            <a
              href="https://wa.me/51970267420?text=Hola%20Esteban%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20conocer%20más%20sobre%20tu%20perfil%20profesional."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn bg-green-500/20 hover:bg-green-500/30 text-green-300 border-green-500/30"
            >
              <MessageCircle className="w-6 h-6" />
              {t("letsTalk")}
            </a>

            <a
              href="https://www.linkedin.com/in/esteban-abanto/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/30"
            >
              <Linkedin className="w-6 h-6" />
              {t("connect")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
