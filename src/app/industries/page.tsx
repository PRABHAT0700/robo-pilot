import type { Metadata } from "next";
import { IndustriesHero } from "@/components/sections/IndustriesHero";
import { WorkStats } from "@/components/sections/WorkHero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { industries, industryListingFaqs } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema, itemListSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const industriesDesc =
  "RoboPylot delivers AI agents, analytics, mobile products and consulting across e-commerce, finance, healthcare, logistics and more.";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description: industriesDesc,
  path: "/industries",
  keywords: ["AI for e-commerce", "fintech software", "healthcare software India", "logistics automation"],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/industries", title: "Industries", description: industriesDesc, type: "CollectionPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
          itemListSchema(
            "Industries we serve",
            industries.map((i) => ({ name: i.title, url: absoluteUrl(`/industries/${i.slug}`) })),
          ),
        ]}
      />
      <IndustriesHero />
      <WorkStats />
      <IndustriesGrid />
      <ProcessPreview />
      <FaqSection items={industryListingFaqs} />
      <ContactSection />
    </>
  );
}
