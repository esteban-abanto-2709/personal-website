"use client";

import { useTranslations, useMessages } from "@/hooks";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const t = useTranslations('projects');
  const projects = useMessages().projects.items;

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center my-16">
          {t('title')}
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} viewProject={t('viewProject')} />
          ))}
        </div>
      </div>
    </section>
  );
}