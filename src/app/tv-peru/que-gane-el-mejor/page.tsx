import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ArrowLeft, Tv, Users, Server, Code, Check } from "lucide-react";
import Link from "next/link";

export default function QueGaneElMejorPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto">

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Proyectos
          </Link>

          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Tv className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 mb-3">
                  Sistema en producción · TV nacional
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Que Gane el Mejor
                </h1>
                <p className="text-xl text-gray-400">
                  Software en tiempo real que opera un concurso escolar en vivo por TV Perú, migrado de Unity a un stack web moderno.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">600+</div>
                <div className="text-sm text-gray-400">Estudiantes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">28</div>
                <div className="text-sm text-gray-400">Colegios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">En vivo</div>
                <div className="text-sm text-gray-400">Cero fallos al aire</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">Next.js</div>
                <div className="text-sm text-gray-400">Stack actual</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-emerald-400" />
                Sobre el Programa
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                “Que Gane el Mejor” es un programa concurso de TV Perú que enfrenta a dos colegios por episodio, con equipos de siete estudiantes de quinto de secundaria compitiendo en juegos de conocimiento.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Sale al aire en vivo, con juegos como “Personajes” y “Mi libro favorito”, y grandes finales que reúnen a cientos de estudiantes de colegios de distintas regiones del país.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Server className="w-6 h-6 text-emerald-400" />
                El Sistema en Vivo
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Tiempo real:</strong> gestiona en vivo los juegos en pantalla, los puntajes y el flujo del programa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Operado desde el switcher:</strong> yo mismo lo opero durante la transmisión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Sin caídas:</strong> cualquier fallo debe recuperarse en segundos, en pleno directo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Desarrollador único:</strong> lo construyo y mantengo yo solo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-emerald-400" />
              Mi Rol y Contribución Técnica
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Migración de Unity a la web</h3>
                <p className="text-gray-300 leading-relaxed">
                  Migré todo el sistema de una aplicación Unity a un stack web moderno: Next.js desplegado en Vercel, Supabase para almacenamiento, base de datos y control de acceso, y Cloudflare. Hoy está al aire. Aproveché el versionado por despliegue de Vercel para tener rollback instantáneo: si una versión falla, vuelvo a la anterior sin sacar el programa del aire.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Editor en vivo y arquitectura load-first</h3>
                <p className="text-gray-300 leading-relaxed">
                  Construí un editor online que permite reposicionar imágenes, video y fondos en directo — algo imposible con el compilado de Unity anterior. Todo sobre una arquitectura load-first, con manejo cuidadoso de la RAM para garantizar renderizado sin interrupciones durante el programa en vivo.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Pipeline de datos y operación diaria</h3>
                <p className="text-gray-300 leading-relaxed">
                  La producción sube los datos del día a la nube y el sistema los descarga para operar el programa. Un esquema de datos “en vivo” y “de ejemplo” permite que los conductores revisen la información desde tablets y que la producción corrija datos al instante desde detrás de cámaras.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Votación del público en vivo</h3>
                <p className="text-gray-300 leading-relaxed">
                  Desarrollé un sistema de votación por QR para que los televidentes apoyen a un colegio, con protecciones anti-abuso apoyadas en Cloudflare Tunnel para evitar votos múltiples y ataques.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Stack Técnico</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Vercel", "Supabase", "Cloudflare", "Real-time", "C# / Unity (legacy)"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-emerald-400" />
              Impacto y Alcance
            </h2>
            <div className="space-y-4">
              {[
                ["En producción, al aire", "Sistema operando en vivo en televisión nacional durante múltiples temporadas, sin caídas al aire."],
                ["Migración a web sin sacar el programa del aire", "El sistema pasó de Unity a Next.js / Vercel / Supabase con el programa al aire, usando el rollback instantáneo como red de seguridad."],
                ["Alcance nacional", "Más de 600 estudiantes de 28 colegios de distintas regiones del Perú."],
                ["Desarrollador único", "Diseño, desarrollo y operación en vivo a cargo de una sola persona."],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{title}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
