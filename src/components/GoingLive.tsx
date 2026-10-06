import React from "react";

const STEPS = [
  {
    number: "1",
    label: "Step 1",
    title: "Sign up and choose a plan",
    description: "Your business details, your plan and your payment method — in one guided setup.",
  },
  {
    number: "2",
    label: "Step 2",
    title: "Connect your domain",
    description: "Add your logo and colours, then point your domain to Karyz.Biz with two DNS records. We show you exactly what to add.",
  },
  {
    number: "3",
    label: "Step 3",
    title: "Add products and prices",
    description: "Upload your products and your wholesale prices.",
  },
  {
    number: "4",
    label: "Step 4",
    title: "Approve your distributors",
    description: "Approved distributors add their logo and colours, and their store goes live.",
  },
];

export function GoingLive() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)] sm:text-xs">
              Going live
            </p>
            <h2 className="text-3xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--ink)] sm:text-4xl md:text-5xl">
              From sign-up to a live network in [X] days.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-[var(--muted)]">
            Set up your brand store yourself, or book a demo and we&apos;ll do it with you.
            Distributors request to join, and each gets their store as soon as you approve them.
          </p>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--line)]">
            <div className="h-full w-[72%] rounded-full bg-[var(--brand)]" aria-hidden="true" />
          </div>
          <div className="h-1 w-28 overflow-hidden rounded-full bg-[var(--line)] sm:w-36">
            <div className="h-full w-[70%] rounded-full bg-[#f28f49]" aria-hidden="true" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[11px]">
          <span>Sign up</span>
          <span>Live</span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="group rounded-[22px] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_18px_40px_-30px_rgba(91,33,182,0.5)] transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-[0_22px_48px_-28px_rgba(91,33,182,0.5)]"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-white shadow-[0_12px_18px_-10px_rgba(91,33,182,0.6)]">
                  {step.number}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  {step.label}
                </span>
              </div>

              <h3 className="text-[1.05rem] font-bold leading-snug tracking-[-0.03em] text-[var(--ink)]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
