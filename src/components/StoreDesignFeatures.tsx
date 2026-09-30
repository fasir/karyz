"use client";

import React from "react";
import Image from "next/image";
import { Image as ImageIcon, BookOpen, Sliders, Layers, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const CARDS = [
  {
    icon: <ImageIcon className="w-5 h-5" />,
    title: "Comfy by design",
    desc: "Soft edges, easy fits, and gentle materials help keep daily wear comfortable for your pet.",
    img: "/cat_cozy_bed.jpg",
    imgAlt: "Cat in cozy bed",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Play with purpose",
    desc: "Enrichment toys turn curious paws and noses into happy, busy playtime.",
    img: "/pet_toys.jpg",
    imgAlt: "Pet toys",
  },
  {
    icon: <Sliders className="w-5 h-5" />,
    title: "Easy-care materials",
    desc: "Everyday mess happens. Choose washable fabrics and durable finishes made for repeat use.",
    img: null,
    imgAlt: null,
  },
];

export function StoreDesignFeatures() {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--bg) 0%, #f0ebff 100%)" }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at 75% 30%, rgba(168,85,247,0.08) 0%, transparent 45%)",
        }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Text content */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--brand)] uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-[var(--tint)]">
              A little more love
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight mb-6">
              Thoughtful picks for{" "}
              <span className="brand-gradient-text">everyday pets</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8">
              Comfort-first details, playful moments, and practical essentials for the companions who make home feel like home.
            </p>
            <Link
              href="#collections"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg transition-all active:scale-95"
              style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)", boxShadow: "0 16px 32px -8px rgba(91,33,182,0.4)" }}
            >
              <span>Explore products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Hero image */}
          <div className="relative">
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-2xl shadow-purple-900/15">
              <Image
                src="/dog_adventure.jpg"
                alt="Dog on adventure with harness"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 550px"
                unoptimized
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(91,33,182,0.4) 0%, transparent 60%)" }} />
              {/* Badge overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl">
                  <div className="w-10 h-10 rounded-xl overflow-hidden relative shrink-0">
                    <Image src="/dog_adventure.jpg" alt="" fill className="object-cover" sizes="40px" unoptimized />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--ink)]">Trail Ready Harness</p>
                    <p className="text-xs text-[var(--muted)]">Perfect for outdoor adventures</p>
                  </div>
                  <span className="ml-auto text-sm font-extrabold text-[var(--brand)]">$32</span>
                </div>
              </div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full animate-float"
              style={{ background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)" }} />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              onPointerMove={handlePointerMove}
              className="spotlight-card bg-white border border-[var(--line)] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {card.img && (
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.imgAlt!}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(91,33,182,0.35) 0%, transparent 60%)" }} />
                </div>
              )}
              <div className={`p-7 ${!card.img ? "pt-10" : ""}`}>
                {!card.img && (
                  <div className="relative h-28 rounded-2xl overflow-hidden mb-6"
                    style={{ background: "linear-gradient(135deg, var(--tint), #e9d5ff)" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sliders className="w-12 h-12 text-[var(--brand)]/30" />
                    </div>
                    <div className="absolute bottom-3 left-4">
                      <div className="w-20 h-2 bg-[var(--brand)]/20 rounded-full mb-1.5" />
                      <div className="w-14 h-1.5 bg-[var(--brand)]/15 rounded-full" />
                    </div>
                  </div>
                )}
                <div className="w-9 h-9 rounded-xl bg-[var(--tint)] text-[var(--brand)] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide spanning cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Wide card */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card md:col-span-2 bg-white border border-[var(--line)] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/pet_toys.jpg"
                alt="Pet toys collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 66vw"
                unoptimized
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(91,33,182,0.5) 0%, transparent 60%)" }} />
            </div>
            <div className="p-8">
              <div className="w-9 h-9 rounded-xl bg-[var(--tint)] text-[var(--brand)] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                Made for the moments you share
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-xl">
                From neighborhood strolls to weekend trips and long afternoon naps, find useful little upgrades for the routines you already love.
              </p>
            </div>
          </div>

          {/* Narrow card */}
          <div
            onPointerMove={handlePointerMove}
            className="spotlight-card bg-white border border-[var(--line)] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Visual image */}
            <div className="relative h-36 rounded-2xl overflow-hidden mb-5">
              <Image
                src="/cat_cozy_bed.jpg"
                alt="Cat in cozy bed"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="300px"
                unoptimized
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(91,33,182,0.4) 0%, transparent 60%)" }} />
            </div>
            <div>
              <div className="w-9 h-9 rounded-xl bg-[var(--tint)] text-[var(--brand)] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
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
