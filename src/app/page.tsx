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
  FaqSection,
} from "@/components/sections/HomeSections";
import { ContactSection } from "@/components/sections/ContactSection";

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
      <WhyChoose />
      <FaqSection />
      <ContactSection />
    </>
  );
}
