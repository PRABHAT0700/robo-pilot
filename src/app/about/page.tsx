import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutCraft, CtaBand, OutcomeStrip } from "@/components/sections/HomeSections";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { MissionVision } from "@/components/sections/MissionVision";
import { CoreValues } from "@/components/sections/CoreValues";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const aboutDesc =
  "RoboPylot was founded in 2026 in Indore. A small team building AI agents, data systems, mobile apps and AI strategy for businesses in India, the UK and the US.";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: aboutDesc,
  path: "/about",
  keywords: ["RoboPylot about", "AI company Indore", "software studio Indore 2026"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/about", title: "About RoboPylot", description: aboutDesc, type: "AboutPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutHero />
      <AboutCraft
        overlap={false}
        heading={
          <>
            An AI and software partner
            <br />
            built on careful <span className="italic-accent">work</span>
          </>
        }
        body="We look at how your business runs before we suggest anything. Then we build the part that will actually help, and we explain every decision in plain language."
        ctaHref="/contact"
        ctaLabel="Start a project"
        ctaClassName="btn btn-outline"
      />
      <OutcomeStrip />
      <WhyChoose />
      <MissionVision />
      <CoreValues />
      <CtaBand />
      <ContactSection />
    </>
  );
}
