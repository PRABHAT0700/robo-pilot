"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, projects, processSteps, trustTags, faqs, insights } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function TrustStrip() {
  return (
    <div className="border-y border-white/10 bg-[var(--bg-elevated)]/80 py-5">
      <div className="container-x flex flex-wrap items-center justify-between gap-4">
        <strong className="text-xs uppercase tracking-[0.14em] text-[var(--dim)]">
          Technology for the next step
        </strong>
        <div className="flex flex-wrap gap-2">
          {trustTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProcessPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Our process"
            title="From First Conversation to Long-Term Success"
            description="A structured, transparent process that keeps your project aligned with business goals."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-white/10 border-t-2 border-t-[var(--brand)] bg-[var(--bg-elevated)] p-5">
                <b className="text-xs tracking-widest text-[var(--brand)]">
                  {s.step} / {s.title.toUpperCase()}
                </b>
                <h3 className="mt-3 font-display text-lg font-bold">{s.subtitle}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{s.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/process" variant="ghost">
            See full delivery model ↗
          </Button>
        </div>
      </div>
    </section>
  );
}

export function IndustriesPreview() {
  return (
    <section className="bg-[var(--bg-elevated)]/50 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Who we help"
            title="Technology for Every Business Journey"
            description="Solutions designed to adapt to different industries, models, and operational environments."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-white/10 bg-[var(--bg-primary)] p-6 transition hover:border-[var(--accent)]/40">
                <div className="mb-3 text-2xl text-[var(--accent-soft)]">◈</div>
                <h3 className="font-display text-lg font-bold">{ind.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{ind.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/industries" variant="secondary">
            Explore industries
          </Button>
        </div>
      </div>
    </section>
  );
}

export function WorkPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Featured work"
            title="Ideas Turned into Digital Solutions"
            description="Illustrative concepts showing the kinds of challenges we help solve."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-cyan-400/10 bg-[var(--bg-elevated)]">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,210,255,0.25),transparent_45%)]" />
                </div>
                <div className="p-5">
                  <small className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--brand)]">
                    {p.category}
                  </small>
                  <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{p.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/work">View all work ↗</Button>
        </div>
      </div>
    </section>
  );
}

export function InsightsPreview() {
  return (
    <section className="border-y border-white/10 bg-[var(--bg-elevated)]/40 py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Signals from the future of work"
            description="Practical thinking on AI, platforms, and delivery — written for builders and buyers."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {insights.slice(0, 4).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href="/insights"
                className="block rounded-2xl border border-white/10 bg-[var(--bg-primary)] p-6 transition hover:border-[var(--accent)]/50"
                data-cursor
              >
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[var(--accent-soft)]">
                  <span>{post.tag}</span>
                  <span className="text-[var(--dim)]">· {post.read}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold">{post.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="FAQs"
            title="Questions? We've Got Answers."
            description="A few things you may want to know before starting a project."
          />
        </Reveal>
        <div className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group border-b border-white/10 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold marker:content-none">
                  {f.q}
                  <span className="text-xl text-[var(--brand)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-[var(--muted)]">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="glow-orb right-[-80px] top-[-120px] h-[420px] w-[420px] bg-[var(--brand)] opacity-25" />
      <div className="glow-orb left-[-60px] bottom-[-80px] h-72 w-72 bg-[var(--accent)] opacity-25" />
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
            <span className="h-0.5 w-5 rounded bg-current" />
            Let&apos;s build something
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Have an Idea?
            <br />
            <span className="text-[var(--brand)]">Let&apos;s Make It Happen.</span>
          </h2>
          <p className="mt-4 max-w-md text-[var(--muted)]">
            Tell us about your challenges, goals, or upcoming project. We&apos;ll help you explore the
            right technology approach.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[var(--text)]">
            {["Share your project requirements", "Discuss a suitable technology approach", "Explore possible next steps together"].map(
              (item) => (
                <li key={item}>
                  <span className="mr-2 text-[var(--brand)]">↗</span>
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Button href="/contact" variant="secondary" className="px-8 py-4 text-base">
            Start a project ↗
          </Button>
        </div>
      </div>
    </section>
  );
}
