import React from "react";
import { CloudPlatformIcon } from "./StoreSvgIcons";
import { CheckCircle2, Zap } from "lucide-react";

export function TechStack() {
  const pills = [
    "Next.js App Router",
    "Tailwind CSS v4",
    "Turbopack Engine",
    "Cloud Auto-scaling",
    "End-to-End Encrypted",
    "Global Edge Delivery",
    "Sub-second First Contentful Paint",
    "Mobile-first Layouts",
  ];

  return (
    <section className="py-20 md:py-28 bg-[var(--alt)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Points */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block">
              Built for speed
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
              Modern tech, <span className="brand-gradient-text">fast storefronts</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted)]">
              Online shoppers abandon slow stores. Karyz is built from the ground up on modern Next.js
              and Tailwind CSS for instant page transitions and maximum conversion rates.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "Next.js for lightning pre-rendered, SEO-friendly pages",
                "Tailwind CSS v4 for a sleek, lightweight, responsive design system",
                "Cloud auto-scaling and global CDN edge delivery with 99.99% uptime",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-[var(--ink)] font-medium text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand)] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Cloud Graphic & Tech Pills */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start space-y-8">
            <div className="w-48 sm:w-60 animate-float">
              <CloudPlatformIcon />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--surface)] text-xs sm:text-sm font-semibold text-[var(--ink)] shadow-xs hover:border-[var(--brand)] hover:scale-105 transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-[var(--brand)]" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
