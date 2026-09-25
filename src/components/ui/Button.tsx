"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: Props) {
  const styles = cn(
    "group relative inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 py-3 text-sm font-bold tracking-wide transition-transform duration-200",
    variant === "primary" &&
      "bg-brand-gradient text-white shadow-[0_12px_40px_var(--brand-glow)] hover:-translate-y-0.5",
    variant === "secondary" &&
      "border border-white/80 bg-white !text-[#0a0a0a] hover:-translate-y-0.5 hover:bg-white",
    variant === "ghost" &&
      "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10 inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap [&_svg]:shrink-0">
        {children}
      </span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={href} className={styles} data-cursor>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={styles}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      data-cursor
    >
      {inner}
    </motion.button>
  );
}
