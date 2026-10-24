import { type ReactNode } from "react";
import { Reveal } from "@/components/effects/Reveal";

export function LegalPage({
  title,
  effective,
  children,
}: {
  title: string;
  effective: string;
  children: ReactNode;
}) {
  return (
    <section className="legal-page">
      <div className="container-x">
        <Reveal>
          <div className="legal-page-inner">
            <div className="badge badge-outline">LEGAL</div>
            <h1 className="legal-title">{title}</h1>
            <p className="legal-effective">
              <strong>Effective Date:</strong> {effective}
            </p>
            <div className="legal-body">{children}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LegalCard({ children }: { children: ReactNode }) {
  return <div className="legal-card">{children}</div>;
}
