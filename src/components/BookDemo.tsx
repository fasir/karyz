import React from "react";

export function BookDemo() {
  return (
    <section className="relative overflow-hidden bg-[#2d1a4a] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.15fr]">
          <div className="max-w-xl text-white">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              Book a demo
            </p>
            <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              See your distribution network running on Karyz.Biz.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80">
              Tell us about your network. We&apos;ll set up a demo with your products and your
              partner levels, and message you on WhatsApp to pick a time.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#f4f1f8] p-5 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.65)] sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="sr-only">Your name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#d7d0e2] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[#7a6b8d] transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
                />
              </label>

              <label className="sm:col-span-1">
                <span className="sr-only">WhatsApp number</span>
                <div className="flex items-center overflow-hidden rounded-xl border border-[#d7d0e2] bg-white focus-within:border-[var(--brand)] focus-within:ring-2 focus-within:ring-[var(--brand)]/10">
                  <span className="border-r border-[#e9e1f1] bg-[#faf7fb] px-3 py-3 text-sm font-medium text-[#574d68]">
                    +91 or +971
                  </span>
                  <input
                    type="tel"
                    placeholder=""
                    className="w-full border-0 bg-transparent px-3 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[#7a6b8d]"
                  />
                </div>
              </label>

              <label className="sm:col-span-2">
                <span className="sr-only">Business name</span>
                <input
                  type="text"
                  placeholder="Business name"
                  className="w-full rounded-xl border border-[#d7d0e2] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[#7a6b8d] transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
                />
              </label>

              <label className="sm:col-span-1">
                <span className="sr-only">What do you sell?</span>
                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-[#d7d0e2] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
                >
                  <option value="" disabled hidden>
                    What do you sell?
                  </option>
                  <option>Distributors today</option>
                  <option>Wholesale products</option>
                  <option>Fashion and lifestyle</option>
                  <option>Food and FMCG</option>
                </select>
              </label>

              <label className="sm:col-span-1">
                <span className="sr-only">How many distributors</span>
                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-[#d7d0e2] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
                >
                  <option value="" disabled hidden>
                    1 to 5
                  </option>
                  <option>1 to 5</option>
                  <option>6 to 20</option>
                  <option>21 to 50</option>
                  <option>50+</option>
                </select>
              </label>

              <label className="sm:col-span-2">
                <span className="sr-only">City and country</span>
                <input
                  type="text"
                  placeholder="City and country"
                  className="w-full rounded-xl border border-[#d7d0e2] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[#7a6b8d] transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
                />
              </label>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-[#433a52]">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[#cfc1e8] accent-[var(--brand)]" />
              <span>
                I agree that Karyz may contact me about Karyz.Biz, and I accept the
                <span className="ml-1 font-medium text-[#2d1a4a] underline decoration-dashed underline-offset-4">
                  privacy policy.
                </span>
              </span>
            </label>

            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-[linear-gradient(135deg,#ff8b52,#ff7d4d)] px-4 py-3 text-base font-bold text-white shadow-[0_18px_28px_-14px_rgba(255,125,77,0.75)] transition hover:brightness-105"
            >
              Book my demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
