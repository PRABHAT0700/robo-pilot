import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <CursorReactiveField />
        <div className="container-x relative z-10 max-w-4xl">
          <Reveal>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
              Service
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-[var(--muted)]">{service.long}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Start this engagement ↗</Button>
              <Button href="/services" variant="ghost">
                All services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--bg-elevated)] py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Outcomes you can expect</h2>
            <ul className="mt-6 space-y-3">
              {service.outcomes.map((o) => (
                <li key={o} className="flex gap-3 rounded-xl border border-white/10 bg-[var(--bg-primary)] px-4 py-3 text-sm">
                  <span className="text-[var(--brand)]">↗</span>
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Capability stack</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.capabilities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--muted)]"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-6">
              <h3 className="font-display text-lg font-bold">Ready to go deeper?</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Share your constraints and we&apos;ll propose a focused discovery sprint.
              </p>
              <div className="mt-4">
                <Button href="/contact" variant="secondary">
                  Book discovery
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
