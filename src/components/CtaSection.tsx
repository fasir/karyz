"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center text-white overflow-hidden shadow-2xl bg-gradient-to-br from-[#3a1573] via-[#7a2fb8] to-[#a03fd0]">
          {/* Subtle ambient light patterns */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.18),transparent_45%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold text-purple-100 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>For the love of pets</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              A little something for your <span className="text-[#f0d4ff] italic">best friend.</span>
            </h2>
            <p className="text-base sm:text-lg text-purple-100/90 max-w-xl mx-auto">
              Find the useful, comfy, and playful things that make their everyday even better.
            </p>

            {/* Input Form */}
            <div className="pt-4 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-full p-2 shadow-xl border border-white/20">
                <span className="w-full px-5 py-2.5 text-sm sm:text-base text-gray-500">
                  Walks, naps, play, repeat.
                </span>
                <Link
                  href="#products"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold text-sm bg-[#1c1230] hover:bg-[#2e1f4d] active:scale-95 transition-all shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Shop favorites</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-purple-200/80 font-medium">
              Thoughtful accessories · Easy returns · Here for every tail wag
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
