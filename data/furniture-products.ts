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
export const armchairImage = "photo-1770316320132-e082373dd3f6";
export const bedImage = "photo-1617325247661-675ab4b64ae2";
export const upholsteredBedImage = "photo-1505693416388-ac5ce068fe85";
export const bedroomLampImage = "photo-1522771739844-6a9f6d5f14af";
export const blueHeadboardImage = "photo-1566665797739-1674de7a421a";
export const whiteBedLinenImage = "photo-1599202937077-3f7cdc53f2e1";
export const salonGraySetImage = "photo-1600121848594-d8644e57abab";
export const salonWindowImage = "photo-1691566766200-d205d82ba263";
export const salonWindowTwoImage = "photo-1721521912341-8d1c02a9d696";

export const products: Product[] = [
  { id: "canape-nuage", name: "Canapé Nuage", detail: "Tissu bouclé · Écru", price: 12900, category: "Canapés", image: sofaImage, description: "A generous, softly sculpted sofa designed for slow mornings and long evenings. Its textured boucle upholstery and relaxed proportions bring an easy warmth to the living room." },
  { id: "lit-alba", name: "Lit Alba", detail: "Chêne massif · 160 × 200", price: 11800, category: "Lits", image: bedImage, description: "A calm, low-profile bed in solid oak, with a softly framed headboard and considered proportions. Alba brings natural warmth and a quiet sense of retreat to the bedroom." },
  { id: "matelas-serein", name: "Matelas Serein", detail: "Ressorts ensachés · 160 × 200", price: 500, category: "Matelas", image: "photo-1631679706909-1844bbd07221", description: "A calm, supportive foundation for better rest. Individually wrapped springs adapt to your movement, while the breathable finish keeps the bed feeling fresh through the night." },
  { id: "tapis-berbere", name: "Tapis Berbère", detail: "Laine tissée · Écru", price: 3200, category: "Tapis", image: rugImage, description: "A handwoven wool rug with a soft natural texture, bringing warmth and a grounded feel to the living room." },
  { id: "lit-nacre", name: "Lit Nacré", detail: "Tête de lit tapissée · 160 × 200", price: 14200, category: "Lits", image: upholsteredBedImage, description: "An upholstered bed with a gently cushioned headboard and a relaxed, inviting silhouette. Its tactile neutral fabric makes the bedroom feel softer without losing its clean lines." },
  { id: "lit-bleu", name: "Lit Azur (démo)", detail: "Tête de lit bleue · 160 × 200", price: 9750, category: "Lits", image: blueHeadboardImage, description: "A sample bed listing created for the storefront preview. Product name, details, and price are placeholders." },
  { id: "lit-veilleuse", name: "Lit Minuit (démo)", detail: "Bois brun · 140 × 200", price: 8900, category: "Lits", image: bedroomLampImage, description: "A sample bed listing created for the storefront preview. Product name, details, and price are placeholders." },
  { id: "lit-lin", name: "Lit Lin (démo)", detail: "Linge naturel · 160 × 200", price: 11200, category: "Lits", image: whiteBedLinenImage, description: "A sample bed listing created for the storefront preview. Product name, details, and price are placeholders." },
  { id: "salon-nuage-demo", name: "Salon Nuage (démo)", detail: "Salon contemporain · Écru", price: 18900, category: "Canapés", image: salonGraySetImage, description: "A sample salon listing created for the storefront preview. Product name, details, and price are placeholders." },
  { id: "salon-lumiere-demo", name: "Salon Lumière (démo)", detail: "Salon côté fenêtre · Naturel", price: 22400, category: "Canapés", image: salonWindowImage, description: "A sample salon listing created for the storefront preview. Product name, details, and price are placeholders." },
  { id: "salon-atelier-demo", name: "Salon Atelier (démo)", detail: "Salon design · Tons doux", price: 16750, category: "Canapés", image: salonWindowTwoImage, description: "A sample salon listing created for the storefront preview. Product name, details, and price are placeholders." },
];

export function photo(id: string, width = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export function money(amount: number) {
  return new Intl.NumberFormat("fr-MA").format(amount) + " DH";
}
