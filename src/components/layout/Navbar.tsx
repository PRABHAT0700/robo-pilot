"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";
import { industries, navLinks, serviceNav, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (open) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      if (y < 16) {
        setHidden(false);
      } else if (y > lastY.current + 4) {
        setHidden(true);
        setServicesOpen(false);
        setIndustriesOpen(false);
      } else if (y < lastY.current - 1) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-nav-light]");
    if (!targets.length) {
      setOnLight(false);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        setOnLight(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: "-56px 0px -70% 0px", threshold: 0 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
    setHidden(false);
  }, [pathname]);

  const serviceActive = pathname.startsWith("/services");
  const industryActive = pathname.startsWith("/industries");
  const inverted = onLight;

  return (
    <>
    <motion.header
      initial={false}
      animate={
        hidden
          ? { y: "-110%", opacity: 0 }
          : { y: 0, opacity: 1 }
      }
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 origin-top bg-transparent"
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <BrandLogo size={38} inverted={inverted} />

        <nav
          className={cn(
            "hidden items-center rounded-full border px-2 py-1 backdrop-blur-2xl lg:flex",
            inverted
              ? "border-black/8 bg-white/55 text-[#0b1020] shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
              : "border-white/12 bg-white/8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]",
          )}
          aria-label="Main"
        >
          <NavItem href="/" label="Home" active={pathname === "/"} inverted={inverted} />

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "nav-link",
                inverted
                  ? serviceActive
                    ? "text-[#0b1020]"
                    : "text-[#0b1020]/60 hover:text-[#0b1020]"
                  : serviceActive
                    ? "text-white"
                    : "text-white/65 hover:text-white",
              )}
              aria-expanded={servicesOpen}
              data-cursor
            >
              <span className="relative z-[1] inline-flex items-center gap-1">
                Services <ChevronDown size={14} />
              </span>
              <span className={cn("nav-link__line", serviceActive && "is-active")} />
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
                "nav-link",
                inverted
                  ? industryActive
                    ? "text-[#0b1020]"
                    : "text-[#0b1020]/60 hover:text-[#0b1020]"
                  : industryActive
                    ? "text-white"
                    : "text-white/65 hover:text-white",
              )}
              aria-expanded={industriesOpen}
              data-cursor
            >
              <span className="relative z-[1] inline-flex items-center gap-1">
                Industries <ChevronDown size={14} />
              </span>
              <span className={cn("nav-link__line", industryActive && "is-active")} />
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
                inverted={inverted}
              />
            ))}

          <Link
            href="/contact"
            className={cn(
              "ml-1 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs",
              inverted
                ? "border-black/10 text-[#0b1020]/70"
                : "border-white/10 text-white/70",
            )}
            data-cursor
          >
            <MapPin size={12} className="text-[var(--brand)]" />
            {site.location}
          </Link>
        </nav>

        <Link
          href="/contact"
          className={cn(
            "nav-link hidden text-sm font-semibold lg:inline-flex",
            inverted ? "text-[#0b1020]" : "text-white",
          )}
          data-cursor
        >
          <span className="relative z-[1] inline-flex items-center gap-2">
            <span
              className={cn(
                "grid h-7 w-7 place-items-center rounded-full border text-[10px]",
                inverted ? "border-black/20" : "border-white/20",
              )}
            >
              ✦
            </span>
            Let&apos;s Talk
          </span>
          <span className="nav-link__line is-active" />
        </Link>

        <button
          className={cn(
            "grid h-10 w-10 place-items-center rounded-full border lg:hidden",
            inverted ? "border-black/15 bg-black/5 text-[#0b1020]" : "border-white/15 bg-white/5 text-white",
          )}
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
            className="overflow-hidden border-t border-white/10 bg-[#07080d]/95 backdrop-blur-xl lg:hidden"
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
    </motion.header>
    <div className="h-[76px]" aria-hidden />
    </>
  );
}

function NavItem({
  href,
  label,
  active,
  inverted,
}: {
  href: string;
  label: string;
  active: boolean;
  inverted: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "nav-link",
        inverted
          ? active
            ? "text-[#0b1020]"
            : "text-[#0b1020]/60 hover:text-[#0b1020]"
          : active
            ? "text-white"
            : "text-white/65 hover:text-white",
      )}
      data-cursor
    >
      <span className="relative z-[1]">{label}</span>
      <span className={cn("nav-link__line", active && "is-active")} />
    </Link>
  );
}
