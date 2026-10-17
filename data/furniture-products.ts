export type Product = {
  id: string;
  name: string;
  detail: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export const rugImage = "photo-1595595183083-d40937b04cf3";
export const sofaImage = "photo-1760611656185-57a618917619";

export const products: Product[] = [
  { id: "canape-nuage", name: "Canapé Nuage", detail: "Tissu bouclé · Écru", price: 12900, category: "Canapés", image: sofaImage, description: "A generous, softly sculpted sofa designed for slow mornings and long evenings. Its textured boucle upholstery and relaxed proportions bring an easy warmth to the living room." },
  { id: "matelas-serein", name: "Matelas Serein", detail: "Ressorts ensachés · 160 × 200", price: 500, category: "Matelas", image: "photo-1631679706909-1844bbd07221", description: "A calm, supportive foundation for better rest. Individually wrapped springs adapt to your movement, while the breathable finish keeps the bed feeling fresh through the night." },
  { id: "tapis-berbere", name: "Tapis Berbère", detail: "Laine tissée · Écru", price: 3200, category: "Tapis", image: rugImage, description: "A handwoven wool rug with a soft natural texture, bringing warmth and a grounded feel to the living room." },
  { id: "fauteuil-ligne", name: "Fauteuil Ligne", detail: "Chêne massif · Laine naturelle", price: 4850, category: "Fauteuils", image: "photo-1567538096630-e0c55bd6374c", description: "A considered balance of solid oak and natural wool. Ligne brings a quiet architectural presence to a reading corner, bedroom, or the space beside your favorite window." },
];

export function photo(id: string, width = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export function money(amount: number) {
  return new Intl.NumberFormat("fr-MA").format(amount) + " DH";
}
