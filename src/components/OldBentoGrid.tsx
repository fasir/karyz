"use client";

import React from "react";
import Image from "next/image";

const CARDS = [
  {
    num: "01",
    title: "Product & Catalogue Management",
    desc: "Manage products, categories, pricing, stock and your complete B2B catalogue from one place.",
    img: "/product-catalogue-management.jpg",
    alt: "Product and Catalogue Management",
  },
  {
    num: "02",
    title: "Your Own Branded Store",
    desc: "Launch a professional B2B online store with your own domain, logo, brand colors and customer experience.",
    img: "/branded-store.jpg",
    alt: "Your Own Branded Store",
  },
  {
    num: "03",
    title: "Distribution Management",
    desc: "Connect and manage suppliers, distributors, sub-distributors and retailers through one platform.",
    img: "/distribution-management.jpg",
    alt: "Distribution Management",
  },
  {
    num: "04",
    title: "Inventory Management",
    desc: "Track stock, warehouses, transfers and product availability across your distribution network.",
    img: "/Inventory-Management.jpg",
    alt: "Inventory Management",
  },
  {
    num: "05",
    title: "Order Management",
    desc: "Receive, process and track B2B orders from distributors and retailers in real time.",
    img: "/order-management.jpg",
    alt: "Order Management",
  },
  {
    num: "06",
    title: "Reports & Analytics",
    desc: "Get clear insights into sales, products, inventory, customers and distribution performance.",
    img: "/Reports-Analytics.jpg",
    alt: "Reports and Analytics",
  },
];

export function BentoGrid() {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="features" className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
            Everything you need to power your{" "}
            <span className="brand-gradient-text">B2B distribution business</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
            From products and inventory to online ordering and distribution management — Karyz brings your entire business together in one platform.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.num}
              onPointerMove={handlePointerMove}
              className="spotlight-card group flex flex-col bg-white border border-[var(--line)] rounded-[28px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1 hover:border-[var(--brand)]/40"
            >
              {/* Image */}
              <div className="relative h-[200px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[var(--brand)] mb-2">
                  {card.num}
                </span>
                <h3 className="text-lg font-bold text-[var(--ink)] leading-snug tracking-tight group-hover:text-[var(--brand)] transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
