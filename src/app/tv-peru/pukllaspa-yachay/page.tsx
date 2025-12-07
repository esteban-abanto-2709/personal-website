import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ArrowLeft, Tv, Users, Trophy, Code, Award } from "lucide-react";
import Link from "next/link";

export default function PukllaspaYachayPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto">

          <Link
            href="/"
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
                  Pukllaspa Yachay
                </h1>
                <p className="text-xl text-gray-400">
                  “Aprende Jugando” - Programa concurso en quechua
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">2021</div>
                <div className="text-sm text-gray-400">Estreno</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">18:00</div>
                <div className="text-sm text-gray-400">Horario estelar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">3</div>
                <div className="text-sm text-gray-400">Participantes/día</div>
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
                Pukllaspa Yachay es un programa concurso de entretenimiento transmitido por TV Perú que busca promover el aprendizaje del idioma quechua de una manera divertida y dinámica.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conducido por el actor Juan Carlos Rey de Castro y la periodista Iris Cárdenas, el programa presenta una competencia diaria entre tres participantes, quienes se enfrentan a diversos desafíos lingüísticos y culturales.
              </p>
              <p className="text-gray-300 leading-relaxed">
                El show cuenta con un personaje especial llamado “Yachaq” (el sabio), quien actúa como juez durante las competencias.
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
                  <span><strong className="text-white">Competencia diaria:</strong> 3 participantes nuevos cada día</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Ganador diario:</strong> Avanza a la competencia semanal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Semifinales:</strong> Los campeones semanales compiten entre sí</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong className="text-white">Horario estelar:</strong> Transmitido a las 6:00 PM, compitiendo con programas de entretenimiento de otros canales</span>
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
                <h3 className="text-lg font-semibold text-white mb-3">Sistema de Competencia en Tiempo Real</h3>
                <p className="text-gray-300 leading-relaxed">
                  Desarrollé el sistema de gestión de competencias que permite controlar el flujo del programa en vivo, incluyendo la gestión de participantes, rondas de preguntas, y el sistema de puntuación en tiempo real.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Integración con Producción</h3>
                <p className="text-gray-300 leading-relaxed">
                  El software se integra con el sistema de producción de TV Perú, permitiendo a los operadores controlar elementos visuales en pantalla, gráficos de puntajes, y transiciones entre segmentos del programa.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Gestión de Múltiples Fases</h3>
                <p className="text-gray-300 leading-relaxed">
                  Implementé la lógica para manejar las diferentes etapas de la competencia: rondas diarias, competencias semanales, y semifinales, con seguimiento automático de ganadores y estadísticas.
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
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">
              <Award className="w-6 h-6 text-emerald-400" />
              Impacto y Alcance
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Transmisión Nacional</p>
                  <p className="text-gray-400 text-sm">Programa transmitido en horario estelar por TV Perú, alcanzando audiencia a nivel nacional</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Preservación Cultural</p>
                  <p className="text-gray-400 text-sm">Contribución a la promoción y enseñanza del idioma quechua en el Perú</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Buena Recepción del Público</p>
                  <p className="text-gray-400 text-sm">El programa fue bien acogido por la audiencia desde sus primeras semanas de transmisión</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">Operación en Vivo</p>
                  <p className="text-gray-400 text-sm">Software operado exitosamente durante transmisiones en vivo sin interrupciones técnicas</p>
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