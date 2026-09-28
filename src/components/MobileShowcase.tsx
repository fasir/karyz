import React from "react";
import { Search, Heart, ShoppingBag, Star } from "lucide-react";

export function MobileShowcase() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block mb-2">
            Mobile-First Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            100% mobile ready <span className="brand-gradient-text">online stores</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
            Most shoppers browse on their phone, so every Karyz store is designed
            for small screens first.
          </p>
        </div>

        {/* 3 Interactive Phone Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto items-center">
          {/* Phone 1: Beautiful Home Page */}
          <div className="flex flex-col items-center group">
            <div className="w-[200px] sm:w-[220px] aspect-[9/18.5] bg-[var(--surface)] border-[7px] border-[var(--ink)] rounded-[36px] p-3 shadow-2xl shadow-purple-950/20 flex flex-col gap-2.5 overflow-hidden group-hover:-translate-y-2 group-hover:shadow-purple-900/30 transition-all duration-300">
              {/* Phone Speaker Notch */}
              <div className="w-12 h-1 bg-[var(--line)] rounded-full mx-auto" />

              {/* Wireframe header */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-3 bg-[var(--brand)] rounded-full" />
                <div className="w-4 h-4 rounded-full bg-[var(--tint)]" />
              </div>

              {/* Wireframe Hero Banner */}
              <div className="h-16 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] opacity-90 p-2 flex flex-col justify-end">
                <div className="w-16 h-2 bg-white/80 rounded-sm mb-1" />
                <div className="w-10 h-1.5 bg-white/60 rounded-sm" />
              </div>

              {/* Wireframe Product Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 rounded-lg bg-[var(--tint)] p-1.5 flex flex-col justify-end">
                  <div className="w-10 h-2 bg-[var(--line)] rounded-sm" />
                </div>
                <div className="h-16 rounded-lg bg-[var(--tint)] p-1.5 flex flex-col justify-end">
                  <div className="w-8 h-2 bg-[var(--line)] rounded-sm" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 rounded-lg bg-[var(--tint)] p-1.5 flex flex-col justify-end">
                  <div className="w-12 h-2 bg-[var(--line)] rounded-sm" />
                </div>
                <div className="h-16 rounded-lg bg-[var(--tint)] p-1.5 flex flex-col justify-end">
                  <div className="w-9 h-2 bg-[var(--line)] rounded-sm" />
                </div>
              </div>
            </div>
            <span className="mt-4 font-semibold text-sm sm:text-base text-[var(--ink)]">
              Beautiful home page
            </span>
          </div>

          {/* Phone 2: Dedicated Product Pages */}
          <div className="flex flex-col items-center group md:-translate-y-4">
            <div className="w-[200px] sm:w-[220px] aspect-[9/18.5] bg-[var(--surface)] border-[7px] border-[var(--ink)] rounded-[36px] p-3 shadow-2xl shadow-purple-950/20 flex flex-col gap-2.5 overflow-hidden group-hover:-translate-y-6 group-hover:shadow-purple-900/30 transition-all duration-300">
              <div className="w-12 h-1 bg-[var(--line)] rounded-full mx-auto" />

              {/* Navigation Bar */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[var(--brand)]">← Back</span>
                <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              </div>

              {/* Big Product Photo Frame */}
              <div className="h-24 rounded-xl bg-[var(--tint)] flex items-center justify-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-[var(--brand)]/15 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-[var(--brand)]" />
                </div>
                <span className="absolute bottom-1.5 right-1.5 text-[9px] bg-white dark:bg-black/60 px-1.5 py-0.5 rounded-full font-bold">
                  $48
                </span>
              </div>

              {/* Title & Reviews */}
              <div className="space-y-1">
                <div className="w-24 h-2.5 bg-[var(--ink)] rounded-full" />
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <Star className="w-2.5 h-2.5 fill-current" />
                  </div>
                  <div className="w-8 h-1.5 bg-[var(--line)] rounded-full" />
                </div>
              </div>

              {/* Description Placeholder */}
              <div className="h-8 rounded-lg bg-[var(--tint)]/60" />

              {/* Buy Button */}
              <div className="mt-auto h-8 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                Buy with 1-Click
              </div>
            </div>
            <span className="mt-4 font-semibold text-sm sm:text-base text-[var(--ink)]">
              Dedicated product pages
            </span>
          </div>

          {/* Phone 3: Search Made Easy */}
          <div className="flex flex-col items-center group">
            <div className="w-[200px] sm:w-[220px] aspect-[9/18.5] bg-[var(--surface)] border-[7px] border-[var(--ink)] rounded-[36px] p-3 shadow-2xl shadow-purple-950/20 flex flex-col gap-2.5 overflow-hidden group-hover:-translate-y-2 group-hover:shadow-purple-900/30 transition-all duration-300">
              <div className="w-12 h-1 bg-[var(--line)] rounded-full mx-auto" />

              {/* Search Bar pill */}
              <div className="h-6 rounded-full bg-[var(--tint)] border border-[var(--line)] flex items-center px-2 gap-1.5 text-[9px] text-[var(--muted)]">
                <Search className="w-2.5 h-2.5 text-[var(--muted)]" />
                <span>Search jackets, mugs...</span>
              </div>

              {/* Search Category Chips */}
              <div className="flex gap-1 overflow-x-hidden">
                <span className="text-[8px] px-2 py-0.5 rounded-full bg-[var(--brand)] text-white font-medium">All</span>
                <span className="text-[8px] px-2 py-0.5 rounded-full bg-[var(--tint)] text-[var(--muted)]">Shirts</span>
                <span className="text-[8px] px-2 py-0.5 rounded-full bg-[var(--tint)] text-[var(--muted)]">Home</span>
              </div>

              {/* Result Items */}
              <div className="space-y-1.5">
                <div className="h-10 rounded-lg bg-[var(--tint)] p-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[var(--surface)] shrink-0" />
                  <div className="space-y-1 flex-1">
                    <div className="w-14 h-2 bg-[var(--ink)]/80 rounded-sm" />
                    <div className="w-8 h-1.5 bg-[var(--line)] rounded-sm" />
                  </div>
                </div>
                <div className="h-10 rounded-lg bg-[var(--tint)] p-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[var(--surface)] shrink-0" />
                  <div className="space-y-1 flex-1">
                    <div className="w-16 h-2 bg-[var(--ink)]/80 rounded-sm" />
                    <div className="w-10 h-1.5 bg-[var(--line)] rounded-sm" />
                  </div>
                </div>
                <div className="h-10 rounded-lg bg-[var(--tint)] p-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[var(--surface)] shrink-0" />
                  <div className="space-y-1 flex-1">
                    <div className="w-12 h-2 bg-[var(--ink)]/80 rounded-sm" />
                    <div className="w-7 h-1.5 bg-[var(--line)] rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
            <span className="mt-4 font-semibold text-sm sm:text-base text-[var(--ink)]">
              Search made easy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
