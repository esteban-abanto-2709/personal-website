import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ArrowLeft, Tv, Users, Server, Code, Check } from "lucide-react";
import Link from "next/link";

export default function PukllaspaYachayPage() {
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
                  Sistema en tiempo real · TV nacional
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Pukllaspa Yachay
                </h1>
                <p className="text-xl text-gray-400">
                  El origen del sistema en vivo que operé para TV Perú: un concurso diario en quechua, construido y operado en tiempo real.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">2021</div>
                <div className="text-sm text-gray-400">Estreno</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">~2.5 años</div>
                <div className="text-sm text-gray-400">Al aire</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">Diario</div>
                <div className="text-sm text-gray-400">En vivo, 18:00</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">20+</div>
                <div className="text-sm text-gray-400">Juegos en pantalla</div>
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
                Pukllaspa Yachay (“Aprende Jugando”) fue un programa concurso de TV Perú para promover el aprendizaje del quechua, con una competencia diaria entre tres participantes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Se transmitió en vivo en horario estelar durante alrededor de dos años y medio. Fue el primer programa para el que desarrollé el sistema, y el punto de partida de todo lo que vino después.
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
                  <span><strong className="text-white">Tiempo real:</strong> control del flujo del programa, rondas y puntajes en directo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Datos diarios:</strong> cada emisión requería nuevas preguntas, imágenes y estructuras por juego</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Tolerante a fallos:</strong> versionado con vuelta atrás para recuperarse en segundos en pleno directo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Desarrollador único:</strong> construido y operado por mí</span>
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
                <h3 className="text-lg font-semibold text-white mb-3">Sistema de competencia en tiempo real</h3>
                <p className="text-gray-300 leading-relaxed">
                  Desarrollé en Unity/C# el software que controla el programa en vivo: gestión de participantes, rondas, y más de 20 juegos interactivos en pantalla, cada uno con su propio sistema de puntuación, operado por mí durante la transmisión.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Colector de datos diario</h3>
                <p className="text-gray-300 leading-relaxed">
                  Como el programa salía a diario, construí un sistema aparte para cargar los datos de cada emisión — preguntas, imágenes y estructuras distintas por juego — de forma que la producción pudiera preparar el contenido del día sin tocar el software de juegos.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Confiabilidad en directo</h3>
                <p className="text-gray-300 leading-relaxed">
                  Implementé un esquema de versionado con vuelta atrás: el sistema trabajaba con la última versión, pero podía caer a una anterior si algo fallaba. En un programa en vivo cualquier error tenía que resolverse en segundos, y el sistema operó temporadas completas sin caídas al aire.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Integración con producción</h3>
                <p className="text-gray-300 leading-relaxed">
                  El software se integraba con la producción de TV Perú para controlar los gráficos en pantalla, los puntajes y las transiciones entre segmentos del programa.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Stack Técnico</h3>
              <div className="flex flex-wrap gap-2">
                {["Unity", "C#", ".NET", "Real-time", "Broadcast Software"].map((tech) => (
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
                ["Transmisión nacional en vivo", "Programa emitido en horario estelar por TV Perú durante alrededor de dos años y medio."],
                ["Operación sin fallos", "El sistema operó temporadas completas en directo, con recuperación en segundos ante cualquier incidencia."],
                ["Base de todo lo que siguió", "El sistema que construí aquí fue el punto de partida del que hoy opera “Que Gane el Mejor”, ya migrado a web."],
                ["Preservación cultural", "Aporte a la promoción y enseñanza del idioma quechua en el Perú."],
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
