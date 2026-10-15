import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/lib/content";
import { industryDetails } from "@/lib/media";
import { ServiceHero, ConversionBand, CapabilityGrid, TechChips } from "@/components/services/ServiceBlocks";
import { WorkStats } from "@/components/sections/WorkHero";
import { AllWorks } from "@/components/sections/WorkShowcase";
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
  return {
    title: ind.title,
    description: extra?.long || ind.description,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();
  const extra = industryDetails[ind.slug];
  const words = ind.title.split(" ");
  const last = words.pop() ?? ind.title;
  const lead = words.join(" ");

  return (
    <>
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
        heading={`How we show up in ${ind.title}`}
        items={ind.focus.map((f) => ({
          title: f,
          copy: "Built into delivery so the work stays specific to this operating context — not a generic template.",
        }))}
      />
      {extra ? (
        <TechChips eyebrow="OUTCOMES" heading="What we design for" items={extra.outcomes} />
      ) : null}
      <AllWorks />
      <ConversionBand
        heading="Building in this industry?"
        copy="Tell us the workflow, the constraint and the outcome you need. We'll map it to the right service mix."
        cta="Discuss this industry"
        href="/contact"
      />
      <FaqSection />
      <ContactSection />
    </>
  );
}
