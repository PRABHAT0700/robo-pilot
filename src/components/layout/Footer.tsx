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
            <div className="footer-social">
              <a
                href={site.socials.linkedin}
                className="social-circle linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={site.socials.facebook}
                className="social-circle facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href={site.socials.twitter}
                className="social-circle twitter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
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
                705, B-Block, Metro Tower, Vijay Nagar,
                <br />
                Indore, Madhya Pradesh 452010, India
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
