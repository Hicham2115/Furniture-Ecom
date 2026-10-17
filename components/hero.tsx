import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { photo, sofaImage } from "@/data/furniture-products";

export function Hero() {
  return (
    <section id="hero" className="relative isolate h-[calc(100svh-112px)] min-h-[700px] max-h-[1050px] w-full overflow-hidden bg-[#fbf9f8] px-[4.4%] max-md:h-[790px] max-md:min-h-0 max-md:max-h-none max-md:px-[5%]" aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">Des meubles faits pour la vie</h1>
      <div data-hero-motion data-hero-parallax="0.025" className="absolute left-[4.2%] top-[8%] z-0 w-max whitespace-nowrap text-[clamp(140px,17vw,320px)] font-semibold leading-[.8] tracking-[-.085em] text-[#eceae9] max-md:left-[2%] max-md:text-[clamp(90px,17vw,150px)]" aria-hidden="true">LIVE BEAUTIFULLY</div>
      <div data-hero-motion data-hero-parallax="0.018" className="absolute bottom-[7%] left-[4.2%] z-0 w-max whitespace-nowrap text-[clamp(140px,17vw,320px)] font-semibold leading-[.8] tracking-[-.085em] text-[#eceae9] max-md:bottom-[13%] max-md:left-[2%] max-md:text-[clamp(90px,17vw,150px)]" aria-hidden="true">MAISON · 2026</div>
      <div data-hero-motion data-hero-image data-hero-parallax="0.04" className="group absolute left-1/2 top-[43%] z-10 aspect-square w-[min(33vw,680px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#dedbd2] shadow-[0_26px_80px_rgba(36,35,31,0.12)] ring-1 ring-ink/5 [clip-path:polygon(10%_0,100%_0,100%_88%,90%_100%,0_100%,0_12%)] max-md:top-[31%] max-md:w-[min(82vw,500px)]">
        <img className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.035]" src={photo(sofaImage, 1600)} alt="Sofa in a sunlit living room with a patterned rug" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-ink/5" />
        <span className="absolute bottom-4 left-4 text-[9px] font-medium tracking-[.12em] text-white drop-shadow-sm max-md:bottom-3 max-md:left-3">NEW COLLECTION · 2026</span>
      </div>
      <div data-hero-motion className="absolute bottom-[22%] left-[4.4%] z-20 w-[min(345px,27vw)] max-md:bottom-[73px] max-md:left-[6%] max-md:w-[84%]">
        <p className="m-0 text-[9px] font-semibold uppercase tracking-[.18em]">// FURNITURE</p>
        <p className="mb-0 mt-2 max-w-[350px] text-[clamp(15px,1.3vw,19px)] leading-[1.55] text-[#65635d] max-md:text-sm">Explore curated collections of exclusive drops and everyday essentials, all thoughtfully designed for living.</p>
        <a className="mt-3 inline-flex items-center gap-3 border-b border-[#a8a59c] py-2 text-[9px] font-semibold uppercase tracking-[.1em] transition-all hover:gap-5 hover:border-ink" href="#collections">Explore collection <ArrowUpRight size={15} /></a>
        <div className="mt-6 flex gap-2 font-serif text-[13px] italic text-[#77746c] max-md:mt-2 max-md:text-xs"><span>/ New Collection</span><span>2026</span></div>
      </div>
      <div data-hero-motion className="absolute bottom-[12%] right-[4.4%] z-20 flex flex-col items-start max-md:bottom-[68px] max-md:right-[6%]">
        <div className="mb-3 flex h-11 items-center gap-[3px] max-md:hidden"><span className="h-11 w-11 rounded-full bg-[#f0eeeb]" /><span className="h-11 w-11 rounded-full bg-[#f0eeeb]" /><button className="grid h-11 w-11 place-items-center rounded-full bg-butter transition-transform hover:scale-105" aria-label="Découvrir les nouveautés"><Plus size={15} /></button></div>
        <strong className="text-[clamp(46px,4.1vw,68px)] font-normal leading-none tracking-[-.075em] max-md:text-[29px]">280K</strong>
        <span className="mt-2 text-[9px] tracking-[.12em] max-md:text-[7px]">PEOPLE WE INSPIRE</span>
      </div>
      <a data-hero-motion className="absolute bottom-[30px] left-1/2 z-30 grid h-8 w-10 -translate-x-1/2 place-items-center text-[#89867e] transition-transform hover:translate-y-1" href="#collections" aria-label="Explorer la collection"><ArrowDown size={19} /></a>
    </section>
  );
}
