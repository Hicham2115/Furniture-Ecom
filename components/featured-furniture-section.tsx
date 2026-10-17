"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Heart, Plus } from "lucide-react";
import { products, photo, money } from "@/data/furniture-products";
import { useCommerceStore } from "@/lib/commerce-store";

type FeaturedFurnitureSectionProps = { showAll?: boolean; favoritesOnly?: boolean };

export function FeaturedFurnitureSection({ showAll = false, favoritesOnly = false }: FeaturedFurnitureSectionProps) {
  const category = useCommerceStore((state) => state.category);
  const favorites = useCommerceStore((state) => state.favorites);
  const changeCart = useCommerceStore((state) => state.changeCart);
  const toggleFavorite = useCommerceStore((state) => state.toggleFavorite);
  const setDrawer = useCommerceStore((state) => state.setDrawer);
  const selection = products.filter((product) => {
    if (favoritesOnly && !favorites.includes(product.id)) return false;
    if (showAll || favoritesOnly || category === "Tout voir") return true;
    return product.category === category;
  });

  return (
    <section data-scroll-reveal className="px-[5.3%] py-24 max-md:px-[5%] max-md:py-[69px]" id="selection">
      <div className="flex items-center justify-between border-b border-line pb-[18px]"><p className="m-0 text-[9px] font-semibold uppercase tracking-[.18em]">{favoritesOnly ? "VOS PIÈCES PRÉFÉRÉES" : showAll ? "TOUTES LES PIÈCES" : <>LA SÉLECTION DAR <span className="px-2 text-[#aaa69a]">—</span> 2026</>}</p><div className="flex gap-2"><button className="grid h-[34px] w-[34px] place-items-center rounded-full border border-line transition-colors hover:bg-butter" aria-label="Précédent"><ArrowLeft size={17} /></button><button className="grid h-[34px] w-[34px] place-items-center rounded-full border border-line transition-colors hover:bg-butter" aria-label="Suivant"><ArrowRight size={17} /></button></div></div>
      {selection.length === 0 ? <div className="grid min-h-60 place-content-center justify-items-center gap-3 text-center text-xs text-[#77746c]"><p>{favoritesOnly ? "Vous n’avez pas encore enregistré de pièce." : "Aucun produit dans cette sélection pour le moment."}</p><a className="inline-flex items-center gap-3 border-b border-[#a8a59c] py-2 text-[9px] font-semibold uppercase tracking-[.1em]" href="/products">Explorer les collections <ArrowUpRight size={15} /></a></div> : <div className="grid grid-cols-1 gap-x-5 gap-y-8 pt-7 sm:grid-cols-2 lg:grid-cols-3">{selection.map((product, index) => <article className="group min-w-0" key={product.id}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e2dfd7]"><img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" src={photo(product.image, 1000)} alt={product.name} loading="lazy" /><span className="absolute left-3 top-3 bg-paper px-2.5 py-2 text-[8px] tracking-[.12em]">{index === 0 ? "PIÈCE SIGNATURE" : "NOUVEAU"}</span><button onClick={() => toggleFavorite(product.id)} className={`absolute right-3 top-3 grid h-[35px] w-[35px] place-items-center rounded-full bg-paper transition-colors ${favorites.includes(product.id) ? "text-[#9c5545]" : "text-ink"}`} aria-label={favorites.includes(product.id) ? "Retirer des favoris" : "Ajouter aux favoris"}><Heart size={18} strokeWidth={1.5} fill={favorites.includes(product.id) ? "currentColor" : "none"} /></button><button className="absolute inset-x-3 bottom-3 flex min-h-11 translate-y-20 items-center justify-center gap-2 bg-paper/95 text-[9px] font-semibold uppercase tracking-[.1em] transition-transform group-hover:translate-y-0 focus-visible:translate-y-0 max-md:translate-y-0" onClick={() => { changeCart(product.id, 1); setDrawer("cart"); }}><Plus size={17} /> Ajouter au panier</button></div>
        <div className="flex justify-between gap-2 pt-4 max-sm:flex-col"><div><h3 className="mb-1 mt-0 text-sm font-medium tracking-[-.02em]">{product.name}</h3><p className="m-0 text-[10px] text-[#8b8881]">{product.detail}</p></div><strong className="whitespace-nowrap text-[11px] font-semibold max-sm:mt-1">{money(product.price)}</strong></div>
      </article>)}</div>}
      {!showAll && !favoritesOnly && <a className="mt-7 hidden w-fit items-center gap-3 border-b border-[#a8a59c] py-2 text-[9px] font-semibold uppercase tracking-[.1em] max-md:inline-flex" href="/products">Toute la collection <ArrowUpRight size={15} /></a>}
    </section>
  );
}
