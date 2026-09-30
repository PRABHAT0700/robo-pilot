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
    "group relative inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-[13px] font-bold uppercase tracking-[0.12em] transition-transform duration-200",
    variant === "primary" &&
      "bg-white !text-[#05060a] shadow-[0_10px_30px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:!text-[#05060a]",
    variant === "secondary" &&
      "border border-white/25 bg-transparent text-white hover:border-white hover:bg-white/5",
    variant === "ghost" &&
      "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    className,
  );

  const inner = (
    <span className="relative z-10 inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap text-inherit [&_svg]:shrink-0">
      {children}
    </span>
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
