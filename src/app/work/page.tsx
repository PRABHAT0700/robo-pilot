import type { Metadata } from "next";
import { WorkHero, WorkStats } from "@/components/sections/WorkHero";
import { WorkCarousel, AllWorks } from "@/components/sections/WorkShowcase";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { industries } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema, itemListSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const workDesc =
  "Selected industry work from RoboPylot — e-commerce, fintech, healthcare, logistics and more — covering AI agents, analytics, mobile apps and consulting.";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description: workDesc,
  path: "/work",
  keywords: ["RoboPylot work", "AI case studies", "software projects Indore"],
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/work", title: "Work", description: workDesc, type: "CollectionPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
          itemListSchema(
            "Industry work",
            industries.map((i) => ({ name: i.title, url: absoluteUrl(`/industries/${i.slug}`) })),
          ),
        ]}
      />
      <WorkHero />
      <WorkStats />
      <WorkCarousel />
      <AllWorks />
      <FaqSection />
      <ContactSection />
    </>
  );
}
