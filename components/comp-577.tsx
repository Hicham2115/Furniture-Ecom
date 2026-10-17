"use client";

import { Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  cartCount: number;
  favoriteCount: number;
  onMenu: () => void;
  onSearch: () => void;
  onCart: () => void;
  onWishlist: () => void;
};

export default function Navbar({ cartCount, favoriteCount, onMenu, onSearch, onCart, onWishlist }: NavbarProps) {
  const iconClass = "relative !h-9 !w-9 !rounded-full !bg-transparent !p-0 !text-ink hover:!bg-sand focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#9b8352]";

  return (
    <header className="relative z-10 flex h-[72px] items-center justify-between border-b border-ink/10 bg-[#fbf9f8] px-[4.35%] shadow-[0_2px_4px_rgba(0,0,0,.04)] max-md:h-[60px] max-md:px-[19px]">
      <Button variant="ghost" size="icon" className={`${iconClass} inline-flex md:hidden`} onClick={onMenu} aria-label="Ouvrir le menu"><Menu size={22} strokeWidth={1.5} /></Button>
      <nav className="hidden items-center gap-10 md:flex" aria-label="Navigation principale"><a className="text-[11px] uppercase tracking-[.2em] transition-colors hover:text-[#9b8352]" href="/products">Products</a><a className="text-[11px] uppercase tracking-[.2em] transition-colors hover:text-[#9b8352]" href="/#histoire">About us</a><a className="text-[11px] uppercase tracking-[.2em] transition-colors hover:text-[#9b8352]" href="/#contact">Contact us</a></nav>
      <a href="/" className="absolute left-1/2 -translate-x-1/2 text-[37px] font-bold tracking-[-.07em] max-md:text-[27px]">MAISON</a>
      <div className="ml-auto flex items-center justify-end gap-[18px] max-md:gap-3">
        <Button variant="ghost" size="icon" className={iconClass} aria-label="Rechercher" onClick={onSearch}><Search size={21} strokeWidth={1.5} /></Button>
        <Button variant="ghost" size="icon" className={`${iconClass} [&>span]:absolute [&>span]:right-[-3px] [&>span]:top-[-1px] [&>span]:grid [&>span]:min-h-[14px] [&>span]:min-w-[14px] [&>span]:place-items-center [&>span]:rounded-full [&>span]:bg-butter [&>span]:px-[3px] [&>span]:text-[8px]`} aria-label={`Panier, ${cartCount} article${cartCount > 1 ? "s" : ""}`} onClick={onCart}><ShoppingBag size={21} strokeWidth={1.5} />{cartCount > 0 && <span>{cartCount}</span>}</Button>
        <Button variant="ghost" size="icon" className={`${iconClass} [&>span]:absolute [&>span]:right-0 [&>span]:top-1 [&>span]:h-[5px] [&>span]:w-[5px] [&>span]:rounded-full [&>span]:bg-[#bc8d50]`} aria-label="Favoris" onClick={onWishlist}><Heart size={21} strokeWidth={1.5} />{favoriteCount > 0 && <span />}</Button>
      </div>
    </header>
  );
}
