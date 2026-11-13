"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Download, Gamepad2, Github, Linkedin } from "lucide-react";
import { useTranslations } from "@/hooks";
import { useLocale } from "@/lib/i18n/components/LocaleProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const socials = [
  { href: "https://www.linkedin.com/in/esteban-abanto", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/esteban-abanto-2709", icon: Github, label: "GitHub" },
  { href: "https://estebanabanto2709.itch.io", icon: Gamepad2, label: "Itch.io" },
];

export default function CinematicHero() {
  const t = useTranslations("hero");
  const { locale } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set("[data-fade]", { autoAlpha: 0, y: 24 });
        gsap.set("[data-line]", { yPercent: 110 });

        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(
            "[data-bg]",
            { scale: 1.3, filter: "blur(12px)" },
            { scale: 1.1, filter: "blur(0px)", duration: 1.8 },
            0,
          )
          .to("[data-line]", { yPercent: 0, duration: 1.2, stagger: 0.12 }, 0.3)
          .to("[data-fade]", { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08 }, ">-0.4");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              pin: true,
              scrub: true,
              start: "top top",
              end: "+=60%",
            },
          })
          .to("[data-bg]", { yPercent: 12, scale: 1.25, filter: "blur(8px)", ease: "none" }, 0)
          .to("[data-veil]", { opacity: 0.7, ease: "none" }, 0)
          .to("[data-title]", { scale: 0.6, transformOrigin: "left bottom", ease: "none" }, 0)
          .to("[data-side]", { autoAlpha: 0, ease: "none" }, 0);
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-svh overflow-hidden bg-ink">
      <div data-bg className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-ember/20 blur-3xl" />
      <div data-veil className="absolute inset-0 bg-ink opacity-0" />
      <div className="grain" />

      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div data-title className="min-w-0">
            <p data-fade className="mb-4 font-label text-xs uppercase tracking-[0.25em] text-ember">
              {t("title")}
            </p>
            <h1
              className="font-display"
              style={{ fontSize: "clamp(4rem, 15vw, 15rem)", lineHeight: 0.85 }}
            >
              <span className="block overflow-hidden">
                <span data-line className="block">Esteban</span>
              </span>
              <span className="block overflow-hidden">
                <span data-line className="block italic text-ember">Abanto</span>
              </span>
            </h1>
          </div>

          <div data-side className="flex max-w-md flex-col gap-5 md:pb-3">
            <p data-fade className="text-sm leading-relaxed text-bone/80 md:text-base">
              {t("description")}
            </p>
            <div data-fade>
              <a
                href={`/CV_Esteban_Abanto_${locale.toUpperCase()}.pdf`}
                download
                className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink"
              >
                <Download className="h-4 w-4" />
                {t("downloadCV")}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  data-fade
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest underline-offset-4 hover:underline"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
