"use client";

import { useTranslations, useMessages } from "@/hooks";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const t = useTranslations('experience');
  const jobs = useMessages().experience.jobs;

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center my-16">
          {t('title')}
        </h2>

        <div className="space-y-8">
          {jobs.map((job) => (
            <ExperienceItem key={job.title} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}