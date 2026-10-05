"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Sparkles, ArrowRight, PawPrint, Bone, House, Fish } from "lucide-react";

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
      className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-[var(--alt)] via-[var(--bg)] to-[var(--bg)]"
    >
      {/* Background ambient light orbs and grid texture */}
      <div
        className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-fuchsia-500/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Release / Feature Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--tint)] border border-[var(--line)] text-xs sm:text-sm font-medium text-[var(--brand)] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Thoughtful essentials for every kind of companion</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--ink)] max-w-4xl mx-auto leading-[1.08]">
        The easiest <span className="brand-gradient-text">online store</span> builder
        </h1>

        {/* Hero Description */}
        <p className="mt-6 text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          Discover everyday pet accessories made for comfort, curious noses, and all the little adventures together.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap gap-3.5 justify-center items-center">
          <Link
            href="#collections"
            className="px-6 py-3.5 rounded-full text-base font-semibold border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--brand)] hover:shadow-md transition-all active:scale-95"
          >
          Preview a store
          </Link>
          <Link
            href="/create-store"
            className="px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] shadow-lg shadow-purple-900/20 hover:shadow-purple-700/30 hover:opacity-95 transition-all active:scale-95 inline-flex items-center gap-2"
          >
            <span>Create your own store</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Store Mockup Demo with Floating Badges */}
        <div className="relative mt-14 max-w-4xl mx-auto" id="demo">
          {/* Floating Badge 1 - Top Right */}
          <div
            className="hidden sm:flex absolute -top-5 right-6 z-20 items-center gap-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-medium shadow-xl shadow-purple-950/15 animate-float"
            aria-hidden="true"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              <strong className="text-[var(--brand)] font-semibold">Just in</strong>{" "}
              Trail-ready harness · $32
            </span>
          </div>

          {/* Floating Badge 2 - Bottom Left */}
          <div
            className="hidden sm:flex absolute -bottom-5 left-6 z-20 items-center gap-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-medium shadow-xl shadow-purple-950/15 animate-float-delayed"
            aria-hidden="true"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold text-xs">
              ✓
            </div>
            <span>
              <strong className="text-[var(--brand)] font-semibold">Made for</strong> daily adventures
            </span>
          </div>

          {/* Store Preview Container */}
          <div className="relative bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-4 sm:p-6 text-left shadow-2xl shadow-purple-900/10">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--muted)] pb-3 mb-3 border-b border-[var(--line)]">
              <span className="font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--brand)] inline-block" />
                A few favorites for your four-legged friend
              </span>
            </div>

            {/* The Live Store Mockup */}
            <div className="border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--bg)] shadow-inner">
              {/* Store Bar */}
              <div
                className="px-4 py-3 text-white flex items-center justify-between font-semibold text-sm transition-colors duration-300"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/80" />
                  <span>Paw &amp; Whisker</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full text-xs">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Cart ({cartCount})</span>
                </div>
              </div>

              {/* Store Hero Banner */}
              <div
                className="relative min-h-32 p-5 sm:p-7 text-white flex items-center justify-between overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1200&q=85"
                  alt="Happy dog enjoying an outdoor walk"
                  fill
                  unoptimized
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 opacity-70" style={{ backgroundColor: "var(--brand)" }} />
                <div className="relative z-10 font-display font-bold text-xl sm:text-2xl leading-tight">
                  Everyday adventures.
                  <br />
                  <span className="text-white/90 text-sm sm:text-base font-normal">
                    Free shipping over $50.
                  </span>
                </div>
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 shrink-0 animate-float">
                  <PawPrint className="w-full h-full text-white" strokeWidth={1.4} />
                </div>
              </div>

              {/* Store 4 Products Grid */}
              <div className="p-3 sm:p-4 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
                {[
                  {
                    name: "Trail harness",
                    price: "$32",
                    icon: <PawPrint className="w-full h-full text-[var(--brand)]" strokeWidth={1.5} />,
                  },
                  {
                    name: "Soft chew toy",
                    price: "$16",
                    icon: <Bone className="w-full h-full text-[var(--brand)]" strokeWidth={1.5} />,
                  },
                  {
                    name: "Cozy pet bed",
                    price: "$58",
                    icon: <House className="w-full h-full text-[var(--brand)]" strokeWidth={1.5} />,
                  },
                  {
                    name: "Slow-feeder bowl",
                    price: "$24",
                    icon: <Fish className="w-full h-full text-[var(--brand)]" strokeWidth={1.5} />,
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="bg-[var(--surface)] border border-[var(--line)] rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm group hover:border-[var(--brand)] hover:shadow-md transition-all"
                  >
                    <div className="h-16 sm:h-20 rounded-lg bg-[var(--tint)] flex items-center justify-center p-2 mb-2 group-hover:scale-105 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <b className="font-semibold text-[var(--ink)] block truncate">
                        {item.name}
                      </b>
                      <span className="text-[var(--muted)] font-medium">
                        {item.price}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item.name)}
                      className="mt-2 w-full py-1 text-[11px] font-semibold rounded-md border border-[var(--line)] hover:bg-[var(--tint)] hover:text-[var(--brand)] transition-colors cursor-pointer"
                    >
                      {recentlyAdded === item.name ? "Added! ✓" : "+ Add to bag"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
