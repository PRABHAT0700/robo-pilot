"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/effects/Reveal";
import { whyChoose } from "@/lib/content";
import { IMG } from "@/lib/media";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function WhyChoose() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="why-choose-us">
      <div className="container-x">
        <div className="why-choose-grid">
          <div className="why-choose-content">
            <Reveal>
              <div className="badge badge-outline">WHY ROBOPYLOT</div>
              <h2 className="section-title">
                Why teams choose us
                <br />
                <span className="gradient-text-1">and stay</span>
              </h2>
              <p className="section-subtitle why-subtitle">
                We&apos;re a young team, so we&apos;re careful about what we promise. Here&apos;s
                what you can expect from us on every project.
              </p>
            </Reveal>

            <div className="reasons-accordion">
              {whyChoose.map((item, index) => {
                const isActive = active === index;
                return (
                  <div
                    key={item.n}
                    className={`accordion-item${isActive ? " active" : ""}`}
                    onClick={() => setActive((current) => (current === index ? null : index))}
                  >
                    <div className="accordion-header">
                      <div className="accordion-left">
                        <span className="accordion-num">{item.n}</span>
                        <div className="accordion-check">
                          <CheckIcon />
                        </div>
                        <h4 className="accordion-title">{item.title}</h4>
                      </div>
                      <div className="accordion-arrow">
                        <ArrowIcon />
                      </div>
                    </div>
                    <div className="accordion-body">
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn-outline" data-cursor>
                BOOK A FREE CALL
                <span className="icon-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="why-choose-showcase">
            <div className="glowing-card-wrapper">
              <div className="glowing-card-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG.partner}
                  alt="The kind of partner you'd keep on speed-dial"
                  loading="lazy"
                  decoding="async"
                  className="glow-card-image"
                />
                <h3 className="glow-card-title">
                  A partner you&apos;d want
                  <br />
                  on <span className="gradient-text-1">speed dial.</span>
                </h3>
                <p className="glow-card-body">
                  Fast when it matters, careful when it counts, and honest about what we can and
                  can&apos;t do.
                </p>
                <div className="glow-mini-stats">
                  <div className="mini-stat">
                    <h4 className="mini-stat-val cyan-text">5</h4>
                    <p className="mini-stat-label">Service lines</p>
                  </div>
                  <div className="mini-stat">
                    <h4 className="mini-stat-val cyan-text">10+</h4>
                    <p className="mini-stat-label">Industries</p>
                  </div>
                  <div className="mini-stat">
                    <h4 className="mini-stat-val gradient-text-1">Free</h4>
                    <p className="mini-stat-label">Discovery call</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider">
        <div className="divider-line" />
      </div>
    </section>
  );
}
