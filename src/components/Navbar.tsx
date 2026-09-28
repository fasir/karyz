"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Scroll indicator bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--brand)] via-[var(--brand2)] to-fuchsia-400 z-50 transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line)] transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between h-18 gap-4">
            {/* Logo */}
            <Link
              href="#top"
              className="flex items-center gap-2 group transition-transform duration-200 active:scale-95"
              aria-label="Karyz home"
            >
              <div className="relative h-12 w-24 sm:h-14 sm:w-28">
                <Image
                  src="/logo.png"
                  alt="Karyz"
                  width={150}
                  height={82}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[var(--muted)]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--ink)] transition-colors duration-200 hover:scale-105 inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Account and store actions */}
            <div className="flex items-center gap-3">
              <Link
                href="#products"
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-[var(--line)] text-[var(--ink)] hover:border-[var(--brand)] hover:bg-[var(--tint)] transition-all"
              >
                Login
              </Link>

              <Link
                href="/create-store"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full text-white bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] shadow-md hover:shadow-purple-500/25 hover:opacity-95 active:scale-95 transition-all"
              >
                <span>Create store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--tint)] transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--line)] bg-[var(--surface)] px-4 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl font-medium text-[var(--ink)] hover:bg-[var(--tint)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-[var(--line)] flex flex-col gap-2">
                <Link
                  href="#login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-full border border-[var(--line)] font-semibold text-sm text-[var(--ink)]"
                >
                  Login
                </Link>
                <Link
                  href="/create-store"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] text-white font-semibold text-sm shadow-md"
                >
                  Create store
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
