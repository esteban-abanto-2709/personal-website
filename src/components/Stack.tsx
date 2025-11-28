"use client";

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Technical Stack
        </h2>

        {/* --------- ÁREA FUERTE: GAME DEVELOPMENT --------- */}
        <StackCategory
          title="Game Development (Main Focus)"
          gradient="from-emerald-400 to-cyan-400"
          items={[
            { name: "Unity / C#", level: "Senior", percentage: 92, color: "emerald" },
            { name: "Game Architecture & Patterns", level: "Mid–Senior", percentage: 88, color: "emerald" },
            { name: "Optimization & Profiler", level: "Mid", percentage: 84, color: "emerald" },
            { name: "Multiplayer (Photon)", level: "Mid", percentage: 78, color: "emerald" },
            { name: "Level Design & Mechanics", level: "Mid", percentage: 72, color: "emerald" },
          ]}
        />

        {/* --------- SOFTWARE ENGINEERING --------- */}
        <StackCategory
          title="Software Engineering"
          gradient="from-emerald-300 to-cyan-300"
          items={[
            { name: "Clean Code", level: "Senior", percentage: 90, color: "cyan" },
            { name: "SOLID Principles", level: "Mid–Senior", percentage: 85, color: "cyan" },
            { name: "Design Patterns (GoF)", level: "Mid", percentage: 82, color: "cyan" },
            { name: "Refactoring", level: "Senior", percentage: 90, color: "cyan" },
            { name: "Git / GitHub", level: "Mid", percentage: 85, color: "cyan" },
            { name: "Unit Testing (concepts)", level: "Junior–Mid", percentage: 70, color: "cyan" },
          ]}
        />

        {/* --------- BACKEND --------- */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <StackCategory
            title="Backend Development"
            gradient="from-gray-300 to-gray-100"
            items={[
              { name: "TypeScript", level: "Mid", percentage: 78, color: "gray" },
              { name: "Node.js / Express", level: "Junior–Mid", percentage: 68, color: "gray" },
              { name: "SQL (MySQL / PostgreSQL / SQL Server)", level: "Mid", percentage: 72, color: "gray" },
              { name: "REST APIs", level: "Mid", percentage: 80, color: "gray" },
              { name: "Docker (basic)", level: "Junior", percentage: 55, color: "gray" },
              { name: "Microservices (theory)", level: "Junior", percentage: 50, color: "gray" },
            ]}
          />

          {/* --------- FRONTEND --------- */}
          <StackCategory
            title="Frontend Development"
            gradient="from-gray-300 to-gray-100"
            items={[
              { name: "React", level: "Junior–Mid", percentage: 65, color: "gray" },
              { name: "Next.js", level: "Junior–Mid", percentage: 62, color: "gray" },
              { name: "TailwindCSS", level: "Mid", percentage: 75, color: "gray" },
              { name: "HTML / CSS", level: "Mid", percentage: 78, color: "gray" },
              { name: "Responsive UI", level: "Junior–Mid", percentage: 70, color: "gray" },
            ]}
          />
        </div>

        {/* --------- CLOUD & DEVOPS --------- */}
        <div className="mt-10">
          <StackCategory
            title="Cloud & DevOps (Learning)"
            gradient="from-gray-400 to-gray-200"
            items={[
              { name: "CI/CD (theory)", level: "Junior", percentage: 45, color: "gray" },
              { name: "AWS / Azure (intro)", level: "Junior", percentage: 35, color: "gray" },
              { name: "Docker Compose", level: "Junior", percentage: 50, color: "gray" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------- COMPONENTES --------------------- */

function StackCategory({ title, gradient, items }: any) {
  return (
    <div className="glass-card p-8 rounded-2xl border border-white/10 mb-10">
      <h3
        className={`text-2xl font-semibold mb-6 bg-linear-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item: any, index: number) => (
          <SkillBar
            key={index}
            name={item.name}
            level={item.level}
            percentage={item.percentage}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

function SkillBar({
  name,
  level,
  percentage,
  color,
}: {
  name: string;
  level: string;
  percentage: number;
  color: "emerald" | "cyan" | "gray";
}) {
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
