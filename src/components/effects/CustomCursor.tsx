"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SEL = "a, button, input, textarea, select, summary, [data-cursor], label";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hoveringRef = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const trailX = useSpring(x, { stiffness: 1600, damping: 42, mass: 0.06 });
  const trailY = useSpring(y, { stiffness: 1600, damping: 42, mass: 0.06 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const next = Boolean((e.target as HTMLElement | null)?.closest(HOVER_SEL));
      if (next !== hoveringRef.current) {
        hoveringRef.current = next;
        setHovering(next);
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-lens cursor-lens--core"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 0.7 : 1 }}
        transition={{ type: "tween", duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      <motion.div
        className="cursor-lens cursor-lens--trail"
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1 : 0.42 }}
        transition={{ type: "spring", stiffness: 900, damping: 28, mass: 0.12 }}
        aria-hidden
      />
    </>
  );
}
