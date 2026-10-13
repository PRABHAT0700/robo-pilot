"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SpotlightButton } from "@/components/ui/SpotlightButton";

const nodes = [
  { x: 72, y: 18, r: 7, color: "#6af3ff" },
  { x: 88, y: 28, r: 10, color: "#9c7bff" },
  { x: 78, y: 46, r: 6, color: "#6af3ff" },
  { x: 92, y: 58, r: 8, color: "#c084fc" },
  { x: 68, y: 62, r: 11, color: "#4b8cff" },
  { x: 84, y: 78, r: 7, color: "#6af3ff" },
  { x: 62, y: 36, r: 5, color: "#9c7bff" },
];

const links: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 6],
  [1, 3],
  [2, 4],
  [2, 3],
  [4, 5],
  [3, 5],
  [6, 2],
];

export function AboutHero() {
  return (
    <section className="about-hero relative overflow-hidden bg-[var(--bg-deep)] pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(17,207,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[8%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(17,207,255,0.14)_0%,rgba(156,123,255,0.1)_40%,transparent_70%)] blur-2xl" />

      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" aria-hidden>
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={`${nodes[a].x}%`}
            y1={`${nodes[a].y}%`}
            x2={`${nodes[b].x}%`}
            y2={`${nodes[b].y}%`}
            stroke="rgba(106,243,255,0.22)"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={`${n.x}%`} cy={`${n.y}%`} r={n.r + 10} fill={n.color} opacity="0.12" />
            <circle cx={`${n.x}%`} cy={`${n.y}%`} r={n.r} fill={n.color} opacity="0.9" />
          </g>
        ))}
      </svg>

      <div className="container-x relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#6af3ff]/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6af3ff]"
        >
          About us
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="max-w-[820px] font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-[52px] md:text-[68px] lg:text-[76px]"
        >
          A small company,
          <br />
          big obsession with <span className="italic-accent">craft.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/55 md:text-base"
        >
          RoboPilot started in Indore in 2020 as three friends who wanted to build software the way
          it deserved to be built. Today, we&apos;re a 50-person company shipping products for
          ambitious teams across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <SpotlightButton href="/contact" variant="talk">
            Start a Project
          </SpotlightButton>
          <a href="#who-we-are" className="spot-btn group relative inline-flex items-center overflow-hidden rounded-full bg-white px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#071018] transition-colors duration-300 hover:bg-[#6af3ff]" data-cursor>
            Meet the team
            <span className="relative z-10 ml-2">
              <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
