"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Tag,
  ShoppingCart,
  UserCheck,
  Globe,
  BadgePercent,
  PackageSearch,
  TrendingUp,
} from "lucide-react";

const FEATURE_PILLS = [
  { icon: PackageSearch, label: "Searchable catalogue" },
  { icon: BadgePercent, label: "B2B tiered pricing" },
  { icon: UserCheck, label: "Approved buyer access" },
  { icon: Globe, label: "Your brand & domain" },
  { icon: Tag, label: "Real-time inventory" },
  { icon: TrendingUp, label: "Self-serve ordering" },
];

const DEMO_PRODUCTS = [
  { name: "Trail Harness Pro", sku: "TH-201", price: "$32.00", b2bPrice: "$24.00", stock: 48, badge: "Top seller" },
  { name: "Soft Chew Toy XL", sku: "SC-087", price: "$16.00", b2bPrice: "$11.50", stock: 112, badge: null },
  { name: "Cozy Pet Bed", sku: "PB-340", price: "$58.00", b2bPrice: "$44.00", stock: 22, badge: "Low stock" },
  { name: "Feeder Bowl Set", sku: "FB-019", price: "$24.00", b2bPrice: "$18.00", stock: 75, badge: null },
];

export function ProductCatalogue() {
  return (
    <section
      id="catalogue"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(160deg, var(--bg) 0%, var(--alt) 50%, var(--bg) 100%)",
      }}
    >
      <div id="about" className="absolute -top-24 pointer-events-none" />
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full opacity-25 blur-[100px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, var(--brand2), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full opacity-20 blur-[90px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* ── Section header ── */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--tint)] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--brand)] sm:text-sm">
            Product Catalogue
          </span>
          <h2 className="text-3xl font-bold leading-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
            Turn Your Product Catalogue{" "}
            <span className="brand-gradient-text">Into Your Online Store</span>
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
            Showcase your products, offer B2B pricing and let distributors and retailers place orders online — all under your own brand and domain.
          </p>
        </div>

        {/* ── Feature pills ── */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
          {FEATURE_PILLS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--ink)] shadow-sm transition-all hover:border-[var(--brand)]/50 hover:bg-[var(--tint)] hover:text-[var(--brand)]"
            >
              <Icon className="h-3.5 w-3.5 text-[var(--brand)]" />
              {label}
            </span>
          ))}
        </div>

        {/* ── Centred catalogue UI ── */}
        <div className="relative mx-auto w-full max-w-[680px]">
          {/* Glow halo behind card */}
          <div
            className="absolute inset-4 rounded-3xl blur-3xl"
            aria-hidden="true"
            style={{ background: "color-mix(in srgb, var(--brand) 14%, transparent)" }}
          />

          <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_40px_100px_-24px_var(--glow)]">

            {/* Browser chrome */}
            <div className="flex h-11 items-center gap-2 border-b border-[var(--line)] bg-[var(--surface)] px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="mx-2 flex flex-1 items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--bg)] px-3 py-1">
                <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="truncate text-[11px] font-semibold text-[var(--brand)]">
                  abcstore.store.link/catalogue
                </span>
              </div>
              <span className="ml-auto flex h-6 items-center gap-1.5 rounded-full bg-[var(--tint)] px-2.5 text-[9px] font-bold text-[var(--brand)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Live
              </span>
            </div>

            {/* Store header */}
            <div
              className="flex items-center gap-3 px-5 py-3.5"
              style={{ background: "linear-gradient(90deg, var(--brand) 0%, var(--brand2) 100%)" }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-sm font-extrabold text-white backdrop-blur-sm">
                A
              </span>
              <div>
                <p className="text-xs font-extrabold text-white">ABC Store</p>
                <p className="text-[9px] text-white/70">Wholesale &amp; Distribution Catalogue</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[9px] font-semibold text-white backdrop-blur-sm">
                <UserCheck className="h-3 w-3" />
                Approved buyer
              </div>
            </div>

            {/* Filter bar */}
            <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--bg)] px-4 py-2.5">
              {["All", "Harnesses", "Toys", "Beds", "Bowls"].map((cat, i) => (
                <span
                  key={cat}
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${i === 0
                      ? "bg-[var(--brand)] text-white"
                      : "bg-[var(--tint)] text-[var(--brand)]"
                    }`}
                >
                  {cat}
                </span>
              ))}
              <span className="ml-auto text-[9px] font-medium text-[var(--muted)]">4 products</span>
            </div>

            {/* Product rows */}
            <div className="divide-y divide-[var(--line)]">
              {DEMO_PRODUCTS.map((p, idx) => (
                <div
                  key={p.sku}
                  className={`flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[var(--tint)]/40 ${idx === 0 ? "bg-[var(--tint)]/30" : ""
                    }`}
                >
                  {/* Colour swatch thumbnail */}
                  <div
                    className="h-10 w-10 shrink-0 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--brand) ${30 + idx * 10}%, white), color-mix(in srgb, var(--brand2) ${20 + idx * 8}%, white))`,
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-xs font-bold text-[var(--ink)]">{p.name}</span>
                      {p.badge && (
                        <span
                          className={`shrink-0 rounded-full px-1.5 py-px text-[8px] font-bold ${p.badge === "Low stock"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-[var(--tint)] text-[var(--brand)]"
                            }`}
                        >
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[9px] text-[var(--muted)]">SKU {p.sku} · {p.stock} in stock</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-[10px] text-[var(--muted)] line-through">{p.price}</p>
                    <p className="text-sm font-extrabold text-[var(--brand)]">{p.b2bPrice}</p>
                    <p className="text-[8px] font-semibold text-emerald-600">Your price</p>
                  </div>
                  <button
                    type="button"
                    className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)] text-white shadow-sm transition hover:opacity-80"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer bar */}
            <div className="flex items-center justify-between border-t border-[var(--line)] bg-[var(--bg)] px-5 py-3">
              <span className="text-[9px] text-[var(--muted)]">Min. order $500 · Free shipping over $1,000</span>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg bg-[var(--brand)] px-3.5 py-1.5 text-[10px] font-bold text-white shadow-sm transition hover:opacity-90"
              >
                <ShoppingCart className="h-3 w-3" />
                Place order
              </button>
            </div>
          </div>

          {/* Floating B2B badge — right */}
          <div className="animate-float absolute -right-5 top-10 z-10 hidden items-center gap-2.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 shadow-xl sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--tint)] text-[var(--brand)]">
              <BadgePercent className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[8px] text-[var(--muted)]">B2B pricing active</span>
              <strong className="text-sm text-[var(--ink)]">25% trade discount</strong>
            </span>
          </div>

          {/* Floating order badge — left */}
          <div className="animate-float-delayed absolute -left-5 bottom-14 z-10 hidden items-center gap-2.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 shadow-xl sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <ShoppingCart className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[8px] text-[var(--muted)]">New order placed</span>
              <strong className="text-sm text-[var(--ink)]">$1,240.00</strong>
              <span className="ml-2 text-[8px] text-emerald-600">Just now</span>
            </span>
          </div>
        </div>

        {/* ── CTA row ── */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/create-store"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--brand)]/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Launch your catalogue store
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#features"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-7 py-3 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/50 hover:bg-[var(--tint)]"
          >
            See all features
          </Link>
        </div>

      </div>
    </section>
  );
}
