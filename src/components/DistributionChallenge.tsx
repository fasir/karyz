import React from "react";
import { BellRing, CalendarDays, Network, Tags } from "lucide-react";

export function DistributionChallenge() {
  const challenges = [
    {
      icon: Network,
      title: "NETWORK",
      description:
        "There’s no single view of who sells to whom, or which distributor is growing and which has gone quiet.",
    },
    {
      icon: Tags,
      title: "PRICES",
      description:
        "Every distributor keeps their own price list, and lower levels often see prices they shouldn’t.",
    },
    {
      icon: CalendarDays,
      title: "ORDERS",
      description:
        "Arrive as voice notes, photos and missed calls — then someone types them into a spreadsheet.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 text-white "
      style={{
        background: "#371D57",
      }}
    >
      <div
        className="pointer-events-none absolute -left-36 -top-32 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #c084fc 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #a855f7 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Distribution gets harder
            <br className="hidden sm:block" /> with every partner you add.
          </h2>
        </div>

        <div className="grid items-stretch gap-6 ">
          <div className="grid gap-4 sm:grid-cols-3">
            {challenges.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[10px] border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.105),rgba(255,255,255,0.045))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_28px_rgba(13,5,24,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/40 sm:p-5"
              >
                <div
                  className="pointer-events-none absolute -top-16 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full opacity-70 blur-2xl transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(255,255,255,0.42), transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative mb-4 flex h-10 items-center gap-1 text-[#e8d9f3] sm:mb-5">
                  <Icon className="h-9 w-9 stroke-[1.4]" aria-hidden="true" />
                  {title === "PRICES" && (
                    <span
                      className="ml-0.5 flex h-7 items-end gap-0.5"
                      aria-hidden="true"
                    >
                      <span className="h-2 w-1.5 rounded-t-sm bg-[#d98478]/70" />
                      <span className="h-4 w-1.5 rounded-t-sm bg-[#d98478]/85" />
                      <span className="h-6 w-1.5 rounded-t-sm bg-[#e5b6a1]" />
                    </span>
                  )}
                  {title === "ORDERS" && (
                    <BellRing
                      className="absolute left-7 top-0 h-4 w-4 stroke-[1.4]"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="relative mb-1.5 text-[22px] font-semibold tracking-wide text-[#d98478] ">
                  {title}
                </h3>
                <p className="relative text-xs leading-[1.55] text-white/90 sm:text-[13px]">
                  {description}
                </p>
              </article>
            ))}
          </div>

         
        </div>

        <div className="mt-10 max-w-5xl sm:mt-12">
          <p className="text-base font-medium leading-relaxed text-white/90 sm:text-lg">
            <strong className="font-bold text-white">Karyz.Biz</strong>{" "}
            is one system for your whole network — partners, prices, orders and
            stock — with a branded store for every partner. Keep WhatsApp for
            conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
