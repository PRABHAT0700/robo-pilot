"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { serviceMarquee } from "@/lib/content";

function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={className} data-testid="hero-visual">
      <div className="hero-visual-glow" />
      <div className="hero-visual-stage">
        <div className="hero-visual-card">
          <Image
            src="/images/robo-hero-section.jpeg"
            alt="Autonomous robotics — RoboPylot AI"
            width={1200}
            height={1500}
            priority
            className="hero-visual-img"
          />
          <div className="hero-visual-shade" />
          <div className="hero-visual-live">live · autonomous</div>
        </div>
        <div className="hero-visual-chip hero-visual-chip--runtime" aria-hidden>
          <p>99.98%</p>
          <span>agent runtime</span>
        </div>
        <div className="hero-visual-chip hero-visual-chip--tasks" aria-hidden>
          <p>140K+</p>
          <span>tasks executed</span>
        </div>
        <div className="hero-visual-chip hero-visual-chip--efficiency" aria-hidden>
          <Zap size={16} />
          <p>4.2x</p>
          <span>efficiency</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-home relative overflow-x-clip pt-8 sm:pt-10 md:min-h-[calc(100dvh-76px)] md:pt-14">
      <HeroVisual className="hero-visual hero-visual--desktop" />

      <div className="container-x hero-home-copy relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-kicker mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#6af3ff]/45 px-3 py-1.5 text-[10px] font-semibold uppercase text-[#6af3ff] sm:mb-8 sm:px-4 sm:text-[11px]"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6af3ff]" />
          AI Automation Studio — India, USA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="hero-home-title max-w-[640px] font-display font-extrabold text-white"
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
          Autonomous AI agents, enterprise-grade ERP automations, and custom intelligence pipelines engineered for organizations ready to scale with zero manual friction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-8 flex max-w-xl flex-col gap-8 sm:mt-12 sm:gap-10"
        >
          <div className="hero-home-actions flex flex-wrap items-center gap-3">
            <SpotlightButton href="/contact" variant="talk">
              Let&apos;s Talk
            </SpotlightButton>
            <SpotlightButton href="/work" variant="works">
              Our Works
            </SpotlightButton>
          </div>
          {/* <div className="grid grid-cols-3 gap-6 sm:gap-8">
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
          </div> */}
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
