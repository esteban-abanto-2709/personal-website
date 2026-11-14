"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMessages, useTranslations } from "@/hooks";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ExperienceTimeline() {
  const t = useTranslations("experience");
  const { experience } = useMessages();
  const root = useRef<HTMLElement>(null);

  const featured = experience.jobs.find((job) => job.highlights?.length);
  const rest = experience.jobs.filter((job) => job !== featured);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const band = root.current?.querySelector<HTMLElement>("[data-band]");
        if (band) {
          gsap.fromTo(
            "[data-band-bg]",
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: band,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        const text = root.current?.querySelector<HTMLElement>("[data-band-text]");
        if (text) {
          gsap.fromTo(
            text.children,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: text, start: "top 75%", once: true },
            },
          );
        }

        const stats = root.current?.querySelector<HTMLElement>("[data-stats]");
        if (stats) {
          gsap.fromTo(
            "[data-stat]",
            { yPercent: 110 },
            {
              yPercent: 0,
              stagger: 0.12,
              duration: 1.1,
              ease: "power4.out",
              scrollTrigger: { trigger: stats, start: "top 80%", once: true },
            },
          );
        }

        gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
          gsap.fromTo(
            row,
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 85%", once: true },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="experience" className="py-24 md:py-40">
      <h2
        className="mb-16 px-6 font-display md:mb-28 md:px-10"
        style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}
      >
        {t("title")}
      </h2>

      {featured && (
        <div data-band className="relative flex min-h-svh items-end overflow-hidden">
          <div data-band-bg className="absolute inset-x-0 -inset-y-[10%]">
            <Image
              src="/images/tv-on-air.jpg"
              alt=""
              fill
              sizes="100vw"
              className="scale-105 object-cover blur-[2px]"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/30" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-ember/15 blur-3xl" />
          <div className="grain" />

          <div className="relative z-10 grid w-full gap-12 px-6 py-16 md:grid-cols-12 md:items-end md:px-10 md:py-24">
            <div data-band-text className="flex flex-col gap-5 md:col-span-7">
              <p className="font-label text-xs uppercase tracking-[0.25em]">
                <span className="text-ember">{featured.company}</span>
                <span className="mx-3 text-bone/30">|</span>
                <span className="text-bone/60">{featured.years}</span>
              </p>
              <h3
                className="font-display"
                style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)", lineHeight: 0.95 }}
              >
                {featured.title}
              </h3>
              <p className="max-w-xl leading-relaxed text-bone/80">{featured.description}</p>
              <p className="font-label text-xs uppercase tracking-widest text-bone/60">
                {featured.stack.join(" · ")}
              </p>
            </div>

            <dl data-stats className="grid grid-cols-3 gap-6 md:col-span-5 md:gap-8">
              {featured.highlights?.map((h) => (
                <div key={h.label} className="flex flex-col-reverse gap-2">
                  <dt className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-bone/70">
                    {h.label}
                  </dt>
                  <dd className="overflow-hidden">
                    <span
                      data-stat
                      className="block font-display text-ember"
                      style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", lineHeight: 0.85 }}
                    >
                      {h.value}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}

      <ol className="mt-16 px-6 md:mt-28 md:px-10">
        {rest.map((job) => (
          <li
            key={`${job.company}-${job.years}`}
            data-row
            className="grid gap-3 border-t border-bone/10 py-8 last:border-b md:grid-cols-12 md:gap-8 md:py-10"
          >
            <p className="font-label text-xs uppercase tracking-[0.2em] text-bone/60 md:col-span-3">
              {job.years}
            </p>
            <div className="md:col-span-5">
              <h3 className="font-display text-3xl md:text-4xl">{job.title}</h3>
              <p className="mt-2 font-label text-xs uppercase tracking-[0.2em] text-ember">
                {job.company}
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="text-sm leading-relaxed text-bone/70">{job.description}</p>
              <p className="mt-3 font-label text-[0.65rem] uppercase tracking-widest text-bone/50">
                {job.stack.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
