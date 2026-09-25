"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Bot,
  Cloud,
  Cpu,
  Database,
  Network,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const floatIcons = [
  { Icon: Bot, x: 8, y: 18, delay: 0 },
  { Icon: Cloud, x: 82, y: 14, delay: 0.4 },
  { Icon: Cpu, x: 88, y: 55, delay: 0.8 },
  { Icon: Database, x: 12, y: 68, delay: 0.2 },
  { Icon: Network, x: 48, y: 8, delay: 0.6 },
  { Icon: Sparkles, x: 70, y: 78, delay: 1 },
  { Icon: Workflow, x: 28, y: 42, delay: 0.3 },
  { Icon: Zap, x: 62, y: 38, delay: 0.7 },
];

export function HeroAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 22 });
  const sy = useSpring(my, { stiffness: 50, damping: 22 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 36);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 36);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="glow-orb left-[-5%] top-[5%] h-[420px] w-[420px] bg-[#00d2ff] opacity-25 animate-pulse-soft" />
      <div className="glow-orb right-[-8%] top-[10%] h-[480px] w-[480px] bg-[#0072ff] opacity-30" />
      <div className="glow-orb bottom-[-10%] left-[30%] h-[360px] w-[360px] bg-[#2575fc] opacity-20" />

      <div className="absolute inset-0 grid-fade opacity-70" />

      <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0072ff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M80 120 H220 V260 H380 V180 H520"
          fill="none"
          stroke="url(#circuitStroke)"
          strokeWidth="1.5"
          strokeDasharray="8 10"
          style={{ animation: "circuit-flow 8s linear infinite" }}
        />
        <path
          d="M640 80 V200 H760 V320 H900"
          fill="none"
          stroke="url(#circuitStroke)"
          strokeWidth="1.5"
          strokeDasharray="6 12"
          style={{ animation: "circuit-flow 11s linear infinite reverse" }}
        />
        <path
          d="M100 420 H280 V500 H460"
          fill="none"
          stroke="url(#circuitStroke)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          style={{ animation: "circuit-flow 9s linear infinite" }}
        />
        <circle cx="220" cy="120" r="3" fill="#00d2ff" className="animate-pulse-soft" />
        <circle cx="380" cy="260" r="3" fill="#3ab5eb" className="animate-pulse-soft" />
        <circle cx="760" cy="200" r="3" fill="#00d2ff" className="animate-pulse-soft" />
      </svg>

      {floatIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/25 bg-[#0a101c]/75 text-[#00d2ff] shadow-[0_0_24px_rgba(0,210,255,0.15)] backdrop-blur-md"
          style={{ left: `${x}%`, top: `${y}%`, x: sx, y: sy }}
          animate={{ y: [0, i % 2 ? 12 : -12, 0], rotate: [0, i % 2 ? 6 : -6, 0] }}
          transition={{ duration: 4.5 + i * 0.25, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon size={18} />
        </motion.div>
      ))}
    </div>
  );
}
