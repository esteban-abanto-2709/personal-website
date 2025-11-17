import { ProjectItemProps } from "@/types";

export default function ProjectItem({
  title,
  description,
  techStack,
  link,
  year,
}: ProjectItemProps) {
  return (
    <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-xs text-gray-400 mb-2">{year}</p>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="badge-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-emerald-300 hover:underline font-medium"
      >
        Ver proyecto →
      </a>
    </div>
  );
}