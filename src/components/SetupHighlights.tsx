"use client";

import React from "react";
import { Truck, BellRing, Globe } from "lucide-react";

export function SetupHighlights() {
  const highlights = [
    {
      title: "Free shipping over $50",
      desc: "Stock up on walk-day favorites and we’ll take care of standard shipping on orders over $50.",
      icon: <Truck className="w-5 h-5 text-[var(--brand)]" />,
    },
    {
      title: "Packed with care",
      desc: "Every order is checked, packed carefully, and sent with tracking so you know when it’s arriving.",
      icon: <BellRing className="w-5 h-5 text-[var(--brand)]" />,
    },
    {
      title: "Easy returns, happy pets",
      desc: "If a fit isn’t quite right, reach out within 30 days and we’ll help make it right.",
      icon: <Globe className="w-5 h-5 text-[var(--brand)]" />,
    },
  ];

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="promise" className="py-20 md:py-28 bg-[var(--alt)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block mb-2">
            The good-to-know bits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            Shopping should feel <span className="brand-gradient-text">easy, too</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              onPointerMove={handlePointerMove}
              className="spotlight-card bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[var(--brand)] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--tint)] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
