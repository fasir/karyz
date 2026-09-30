import React from "react";
import Image from "next/image";
import { Search, Heart, ShoppingBag, Star, Zap, Shield, Smartphone } from "lucide-react";

const FEATURES = [
  { icon: <Zap className="w-4 h-4" />, text: "Blazing fast load" },
  { icon: <Shield className="w-4 h-4" />, text: "SSL secured" },
  { icon: <Smartphone className="w-4 h-4" />, text: "Mobile-first" },
];

export function MobileShowcase() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--alt) 100%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(91,33,182,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.06) 0%, transparent 40%)"
        }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--brand)] uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full bg-[var(--tint)]">
            Mobile-First Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            100% mobile ready{" "}
            <span className="brand-gradient-text">online stores</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
            Most shoppers browse on their phone, so every Karyz store is designed
            for small screens first.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {FEATURES.map((f) => (
            <div key={f.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--line)] text-sm font-semibold text-[var(--ink)] shadow-sm">
              <span className="text-[var(--brand)]">{f.icon}</span>
              {f.text}
            </div>
          ))}
        </div>

        {/* 3 Interactive Phone Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto items-center">
          {/* ── Phone 1: Beautiful Home Page ── */}
          <div className="flex flex-col items-center group">
            <div
              className="relative w-[190px] sm:w-[210px] aspect-[9/18.5] rounded-[38px] p-3 flex flex-col gap-2.5 overflow-hidden group-hover:-translate-y-3 group-hover:shadow-purple-700/25 transition-all duration-500"
              style={{
                background: "var(--surface)",
                border: "7px solid #150e2a",
                boxShadow: "0 30px 60px -15px rgba(91,33,182,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Notch */}
              <div className="w-14 h-1.5 bg-[var(--ink)]/20 rounded-full mx-auto" />
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-3 bg-[var(--brand)] rounded-full" />
                <div className="w-5 h-5 rounded-full bg-[var(--tint)] flex items-center justify-center">
                  <Heart className="w-2.5 h-2.5 text-[var(--brand)]" />
                </div>
              </div>
              {/* Hero Banner with image */}
              <div className="h-20 rounded-xl overflow-hidden relative">
                <Image src="/dog_adventure.jpg" alt="Store hero" fill className="object-cover" sizes="200px" unoptimized />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(91,33,182,0.7), rgba(91,33,182,0.3))" }} />
                <div className="absolute bottom-2 left-2">
                  <div className="w-16 h-2 bg-white/80 rounded-sm mb-1" />
                  <div className="w-10 h-1.5 bg-white/60 rounded-sm" />
                </div>
              </div>
              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-14 rounded-lg bg-[var(--tint)] p-1.5 flex flex-col justify-end">
                    <div className={`h-1.5 bg-[var(--line)] rounded-sm ${i % 2 === 0 ? "w-10" : "w-8"}`} />
                  </div>
                ))}
              </div>
            </div>
            <span className="mt-5 font-bold text-sm sm:text-base text-[var(--ink)]">Beautiful home page</span>
            <span className="text-xs text-[var(--muted)] mt-0.5">Fully customizable layouts</span>
          </div>

          {/* ── Phone 2: Dedicated Product Pages (elevated center) ── */}
          <div className="flex flex-col items-center group md:-translate-y-6">
            {/* Glow ring */}
            <div className="relative">
              <div className="absolute inset-[-8px] rounded-[46px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(91,33,182,0.3), rgba(168,85,247,0.2))", filter: "blur(16px)" }} />
              <div
                className="relative w-[190px] sm:w-[210px] aspect-[9/18.5] rounded-[38px] p-3 flex flex-col gap-2.5 overflow-hidden group-hover:-translate-y-3 group-hover:shadow-purple-700/35 transition-all duration-500"
                style={{
                  background: "var(--surface)",
                  border: "7px solid #150e2a",
                  boxShadow: "0 40px 80px -20px rgba(91,33,182,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="w-14 h-1.5 bg-[var(--ink)]/20 rounded-full mx-auto" />
                {/* Nav */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[var(--brand)]">← Back</span>
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                </div>
                {/* Product image with real photo */}
                <div className="h-28 rounded-xl overflow-hidden relative">
                  <Image src="/pet_harness.jpg" alt="Product" fill className="object-cover" sizes="200px" unoptimized />
                  <span className="absolute bottom-2 right-2 text-[9px] bg-white/90 px-2 py-0.5 rounded-full font-bold text-[var(--brand)]">$48</span>
                </div>
                {/* Rating */}
                <div className="space-y-1.5">
                  <div className="w-24 h-2.5 bg-[var(--ink)] rounded-full" />
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                    ))}
                    <div className="w-8 h-1.5 bg-[var(--line)] rounded-full ml-1" />
                  </div>
                </div>
                <div className="h-8 rounded-lg bg-[var(--tint)]/60" />
                {/* Buy Button */}
                <div className="mt-auto h-9 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-md"
                  style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>
                  Buy with 1-Click
                </div>
              </div>
            </div>
            <span className="mt-5 font-bold text-sm sm:text-base text-[var(--ink)]">Dedicated product pages</span>
            <span className="text-xs text-[var(--muted)] mt-0.5">SEO-ready out of the box</span>
          </div>

          {/* ── Phone 3: Search ── */}
          <div className="flex flex-col items-center group">
            <div
              className="relative w-[190px] sm:w-[210px] aspect-[9/18.5] rounded-[38px] p-3 flex flex-col gap-2.5 overflow-hidden group-hover:-translate-y-3 group-hover:shadow-purple-700/25 transition-all duration-500"
              style={{
                background: "var(--surface)",
                border: "7px solid #150e2a",
                boxShadow: "0 30px 60px -15px rgba(91,33,182,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div className="w-14 h-1.5 bg-[var(--ink)]/20 rounded-full mx-auto" />
              {/* Search Bar */}
              <div className="h-7 rounded-full bg-[var(--tint)] border border-[var(--line)] flex items-center px-2.5 gap-1.5 text-[9px] text-[var(--muted)]">
                <Search className="w-3 h-3 text-[var(--muted)]" />
                <span>Search harnesses, toys...</span>
              </div>
              {/* Category Chips */}
              <div className="flex gap-1 overflow-x-hidden">
                <span className="text-[8px] px-2.5 py-1 rounded-full text-white font-bold"
                  style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>All</span>
                <span className="text-[8px] px-2.5 py-1 rounded-full bg-[var(--tint)] text-[var(--muted)]">Walks</span>
                <span className="text-[8px] px-2.5 py-1 rounded-full bg-[var(--tint)] text-[var(--muted)]">Toys</span>
              </div>
              {/* Results */}
              <div className="space-y-2">
                {[
                  { w: "w-14", img: "/pet_harness.jpg" },
                  { w: "w-16", img: "/pet_toys.jpg" },
                  { w: "w-12", img: "/cat_cozy_bed.jpg" },
                ].map((item, i) => (
                  <div key={i} className="h-11 rounded-xl bg-[var(--tint)] p-1.5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 relative">
                      <Image src={item.img} alt="Product" fill className="object-cover" sizes="32px" unoptimized />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className={`h-2 bg-[var(--ink)]/80 rounded-sm ${item.w}`} />
                      <div className="w-8 h-1.5 bg-[var(--line)] rounded-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <span className="mt-5 font-bold text-sm sm:text-base text-[var(--ink)]">Search made easy</span>
            <span className="text-xs text-[var(--muted)] mt-0.5">Instant product discovery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
