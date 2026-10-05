import React from "react";
import { Building2, Network, Store, Workflow } from "lucide-react";

const LEVELS = [
  {
    icon: Building2,
    label: "LEVEL 1",
    title: "You, the brand",
    description:
      "List your products with wholesale prices, and approve who joins your network as a distributor.",
    featured: true,
  },
  {
    icon: Network,
    label: "LEVEL 2",
    title: "Distributors",
    description:
      "Get their own store on your domain, with their logo and colours. They add their margin and can add sub-distributors and retailers below them.",
  },
  {
    icon: Workflow,
    label: "LEVEL 3 AND BELOW",
    title: "Sub-distributors",
    description:
      "Buy from the level above, add their own margin and run their own store as the network grows.",
  },
  {
    icon: Store,
    label: "BUYERS",
    title: "Retailers",
    description:
      "Connect under any distributor, see only that distributor’s price, order and pay online.",
  },
];

export function NetworkLevels() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background:
          "linear-gradient(145deg, var(--bg) 0%, var(--alt) 58%, var(--bg) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-32 -top-36 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--brand2) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">
            Your network, level by level
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
            Manage every level from one place.{" "}
            <span className="brand-gradient-text">
              Each level sees only the price above it.
            </span>
          </h2>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-[var(--brand)]/20 via-[var(--brand2)]/50 to-[var(--brand)]/20 lg:block"
            aria-hidden="true"
          />
          {LEVELS.map(({ icon: Icon, label, title, description, featured }) => (
            <article
              key={title}
              className={`relative rounded-2xl border p-5 shadow-[0_16px_40px_-32px_var(--brand)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_var(--brand)] sm:p-6 ${
                featured
                  ? "border-[var(--brand)]/30 bg-[var(--surface)]"
                  : "border-[var(--line)] bg-[var(--surface)]/85 backdrop-blur-sm"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    featured
                      ? "bg-[var(--brand)] text-white"
                      : "bg-[var(--tint)] text-[var(--brand)]"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-[var(--bg)] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[var(--muted)]">
                  {label}
                </span>
              </div>
              <h3
                className={`mb-2 text-lg font-bold tracking-tight ${
                  featured ? "text-[var(--brand)]" : "text-[var(--ink)]"
                }`}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
