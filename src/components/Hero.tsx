"use client";

import Image from "next/image";

import { useScrollToSection } from "@/hooks";

export default function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-gray-400 text-base sm:text-lg">Hola,</p>
                <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight whitespace-nowrap">
                  Soy{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                    Esteban Abanto
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-emerald-400 font-medium">
                  Desarrollador de Software
                </h2>
                <p className="text-gray-300 max-w-xl leading-relaxed">
                  Tengo experiencia construyendo aplicaciones web modernas,
                  videojuegos interactivos y soluciones full stack. Me
                  especializo en crear productos digitales con enfoque en
                  rendimiento, diseño y experiencia de usuario.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  className="bg-linear-to-br from-emerald-500 to-cyan-500 hover:opacity-90 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg transition"
                  type="button"
                  onClick={() => scrollToSection("projects")}
                >
                  Ir a Proyectos
                </button>

                <a
                  href="/CV_Esteban_Abanto_EN.pdf"
                  download
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition"
                >
                  Descargar CV
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80">
                <div className="w-full h-full rounded-full bg-linear-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner overflow-hidden">
                  <Image
                    src="/avatar.webp"
                    alt="Esteban Abanto"
                    width={256}
                    height={256}
                    priority
                    draggable={false}
                    className="w-64 h-64 object-cover rounded-full border border-white/20 select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}