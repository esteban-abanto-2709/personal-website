"use client";

import CinematicHero from "@/components/demo/CinematicHero";
import { useTranslations } from "@/hooks";

export default function DemoPage() {
  const t = useTranslations("contact");

  return (
    <main>
      <CinematicHero />
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <h2
          className="font-display"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.95 }}
        >
          {t("title")}
        </h2>
      </section>
    </main>
  );
}
