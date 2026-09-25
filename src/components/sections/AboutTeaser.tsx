"use client";

import Image from "next/image";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { benefits } from "@/lib/content";

export function AboutTeaser() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-orb left-[-10%] top-10 h-72 w-72 bg-[#00d2ff] opacity-20" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-cyan-400/20">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
              alt="AI technology visualization"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="absolute h-56 w-56 rounded-full border border-cyan-400/25 animate-spin-slow" />
              <div className="absolute h-40 w-40 rounded-full border border-dashed border-[#0072ff]/50 animate-spin-reverse" />
              <div className="relative z-10 overflow-hidden rounded-3xl p-1 shadow-[0_0_50px_rgba(0,210,255,0.4)]" style={{ background: "var(--gradient-brand)" }}>
                <div className="rounded-[22px] bg-black p-3">
                  <Image
                    src="/robopilot-logo.jpg"
                    alt="Robopilot"
                    width={96}
                    height={96}
                    className="h-24 w-24 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
            <span className="h-0.5 w-5 rounded bg-current" />
            About Robopilot AI
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Technology Should Make Business Easier.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            We believe great technology starts with understanding real business challenges.
          </p>
          <p className="mt-3 text-[var(--muted)]">
            Robopilot AI helps organizations modernize operations, build digital products, and unlock
            new opportunities — combining business understanding, engineering, and emerging tech into
            solutions that are practical, scalable, and future-ready.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-bold">
            {["Business-first thinking", "Practical innovation", "Scalable architecture", "Long-term partnership"].map(
              (t) => (
                <span key={t} className="text-[var(--text)]">
                  <span className="mr-2 text-[var(--brand)]">✓</span>
                  {t}
                </span>
              ),
            )}
          </div>
          <div className="mt-8">
            <Button href="/about">Get to Know Us ↗</Button>
          </div>
        </Reveal>
      </div>

      <div className="container-x mt-20">
        <Reveal>
          <div className="rounded-3xl border border-cyan-400/15 bg-[var(--bg-elevated)] p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              A Partner That Understands Your Business
            </h3>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">
              We bring business priorities and technical execution together, so digital initiatives have
              clear purpose from the beginning.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <article key={b.title} className="rounded-2xl border border-cyan-400/10 bg-white/5 p-5 transition hover:border-cyan-400/30">
                  <h4 className="font-display font-bold">{b.title}</h4>
                  <p className="mt-2 text-sm text-[var(--muted)]">{b.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
