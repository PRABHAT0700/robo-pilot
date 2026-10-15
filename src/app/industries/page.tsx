import type { Metadata } from "next";
import { IndustriesHero } from "@/components/sections/IndustriesHero";
import { WorkStats } from "@/components/sections/WorkHero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { TechMarquees } from "@/components/sections/HomeSections";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "RoboPilot delivers AI agents, analytics, mobile products and consulting across ten industry verticals.",
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <WorkStats />
      <IndustriesGrid />
      <TechMarquees />
      <ProcessPreview />
      <FaqSection />
      <ContactSection />
    </>
  );
}
