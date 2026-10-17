"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Heart, Plus, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { CustomSelect } from "@/components/ui/custom-select";
import { products, photo, money } from "@/data/furniture-products";
import { useCommerceStore } from "@/lib/commerce-store";

type FeaturedFurnitureSectionProps = { showAll?: boolean; favoritesOnly?: boolean };

export function FeaturedFurnitureSection({ showAll = false, favoritesOnly = false }: FeaturedFurnitureSectionProps) {
  const category = useCommerceStore((state) => state.category);
  const favorites = useCommerceStore((state) => state.favorites);
  const changeCart = useCommerceStore((state) => state.changeCart);
  const toggleFavorite = useCommerceStore((state) => state.toggleFavorite);
  const setDrawer = useCommerceStore((state) => state.setDrawer);
  const [priceRange, setPriceRange] = useState("all");
  const [sortOrder, setSortOrder] = useState("featured");
  const categoryOptions = [
    { label: "All pieces", value: "Tout voir" },
    { label: "Sofas", value: "Canapés" },
    { label: "Rugs", value: "Tapis" },
    { label: "Mattresses", value: "Matelas" },
    { label: "Armchairs", value: "Fauteuils" },
  ];

  const selection = useMemo(() => {
    const filtered = products.filter((product) => {
      if (favoritesOnly && !favorites.includes(product.id)) return false;
      if (!showAll && !favoritesOnly && category !== "Tout voir" && product.category !== category) return false;
      if (showAll && category !== "Tout voir" && product.category !== category) return false;
      if (priceRange === "under-5000" && product.price >= 5000) return false;
      if (priceRange === "5000-10000" && (product.price < 5000 || product.price > 10000)) return false;
      if (priceRange === "over-10000" && product.price <= 10000) return false;
      return true;
    });

    if (sortOrder === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (sortOrder === "price-high") filtered.sort((a, b) => b.price - a.price);
    if (sortOrder === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [category, favorites, favoritesOnly, priceRange, showAll, sortOrder]);

  return (
    <section data-scroll-reveal className="px-[5.3%] py-24 max-md:px-[5%] max-md:py-[69px]" id="selection">
      <div className="flex items-center justify-between border-b border-line pb-[18px]"><p className="m-0 text-[9px] font-semibold uppercase tracking-[.18em]">{favoritesOnly ? "YOUR FAVORITES" : showAll ? "THE COLLECTION" : <>MAISON EDIT — 2026</>}</p><div className="flex items-center gap-3"><span className="text-[10px] text-muted">{selection.length} pieces</span><div className="flex gap-2"><button className="grid h-[34px] w-[34px] place-items-center rounded-full border border-line transition-colors hover:bg-butter" aria-label="Previous products"><ArrowLeft size={17} /></button><button className="grid h-[34px] w-[34px] place-items-center rounded-full border border-line transition-colors hover:bg-butter" aria-label="Next products"><ArrowRight size={17} /></button></div></div></div>
      {showAll && <div className="mb-8 border-b border-line py-5">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.13em] text-[#77746c]"><SlidersHorizontal size={14} /> Filter by</div>
          <div className="flex flex-1 flex-wrap gap-2 max-md:order-3 max-md:basis-full">
            {categoryOptions.map((option) => <button key={option.value} type="button" onClick={() => useCommerceStore.getState().setCategory(option.value)} aria-pressed={category === option.value} className={`rounded-full border px-4 py-2 text-[10px] transition-colors ${category === option.value ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"}`}>{option.label}</button>)}
          </div>
          <CustomSelect
            label="Price"
            value={priceRange}
            onChange={setPriceRange}
            options={[
              { label: "Any price", value: "all" },
              { label: "Under 5,000 DH", value: "under-5000" },
              { label: "5,000–10,000 DH", value: "5000-10000" },
              { label: "Over 10,000 DH", value: "over-10000" },
            ]}
          />
          <CustomSelect
            label="Sort"
            value={sortOrder}
            onChange={setSortOrder}
            options={[
              { label: "Featured", value: "featured" },
              { label: "Price: low to high", value: "price-low" },
              { label: "Price: high to low", value: "price-high" },
              { label: "Name", value: "name" },
            ]}
          />
        </div>
      </div>}
      {selection.length === 0 ? <div className="grid min-h-60 place-content-center justify-items-center gap-3 text-center text-xs text-[#77746c]"><p>{favoritesOnly ? "You haven’t saved any pieces yet." : "No pieces match these filters."}</p><button className="border-b border-[#a8a59c] py-2 text-[9px] font-semibold uppercase tracking-[.1em]" onClick={() => { useCommerceStore.getState().setCategory("Tout voir"); setPriceRange("all"); }}>Clear filters</button></div> : <div className="grid grid-cols-4 gap-x-5 gap-y-8 pt-7 max-md:grid-cols-2 max-sm:grid-cols-1">{selection.map((product, index) => <article className="group min-w-0" key={product.id}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e2dfd7]"><a href={`/products/${product.id}`} aria-label={`View ${product.name}`}><img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" src={photo(product.image, 1000)} alt={product.name} loading="lazy" /></a><span className="absolute left-3 top-3 bg-paper px-2.5 py-2 text-[8px] tracking-[.12em]">{index === 0 ? "SIGNATURE PIECE" : "NEW ARRIVAL"}</span><button onClick={() => toggleFavorite(product.id)} className={`absolute right-3 top-3 grid h-[35px] w-[35px] place-items-center rounded-full bg-paper transition-colors ${favorites.includes(product.id) ? "text-[#9c5545]" : "text-ink"}`} aria-label={favorites.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}><Heart size={18} strokeWidth={1.5} fill={favorites.includes(product.id) ? "currentColor" : "none"} /></button><button className="absolute inset-x-3 bottom-3 flex min-h-11 translate-y-20 items-center justify-center gap-2 bg-paper/95 text-[9px] font-semibold uppercase tracking-[.1em] transition-transform group-hover:translate-y-0 focus-visible:translate-y-0 max-md:translate-y-0" onClick={() => { changeCart(product.id, 1); setDrawer("cart"); }}><Plus size={17} /> Add to bag</button></div>
        <div className="flex justify-between gap-2 pt-4 max-sm:flex-col"><div><p className="mb-2 mt-0 text-[8px] uppercase tracking-[.13em] text-[#8b8881]">{product.category === "Canapés" ? "Sofas" : product.category === "Tapis" ? "Rugs" : product.category === "Matelas" ? "Mattresses" : "Armchairs"}</p><h3 className="mb-1 mt-0 text-sm font-medium tracking-[-.02em]"><a className="transition-colors hover:text-[#8a7854]" href={`/products/${product.id}`}>{product.name}</a></h3><p className="m-0 text-[10px] text-[#8b8881]">{product.detail}</p></div><strong className="whitespace-nowrap text-[11px] font-semibold max-sm:mt-1">{money(product.price)}</strong></div>
      </article>)}</div>}
      {!showAll && !favoritesOnly && <a className="mt-7 hidden w-fit items-center gap-3 border-b border-[#a8a59c] py-2 text-[9px] font-semibold uppercase tracking-[.1em] max-md:inline-flex" href="/products">Toute la collection <ArrowUpRight size={15} /></a>}
    </section>
  );
}
