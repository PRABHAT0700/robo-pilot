"use client";

import Link from "next/link";
import { type FormEvent } from "react";
import { site, serviceNav } from "@/lib/content";
import { BrandLogo } from "@/components/ui/BrandLogo";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
  }

  return (
    <footer className="site-footer">
      <div className="container-x footer-container">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <BrandLogo size={44} />
            <p className="footer-tagline">
              Crafting digital experiences that drive growth, innovation, and success for
              forward-thinking brands.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <nav className="footer-nav">
              <ul>
                {serviceNav.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/services">All Services</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <nav className="footer-nav">
              <ul>
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer-col address-col">
            <h4 className="footer-heading">Stay in the Loop</h4>
            <p className="footer-newsletter-text">Subscribe for the latest insights and updates.</p>
            <form onSubmit={onSubscribe} className="footer-newsletter-form">
              <input type="email" name="email" placeholder="Email Address" required />
              <button type="submit" aria-label="Subscribe">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            <address className="footer-address">
              <div className="address-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <strong>Headquarter</strong>
              </div>
              <p>
                105, AB Rd, Sector C, Slice 5, Part II,
                <br />
                Shalimar Township, Indore,
                <br />
                Madhya Pradesh 452010
              </p>
              <p style={{ marginTop: 12 }}>
                <a href={site.phoneTel}>{site.phone}</a>
                <br />
                <a href={site.phoneAltTel}>{site.phoneAlt}</a>
              </p>
            </address>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="copyright-text">
            Copyright © {year} {site.name}. <span className="divider-pipe">|</span> All Rights
            Reserved®
          </div>
          <div className="legal-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
