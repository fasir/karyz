"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Create your account",
    desc: "Sign up, name your store, and upload your logo. Your custom store URL is ready to share immediately.",
    tags: ["Free trial", "No credit card needed"],
    icon: <UserPlus className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Add your products",
    desc: "Upload photos, set prices, and write descriptions, or import your full catalog in bulk via CSV. Each product automatically gets a dedicated SEO page.",
    tags: ["Bulk import", "SEO-ready pages"],
    icon: <Package className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Add payments and shipping",
    desc: "Connect Stripe, PayPal, or Razorpay with one-click authorization. Set local pickup, flat rate, or free delivery thresholds.",
    tags: ["Stripe", "PayPal", "Razorpay"],
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Share your store",
    desc: "Add your storefront link to your Instagram bio, TikTok, WhatsApp business catalog, and email marketing signatures.",
    tags: ["Social links", "WhatsApp", "Email signature"],
    icon: <Share2 className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Start getting orders",
    desc: "Receive real-time notifications when customers place an order. Print packing slips, update tracking numbers, and watch your revenue grow.",
    tags: ["Real-time alerts", "Order dashboard"],
    icon: <TrendingUp className="w-5 h-5" />,
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

  return (
    <section id="how" className="py-20 md:py-28 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Summary & Progress */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block">
              Live in five steps
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
              How to create your <span className="brand-gradient-text">online store</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted)]">
              From initial sign-up to your very first customer order, every step is fast, intuitive,
              and requires zero coding knowledge.
            </p>

            {/* Step Progress Indicator */}
            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[var(--ink)]">
                <span>Current Progress</span>
                <span className="text-[var(--brand)] font-bold">
                  Step {activeStep} of {STEPS.length}
                </span>
              </div>
              <div className="h-2.5 w-full bg-[var(--line)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <Link
              href="/create-store"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] shadow-md hover:shadow-purple-900/30 hover:opacity-95 transition-all"
            >
              <span>Start your free trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Interactive Timeline Steps */}
          <div className="lg:col-span-7 relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-[var(--line)] hidden sm:block"
              aria-hidden="true"
            >
              <div
                className="w-full bg-gradient-to-b from-[var(--brand)] to-[var(--brand2)] transition-all duration-300"
                style={{ height: `${progressPercentage}%` }}
              />
            </div>

            <div className="space-y-6 sm:space-y-8 relative">
              {STEPS.map((step, idx) => {
                const isPassed = step.id < activeStep;
                const isCurrent = step.id === activeStep;

                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveStep(step.id)}
                    className={`cursor-pointer flex items-start gap-4 sm:gap-6 group transition-all duration-300`}
                  >
                    {/* Step Icon Bubble */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                        isCurrent
                          ? "bg-gradient-to-br from-[var(--brand)] to-[var(--brand2)] text-white shadow-lg shadow-purple-900/30 scale-110"
                          : isPassed
                          ? "bg-[var(--tint)] text-[var(--brand)] border-2 border-[var(--brand)]"
                          : "bg-[var(--surface)] text-[var(--muted)] border border-[var(--line)] group-hover:border-[var(--brand)]"
                      }`}
                    >
                      {isPassed ? <Check className="w-5 h-5 stroke-[2.5]" /> : step.icon}
                    </div>

                    {/* Step Card */}
                    <div
                      className={`flex-1 p-6 rounded-3xl border transition-all duration-300 ${
                        isCurrent
                          ? "bg-[var(--surface)] border-[var(--brand)] shadow-xl shadow-purple-950/10 sm:translate-x-2"
                          : "bg-[var(--surface)] border-[var(--line)] hover:border-[var(--brand)]/50 shadow-xs"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[var(--brand)] uppercase tracking-wider">
                          Step 0{step.id}
                        </span>
                        {isCurrent && (
                          <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
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
