"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { serviceNav } from "@/lib/content";

type Props = {
  defaultService?: string;
};

export function LeadForm({ defaultService = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.message || "").trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Full name is required.";
    if (!email) nextErrors.email = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (!message) nextErrors.message = "Tell us about the requirement.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setStatus("ok");
      setNote("Thanks — your request has been received. Our team will get back to you shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setNote("Something went wrong. Please email hello@robopilot.ai directly.");
    }
  }

  return (
    <section className="border-t border-white/10 py-20">
      <div className="container-x grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Let&apos;s build
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Let&apos;s Build What&apos;s Next.
          </h2>
          <p className="mt-4 max-w-md text-[var(--muted)]">
            Tell us what you want to automate, build or improve. We&apos;ll help turn the opportunity
            into a practical technology plan.
          </p>
        </div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white p-6 text-[#0b1020] md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full Name *" name="name" error={errors.name} />
            <Field label="Work Email *" name="email" type="email" error={errors.email} />
            <Field label="Company" name="company" />
            <Field label="Phone (optional)" name="phone" />
          </div>
          <label className="mt-4 grid gap-1.5 text-xs font-bold">
            Service of Interest
            <select
              name="service"
              defaultValue={defaultService}
              className="rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium"
            >
              <option value="">Select a service</option>
              {serviceNav.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 grid gap-1.5 text-xs font-bold">
            Project / Requirement *
            <textarea
              name="message"
              rows={4}
              className="rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium"
            />
            {errors.message && <span className="font-medium text-rose-600">{errors.message}</span>}
          </label>
          <Button type="submit" className="mt-5 w-full !rounded-xl">
            {status === "sending" ? "Sending..." : "Talk to a RoboPilot Expert"}
          </Button>
          {note && (
            <p className={`mt-3 text-xs ${status === "ok" ? "text-emerald-600" : "text-rose-600"}`}>
              {note}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <label className="grid gap-1.5 text-xs font-bold">
      {label}
      <input
        name={name}
        type={type}
        className="rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium"
      />
      {error && <span className="font-medium text-rose-600">{error}</span>}
    </label>
  );
}
