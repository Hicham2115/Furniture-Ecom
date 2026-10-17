"use client";

import Navbar from "@/components/comp-577";
import { useCommerceStore } from "@/lib/commerce-store";

export function Header() {
  const cart = useCommerceStore((state) => state.cart);
  const favorites = useCommerceStore((state) => state.favorites);
  const setDrawer = useCommerceStore((state) => state.setDrawer);
  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <>
      <div className="relative flex h-9 items-center overflow-hidden bg-ink text-paper before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-8 before:bg-gradient-to-r before:from-ink before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-8 after:bg-gradient-to-l after:from-ink after:to-transparent sm:h-10 sm:before:w-14 sm:after:w-14">
        <p className="sr-only">Livraison offerte dès 2 000 dirhams. Fabriqué pour durer, choisi pour vous. Un intérieur qui vous ressemble.</p>
        <div data-marquee data-marquee-duration="24000" className="flex w-max items-center will-change-transform" aria-hidden="true">
          {Array.from({ length: 3 }, (_, index) => (
            <span key={index} className="flex shrink-0 items-center gap-4 whitespace-nowrap pr-10 text-[9px] font-medium tracking-[0.1em] sm:gap-7 sm:pr-14 sm:text-[10px] sm:tracking-[0.13em]">
              <span>Livraison offerte dès 2 000 DH</span>
              <i className="text-butter not-italic">✳</i>
              <span>Fabriqué pour durer, choisi pour vous</span>
              <i className="text-butter not-italic">✳</i>
              <span>Un intérieur qui vous ressemble</span>
              <i className="text-butter not-italic">✳</i>
            </span>
          ))}
        </div>
      </div>
      <Navbar
        cartCount={cartCount}
        favoriteCount={favorites.length}
        onMenu={() => setDrawer("menu")}
        onSearch={() => setDrawer("search")}
        onCart={() => setDrawer("cart")}
        onWishlist={() => setDrawer("wishlist")}
      />
    </>
  );
}
