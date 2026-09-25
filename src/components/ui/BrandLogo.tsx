import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  withText?: boolean;
  href?: string;
};

export function BrandLogo({ className, size = 40, withText = true, href = "/" }: Props) {
  const mark = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className="relative shrink-0 overflow-hidden rounded-[10px] ring-1 ring-white/10"
        style={{ width: size, height: size }}
      >
        <Image
          src="/robopilot-logo.jpg"
          alt="Robopilot AI"
          width={size}
          height={size}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-extrabold tracking-[-0.04em] text-white sm:text-[1.15rem]">
            Robo
            <span className="text-[var(--brand)]">Pilot</span>
          </span>
          <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">
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
