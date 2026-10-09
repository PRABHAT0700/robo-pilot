"use client";

import { useState } from "react";
import { Reveal } from "@/components/effects/Reveal";

const reasons = [
  {
    n: "01",
    title: "Quality-First Development",
    body: "We don't ship fast and fix later. Every deliverable is reviewed, tested, and production-ready.",
  },
  {
    n: "02",
    title: "Radical Transparency",
    body: "No hidden fees or black-box development. You get full visibility into our process, progress, and pricing at every stage.",
  },
  {
    n: "03",
    title: "Senior-Led Every Project",
    body: "Your project is guided by veterans, not passed off to juniors. Experience dictates our architectural choices.",
  },
  {
    n: "04",
    title: "On-time Every Time",
    body: "We scope accurately and hit our deadlines. Predictive velocity means your launch dates stay rock solid.",
  },
  {
    n: "05",
    title: "Flexible Engagement",
    body: "Whether you need staff augmentation, a dedicated team, or a fixed-scope build, we adapt to your business needs.",
  },
] as const;

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
              <div className="badge badge-outline">WHY CHOOSE US</div>
              <h2 className="section-title">
                The reasons teams
                <br />
                <span className="gradient-text-1">Keep coming back</span>
              </h2>
              <p className="section-subtitle why-subtitle">
                Six years of craft, 120+ projects, and 97% client retention — here&apos;s what makes
                us different.
              </p>
            </Reveal>

            <div className="reasons-accordion">
              {reasons.map((item, index) => {
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
                      <p>{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="why-choose-showcase">
            <div className="glowing-card-wrapper">
              <div className="glowing-card-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://vvpsoftech.com/assets/images/why_choose_us.webp"
                  alt="The kind of partner you'd keep on speed-dial"
                  loading="lazy"
                  decoding="async"
                  className="glow-card-image"
                />
                <h3 className="glow-card-title">
                  The kind of partner
                  <br />
                  you&apos;d <span className="gradient-text-1">keep on speed-dial.</span>
                </h3>
                <div className="glow-mini-stats">
                  <div className="mini-stat">
                    <h4 className="mini-stat-val cyan-text">98%</h4>
                    <p className="mini-stat-label">On-time</p>
                  </div>
                  <div className="mini-stat">
                    <h4 className="mini-stat-val cyan-text">
                      4.9 <span className="purple-text">★</span>
                    </h4>
                    <p className="mini-stat-label">Average rating</p>
                  </div>
                  <div className="mini-stat">
                    <h4 className="mini-stat-val gradient-text-1">6 years</h4>
                    <p className="mini-stat-label">Average client</p>
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
