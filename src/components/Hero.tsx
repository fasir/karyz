import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Boxes,
  ChartNoAxesCombined,
  ClipboardList,
  LayoutDashboard,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Sparkles,
  UsersRound,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Products", icon: Package, active: false },
  { label: "Orders", icon: ClipboardList, active: false },
  { label: "Inventory", icon: Boxes, active: false },
  { label: "Partners", icon: UsersRound, active: false },
  { label: "Reports", icon: ChartNoAxesCombined, active: false },
  { label: "Settings", icon: Settings, active: false },
];

const METRICS = [
  { label: "Total Revenue", value: "$128,430", change: "+12.8%", icon: ChartNoAxesCombined },
  { label: "Total Orders", value: "1,284", change: "+8.2%", icon: ClipboardList },
  { label: "Active Partners", value: "248", change: "+5.4%", icon: UsersRound },
  { label: "Products", value: "1,842", change: "+3.1%", icon: Package },
];

const CHART_BARS = [34, 48, 40, 57, 46, 63, 52, 70, 58, 76, 62, 84, 68, 78, 65, 92, 73, 86, 70, 100];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--bg)] pt-12 pb-14 sm:pt-16 md:pb-20"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 82% 42%, color-mix(in srgb, var(--brand) 10%, transparent), transparent 48%), linear-gradient(115deg, var(--surface) 0%, var(--bg) 58%, var(--tint) 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(var(--line) 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 xl:px-10">
        <div className="relative z-10 max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand)] sm:text-[11px]">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--tint)]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span>The future of B2B commerce</span>
            <span className="ml-1 hidden h-px w-10 bg-[var(--brand)]/35 sm:block" />
          </div>

          <h1 className="text-[clamp(2.7rem,5.1vw,4.45rem)] font-bold leading-[1.02] tracking-[-0.055em] text-[var(--ink)]">
            Your Distribution
            <br />
            Business.
            <br />
            <span className="brand-gradient-text not-italic">Your Brand.</span>
            <br />
            Your Online Store.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-[17px] sm:leading-7">
            The all-in-one white-label platform to run your B2B commerce and distribution network. Sell smarter, scale faster, and make every customer experience unmistakably yours.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/create-store"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--brand)]/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--brand)]/50 hover:bg-[var(--tint)]"
            >
              Explore Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                { initials: "JD", tone: "bg-[var(--tint)]" },
                { initials: "AR", tone: "bg-rose-100" },
                { initials: "MK", tone: "bg-emerald-100" },
              ].map((person) => (
                <span
                  key={person.initials}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--surface)] text-[9px] font-bold text-[var(--ink)] ${person.tone}`}
                >
                  {person.initials}
                </span>
              ))}
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[var(--brand)] text-sm font-semibold text-white">
                +
              </span>
            </div>
            <div className="text-xs leading-5">
              <p className="font-bold text-[var(--ink)]">Built for the way business moves.</p>
              <p className="text-[var(--muted)]">One platform. Every part of your network.</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[760px] lg:py-10">
          <div className="absolute inset-8 rounded-[2rem] bg-[var(--brand)]/10 blur-3xl" aria-hidden="true" />
          <div className="relative lg:-rotate-2">
            <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_30px_80px_-28px_var(--glow)]">
              <div className="flex h-12 items-center gap-2 border-b border-[var(--line)] px-4 sm:px-5">
                <div className="flex min-w-0 flex-1 items-center gap-2 text-[10px] font-semibold text-[var(--muted)] sm:text-xs">
                  <span className="truncate">Northstar Supply</span>
                  <span className="text-[var(--line)]">/</span>
                  <span className="text-[var(--ink)]">Dashboard</span>
                </div>
                <Search className="h-4 w-4 text-[var(--muted)]" />
                <Bell className="ml-2 h-4 w-4 text-[var(--muted)]" />
                <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--tint)] text-[9px] font-bold text-[var(--brand)]">JD</span>
              </div>

              <div className="flex min-h-[340px] sm:min-h-[390px]">
                <aside className="hidden w-[150px] shrink-0 border-r border-[var(--line)] p-3 sm:block">
                  <div className="mb-5 flex items-center gap-2 rounded-md border border-[var(--line)] p-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded bg-[var(--brand)] text-xs font-bold text-white">N</span>
                    <span className="min-w-0">
                      <span className="block truncate text-[9px] font-bold text-[var(--ink)]">Northstar Supply</span>
                      <span className="block text-[8px] text-[var(--muted)]">Enterprise workspace</span>
                    </span>
                  </div>
                  <p className="mb-2 px-2 text-[8px] font-bold uppercase tracking-widest text-[var(--muted)]">Workspace</p>
                  <nav className="space-y-1" aria-label="Dashboard preview">
                    {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2 rounded-md px-2 py-2 text-[9px] font-semibold ${
                          active ? "bg-[var(--tint)] text-[var(--brand)]" : "text-[var(--muted)]"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </div>
                    ))}
                  </nav>
                  <div className="mt-6 border-t border-[var(--line)] pt-3 text-[9px] font-semibold text-[var(--ink)]">Jordan Davis</div>
                  <p className="pl-2 text-[8px] text-[var(--muted)]">Admin</p>
                </aside>

                <div className="min-w-0 flex-1 p-3 sm:p-5">
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-[var(--ink)] sm:text-base">Good morning, Jordan</p>
                      <p className="mt-1 text-[9px] text-[var(--muted)] sm:text-[10px]">Here&apos;s what&apos;s happening with your business today.</p>
                    </div>
                    <span className="shrink-0 rounded-md border border-[var(--line)] px-2 py-1.5 text-[8px] text-[var(--muted)] sm:text-[9px]">Last 30 days</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
                    {METRICS.map(({ label, value, change, icon: Icon }) => (
                      <div key={label} className="min-w-0 rounded-lg border border-[var(--line)] p-2 sm:p-2.5">
                        <div className="mb-2 flex items-center justify-between gap-1">
                          <span className="truncate text-[8px] font-medium text-[var(--muted)] sm:text-[9px]">{label}</span>
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[var(--tint)] text-[var(--brand)]">
                            <Icon className="h-3 w-3" />
                          </span>
                        </div>
                        <p className="truncate text-sm font-bold text-[var(--ink)] sm:text-base">{value}</p>
                        <p className="mt-1 text-[8px] font-semibold text-emerald-600">↗ {change} <span className="font-normal text-[var(--muted)]">vs last month</span></p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 grid grid-cols-[1.55fr_1fr] gap-2">
                    <div className="rounded-lg border border-[var(--line)] p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[9px] font-bold text-[var(--ink)] sm:text-[10px]">Revenue overview</p>
                          <p className="mt-1 text-[8px] text-[var(--muted)]">Track your sales performance</p>
                        </div>
                        <span className="text-xs text-[var(--muted)]">···</span>
                      </div>
                      <div className="mt-3 flex h-[100px] items-end gap-[3px] border-b border-dashed border-[var(--line)] px-1 sm:h-[126px] sm:gap-1">
                        {CHART_BARS.map((height, index) => (
                          <span
                            key={`${height}-${index}`}
                            className={`min-w-0 flex-1 rounded-t-[2px] ${index % 3 === 0 ? "bg-[var(--brand2)]/35" : "bg-[var(--brand)]/80"}`}
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between text-[7px] text-[var(--muted)] sm:text-[8px]">
                        <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[var(--line)] p-3">
                      <p className="text-[9px] font-bold text-[var(--ink)] sm:text-[10px]">Sales by channel</p>
                      <p className="mt-1 text-[8px] text-[var(--muted)]">Revenue distribution</p>
                      <div className="mx-auto mt-4 flex aspect-square w-[72px] items-center justify-center rounded-full sm:w-[94px]" style={{ background: "conic-gradient(var(--brand) 0 72%, var(--brand2) 72% 91%, var(--tint) 91% 100%)" }}>
                        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[var(--surface)] text-[8px] font-bold text-[var(--ink)] sm:h-[64px] sm:w-[64px]">$128K</div>
                      </div>
                      <div className="mt-3 space-y-1 text-[7px] text-[var(--muted)] sm:text-[8px]">
                        <p><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />Wholesale <span className="float-right">72%</span></p>
                        <p><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand2)]" />Online <span className="float-right">19%</span></p>
                        <p><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--tint)]" />Direct <span className="float-right">9%</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-float absolute -left-3 top-3 z-10 hidden items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 shadow-xl sm:flex sm:-left-8 sm:top-0">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"><ChartNoAxesCombined className="h-4 w-4" /></span>
              <span><span className="block text-[8px] text-[var(--muted)]">Revenue growth</span><strong className="text-sm text-[var(--ink)]">+24.8%</strong></span>
            </div>
            <div className="animate-float-delayed absolute -bottom-5 right-2 z-10 hidden items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 shadow-xl sm:flex sm:right-0">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--tint)] text-[var(--brand)]"><ShoppingCart className="h-4 w-4" /></span>
              <span><span className="block text-[8px] text-[var(--muted)]">New order received</span><strong className="text-sm text-[var(--ink)]">$2,450.00</strong><span className="ml-2 text-[8px] text-emerald-600">Just now</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}