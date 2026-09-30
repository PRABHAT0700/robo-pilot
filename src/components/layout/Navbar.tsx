"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";
import { industries, navLinks, serviceNav, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  const serviceActive = pathname.startsWith("/services");
  const industryActive = pathname.startsWith("/industries");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/[0.06] bg-[#07080d]/80 backdrop-blur-md transition-colors",
        scrolled && "bg-[#07080d]/95",
      )}
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <BrandLogo size={38} />

        <nav
          className="hidden items-center rounded-full border border-white/10 bg-black/30 px-2 py-1 lg:flex"
          aria-label="Main"
        >
          <NavItem href="/" label="Home" active={pathname === "/"} />

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium",
                serviceActive ? "text-white" : "text-white/65 hover:text-white",
              )}
              aria-expanded={servicesOpen}
              data-cursor
            >
              Services <ChevronDown size={14} />
              {serviceActive && (
                <span className="absolute bottom-0.5 left-3 right-3 h-px bg-white" />
              )}
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full z-50 w-[420px] rounded-2xl border border-white/10 bg-[#0b1020]/98 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
                >
                  {serviceNav.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={cn(
                        "block rounded-xl px-4 py-3 transition hover:bg-white/5",
                        pathname === `/services/${s.slug}` && "bg-white/8",
                      )}
                      data-cursor
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-white">{s.title}</span>
                        <span className="text-[var(--brand)]">↗</span>
                      </div>
                      <p className="mt-1 text-xs text-[var(--muted)]">{s.short}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className={cn(
                "relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium",
                industryActive ? "text-white" : "text-white/65 hover:text-white",
              )}
              aria-expanded={industriesOpen}
              data-cursor
            >
              Industries <ChevronDown size={14} />
              {industryActive && (
                <span className="absolute bottom-0.5 left-3 right-3 h-px bg-white" />
              )}
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full z-50 grid w-[520px] grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-[#0b1020]/98 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
                >
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                      data-cursor
                    >
                      {ind.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks
            .filter((l) => l.href !== "/")
            .map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
              />
            ))}

          <Link
            href="/contact"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70"
            data-cursor
          >
            <MapPin size={12} className="text-[var(--brand)]" />
            {site.location}
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 text-sm font-semibold text-white lg:inline-flex"
          data-cursor
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 text-[10px]">
            ✦
          </span>
          <span className="border-b border-white pb-0.5">Let&apos;s Talk</span>
        </Link>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#07080d] lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              <Link href="/" className="rounded-lg px-3 py-3 text-sm font-semibold">
                Home
              </Link>
              <button
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold"
                onClick={() => setMobileServices((v) => !v)}
              >
                Services <ChevronDown size={16} className={cn(mobileServices && "rotate-180")} />
              </button>
              {mobileServices &&
                serviceNav.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-lg px-6 py-2 text-sm text-[var(--muted)]"
                  >
                    {s.title}
                  </Link>
                ))}
              <button
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold"
                onClick={() => setMobileIndustries((v) => !v)}
              >
                Industries <ChevronDown size={16} className={cn(mobileIndustries && "rotate-180")} />
              </button>
              {mobileIndustries &&
                industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="rounded-lg px-6 py-2 text-sm text-[var(--muted)]"
                  >
                    {ind.title}
                  </Link>
                ))}
              {navLinks
                .filter((l) => l.href !== "/")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-white/80"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition",
        active ? "text-white" : "text-white/65 hover:text-white",
      )}
      data-cursor
    >
      {label}
      {active && <span className="absolute bottom-0.5 left-3 right-3 h-px bg-white" />}
    </Link>
  );
}
