"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  variant: "talk" | "works";
  children: ReactNode;
};

export function SpotlightButton({ href, variant, children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - box.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - box.top}px`);
  }

  return (
    <Link
      ref={ref}
      href={href}
      data-cursor
      data-spot
      onMouseMove={onMove}
      className={cn(
        "spot-btn group relative inline-flex items-center overflow-hidden rounded-full text-[13px] font-bold uppercase tracking-[0.14em] transition-colors duration-300",
        variant === "talk" &&
          "bg-[#6af3ff] py-1.5 pl-6 pr-1.5 text-[#071018] hover:bg-white",
        variant === "works" &&
          "bg-white px-7 py-3.5 text-[#071018] hover:bg-[#6af3ff]",
      )}
    >
      <span className="spot-btn__lens" aria-hidden />
      <span className="relative z-10">{children}</span>
      {variant === "talk" ? (
        <span className="relative z-10 ml-5 grid h-10 w-10 place-items-center rounded-full bg-[#071018] text-[#6af3ff] transition-colors duration-300 group-hover:bg-[#0b1020] group-hover:text-white">
          <ArrowRight size={16} />
        </span>
      ) : (
        <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </Link>
  );
}
