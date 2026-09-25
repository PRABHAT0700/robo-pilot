"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [note, setNote] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setStatus("ok");
      setNote(json.message);
      form.reset();
    } catch {
      setStatus("error");
      setNote("Something went wrong. Please email hello@robopilot.ai directly.");
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white p-6 text-[#0b0d14] shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-8"
    >
      <h3 className="font-display text-2xl font-bold">Start a Conversation</h3>
      <p className="mt-1 text-sm text-slate-500">Fill in the details and we&apos;ll be in touch.</p>

      <div className="mt-5 grid gap-4">
        <Field label="Full name *" name="name" required placeholder="Your full name" />
        <Field
          label="Business email *"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
        <label className="grid gap-1.5 text-xs font-bold">
          Service you&apos;re interested in
          <select
            name="service"
            className="rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[var(--brand)]/15"
            defaultValue=""
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-xs font-bold">
          Tell us about your project *
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Briefly describe your requirements..."
            className="resize-y rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[var(--brand)]/15"
          />
        </label>
      </div>

      <Button type="submit" className="mt-5 w-full">
        {status === "sending" ? "Sending..." : "Send Inquiry ↗"}
      </Button>

      {note && (
        <p
          className={`mt-3 text-xs ${status === "ok" ? "text-emerald-600" : "text-rose-600"}`}
          role="status"
        >
          {note}
        </p>
      )}
      {!note && (
        <p className="mt-3 text-[11px] text-slate-400">
          Submissions are processed by our contact API and prepared for the Robopilot team.
        </p>
      )}
    </motion.form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1.5 text-xs font-bold">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[var(--brand)]/15"
      />
    </label>
  );
}
