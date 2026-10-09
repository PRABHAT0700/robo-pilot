"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { Reveal } from "@/components/effects/Reveal";

const steps = [
  {
    label: "STEP 01",
    title: "Discover",
    desc: "Goals, constraints, and landscape — understood before code is written.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
  },
  {
    label: "STEP 02",
    title: "Design",
    desc: "High-fidelity prototypes reviewed before a single line of code is written.",
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    label: "STEP 03",
    title: "Build",
    desc: "Modern stack, tested code. You see progress every single week.",
    icon: (
      <>
        <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
        <path d="M17.64 15 22 10.64" />
        <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
      </>
    ),
  },
  {
    label: "STEP 04",
    title: "Test",
    desc: "QA, performance & accessibility sweeps.",
    icon: (
      <>
        <path d="m8 2 1.88 1.88" />
        <path d="M14.12 3.88 16 2" />
        <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
        <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
        <path d="M12 20v-9" />
        <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
        <path d="M6 13H2" />
        <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
        <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
        <path d="M22 13h-4" />
        <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
      </>
    ),
  },
  {
    label: "STEP 05",
    title: "Launch & Scale",
    desc: "Ship, monitor, iterate. We don't disappear.",
    icon: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
  },
] as const;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ProcessPreview() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const update = () => {
    const wrap = wrapRef.current;
    const line = lineRef.current;
    if (!wrap || !line) return;

    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const desktop = window.innerWidth >= 1024;
    const mid = rect.top + rect.height / 2;
    const start = vh * 0.88;
    const end = vh * 0.5;
    const progress = desktop ? clamp((start - mid) / (start - end)) : 1;

    line.style.width = `${progress * 100}%`;

    const count = steps.length;
    stepRefs.current.forEach((node, i) => {
      if (!node) return;
      const appearAt = i * (0.72 / Math.max(count - 1, 1));
      const local = clamp((progress - appearAt) / 0.22);
      const eased = 1 - (1 - local) * (1 - local);
      node.style.opacity = String(eased);
      node.style.transform = `translate(0px, ${(1 - eased) * 40}px)`;
    });
  };

  const updateRef = useRef(update);
  updateRef.current = update;

  useLenis(() => {
    updateRef.current();
  });

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="process-section" id="process">
      <div className="container-x">
        <Reveal>
          <div className="process-header">
            <div className="badge badge-outline">OUR PROCESS</div>
            <h2 className="section-title">
              From brief to delivery,
              <br />
              without{" "}
              <i>
                <span className="gradient-text-1">surprise</span>
              </i>
            </h2>
            <p className="section-subtitle">
              A transparent, iterative process so you always know exactly where
              <br />
              your project stands.
            </p>
          </div>
        </Reveal>

        <div className="process-timeline-wrapper" ref={wrapRef}>
          <div className="process-line" ref={lineRef} />
          <div className="process-steps-grid">
            {steps.map((step, index) => (
              <div
                key={step.label}
                className="process-step"
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
              >
                <div className="step-icon-wrapper">
                  <svg
                    className="step-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.icon}
                  </svg>
                </div>
                <div className="step-label">{step.label}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
       <div className="pt-20">
        <div className="section-divider">
            <div className="divider-line" />
        </div>
       </div>
      </div>
    </section>
  );
}
