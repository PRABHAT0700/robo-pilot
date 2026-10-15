"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/effects/Reveal";
import { site } from "@/lib/content";

type ContactSectionProps = {
  showHeader?: boolean;
};

const COUNTRY_PREFIX: Record<string, string> = {
  India: "+91",
  "United Kingdom": "+44",
  "United States": "+1",
  Other: "+",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection({ showHeader = true }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [note, setNote] = useState("");
  const [country, setCountry] = useState("India");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.fullName || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.projectDetails || "").trim();
    const phone = String(data.phone || "").trim();
    const selectedCountry = String(data.country || country).trim();
    const consent = data.consent === "on";

    if (!name) {
      setStatus("error");
      setNote("Please add your name.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setNote("That email doesn't look right. Please check it.");
      return;
    }
    if (message.length < 12) {
      setStatus("error");
      setNote("Add a sentence or two about the problem.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setNote("Please tick the box so we can reply.");
      return;
    }

    const firstName = name.split(/\s+/)[0] || name;
    const prefix = COUNTRY_PREFIX[selectedCountry] ?? "+";
    const phoneLine = phone ? `${phone.startsWith("+") ? phone : `${prefix} ${phone}`}` : "Not provided";
    const subject = `Enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Country: ${selectedCountry}`,
      `Phone: ${phoneLine}`,
      "",
      "What's taking the most time, and what would make it better?",
      message,
    ].join("\n");

    try {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("ok");
      setNote(
        `Thanks, ${firstName}. We've got your message and will reply within 24 hours on working days.`,
      );
    } catch {
      setStatus("error");
      setNote(`Something went wrong. Please try again, or email ${site.email}`);
    }
  }

  return (
    <section className={`contact-section${showHeader ? "" : " contact-section--page"}`} id="contact">
      <div className="container-x">
        {showHeader ? (
          <div className="contact-header">
            <Reveal>
              <div className="badge badge-outline" style={{ marginBottom: 20 }}>
                CONTACT
              </div>
              <h2 className="contact-title">
                Want to <span className="italic gradient-text-3">connect</span>
                <br />
                with us?
              </h2>
              <p className="contact-intro">
                Tell us what&apos;s slowing your business down. We reply within 24 hours on working
                days.
              </p>
            </Reveal>
          </div>
        ) : null}

        <div className="contact-grid">
          <div className="contact-form-box">
            <form onSubmit={onSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <input type="text" id="fullName" name="fullName" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Work email" required />
              </div>
              <div className="form-group">
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="What's taking the most time, and what would make it better?"
                  rows={4}
                  required
                />
              </div>
              <div className="form-row split">
                <div className="form-group country-select">
                  <select
                    id="country"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="India">India</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group phone-input">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={COUNTRY_PREFIX[country] ?? "+"}
                  />
                </div>
              </div>
              <label className="form-consent">
                <input type="checkbox" name="consent" />
                <span>
                  I agree to be contacted about my enquiry. Read our{" "}
                  <a href="#privacy">privacy policy</a>.
                </span>
              </label>
              <div className="form-footer">
                <p className="response-time-text">We reply within 24 hours, Mon to Fri.</p>
                <button type="submit" className="btn-lets-talk">
                  LET&apos;S TALK
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
              <h3 className="info-box-title">Prefer the old-school way?</h3>
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
                <div className="info-text-block">
                  <a href={site.phoneTel} className="info-text">
                    {site.phone}
                  </a>
                  <br />
                  <a href={site.phoneAltTel} className="info-text">
                    {site.phoneAlt}
                  </a>
                </div>
              </div>
              <div className="info-row align-start">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-text-block">
                  <strong>RoboPylot</strong>
                  <br />
                  105, AB Rd, Sector C, Slice 5, Part II,
                  <br />
                  Shalimar Township, Indore,
                  <br />
                  Madhya Pradesh 452010, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
