import type { Metadata } from "next";
import { Reveal } from "@/components/effects/Reveal";
import { CursorReactiveField } from "@/components/effects/CursorReactiveField";
import { ContactSection } from "@/components/sections/ContactSection";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with RoboPilot about your next digital initiative.",
};

function ContactHeroOrbit() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden>
      <div className="absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(17,207,255,0.16)_0%,rgba(76,140,255,0.08)_38%,transparent_70%)] blur-2xl" />
      <div className="absolute right-[14%] top-[22%] h-72 w-72 rounded-full border border-cyan-300/20 animate-spin-slow" />
      <div className="absolute right-[20%] top-[28%] h-52 w-52 rounded-full border border-dashed border-violet-400/30 animate-spin-reverse" />
      <div className="absolute right-[28%] top-[38%] h-28 w-28 rounded-full border border-cyan-200/25 animate-pulse-soft" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-deep)] pt-10 pb-16 md:pt-14 md:pb-24">
        <CursorReactiveField />
        <ContactHeroOrbit />
        <div className="container-x relative z-10 max-w-3xl">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#6af3ff]/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6af3ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6af3ff]" />
              Let&apos;s talk
            </div>
            <h1 className="font-display text-[40px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[52px] md:text-[68px]">
              Want to <span className="italic-move">connect</span>
              <br />
              with us?
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/55 md:text-base">
              Tell us what you want to automate, build or improve. Email {site.email} or use the form
              below.
            </p>
          </Reveal>
        </div>
      </section>
      <ContactSection showHeader={false} />
    </>
  );
}
