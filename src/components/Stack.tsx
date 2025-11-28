"use client";

import { useTranslations, useMessages } from "@/hooks";

export default function Stack() {
  const t = useTranslations("stack");
  const messages = useMessages();
  const skills = messages.stack.skills;
  const categories = messages.stack.categories;
  const levels = messages.stack.levels;

  return (
    <section id="stack" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          {t("title")}
        </h2>

        {/* Game Development - Principal */}
        <StackCategory
          title={categories.gamedev}
          gradient="from-emerald-400 to-cyan-400"
          items={skills.gamedev}
          levels={levels}
          color="emerald"
        />

        {/* Software Engineering */}
        <StackCategory
          title={categories.software}
          gradient="from-emerald-300 to-cyan-300"
          items={skills.software}
          levels={levels}
          color="cyan"
        />

        {/* Backend & Frontend - Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <StackCategory
            title={categories.backend}
            gradient="from-gray-300 to-gray-100"
            items={skills.backend}
            levels={levels}
            color="gray"
          />

          <StackCategory
            title={categories.frontend}
            gradient="from-gray-300 to-gray-100"
            items={skills.frontend}
            levels={levels}
            color="gray"
          />
        </div>

        {/* Cloud & DevOps */}
        <div className="mt-10">
          <StackCategory
            title={categories.cloud}
            gradient="from-gray-400 to-gray-200"
            items={skills.cloud}
            levels={levels}
            color="gray"
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------- COMPONENTES --------------------- */

interface StackCategoryProps {
  title: string;
  gradient: string;
  items: Array<{ name: string; level: string; percentage: number }>;
  levels: Record<string, string>;
  color: "emerald" | "cyan" | "gray";
}

function StackCategory({
  title,
  gradient,
  items,
  levels,
  color,
}: StackCategoryProps) {
  return (
    <div className="glass-card p-8 rounded-2xl border border-white/10 mb-10">
      <h3
        className={`text-2xl font-semibold mb-6 bg-linear-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item, index) => (
          <SkillBar
            key={index}
            name={item.name}
            level={levels[item.level as keyof typeof levels]}
            percentage={item.percentage}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
  color: "emerald" | "cyan" | "gray";
}

function SkillBar({ name, level, percentage, color }: SkillBarProps) {
  const colorClasses = {
    emerald: "bg-emerald-500",
    cyan: "bg-cyan-500",
    gray: "bg-gray-400",
  };

  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-base text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">
          {level} • {percentage}%
        </span>
      </div>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}