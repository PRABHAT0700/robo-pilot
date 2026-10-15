"use client";

import Link from "next/link";
import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Users,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/content";
import { industryDetails } from "@/lib/media";
import { Reveal } from "@/components/effects/Reveal";

const icons: Record<string, LucideIcon> = {
  ShoppingBag,
  Landmark,
  Wallet,
  HeartPulse,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Factory,
  Users,
};

export function IndustriesGrid() {
  return (
    <section className="all-works-section svc-grid-section" id="industry-grid">
      <div className="container-x">
        <Reveal>
          <div className="all-works-header">
            <div className="badge badge-outline">SECTORS</div>
            <h2 className="section-title">
              Where the work{" "}
              <span className="gradient-text-3 italic">actually runs.</span>
            </h2>
            <p className="values-subtitle" style={{ marginTop: 8, textAlign: "left", marginLeft: 0 }}>
              Each page lists the workflows we build for that industry, tied to the five services we
              offer.
            </p>
          </div>
        </Reveal>

        <div className="all-works-grid">
          {industries.map((ind, i) => {
            const Icon = icons[ind.icon] ?? Building2;
            const image = industryDetails[ind.slug]?.image ?? "";
            return (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="aw-card" data-cursor>
                <div className="aw-card-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={ind.title} loading="lazy" />
                  <div className="aw-pill">
                    <span className="dot-cyan" /> {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="svc-card-icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="aw-title">{ind.title}</h3>
                </div>
                <div className="svc-card-body">
                  <p>{ind.description}</p>
                  <span className="svc-card-cta">
                    View industry
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
