import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em]",
            light ? "text-[var(--brand)]" : "text-[var(--brand)]",
          )}
        >
          <span className="h-0.5 w-5 rounded bg-current" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-[var(--muted)] md:text-lg">{description}</p>
      )}
    </div>
  );
}
