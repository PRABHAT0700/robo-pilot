import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/effects/Reveal";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

type HeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  visual: ReactNode;
};

export function ServiceHero({ eyebrow, title, description, primary, secondary, visual }: HeroProps) {
  return (
    <section className="hero works-hero service-detail-hero">
      <div className="container-x">
        <div className="hero-content">
          <Reveal>
            <div className="badge badge-outline">
              <span className="dot-cyan" /> {eyebrow}
            </div>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{description}</p>
            <div className="hero-buttons">
              <Link href={primary.href} className="btn btn-primary" data-cursor>
                {primary.label}
                <span className="icon-circle">
                  <ArrowIcon />
                </span>
              </Link>
              {secondary ? (
                <Link href={secondary.href} className="btn btn-secondary" data-cursor>
                  {secondary.label}
                  <span className="icon-arrow">
                    <ArrowIcon />
                  </span>
                </Link>
              ) : null}
            </div>
          </Reveal>
        </div>
        <div className="service-hero-visual">{visual}</div>
      </div>
    </section>
  );
}

export function CapabilityGrid({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; copy: string; icon?: ReactNode }[];
}) {
  return (
    <section className="mission-vision-section">
      <div className="container-x">
        <div className="values-header" style={{ textAlign: "left", marginBottom: 40 }}>
          <div className="badge badge-outline">CAPABILITIES</div>
          <h2 className="section-title">{heading}</h2>
        </div>
        <div className="svc-cap-grid">
          {items.map((item) => (
            <article key={item.title} className="mv-card mission-card svc-cap-card">
              {item.icon ? <div className="mv-icon-wrapper mission-icon">{item.icon}</div> : null}
              <h3 className="mv-title">{item.title}</h3>
              <p className="mv-desc">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechChips({
  heading,
  items,
  eyebrow = "OUR STACK",
}: {
  heading: string;
  items: string[];
  eyebrow?: string;
}) {
  return (
    <section className="core-values-section" style={{ padding: "80px 0" }}>
      <div className="container-x">
        <div className="values-header">
          <div className="badge badge-outline">{eyebrow}</div>
          <h2 className="section-title">{heading}</h2>
        </div>
        <div className="letters-row" style={{ flexWrap: "wrap" }}>
          {items.map((item) => (
            <span key={item} className="flip-card-front svc-chip">
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
      <div className="container-x">
        <div className="mv-card vision-card" style={{ textAlign: "center", padding: "60px 40px" }}>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            {heading}
          </h2>
          <p className="mv-desc" style={{ maxWidth: 640, margin: "0 auto 28px" }}>
            {copy}
          </p>
          <Link href={href} className="btn btn-primary" data-cursor>
            {cta}
            <span className="icon-circle">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
