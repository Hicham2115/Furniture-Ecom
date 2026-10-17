import { FeaturedFurnitureSection } from "@/components/featured-furniture-section";
import { Footer } from "@/components/footer";
import { Header } from "@/layout/header";

export function ProductsPage() {
  return <><Header /><main className="min-h-[65vh]" id="top"><div className="px-[8%] pb-5 pt-[70px] max-md:px-[6%] max-md:pt-[52px]"><p className="m-0 text-[9px] font-semibold uppercase tracking-[.18em]">DAR — COLLECTIONS</p><h1 className="mb-0 mt-5 text-[clamp(50px,8vw,94px)] font-normal leading-[.9] tracking-[-.08em]">Des pièces pour<br /><em className="font-serif text-[#8b887f]">vivre mieux.</em></h1></div><FeaturedFurnitureSection showAll /></main><Footer /></>;
}
