import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, PawPrint, Mail } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
  { icon: <InstagramIcon className="w-4 h-4" />, href: "#", label: "Instagram" },
  { icon: <TwitterIcon className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <YoutubeIcon className="w-4 h-4" />, href: "#", label: "YouTube" },
  { icon: <Mail className="w-4 h-4" />, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--alt) 100%)" }}>
      {/* Subtle top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(91,33,182,0.4), transparent)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-5">
            <Link href="#top" className="inline-flex items-center gap-2.5 group" aria-label="Paw and Whisker home">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-[var(--ink)] group-hover:text-[var(--brand)] transition-colors">
                Paw & Whisker
              </span>
            </Link>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">
              Thoughtful little essentials for the pets who make life a lot more fun.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
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
            {/* Image strip */}
            <div className="flex gap-2">
              {["/dog_adventure.jpg", "/cat_cozy_bed.jpg", "/pet_toys.jpg"].map((src, i) => (
                <div key={i} className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-white shadow-md">
                  <Image src={src} alt="Pet" fill className="object-cover" sizes="56px" unoptimized />
                </div>
              ))}
              <div className="w-14 h-14 rounded-xl bg-[var(--tint)] border-2 border-white shadow-md flex items-center justify-center text-xs font-bold text-[var(--brand)]">
                +200
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-[var(--ink)] text-sm tracking-wider uppercase">Product</h4>
            <ul className="space-y-3">
              {["Bestsellers", "Collections", "Our promise", "Shop all"].map((l) => (
                <li key={l}>
                  <Link href="#products" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--brand)] transition-all duration-200 inline-block" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-[var(--ink)] text-sm tracking-wider uppercase">Use cases</h4>
            <ul className="space-y-3">
              {["Walks & adventures", "Treats & mealtime", "Rest & comfort", "For curious cats"].map((l) => (
                <li key={l}>
                  <Link href="#collections" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--brand)] transition-all duration-200 inline-block" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-[var(--ink)] text-sm tracking-wider uppercase">Resources</h4>
            <ul className="space-y-3">
              {["FAQ", "Help Center", "Developer API", "Contact Support"].map((l) => (
                <li key={l}>
                  <Link href="#faq" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--brand)] transition-all duration-200 inline-block" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Newsletter mini form */}
            <div className="pt-3">
              <p className="text-xs font-semibold text-[var(--ink)] mb-2">Get pet care tips</p>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 text-xs px-3 py-2 rounded-lg border border-[var(--line)] bg-white focus:outline-none focus:border-[var(--brand)] transition-colors"
                />
                <button type="button" className="px-3 py-2 rounded-lg text-white text-xs font-bold transition-all"
                  style={{ background: "linear-gradient(135deg, #5b21b6, #a855f7)" }}>
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <span>© 2026 Karyz Technologies, Inc. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[var(--ink)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--ink)] transition-colors">Terms of Service</Link>
            <Link href="#top" className="inline-flex items-center gap-1.5 hover:text-[var(--brand)] transition-colors font-semibold group">
              <span>Back to top</span>
              <span className="w-6 h-6 rounded-full border border-[var(--line)] flex items-center justify-center group-hover:border-[var(--brand)] group-hover:bg-[var(--tint)] transition-all">
                <ArrowUp className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
