import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
};

export function Marquee({ children, reverse, duration = 32, className }: Props) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn("marquee-track gap-4", reverse && "reverse")}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex items-center gap-4 pr-4">{children}</div>
        <div className="flex items-center gap-4 pr-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
