"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import type { Product } from "@/data/furniture-products";
import { money, photo, products } from "@/data/furniture-products";
import { useCommerceStore } from "@/lib/commerce-store";
import { Header } from "@/layout/header";
import { Footer } from "@/components/footer";

const extraImages = [
  "photo-1600210492486-724fe5c67fb0",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1616486338812-3dadae4b4ace",
];

export function ProductDetailPage({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const isFavorite = useCommerceStore((state) => state.favorites.includes(product.id));
  const toggleFavorite = useCommerceStore((state) => state.toggleFavorite);
  const changeCart = useCommerceStore((state) => state.changeCart);
  const setDrawer = useCommerceStore((state) => state.setDrawer);
  const gallery = [product.image, ...extraImages];
  const related = products.filter((item) => item.id !== product.id);

  function addToBag() {
    changeCart(product.id, quantity);
    setDrawer("cart");
  }

  return (
    <>
      <div id="top"><Header /></div>
      <main className="bg-[#fbf9f8]" id="product-detail">
        <div className="px-[5.3%] pt-7 max-md:px-[5%]">
          <a className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[.14em] text-[#77746c] transition-colors hover:text-ink" href="/products">
            <ArrowLeft size={14} /> Back to the collection
          </a>
        </div>

        <section data-scroll-reveal className="grid grid-cols-[1.12fr_.88fr] gap-[7%] px-[5.3%] pb-[110px] pt-7 max-md:grid-cols-1 max-md:gap-9 max-md:px-[5%] max-md:pb-[70px]">
          <div className="grid grid-cols-[84px_1fr] gap-4 max-sm:grid-cols-1">
            <div className="order-first flex flex-col gap-3 max-sm:order-last max-sm:flex-row">
              {gallery.map((image, index) => (
                <button
                  className={`aspect-[4/5] w-full overflow-hidden border transition-colors max-sm:w-[68px] ${activeImage === index ? "border-ink" : "border-transparent opacity-65 hover:opacity-100"}`}
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View product image ${index + 1}`}
                  aria-pressed={activeImage === index}
                >
                  <img className="h-full w-full object-cover" src={photo(image, 240)} alt="" />
                </button>
              ))}
            </div>
            <div className="relative aspect-[.82] overflow-hidden bg-[#e8e5df] max-sm:aspect-[.9]">
              <img className="h-full w-full object-cover transition-opacity duration-300" src={photo(gallery[activeImage], 1400)} alt={product.name} />
              <span className="absolute left-5 top-5 bg-[#fbf9f8] px-3 py-2 text-[8px] font-medium uppercase tracking-[.13em]">MAISON signature</span>
              <span className="absolute bottom-5 right-5 text-[10px] tracking-[.12em] text-white drop-shadow">0{activeImage + 1} / 0{gallery.length}</span>
            </div>
          </div>

          <div className="sticky top-8 self-start pt-6 max-md:static max-md:pt-0">
            <p className="mb-4 mt-0 text-[9px] font-semibold uppercase tracking-[.18em] text-[#8a7854]">
              {product.category === "Canapés" || product.category === "Tapis" ? "Living room" : product.category === "Matelas" ? "Bedroom" : "Lounge"} <span className="px-2 text-[#aaa69a]">/</span> Made for living
            </p>
            <h1 className="mb-4 mt-0 text-[clamp(45px,5.7vw,76px)] font-medium leading-[.92] tracking-[-.075em] max-md:text-[clamp(43px,11vw,64px)]">
              {product.name}
            </h1>
            <p className="mb-6 mt-0 text-[13px] text-[#77746c]">{product.detail}</p>
            <p className="mb-7 mt-0 text-[19px] font-medium tracking-[-.03em]">{money(product.price)}</p>
            <p className="mb-8 mt-0 max-w-[470px] text-[13px] leading-[1.8] text-[#65625c]">{product.description}</p>

            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-[51px] items-center border border-[#d3d0c8]">
                <button className="grid h-full w-12 place-items-center transition-colors hover:bg-[#eeece6]" type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity"><Minus size={14} /></button>
                <span className="w-7 text-center text-[12px]" aria-live="polite">{quantity}</span>
                <button className="grid h-full w-12 place-items-center transition-colors hover:bg-[#eeece6]" type="button" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity"><Plus size={14} /></button>
              </div>
              <button className="flex h-[51px] flex-1 items-center justify-center gap-3 bg-[#242320] px-5 text-[10px] font-semibold uppercase tracking-[.14em] text-white transition-colors hover:bg-[#514d43]" type="button" onClick={addToBag}>
                Add to bag <span className="text-[#c6b995]">·</span> {money(product.price * quantity)}
              </button>
              <button className={`grid h-[51px] w-[51px] shrink-0 place-items-center border transition-colors ${isFavorite ? "border-[#9c5545] text-[#9c5545]" : "border-[#d3d0c8] hover:border-ink"}`} type="button" onClick={() => toggleFavorite(product.id)} aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}>
                <Heart size={19} strokeWidth={1.4} fill={isFavorite ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2 text-[9px] text-[#77746c]">
              <span className="inline-flex items-center gap-2"><Truck size={14} /> Complimentary delivery over 2,000 DH</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={14} /> Carefully selected materials</span>
            </div>

            <div className="border-t border-[#d8d5cf]">
              {[
                ["Details", `${product.description} Designed with thoughtful proportions and lasting materials.`],
                ["Delivery & care", "Complimentary delivery on orders over 2,000 DH. We’ll coordinate delivery with you and share care guidance for your piece."],
              ].map(([title, content]) => (
                <details className="group border-b border-[#d8d5cf]" key={title}>
                  <summary className="flex min-h-[58px] cursor-pointer list-none items-center justify-between text-[11px] font-medium [&::-webkit-details-marker]:hidden">{title}<Plus size={15} className="transition-transform group-open:rotate-45" /></summary>
                  <p className="mb-0 max-w-[460px] pb-5 text-[11px] leading-[1.75] text-[#77746c]">{content}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section data-scroll-reveal className="bg-[#eeece6] px-[7%] py-[92px] max-md:px-[5%] max-md:py-[58px]">
          <div className="mb-9 flex items-end justify-between gap-5 border-b border-[#d3d0c8] pb-6 max-sm:mb-6 max-sm:items-start">
            <div><p className="mb-3 mt-0 text-[9px] font-semibold uppercase tracking-[.18em] text-[#77746c]">COMPLETE THE ROOM <span className="px-2 text-[#aaa69a]">—</span> MAISON EDIT</p><h2 className="mb-0 mt-0 text-[clamp(37px,5vw,66px)] font-normal leading-[.94] tracking-[-.08em]">You may also <em className="font-serif text-[#89867d]">love.</em></h2></div>
            <a className="mb-1 inline-flex shrink-0 items-center gap-2 border-b border-[#aaa69a] pb-2 text-[9px] font-semibold uppercase tracking-[.12em] transition-all hover:gap-4 hover:border-ink max-sm:mt-1" href="/products">View all <ArrowRight size={14} /></a>
          </div>
          <div className="grid grid-cols-2 gap-6 max-md:gap-4 max-sm:grid-cols-1">
            {related.map((item) => (
              <a className="group relative overflow-hidden border border-[#d5d1c9] bg-[#fbf9f8] transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-[#a99a75] hover:shadow-[0_18px_40px_rgba(36,35,31,.09)]" href={`/products/${item.id}`} key={item.id}>
                <div className="relative aspect-[1.35] overflow-hidden bg-[#d8d5ce]">
                  <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" src={photo(item.image, 900)} alt={item.name} />
                  <span className="absolute left-4 top-4 bg-[#fbf9f8]/95 px-3 py-2 text-[8px] font-medium uppercase tracking-[.14em] text-[#55524f]">{item.category === "Canapés" || item.category === "Tapis" ? "Living room" : item.category === "Matelas" ? "Bedroom" : "Lounge"}</span>
                  <span className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-[#fbf9f8] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowRight size={16} /></span>
                </div>
                <div className="flex items-end justify-between gap-4 px-5 py-5 max-sm:px-4 max-sm:py-4">
                  <div>
                    <p className="mb-2 mt-0 text-[8px] uppercase tracking-[.13em] text-[#8b8881]">{item.detail}</p>
                    <h3 className="mb-0 mt-0 text-[19px] font-medium tracking-[-.04em] transition-colors group-hover:text-[#8a7854] max-sm:text-[17px]">{item.name}</h3>
                  </div>
                  <span className="shrink-0 text-[12px] font-medium">{money(item.price)}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
