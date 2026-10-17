"use client";

import { ArrowUpRight, Heart, Plus } from "lucide-react";
import { products, photo, money } from "@/data/furniture-products";
import { useCommerceStore } from "@/lib/commerce-store";

const imageShapes = [
  "[clip-path:polygon(0_0,86%_0,100%_16%,100%_100%,0_100%)]",
  "[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%,0_16%)]",
  "[clip-path:polygon(0_0,100%_0,100%_86%,87%_100%,0_100%)]",
];

export function EditorialCollectionSection() {
  const category = useCommerceStore((state) => state.category);
  const favorites = useCommerceStore((state) => state.favorites);
  const changeCart = useCommerceStore((state) => state.changeCart);
  const toggleFavorite = useCommerceStore((state) => state.toggleFavorite);
  const setDrawer = useCommerceStore((state) => state.setDrawer);
  const selection = category === "Tout voir"
    ? products
    : products.filter((product) => product.category === category);

  return (
    <section data-scroll-reveal className="bg-paper px-[4.4%] pb-24 pt-[82px] max-md:px-[5%] max-md:pb-[70px] max-md:pt-[58px]" id="selection">
      <div className="mb-[94px] flex items-end justify-between gap-8 max-md:mb-12 max-md:items-start">
        <div>
          <p className="mb-4 mt-0 text-[9px] font-semibold uppercase tracking-[.18em] text-[#77746c]">MAISON · SIGNATURE COLLECTION</p>
          <h2 className="mb-0 mt-0 max-w-[1000px] text-[clamp(52px,7.1vw,118px)] font-normal leading-[.88] tracking-[-.085em] max-md:text-[clamp(49px,12vw,78px)]">
            All — about moments <span className="font-serif text-[#8e8b83]">©26</span>
          </h2>
        </div>
        <a className="mb-1 inline-flex h-[58px] shrink-0 items-center gap-8 border border-ink px-6 text-[9px] font-semibold uppercase tracking-[.14em] transition-colors hover:bg-ink hover:text-paper max-md:h-11 max-md:gap-4 max-md:px-4" href="/products">
          Learn more <ArrowUpRight size={17} />
        </a>
      </div>

      {selection.length === 0 ? (
        <p className="py-20 text-center text-sm text-muted">No pieces in this collection yet.</p>
      ) : (
        <div className="grid grid-cols-1 items-start gap-x-[3.3%] gap-y-10 md:grid-cols-3">
          {selection.map((product, index) => (
            <article className={`group min-w-0 ${index === 1 ? "md:mt-[68px]" : ""}`} key={product.id}>
              <div className={`relative aspect-[.76] overflow-hidden bg-[#dedbd2] ${imageShapes[index % imageShapes.length]}`}>
                <a className="absolute inset-0 block" href="/products" aria-label={`Discover ${product.name}`}>
                  <img className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0" src={photo(product.image, 1200)} alt={product.name} loading="lazy" />
                </a>
                <button onClick={() => toggleFavorite(product.id)} className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-paper/90 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100 max-md:opacity-100 ${favorites.includes(product.id) ? "text-[#9c5545]" : "text-ink"}`} aria-label={favorites.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}>
                  <Heart size={18} strokeWidth={1.5} fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                </button>
                <button className="absolute inset-x-4 bottom-4 flex min-h-12 translate-y-3 items-center justify-center gap-2 bg-paper/95 text-[9px] font-semibold uppercase tracking-[.12em] opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 max-md:translate-y-0 max-md:opacity-100" onClick={() => { changeCart(product.id, 1); setDrawer("cart"); }}>
                  <Plus size={16} /> Add to bag
                </button>
              </div>
              <div className="flex justify-between gap-3 pt-5 max-sm:flex-col">
                <div>
                  <p className="mb-2 mt-0 text-[8px] font-medium uppercase tracking-[.15em] text-[#8b8881]">{product.category}</p>
                  <h3 className="mb-1 mt-0 text-[15px] font-medium tracking-[-.025em]">{product.name}</h3>
                  <p className="m-0 text-[10px] text-[#8b8881]">{product.detail}</p>
                </div>
                <strong className="whitespace-nowrap pt-5 text-[11px] font-medium max-sm:pt-0">{money(product.price)}</strong>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
