"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/effects/Reveal";
import { faqs } from "@/lib/content";

type FaqEntry = { q: string; a: string };

export function FaqSection({ items = faqs }: { items?: readonly FaqEntry[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="container-x faq-container">
        <div className="faq-left">
          <Reveal>
            <div className="badge badge-outline">FAQ</div>
            <h2 className="faq-title">
              Questions we hear
              <br />
              <span className="italic gradient-text-3">most often</span>
            </h2>
            <p className="faq-subtitle">
              Everything you need to know before working with RoboPylot. Still have a question? Book
              a free call.
            </p>
          </Reveal>

          <div className="faq-info-cards">
            <div className="faq-info-card">
              <span className="faq-info-value">48h</span>
              <span className="faq-info-label">TYPICAL RESPONSE TIME</span>
            </div>
            <div className="faq-info-card">
              <span className="faq-info-value">Free</span>
              <span className="faq-info-label">DISCOVERY CONSULTATION</span>
            </div>
          </div>

          <Link href="/contact" className="btn btn-primary faq-btn" data-cursor>
            Book a Free Call
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="faq-right">
          <div className="faq-accordion">
            {items.map((item, index) => {
              const isActive = active === index;
              return (
                <div key={item.q} className={`faq-item${isActive ? " active" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActive((current) => (current === index ? null : index))}
                  >
                    <span>{item.q}</span>
                    <div className="faq-icon">
                      <div className="faq-icon-line horizontal" />
                      <div className="faq-icon-line vertical" />
                    </div>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-divider">
        <div className="divider-line" />
      </div>
    </section>
  );
}
