"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/content";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 md:bottom-7 md:right-6">
      <motion.a
        href={site.phoneTel}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 rounded-full bg-[var(--call)] py-1.5 pr-1.5 pl-4 text-white shadow-[0_12px_40px_rgba(0,114,255,0.45)]"
        data-cursor
        aria-label={`Call ${site.phone}`}
      >
        <span className="text-sm font-bold">Book a Call</span>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
          <Phone size={18} />
        </span>
      </motion.a>

      <motion.a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 rounded-full bg-[var(--whatsapp)] py-1.5 pr-1.5 pl-4 text-white shadow-[0_12px_40px_rgba(37,211,102,0.4)]"
        data-cursor
        aria-label={`WhatsApp ${site.whatsapp}`}
      >
        <span className="text-sm font-bold">WhatsApp Us</span>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20">
          <MessageCircle size={18} />
        </span>
      </motion.a>
    </div>
  );
}
