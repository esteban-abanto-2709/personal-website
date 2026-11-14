import CinematicHero from "@/components/demo/CinematicHero";
import ClosingContact from "@/components/demo/ClosingContact";
import ExperienceTimeline from "@/components/demo/ExperienceTimeline";
import ProjectsShowcase from "@/components/demo/ProjectsShowcase";
import SiteFooter from "@/components/demo/SiteFooter";
import SiteHeader from "@/components/demo/SiteHeader";
import StackMarquee from "@/components/demo/StackMarquee";

export default function DemoPage() {
  return (
    <main>
      <SiteHeader />
      <CinematicHero />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <StackMarquee />
      <ClosingContact />
      <SiteFooter />
    </main>
  );
}
