import { site } from "@/lib/content";

export const socials = [
  {
    id: "linkedin" as const,
    label: "LinkedIn",
    href: site.linkedin,
    aria: "Visit RoboPylot on LinkedIn",
  },
  {
    id: "instagram" as const,
    label: "Instagram",
    href: site.instagram,
    aria: "Visit RoboPylot on Instagram",
  },
  {
    id: "whatsapp" as const,
    label: "WhatsApp",
    href: site.whatsappHref,
    aria: "Contact RoboPylot on WhatsApp",
  },
] as const;

function LinkedInGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M8.5 9a.8.8 0 0 1 1.4-.6l1 1.5a.8.8 0 0 1-.1 1l-.6.6a6 6 0 0 0 2.3 2.3l.6-.6a.8.8 0 0 1 1-.1l1.5 1a.8.8 0 0 1-.6 1.4A7.5 7.5 0 0 1 8.5 9Z" />
    </svg>
  );
}

const glyphs = {
  linkedin: LinkedInGlyph,
  instagram: InstagramGlyph,
  whatsapp: WhatsAppGlyph,
};

type Variant = "contact" | "footer";

export function SocialIcons({ variant }: { variant: Variant }) {
  if (variant === "contact") {
    return (
      <div className="contact-socials">
        <p className="contact-socials-title">Connect with us</p>
        <div className="contact-socials-list">
          {socials.map((item) => {
            const Glyph = glyphs[item.id];
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-social-link ${item.id}`}
                aria-label={item.aria}
              >
                <Glyph />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="footer-social" aria-label="Social links">
      {socials.map((item) => {
        const Glyph = glyphs[item.id];
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-circle ${item.id}`}
            aria-label={item.aria}
          >
            <Glyph />
          </a>
        );
      })}
    </div>
  );
}
