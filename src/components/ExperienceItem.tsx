import { ExperienceItemProps } from "@/types";

export default function ExperienceItem({
  title,
  company,
  years,
  description,
  stack,
}: ExperienceItemProps) {
  return (
    <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 transition-shadow hover:shadow-xl hover:shadow-white/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
            {title}
          </h3>
          <p className="text-emerald-400 text-base md:text-lg font-medium">
            {company}
          </p>
        </div>
        <div className="text-gray-400 text-sm md:text-base font-medium mt-2 md:mt-0">
          {years}
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech: string) => (
          <span
            key={tech}
            className="bg-white/5 text-gray-300 border border-white/10 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}