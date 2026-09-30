"use client";

import Link from "next/link";
import { ArrowUpRight, Bot, Boxes, LineChart, Smartphone, Compass } from "lucide-react";
import { serviceNav } from "@/lib/content";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Bot, Boxes, LineChart, Smartphone, Compass];

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? serviceNav.slice(0, limit) : serviceNav;

  return (
    <section className="relative py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Five service lines. One partner."
            description="From AI agents and analytics to mobile products and consulting — designed as a connected system, not disconnected vendors."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => {
            const Icon = icons[i] ?? Bot;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-6 transition hover:-translate-y-1 hover:border-[var(--brand)]/40"
                  data-cursor
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{service.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--brand)]">
                    {service.cta} <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
