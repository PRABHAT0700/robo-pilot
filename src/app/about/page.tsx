import type { Metadata } from "next";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/content";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

export const metadata: Metadata = {
  title: "About",
  description:
    "Robopilot AI is a technology solutions company focused on practical innovation, scalable architecture, and long-term partnership.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <CursorReactiveField />
        <div className="container-x relative z-10 max-w-4xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
              <span className="h-0.5 w-5 rounded bg-current" />
              About us
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Built for teams who want technology that{" "}
              <span className="text-gradient">actually moves the business</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--muted)]">
              Robopilot AI is a technology solutions company focused on helping organizations modernize
              operations, build digital products, and unlock new opportunities. We bring together business
              understanding, engineering craft, and emerging technologies to create solutions that are
              practical, scalable, and ready for the future.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-elevated)] py-20">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          {[
            {
              title: "Mission",
              body: "Make advanced technology approachable — so every ambitious team can ship smarter systems without drowning in complexity.",
            },
            {
              title: "Approach",
              body: "Start with the business problem, design for real users, and engineer for longevity. AI is a tool, not a headline.",
            },
            {
              title: "Promise",
              body: "Clear communication, measurable outcomes, and partnership that continues after launch — not a one-and-done handoff.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-white/10 bg-[var(--bg-primary)] p-7">
                <h2 className="font-display text-xl font-bold">{item.title}</h2>
                <p className="mt-3 text-[var(--muted)]">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How we show up"
              title="Principles that shape every engagement"
              description="The same standards whether we're shipping a pilot or a platform."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <article className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6">
                  <h3 className="font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{b.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#12151f] to-[#0b0d14] p-8 md:grid-cols-2 md:p-12">
            <div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                Technology should make business easier.
              </h3>
              <p className="mt-4 text-[var(--muted)]">
                We don&apos;t chase novelty for its own sake. We translate strategy into software, AI, and
                cloud foundations your teams can run — and improve — for years.
              </p>
            </div>
            <div className="grid gap-3 self-center text-sm font-bold">
              {[
                "Discovery workshops that surface real constraints",
                "Architecture reviews before heavy build",
                "Demo-driven delivery every sprint",
                "Handover with docs, training, and support options",
              ].map((t) => (
                <span key={t}>
                  <span className="mr-2 text-[var(--brand)]">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/contact">Work with Robopilot ↗</Button>
          </div>
        </div>
      </section>
    </>
  );
}
