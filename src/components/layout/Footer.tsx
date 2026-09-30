import Link from "next/link";
import { site, navLinks, serviceNav } from "@/lib/content";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05060a] pt-16 pb-8">
      <div className="container-x relative">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo size={40} className="mb-4" />
            <p className="max-w-xs text-sm text-[var(--muted)]">
              Crafting digital systems that drive growth, automation and product velocity for
              forward-thinking teams.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white">Services</h4>
            {serviceNav.map((s) => (
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
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white">Company</h4>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="mb-2 block text-sm text-[var(--muted)] hover:text-[var(--brand)]"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Prefer the old school way?
            </h4>
            <a href={`mailto:${site.email}`} className="mb-2 block text-sm text-[var(--muted)] hover:text-white">
              {site.email}
            </a>
            <a href={site.phoneTel} className="mb-2 block text-sm text-[var(--muted)] hover:text-white">
              {site.phone}
            </a>
            <p className="mt-4 text-xs text-[var(--dim)]">{site.location}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[11px] text-[var(--dim)]">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
