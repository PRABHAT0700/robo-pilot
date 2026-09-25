import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/effects/Reveal";
import { site } from "@/lib/content";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Robopilot AI about your next digital initiative.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <CursorReactiveField />
      <div className="container-x relative z-10 grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
            <span className="h-0.5 w-5 rounded bg-current" />
            Let&apos;s build something
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Have an Idea?
            <br />
            <span className="text-gradient">Let&apos;s Make It Happen.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-[var(--muted)]">
            Tell us about your business challenges, goals, or upcoming project. Our team can help you
            explore the right technology approach.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Share your project requirements",
              "Discuss a suitable technology approach",
              "Explore possible next steps together",
            ].map((item) => (
              <li key={item}>
                <span className="mr-2 text-[var(--brand)]">↗</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block text-sm font-bold text-[var(--accent-soft)] hover:text-white"
          >
            Or email {site.email} directly
          </a>
        </Reveal>
        <ContactForm />
      </div>
    </section>
  );
}
