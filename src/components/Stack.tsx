"use client";

import { useTranslations, useMessages } from "@/hooks";

const ORDER = ["languages", "backend", "frontend", "databases", "devops"] as const;

export default function Stack() {
  const t = useTranslations("stack");
  const { categories, skills, note } = useMessages().stack;

  return (
    <section id="stack" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center my-16">
          {t("title")}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {ORDER.map((key) => (
            <div
              key={key}
              className="glass-card p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-lg font-semibold text-emerald-300 mb-4">
                {categories[key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((name) => (
                  <span key={name} className="badge-tech">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {note && (
          <p className="text-center text-gray-400 text-sm mt-10">{note}</p>
        )}
      </div>
    </section>
  );
}
