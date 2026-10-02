"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { serviceMarquee } from "@/lib/content";

function HeroOrbit() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden>
      <div className="absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(17,207,255,0.16)_0%,rgba(76,140,255,0.08)_38%,transparent_70%)] blur-2xl" />
      <motion.div
        className="absolute right-[14%] top-[22%] h-72 w-72 rounded-full border border-cyan-300/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[20%] top-[28%] h-52 w-52 rounded-full border border-dashed border-violet-400/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[28%] top-[38%] h-28 w-28 rounded-full border border-cyan-200/25"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.9, 0.45] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute right-[36%] top-[34%] h-2.5 w-2.5 rounded-full bg-[#6af3ff] shadow-[0_0_18px_#6af3ff]"
        animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute right-[18%] top-[58%] h-2 w-2 rounded-full bg-[#9c7bff] shadow-[0_0_16px_#9c7bff]"
        animate={{ y: [0, 16, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute right-[42%] top-[62%] h-1.5 w-1.5 rounded-full bg-white/80"
        animate={{ scale: [1, 1.6, 1], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-10 md:min-h-[calc(100vh-76px)] md:pt-14">
      <HeroOrbit />

      <div className="container-x relative z-10 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#6af3ff]/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6af3ff]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#6af3ff]" />
          AI SOLUTIONS · EST 2024 · INDIA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="max-w-[920px] overflow-visible font-display text-[40px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[52px] md:text-[68px] lg:text-[76px]"
        >
          We build digital
          <br />
          Products that <span className="italic-move">move</span>
          <br />
          <span className="italic-biz">businesses</span> forward
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/55 md:text-base"
        >
          Build. Scale. Grow. With the Right Technology Partner.
          <br />
          AI agents, machine learning, mobile products and consulting for growing businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <SpotlightButton href="/contact" variant="talk">
              Let&apos;s Talk
            </SpotlightButton>
            <SpotlightButton href="/work" variant="works">
              Our Works
            </SpotlightButton>
          </div>
          <div className="grid grid-cols-3 gap-8 lg:gap-12">
            {[
              ["5", "Service lines"],
              ["10+", "Industries served"],
              ["1", "Partner for AI + product"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-extrabold tracking-tight md:text-[40px]">{n}</div>
                <div className="mt-1 text-[11px] text-white/45">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
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
