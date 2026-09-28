"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, Star } from "lucide-react";

interface ProductRow {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  alt: string;
  badge: string;
}

const PRODUCTS: ProductRow[] = [
  {
    id: "1",
    name: "Everyday Trail Harness",
    type: "Walk essentials",
    price: 32,
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=800&q=80",
    alt: "Dog ready for an outdoor walk",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Salmon Bites",
    type: "Treats & mealtime",
    price: 14,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
    alt: "Natural pet food and treats",
    badge: "Small batch",
  },
  {
    id: "3",
    name: "Cloud Nine Cushion",
    type: "Rest & comfort",
    price: 58,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    alt: "Small white dog relaxing at home",
    badge: "Made for naps",
  },
];

export function ProductManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="products" className="py-20 md:py-28 bg-[var(--surface)] border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block mb-2">
              The tail-wagging favorites
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
              Little things. <span className="brand-gradient-text">Big joy.</span>
            </h2>
            <p className="mt-3 text-base text-[var(--muted)] max-w-xl">
              Useful, comfy, and ready for the next walk, nap, or treat break.
            </p>
          </div>
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
            <input
              type="search"
              placeholder="Find an accessory"
              aria-label="Search pet accessories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--ink)] focus:outline-none focus:border-[var(--brand)] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group overflow-hidden bg-[var(--surface)] border border-[var(--line)] rounded-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--tint)]">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 px-3 py-1 rounded-full bg-[var(--surface)]/95 text-xs font-semibold text-[var(--ink)]">
                  {product.badge}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-[var(--muted)]">{product.type}</p>
                    <h3 className="mt-1 text-lg font-bold text-[var(--ink)]">{product.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-amber-500" aria-label="Rated five out of five">
                      {Array.from({ length: 5 }, (_, index) => <Star key={index} className="w-3 h-3 fill-current" />)}
                      <span className="ml-1 text-xs text-[var(--muted)]">Loved by pets</span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[var(--ink)]">${product.price}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setAddedProduct(product.id)}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 bg-[var(--ink)] text-white text-sm font-semibold hover:bg-[var(--brand)] transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {addedProduct === product.id ? "Added to your bag" : "Add to bag"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
