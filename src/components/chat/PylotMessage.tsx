"use client";

import type { ReactNode } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/content";

function linkKind(href: string) {
  const lower = href.toLowerCase();
  if (lower.startsWith("mailto:") || lower.includes("@")) return "email";
  if (lower.startsWith("tel:") || lower.includes("wa.me") || lower.includes("whatsapp")) {
    return lower.startsWith("tel:") ? "phone" : "whatsapp";
  }
  if (lower.includes("/contact")) return "contact";
  return "link";
}

function ContactChip({ href, label }: { href: string; label: string }) {
  const kind = linkKind(href);
  const Icon = kind === "email" || kind === "contact" ? Mail : kind === "whatsapp" ? MessageCircle : Phone;
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <a
      className={`pylot-chip pylot-chip--${kind}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <Icon size={14} />
      <span>{label}</span>
    </a>
  );
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern =
    /(\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\)|(?:https?:\/\/[^\s<]+)|(?:\/contact)|(?:mailto:[^\s<]+)|(?:tel:[^\s<]+)|(?:\+91[\s-]?\d[\d\s-]{8,}\d)|(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}))/gi;

  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];
    const id = `${keyPrefix}-${i++}`;

    if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(<strong key={id}>{token.slice(2, -2)}</strong>);
    } else if (match[2] && match[3]) {
      nodes.push(<ContactChip key={id} href={match[3]} label={match[2]} />);
    } else if (token.startsWith("/contact")) {
      nodes.push(<ContactChip key={id} href="/contact" label="Contact page" />);
    } else if (token.toLowerCase().startsWith("mailto:")) {
      nodes.push(<ContactChip key={id} href={token} label={token.replace(/^mailto:/i, "")} />);
    } else if (token.toLowerCase().startsWith("tel:")) {
      nodes.push(<ContactChip key={id} href={token} label={token.replace(/^tel:/i, "")} />);
    } else if (token.includes("@") && !token.includes("://")) {
      nodes.push(<ContactChip key={id} href={`mailto:${token}`} label={token} />);
    } else if (token.startsWith("+91") || /^\+?\d[\d\s-]{8,}$/.test(token)) {
      const tel = `tel:${token.replace(/\s+/g, "")}`;
      const isWhatsapp = token.replace(/\D/g, "").endsWith("9307721854");
      nodes.push(
        <ContactChip
          key={id}
          href={isWhatsapp ? site.whatsappHref : tel}
          label={isWhatsapp ? `WhatsApp ${token}` : token}
        />,
      );
    } else {
      const href = token.replace(/[).,]+$/, "");
      const label = href.replace(/^https?:\/\//, "").replace(/\/$/, "");
      nodes.push(<ContactChip key={id} href={href} label={label} />);
    }

    last = match.index + token.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function PylotMessage({
  role,
  content,
  streaming,
}: {
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
}) {
  if (role === "user") {
    return <div className="pylot-bubble pylot-bubble--user">{content}</div>;
  }

  if (!content && streaming) {
    return (
      <div className="pylot-row">
        <div className="pylot-row__avatar" aria-hidden>
          P
        </div>
        <div className="pylot-bubble pylot-bubble--assistant">
          <span className="pylot-typing" aria-label="Pylot is typing">
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
    );
  }

  const blocks = content.split(/\n{2,}/);

  return (
    <div className="pylot-row">
      <div className="pylot-row__avatar" aria-hidden>
        P
      </div>
      <div className="pylot-bubble pylot-bubble--assistant">
        {blocks.map((block, bi) => {
          const lines = block.split("\n");
          const list = lines.every((line) => /^\s*([-*]|\d+\.)\s+/.test(line));
          if (list) {
            return (
              <ul key={bi} className="pylot-md-list">
                {lines.map((line, li) => (
                  <li key={li}>{renderInline(line.replace(/^\s*([-*]|\d+\.)\s+/, ""), `${bi}-${li}`)}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={bi} className="pylot-md-p">
              {lines.map((line, li) => (
                <span key={li}>
                  {li > 0 ? <br /> : null}
                  {renderInline(line, `${bi}-${li}`)}
                </span>
              ))}
            </p>
          );
        })}
        {streaming ? <span className="pylot-caret" aria-hidden /> : null}
      </div>
    </div>
  );
}
