"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const icons = [
  { label: "AI", x: 12, y: 18 },
  { label: "☁", x: 78, y: 12 },
  { label: "API", x: 86, y: 58 },
  { label: "◈", x: 18, y: 72 },
  { label: "01", x: 48, y: 8 },
  { label: "⌘", x: 62, y: 78 },
];

export function CursorReactiveField() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(px * 40);
      my.set(py * 40);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="glow-orb left-[8%] top-[10%] h-72 w-72 bg-[var(--accent)] opacity-30" />
      <div className="glow-orb right-[5%] top-[20%] h-80 w-80 bg-[var(--brand)] opacity-25" />
      <div className="glow-orb bottom-[5%] left-[35%] h-64 w-64 bg-[var(--cyan)] opacity-15" />
      <div className="absolute inset-0 grid-fade opacity-60" />

      {icons.map((icon, i) => (
        <motion.div
          key={icon.label}
          className="absolute rounded-2xl border border-cyan-400/20 bg-[#0a101c]/80 px-3 py-2 text-xs font-semibold tracking-wide text-cyan-100/90 backdrop-blur-md"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            x: sx,
            y: sy,
          }}
          animate={{ y: [0, i % 2 === 0 ? -12 : 10, 0] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon.label}
        </motion.div>
      ))}
    </div>
  );
}
