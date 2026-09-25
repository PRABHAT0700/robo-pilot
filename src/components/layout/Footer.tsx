import Link from "next/link";
import { site, navLinks, services } from "@/lib/content";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-black pt-16 pb-8">
      <div className="glow-orb -right-20 -top-10 h-64 w-64 bg-[#00d2ff] opacity-15" />
      <div className="container-x relative">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo size={40} className="mb-4" />
            <p className="max-w-xs text-sm text-[var(--muted)]">
              Your partner for intelligent technology, custom software, and digital transformation.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white">Explore</h4>
            {navLinks.slice(0, 6).map((l) => (
              <Link key={l.href} href={l.href} className="mb-2 block text-sm text-[var(--muted)] hover:text-[var(--brand)]">
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white">Services</h4>
            {services.slice(0, 5).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="mb-2 block text-sm text-[var(--muted)] hover:text-[var(--brand)]"
              >
                {s.title}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white">Get in Touch</h4>
            <a href={`mailto:${site.email}`} className="mb-2 block text-sm text-[var(--muted)] hover:text-[var(--brand)]">
              {site.email}
            </a>
            <a href={site.phoneTel} className="mb-2 block text-sm text-[var(--muted)] hover:text-[var(--brand)]">
              {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-[var(--muted)] hover:text-[var(--whatsapp)]"
            >
              WhatsApp {site.whatsapp}
            </a>
            <Link href="/contact" className="mb-2 block text-sm text-[var(--muted)] hover:text-white">
              Start a Project ↗
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[11px] text-[var(--dim)]">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Privacy Policy · Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
