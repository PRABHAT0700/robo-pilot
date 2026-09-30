import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";
import { Reveal } from "@/components/effects/Reveal";
import { site } from "@/lib/content";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with RoboPilot about your next digital initiative.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24">
        <CursorReactiveField />
        <div className="container-x relative z-10 max-w-3xl">
          <Reveal>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
              Let&apos;s talk
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Want to <span className="italic-accent">connect</span> with us?
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              Tell us what you want to automate, build or improve. Email {site.email} or use the form
              below.
            </p>
          </Reveal>
        </div>
      </section>
      <LeadForm />
    </>
  );
}
