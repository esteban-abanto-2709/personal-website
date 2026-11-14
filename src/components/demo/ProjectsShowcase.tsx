"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { useMessages, useTranslations } from "@/hooks";
import { HOME } from "./home";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const linkClass =
  "inline-flex items-center gap-2 font-label text-xs uppercase tracking-[0.25em] underline-offset-4 hover:text-ember hover:underline";

export default function ProjectsShowcase() {
  const t = useTranslations("projects");
  const { projects } = useMessages();
  const root = useRef<HTMLElement>(null);
  const total = String(projects.items.length).padStart(2, "0");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("article").forEach((article) => {
          const frame = article.querySelector<HTMLElement>("[data-frame]");
          const parallax = article.querySelector<HTMLElement>("[data-parallax]");
          const text = article.querySelector<HTMLElement>("[data-text]");
          if (!frame || !parallax || !text) return;

          gsap.fromTo(
            frame,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: { trigger: frame, start: "top 85%", once: true },
            },
          );

          gsap.fromTo(
            parallax,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: frame,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );

          gsap.fromTo(
            text.children,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: text, start: "top 80%", once: true },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="projects" className="px-6 py-24 md:px-10 md:py-40">
      <h2
        className="mb-16 font-display md:mb-28"
        style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}
      >
        {t("title")}
      </h2>

      {projects.items.map((project, i) => {
        const internal = project.link.startsWith("/");
        const content = (
          <>
            {t("viewProject")}
            <ArrowUpRight className="h-4 w-4" />
          </>
        );

        return (
          <article
            key={project.title}
            className="mb-24 grid items-center gap-8 last:mb-0 md:mb-40 md:grid-cols-12 md:gap-12 md:last:mb-0"
          >
            <div
              data-frame
              className={`relative aspect-[16/10] overflow-hidden md:col-span-7 ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <div data-parallax className="absolute inset-x-0 -inset-y-[12%]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-ink/20" />
              <div className="grain" />
            </div>

            <div data-text className="flex flex-col gap-5 md:col-span-5">
              <p className="font-label text-xs uppercase tracking-[0.25em]">
                <span className="text-ember">
                  {String(i + 1).padStart(2, "0")} / {total}
                </span>
                <span className="mx-3 text-bone/30">|</span>
                <span className="text-bone/60">{project.year}</span>
              </p>
              <h3
                className="font-display"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 0.9 }}
              >
                {project.title}
              </h3>
              <p className="max-w-md leading-relaxed text-bone/80">{project.description}</p>
              <p className="font-label text-xs uppercase tracking-widest text-bone/60">
                {project.techStack.join(" · ")}
              </p>
              <div>
                {internal ? (
                  <Link href={`${HOME}${project.link}`} className={linkClass}>
                    {content}
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {content}
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
