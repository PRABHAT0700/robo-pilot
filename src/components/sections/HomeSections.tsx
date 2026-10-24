"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  Building2,
  Check,
  Compass,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  LineChart,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  Users,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  industries,
  projects,
  serviceNav,
} from "@/lib/content";

const craftCards = [
  {
    n: "1",
    title: "Quality before speed",
    description:
      "We test each release before it reaches you. We would rather delay a launch by a day than fix a broken product afterwards.",
    cls: "about-card-top",
  },
  {
    n: "2",
    title: "Working alongside your team",
    description:
      "We can join your daily calls and work in the tools you already use. The knowledge stays with your team, not just with us.",
    cls: "about-card-middle",
  },
  {
    n: "3",
    title: "Tied to your goals",
    description:
      "Every feature connects to an outcome you agreed on at the start. If a request won't move that outcome, we tell you before we build it.",
    cls: "about-card-bottom",
  },
] as const;

const craftChecks = [
  "Scope and price agreed in writing before work starts",
  "Working builds every week, so you can see progress",
  "Senior engineers on every project",
] as const;

const serviceIcons = [Bot, Sparkles, LineChart, Smartphone, Compass];

const industryIcons = {
  ecommerce: ShoppingBag,
  finance: Landmark,
  fintech: Wallet,
  healthcare: HeartPulse,
  edtech: GraduationCap,
  logistics: Truck,
  "real-estate": Building2,
  food: UtensilsCrossed,
  manufacturing: Factory,
  hrms: Users,
} as const;

export function TrustedStrip() {
  return (
    <section
      data-nav-light
      className="relative overflow-hidden rounded-t-[50px] bg-[#e7fbff] py-16 text-[#0b1020] md:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#0b102012_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="container-x relative">
        <Reveal>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#4b8cff]/25 bg-white/70 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#4b8cff] backdrop-blur">
              <Boxes size={12} /> Our services
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Five stages from busywork to{" "}
              <span className="italic text-[#4b8cff]">AUTONOMY</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              Whether you need an AI agent for customer support, a dashboard for your numbers, or a
              mobile app for your customers, we handle it end to end. Pick the service that matches
              your problem.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceNav.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link href={`/services/${s.slug}`} data-cursor className="block h-full">
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/80 bg-white/80 p-5 shadow-[0_12px_40px_rgba(15,40,70,0.08)] backdrop-blur-md"
                  >
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#11cfff] to-[#4b8cff] transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#0b1020] text-[#6af3ff] transition duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#11cfff] group-hover:to-[#4b8cff] group-hover:text-[#071018]">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-[15px] font-bold leading-snug">{s.title}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{s.homeBlurb}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#4b8cff]">
                      Explore
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            Industries we work in
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            Each industry has its own rules and failure points, so we learn yours before we design
            anything.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => {
            const Icon = industryIcons[ind.slug as keyof typeof industryIcons] ?? Boxes;
            return (
              <Reveal key={ind.slug} delay={0.08 + i * 0.03}>
                <Link href={`/industries/${ind.slug}`} data-cursor className="block">
                  <motion.article
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-white/65 px-3.5 py-3 shadow-[0_8px_24px_rgba(15,40,70,0.06)] backdrop-blur-md transition-colors duration-300 hover:border-transparent hover:bg-[#0b1020]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#e7fbff] text-[#0b6ea8] transition duration-300 group-hover:bg-[#11cfff] group-hover:text-[#071018]">
                      <Icon size={16} />
                    </span>
                    <span className="text-left text-xs font-bold leading-snug text-[#0b1020] transition-colors duration-300 group-hover:text-white">
                      {ind.chip}
                    </span>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>


        <div className="mt-10 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0b1020] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(11,16,32,0.25)] transition hover:bg-[#11182c]"
            data-cursor
          >
            See our work
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

type AboutCraftProps = {
  overlap?: boolean;
  heading?: ReactNode;
  body?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaClassName?: string;
};

export function AboutCraft({
  overlap = true,
  heading,
  body,
  ctaHref = "/about",
  ctaLabel = "About RoboPylot",
  ctaClassName,
}: AboutCraftProps) {
  return (
    <section
      id="who-we-are"
      className={`relative z-[1] text-white${overlap ? " -mt-10" : ""}`}
      style={{
        background: "radial-gradient(circle at top left, #1a1c35, #070913)",
        padding: "120px 0",
        borderTopLeftRadius: overlap ? 48 : 0,
        borderTopRightRadius: overlap ? 48 : 0,
      }}
    >
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <p className="mb-6 inline-flex rounded-full border border-[#6af3ff]/50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6af3ff]">
            Who we are
          </p>
          <h2 className="max-w-[580px] font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.045em] md:text-[48px] lg:text-[54px]">
            {heading ?? (
              <>
                A technology partner built on
                {/* <br /> */}
                careful <span className="italic-accent">engineering</span>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-[470px] text-[15px] leading-[1.8] text-[#9aa3b8]">
            {body ??
              "We look at how your business runs before we suggest anything. Then we build the part that will actually help, and we explain every decision in plain language."}
          </p>
          <ul className="mt-8 space-y-3.5 text-[15px] font-medium">
            {craftChecks.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#3ee6ff] text-[#070913]">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-white">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href={ctaHref}
              data-cursor
              className={
                ctaClassName ??
                "inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-[13px] text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/5"
              }
            >
              {ctaLabel} <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-end lg:min-h-[460px]">
            <div className="flex w-full max-w-[480px] flex-col items-end gap-5 max-lg:max-w-none">
              {craftCards.map((card) => (
                <article key={card.title} className={`premium-card ${card.cls}`}>
                  <span className="card-watermark font-display">{card.n}</span>
                  <h3 className="font-display">{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OutcomeStrip() {
  return (
    <section className="relative z-0 bg-[#070913]">
      <div className="container-x">
        <div className="services-stats-grid">
          {[
            ["5", "Service lines"],
            ["10+", "Industries served"],
            ["95%", "Client retention rate"],
            ["Free", "Discovery consultation"],
          ].map(([n, l]) => (
            <div key={l} className="service-stat">
              <h4>{n}</h4>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider">
        <div className="divider-line" />
      </div>
    </section>
  );
}

export { ProcessPreview } from "@/components/sections/ProcessPreview";

const stackRows = [
  {
    label: "Web and back end",
    dir: "marquee-left" as const,
    items: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "Vue", icon: "devicon-vuejs-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: ".NET", icon: "devicon-dot-net-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    ],
  },
  {
    label: "Mobile",
    dir: "marquee-right" as const,
    items: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Swift", icon: "devicon-swift-plain colored" },
      { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
      { name: "Android", icon: "devicon-android-plain colored" },
    ],
  },
  {
    label: "AI and data",
    dir: "marquee-left" as const,
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Machine learning", icon: "devicon-tensorflow-original colored" },
      { name: "OpenAI", icon: "devicon-python-plain colored" },
      { name: "Anthropic", icon: "devicon-python-plain colored" },
      { name: "RAG pipelines", icon: "devicon-postgresql-plain colored" },
    ],
  }
  // ,
  // {
  //   label: "Design and CMS",
  //   dir: "marquee-right" as const,
  //   items: [
  //     { name: "Figma", icon: "devicon-figma-plain colored" },
  //     { name: "WordPress", icon: "devicon-wordpress-plain colored" },
  //     { name: "Webflow", icon: "devicon-html5-plain colored" },
  //   ],
  // },
];

export function TechMarquees() {
  return (
    <section className="stack-section">
      <div className="container-x">
        <Reveal>
          <div className="stack-header">
            <div className="badge badge-outline">OUR STACK</div>
            <h2 className="section-title">
              Tools chosen for the job,{" "}
              <i>
                <span className="gradient-text-1">not for the trend</span>
              </i>
            </h2>
            <p className="section-subtitle">
              We pick the technology after we understand your problem. That keeps the product
              {/* <br /> */}
              easy to maintain and easy to hand over to your own team.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="marquees-wrapper">
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />
        {stackRows.map((row, rowIndex) => (
          <div key={row.label} className="stack-row">
            <p className="stack-row-label">{row.label}</p>
            <div className={`marquee ${row.dir}`}>
              <div className="marquee-content">
                {[0, 1, 2, 3].map((copy) =>
                  row.items.map((item) => (
                    <div key={`${item.name}-${copy}-${rowIndex}`} className="tech-pill" data-cursor>
                      <i className={item.icon} aria-hidden />
                      {item.name}
                    </div>
                  )),
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" style={{ marginTop: 60, marginBottom: 60 }}>
        <Link href="/services" className="btn btn-outline" data-cursor>
          SEE ALL TECHNOLOGIES
          <span className="icon-arrow">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </Link>
      </div>

      <div className="section-divider">
        <div className="divider-line" />
      </div>
    </section>
  );
}

export { IndustriesPreview } from "@/components/sections/IndustriesPreview";

export { WhyChoose } from "@/components/sections/WhyChoose";

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

export { FaqSection } from "@/components/sections/FaqSection";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="glow-orb right-[-80px] top-[-120px] h-[420px] w-[420px] bg-[var(--brand)] opacity-20" />
      <div className="container-x relative text-center">
        <h2 className="font-display text-4xl font-bold md:text-6xl">
          Not sure if we&apos;re the
          <br />
          <span className="italic-accent">right fit?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--muted)]">
          Book a free 30-minute call. Tell us what&apos;s slowing your business down, and we&apos;ll
          tell you honestly whether we can help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Book a free call</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
