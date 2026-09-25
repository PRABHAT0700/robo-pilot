"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="relative z-50 border-b border-white/5 bg-black text-[11px] text-[var(--muted)]">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-2.5">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-[var(--brand)]"
              data-cursor
            >
              <Mail size={12} className="text-[var(--brand)]" />
              {site.email}
            </a>
            <a
              href={site.phoneTel}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-bold text-black transition hover:bg-white/90"
              data-cursor
            >
              <Phone size={11} className="text-black" />
              {site.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href={`mailto:${site.salesEmail}`}
              className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-[var(--brand)]"
              data-cursor
            >
              <Mail size={12} className="text-[var(--brand)]" />
              {site.salesEmail}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-bold text-black transition hover:bg-white/90"
              data-cursor
            >
              <MessageCircle size={11} className="text-black" />
              {site.whatsapp}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
          scrolled
            ? "border-cyan-400/15 bg-[#05070d]/85 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-[74px] items-center justify-between gap-4">
          <BrandLogo size={42} />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "bg-cyan-400/15 text-[var(--brand)]"
                      : "text-[var(--muted)] hover:bg-white/5 hover:text-white",
                  )}
                  data-cursor
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg border border-cyan-400/30"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" className="!inline-flex !flex-row !items-center !gap-2">
              <Calendar size={15} strokeWidth={2.25} />
              <span>Book a Call</span>
            </Button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-white/5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            data-cursor
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-cyan-400/15 bg-[#05070d] lg:hidden"
            >
              <div className="container-x flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-[var(--muted)] hover:bg-cyan-400/10 hover:text-[var(--brand)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 grid gap-2">
                  <a
                    href={site.phoneTel}
                    className="rounded-xl bg-[var(--call)] px-4 py-3 text-center text-sm font-bold text-white"
                  >
                    Call {site.phone}
                  </a>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[var(--whatsapp)] px-4 py-3 text-center text-sm font-bold text-white"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
