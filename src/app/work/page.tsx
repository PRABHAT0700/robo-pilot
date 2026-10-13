import type { Metadata } from "next";
import { WorkHero, WorkStats } from "@/components/sections/WorkHero";
import { WorkCarousel, AllWorks } from "@/components/sections/WorkShowcase";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected industry case studies from RoboPilot — fintech, commerce, healthcare, logistics and more.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkStats />
      <WorkCarousel />
      <AllWorks />
      <FaqSection />
      <ContactSection />
    </>
  );
}
