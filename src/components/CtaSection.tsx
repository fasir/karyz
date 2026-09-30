"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Star, PawPrint } from "lucide-react";

const TESTIMONIALS = [
  { name: "Sarah M.", text: "My dog absolutely loves the harness!", avatar: "/dog_adventure.jpg" },
  { name: "James K.", text: "Best pet accessories store, period.", avatar: "/cat_cozy_bed.jpg" },
];

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden text-center text-white shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #3a1573 0%, #6b21a8 40%, #9333ea 80%, #a855f7 100%)",
          }}
        >
          {/* Noise texture layer */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }} aria-hidden="true" />

          {/* Glowing orbs */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }} aria-hidden="true" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)" }} aria-hidden="true" />

          {/* Animated paw watermark */}
          <div className="absolute bottom-4 right-8 opacity-10 animate-float" aria-hidden="true">
            <PawPrint className="w-32 h-32 text-white" strokeWidth={1} />
          </div>

          <div className="relative z-10 px-6 py-16 sm:py-20">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span className="text-xs font-bold text-purple-100">For the love of pets</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-2xl mx-auto">
              A little something for your{" "}
              <span className="text-[#f0d4ff] italic">best friend.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-purple-100/90 max-w-xl mx-auto">
              Find the useful, comfy, and playful things that make their everyday even better.
            </p>

            {/* Mini testimonials */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border-2 border-white/30">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="28px" unoptimized />
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                    ))}
                  </div>
                  <span className="text-xs text-purple-100 font-medium">&quot;{t.text}&quot;</span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-10 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
                <span className="flex-1 text-sm text-purple-100/80 px-3 py-2 text-center sm:text-left">
                  Walks, naps, play, repeat.
                </span>
                <Link
                  href="#products"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
                  style={{ background: "rgba(255,255,255,0.95)", color: "#3a1573" }}
                >
                  <span>Shop favorites</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <p className="mt-5 text-xs text-purple-200/70 font-medium">
              Thoughtful accessories · Easy returns · Free shipping over $50
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
