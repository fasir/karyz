"use client";

import React from "react";
import Image from "next/image";
import { Check, Wand2 } from "lucide-react";

export function BentoGrid() {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block mb-2">
            Engineered For Scale
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            Everything you need to start{" "}
            <span className="brand-gradient-text">selling online</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
            Fast, secure and ready to grow with you from your very first order.
          </p>
        </div>

        {/* 6-Card Grid (3 columns x 2 rows matching reference design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ── CARD 1: Easy product management ── */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card group flex flex-col bg-[var(--surface)] border border-[var(--line)] rounded-[28px] overflow-hidden shadow-xs hover:shadow-xl hover:border-[var(--brand)]/40 transition-all duration-300"
          >
            {/* Visual Container */}
            <div className="h-[250px] bg-slate-50/70 dark:bg-white/[0.02] border-b border-[var(--line)] flex items-end justify-center px-5 pt-5 overflow-hidden">
              <div className="w-full max-w-[280px] bg-white dark:bg-[#1a1829] rounded-t-2xl border-t border-x border-[var(--line)] shadow-lg p-4 pb-2 transition-transform duration-300 group-hover:-translate-y-1">
                {/* Google Sheet icon header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-6 rounded-[3px] bg-[#0F9D58] flex flex-col items-center justify-center p-1 shadow-xs">
                    <div className="w-full h-0.5 bg-white/90 rounded-xs mb-0.5" />
                    <div className="w-full h-0.5 bg-white/90 rounded-xs mb-0.5" />
                    <div className="w-2/3 h-0.5 bg-white/90 rounded-xs self-start" />
                  </div>
                  <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-12 text-[10px] font-semibold text-slate-400 dark:text-slate-500 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="col-span-1">#</span>
                  <span className="col-span-6">Name</span>
                  <span className="col-span-3 text-right">Price</span>
                  <span className="col-span-2 text-right">Qty</span>
                </div>

                {/* Table Rows */}
                <div className="space-y-1 mt-1 text-[10px]">
                  {[
                    { id: 1, name: "Classic Runner", price: "99.00", qty: "24" },
                    { id: 2, name: "Air Max 90", price: "85.00", qty: "18" },
                    { id: 3, name: "Sport Slides", price: "45.00", qty: "32" },
                    { id: 4, name: "Casual Loafer", price: "120.00", qty: "15" },
                    { id: 5, name: "Canvas High", price: "65.00", qty: "40" },
                    { id: 6, name: "Trail Boots", price: "149.00", qty: "8" },
                  ].map((row) => (
                    <div
                      key={row.id}
                      className="grid grid-cols-12 text-slate-700 dark:text-slate-300 py-0.5 hover:bg-slate-50 dark:hover:bg-white/[0.04] rounded transition-colors"
                    >
                      <span className="col-span-1 text-slate-400 dark:text-slate-600">{row.id}</span>
                      <span className="col-span-6 font-medium truncate">{row.name}</span>
                      <span className="col-span-3 text-right text-slate-500 dark:text-slate-400">{row.price}</span>
                      <span className="col-span-2 text-right text-slate-500 dark:text-slate-400">{row.qty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Easy product management
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Manage &amp; update products within Google Sheet with a free online store builder.
              </p>
            </div>
          </div>

          {/* ── CARD 2: Brandable URL ── */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card group flex flex-col bg-[var(--surface)] border border-[var(--line)] rounded-[28px] overflow-hidden shadow-xs hover:shadow-xl hover:border-[var(--brand)]/40 transition-all duration-300"
          >
            {/* Visual Container */}
            <div className="h-[250px] bg-slate-50/70 dark:bg-white/[0.02] border-b border-[var(--line)] flex items-end justify-center px-5 overflow-hidden">
              <div className="w-full max-w-[280px] bg-white dark:bg-[#1a1829] rounded-t-2xl border-t border-x border-[var(--line)] shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                {/* Browser address bar */}
                <div className="px-3.5 py-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Centered URL pill */}
                  <div className="flex-1 mx-1 bg-slate-50 dark:bg-white/[0.05] border border-slate-200/80 dark:border-slate-700/80 rounded-lg py-1 px-2.5 flex items-center justify-center gap-1.5 shadow-2xs">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="text-[11px] font-medium text-slate-700 dark:text-slate-200">
                      .store.link
                    </span>
                  </div>

                  {/* Hamburger menu */}
                  <div className="shrink-0 flex flex-col justify-center gap-0.5 w-3.5">
                    <div className="h-0.5 w-full bg-slate-300 dark:bg-slate-600 rounded-full" />
                    <div className="h-0.5 w-full bg-slate-300 dark:bg-slate-600 rounded-full" />
                    <div className="h-0.5 w-full bg-slate-300 dark:bg-slate-600 rounded-full" />
                  </div>
                </div>

                {/* Browser inner wireframe */}
                <div className="p-3.5 space-y-2.5">
                  <div className="h-14 bg-slate-100 dark:bg-white/[0.04] rounded-xl border border-slate-100 dark:border-white/[0.03]" />
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="h-16 bg-slate-100 dark:bg-white/[0.04] rounded-xl border border-slate-100 dark:border-white/[0.03]" />
                    <div className="h-16 bg-slate-100 dark:bg-white/[0.04] rounded-xl border border-slate-100 dark:border-white/[0.03]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Brandable URL
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Get your business store.link instantly without buying a domain.
              </p>
            </div>
          </div>

          {/* ── CARD 3: Minimalist templates ── */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card group flex flex-col bg-[var(--surface)] border border-[var(--line)] rounded-[28px] overflow-hidden shadow-xs hover:shadow-xl hover:border-[var(--brand)]/40 transition-all duration-300"
          >
            {/* Visual Container */}
            <div className="h-[250px] bg-slate-50/70 dark:bg-white/[0.02] border-b border-[var(--line)] flex items-end justify-center px-5 overflow-hidden">
              <div className="w-full max-w-[280px] bg-white dark:bg-[#1a1829] rounded-t-2xl border-t border-x border-[var(--line)] shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                {/* Browser chrome */}
                <div className="px-3.5 py-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                  </div>
                  <div className="h-1.5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full ml-1" />
                </div>

                {/* Templates preview canvas */}
                <div className="p-3.5 space-y-2.5">
                  <div className="h-11 bg-slate-100 dark:bg-white/[0.04] rounded-xl" />
                  <div className="h-1.5 w-12 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto" />
                  <div className="grid grid-cols-3 gap-2 relative">
                    <div className="h-16 bg-slate-100 dark:bg-white/[0.04] rounded-lg" />
                    <div className="h-16 bg-slate-100 dark:bg-white/[0.04] rounded-lg" />
                    <div className="h-16 bg-slate-100 dark:bg-white/[0.04] rounded-lg relative flex items-center justify-center">
                      {/* Wand with magic sparkles */}
                      <div className="relative">
                        <Wand2 className="w-5 h-5 text-slate-800 dark:text-slate-100 -rotate-45" />
                        <span className="absolute -top-1 -right-1 text-emerald-500 text-[10px] font-bold leading-none animate-pulse">
                          ✦
                        </span>
                        <span className="absolute -bottom-1 -left-1 text-emerald-500 text-[8px] font-bold leading-none">
                          ✦
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Minimalist templates
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Clean online store website builder templates designed to showcase your products.
              </p>
            </div>
          </div>

          {/* ── CARD 4: Save time (AI Setup Steps) ── */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card group flex flex-col bg-[var(--surface)] border border-[var(--line)] rounded-[28px] overflow-hidden shadow-xs hover:shadow-xl hover:border-[var(--brand)]/40 transition-all duration-300"
          >
            {/* Visual Container */}
            <div className="h-[250px] bg-slate-50/70 dark:bg-white/[0.02] border-b border-[var(--line)] flex items-center justify-center px-6">
              <div className="w-full max-w-[240px] flex flex-col items-center">
                {/* Step 1 */}
                <div className="w-full bg-white dark:bg-[#1a1829] border border-[var(--line)] rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    Tell AI what you sell
                  </span>
                </div>

                {/* Connector */}
                <div className="w-px h-3 bg-slate-200 dark:bg-slate-700" />

                {/* Step 2 */}
                <div className="w-full bg-white dark:bg-[#1a1829] border border-[var(--line)] rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    Add your products
                  </span>
                </div>

                {/* Connector */}
                <div className="w-px h-3 bg-slate-200 dark:bg-slate-700" />

                {/* Step 3 */}
                <div className="w-full bg-white dark:bg-[#1a1829] border border-[var(--line)] rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    Add payments &amp; shipping
                  </span>
                </div>

                {/* Connector to live badge */}
                <div className="w-px h-3 border-l-2 border-dotted border-emerald-400" />

                {/* Your store is live pill */}
                <div className="w-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-400/80 rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                    Your store is live!
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Save time
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Skip lengthy setup processes of traditional e-commerce platforms.
              </p>
            </div>
          </div>

          {/* ── CARD 5: User-friendly (AI Generated Sneaker Product Card + Google Sheets) ── */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card group flex flex-col bg-[var(--surface)] border border-[var(--line)] rounded-[28px] overflow-hidden shadow-xs hover:shadow-xl hover:border-[var(--brand)]/40 transition-all duration-300"
          >
            {/* Visual Container */}
            <div className="h-[250px] bg-slate-50/70 dark:bg-white/[0.02] border-b border-[var(--line)] relative flex items-center justify-center px-4 overflow-hidden">
              {/* Product card with AI generated sneaker photo */}
              <div className="w-48 bg-white dark:bg-[#1a1829] rounded-2xl border border-[var(--line)] shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="relative aspect-square w-full bg-[#d8a86a] overflow-hidden">
                  <Image
                    src="/sneaker.jpg"
                    alt="Classic R Sneaker"
                    fill
                    className="object-cover"
                    sizes="192px"
                    priority
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">Classic R</p>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    $99.00
                  </p>
                </div>
              </div>

              {/* Floating Google Sheets input cell overlay */}
              <div className="absolute top-4 left-6 sm:left-8 bg-white dark:bg-[#151421] rounded-lg border border-slate-200 dark:border-slate-700 shadow-xl p-2 z-10">
                <div className="grid grid-cols-2 text-[9px] text-slate-400 dark:text-slate-500 font-semibold mb-1 px-1">
                  <span>Name</span>
                  <span className="text-right">Price</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-400">1</span>
                  <div className="px-2 py-0.5 bg-blue-50/60 dark:bg-blue-950/40 border-2 border-blue-500 rounded text-[11px] font-semibold text-slate-800 dark:text-slate-100">
                    Classic R
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 ml-1">99.00</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                User-friendly
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Create online store and manage it with Google Sheets with zero technical skills.
              </p>
            </div>
          </div>

          {/* ── CARD 6: Zero-commission ── */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card group flex flex-col bg-[var(--surface)] border border-[var(--line)] rounded-[28px] overflow-hidden shadow-xs hover:shadow-xl hover:border-[var(--brand)]/40 transition-all duration-300"
          >
            {/* Visual Container */}
            <div className="h-[250px] bg-slate-50/70 dark:bg-white/[0.02] border-b border-[var(--line)] flex flex-col items-center justify-center px-6 gap-3.5">
              {/* 0% commission green pill badge */}
              <div className="px-4 py-1.5 rounded-full border border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center shadow-2xs">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  0% commission
                </span>
              </div>

              {/* Live order notification pills */}
              <div className="w-full max-w-[240px] space-y-2.5">
                <div className="bg-white dark:bg-[#1a1829] border border-[var(--line)] rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                    SM
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">#1042</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 flex-1 truncate">
                    Sarah M.
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    +$129
                  </span>
                </div>

                <div className="bg-white dark:bg-[#1a1829] border border-[var(--line)] rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                    JK
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">#1043</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 flex-1 truncate">
                    James K.
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    +$85
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Zero-commission
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                We don&apos;t take a cut from your total orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
