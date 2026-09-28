import React from "react";
import Link from "next/link";
import { ArrowUp, PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] pt-16 pb-12 text-sm text-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Link href="#top" className="inline-flex items-center gap-2 text-[var(--ink)]" aria-label="Paw and Whisker home">
              <PawPrint className="w-7 h-7 text-[var(--brand)]" />
              <span className="font-display text-lg font-bold">Paw &amp; Whisker</span>
            </Link>
            <p className="max-w-xs text-sm text-[var(--muted)] leading-relaxed">
              Thoughtful little essentials for the pets who make life a lot more fun.
            </p>
          </div>

          {/* Links Column 1: Product */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-[var(--ink)] text-sm tracking-wider uppercase">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#products" className="hover:text-[var(--ink)] transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="#collections" className="hover:text-[var(--ink)] transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#promise" className="hover:text-[var(--ink)] transition-colors">
                  Our promise
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[var(--ink)] transition-colors">
                  Shop all
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Use Cases */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-[var(--ink)] text-sm tracking-wider uppercase">
              Use cases
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#collections" className="hover:text-[var(--ink)] transition-colors">
                  Walks & adventures
                </Link>
              </li>
              <li>
                <Link href="#collections" className="hover:text-[var(--ink)] transition-colors">
                  Treats & mealtime
                </Link>
              </li>
              <li>
                <Link href="#collections" className="hover:text-[var(--ink)] transition-colors">
                  Rest & comfort
                </Link>
              </li>
              <li>
                <Link href="#collections" className="hover:text-[var(--ink)] transition-colors">
                  For curious cats
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Resources */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-semibold text-[var(--ink)] text-sm tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#faq" className="hover:text-[var(--ink)] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--ink)] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--ink)] transition-colors">
                  Developer API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--ink)] transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2026 Karyz Technologies, Inc. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[var(--ink)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[var(--ink)] transition-colors">
              Terms of Service
            </Link>
            <Link
              href="#top"
              className="inline-flex items-center gap-1 hover:text-[var(--ink)] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
