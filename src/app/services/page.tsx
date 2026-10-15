import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { WorkStats } from "@/components/sections/WorkHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechMarquees } from "@/components/sections/HomeSections";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceListingFaqs, serviceNav } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema, itemListSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const servicesDesc =
  "AI agent building, free AI agents, ML and data analytics, mobile app development, and AI consulting from RoboPylot in Indore.";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: servicesDesc,
  path: "/services",
  keywords: [
    "AI agent development",
    "machine learning services",
    "mobile app development India",
    "AI consulting",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/services", title: "Services", description: servicesDesc, type: "CollectionPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          itemListSchema(
            "RoboPylot services",
            serviceNav.map((s) => ({ name: s.title, url: absoluteUrl(`/services/${s.slug}`) })),
          ),
        ]}
      />
      <ServicesHero />
      <WorkStats />
      <ServicesGrid />
      <TechMarquees />
      <ProcessPreview />
      <FaqSection items={serviceListingFaqs} />
      <ContactSection />
    </>
  );
}
