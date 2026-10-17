"use client";

import { create } from "zustand";
import type { DrawerName } from "@/lib/commerce";

type CommerceState = {
  cart: Record<string, number>;
  favorites: string[];
  category: string;
  drawer: DrawerName;
  query: string;
  setDrawer: (drawer: DrawerName) => void;
  setQuery: (query: string) => void;
  setCategory: (category: string) => void;
  changeCart: (id: string, amount: number) => void;
  toggleFavorite: (id: string) => void;
};

export const useCommerceStore = create<CommerceState>((set) => ({
  cart: {},
  favorites: [],
  category: "Tout voir",
  drawer: null,
  query: "",
  setDrawer: (drawer) => set({ drawer }),
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  changeCart: (id, amount) => set((state) => {
    const count = Math.max(0, (state.cart[id] || 0) + amount);
    const cart = { ...state.cart };
    if (count === 0) delete cart[id];
    else cart[id] = count;
    return { cart };
  }),
  toggleFavorite: (id) => set((state) => ({
    favorites: state.favorites.includes(id)
      ? state.favorites.filter((favorite) => favorite !== id)
      : [...state.favorites, id],
  })),
}));
