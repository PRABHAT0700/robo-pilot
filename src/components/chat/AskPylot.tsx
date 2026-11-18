"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";

type Role = "user" | "assistant";
type ChatMessage = { id: string; role: Role; content: string };

const WELCOME =
  "Hi, I’m Pylot. Ask about RoboPylot services, industries, timelines, or how to start a project.";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function streamReply(
  messages: { role: Role; content: string }[],
  onDelta: (text: string) => void,
) {
  const response = await fetch("/api/pylot/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/event-stream")) {
    const data = (await response.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error || "Pylot could not reply.");
  }

  if (!response.body) {
    throw new Error("Pylot could not reply.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let full = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const events = buffer.split("\n\n");
    buffer = events.pop() || "";
    for (const event of events) {
      const line = event.replace(/^data:\s*/, "").trim();
      if (!line || line === "[DONE]") continue;
      const payload = JSON.parse(line) as { delta?: string; error?: string };
      if (payload.error) throw new Error(payload.error);
      if (payload.delta) {
        full += payload.delta;
        onDelta(full);
      }
    }
  }

  return full;
}

export function AskPylot({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", content: WELCOME },
  ]);
  const scroller = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => field.current?.focus(), 220);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;

    const userMessage: ChatMessage = { id: uid(), role: "user", content: text };
    const assistantId = uid();
    const next = [...messages, userMessage];
    setMessages([...next, { id: assistantId, role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    try {
      const payload = next
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));
      await streamReply(payload, (partial) => {
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, content: partial } : m)),
        );
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Email info@robopylot.com or try again.";
      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, content: message } : m)),
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="pylot-wrap">
      <motion.button
        type="button"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.28 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="pylot-fab"
        data-cursor
        aria-label="Ask Pylot"
        aria-expanded={open}
        onClick={() => onOpenChange(!open)}
      >
        <span className="fab-label text-sm font-bold">Ask Pylot</span>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
          {open ? <X size={18} /> : <Sparkles size={18} />}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section
            className="pylot-panel"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            aria-label="Ask Pylot chat"
          >
            <header className="pylot-panel__head">
              <span className="pylot-panel__avatar">
                <Bot size={18} />
              </span>
              <div>
                <p className="pylot-panel__title">Ask Pylot</p>
                <p className="pylot-panel__sub">RoboPylot assistant</p>
              </div>
              <button
                type="button"
                className="pylot-panel__close"
                aria-label="Close chat"
                onClick={() => onOpenChange(false)}
              >
                <X size={16} />
              </button>
            </header>

            <div className="pylot-panel__messages" ref={scroller}>
              {messages.map((m) => (
                <div key={m.id} className={`pylot-bubble pylot-bubble--${m.role}`}>
                  {m.role === "assistant" && !m.content && busy ? (
                    <span className="pylot-typing" aria-label="Pylot is typing">
                      <i />
                      <i />
                      <i />
                    </span>
                  ) : (
                    m.content
                  )}
                </div>
              ))}
            </div>

            <form className="pylot-panel__composer" onSubmit={onSubmit}>
              <textarea
                ref={field}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    e.currentTarget.form?.requestSubmit();
                  }
                }}
                placeholder="Ask about agents, apps, pricing…"
                maxLength={2000}
                disabled={busy}
              />
              <button type="submit" disabled={busy || !input.trim()} aria-label="Send message">
                <Send size={16} />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
