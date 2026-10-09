"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { Reveal } from "@/components/effects/Reveal";

const CARD_STEP = 404;

type IndustryCard = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  icon: ReactNode;
};

const industryCards: IndustryCard[] = [
  {
    slug: "ecommerce",
    title: "E-commerce",
    desc: "Build high-performance storefronts and mobile apps with seamless checkout, secure payments, inventory sync, and architecture that scales with your traffic spikes.",
    image: "https://vvpsoftech.com/assets/images/industry_healthcare.webp",
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  },
  {
    slug: "finance",
    title: "Finance",
    desc: "Develop secure fintech platforms, digital wallets, payment gateways, and lending software with enterprise-grade compliance and security.",
    image: "https://vvpsoftech.com/assets/images/industry_finance.webp",
    icon: (
      <>
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </>
    ),
  },
  {
    slug: "fintech",
    title: "FinTech",
    desc: "Create high-performance eCommerce websites and mobile apps with seamless shopping experiences, secure payments, inventory management, and scalable architecture.",
    image: "https://vvpsoftech.com/assets/images/industry_ecommerce.webp",
    icon: (
      <>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    desc: "Build HIPAA-ready patient portals, telemedicine platforms, and hospital management systems that improve care delivery and cut admin overhead.",
    image: "https://vvpsoftech.com/assets/images/industry_education.webp",
    icon: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
  {
    slug: "edtech",
    title: "Education (EdTech)",
    desc: "Create e-learning platforms, virtual classrooms, and student information systems that make teaching and learning work at scale.",
    image: "https://vvpsoftech.com/assets/images/industry_realestate.webp",
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    slug: "logistics",
    title: "Logistics & Transportation",
    desc: "Develop fleet tracking, route optimization, and dispatch management systems built for real-time visibility.",
    image: "https://vvpsoftech.com/assets/images/industry_travel.webp",
    icon: (
      <>
        <path d="m2 22 3-3" />
        <path d="M19 13v-2l-7-5-2 2 2.5 6-3.5 3.5L5 15l-2 2 3.5 4 4.5-1 3.5-3.5 6 2.5 2-2-5-7z" />
      </>
    ),
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    desc: "Build property portals, CRM tools, and listing management apps that simplify buying, selling, and managing real estate.",
    image: "https://vvpsoftech.com/assets/images/industry_social.webp",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </>
    ),
  },
  {
    slug: "food",
    title: "Food & Restaurant",
    desc: "Build ordering platforms, kitchen management systems, and delivery-tracking apps for restaurants and cloud kitchens.",
    image: "https://vvpsoftech.com/assets/images/industry_technology.webp",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    desc: "Develop inventory, production-tracking, and ERP-style tools that bring visibility to shop-floor operations.",
    image: "https://vvpsoftech.com/assets/images/industry_technology.webp",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    slug: "hrms",
    title: "Human Resource Management (HRMS)",
    desc: "Build HR platforms covering payroll, attendance, performance reviews, and recruitment workflows in one system.",
    image: "https://vvpsoftech.com/assets/images/industry_technology.webp",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
];

export function IndustriesPreview() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({ left: direction * CARD_STEP, behavior: "smooth" });
  };

  return (
    <section className="industries-section">
      <div className="container-x">
        <Reveal>
          <div className="industries-header">
            <div className="badge badge-outline">INDUSTRIES WE SERVE</div>
            <h2 className="section-title">
              Ten verticals,{" "}
              <i>
                <span className="gradient-text-1">one playbook</span>
              </i>
            </h2>
            <p className="section-subtitle">
              RoboPilot is a trusted IT partner to 200+ clients across India who
              <br />
              have transformed their businesses through technology. For over 6+ years,
              <br />
              we&apos;ve delivered expertise across diverse industry domains.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" id="industries-carousel" ref={trackRef}>
          {industryCards.map((card, index) => (
            <Link
              key={card.slug}
              href={`/industries/${card.slug}`}
              className="industry-card"
              data-cursor
            >
              <div className="card-top">
                <div className="card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {card.icon}
                  </svg>
                </div>
                <span className="card-num">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-desc">{card.desc}</p>
              <div className="card-action">
                <div className="explore-btn-oval">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="explore-bg"
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    width={380}
                    height={64}
                  />
                  <div className="explore-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  {/* <div className="explore-btn-line" /> */}
                </div>
              </div>
            </Link>
          ))}
          <div className="carousel-spacer" />
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-btn"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-btn"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="section-divider">
        <div className="divider-line" />
      </div>
    </section>
  );
}
