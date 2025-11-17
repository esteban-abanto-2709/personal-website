"use client";

import { useState } from "react";

export default function Contact() {
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
          Contáctame
        </h2>

        <div className="glass-card p-8 rounded-2xl border border-white/10">
          <p className="text-gray-400 mb-12 text-base md:text-lg leading-relaxed">
            ¿Tienes un proyecto o colaboración en mente? <br />
            Si crees que tu idea encaja con mi perfil, coordinemos y <br />
            veamos si podemos trabajar juntos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <span className="text-white text-lg font-medium text-center sm:text-left">
              esteban.abanto.2709@gmail.com
            </span>
            <button
              onClick={copyEmail}
              className={`copy-button ${copied ? "bg-emerald-500/40" : ""
                }`}
              title="Copiar email"
              aria-label="Copiar email"
            >
              {copied ? (
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
              )}
            </button>
          </div>

          {showNotification && (
            <div className="copy-notification">✓ Email copiado al clipboard</div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="mailto:esteban.abanto.2709@gmail.com?subject=Oportunidad laboral&body=Hola Esteban,%0A%0AMe interesa conocer más sobre tu perfil profesional.%0A%0ASaludos"
              className="contact-btn bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-500/30"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Enviar propuesta
            </a>

            <a
              href="https://wa.me/51970267420?text=Hola%20Esteban%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20conocer%20más%20sobre%20tu%20perfil%20profesional."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn bg-green-500/20 hover:bg-green-500/30 text-green-300 border-green-500/30"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Hablemos
            </a>

            <a
              href="https://www.linkedin.com/in/esteban-abanto/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/30"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Conectemonos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}