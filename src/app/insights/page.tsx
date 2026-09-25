import type { Metadata } from "next";
import { insights } from "@/lib/content";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on AI, architecture, cloud, and product delivery from Robopilot AI.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        <CursorReactiveField />
        <div className="container-x relative z-10 max-w-3xl">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
              <span className="h-0.5 w-5 rounded bg-current" />
              Insights
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Field notes from the{" "}
              <span className="text-gradient">frontier of digital work</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--muted)]">
              Expanded thinking for leaders and builders — how we approach AI that ships, platforms that
              last, and delivery that stays calm under pressure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {insights.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-[var(--bg-elevated)] p-7">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[var(--accent-soft)]">
                  <span>{post.tag}</span>
                  <span className="text-[var(--dim)]">· {post.read} read</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">{post.title}</h2>
                <p className="mt-3 flex-1 text-[var(--muted)]">{post.excerpt}</p>
                <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                  Inside: practical patterns we use with clients — evaluation frameworks, integration
                  strategies, and delivery rituals that keep momentum without sacrificing quality. Want the
                  full playbook applied to your stack? Let&apos;s talk.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-12 flex justify-center">
          <Button href="/contact">Bring these ideas to your team ↗</Button>
        </div>
      </section>
    </>
  );
}
