import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  visual: ReactNode;
};

export function ServiceHero({ eyebrow, title, description, primary, secondary, visual }: Props) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary && (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>{visual}</Reveal>
      </div>
    </section>
  );
}

export function CapabilityGrid({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; copy: string }[];
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <h2 className="mx-auto mb-10 max-w-3xl text-center font-display text-3xl font-bold md:text-4xl">
          {heading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--brand)]/35"
            >
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechChips({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section className="py-14">
      <div className="container-x">
        <h2 className="mb-8 text-center font-display text-3xl font-bold">{heading}</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConversionBand({
  heading,
  copy,
  cta,
  href,
}: {
  heading: string;
  copy: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="py-16">
      <div className="container-x rounded-3xl border border-white/10 bg-[var(--bg-elevated)] px-6 py-12 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--muted)]">{copy}</p>
        <div className="mt-7 flex justify-center">
          <Button href={href}>{cta}</Button>
        </div>
      </div>
    </section>
  );
}
