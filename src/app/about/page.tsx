import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutCraft } from "@/components/sections/HomeSections";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { MissionVision } from "@/components/sections/MissionVision";
import { CoreValues } from "@/components/sections/CoreValues";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small company with a big obsession with craft. RoboPilot builds digital products for ambitious teams.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCraft
        overlap={false}
        heading={
          <>
            An IT Partner built on
            <br />
            Craft & <span className="italic-accent">Conviction</span>
          </>
        }
        body="Founded in Indore in 2020, RoboPilot started with three people and one belief — that great digital work comes from deep collaboration. Six years later, we're a 50+ person studio covering web, app, marketing, and talent."
        ctaHref="/services"
        ctaLabel="View our services"
        ctaClassName="btn btn-outline"
      />
      <WhyChoose />
      <MissionVision />
      <CoreValues />
      <ContactSection />
    </>
  );
}
