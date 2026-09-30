"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import {
  faqs,
  industries,
  processSteps,
  projects,
  serviceNav,
  whyChoose,
  techRows,
} from "@/lib/content";

const craftCards = [
  {
    ...whyChoose[0],
    n: "1",
    gradient: "from-[#0b3a48] via-[#0e4d58] to-[#123a52]",
    offset: "lg:ml-16",
  },
  {
    ...whyChoose[1],
    n: "2",
    gradient: "from-[#3a1d63] via-[#4a2a78] to-[#2d1b55]",
    offset: "lg:ml-6",
  },
  {
    ...whyChoose[2],
    n: "3",
    gradient: "from-[#4a1b5c] via-[#5a2468] to-[#321445]",
    offset: "lg:ml-0",
  },
] as const;

export function TrustedStrip() {
  return (
    <section className="bg-[#dff7fb] py-16 text-[#0b1020] md:py-20">
      <div className="container-x">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#4b8cff]">
            How we ship
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            Teams who have <span className="italic text-[#4b8cff]">shipped</span> with us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            From product teams to operations groups — the services, industries and problem types we
            actually build for.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {serviceNav.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(15,35,60,0.08)] transition hover:-translate-y-0.5"
              data-cursor
            >
              <p className="font-display text-sm font-bold leading-snug">{s.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{s.short}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="rounded-xl bg-[#0b1020] px-3 py-3 text-center text-xs font-bold text-white/90 transition hover:bg-[#11182c]"
              data-cursor
            >
              {ind.title}
            </Link>
          ))}
        </div>

        {/* <div className="mt-8 grid gap-3 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <article
              key={p.slug}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,35,60,0.08)]"
            >
              <div className="h-32">
                <CoverImage src={p.image} alt={p.title} className="h-full w-full" />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#4b8cff]">
                  {p.category}
                </p>
                <h3 className="mt-1 font-display text-base font-bold">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{p.summary}</p>
              </div>
            </article>
          ))}
        </div> */}

        <div className="mt-8 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-black"
            data-cursor
          >
            See selected work <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AboutCraft() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-orb right-[8%] top-[20%] h-72 w-72 bg-[var(--purple)] opacity-20" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="mb-5 inline-flex rounded-full border border-[var(--brand)]/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
            Who we are
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-[52px] md:leading-[1.08]">
            An AI partner built on
            <br />
            Craft & <span className="italic-accent">Conviction</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
            RoboPilot helps organizations modernize operations, build digital products and put AI
            into workflows that people actually use. We combine business understanding with
            practical engineering — not slideware.
          </p>
          <ul className="mt-7 space-y-3 text-sm font-semibold">
            {["Purpose-driven delivery", "Velocity without compromise", "True partnership model"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--brand)] text-[#05060a]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ),
            )}
          </ul>
          <div className="mt-9">
            <Button href="/about" variant="secondary" className="px-7">
              Learn more about us <ArrowUpRight size={15} />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            {craftCards.map((card) => (
              <article
                key={card.title}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} px-7 py-7 ${card.offset}`}
              >
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 font-display text-[110px] font-bold leading-none text-white/10">
                  {card.n}
                </div>
                <h3 className="relative font-display text-xl font-bold md:text-2xl">{card.title}</h3>
                <p className="relative mt-2 max-w-[280px] text-sm leading-relaxed text-white/70">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OutcomeStrip() {
  return (
    <section className="border-y border-white/10 bg-[var(--bg-elevated)] py-14">
      <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Business-first", "Every engagement"],
          ["10+", "Industries served"],
          ["Human-in-the-loop", "By design"],
          ["Post-launch", "Support available"],
        ].map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="font-display text-3xl font-bold md:text-4xl">{n}</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProcessPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Our process"
            title="From brief to delivery, without surprise"
            description="A transparent, iterative process so you always know where the work stands."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand)]">
                  Step {s.step}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold">{s.subtitle}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{s.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechMarquees() {
  const chip = (item: { name: string; slug: string; color: string }) => (
    <span
      key={`${item.slug}-${item.name}`}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#11141c] px-4 py-2 text-sm font-semibold text-white/85"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
        alt=""
        width={18}
        height={18}
        className="h-[18px] w-[18px] object-contain"
      />
      {item.name}
    </span>
  );
  return (
    <section className="py-16">
      <div className="container-x mb-10">
        <Reveal>
          <SectionHeading
            eyebrow="Our stack"
            title="Technologies, we master"
            description="Battle-tested tools, modern frameworks, scalable architectures — chosen for your project's specific needs."
          />
        </Reveal>
      </div>
      <div className="relative space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060a] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060a] to-transparent md:w-40" />
        {techRows.map((row, i) => (
          <Marquee key={i} reverse={i === 1} duration={28 + i * 4}>
            {row.map(chip)}
          </Marquee>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/services" variant="secondary">
          See all technologies
        </Button>
      </div>
    </section>
  );
}

export function IndustriesPreview() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Industries we serve"
            title="Ten verticals, one playbook"
            description="Patterns and integration playbooks that adapt to different operating contexts."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.03}>
              <Link
                href={`/industries/${ind.slug}`}
                className="block h-full rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-4 transition hover:border-[var(--brand)]/40"
                data-cursor
              >
                <div className="text-xs font-bold text-[var(--brand)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-base font-bold">{ind.title}</h3>
                <p className="mt-2 text-xs text-[var(--muted)]">{ind.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="The reasons teams keep coming back"
            description="Clarity, delivery and systems that still make sense after launch."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.04}>
              <article className="h-full rounded-2xl border border-white/10 p-6">
                <div className="text-sm font-bold text-[var(--brand)]">{w.n}</div>
                <h3 className="mt-2 font-display text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{w.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkPreview() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Ideas turned into digital systems"
            description="Illustrative concepts showing the kinds of challenges we help solve."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--bg-elevated)]">
                <div className="relative h-44 overflow-hidden">
                  <CoverImage
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full transition duration-700 group-hover:scale-105"
                  />
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
          <Button href="/work" variant="secondary">
            View all work
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know before starting a project."
          />
        </Reveal>
        <div className="mx-auto grid max-w-5xl gap-x-10 md:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <details className="group border-b border-white/10 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
                  {f.q}
                  <span className="text-xl text-[var(--brand)] transition group-open:rotate-45">
                    +
                  </span>
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
      <div className="glow-orb right-[-80px] top-[-120px] h-[420px] w-[420px] bg-[var(--brand)] opacity-20" />
      <div className="container-x relative text-center">
        <h2 className="font-display text-4xl font-bold md:text-6xl">
          Want to <span className="italic-accent">connect</span>
          <br />
          with us?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--muted)]">
          Tell us what you want to automate, build or improve. We&apos;ll help turn the opportunity
          into a practical technology plan.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Let&apos;s Talk</Button>
        </div>
      </div>
    </section>
  );
}
