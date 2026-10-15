"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { serviceMarquee } from "@/lib/content";

function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="hero-visual-glow" />
      <div className="hero-visual-stage">
        <div className="hero-visual-card">
          <Image
            src="/hero-ai-ecosystem.png"
            alt=""
            width={1024}
            height={682}
            priority
            className="hero-visual-img"
          />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-visible pt-10 md:min-h-[calc(100vh-76px)] md:pt-14">
      <HeroVisual className="hero-visual hero-visual--desktop" />

      <div className="container-x relative z-10 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#6af3ff]/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6af3ff]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#6af3ff]" />
          AI SOLUTIONS · EST 2026 · INDIA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="max-w-[640px] overflow-visible font-display text-[40px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[52px] md:text-[68px] lg:text-[72px]"
        >
          We turn busywork
          <br />
          into software that
          <br />
          <span className="italic-move">runs</span> <span className="italic-biz">itself</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/55 md:text-base"
        >
          Build. Scale. Grow. With a technology partner that starts with your problem.
          <br />
          AI agents, machine learning, mobile apps and AI consulting for growing businesses in India
          and the UK.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-12 flex max-w-xl flex-col gap-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <SpotlightButton href="/contact" variant="talk">
              Let&apos;s Talk
            </SpotlightButton>
            <SpotlightButton href="/work" variant="works">
              Our Works
            </SpotlightButton>
          </div>
          <div className="grid grid-cols-3 gap-6 sm:gap-8">
            {[
              ["5", "Service lines"],
              ["10+", "Industries served"],
              ["1", "Partner for AI and product"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-extrabold tracking-tight md:text-[40px]">{n}</div>
                <div className="mt-1 text-[11px] text-white/45">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <HeroVisual className="hero-visual hero-visual--mobile" />
      </div>

      <div className="relative z-10 mt-16 border-t border-[rgba(255,255,255,0.05)] md:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#05060a] via-[#05060a]/80 to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#05060a] via-[#05060a]/80 to-transparent md:w-40" />
        <Marquee duration={28} className="py-4">
          {serviceMarquee.map((item) => (
            <span key={item} className="flex items-center gap-8 pr-8 text-sm font-medium text-white/75">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6af3ff]" />
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
