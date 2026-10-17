"use client";

import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { products, photo, money } from "@/data/furniture-products";
import { useCommerceStore } from "@/lib/commerce-store";

export function CartDrawer() {
  const drawer = useCommerceStore((state) => state.drawer);
  const cart = useCommerceStore((state) => state.cart);
  const changeCart = useCommerceStore((state) => state.changeCart);
  const setDrawer = useCommerceStore((state) => state.setDrawer);
  const cartItems = products.filter((product) => cart[product.id]);
  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const total = cartItems.reduce((sum, product) => sum + product.price * cart[product.id], 0);

  if (drawer !== "cart") return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink/40" onClick={() => setDrawer(null)}>
      <aside className="flex h-full w-full max-w-[460px] flex-col bg-paper p-7" onClick={(event) => event.stopPropagation()} aria-label="Votre panier">
        <div className="flex items-center justify-between border-b border-line pb-5 text-sm font-semibold"><span>Votre panier</span><button className="grid h-[30px] w-[30px] place-items-center" onClick={() => setDrawer(null)} aria-label="Fermer"><X size={20} /></button></div>
        {cartItems.length === 0 ? <div className="m-auto text-center text-xs leading-7 text-[#77746c]"><p>Votre panier attend sa première pièce.</p><a className="border-b border-[#99958b] py-2 text-[9px] font-semibold uppercase tracking-[.1em]" href="/products" onClick={() => setDrawer(null)}>Découvrir les collections ↗</a></div> : <div className="flex-1 overflow-auto">{cartItems.map((product) => <div className="grid grid-cols-[95px_1fr] gap-4 border-b border-line py-5" key={product.id}>
          <img className="h-[104px] w-[95px] object-cover" src={photo(product.image, 220)} alt="" />
          <div><h3 className="mb-2 mt-1 text-[13px] font-medium">{product.name}</h3><p className="m-0 text-[11px] text-[#77746c]">{money(product.price)}</p><div className="mt-4 flex w-[85px] items-center justify-between border border-line"><button className="grid h-6 w-[26px] place-items-center" onClick={() => changeCart(product.id, -1)} aria-label="Retirer un article"><Minus size={13} /></button><span className="text-[10px]">{cart[product.id]}</span><button className="grid h-6 w-[26px] place-items-center" onClick={() => changeCart(product.id, 1)} aria-label="Ajouter un article"><Plus size={13} /></button></div></div>
        </div>)}</div>}
        {cartCount > 0 && <div className="border-t border-line pt-[18px]"><div className="mb-[18px] flex justify-between text-xs"><span>Sous-total</span><strong>{money(total)}</strong></div><button className="flex h-12 w-full items-center justify-center gap-3 bg-ink text-[9px] uppercase tracking-[.1em] text-white" onClick={() => setDrawer(null)}>Continuer mes achats <ArrowRight size={16} /></button><small className="mt-2 block text-center text-[9px] text-[#8c8981]">Livraison calculée à l’étape suivante.</small></div>}
      </aside>
    </div>
  );
}
