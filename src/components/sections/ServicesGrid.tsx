"use client";

import Link from "next/link";
import {
  Sparkles,
  Code2,
  Smartphone,
  Cloud,
  Network,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Sparkles,
  Code2,
  Smartphone,
  Cloud,
  Network,
  BarChart3,
} as const;

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="End-to-End Technology Services"
            description="From a single business application to a connected digital ecosystem, we provide the expertise to take your ideas forward."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-cyan-400/10 bg-[var(--bg-elevated)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(0,210,255,0.15)]"
                  data-cursor
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-[var(--brand)] transition-colors group-hover:bg-[var(--brand)]/20 group-hover:text-[var(--brand)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{service.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--brand)]">
                    Explore <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
