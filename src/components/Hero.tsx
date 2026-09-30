"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Sparkles, ArrowRight, PawPrint, Bone, House, Fish, Star, TrendingUp } from "lucide-react";

const STATS = [
  { value: "12K+", label: "Happy pets" },
  { value: "4.9★", label: "Avg. rating" },
  { value: "Free", label: "Ship over $50" },
];

export function Hero() {
  const [cartCount, setCartCount] = useState<number>(0);
  const [recentlyAdded, setRecentlyAdded] = useState<string | null>(null);

  const handleAddToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    setRecentlyAdded(productName);
    setTimeout(() => setRecentlyAdded(null), 1800);
  };

  return (
    <section
      id="top"
      className="relative pt-16 pb-0 md:pt-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f5efff 0%, #faf8ff 40%, #ede9fe 100%)",
      }}
    >
      {/* Background ambient orbs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(91,33,182,0.15) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-40 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[var(--brand)] border border-[var(--brand)]/30 shadow-sm"
            style={{ background: "rgba(91,33,182,0.06)", backdropFilter: "blur(8px)" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thoughtful essentials for every kind of companion</span>
          </div>
        </div>

        {/* Hero title */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--ink)] leading-[1.04]">
            The easiest{" "}
            <span className="brand-gradient-text">online store</span>
            <br />builder
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Discover everyday pet accessories made for comfort, curious noses, and all the little adventures together.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="#collections"
              className="px-7 py-4 rounded-full text-base font-semibold border border-[var(--line)] bg-white/80 text-[var(--ink)] hover:border-[var(--brand)] hover:bg-white hover:shadow-lg transition-all active:scale-95"
            >
              Preview a store
            </Link>
            <Link
              href="/create-store"
              className="magnetic-btn px-8 py-4 rounded-full text-base font-semibold text-white inline-flex items-center gap-2.5 shadow-2xl"
              style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)", boxShadow: "0 20px 40px -12px rgba(91,33,182,0.45)" }}
            >
              <span>Create your store</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Social proof stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-[var(--ink)]">{stat.value}</span>
                <span className="text-xs text-[var(--muted)] font-medium">{stat.label}</span>
              </div>
            ))}
            {/* Reviews row */}
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-[var(--muted)]">2,400+ reviews</span>
            </div>
          </div>
        </div>

        {/* ── Full-width interactive store mockup ── */}
        <div className="relative mt-16 max-w-4xl mx-auto" id="demo">
          {/* Floating Badges */}
          <div
            className="hidden sm:flex absolute -top-5 right-4 z-20 items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-medium shadow-xl rounded-2xl animate-float"
            style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(91,33,182,0.15)" }}
            aria-hidden="true"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              <strong className="text-[var(--brand)] font-semibold">Just in</strong>{" "}
              Trail-ready harness · $32
            </span>
          </div>

          <div
            className="hidden sm:flex absolute -bottom-4 left-4 z-20 items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-medium shadow-xl rounded-2xl animate-float-delayed"
            style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(91,33,182,0.15)" }}
            aria-hidden="true"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</div>
            <span>
              <strong className="text-[var(--brand)] font-semibold">Made for</strong> daily adventures
            </span>
          </div>

          {/* ── Live Store Card ── */}
          <div
            className="relative text-left rounded-[28px] overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(91,33,182,0.15)", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)" }}
          >
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line)] bg-white/60">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex-1 mx-3 bg-[var(--tint)] border border-[var(--line)] rounded-lg py-1.5 px-3 flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="font-medium">pawwhisker.store.link</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--muted)]">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart ({cartCount})</span>
              </div>
            </div>

            {/* Store Hero Banner with actual photo */}
            <div className="relative h-40 sm:h-52 overflow-hidden">
              <Image
                src="/dog_adventure.jpg"
                alt="Happy dog on adventure"
                fill
                unoptimized
                loading="eager"
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover object-center"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand)]/80 via-[var(--brand)]/50 to-transparent" />
              <div className="absolute inset-0 flex items-center px-6 sm:px-8">
                <div className="text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-200 mb-1">New arrivals</p>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
                    Everyday adventures.
                    <br />
                    <span className="text-white/80 text-lg sm:text-xl font-normal">Free shipping over $50.</span>
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3" /> Shop bestsellers
                  </div>
                </div>
                <div className="ml-auto hidden sm:block">
                  <PawPrint className="w-20 h-20 text-white/20 animate-float" strokeWidth={1.2} />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Trail harness", price: "$32", icon: <PawPrint className="w-full h-full text-[var(--brand)]" strokeWidth={1.5} />, badge: "New" },
                { name: "Soft chew toy", price: "$16", icon: <Bone className="w-full h-full text-[var(--brand)]" strokeWidth={1.5} />, badge: null },
                { name: "Cozy pet bed", price: "$58", icon: <House className="w-full h-full text-[var(--brand)]" strokeWidth={1.5} />, badge: "Popular" },
                { name: "Slow-feeder bowl", price: "$24", icon: <Fish className="w-full h-full text-[var(--brand)]" strokeWidth={1.5} />, badge: null },
              ].map((item) => (
                <div
                  key={item.name}
                  className="relative bg-white border border-[var(--line)] rounded-2xl p-3 text-xs group hover:border-[var(--brand)]/50 hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  {item.badge && (
                    <span className="absolute -top-2 right-2 z-10 text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>
                      {item.badge}
                    </span>
                  )}
                  <div className="h-16 sm:h-20 rounded-xl bg-[var(--tint)] flex items-center justify-center p-2 mb-2.5 group-hover:scale-105 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div className="flex items-center justify-between">
                    <b className="font-semibold text-[var(--ink)] truncate text-[11px]">{item.name}</b>
                    <span className="text-[var(--brand)] font-bold text-[11px]">{item.price}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item.name)}
                    className="mt-2 w-full py-1.5 text-[10px] font-bold rounded-lg transition-all cursor-pointer"
                    style={
                      recentlyAdded === item.name
                        ? { background: "linear-gradient(135deg, #059669, #10b981)", color: "white" }
                        : { background: "var(--tint)", color: "var(--brand)" }
                    }
                  >
                    {recentlyAdded === item.name ? "Added ✓" : "+ Add to bag"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }} />
        </div>
      </div>
    </section>
  );
}
