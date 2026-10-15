import type { Metadata } from "next";
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
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/content";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} | AI agents, ML, apps and consulting`,
  description: site.description,
  path: "/",
  keywords: [
    "RoboPylot",
    "AI agents Indore",
    "AI consulting India",
    "machine learning development",
    "mobile app development",
    "custom software Indore",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/",
            title: `${site.name} | AI agents, ML, apps and consulting`,
            description: site.description,
            type: "WebPage",
          }),
          faqSchema(),
        ]}
      />
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
