"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/effects/Reveal";
import { site } from "@/lib/content";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [note, setNote] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.fullName || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.projectDetails || "").trim();
    const phone = String(data.phone || "").trim();
    const country = String(data.country || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setNote("Please fill in name, email and project details.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, company: country }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setStatus("ok");
      setNote("Thanks — your request has been received. Our team will get back to you shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setNote(`Something went wrong. Please email ${site.email} directly.`);
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container-x">
        <div className="contact-header">
          <Reveal>
            <h2 className="contact-title">
              Want to <span className="italic gradient-text-3">connect</span>
              <br />
              with us?
            </h2>
          </Reveal>
        </div>

        <div className="contact-grid">
          <div className="contact-form-box">
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <input type="text" id="fullName" name="fullName" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="About Your Project..."
                  rows={4}
                  required
                />
              </div>
              <div className="form-row split">
                <div className="form-group country-select">
                  <select id="country" name="country" defaultValue="India">
                    <option value="India">India</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div className="form-group phone-input">
                  <input type="tel" id="phone" name="phone" placeholder="+91" required />
                </div>
              </div>
              <div className="form-footer">
                <p className="response-time-text">We reply within 24 hours, Mon – Fri.</p>
                <button type="submit" className="btn-lets-talk" disabled={status === "sending"}>
                  {status === "sending" ? "SENDING" : "LET'S TALK"}
                  <span className="btn-arrow">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </button>
              </div>
              {note ? (
                <p className={`contact-note${status === "ok" ? " ok" : " err"}`}>{note}</p>
              ) : null}
            </form>
          </div>

          <div className="contact-info-col">
            <div className="contact-info-box">
              <h3 className="info-box-title">Prefer the old school way?</h3>
              <div className="info-row">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <a href={`mailto:${site.email}`} className="info-text">
                  {site.email}
                </a>
              </div>
              <div className="info-row">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <a href={site.phoneTel} className="info-text">
                  {site.phone}
                </a>
              </div>
              <div className="info-row align-start">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-text-block">
                  <strong>India</strong>
                  <br />
                  705, B-Block, Metro Tower, Vijay Nagar,
                  <br />
                  Indore, Madhya Pradesh
                  <br />
                  452010, India
                </div>
              </div>
            </div>

            <div className="contact-social-box">
              <h3 className="info-box-title">FOLLOW ALONG</h3>
              <div className="social-links-row">
                <a
                  href={site.socials.linkedin}
                  className="social-circle linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={site.socials.instagram}
                  className="social-circle instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#ig-grad)">
                    <defs>
                      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fd5949" />
                        <stop offset="50%" stopColor="#d6249f" />
                        <stop offset="100%" stopColor="#285AEB" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={site.socials.facebook}
                  className="social-circle facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
