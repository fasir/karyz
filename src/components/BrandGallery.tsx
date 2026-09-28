import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const COLLECTIONS = [
  {
    title: "Walks & adventures",
    description: "Harnesses, leads, and outdoor essentials.",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1000&q=80",
    alt: "Dog exploring outside",
  },
  {
    title: "Treats & mealtime",
    description: "Good things for every bowl and break.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1000&q=80",
    alt: "Pet food and treat essentials",
  },
  {
    title: "Rest & cozy corners",
    description: "Soft landing spots for well-earned naps.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80",
    alt: "Small dog relaxing at home",
  },
  {
    title: "For curious cats",
    description: "Playful picks for indoor explorers.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80",
    alt: "Curious cat looking at the camera",
  },
];

export function BrandGallery() {
  return (
    <section id="collections" className="py-20 md:py-28 bg-[var(--alt)] border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold text-[var(--brand)] uppercase tracking-wider block mb-2">
              Shop by moment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight">
              Made for their <span className="brand-gradient-text">kind of day.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm sm:text-base text-[var(--muted)]">
            From the first morning walk to the last cozy stretch, find a favorite for every routine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {COLLECTIONS.map((collection) => (
            <a
              key={collection.title}
              href="#products"
              className="group relative min-h-[300px] sm:min-h-[360px] overflow-hidden rounded-2xl bg-[var(--ink)]"
            >
              <Image
                src={collection.image}
                alt={collection.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-xl font-bold">{collection.title}</h3>
                <p className="mt-1 text-sm text-white/80">{collection.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                  Explore collection <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}