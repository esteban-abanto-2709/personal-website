"use client";

import { Fragment, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMessages, useTranslations } from "@/hooks";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ORDER = ["languages", "backend", "frontend", "databases", "devops", "ai"] as const;

function Track({ items, italic }: { items: string[]; italic?: boolean }) {
  return (
    <div data-track className="flex w-max">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex">
          {items.map((item, i) => (
            <Fragment key={`${copy}-${i}`}>
              <span
                className={`px-6 font-display md:px-10 ${italic ? "italic text-bone/50" : ""}`}
                style={{ fontSize: "clamp(3rem, 8vw, 8rem)", lineHeight: 1 }}
              >
                {item}
              </span>
              <span
                aria-hidden="true"
                className="self-center text-ember"
                style={{ fontSize: "clamp(0.9rem, 2.4vw, 2.4rem)" }}
              >
                ●
              </span>
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function StackMarquee() {
  const t = useTranslations("stack");
  const { stack } = useMessages();
  const root = useRef<HTMLElement>(null);

  const lane1 = [...stack.skills.languages, ...stack.skills.backend];
  const lane2 = [...stack.skills.frontend, ...stack.skills.databases, ...stack.skills.devops];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tracks = gsap.utils.toArray<HTMLElement>("[data-track]");
        const loops = tracks.map((track, i) =>
          gsap.fromTo(
            track,
            { xPercent: i === 0 ? 0 : -50 },
            { xPercent: i === 0 ? -50 : 0, ease: "none", repeat: -1, duration: 40 },
          ),
        );

        ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 400, 5);
            loops.forEach((loop) => {
              gsap.to(loop, { timeScale: boost, duration: 0.2, overwrite: true });
              gsap.to(loop, { timeScale: 1, duration: 1, delay: 0.2, ease: "power2.out" });
            });
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
          gsap.fromTo(
            row,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 88%", once: true },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="stack" className="overflow-hidden py-24 md:py-40">
      <h2
        className="mb-16 px-6 font-display md:mb-24 md:px-10"
        style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}
      >
        {t("title")}
      </h2>

      <div aria-hidden="true" className="flex flex-col gap-4">
        <div className="flex whitespace-nowrap">
          <Track items={lane1} />
        </div>
        <div className="flex whitespace-nowrap">
          <Track items={lane2} italic />
        </div>
      </div>

      <dl className="mt-20 px-6 md:mt-32 md:px-10">
        {ORDER.map((key) => (
          <div
            key={key}
            data-row
            className="grid gap-3 border-t border-bone/10 py-6 last:border-b md:grid-cols-12 md:gap-8 md:py-8"
          >
            <dt className="font-label text-xs uppercase tracking-[0.2em] text-ember md:col-span-3">
              {stack.categories[key]}
            </dt>
            <dd className="text-lg leading-snug text-bone/85 md:col-span-9 md:text-2xl">
              {stack.skills[key].join(" · ")}
            </dd>
          </div>
        ))}
      </dl>

      {stack.note && (
        <p className="mt-10 px-6 font-label text-xs uppercase tracking-[0.2em] text-bone/50 md:px-10">
          {stack.note}
        </p>
      )}
    </section>
  );
}
