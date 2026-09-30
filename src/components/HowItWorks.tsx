"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  UserPlus,
  Package,
  CreditCard,
  Share2,
  TrendingUp,
  ArrowRight,
  Check,
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  img: string;
  imgAlt: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Create your account",
    desc: "Sign up, name your store, and upload your logo. Your custom store URL is ready to share immediately.",
    tags: ["Free trial", "No credit card needed"],
    icon: <UserPlus className="w-5 h-5" />,
    img: "/dog_adventure.jpg",
    imgAlt: "Getting started with your store",
  },
  {
    id: 2,
    title: "Add your products",
    desc: "Upload photos, set prices, and write descriptions, or import your full catalog in bulk via CSV. Each product automatically gets a dedicated SEO page.",
    tags: ["Bulk import", "SEO-ready pages"],
    icon: <Package className="w-5 h-5" />,
    img: "/pet_harness.jpg",
    imgAlt: "Adding products to your store",
  },
  {
    id: 3,
    title: "Add payments and shipping",
    desc: "Connect Stripe, PayPal, or Razorpay with one-click authorization. Set local pickup, flat rate, or free delivery thresholds.",
    tags: ["Stripe", "PayPal", "Razorpay"],
    icon: <CreditCard className="w-5 h-5" />,
    img: "/pet_toys.jpg",
    imgAlt: "Configure payments",
  },
  {
    id: 4,
    title: "Share your store",
    desc: "Add your storefront link to your Instagram bio, TikTok, WhatsApp business catalog, and email marketing signatures.",
    tags: ["Social links", "WhatsApp", "Email signature"],
    icon: <Share2 className="w-5 h-5" />,
    img: "/cat_cozy_bed.jpg",
    imgAlt: "Share your store",
  },
  {
    id: 5,
    title: "Start getting orders",
    desc: "Receive real-time notifications when customers place an order. Print packing slips, update tracking numbers, and watch your revenue grow.",
    tags: ["Real-time alerts", "Order dashboard"],
    icon: <TrendingUp className="w-5 h-5" />,
    img: "/dog_adventure.jpg",
    imgAlt: "Orders coming in",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const midScreen = window.innerHeight * 0.45;
      let current = 1;
      stepRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= midScreen) {
            current = index + 1;
          }
        }
      });
      setActiveStep(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressPercentage = (activeStep / STEPS.length) * 100;
  const activeStepData = STEPS[activeStep - 1];

  return (
    <section id="how" className="py-24 md:py-32 relative overflow-hidden bg-[var(--bg)]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(circle at 10% 60%, rgba(91,33,182,0.06) 0%, transparent 40%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ── Left Column: Sticky Panel ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--brand)] uppercase tracking-widest px-3 py-1.5 rounded-full bg-[var(--tint)]">
              Live in five steps
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
              How to create your{" "}
              <span className="brand-gradient-text">online store</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted)]">
              From initial sign-up to your very first customer order, every step is fast, intuitive,
              and requires zero coding knowledge.
            </p>

            {/* Live preview card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                key={activeStepData.img}
                src={activeStepData.img}
                alt={activeStepData.imgAlt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 500px"
                unoptimized
              />
              {/* Gradient */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(91,33,182,0.7) 0%, rgba(91,33,182,0.2) 50%, transparent 100%)" }} />
              {/* Step label */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-purple-200 uppercase tracking-widest">Step 0{activeStep} of 05</p>
                    <p className="text-white font-bold text-lg">{activeStepData.title}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    {activeStepData.icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="p-4 rounded-2xl bg-white border border-[var(--line)] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[var(--ink)]">
                <span>Setup progress</span>
                <span className="text-[var(--brand)] font-bold">{Math.round(progressPercentage)}% complete</span>
              </div>
              <div className="h-2.5 w-full bg-[var(--line)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progressPercentage}%`,
                    background: "linear-gradient(90deg, #5b21b6, #a855f7)",
                  }}
                />
              </div>
              {/* Step dots */}
              <div className="flex items-center justify-between mt-1">
                {STEPS.map((step) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(step.id)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer ${
                      step.id <= activeStep
                        ? "text-white scale-110"
                        : "bg-[var(--line)] text-[var(--muted)]"
                    }`}
                    style={step.id <= activeStep ? { background: "linear-gradient(135deg, #5b21b6, #a855f7)" } : {}}
                  >
                    {step.id < activeStep ? <Check className="w-3 h-3 stroke-[3]" /> : step.id}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/create-store"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-all shadow-lg"
              style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)", boxShadow: "0 16px 32px -8px rgba(91,33,182,0.4)" }}
            >
              <span>Start your free trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── Right Column: Timeline ── */}
          <div className="lg:col-span-7 relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-[var(--line)] hidden sm:block"
              aria-hidden="true"
            >
              <div
                className="w-full rounded-full transition-all duration-500"
                style={{
                  height: `${progressPercentage}%`,
                  background: "linear-gradient(to bottom, #5b21b6, #a855f7)",
                }}
              />
            </div>

            <div className="space-y-6 sm:space-y-8 relative">
              {STEPS.map((step, idx) => {
                const isPassed = step.id < activeStep;
                const isCurrent = step.id === activeStep;

                return (
                  <div
                    key={step.id}
                    ref={(el) => { stepRefs.current[idx] = el; }}
                    onClick={() => setActiveStep(step.id)}
                    className="cursor-pointer flex items-start gap-4 sm:gap-6 group transition-all duration-300"
                  >
                    {/* Step Bubble */}
                    <div className={`relative z-10 w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      isCurrent
                        ? "text-white shadow-lg scale-110"
                        : isPassed
                        ? "text-[var(--brand)] border-2 border-[var(--brand)]"
                        : "bg-white text-[var(--muted)] border border-[var(--line)] group-hover:border-[var(--brand)] group-hover:text-[var(--brand)]"
                    }`}
                      style={isCurrent ? {
                        background: "linear-gradient(135deg, #5b21b6, #a855f7)",
                        boxShadow: "0 12px 24px -6px rgba(91,33,182,0.45)"
                      } : isPassed ? { background: "var(--tint)" } : {}}>
                      {isPassed ? <Check className="w-5 h-5 stroke-[2.5]" /> : step.icon}
                    </div>

                    {/* Step Card */}
                    <div className={`flex-1 p-6 rounded-3xl border transition-all duration-300 ${
                      isCurrent
                        ? "bg-white shadow-xl shadow-purple-950/10 sm:translate-x-2"
                        : "bg-white border-[var(--line)] hover:border-[var(--brand)]/50 shadow-sm"
                    }`}
                      style={isCurrent ? { borderColor: "rgba(91,33,182,0.4)" } : {}}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[var(--brand)] uppercase tracking-wider">
                          Step 0{step.id}
                        </span>
                        {isCurrent && (
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-4">
                        {step.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--tint)] text-[var(--brand)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
