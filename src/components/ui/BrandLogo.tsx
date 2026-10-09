import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/robopilot-logo.png";
const LOGO_W = 898;
const LOGO_H = 202;

type Props = {
  className?: string;
  size?: number;
  withText?: boolean;
  href?: string;
  inverted?: boolean;
};

export function BrandLogo({ className, size = 44, href = "/", inverted: _inverted = false }: Props) {
  const width = Math.round(size * (LOGO_W / LOGO_H));

  const mark = (
    <span className={cn("brand-logo inline-flex items-center bg-transparent", className)}>
      <Image
        src={LOGO_SRC}
        alt="RoboPilot"
        width={width}
        height={size}
        className="h-full w-auto bg-transparent object-contain"
        style={{ height: size, width: "auto", background: "transparent" }}
        priority
      />
    </span>
  );

  if (!href) return mark;
  return (
    <Link href={href} className="inline-flex items-center" data-cursor aria-label="RoboPilot home">
      {mark}
    </Link>
  );
}
