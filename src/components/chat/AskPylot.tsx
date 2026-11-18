"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Mail, MessageCircle, Phone, Send, Sparkles, X } from "lucide-react";
import { site } from "@/lib/content";
import { PylotMessage } from "@/components/chat/PylotMessage";

type Role = "user" | "assistant";
type ChatMessage = { id: string; role: Role; content: string };

const WELCOME =
  "Hi, I’m Pylot. Ask about RoboPylot services, industries, timelines, or how to start a project.";

const SUGGESTIONS = [
  "What services does RoboPylot offer?",
  "How do I start a project?",
  "How can I contact the team?",
] as const;

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
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", content: WELCOME },
  ]);
  const scroller = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLTextAreaElement>(null);
  const lenis = useLenis();
  const showSuggestions = messages.length === 1 && !busy;

  function scrollToEnd(smooth = false) {
    const root = scroller.current;
    if (!root) return;
    root.scrollTo({ top: root.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  }

  useEffect(() => {
    scrollToEnd(!busy);
  }, [messages, open, busy]);

  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
    return () => {
      lenis.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => {
        field.current?.focus();
        scrollToEnd();
      }, 220);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  async function sendText(text: string) {
    const value = text.trim();
    if (!value || busy) return;

    const userMessage: ChatMessage = { id: uid(), role: "user", content: value };
    const assistantId = uid();
    const next = [...messages, userMessage];
    setMessages([...next, { id: assistantId, role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    setStreamingId(assistantId);

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
          : `Something went wrong. Email ${site.email} or try again.`;
      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, content: message } : m)),
      );
    } finally {
      setBusy(false);
      setStreamingId(null);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void sendText(input);
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
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            aria-label="Ask Pylot chat"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <header className="pylot-panel__head">
              <span className="pylot-panel__avatar">P</span>
              <div>
                <p className="pylot-panel__title">Ask Pylot</p>
                <p className="pylot-panel__sub">
                  <span className="pylot-live" /> Online · RoboPylot assistant
                </p>
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

            <div
              className="pylot-panel__messages"
              ref={scroller}
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              onWheel={(e) => e.stopPropagation()}
            >
              {messages.map((m) => (
                <PylotMessage
                  key={m.id}
                  role={m.role}
                  content={m.content}
                  streaming={m.id === streamingId}
                />
              ))}
              {showSuggestions ? (
                <div className="pylot-suggestions">
                  {SUGGESTIONS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      className="pylot-suggestion"
                      onClick={() => void sendText(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              ) : null}
              <div ref={endRef} />
            </div>

            <div className="pylot-panel__contacts">
              <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`}>
                <Mail size={14} />
                Email
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp RoboPylot">
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a href={site.phoneTel} aria-label={`Call ${site.phone}`}>
                <Phone size={14} />
                Call
              </a>
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
                    void sendText(input);
                  }
                }}
                placeholder="Message Pylot…"
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
