"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Star, ChevronLeft, ChevronRight, Quote, Building2 } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Verma",
    role: "Founder & CEO",
    company: "Apex Wholesale Dist.",
    text: "Karyz transformed our wholesale operations. Our distributors now order directly online with tiered pricing, cutting order processing time by 75%.",
    rating: 5,
    initials: "RV",
  },
  {
    name: "Sarah Lin",
    role: "Director of Operations",
    company: "Horizon Retail Network",
    text: "Setting up our branded online store took less than a day. Our retail partners love the self-serve catalogue portal and real-time inventory updates.",
    rating: 5,
    initials: "SL",
  },
  {
    name: "Marcus Thorne",
    role: "VP of Supply Chain",
    company: "Vertex Distribution",
    text: "The multi-tier distribution feature is unbeatable. Managing suppliers, distributors, and sub-retailers from one dashboard saved us hundreds of hours.",
    rating: 5,
    initials: "MT",
  },
  {
    name: "Elena Rostova",
    role: "Chief Operating Officer",
    company: "Nova Trade Co.",
    text: "Real-time inventory and automated order routing eliminated stockouts completely across our regional warehouses. The analytics give us complete visibility.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Miller",
    role: "Managing Director",
    company: "Miller Supply Group",
    text: "Our B2B revenue grew 3x within 6 months of launching our branded store with Karyz. It gave us enterprise-grade capabilities without the enterprise price tag.",
    rating: 5,
    initials: "DM",
  },
  {
    name: "Anita Patel",
    role: "Head of E-Commerce",
    company: "PrimeSource Global",
    text: "The white-label custom domain feature gave our brand immense credibility. Ordering is so intuitive that our retailers adopted it from day one.",
    rating: 5,
    initials: "AP",
  },
];

const ITEMS_PER_SLIDE = 3;
const TOTAL_SLIDES = Math.ceil(TESTIMONIALS.length / ITEMS_PER_SLIDE);

export function CtaSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  const currentItems = TESTIMONIALS.slice(
    currentSlide * ITEMS_PER_SLIDE,
    currentSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );

  return (
    <section className="py-16 md:py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden text-center text-white shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #3a1573 0%, #6b21a8 40%, #9333ea 80%, #a855f7 100%)",
          }}
        >
          {/* Noise texture layer */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
            aria-hidden="true"
          />

          {/* Glowing orbs */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 px-6 py-16 sm:py-20">
            {/* Top badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span className="text-xs font-bold text-purple-100 uppercase tracking-wider">
                Trusted by Growing B2B Businesses
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
              Ready to launch your own{" "}
              <span className="text-[#f0d4ff] italic">B2B commerce platform?</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-purple-100/90 max-w-2xl mx-auto">
              Join hundreds of suppliers, distributors, and brands powering their ordering, inventory, and distribution network with Karyz.
            </p>

            {/* Testimonials Carousel (3 items in a row) */}
            <div
              className="mt-12 max-w-6xl mx-auto relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Track */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
                {currentItems.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col justify-between rounded-2xl p-6 text-left border border-white/20 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 shadow-lg"
                    style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
                  >
                    <div>
                      {/* Rating & Quote Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                          ))}
                        </div>
                        <Quote className="w-5 h-5 text-white/30" />
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm text-purple-50 leading-relaxed font-normal mb-6">
                        &quot;{t.text}&quot;
                      </p>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-sm font-bold text-white shrink-0">
                        {t.initials}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{t.name}</h4>
                        <p className="text-xs text-purple-200/80 truncate">
                          {t.role} · <span className="text-purple-100">{t.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white/15 border border-white/20 hover:bg-white/25 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                  {[...Array(TOTAL_SLIDES)].map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx ? "w-8 bg-white" : "w-2.5 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white/15 border border-white/20 hover:bg-white/25 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* CTA action bar */}
            <div className="mt-12 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
                <span className="flex-1 text-sm text-purple-100/90 px-3 py-2 text-center sm:text-left font-medium">
                  Ready to build your branded B2B platform?
                </span>
                <Link
                  href="/create-store"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg hover:shadow-xl hover:brightness-105"
                  style={{ background: "#ffffff", color: "#3a1573" }}
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <p className="mt-5 text-xs text-purple-200/70 font-medium">
              White-label ready · Custom domain support · Set up in minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
