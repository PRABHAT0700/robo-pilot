import Link from "next/link";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function IndustriesHero() {
  return (
    <section className="hero works-hero">
      <div className="container-x">
        <div className="hero-content">
          <div className="badge badge-outline">
            <span className="dot-cyan" /> INDUSTRIES WE SERVE
          </div>
          <h1 className="hero-title">
            Ten verticals,
            <br />
            <span className="gradient-text-faq italic">one</span>{" "}
            <span className="gradient-text-3 italic">playbook.</span>
          </h1>
          <p className="hero-subtitle">
            Domain-aware technology for real operating contexts — commerce, health, logistics, learning
            and more, without a generic template.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary" data-cursor>
              START A PROJECT
              <span className="icon-circle">
                <ArrowIcon />
              </span>
            </Link>
            <Link href="/work" className="btn btn-secondary" data-cursor>
              OUR WORK
              <span className="icon-arrow">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>

        <div className="works-hero-graphic service-graphic-anim" aria-hidden>
          <svg width="100%" height="100%" viewBox="0 0 300 300" className="abstract-rings">
            <defs>
              <linearGradient id="ind-ring-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D6249F" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="ind-ring-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4b8cff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow-ind" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <g filter="url(#glow-ind)">
              <circle className="ring ring-1" cx="150" cy="150" r="90" fill="none" stroke="url(#ind-ring-1)" strokeWidth="2" strokeDasharray="10 15" />
              <circle className="ring ring-2" cx="150" cy="150" r="115" fill="none" stroke="url(#ind-ring-2)" strokeWidth="1.5" strokeDasharray="25 15" />
              <circle className="ring ring-3" cx="150" cy="150" r="140" fill="none" stroke="url(#ind-ring-1)" strokeWidth="1" strokeDasharray="5 15" opacity="0.6" />
              <g className="sphere sphere-1">
                <circle cx="150" cy="60" r="6" fill="#00E5FF" />
              </g>
              <g className="sphere sphere-2">
                <circle cx="265" cy="150" r="8" fill="#4b8cff" />
              </g>
              <g className="sphere sphere-3">
                <circle cx="50" cy="220" r="4" fill="#D6249F" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
