"use client";

import Link from "next/link";
import { Bot, Compass, LineChart, Smartphone, Sparkles } from "lucide-react";
import { serviceNav } from "@/lib/content";
import { IMG } from "@/lib/media";
import { Reveal } from "@/components/effects/Reveal";

const extras = [
  {
    icon: Bot,
    image: IMG.robot,
    blurb: "Production agents that connect to your tools, follow guardrails and escalate when a human is needed.",
  },
  {
    icon: Sparkles,
    image: IMG.cyber,
    blurb: "Try practical agents for support, sales, documents and reporting — then graduate to a custom build.",
  },
  {
    icon: LineChart,
    image: IMG.analytics,
    blurb: "Models, pipelines and dashboards that turn operational data into decisions your team can run.",
  },
  {
    icon: Smartphone,
    image: IMG.mobile,
    blurb: "iOS, Android and cross-platform apps from MVP through production, with secure APIs behind them.",
  },
  {
    icon: Compass,
    image: IMG.people,
    blurb: "Find the highest-value AI bets, sequence the roadmap and implement with the same engineering team.",
  },
] as const;

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? serviceNav.slice(0, limit) : serviceNav;

  return (
    <section className="all-works-section svc-grid-section" id="service-lines">
      <div className="container-x">
        <Reveal>
          <div className="all-works-header">
            <div className="badge badge-outline">WHAT WE DO</div>
            <h2 className="section-title">
              Five service lines.{" "}
              <span className="gradient-text-3 italic">One partner.</span>
            </h2>
            <p className="values-subtitle" style={{ marginTop: 8, textAlign: "left", marginLeft: 0 }}>
              From AI agents and analytics to mobile products and consulting — designed as a
              connected system.
            </p>
          </div>
        </Reveal>

        <div className="all-works-grid">
          {list.map((service, i) => {
            const extra = extras[i] ?? extras[0];
            const Icon = extra.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="aw-card" data-cursor>
                <div className="aw-card-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={extra.image} alt={service.title} loading="lazy" />
                  <div className="aw-pill">
                    <span className="dot-cyan" /> {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="svc-card-icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="aw-title">{service.title}</h3>
                </div>
                <div className="svc-card-body">
                  <p>{extra.blurb}</p>
                  <span className="svc-card-cta">
                    {service.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="19" x2="19" y2="5" />
                      <polyline points="9 5 19 5 19 15" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
