import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowRight, Mail } from "lucide-react";

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" fill="currentColor" />
    </svg>
  );
}

const SOCIAL = [
  { icon: <TwitterIcon className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <LinkedinIcon className="w-4 h-4" />, href: "#", label: "LinkedIn" },
  { icon: <YoutubeIcon className="w-4 h-4" />, href: "#", label: "YouTube" },
  { icon: <Mail className="w-4 h-4" />, href: "mailto:support@karyz.com", label: "Email" },
];

const PLATFORM_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "White Label", href: "#features" },
  { label: "B2B Online Store", href: "#catalogue" },
  { label: "Distribution Management", href: "#features" },
];

const RESOURCE_LINKS = [
  { label: "About Us", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#" },
  { label: "Book a Demo", href: "/create-store" },
  { label: "Support", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--alt) 100%)" }}>
      {/* Subtle top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(91,33,182,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#top" className="inline-flex items-center gap-2.5 group" aria-label="Karyz home">
              <div className="relative h-10 w-24">
                <Image
                  src="/logo.png"
                  alt="Karyz"
                  width={150}
                  height={82}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <p className="text-sm font-semibold text-[var(--ink)]">
              B2B Commerce &amp; Distribution, Your Way.
            </p>

            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-sm">
              Launch your own branded platform to manage products, orders, inventory and your distribution network.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--brand)] hover:border-[var(--brand)] hover:shadow-md transition-all"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-[var(--ink)] text-sm tracking-wider uppercase">Platform</h4>
            <ul className="space-y-3">
              {PLATFORM_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--brand)] transition-all duration-200 inline-block" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-[var(--ink)] text-sm tracking-wider uppercase">Resources</h4>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--brand)] transition-all duration-200 inline-block" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get Started */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-[var(--ink)] text-sm tracking-wider uppercase">Get Started</h4>
            <div className="p-6 rounded-2xl bg-white border border-[var(--line)] shadow-sm space-y-4">
              <p className="text-sm text-[var(--ink)] font-medium leading-relaxed">
                Ready to build your own branded B2B platform?
              </p>
              <Link
                href="/create-store"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:brightness-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #5b21b6, #a855f7)",
                  boxShadow: "0 10px 25px -5px rgba(91,33,182,0.35)",
                }}
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <span>© 2026 Karyz. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Link href="#" className="hover:text-[var(--brand)] transition-colors">Privacy Policy</Link>
            <span className="text-[var(--line)]">·</span>
            <Link href="#" className="hover:text-[var(--brand)] transition-colors">Terms &amp; Conditions</Link>
            <span className="text-[var(--line)]">·</span>
            <Link href="#" className="hover:text-[var(--brand)] transition-colors">Cookie Policy</Link>
          </div>
          <Link href="#top" className="inline-flex items-center gap-1.5 hover:text-[var(--brand)] transition-colors font-semibold group">
            <span>Back to top</span>
            <span className="w-6 h-6 rounded-full border border-[var(--line)] flex items-center justify-center group-hover:border-[var(--brand)] group-hover:bg-[var(--tint)] transition-all">
              <ArrowUp className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
