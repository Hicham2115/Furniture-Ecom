export type Product = {
  id: string;
  name: string;
  detail: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  { id: "canape-nuage", name: "Canapé Nuage", detail: "Tissu bouclé · Écru", price: 12900, category: "Canapés", image: "photo-1555041469-a586c61ea9bc" },
  { id: "matelas-serein", name: "Matelas Serein", detail: "Ressorts ensachés · 160 × 200", price: 500, category: "Matelas", image: "photo-1631679706909-1844bbd07221" },
  { id: "fauteuil-ligne", name: "Fauteuil Ligne", detail: "Chêne massif · Laine naturelle", price: 4850, category: "Fauteuils", image: "photo-1567538096630-e0c55bd6374c" },
];

export function photo(id: string, width = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export function money(amount: number) {
  return new Intl.NumberFormat("fr-MA").format(amount) + " DH";
}
