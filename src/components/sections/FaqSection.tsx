"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/effects/Reveal";

const faqItems = [
  {
    q: "What services does RoboPilot offer?",
    a: "RoboPilot builds intelligent digital products — AI agent engineering, a free agent marketplace, ML model development and data analytics, mobile app development, and AI consulting tailored to how your business actually operates.",
  },
  {
    q: "How much does it cost to build a website or mobile app in India?",
    a: "Cost depends on complexity, features, and platform, but here's a realistic starting range: Basic business website: ₹60,000 – ₹1,50,000 ($800 – $1,800). Custom web app / platform: ₹2,00,000 – ₹6,00,000 ($2,500 – $7,500). Mobile app (iOS/Android): ₹4,00,000 – ₹15,00,000+ ($5,000 – $18,000+). These ranges cover custom, production-ready builds — not template installs. We offer a free discovery consultation to scope your specific project and give you a precise quote.",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "A standard corporate website usually takes 4 to 8 weeks from design to launch. Mobile applications typically require 3 to 6 months depending on the complexity of the features and whether it's a native or cross-platform build.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "We proudly partner with both! We help startups build their MVP (Minimum Viable Product) quickly and cost-effectively, and we assist established enterprises in scaling their digital infrastructure and modernizing their legacy systems.",
  },
  {
    q: "What is staff augmentation and how is it different from outsourcing?",
    a: "Staff augmentation allows you to hire our dedicated developers to work directly with your existing in-house team on a full-time or part-time basis, giving you direct control. Outsourcing means handing over the entire project management and execution to us.",
  },
  {
    q: "How do I hire a dedicated developer from RoboPilot?",
    a: "Simply book a free call with us to discuss your technology stack requirements. We will shortlist candidates from our talent pool. You can interview them, and once selected, they will integrate directly into your daily workflows.",
  },
  {
    q: "Can RoboPilot help improve my Google rankings?",
    a: "Absolutely. We build all our websites and applications with SEO best practices in mind, from semantic HTML and optimized site speed to technical SEO setups. We also offer dedicated digital marketing services to continually improve your Google rankings.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes, we offer comprehensive post-launch support and maintenance packages. We ensure your website or application stays updated, secure, and fully functional as your business grows and technologies evolve.",
  },
  {
    q: "Is RoboPilot a good IT company for businesses in Indore, MP?",
    a: "Yes! While we serve clients globally, our deep roots in Indore, Madhya Pradesh allow us to provide localized support, market understanding, and accessible communication for businesses in the region.",
  },
  {
    q: "Which technologies does RoboPilot specialize in?",
    a: "We specialize in modern, robust technology stacks including React, Node.js, Python, PHP, Flutter for mobile apps, and various cloud platforms like AWS and Google Cloud to ensure scalable and secure solutions.",
  },
  {
    q: "How do I get started with RoboPilot?",
    a: "Getting started is easy. Simply book a free discovery consultation through our website. We'll discuss your goals, requirements, and how our expertise can help bring your vision to life.",
  },
] as const;

export function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="container-x faq-container">
        <div className="faq-left">
          <Reveal>
            <div className="badge badge-outline">FAQ</div>
            <h2 className="faq-title">
              Frequently asked
              <br />
              <span className="italic gradient-text-3">Questions</span>
            </h2>
            <p className="faq-subtitle">
              Everything you need to know about working with RoboPilot. Can&apos;t find your
              answer? Book a free call.
            </p>
          </Reveal>

          <div className="faq-info-cards">
            <div className="faq-info-card">
              <span className="faq-info-value">48h</span>
              <span className="faq-info-label">AVERAGE RESPONSE TIME</span>
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
            {faqItems.map((item, index) => {
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
