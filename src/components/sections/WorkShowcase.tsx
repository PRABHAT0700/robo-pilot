"use client";

import Link from "next/link";
import { useRef } from "react";
import { Reveal } from "@/components/effects/Reveal";
import { workCases } from "@/lib/content";

const CARD_STEP = 450;

function ArrowOut() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="19" x2="19" y2="5" />
      <polyline points="9 5 19 5 19 15" />
    </svg>
  );
}

export function WorkCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(dir: number) {
    trackRef.current?.scrollBy({ left: dir * CARD_STEP, behavior: "smooth" });
  }

  return (
    <section className="recent-work-section">
      <div className="container-x">
        <Reveal>
          <div className="badge badge-outline">OUR RECENT WORK</div>
          <h2 className="section-title">
            Recent launches, shipped with <span className="gradient-text-3 italic">care</span>
          </h2>
        </Reveal>

        <div className="work-carousel-container">
          <div className="work-carousel" ref={trackRef}>
            {workCases.map((item, index) => (
              <Link key={item.slug} href={`/industries/${item.slug}`} className="work-card" data-cursor>
                <div className="work-card-top" style={{ background: item.tone }}>
                  <span className="case-study-pill">
                    <span className="dot-small" /> Case study {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="work-card-arrow">
                    <ArrowOut />
                  </span>
                </div>
                <div className="work-card-body">
                  <h3 className="work-card-title">{item.title}</h3>
                  <p className="work-card-meta">{item.meta}</p>
                  <p className="work-card-desc">{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="carousel-controls work-carousel-controls">
          <button type="button" className="carousel-btn" aria-label="Previous" onClick={() => scrollByCard(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button type="button" className="carousel-btn" aria-label="Next" onClick={() => scrollByCard(1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export function AllWorks() {
  return (
    <section className="all-works-section" id="all-works">
      <div className="container-x">
        <div className="all-works-header">
          <div className="badge badge-outline">ALL WORKS</div>
        </div>
        <div className="all-works-grid">
          {workCases.map((item, index) => (
            <Link key={item.slug} href={`/industries/${item.slug}`} className="aw-card" data-cursor>
              <div className="aw-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="aw-pill">
                  <span className="dot-cyan" /> Case study {String(index + 1).padStart(2, "0")}
                </div>
                <div className="aw-arrow">
                  <ArrowOut />
                </div>
                <h3 className="aw-title">{item.title}</h3>
              </div>
              <div className="aw-card-stats">
                {item.stats.map((stat) => (
                  <div key={stat.label} className="aw-stat">
                    <h4>
                      {stat.value}
                      <span className="purple-text">{stat.suffix}</span>
                    </h4>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
