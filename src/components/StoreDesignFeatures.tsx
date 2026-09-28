"use client";

import React from "react";
import { Image as ImageIcon, BookOpen, Sliders, Layers, Sparkles } from "lucide-react";

export function StoreDesignFeatures() {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--alt)] border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block mb-2">
            A little more love
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            Thoughtful picks for <span className="brand-gradient-text">everyday pets</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
            Comfort-first details, playful moments, and practical essentials for the companions who make home feel like home.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Brand Logo */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--brand)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--tint)] text-[var(--brand)] flex items-center justify-center mb-4">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                Comfy by design
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Soft edges, easy fits, and gentle materials help keep daily wear comfortable for your pet.
              </p>
            </div>
          </div>

          {/* Card 2: Tell your story */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--brand)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--tint)] text-[var(--brand)] flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                Play with purpose
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Enrichment toys turn curious paws and noses into happy, busy playtime.
              </p>
            </div>
          </div>

          {/* Card 3: Custom checkout fields */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--brand)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--tint)] text-[var(--brand)] flex items-center justify-center mb-4">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                Easy-care materials
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Everyday mess happens. Choose washable fabrics and durable finishes made for repeat use.
              </p>
            </div>
          </div>

          {/* Card 4: Dedicated page for every product (Wide, span 2 cols on md) */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card md:col-span-2 bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--brand)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--tint)] text-[var(--brand)] flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                Made for the moments you share
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-xl">
                From neighborhood strolls to weekend trips and long afternoon naps, find useful little upgrades for the routines you already love.
              </p>
            </div>
          </div>

          {/* Card 5: White-label ready */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--brand)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--tint)] text-[var(--brand)] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                A favorite for every friend
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Shop thoughtful accessories for dogs, cats, and all the unique characters in between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
