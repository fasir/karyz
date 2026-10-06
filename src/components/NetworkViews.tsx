import React from "react";
import { Check } from "lucide-react";

const VIEWS = ["Brand owner", "Distributor", "Retailer"];

const BULLETS = [
  "Your distributors, retailers and orders on one dashboard",
  "Set your wholesale prices. No one below sees your supplier cost",
  "Approve or reject every distributor who asks to join",
];

const ROWS = [
  { name: "Noahra Distribution", location: "Dubai", orders: 38, status: "Active", tone: "emerald" },
  { name: "Thalassery Wholesale", location: "Kozhikode", orders: 52, status: "Active", tone: "sky" },
  { name: "Malabar Coast Agencies", location: "Kannur", orders: 17, status: "Pending approval", tone: "amber" },
];

const toneStyles: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  sky: "bg-sky-100 text-sky-700",
  amber: "bg-amber-100 text-amber-700",
};

export function NetworkViews() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">
            One platform, three views
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
            Everyone in your network <span className="brand-gradient-text">gets the screen they need.</span>
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {VIEWS.map((view, index) => (
            <button
              key={view}
              type="button"
              className={[
                "rounded-full border px-4 py-2 text-sm font-medium transition duration-200",
                index === 0
                  ? "border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] shadow-[0_10px_24px_-18px_rgba(91,33,182,0.7)]"
                  : "border-[var(--line)] bg-transparent text-[var(--muted)] hover:border-[var(--brand)]/40 hover:text-[var(--ink)]",
              ].join(" ")}
            >
              {view}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-center">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
              Manage your whole network from one dashboard.
            </h3>

            <ul className="mt-8 space-y-4">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[var(--muted)]">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--tint)] text-[var(--brand)]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_32px_70px_-38px_rgba(91,33,182,0.45)]">
            <div className="flex items-center justify-between border-b border-[var(--line)] bg-[#f4f0fb] px-5 py-4 sm:px-6">
              <div className="text-sm font-medium text-[var(--ink)]">Your network • this month</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Kayalora Spices
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-left">
                <thead className="bg-[#faf7ff] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  <tr>
                    <th className="px-5 py-3 sm:px-6">Store</th>
                    <th className="px-5 py-3 sm:px-6">Location</th>
                    <th className="px-5 py-3 sm:px-6">Orders</th>
                    <th className="px-5 py-3 sm:px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-[var(--ink)]">
                  {ROWS.map((row) => (
                    <tr key={row.name} className="border-t border-[var(--line)] align-middle">
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={[
                              "h-2.5 w-2.5 rounded-full",
                              row.tone === "emerald" && "bg-emerald-500",
                              row.tone === "sky" && "bg-sky-500",
                              row.tone === "amber" && "bg-amber-500",
                            ].join(" ")}
                            aria-hidden="true"
                          />
                          <span className="font-medium">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-[var(--muted)] sm:px-6">{row.location}</td>
                      <td className="px-5 py-4 text-[var(--muted)] sm:px-6">{row.orders}</td>
                      <td className="px-5 py-4 sm:px-6">
                        <span className={[
                          "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold",
                          toneStyles[row.tone],
                        ].join(" ")}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
