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
    desc: "Online stores need checkout that works during sales, stock that matches the warehouse, and payments that don’t fail. We build storefronts and mobile apps for that reality.",
    image: "https://vvpsoftech.com/assets/images/industry_healthcare.webp",
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  },
  {
    slug: "finance",
    title: "Finance",
    desc: "Financial teams need security, audit trails and compliance built in from the start. We build secure platforms for payments, lending and internal operations.",
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
    desc: "Fintech products handle money, so reliability and fraud protection matter more than anything. We build wallets, payment flows and onboarding that stay stable as you grow.",
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
    desc: "Clinics and hospitals lose time to scheduling, records and billing. We build patient portals, telemedicine tools and management systems that give staff more time with patients.",
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
    desc: "Learning platforms must stay stable during exams and enrolment peaks. We build course platforms, virtual classrooms and student systems that teachers and learners find easy to use.",
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
    title: "Logistics and Transportation",
    desc: "Dispatch teams need to know where every vehicle is and what it’s carrying. We build fleet tracking, route planning and dispatch tools that show live status.",
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
    desc: "Agents lose leads when they’re spread across spreadsheets and chat apps. We build property portals, CRM tools and listing management that keep every lead and viewing in one place.",
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
    title: "Food and Restaurant",
    desc: "Rush hours expose weak ordering and kitchen systems. We build ordering platforms, kitchen display tools and delivery tracking for restaurants and cloud kitchens.",
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
    desc: "Production managers often learn about delays after they happen. We build inventory, production tracking and ERP-style tools that bring the shop floor into one view.",
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
    desc: "HR teams often copy data between payroll, attendance and hiring tools. We build HR platforms that cover payroll, attendance, reviews and recruitment in one system.",
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
              Ten industries, each one learned{" "}
              <i>
                <span className="gradient-text-1">before we build</span>
              </i>
            </h2>
            <p className="section-subtitle">
              Every industry has its own rules, risks and daily problems. Before we design anything,
              {/* <br /> */}
              we learn how your sector works. That&apos;s why our solutions fit the way your team
              {/* <br /> */}
              actually operates.
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
