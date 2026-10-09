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
    title: "Excellence",
    description: "Fast delivery, production-ready code, zero shortcuts on quality.",
    cls: "about-card-top",
  },
  {
    n: "2",
    title: "Integration",
    description: "We embed with your team. Your success is our success, always.",
    cls: "about-card-middle",
  },
  {
    n: "3",
    title: "Alignment",
    description: "Every project aligned to your business goals, not just a checklist.",
    cls: "about-card-bottom",
  },
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
              <Boxes size={12} /> How we ship
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              Teams who have <span className="italic text-[#4b8cff]">shipped</span> with us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              From product teams to operations groups — the services, industries and problem types we
              actually build for.
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
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{s.short}</p>
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

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
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
                      {ind.title}
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
            See selected work
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

export function AboutCraft() {
  return (
    <section
      className="relative z-[1] -mt-10 text-white"
      style={{
        background: "radial-gradient(circle at top left, #1a1c35, #070913)",
        padding: "120px 0",
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
      }}
    >
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <p className="mb-6 inline-flex rounded-full border border-[#6af3ff]/50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6af3ff]">
            Who we are
          </p>
          <h2 className="max-w-[580px] font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.045em] md:text-[48px] lg:text-[54px]">
            An AI Partner built on
            <br />
            Craft & <span className="italic-accent">Conviction</span>
          </h2>
          <p className="mt-6 max-w-[470px] text-[15px] leading-[1.8] text-[#9aa3b8]">
            RoboPilot helps organizations modernize operations, build digital products and put AI
            into workflows that people actually use. We combine business understanding with
            practical engineering — not slideware.
          </p>
          <ul className="mt-8 space-y-3.5 text-[15px] font-medium">
            {["Purpose-Driven Delivery", "Velocity Without Compromise", "True Partnership Model"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#3ee6ff] text-[#070913]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-white">{t}</span>
                </li>
              ),
            )}
          </ul>
          <div className="mt-10">
            <Link
              href="/about"
              data-cursor
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-[13px] text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/5"
            >
              Learn more about us <ArrowUpRight size={14} />
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
            ["200+", "Marquee clients"],
            ["10+", "Industries served"],
            ["97%", "Client retention"],
            ["6+", "Years in business"],
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
    dir: "marquee-left" as const,
    items: [
      { name: "React Js", icon: "devicon-react-original colored" },
      { name: "Next Js", icon: "devicon-nextjs-original colored" },
      { name: "Node Js", icon: "devicon-nodejs-plain colored" },
      { name: "Typescript", icon: "devicon-typescript-plain colored" },
      { name: "Javascript", icon: "devicon-javascript-plain colored" },
      { name: "Angular Js", icon: "devicon-angularjs-plain colored" },
      { name: "Vue Js", icon: "devicon-vuejs-plain colored" },
    ],
  },
  {
    dir: "marquee-right" as const,
    items: [
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Springboot", icon: "devicon-spring-original colored" },
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Dot Net", icon: "devicon-dot-net-plain colored" },
      { name: "Mongo DB", icon: "devicon-mongodb-plain colored" },
    ],
  },
  {
    dir: "marquee-left" as const,
    items: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Swift", icon: "devicon-swift-plain colored" },
      { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
      { name: "Wordpress", icon: "devicon-wordpress-plain colored" },
      { name: "Web Flow", icon: "devicon-html5-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Android", icon: "devicon-android-plain colored" },
    ],
  },
];

export function TechMarquees() {
  return (
    <section className="stack-section">
      <div className="container-x">
        <Reveal>
          <div className="stack-header">
            <div className="badge badge-outline">OUR STACK</div>
            <h2 className="section-title">
              Technologies,{" "}
              <i>
                <span className="gradient-text-1">we master</span>
              </i>
            </h2>
            <p className="section-subtitle">
              Battle-tested tools, modern frameworks, scalable architectures —
              <br />
              chosen for your project&apos;s specific needs.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="marquees-wrapper">
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />
        {stackRows.map((row, rowIndex) => (
          <div key={`${row.dir}-${rowIndex}`} className={`marquee ${row.dir}`}>
            <div className="marquee-content">
              {[0, 1].map((copy) =>
                row.items.map((item) => (
                  <div key={`${item.name}-${copy}`} className="tech-pill" data-cursor>
                    <i className={item.icon} aria-hidden />
                    {item.name}
                  </div>
                )),
              )}
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
