import type { Metadata } from "next";
import { processSteps } from "@/lib/content";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

export const metadata: Metadata = {
  title: "Process",
  description: "Robopilot AI's structured delivery process from discovery through long-term growth.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        <CursorReactiveField />
        <div className="container-x relative z-10 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
              <span className="h-0.5 w-5 rounded bg-current" />
              Delivery model
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              From first conversation to{" "}
              <span className="text-gradient">long-term success</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--muted)]">
              A transparent process that keeps strategy, design, and engineering aligned with your business
              goals — every week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x space-y-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <article className="grid gap-6 rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-6 md:grid-cols-[140px_1fr] md:p-8">
                <div>
                  <div className="font-display text-4xl font-extrabold text-[var(--brand)]">{s.step}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-widest text-[var(--dim)]">
                    {s.title}
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">{s.subtitle}</h2>
                  <p className="mt-3 max-w-2xl text-[var(--muted)]">{s.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-14 grid gap-6 rounded-3xl border border-white/10 bg-[var(--bg-primary)] p-8 md:grid-cols-3">
          {[
            { t: "Weekly demos", d: "See working software early — not slideware." },
            { t: "Shared roadmap", d: "Priorities stay visible and negotiable." },
            { t: "Quality gates", d: "Testing, security, and docs before go-live." },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 0.06}>
              <h3 className="font-display text-lg font-bold">{item.t}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.d}</p>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-12 flex justify-center">
          <Button href="/contact">Start discovery ↗</Button>
        </div>
      </section>
    </>
  );
}
