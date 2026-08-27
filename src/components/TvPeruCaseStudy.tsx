"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ArrowLeft, Tv, Users, Server, Code, Check } from "lucide-react";
import Link from "next/link";
import { useMessages } from "@/hooks";

export default function TvPeruCaseStudy({
  which,
}: {
  which: "queGane" | "pukllaspa";
}) {
  const { back, sections } = useMessages().tvPeru;
  const p = useMessages().tvPeru[which];

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
            {back}
          </Link>

          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Tv className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 mb-3">
                  {p.badge}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {p.title}
                </h1>
                <p className="text-xl text-gray-400">{p.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {p.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-emerald-400" />
                {sections.about}
              </h2>
              {p.about.map((para, i) => (
                <p
                  key={i}
                  className={`text-gray-300 leading-relaxed${i < p.about.length - 1 ? " mb-4" : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Server className="w-6 h-6 text-emerald-400" />
                {sections.system}
              </h2>
              <ul className="space-y-3 text-gray-300">
                {p.system.map((b) => (
                  <li key={b.label} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">{b.label}</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-emerald-400" />
              {sections.role}
            </h2>

            <div className="space-y-6">
              {p.role.map((r) => (
                <div key={r.title}>
                  <h3 className="text-lg font-semibold text-white mb-3">{r.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">{sections.stack}</h3>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-emerald-400" />
              {sections.impact}
            </h2>
            <div className="space-y-4">
              {p.impact.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
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
