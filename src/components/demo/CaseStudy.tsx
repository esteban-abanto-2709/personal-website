"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowLeft } from "lucide-react";
import { useMessages } from "@/hooks";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { HOME } from "./home";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const covers = {
  queGane: "/images/projects/que-gane-el-mejor.jpg",
  pukllaspa: "/images/projects/pukllaspa-yachay.jpg",
};

const blockClass =
  "grid gap-6 border-b border-bone/10 px-6 py-16 md:grid-cols-12 md:gap-8 md:px-10 md:py-24";
const headingClass =
  "font-label text-xs uppercase tracking-[0.25em] text-ember md:col-span-3";

export default function CaseStudy({ which }: { which: "queGane" | "pukllaspa" }) {
  const { back, sections, ...pages } = useMessages().tvPeru;
  const p = pages[which];
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo("[data-cover-title]", { yPercent: 110 }, { yPercent: 0, duration: 1.2 })
          .fromTo(
            "[data-cover-fade]",
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.9 },
          );

        gsap.fromTo(
          "[data-cover-bg]",
          { yPercent: 0 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-cover]",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          "[data-stat]",
          { yPercent: 110 },
          {
            yPercent: 0,
            stagger: 0.1,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: { trigger: "[data-stats]", start: "top 85%", once: true },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-block]").forEach((block) => {
          gsap.fromTo(
            block,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: block, start: "top 80%", once: true },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <>
      <SiteHeader />
      <main ref={root}>
        <section data-cover className="relative flex min-h-svh items-end overflow-hidden">
          <div data-cover-bg className="absolute inset-x-0 -inset-y-[10%]">
            <Image
              src={covers[which]}
              alt=""
              fill
              priority
              sizes="100vw"
              className="scale-105 object-cover blur-[2px]"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/20" />
          <div className="grain" />

          <div className="relative z-10 flex w-full flex-col gap-6 px-6 pb-16 pt-32 md:px-10 md:pb-24">
            <Link
              data-cover-fade
              href={`${HOME}#projects`}
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-[0.25em] text-bone/70 hover:text-ember"
            >
              <ArrowLeft className="h-4 w-4" />
              {back}
            </Link>
            <p
              data-cover-fade
              className="font-label text-xs uppercase tracking-[0.25em] text-ember"
            >
              {p.badge}
            </p>
            <h1
              className="overflow-hidden font-display"
              style={{ fontSize: "clamp(3.5rem, 12vw, 12rem)", lineHeight: 0.88 }}
            >
              <span data-cover-title className="block">
                {p.title}
              </span>
            </h1>
            <p
              data-cover-fade
              className="max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl"
            >
              {p.subtitle}
            </p>
          </div>
        </section>

        <dl
          data-stats
          className="grid grid-cols-2 gap-8 border-y border-bone/10 px-6 py-12 md:grid-cols-4 md:px-10 md:py-16"
        >
          {p.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-2">
              <dt className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-bone/70">
                {s.label}
              </dt>
              <dd className="overflow-hidden">
                <span
                  data-stat
                  className="block font-display text-ember"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)", lineHeight: 0.9 }}
                >
                  {s.value}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <section data-block className={blockClass}>
          <h2 className={headingClass}>{sections.about}</h2>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-bone/85 md:col-span-9 md:text-2xl">
            {p.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </section>

        <section data-block className={blockClass}>
          <h2 className={headingClass}>{sections.system}</h2>
          <ul className="md:col-span-9">
            {p.system.map((s) => (
              <li
                key={s.label}
                className="border-t border-bone/10 py-4 first:border-t-0 first:pt-0"
              >
                <p className="font-display text-2xl md:text-3xl">{s.label}</p>
                <p className="text-bone/75">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section data-block className={blockClass}>
          <h2 className={headingClass}>{sections.role}</h2>
          <ol className="md:col-span-9">
            {p.role.map((r, i) => (
              <li
                key={r.title}
                className="grid gap-3 border-t border-bone/10 py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-6"
              >
                <p className="font-label text-xs tracking-[0.25em] text-ember md:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-3xl leading-tight md:col-span-4 md:text-4xl">
                  {r.title}
                </h3>
                <p className="leading-relaxed text-bone/75 md:col-span-6">{r.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section data-block className={blockClass}>
          <h2 className={headingClass}>{sections.stack}</h2>
          <p className="font-display text-3xl leading-tight md:col-span-9 md:text-5xl">
            {p.tech.join(" · ")}
          </p>
        </section>

        <section data-block className={blockClass}>
          <h2 className={headingClass}>{sections.impact}</h2>
          <div className="grid gap-10 md:col-span-9 md:grid-cols-2">
            {p.impact.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-3xl text-ember md:text-4xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-bone/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
