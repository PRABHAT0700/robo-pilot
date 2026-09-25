import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI & automation, custom software, web & mobile, cloud & DevOps, ERP integration, and data consulting from Robopilot AI.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        <CursorReactiveField />
        <div className="container-x relative z-10 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
              <span className="h-0.5 w-5 rounded bg-current" />
              Services
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Full-stack capability.{" "}
              <span className="text-gradient">Outcome-first delivery.</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--muted)]">
              Whether you need an AI pilot, a greenfield product, or a connected enterprise platform —
              we assemble the right mix of strategy, design, and engineering.
            </p>
          </Reveal>
        </div>
      </section>
      <ServicesGrid />
      <section className="pb-24">
        <div className="container-x flex flex-col items-center rounded-3xl border border-white/10 bg-[var(--bg-elevated)] px-6 py-12 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Not sure where to start?</h2>
          <p className="mt-3 max-w-xl text-[var(--muted)]">
            Book a consultation and we&apos;ll map your goals to the right service mix — no pressure, no
            fluff.
          </p>
          <div className="mt-6">
            <Button href="/contact">Talk to our team ↗</Button>
          </div>
        </div>
      </section>
    </>
  );
}
