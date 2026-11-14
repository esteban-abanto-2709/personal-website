"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useTranslations } from "@/hooks";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EMAIL = "esteban.abanto.2709@gmail.com";

export default function ClosingContact() {
  const t = useTranslations("contact");
  const root = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-close-bg]",
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        const text = root.current?.querySelector<HTMLElement>("[data-close-text]");
        if (text) {
          gsap.fromTo(
            text.children,
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: text, start: "top 70%", once: true },
            },
          );
        }
      });
    },
    { scope: root },
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section ref={root} id="contact" className="relative flex min-h-svh items-center overflow-hidden">
      <div data-close-bg className="absolute inset-x-0 -inset-y-[10%]">
        <Image
          src="/images/city-night.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover blur-[1px]"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/60 to-ink/90" />
      <div className="grain" />

      <div className="relative z-10 w-full px-6 py-24 md:px-10">
        <div data-close-text className="flex flex-col gap-6">
          <h2 className="font-display" style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}>
            {t("title")}
          </h2>
          <p className="max-w-xl leading-relaxed text-bone/80 md:text-lg">{t("description")}</p>
          <button
            type="button"
            onClick={copy}
            aria-label={t("copyEmail")}
            className="cursor-pointer break-all text-left font-display text-ember transition-colors hover:text-bone md:break-normal"
            style={{ fontSize: "clamp(1.15rem, 6.6vw, 5.5rem)", lineHeight: 1 }}
          >
            {EMAIL}
          </button>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-label text-xs uppercase tracking-[0.25em]">
            <span aria-live="polite" className="inline-flex items-center gap-2">
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-ember" />
                  {t("emailCopied")}
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  {t("copyEmail")}
                </>
              )}
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 underline-offset-4 hover:text-ember hover:underline"
            >
              {t("write")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
