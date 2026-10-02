import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  withText?: boolean;
  href?: string;
  inverted?: boolean;
};

export function BrandLogo({ className, size = 40, withText = true, href = "/", inverted = false }: Props) {
  const mark = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className="relative shrink-0 overflow-hidden rounded-[10px] ring-1 ring-white/10"
        style={{ width: size, height: size }}
      >
        <Image
          src="/robopilot-logo.jpg"
          alt="RoboPilot"
          width={size}
          height={size}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.05rem] font-bold tracking-[-0.04em] sm:text-[1.2rem]",
              inverted ? "text-[#0b1020]" : "text-white",
            )}
          >
            Robo<span className="text-[var(--brand)]">Pilot</span>
          </span>
          <span
            className={cn(
              "mt-1 text-[9px] font-semibold uppercase tracking-[0.28em]",
              inverted ? "text-[#0b1020]/45" : "text-white/40",
            )}
          >
            Intelligence
          </span>
        </span>
      )}
    </span>
  );

  if (!href) return mark;
  return (
    <Link href={href} className="inline-flex items-center" data-cursor>
      {mark}
    </Link>
  );
}
