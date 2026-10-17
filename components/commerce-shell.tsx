"use client";

import { ArrowUpRight, Search, X } from "lucide-react";
import { products, photo, money } from "@/data/furniture-products";
import { useCommerceStore } from "@/lib/commerce-store";
import { CartDrawer } from "@/components/cart-drawer";

export function CommerceShell() {
  const drawer = useCommerceStore((state) => state.drawer);
  const query = useCommerceStore((state) => state.query);
  const favorites = useCommerceStore((state) => state.favorites);
  const setDrawer = useCommerceStore((state) => state.setDrawer);
  const setQuery = useCommerceStore((state) => state.setQuery);
  const changeCart = useCommerceStore((state) => state.changeCart);
  const items = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <CartDrawer />
      {(drawer === "menu" || drawer === "search" || drawer === "wishlist") && <div className={`fixed inset-0 z-50 flex ${drawer === "menu" ? "justify-start" : "justify-end"} bg-ink/40 animate-in fade-in duration-300 motion-reduce:animate-none`} onClick={() => setDrawer(null)}>
        <aside className={`flex h-full w-full flex-col bg-paper p-7 ${drawer === "menu" ? "max-w-[520px] animate-in slide-in-from-left duration-500 ease-out motion-reduce:animate-none" : "max-w-[460px] animate-in slide-in-from-right duration-300 ease-out motion-reduce:animate-none"}`} onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-line pb-5 text-sm font-semibold"><span>{drawer === "wishlist" ? "Vos favoris" : drawer === "search" ? "Rechercher" : "Explorer"}</span><button className="grid h-[30px] w-[30px] place-items-center" onClick={() => setDrawer(null)} aria-label="Fermer"><X size={20} /></button></div>
          {drawer === "menu" && <nav className="pt-12">{[["Collections", "/products"], ["Notre maison", "/#histoire"], ["Le journal", "/#newsletter"]].map(([label, href]) => <a className="flex items-center justify-between border-b border-line py-5 text-[clamp(25px,6vw,43px)] tracking-[-.05em]" key={label} href={href} onClick={() => setDrawer(null)}>{label}<ArrowUpRight size={20} /></a>)}</nav>}
          {drawer === "search" && <div className="flex items-center gap-3 border-b border-ink py-5"><Search size={18} /><input className="w-full border-0 bg-transparent text-[13px] outline-none placeholder:text-muted" autoFocus placeholder="Canapé, matelas…" value={query} onChange={(event) => setQuery(event.target.value)} /></div>}
          {drawer === "wishlist" && (favorites.length === 0 ? <div className="m-auto text-center text-xs leading-7 text-[#77746c]"><p>Les pièces que vous aimez apparaîtront ici.</p><a className="border-b border-[#99958b] py-2 text-[9px] font-semibold uppercase tracking-[.1em]" href="/products" onClick={() => setDrawer(null)}>Explorer la collection ↗</a></div> : <div className="flex-1 overflow-auto">{products.filter((product) => favorites.includes(product.id)).map((product) => <div className="grid grid-cols-[95px_1fr] gap-4 border-b border-line py-5" key={product.id}><img className="h-[104px] w-[95px] object-cover" src={photo(product.image, 220)} alt="" /><div><h3 className="mb-2 mt-1 text-[13px] font-medium">{product.name}</h3><p className="m-0 text-[11px] text-[#77746c]">{money(product.price)}</p><a className="mt-3 inline-block border-b border-[#99958b] pb-1 text-[9px] uppercase" href="/favorites" onClick={() => setDrawer(null)}>Voir mes favoris</a></div></div>)}</div>)}
          {drawer === "search" && <div className="flex-1 overflow-auto">{items.map((product) => <div className="grid grid-cols-[95px_1fr] gap-4 border-b border-line py-5" key={product.id}><img className="h-[104px] w-[95px] object-cover" src={photo(product.image, 220)} alt="" /><div><h3 className="mb-2 mt-1 text-[13px] font-medium">{product.name}</h3><p className="m-0 text-[11px] text-[#77746c]">{money(product.price)}</p><button className="mt-3 border-b border-[#99958b] pb-1 text-[9px] uppercase" onClick={() => { changeCart(product.id, 1); setDrawer("cart"); }}>Ajouter au panier +</button></div></div>)}{items.length === 0 && <p className="m-auto text-center text-xs text-[#77746c]">Aucun résultat pour « {query} ».</p>}</div>}
        </aside>
      </div>}
    </>
  );
}
