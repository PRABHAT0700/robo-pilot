"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { CoverImage } from "@/components/ui/CoverImage";
import { pillars } from "@/lib/media";

export function FourPillars() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(pillars.length - 1, Math.floor(value * pillars.length + 0.001));
    setActive((current) => (current === next ? current : next));
  });

  const current = pillars[active];

  return (
    <section className="py-16 md:py-24">
      <div className="container-x mb-12 text-center">
        <p className="mb-4 inline-flex rounded-full border border-[var(--brand)]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
          What we do
        </p>
        <h2 className="font-display text-4xl font-bold md:text-6xl">
          Four Pillars, <span className="italic-accent">one partner</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
          AI, data, mobile and consulting — handled by one team that understands your full product loop.
        </p>
      </div>

      <div ref={ref} className="relative hidden lg:block" style={{ height: `${pillars.length * 100}vh` }}>
        <div className="sticky top-24 grid h-[72vh] grid-cols-2 items-center gap-10 px-[max(1.25rem,calc((100%-1180px)/2))]">
          <div className="relative h-full overflow-hidden rounded-[28px] bg-[#0b1020]">
            {pillars.map((p, i) => (
              <div
                key={p.slug}
                className="absolute inset-0 transition-opacity duration-500 ease-out"
                style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 2 : 1 }}
              >
                <CoverImage src={p.image} alt={p.title} className="h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#05060a]/30 to-transparent" />
              </div>
            ))}
            <motion.span
              className="absolute left-1/2 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--brand)]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <div className="relative h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col justify-center pr-6"
              >
                <h3 className="font-display text-4xl font-bold md:text-5xl">{current.title}</h3>
                <p className="mt-5 max-w-md text-[var(--muted)]">{current.copy}</p>
                <Link
                  href={`/services/${current.slug}`}
                  className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]"
                >
                  {current.cta} →
                </Link>
                <div className="pointer-events-none absolute right-0 top-10 font-display text-[140px] font-bold leading-none text-white/5">
                  {current.n}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-8 lg:hidden">
        {pillars.map((p) => (
          <article key={p.slug} className="overflow-hidden rounded-3xl border border-white/10">
            <div className="h-52">
              <CoverImage src={p.image} alt={p.title} className="h-full" />
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-[var(--brand)]">{p.n}</div>
              <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{p.copy}</p>
              <Link href={`/services/${p.slug}`} className="mt-4 inline-block text-sm font-bold text-[var(--brand)]">
                {p.cta} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
