"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface PlanItem {
  name: string;
  desc: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  tag?: string;
  popular?: boolean;
  buttonText: string;
  features: string[];
}

const PLANS: PlanItem[] = [
  {
    name: "Starter",
    desc: "For new sellers opening their very first online store.",
    monthlyPrice: 19,
    annualPrice: 15,
    buttonText: "Start with Starter",
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
    <section id="pricing" className="py-20 md:py-28 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block mb-2">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            Simple plans for <span className="brand-gradient-text">every stage</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
            Start with a 14-day free trial. Change, upgrade, or cancel your plan at any time.
          </p>

          {/* Billing Switch: Monthly / Annual */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] shadow-xs">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-[var(--ink)] text-white shadow-sm"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                isAnnual
                  ? "bg-[var(--ink)] text-white shadow-sm"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch group/plans">
          {PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isCustom = typeof price === "string";

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "conic-border-glow z-10 lg:-translate-y-2"
                    : "bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--brand)] shadow-lg hover:shadow-2xl"
                } group-hover/plans:opacity-85 hover:!opacity-100 hover:scale-[1.02]`}
              >
                <div>
                  {/* Badge */}
                  <div className="min-h-7 mb-2 flex items-center justify-between">
                    {plan.popular ? (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        {plan.tag}
                      </span>
                    ) : (
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                        {plan.name} Tier
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--ink)] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-6 min-h-10">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="font-display font-bold text-4xl sm:text-5xl text-[var(--ink)] tracking-tight mb-6">
                    {isCustom ? (
                      price
                    ) : (
                      <>
                        ${price}
                        <span className="text-sm font-normal text-[var(--muted)] font-sans ml-1">
                          /month
                        </span>
                      </>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-4 border-t border-[var(--line)]">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                        <div className="w-4 h-4 rounded-full bg-[var(--tint)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[var(--brand)] stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8 pt-4">
                  <Link
                    href="/create-store"
                    className={`w-full py-3.5 px-6 rounded-full font-semibold text-sm text-center inline-flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      plan.popular
                        ? "text-white bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] shadow-lg shadow-purple-900/30 hover:opacity-95"
                        : "border border-[var(--line)] text-[var(--ink)] bg-[var(--surface)] hover:border-[var(--brand)] hover:bg-[var(--tint)]"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
