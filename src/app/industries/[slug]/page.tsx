import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/lib/content";
import { industryDetails } from "@/lib/media";
import { CoverImage } from "@/components/ui/CoverImage";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/sections/LeadForm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return { title: "Industry" };
  return { title: ind.title, description: ind.description };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();
  const extra = industryDetails[ind.slug];

  return (
    <>
      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
            Industry
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">{ind.title}</h1>
          <p className="mt-5 text-lg text-[var(--muted)]">{extra?.long || ind.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discuss this industry</Button>
            <Button href="/industries" variant="secondary">
              All industries
            </Button>
          </div>
        </div>
        <div className="h-[340px] overflow-hidden rounded-[28px] border border-white/10">
          <CoverImage src={extra?.image || ""} alt={ind.title} className="h-full" fallbackLabel={ind.title} />
        </div>
      </section>
      <section className="container-x pb-16">
        <h2 className="font-display text-2xl font-bold">Focus areas</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {ind.focus.map((f) => (
            <div key={f} className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-5">
              {f}
            </div>
          ))}
        </div>
        {extra && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extra.outcomes.map((o) => (
              <div key={o} className="rounded-2xl border border-[var(--brand)]/20 p-4 text-sm font-semibold">
                {o}
              </div>
            ))}
          </div>
        )}
      </section>
      <LeadForm />
    </>
  );
}
