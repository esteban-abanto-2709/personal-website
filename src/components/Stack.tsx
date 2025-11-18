"use client";

import { useTranslations } from "@/hooks";

export default function Stack() {
  const t = useTranslations('stack');

  return (
    <section id="stack" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          {t('title')}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {/* Frontend */}
          <div className="stack-item">HTML</div>
          <div className="stack-item">CSS</div>
          <div className="stack-item">TailwindCSS</div>
          <div className="stack-item">JavaScript</div>
          <div className="stack-item">TypeScript</div>
          <div className="stack-item">React</div>

          {/* Backend */}
          <div className="stack-item">Node.js</div>
          <div className="stack-item">Express</div>
          <div className="stack-item">MySQL</div>

          {/* Otros */}
          <div className="stack-item">Unity</div>
          <div className="stack-item">C#</div>
          <div className="stack-item">Java</div>
          <div className="stack-item">Git</div>
          <div className="stack-item">Socket.IO</div>
        </div>
      </div>
    </section>
  );
}