"use client";

import Image from "next/image";
import { useScrollToSection, useTranslations } from "@/hooks";

export default function Hero() {
  const t = useTranslations("hero");
  const scrollToSection = useScrollToSection();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight text-center lg:text-left lg:col-start-1 lg:row-start-1">
              {t("iam")}{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                Esteban Abanto
              </span>
            </h1>

            <div className="flex justify-center lg:justify-end lg:col-start-2 lg:row-start-1 lg:row-span-3">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <div className="w-full h-full rounded-full p-5 bg-linear-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner overflow-hidden">
                  <Image
                    src="/avatar.webp"
                    alt="Esteban Abanto"
                    width={512}
                    height={512}
                    priority
                    draggable={false}
                    className="w-full h-full object-cover rounded-full border border-white/20 select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed text-base sm:text-lg lg:col-start-1 lg:row-start-2">
              {t("description")}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 lg:col-start-1 lg:row-start-3">
              <button
                className="bg-linear-to-br from-emerald-500 to-cyan-500 hover:opacity-90 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg transition"
                type="button"
                onClick={() => scrollToSection("projects")}
              >
                {t("viewProjects")}
              </button>

              <a
                href="/CV_Esteban_Abanto_EN.pdf"
                download
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition"
              >
                {t("downloadCV")}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
