import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/content";
import { industryDetails } from "@/lib/media";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "RoboPilot delivers AI agents, analytics, mobile products and consulting across ten industry verticals.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        <CursorReactiveField />
        <div className="container-x relative z-10 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
              <span className="h-0.5 w-5 rounded bg-current" />
              Industries
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Domain-aware technology for{" "}
              <span className="text-gradient">real operating contexts</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--muted)]">
              Our solutions adapt to different industries, business models, and operational environments —
              without forcing a generic template.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Sectors"
              title="Where we create leverage"
              description="Deep patterns, reusable accelerators, and integration playbooks tailored to each sector."
            />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.05}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="block h-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--bg-elevated)] transition hover:border-[var(--brand)]/40"
                >
                  <div className="h-40">
                    <CoverImage
                      src={industryDetails[ind.slug]?.image || ""}
                      alt={ind.title}
                      className="h-full w-full"
                      fallbackLabel={ind.title}
                    />
                  </div>
                  <div className="p-7">
                  <h2 className="font-display text-2xl font-bold">{ind.title}</h2>
                  <p className="mt-3 text-[var(--muted)]">{ind.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {ind.focus.map((f) => (
                      <li key={f} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-block text-sm font-bold text-[var(--brand)]">View industry →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/contact">Discuss your industry ↗</Button>
          </div>
        </div>
      </section>
    </>
  );
}
