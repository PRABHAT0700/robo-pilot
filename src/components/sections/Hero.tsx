"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroAtmosphere } from "@/components/effects/HeroAtmosphere";
import { Bot, Cloud, Code2, LineChart } from "lucide-react";

const nodes = [
  { t: "AI & AUTOMATION", s: "Intelligent workflows", Icon: Bot, className: "left-0 top-[6%]" },
  { t: "CLOUD SYSTEMS", s: "Connected platforms", Icon: Cloud, className: "right-0 top-[12%]" },
  { t: "CUSTOM SOFTWARE", s: "Built around you", Icon: Code2, className: "bottom-[12%] left-0" },
  { t: "DATA & INSIGHTS", s: "Decisions with clarity", Icon: LineChart, className: "bottom-[4%] right-0" },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-8 pb-20 md:pt-12">
      <HeroAtmosphere />

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--brand)]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand)] shadow-[0_0_10px_#00d2ff]" />
            Your technology partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
          >
            Build Smarter.
            <br />
            <span className="text-gradient">Move Faster.</span>
            <br />
            Grow Further.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg text-[var(--muted)]"
          >
            We turn ambitious ideas into intelligent digital solutions. From AI-powered automation to
            custom software, cloud, and enterprise systems — we help businesses transform the way they work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/services">Explore Our Services ↗</Button>
            <Button href="/contact" variant="secondary" className="!text-[#0a0a0a]">
              Book a Consultation
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto grid min-h-[420px] w-full max-w-lg place-items-center"
        >
          <div className="absolute aspect-square w-[95%] rounded-full border border-cyan-400/20 animate-spin-slow" />
          <div className="absolute aspect-square w-[72%] rounded-full border border-dashed border-[#0072ff]/45 animate-spin-reverse" />
          <div className="absolute aspect-square w-[50%] rounded-full border border-cyan-300/15" />

          <motion.div
            className="relative z-10 overflow-hidden rounded-[36px] p-1 shadow-[0_0_80px_rgba(0,210,255,0.35)]"
            style={{ background: "var(--gradient-brand)" }}
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative overflow-hidden rounded-[32px] bg-black p-4">
              <Image
                src="/robopilot-logo.jpg"
                alt="Robopilot AI logo"
                width={180}
                height={180}
                className="h-40 w-40 object-cover md:h-44 md:w-44"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,210,255,0.2),transparent_55%)]" />
            </div>
          </motion.div>

          {nodes.map((n, i) => (
            <motion.div
              key={n.t}
              className={`absolute z-20 flex items-center gap-2.5 rounded-2xl border border-cyan-400/20 bg-[#0a101c]/92 px-3 py-2.5 text-xs font-bold shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md ${n.className}`}
              animate={{ y: [0, i % 2 ? 10 : -10, 0] }}
              transition={{ duration: 3.8 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-cyan-400/15 text-[var(--brand)]">
                <n.Icon size={16} />
              </span>
              <span>
                {n.t}
                <small className="mt-0.5 block font-medium text-[var(--muted)]">{n.s}</small>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
