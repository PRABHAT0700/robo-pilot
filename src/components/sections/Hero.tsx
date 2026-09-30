"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { serviceMarquee } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-4 pt-10 md:min-h-[88vh] md:pt-16">
      <motion.span
        className="absolute right-[12%] top-[28%] hidden h-3 w-3 rounded-full bg-[var(--brand)] lg:block"
        animate={{ y: [0, -18, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-64 w-64 rounded-full border border-[var(--brand)]/20 lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[14%] top-[24%] hidden h-40 w-40 rounded-full border border-dashed border-[#9c7bff]/30 lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
          AI SOLUTIONS · EST 2024 · INDIA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]"
        >
          We build digital
          <br />
          Products that <span className="italic-accent">move</span>
          <br />
          <span className="italic-accent">businesses</span> forward
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mt-6 max-w-xl text-base text-[var(--muted)] md:text-lg"
        >
          Build. Scale. Grow. With the Right Technology Partner.
          <br />
          AI agents, machine learning, mobile products and consulting for growing businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" className="!bg-[var(--brand)] !text-[#05060a]">
              Let&apos;s Talk <ArrowRight size={16} />
            </Button>
            <Button href="/work" variant="secondary">
              Our Works →
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              ["5", "Service lines"],
              ["10+", "Industries served"],
              ["1", "Partner for AI + product"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-bold md:text-4xl">{n}</div>
                <div className="text-xs text-[var(--muted)]">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 border-y border-white/10 py-4">
        <Marquee duration={26}>
          {serviceMarquee.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
