import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { industries, industryPageFaqs } from "@/lib/content";
import { industryDetails } from "@/lib/media";
import { breadcrumbSchema, industrySchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { ServiceHero, ConversionBand, CapabilityGrid, TechChips } from "@/components/services/ServiceBlocks";
import { WorkStats } from "@/components/sections/WorkHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return { title: "Industry" };
  const extra = industryDetails[slug];
  const description = extra?.long || ind.description;
  return pageMetadata({
    title: `${ind.title} software and AI`,
    description,
    path: `/industries/${slug}`,
    keywords: [ind.title, `${ind.title} AI`, `${ind.title} software India`, "RoboPylot"],
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();
  const extra = industryDetails[ind.slug];
  const description = extra?.long || ind.description;
  const words = ind.title.split(" ");
  const last = words.pop() ?? ind.title;
  const lead = words.join(" ");

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: `/industries/${ind.slug}`,
            title: `${ind.title} software and AI`,
            description,
          }),
          industrySchema({ slug: ind.slug, name: ind.title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: ind.title, path: `/industries/${ind.slug}` },
          ]),
        ]}
      />
      <ServiceHero
        eyebrow="INDUSTRY"
        title={
          <>
            {lead ? `${lead} ` : null}
            <span className="gradient-text-3 italic">{last}</span>
          </>
        }
        description={extra?.long || ind.description}
        primary={{ href: "/contact", label: "Discuss this industry" }}
        secondary={{ href: "/industries", label: "All industries" }}
        visual={
          // eslint-disable-next-line @next/next/no-img-element
          <img src={extra?.image || ""} alt={ind.title} className="service-hero-img" />
        }
      />
      <WorkStats />
      <CapabilityGrid
        heading={`What we build for ${ind.title}`}
        items={ind.focus.map((f) => ({
          title: f.title,
          copy: f.copy,
        }))}
      />
      {extra ? (
        <TechChips eyebrow="OUTCOMES" heading="What we design for" items={extra.outcomes} />
      ) : null}
      <ConversionBand
        heading={`Building for ${ind.title}?`}
        copy="Tell us the workflow, the tools you already use and the outcome you need. We will map it to agents, data, mobile or consulting — not all four unless you need them."
        cta="Discuss this industry"
        href="/contact"
      />
      <FaqSection items={industryPageFaqs(ind.title)} />
      <ContactSection />
    </>
  );
}
