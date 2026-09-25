import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import {
  TrustStrip,
  ProcessPreview,
  IndustriesPreview,
  WorkPreview,
  InsightsPreview,
  FaqSection,
  CtaBand,
} from "@/components/sections/HomeSections";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid limit={6} />
      <AboutTeaser />
      <ProcessPreview />
      <IndustriesPreview />
      <WorkPreview />
      <InsightsPreview />
      <FaqSection />
      <section className="relative overflow-hidden border-t border-white/10 bg-[var(--bg-elevated)] py-20 md:py-28">
        <div className="glow-orb -right-24 -top-24 h-80 w-80 bg-[var(--brand)] opacity-20" />
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
              <span className="h-0.5 w-5 rounded bg-current" />
              Contact
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Ready when you are.
            </h2>
            <p className="mt-4 max-w-md text-[var(--muted)]">
              Share a short brief and we&apos;ll respond with next steps — no jargon, just a clear path
              forward.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
