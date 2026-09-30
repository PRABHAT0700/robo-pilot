"use client";

import { motion } from "framer-motion";

const nodes = [
  "User",
  "Agent",
  "Knowledge",
  "Tools / APIs",
  "Business systems",
  "Human approval",
  "Outcome",
];

export function AgentWorkflow() {
  return (
    <section className="py-16">
      <div className="container-x">
        <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">
          From request to action — an intelligent workflow.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {nodes.map((n, i) => (
            <div key={n} className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--bg-elevated)] px-4 py-3 text-sm font-semibold"
              >
                {n}
              </motion.div>
              {i < nodes.length - 1 && (
                <span className="hidden text-[var(--brand)] sm:inline">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MlLifecycle() {
  const steps = ["Discover", "Prepare Data", "Experiment", "Validate", "Deploy", "Monitor", "Improve"];
  return (
    <section className="py-16">
      <div className="container-x">
        <h2 className="mb-10 text-center font-display text-3xl font-bold">ML delivery lifecycle</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {steps.map((s, i) => (
            <div key={s} className="rounded-2xl border border-white/10 bg-[var(--bg-elevated)] p-4 text-center">
              <div className="text-xs font-bold text-[var(--brand)]">0{i + 1}</div>
              <div className="mt-2 text-sm font-semibold">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
