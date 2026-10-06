import React from "react";

const NETWORK_ROWS = [
  {
    name: "Kayalora Spices",
    domain: "kayalora.in",
    location: "you",
    price: "₹210",
    tone: "bg-[#f1644d]",
    accent: "text-[#d96c55]",
  },
  {
    name: "Noorah Distribution",
    domain: "kayalora.in/noorah",
    location: "Dubai",
    price: "AED 14.50",
    tone: "bg-[#3ab78f]",
    accent: "text-[#268b68]",
  },
  {
    name: "Thalassery Wholesale",
    domain: "kayalora.in/thalassery",
    location: "Kerala",
    price: "₹248",
    tone: "bg-[#4a73ff]",
    accent: "text-[#4d63d6]",
  },
];

export function DistributionOS() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-[var(--brand)]/25 bg-[var(--surface)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)] shadow-[0_8px_22px_-18px_rgba(91,33,182,0.75)]">
              Multi-Tier Distribution OS
            </div>

            <h2 className="text-3xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--ink)] sm:text-4xl md:text-5xl xl:text-[4.2rem]">
              Run your whole
              <span className="relative inline-block">
                <span className="brand-gradient-text relative z-10">distribution</span>
              </span>
              network from one platform.
            </h2>

            <p className="mt-6 max-w-[33rem] text-lg leading-relaxed text-[var(--muted)]">
              Onboard distributors and sub-distributors, control the price each level sees, and track every order down to the retailer. Every partner also gets their own branded store on your domain.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-xl bg-[linear-gradient(135deg,#f17f4a,#f06d38)] px-6 py-3.5 text-base font-semibold text-white shadow-[0_16px_30px_-18px_rgba(240,109,56,0.8)] transition hover:brightness-105"
              >
                Get started →
              </button>
              <button
                type="button"
                className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-6 py-3.5 text-base font-semibold text-[var(--ink)] transition hover:border-[var(--brand)]/40 hover:text-[var(--brand)]"
              >
                Book a demo
              </button>
            </div>

          
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_30px_90px_-34px_rgba(91,33,182,0.18)] ring-1 ring-[var(--line)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] bg-[#f4f0fb] px-4 py-3 text-[11px] text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-medium text-[var(--ink)]">kayalora.in/admin/network</span>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Live tier sync
                </div>
              </div>

              <div className="px-4 pb-4 pt-5 text-[var(--ink)]">
                {/* <div className="mb-5 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  <span>Example network — illustrative names</span>
                  <span>Click tier to simulate</span>
                </div> */}

                <div className="space-y-5">
                  {NETWORK_ROWS.map((row, index) => (
                    <div key={row.name}>
                      <div className="mb-2 flex items-center justify-between rounded-xl border border-[var(--line)] bg-[#faf7ff] px-3 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white ${row.tone}`}>
                            {row.name.slice(0, 1)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[var(--ink)]">{row.name}</div>
                            <div className="text-[11px] text-[var(--muted)]">{row.domain}</div>
                          </div>
                        </div>
                        <div className={`text-[11px] font-medium ${row.accent}`}>{row.location}</div>
                      </div>

                      <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="rounded-md border border-[var(--line)] bg-[#f4f0fb] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                            1 KG
                          </span>
                          <span className="text-[13px] font-medium text-[var(--ink)]">Kashmiri Chilli Powder</span>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] text-[var(--muted)]">Price to {index === 0 ? "distributors" : index === 1 ? "sub-distributors" : "retailers"}</div>
                          <div className="font-semibold text-[var(--ink)]">{row.price}</div>
                        </div>
                      </div>

                    
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-[var(--line)] bg-[#f8f6fb] px-3 py-3 text-sm text-[var(--ink)]">
                  Green Leaf Supermarket ordered 24 units
                  <span className="float-right text-[11px] text-[var(--muted)]">1 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
