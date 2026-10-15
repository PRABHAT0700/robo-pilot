import Link from "next/link";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function WorkHero() {
  return (
    <section className="hero works-hero">
      <div className="container-x">
      <div className="hero-content">
        <div className="badge badge-outline">
          <span className="dot-cyan" /> OUR WORKS
        </div>
        <h1 className="hero-title">
          Selected work,
          <br />
          <span className="gradient-text-faq italic">shipped</span>{" "}
          <span className="gradient-text-3 italic">recently.</span>
        </h1>
        <p className="hero-subtitle">
          A peek into the products we&apos;ve designed, engineered and helped grow, across
          healthcare, fintech, commerce, logistics and learning.
        </p>
        <div className="hero-buttons">
          <Link href="/contact" className="btn btn-primary" data-cursor>
            START A PROJECT
            <span className="icon-circle">
              <ArrowIcon />
            </span>
          </Link>
          <Link href="/services" className="btn btn-secondary" data-cursor>
            OUR SERVICES
            <span className="icon-arrow">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>

      <div className="works-hero-graphic service-graphic-anim" aria-hidden>
        <svg width="100%" height="100%" viewBox="0 0 300 300" className="abstract-rings">
          <defs>
            <linearGradient id="ring-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D6249F" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="ring-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fd5949" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow-works" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <g className="ring-group" filter="url(#glow-works)">
            <circle className="ring ring-1" cx="150" cy="150" r="90" fill="none" stroke="url(#ring-grad-1)" strokeWidth="2" strokeDasharray="10 15" />
            <circle className="ring ring-2" cx="150" cy="150" r="115" fill="none" stroke="url(#ring-grad-2)" strokeWidth="1.5" strokeDasharray="25 15" />
            <circle className="ring ring-3" cx="150" cy="150" r="140" fill="none" stroke="url(#ring-grad-1)" strokeWidth="1" strokeDasharray="5 15" opacity="0.6" />
            <g className="sphere sphere-1">
              <circle cx="150" cy="60" r="6" fill="#00E5FF" />
            </g>
            <g className="sphere sphere-2">
              <circle cx="265" cy="150" r="8" fill="#D6249F" />
            </g>
            <g className="sphere sphere-3">
              <circle cx="50" cy="220" r="4" fill="#fd5949" />
            </g>
          </g>
        </svg>
      </div>
      </div>
    </section>
  );
}

export function WorkStats() {
  return (
    <section className="services-stats-full">
      <div className="container-x services-stats-full-inner">
        <div className="stat-item">
          <h3>5</h3>
          <p>SERVICE LINES</p>
        </div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>INDUSTRIES SERVED</p>
        </div>
        <div className="stat-item">
          <h3>1</h3>
          <p>TEAM FOR AI AND PRODUCT</p>
        </div>
        <div className="stat-item">
          <h3>Free</h3>
          <p>DISCOVERY CONSULTATION</p>
        </div>
      </div>
    </section>
  );
}
