import type { ReactNode } from "react";

const FEATURES: { title: string; description: string; visual: ReactNode }[] = [
  {
    title: "Partner onboarding and approval",
    description:
      "Distributors request to join and you approve or reject each one. Approved distributors can add their own sub-distributors and retailers.",
    visual: (
      <div className="space-y-2">
        <p className="text-[9px] font-medium uppercase tracking-wide text-[var(--muted)]">
          Request to join
        </p>
        <div>
          <p className="text-[11px] font-semibold text-[var(--ink)]">
            Malabar Coast Agencies
          </p>
          <p className="text-[10px] text-[var(--muted)]">
            Kannur · wants to be a distributor
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <span className="rounded-md bg-[var(--brand)] py-1 text-center text-[10px] font-semibold text-white">
            Approve
          </span>
          <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] py-1 text-center text-[10px] font-semibold text-[var(--ink)]">
            Reject
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Price control at every level",
    description:
      "Every buyer sees only the price of the level directly above them — never your supplier cost or anyone else's margin.",
    visual: (
      <div className="divide-y divide-[var(--line)]">
        {[
          ["Brand price", "seen by distributors", "₹210"],
          ["Distributor price", "seen by sub-distributors", "₹224"],
          ["Sub-distributor price", "seen by retailers", "₹248"],
        ].map(([label, detail, price]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-2 py-1.5 first:pt-0 last:pb-0"
          >
            <div>
              <p className="text-[11px] font-semibold text-[var(--ink)]">{label}</p>
              <p className="text-[10px] text-[var(--muted)]">{detail}</p>
            </div>
            <p className="text-[11px] font-semibold text-[var(--ink)]">{price}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Order management",
    description:
      "Orders from the level below arrive in one list and move from placed to delivered, with delivery confirmation.",
    visual: (
      <div className="space-y-2">
        {[
          ["#TW-1042 · Green Leaf", "New"],
          ["#TW-1041 · Al Noor Grocery", "Packed"],
          ["#TW-1039 · Fresh Basket", "Delivered"],
        ].map(([order, status]) => (
          <div
            key={order}
            className="flex items-center justify-between gap-2 text-[10px] text-[var(--ink)]"
          >
            <span>{order}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                status === "Delivered"
                  ? "bg-[var(--brand)] text-white"
                  : "bg-[var(--tint)] text-[var(--brand)]"
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Stock visibility",
    description:
      "See stock levels for your products and spot low stock before buyers do.",
    visual: (
      <div className="space-y-2">
        {[
          ["Kashmiri Chilli 1 kg", "1,240", "w-full"],
          ["Turmeric 500 g", "860", "w-3/4"],
          ["Garam Masala 200 g", "92", "w-1/3"],
        ].map(([product, count, width], index) => (
          <div key={product}>
            <div className="mb-1 flex items-center justify-between gap-2 text-[10px]">
              <span className="truncate text-[var(--ink)]">
                {product}
                {index === 2 && (
                  <span className="ml-1 rounded-full bg-[var(--tint)] px-1.5 py-0.5 text-[9px] font-medium text-[var(--brand)]">
                    Low
                  </span>
                )}
              </span>
              <span className="font-semibold text-[var(--ink)]">{count}</span>
            </div>
            <div className="h-1 rounded-full bg-[var(--line)]">
              <div
                className={`h-full rounded-full ${width} ${
                  index === 2 ? "bg-[var(--brand2)]" : "bg-[var(--brand)]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Online payments at checkout",
    description:
      "Buyers pay for their orders online. Razorpay for India, Stripe for the GCC.",
    visual: (
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold text-[var(--ink)]">
            Order #TW-1042
          </p>
          <p className="text-[11px] font-semibold text-[var(--ink)]">₹9,760</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["UPI", "Card", "Net banking"].map((method) => (
            <span
              key={method}
              className="rounded border border-[var(--line)] bg-[var(--surface)] px-1.5 py-0.5 text-[9px] text-[var(--muted)]"
            >
              {method}
            </span>
          ))}
        </div>
        <span className="inline-block rounded-full bg-[var(--tint)] px-2 py-0.5 text-[9px] font-medium text-[var(--brand)]">
          Paid online
        </span>
      </div>
    ),
  },
  {
    title: "Network analytics",
    description:
      "Orders, revenue and active distributors over time. Advanced analytics on Pro and Enterprise.",
    visual: (
      <div className="flex h-[72px] items-end justify-between gap-3 px-2">
        {[
          ["Jun", "h-4"],
          ["Jul", "h-6"],
          ["Aug", "h-7"],
          ["Sep", "h-9"],
          ["Oct", "h-12"],
        ].map(([month, height], index) => (
          <div
            key={month}
            className="flex flex-1 flex-col items-center justify-end gap-1"
          >
            <div
              className={`w-full max-w-5 rounded-t-[4px] ${
                index === 4 ? "bg-[var(--brand)]" : "bg-[var(--line)]"
              } ${height}`}
            />
            <span className="text-[9px] text-[var(--muted)]">{month}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export function BentoGrid() {
  return (
    <section
      id="features"
      className="border-t border-[var(--line)] bg-[var(--alt)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-xl"
            >
              <div
                aria-hidden="true"
                className="flex min-h-28 items-center rounded-xl bg-[var(--bg)] px-4 py-3"
              >
                <div className="w-full">{feature.visual}</div>
              </div>
              <div className="px-1 pb-1 pt-4">
                <h3 className="text-lg font-bold leading-snug tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--brand)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
