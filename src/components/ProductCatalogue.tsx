"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            Product Cataloguevvae
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
        {/* <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
          {FEATURE_PILLS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--ink)] shadow-sm transition-all hover:border-[var(--brand)]/50 hover:bg-[var(--tint)] hover:text-[var(--brand)]"
            >
              <Icon className="h-3.5 w-3.5 text-[var(--brand)]" />
              {label}
            </span>
          ))}
        </div> */}

        {/* ── Centred catalogue UI with store front website landing page ── */}
        <div className="relative mx-auto w-full max-w-5xl">
          {/* Glow halo behind card */}
          <div
            className="absolute inset-4 rounded-3xl blur-3xl opacity-60"
            aria-hidden="true"
            style={{ background: "color-mix(in srgb, var(--brand) 22%, transparent)" }}
          />

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_32px_90px_-20px_var(--glow)] transition-all duration-300 hover:shadow-2xl">
            {/* Storefront Website Landing Page Image */}
            <div className="relative aspect-[1024/571] w-full overflow-hidden bg-[var(--surface)]">
              <Image
                src="/store.jpg"
                alt="ABC Distribution Storefront Landing Page"
                width={1024}
                height={571}
                priority
                className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.01]"
                sizes="(max-width: 1280px) 100vw, 1100px"
              />
            </div>
          </div>



          {/* Floating order badge — left */}

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
