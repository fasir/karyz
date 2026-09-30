"use client";

import React from "react";
import Image from "next/image";
import { Check, Wand2, Zap, Globe, ShieldCheck, Package, Star } from "lucide-react";

export function BentoGrid() {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const cardBase =
    "spotlight-card group flex flex-col bg-white border border-[var(--line)] rounded-[28px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1 hover:border-[var(--brand)]/40";

  return (
    <section id="features" className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--brand)] uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full bg-[var(--tint)]">
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

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* ── CARD 1: Easy product management ── */}
          <div onPointerMove={handlePointerMove} className={cardBase}>
            <div className="h-[240px] bg-slate-50 border-b border-[var(--line)] flex items-end justify-center px-5 pt-5 overflow-hidden">
              <div className="w-full max-w-[280px] bg-white rounded-t-2xl border-t border-x border-[var(--line)] shadow-lg p-4 pb-2 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-6 rounded-[3px] bg-[#0F9D58] flex flex-col items-center justify-center p-1 shadow-sm">
                    <div className="w-full h-0.5 bg-white/90 rounded-sm mb-0.5" />
                    <div className="w-full h-0.5 bg-white/90 rounded-sm mb-0.5" />
                    <div className="w-2/3 h-0.5 bg-white/90 rounded-sm self-start" />
                  </div>
                  <div className="h-2 w-20 bg-slate-200 rounded-full" />
                  <span className="ml-auto text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-12 text-[10px] font-semibold text-slate-400 pb-1.5 border-b border-slate-100">
                  <span className="col-span-1">#</span>
                  <span className="col-span-6">Name</span>
                  <span className="col-span-3 text-right">Price</span>
                  <span className="col-span-2 text-right">Qty</span>
                </div>
                <div className="space-y-1 mt-1 text-[10px]">
                  {[
                    { id: 1, name: "Trail Harness", price: "32.00", qty: "24", highlight: true },
                    { id: 2, name: "Soft Chew Toy", price: "16.00", qty: "41" },
                    { id: 3, name: "Cozy Pet Bed", price: "58.00", qty: "12" },
                    { id: 4, name: "Feeder Bowl", price: "24.00", qty: "30" },
                    { id: 5, name: "Cat Scratcher", price: "38.00", qty: "19" },
                  ].map((row) => (
                    <div key={row.id}
                      className={`grid grid-cols-12 py-0.5 rounded transition-colors ${row.highlight ? "bg-purple-50 text-purple-900" : "text-slate-700"}`}>
                      <span className="col-span-1 text-slate-400">{row.id}</span>
                      <span className="col-span-6 font-medium truncate">{row.name}</span>
                      <span className="col-span-3 text-right text-slate-500">{row.price}</span>
                      <span className="col-span-2 text-right text-slate-500">{row.qty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-7">
              <div className="w-9 h-9 rounded-xl bg-[var(--tint)] flex items-center justify-center mb-3">
                <Package className="w-4.5 h-4.5 text-[var(--brand)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Easy product management
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Manage & update products within Google Sheet with our free online store builder.
              </p>
            </div>
          </div>

          {/* ── CARD 2: Brandable URL ── */}
          <div onPointerMove={handlePointerMove} className={cardBase}>
            <div className="h-[240px] bg-slate-50 border-b border-[var(--line)] flex items-end justify-center px-5 overflow-hidden">
              <div className="w-full max-w-[280px] bg-white rounded-t-2xl border-t border-x border-[var(--line)] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                {/* Browser chrome */}
                <div className="px-3.5 py-2.5 border-b border-slate-100 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 mx-1 bg-slate-50 border border-slate-200/80 rounded-lg py-1 px-2.5 flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="text-[11px] font-semibold text-[var(--brand)]">yourstore.store.link</span>
                  </div>
                </div>
                <div className="p-3.5 space-y-2.5">
                  <div className="h-14 bg-gradient-to-r from-[var(--tint)] to-purple-100 rounded-xl border border-[var(--line)]" />
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="h-16 bg-slate-100 rounded-xl border border-slate-100" />
                    <div className="h-16 bg-slate-100 rounded-xl border border-slate-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-7">
              <div className="w-9 h-9 rounded-xl bg-[var(--tint)] flex items-center justify-center mb-3">
                <Globe className="w-4.5 h-4.5 text-[var(--brand)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Brandable URL
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Get your business store.link instantly without buying a domain.
              </p>
            </div>
          </div>

          {/* ── CARD 3: Minimalist templates ── */}
          <div onPointerMove={handlePointerMove} className={cardBase}>
            <div className="h-[240px] bg-slate-50 border-b border-[var(--line)] flex items-end justify-center px-5 overflow-hidden">
              <div className="w-full max-w-[280px] bg-white rounded-t-2xl border-t border-x border-[var(--line)] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <div className="px-3.5 py-2.5 border-b border-slate-100 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-1.5 w-20 bg-slate-200 rounded-full ml-1" />
                </div>
                <div className="p-3.5 space-y-2.5">
                  <div className="h-11 bg-slate-100 rounded-xl" />
                  <div className="h-1.5 w-12 bg-slate-200 rounded-full mx-auto" />
                  <div className="grid grid-cols-3 gap-2 relative">
                    <div className="h-16 bg-purple-50 rounded-lg border border-purple-200" />
                    <div className="h-16 bg-slate-100 rounded-lg" />
                    <div className="h-16 bg-slate-100 rounded-lg relative flex items-center justify-center">
                      <div className="relative">
                        <Wand2 className="w-5 h-5 text-slate-800 -rotate-45" />
                        <span className="absolute -top-1 -right-1 text-emerald-500 text-[10px] font-bold animate-pulse">✦</span>
                        <span className="absolute -bottom-1 -left-1 text-emerald-500 text-[8px] font-bold">✦</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-7">
              <div className="w-9 h-9 rounded-xl bg-[var(--tint)] flex items-center justify-center mb-3">
                <Wand2 className="w-4.5 h-4.5 text-[var(--brand)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Minimalist templates
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Clean online store templates designed to showcase your products beautifully.
              </p>
            </div>
          </div>

          {/* ── CARD 4: Save time ── */}
          <div onPointerMove={handlePointerMove} className={cardBase}>
            <div className="h-[240px] bg-slate-50 border-b border-[var(--line)] flex items-center justify-center px-6">
              <div className="w-full max-w-[240px] flex flex-col items-center">
                {[
                  { n: 1, label: "Tell AI what you sell" },
                  { n: 2, label: "Add your products" },
                  { n: 3, label: "Add payments & shipping" },
                ].map((step, i) => (
                  <React.Fragment key={step.n}>
                    <div className="w-full bg-white border border-[var(--line)] rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-sm">
                      <span className="w-5 h-5 rounded-full text-[11px] font-bold text-white flex items-center justify-center shrink-0"
                        style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>
                        {step.n}
                      </span>
                      <span className="text-xs font-medium text-slate-700">{step.label}</span>
                    </div>
                    {i < 2 && <div className="w-px h-3 bg-slate-200" />}
                  </React.Fragment>
                ))}
                <div className="w-px h-3 border-l-2 border-dotted border-emerald-400" />
                <div className="w-full bg-emerald-50 border border-emerald-400/80 rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-bold text-emerald-800">Your store is live!</span>
                </div>
              </div>
            </div>
            <div className="p-7">
              <div className="w-9 h-9 rounded-xl bg-[var(--tint)] flex items-center justify-center mb-3">
                <Zap className="w-4.5 h-4.5 text-[var(--brand)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Save time
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Skip lengthy setup processes of traditional e-commerce platforms.
              </p>
            </div>
          </div>

          {/* ── CARD 5: User-friendly ── */}
          <div onPointerMove={handlePointerMove} className={cardBase}>
            <div className="h-[240px] bg-slate-50 border-b border-[var(--line)] relative flex items-center justify-center px-4 overflow-hidden">
              {/* Product card */}
              <div className="w-44 bg-white rounded-2xl border border-[var(--line)] shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-purple-900/10">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src="/sneaker.jpg" alt="Classic R Sneaker" fill className="object-cover" sizes="176px" priority />
                  <div className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>New</div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold text-slate-800">Classic R</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs font-bold text-emerald-600">$99.00</p>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating spreadsheet overlay */}
              <div className="absolute top-4 left-5 bg-white rounded-xl border border-slate-200 shadow-2xl p-2.5 z-10">
                <div className="grid grid-cols-2 text-[9px] text-slate-400 font-semibold mb-1 px-1">
                  <span>Name</span>
                  <span className="text-right">Price</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-400">1</span>
                  <div className="px-2 py-0.5 bg-blue-50 border-2 border-blue-500 rounded text-[11px] font-semibold text-slate-800">Classic R</div>
                  <span className="text-[11px] text-slate-500 ml-1">99.00</span>
                </div>
              </div>
            </div>
            <div className="p-7">
              <div className="w-9 h-9 rounded-xl bg-[var(--tint)] flex items-center justify-center mb-3">
                <ShieldCheck className="w-4.5 h-4.5 text-[var(--brand)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                User-friendly
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Manage your store with Google Sheets — zero technical skills required.
              </p>
            </div>
          </div>

          {/* ── CARD 6: Zero-commission ── */}
          <div onPointerMove={handlePointerMove} className={cardBase}>
            <div className="h-[240px] bg-slate-50 border-b border-[var(--line)] flex flex-col items-center justify-center px-6 gap-4">
              {/* 0% pill */}
              <div className="px-5 py-2 rounded-full border-2 border-emerald-400 bg-emerald-50 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-extrabold text-emerald-700">0% commission</span>
              </div>
              {/* Order notifications */}
              <div className="w-full max-w-[240px] space-y-2.5">
                {[
                  { initials: "SM", color: "#6366f1", name: "Sarah M.", order: "#1042", amount: "+$129" },
                  { initials: "JK", color: "#f59e0b", name: "James K.", order: "#1043", amount: "+$85" },
                  { initials: "AP", color: "#10b981", name: "Amy P.", order: "#1044", amount: "+$212" },
                ].map((o) => (
                  <div key={o.order} className="bg-white border border-[var(--line)] rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-sm">
                    <div className="w-7 h-7 rounded-full text-white text-[9px] font-bold flex items-center justify-center shrink-0"
                      style={{ backgroundColor: o.color }}>
                      {o.initials}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{o.order}</span>
                    <span className="text-xs font-semibold text-slate-700 flex-1 truncate">{o.name}</span>
                    <span className="text-xs font-extrabold text-emerald-600">{o.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-7">
              <div className="w-9 h-9 rounded-xl bg-[var(--tint)] flex items-center justify-center mb-3">
                <Check className="w-4.5 h-4.5 text-[var(--brand)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--brand)] transition-colors">
                Zero-commission
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                We don&apos;t take a cut from your total orders. Ever.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
