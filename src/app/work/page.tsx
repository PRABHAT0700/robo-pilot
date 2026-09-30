import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

export const metadata: Metadata = {
  title: "Work",
  description: "Featured digital solutions and illustrative concepts from Robopilot AI.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        <CursorReactiveField />
        <div className="container-x relative z-10 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
              <span className="h-0.5 w-5 rounded bg-current" />
              Our work
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Ideas turned into{" "}
              <span className="text-gradient">digital systems that ship</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--muted)]">
              Illustrative concepts below show the kinds of challenges we help solve. Replace with approved
              client stories before publishing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="group overflow-hidden rounded-3xl border border-cyan-400/10 bg-[var(--bg-elevated)]">
                <div className="relative h-52 overflow-hidden">
                  <CoverImage
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101c] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <small className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--brand)]">
                    {p.category}
                  </small>
                  <h2 className="mt-2 font-display text-2xl font-bold">{p.title}</h2>
                  <p className="mt-3 text-sm text-[var(--muted)]">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.impact.map((m) => (
                      <span key={m} className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1 text-xs font-bold text-[var(--muted)]">
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs font-semibold text-[var(--brand)]">
                        #{s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-12 flex justify-center">
          <Button href="/contact">Start a similar project ↗</Button>
        </div>
      </section>
    </>
  );
}
