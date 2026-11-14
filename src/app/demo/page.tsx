"use client";

import CinematicHero from "@/components/demo/CinematicHero";
import ExperienceTimeline from "@/components/demo/ExperienceTimeline";
import ProjectsShowcase from "@/components/demo/ProjectsShowcase";
import SiteHeader from "@/components/demo/SiteHeader";
import StackMarquee from "@/components/demo/StackMarquee";
import { useTranslations } from "@/hooks";

export default function DemoPage() {
  const contact = useTranslations("contact");

  const titleStyle = { fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 };

  return (
    <main>
      <SiteHeader />
      <CinematicHero />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <StackMarquee />
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 text-center">
        <h2 className="font-display" style={titleStyle}>
          {contact("title")}
        </h2>
      </section>
    </main>
  );
}
