"use client";

import Link from "next/link";
import { agentCategories, freeAgents } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { IMG } from "@/lib/media";
import { useMemo, useState } from "react";
import { Bot } from "lucide-react";

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
    <section className="pb-16">
      <div className="container-x">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search AI agents…"
            className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm outline-none focus:border-[var(--brand)]"
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
          <Button href="/contact">Request a Custom Agent</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-3">
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
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {paged.map((agent) => (
                <article
                  key={agent.slug}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--bg-elevated)]"
                >
                  <div className="relative h-28">
                    <CoverImage src={IMG.cyber} alt={agent.name} className="h-full" />
                    <div className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-xl bg-black/50 text-[var(--brand)]">
                      <Bot size={18} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    {agent.featured && (
                      <span className="mb-3 w-fit rounded-full bg-[var(--brand)]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand)]">
                        Featured
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold">{agent.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-[var(--muted)]">{agent.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {agent.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 px-2 py-0.5 text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href={`/services/free-ai-agents/${agent.slug}`} className="mt-5">
                      <span className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 py-2.5 text-[11px] font-bold uppercase tracking-wider">
                        View Details
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            {paged.length < filtered.length && (
              <div className="mt-8 flex justify-center">
                <Button variant="secondary" onClick={() => setPage((p) => p + 1)}>
                  Load More
                </Button>
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
