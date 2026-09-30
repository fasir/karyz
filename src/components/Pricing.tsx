"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";

interface PlanItem {
  name: string;
  desc: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  tag?: string;
  popular?: boolean;
  buttonText: string;
  features: string[];
  accent: string;
}

const PLANS: PlanItem[] = [
  {
    name: "Starter",
    desc: "For new sellers opening their very first online store.",
    monthlyPrice: 19,
    annualPrice: 15,
    buttonText: "Start with Starter",
    accent: "#6b7280",
    features: [
      "1 store, up to 100 products",
      "Theme editor with logo and colours",
      "1 secure payment gateway",
      "Mobile-ready responsive storefront",
      "Free SSL certificate and edge hosting",
      "Standard email support",
    ],
  },
  {
    name: "Business",
    desc: "For growing brands ready to accelerate their online sales.",
    monthlyPrice: 59,
    annualPrice: 47,
    tag: "Most popular",
    popular: true,
    buttonText: "Start with Business",
    accent: "#a855f7",
    features: [
      "Unlimited products & categories",
      "Custom domain & full brand kit",
      "Multiple global payment gateways",
      "One-page high-speed express checkout",
      "Automated abandoned cart recovery",
      "Advanced sales analytics & priority support",
    ],
  },
  {
    name: "Enterprise",
    desc: "For high-volume retail teams with custom requirements.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    buttonText: "Talk to sales",
    accent: "#5b21b6",
    features: [
      "Full white-label & multi-brand stores",
      "Dedicated cloud capacity, 99.99% uptime SLA",
      "Custom ERP & accounting integrations",
      "Single sign-on (SSO) & role-based permissions",
      "Dedicated account success manager",
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-[var(--bg)]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(91,33,182,0.07) 0%, transparent 50%)",
        }} />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          opacity: 0.5,
        }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--brand)] uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full bg-[var(--tint)]">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            Simple plans for{" "}
            <span className="brand-gradient-text">every stage</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
            Start with a 14-day free trial. Change, upgrade, or cancel your plan at any time.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center gap-1 p-1.5 rounded-full bg-white border border-[var(--line)] shadow-sm">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-[var(--ink)] text-white shadow-sm"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isAnnual
                  ? "bg-[var(--ink)] text-white shadow-sm"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isCustom = typeof price === "string";

            return (
              <div
                key={plan.name}
                className={`relative rounded-[28px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? "conic-border-glow z-10 lg:-translate-y-3"
                    : "bg-white border border-[var(--line)] shadow-lg hover:shadow-2xl hover:shadow-purple-900/10 hover:border-[var(--brand)]/40"
                }`}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 rounded-full opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${plan.accent}, transparent)` }} />

                <div className="p-8">
                  {/* Badge */}
                  <div className="min-h-8 mb-3 flex items-center">
                    {plan.popular ? (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-sm"
                        style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>
                        <Sparkles className="w-3 h-3" />
                        {plan.tag}
                      </span>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                        {plan.name} Tier
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--ink)] mb-1">{plan.name}</h3>
                  <p className="text-sm text-[var(--muted)] mb-8 min-h-10">{plan.desc}</p>

                  {/* Price display */}
                  <div className="mb-8">
                    {isCustom ? (
                      <div className="font-display font-bold text-4xl sm:text-5xl text-[var(--ink)] tracking-tight">{price}</div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="font-display font-bold text-4xl sm:text-5xl text-[var(--ink)] tracking-tight">${price}</span>
                        <span className="text-sm font-normal text-[var(--muted)] mb-2">/month</span>
                      </div>
                    )}
                    {isAnnual && !isCustom && (
                      <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Billed annually — saving you money
                      </p>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-6 border-t border-[var(--line)]">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "var(--tint)" }}>
                          <Check className="w-3 h-3 text-[var(--brand)] stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="px-8 pb-8">
                  <Link
                    href="/create-store"
                    className={`w-full py-4 px-6 rounded-full font-bold text-sm text-center inline-flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      plan.popular
                        ? "text-white shadow-lg"
                        : "border border-[var(--line)] text-[var(--ink)] bg-white hover:border-[var(--brand)] hover:bg-[var(--tint)]"
                    }`}
                    style={plan.popular ? {
                      background: "linear-gradient(135deg, #5b21b6, #a855f7)",
                      boxShadow: "0 16px 32px -8px rgba(91,33,182,0.4)"
                    } : {}}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--muted)] flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> No setup fees</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> 14-day free trial</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> No credit card required</span>
          </p>
        </div>
      </div>
    </section>
  );
}
