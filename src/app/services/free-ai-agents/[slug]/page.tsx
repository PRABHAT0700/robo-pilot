import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { freeAgents } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { IMG } from "@/lib/media";
import { LeadForm } from "@/components/sections/LeadForm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return freeAgents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = freeAgents.find((a) => a.slug === slug);
  if (!agent) return { title: "Agent" };
  return { title: agent.name, description: agent.description };
}

export default async function AgentDetailPage({ params }: Props) {
  const { slug } = await params;
  const agent = freeAgents.find((a) => a.slug === slug);
  if (!agent) notFound();

  return (
    <>
      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
            Free AI Agent
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{agent.name}</h1>
          <p className="mt-4 text-lg text-[var(--muted)]">{agent.long}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {agent.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold">
                {t}
              </span>
            ))}
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs">{agent.category}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Try this agent</Button>
            <Button href="/services/free-ai-agents" variant="secondary">
              Back to marketplace
            </Button>
          </div>
        </div>
        <div className="h-[320px] overflow-hidden rounded-[28px] border border-white/10">
          <CoverImage src={IMG.laptopDash} alt={agent.name} className="h-full" />
        </div>
      </section>
      <section className="container-x pb-16">
        <h2 className="font-display text-2xl font-bold">What it does</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {agent.capabilities.map((c) => (
            <div key={c} className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-5 font-semibold">
              {c}
            </div>
          ))}
        </div>
      </section>
      <LeadForm defaultService="Free AI Agents" />
    </>
  );
}
