"use client";

import CinematicHero from "@/components/demo/CinematicHero";
import SiteHeader from "@/components/demo/SiteHeader";
import { useTranslations } from "@/hooks";

export default function DemoPage() {
  const experience = useTranslations("experience");
  const projects = useTranslations("projects");
  const stack = useTranslations("stack");
  const contact = useTranslations("contact");

  const titleStyle = { fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 };

  return (
    <main>
      <SiteHeader />
      <CinematicHero />
      <section id="experience" className="min-h-screen flex items-center px-6 md:px-10">
        <h2 className="font-display" style={titleStyle}>
          {experience("title")}
        </h2>
      </section>
      <section id="projects" className="min-h-screen flex items-center px-6 md:px-10">
        <h2 className="font-display" style={titleStyle}>
          {projects("title")}
        </h2>
      </section>
      <section id="stack" className="min-h-screen flex items-center px-6 md:px-10">
        <h2 className="font-display" style={titleStyle}>
          {stack("title")}
        </h2>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 text-center">
        <h2 className="font-display" style={titleStyle}>
          {contact("title")}
        </h2>
      </section>
    </main>
  );
}
