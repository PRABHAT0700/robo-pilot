import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { WorkStats } from "@/components/sections/WorkHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechMarquees } from "@/components/sections/HomeSections";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agent building, free AI agents, ML and data analytics, mobile app development, and AI consulting from RoboPilot.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WorkStats />
      <ServicesGrid />
      <TechMarquees />
      <ProcessPreview />
      <FaqSection />
      <ContactSection />
    </>
  );
}
