"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    category: "Products",
    q: "What can I find at Paw & Whisker?",
    a: "We curate everyday accessories for pets, including walk gear, toys, cozy beds, feeding essentials, and playful picks for curious cats.",
  },
  {
    category: "Sizing",
    q: "How do I choose the right size?",
    a: "Check the sizing notes on each product and measure your pet before ordering. If you are between sizes, contact us and we can help you choose.",
  },
  {
    category: "Shipping",
    q: "How much is shipping?",
    a: "Standard shipping is free on orders over $50. Shipping options and delivery estimates are shown at checkout.",
  },
  {
    category: "Returns",
    q: "Can I return an item if it does not fit?",
    a: "Yes. Unused items can be returned within 30 days of delivery. Contact our care team and we will guide you through the return.",
  },
  {
    category: "Products",
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
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--alt) 0%, var(--bg) 100%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(91,33,182,0.06) 0%, transparent 45%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Sticky header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--brand)] uppercase tracking-widest px-3 py-1.5 rounded-full bg-[var(--tint)]">
              Here to help
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
              Good questions,{" "}
              <span className="brand-gradient-text">good answers.</span>
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our friendly support team is just a message away.
            </p>
            {/* Support card */}
            <div className="bg-white border border-[var(--line)] rounded-2xl p-5 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--ink)]">Still have questions?</p>
                <p className="text-xs text-[var(--muted)] mt-0.5">We typically reply within a few hours.</p>
                <button className="mt-2 text-xs font-semibold text-[var(--brand)] hover:underline cursor-pointer">
                  Contact support →
                </button>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {FAQ_LIST.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[var(--brand)]/40 shadow-lg shadow-purple-900/5"
                      : "border-[var(--line)] hover:border-[var(--brand)]/30"
                  } bg-white`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 flex-1 pr-4">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                        isOpen ? "bg-[var(--brand)] text-white" : "bg-[var(--tint)] text-[var(--brand)]"
                      }`}>
                        {item.category}
                      </span>
                      <span className={`font-semibold text-sm sm:text-base transition-colors ${
                        isOpen ? "text-[var(--brand)]" : "text-[var(--ink)] group-hover:text-[var(--brand)]"
                      }`}>
                        {item.q}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "text-white rotate-180"
                        : "bg-[var(--tint)] text-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white"
                    }`}
                      style={isOpen ? { background: "linear-gradient(135deg, #5b21b6, #a855f7)" } : {}}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 animate-in fade-in-50 duration-200">
                      <div className="border-t border-[var(--line)]/50 pt-4">
                        <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
