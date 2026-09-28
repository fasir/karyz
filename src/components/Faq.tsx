"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    q: "What can I find at Paw & Whisker?",
    a: "We curate everyday accessories for pets, including walk gear, toys, cozy beds, feeding essentials, and playful picks for curious cats.",
  },
  {
    q: "How do I choose the right size?",
    a: "Check the sizing notes on each product and measure your pet before ordering. If you are between sizes, contact us and we can help you choose.",
  },
  {
    q: "How much is shipping?",
    a: "Standard shipping is free on orders over $50. Shipping options and delivery estimates are shown at checkout.",
  },
  {
    q: "Can I return an item if it does not fit?",
    a: "Yes. Unused items can be returned within 30 days of delivery. Contact our care team and we will guide you through the return.",
  },
  {
    q: "Are your accessories suitable for every pet?",
    a: "Pets have different needs, so please review the materials, fit notes, and care instructions listed with each item. Reach out if you need help finding a suitable option.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block mb-2">
            Here to help
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            Good questions, <span className="brand-gradient-text">good answers.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.q}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base sm:text-lg text-[var(--ink)] hover:text-[var(--brand)] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-[var(--brand)] text-white rotate-180" : "bg-[var(--tint)] text-[var(--brand)]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[var(--muted)] leading-relaxed animate-in fade-in-50 duration-200">
                    <p className="border-t border-[var(--line)]/50 pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
