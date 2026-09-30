"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
};

export function CoverImage({ src, alt, className, fallbackLabel }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "grid place-items-center bg-gradient-to-br from-[#10203a] via-[#0b1020] to-[#11cfff22] text-center",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <div>
          <div className="mx-auto mb-2 h-10 w-10 rounded-xl bg-brand-gradient" />
          <p className="px-4 text-sm font-semibold text-white/80">{fallbackLabel || alt}</p>
        </div>
      </div>
    );
  }

  return (
    // Native img so a missing remote file never traps Next Image in a blank/alt-only state.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-cover", className)}
      loading="lazy"
    />
  );
}
