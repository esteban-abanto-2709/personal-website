import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ArrowLeft, Tv, Users, Trophy, Code, Award } from "lucide-react";
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
                  📺 TV Nacional
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Que Gane el Mejor
                </h1>
                <p className="text-xl text-gray-400">
                  Programa concurso de conocimiento para estudiantes de secundaria
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
                <div className="text-2xl font-bold text-emerald-400">6</div>
                <div className="text-sm text-gray-400">Regiones</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">TV Perú</div>
                <div className="text-sm text-gray-400">Canal</div>
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
                “Que Gane el Mejor” es un programa concurso de TV Perú que reúne a estudiantes de quinto año de secundaria de diferentes colegios del país para demostrar sus conocimientos y habilidades en diversos desafíos educativos.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                El programa se ha consolidado como un espacio donde los estudiantes peruanos demuestran su capacidad para competir con rigor, liderar con carácter y asumir desafíos con determinación.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cada competencia reúne a equipos de siete estudiantes que participan en juegos de conocimiento y destreza, como “Personajes”, “Mi libro favorito” y “Personajes”, en un ambiente de compañerismo y sana competencia.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-emerald-400" />
                Formato de Competencia
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Equipos:</strong> 7 estudiantes de 5to de secundaria por colegio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Alcance nacional:</strong> Colegios de Áncash, Tumbes, Ica, Huánuco, Junín y Lima</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Rondas de juego:</strong> Desafíos de conocimiento general, literatura, y destreza física y mental</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Gran final:</strong> Transmisión especial de 2 horas con más de 600 estudiantes presentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Premios:</strong> Laptops, becas integrales y reconocimientos académicos</span>
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
                <h3 className="text-lg font-semibold text-white mb-3">Sistema de Gestión de Competencias</h3>
                <p className="text-gray-300 leading-relaxed">
                  Desarrollé el software que gestiona toda la lógica del programa en tiempo real, permitiendo controlar el flujo de la competencia, el registro de puntajes, y la visualización de resultados en pantalla durante la transmisión en vivo.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Gestión de Equipos y Puntajes</h3>
                <p className="text-gray-300 leading-relaxed">
                  Implementé el sistema de registro y seguimiento de equipos participantes, con capacidad para gestionar hasta 28 colegios simultáneamente. El sistema calcula y actualiza los puntajes en tiempo real, permitiendo a los operadores mantener el control total durante las diferentes rondas de juego.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Integración con Producción en Vivo</h3>
                <p className="text-gray-300 leading-relaxed">
                  El software se integra con el sistema de producción de TV Perú para controlar elementos visuales en pantalla, gráficos de puntajes, transiciones entre rondas, y la presentación de información de los equipos participantes. Diseñado para operar sin fallos durante transmisiones en vivo de hasta 2 horas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Múltiples Modalidades de Juego</h3>
                <p className="text-gray-300 leading-relaxed">
                  Implementé la lógica para diferentes tipos de rondas: preguntas de conocimiento general, desafíos literarios, y actividades recreativas. Cada modalidad tiene su propio sistema de puntuación y reglas específicas que el software gestiona automáticamente.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Stack Técnico</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                  C#
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                  .NET
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                  Real-time Systems
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                  Broadcast Software
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                  Live TV Integration
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-emerald-400" />
              Impacto y Alcance
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Alcance Nacional</p>
                  <p className="text-gray-400 text-sm">Más de 600 estudiantes de 28 colegios de 6 regiones del Perú (Áncash, Tumbes, Ica, Huánuco, Junín y Lima)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Transmisión en Vivo</p>
                  <p className="text-gray-400 text-sm">Programa transmitido en directo por TV Perú, con finales especiales de hasta 2 horas de duración</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Impacto Educativo</p>
                  <p className="text-gray-400 text-sm">Plataforma que promueve el mérito académico y brinda oportunidades educativas a través de becas y premios tecnológicos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Operación Sin Fallos</p>
                  <p className="text-gray-400 text-sm">Software operado exitosamente durante múltiples temporadas sin interrupciones técnicas en transmisiones en vivo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Evento de Alto Perfil</p>
                  <p className="text-gray-400 text-sm">Gran final realizada en el Salón de Los Incas del Ministerio de Cultura, respaldada por el IRTP</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}