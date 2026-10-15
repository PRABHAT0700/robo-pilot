"use client";

import Link from "next/link";
import { agentCategories, freeAgents } from "@/lib/content";
import { IMG } from "@/lib/media";
import { useMemo, useState } from "react";
import { Bot } from "lucide-react";

const agentImages = [IMG.cyber, IMG.robot, IMG.work, IMG.analytics, IMG.laptopDash, IMG.code, IMG.charts, IMG.space];

export function FreeAgentsMarket() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Agents");
  const [platform, setPlatform] = useState("All Platforms");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const filtered = useMemo(() => {
    return freeAgents.filter((a) => {
      const matchQuery = `${a.name} ${a.description} ${a.tags.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchCat = category === "All Agents" || a.category === category;
      const matchPlat =
        platform === "All Platforms" || a.tags.some((t) => t.toLowerCase() === platform.toLowerCase());
      return matchQuery && matchCat && matchPlat;
    });
  }, [query, category, platform]);

  const paged = filtered.slice(0, page * pageSize);
  const platforms = ["All Platforms", "CRM", "Sales", "Support", "OCR", "BI", "Email", "Web"];

  return (
    <section className="all-works-section" style={{ paddingTop: 40 }}>
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search AI agents…"
            className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm outline-none focus:border-[var(--accent-cyan)]"
          />
          <select
            value={platform}
            onChange={(e) => {
              setPlatform(e.target.value);
              setPage(1);
            }}
            className="rounded-full border border-white/15 bg-[#0b1020] px-4 py-3 text-sm"
          >
            {platforms.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <Link href="/contact" className="btn btn-primary" data-cursor>
            CUSTOM AGENT
            <span className="icon-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit rounded-[20px] border border-white/10 bg-[#1c1c24] p-3">
            {agentCategories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className={`mb-1 block w-full rounded-xl px-3 py-2 text-left text-sm ${
                  category === c ? "bg-white/10 text-white" : "text-[var(--muted)] hover:bg-white/5"
                }`}
              >
                {c}
              </button>
            ))}
          </aside>

          <div>
            <div className="all-works-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
              {paged.map((agent, i) => (
                <Link
                  key={agent.slug}
                  href={`/services/free-ai-agents/${agent.slug}`}
                  className="aw-card agent-market-card"
                  data-cursor
                >
                  <div className="aw-card-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={agentImages[i % agentImages.length]} alt={agent.name} loading="lazy" />
                    <div className="aw-pill">
                      <span className="dot-cyan" /> {agent.featured ? "Featured" : agent.category}
                    </div>
                    <div className="svc-card-icon">
                      <Bot size={18} />
                    </div>
                    <h3 className="aw-title" style={{ fontSize: "1.25rem" }}>
                      {agent.name}
                    </h3>
                  </div>
                  <div className="svc-card-body">
                    <p>{agent.description}</p>
                    <span className="svc-card-cta">View details →</span>
                  </div>
                </Link>
              ))}
            </div>
            {paged.length < filtered.length && (
              <div className="mt-8 flex justify-center">
                <button type="button" className="btn btn-secondary" onClick={() => setPage((p) => p + 1)}>
                  Load more
                </button>
              </div>
            )}
            {filtered.length === 0 && (
              <p className="py-12 text-center text-[var(--muted)]">No agents match that search.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
