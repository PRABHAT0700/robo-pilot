import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { freeAgents } from "@/lib/content";
import { IMG } from "@/lib/media";
import { ServiceHero } from "@/components/services/ServiceBlocks";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

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
      <ServiceHero
        eyebrow="FREE AI AGENT"
        title={
          <>
            {agent.name.split(" ").slice(0, -1).join(" ") || agent.name}{" "}
            <span className="gradient-text-3 italic">{agent.name.split(" ").slice(-1)}</span>
          </>
        }
        description={agent.long}
        primary={{ href: "/contact", label: "Try this agent" }}
        secondary={{ href: "/services/free-ai-agents", label: "Marketplace" }}
        visual={
          // eslint-disable-next-line @next/next/no-img-element
          <img src={IMG.laptopDash} alt={agent.name} className="service-hero-img" />
        }
      />

      <section className="mission-vision-section">
        <div className="container-x">
          <div className="values-header" style={{ textAlign: "left", marginBottom: 40 }}>
            <div className="badge badge-outline">CAPABILITIES</div>
            <h2 className="section-title">What it does</h2>
          </div>
          <div className="svc-cap-grid">
            {agent.capabilities.map((c) => (
              <article key={c} className="mv-card mission-card svc-cap-card">
                <h3 className="mv-title">{c}</h3>
                <p className="mv-desc">Built into the agent so your team can adopt it without a custom build first.</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {agent.tags.map((t) => (
              <span key={t} className="flip-card-front svc-chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <ContactSection />
    </>
  );
}
