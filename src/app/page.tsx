import { Hero } from "@/components/sections/Hero";
import { FourPillars } from "@/components/sections/FourPillars";
import {
  TrustedStrip,
  AboutCraft,
  OutcomeStrip,
  ProcessPreview,
  TechMarquees,
  IndustriesPreview,
  WhyChoose,
  WorkPreview,
  FaqSection,
  CtaBand,
} from "@/components/sections/HomeSections";
import { LeadForm } from "@/components/sections/LeadForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedStrip />
      <AboutCraft />
      <FourPillars />
      <OutcomeStrip />
      <ProcessPreview />
      <TechMarquees />
      <IndustriesPreview />
      <WorkPreview />
      <WhyChoose />
      <FaqSection />
      <LeadForm />
      <CtaBand />
    </>
  );
}
