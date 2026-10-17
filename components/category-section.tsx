"use client";

import { useCommerceStore } from "@/lib/commerce-store";
import { photo } from "@/data/furniture-products";
import { useState } from "react";

const categories = [
  { name: "Living Room", count: 174, filter: "Tout voir", image: "photo-1616486338812-3dadae4b4ace" },
  { name: "Bedroom", count: 361, filter: "Matelas", image: "photo-1631679706909-1844bbd07221" },
  { name: "Kitchen", count: 117, filter: "Canapés", image: "photo-1600210492486-724fe5c67fb0" },
  { name: "Office", count: 92, filter: "Fauteuils", image: "photo-1497366754035-f200968a6e72" },
];

export function CategorySection() {
  const category = useCommerceStore((state) => state.category);
  const setCategory = useCommerceStore((state) => state.setCategory);
  const [activeRoom, setActiveRoom] = useState(0);

  return (
    <section
      data-scroll-reveal
      className="grid min-h-[810px] grid-cols-[.88fr_1.12fr] items-center gap-[9.4%] bg-[#eeece6] px-[4.35%] pb-[78px] pt-[54px] max-md:min-h-0 max-md:grid-cols-1 max-md:gap-9 max-md:px-[6%] max-md:pb-[65px] max-md:pt-[55px]"
      id="collections"
      aria-label="Shop by room"
    >
      <div className="relative h-[min(58vw,754px)] min-h-[440px] overflow-hidden bg-[#d6d5d3] [clip-path:polygon(0_0,85%_0,100%_18%,100%_100%,0_100%)] max-md:h-[min(95vw,560px)] max-md:min-h-0">
        {categories.map((item, index) => (
          <img
            key={item.name}
            className={`absolute inset-0 h-full w-full object-cover grayscale transition-[opacity,transform] duration-700 ease-out ${activeRoom === index ? "scale-100 opacity-100" : "scale-[1.035] opacity-0"}`}
            src={photo(item.image, 1500)}
            alt={`${item.name} interior`}
            loading="lazy"
            aria-hidden={activeRoom !== index}
          />
        ))}
      </div>

      <div className="min-w-0 self-center">
        <p className="mb-7 max-w-[540px] text-[clamp(16px,1.65vw,22px)] leading-[1.65] text-[#55524f] max-md:mb-6">
          Every piece carries rhythm beyond function—it’s motion and meaning
          where residential energy meets architectural purity.
        </p>
        <a
          href="/products"
          className="mb-[72px] inline-flex h-[62px] min-w-[262px] items-center justify-center gap-7 rounded-full border border-[#292725] px-8 text-[12px] font-medium tracking-[.12em] transition-colors hover:bg-[#292725] hover:text-white max-md:mb-12 max-md:h-[54px] max-md:min-w-[220px]"
        >
          SEE PRODUCT <span aria-hidden="true">→</span>
        </a>

        <div className="border-t border-[#e2dfdd]">
          {categories.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setCategory(item.filter)}
              onMouseEnter={() => setActiveRoom(index)}
              onFocus={() => setActiveRoom(index)}
              aria-pressed={category === item.filter}
              className={`group grid min-h-[124px] w-full grid-cols-[58px_1fr_68px] items-center border-b border-[#e2dfdd] text-left transition-colors max-lg:min-h-[94px] max-sm:min-h-[75px] max-sm:grid-cols-[43px_1fr_45px] ${category === item.filter ? "text-[#191817]" : "text-[#c9c9c9] hover:text-[#55524f]"}`}
            >
              <span className="self-start pt-7 text-[11px] tracking-[.08em] text-[#a8a5a3] max-lg:pt-6 max-sm:pt-5">
                [0{index + 1}]
              </span>
              <span className="whitespace-nowrap text-[clamp(36px,5.25vw,91px)] font-semibold leading-none tracking-[-.075em] max-sm:text-[clamp(31px,9vw,48px)]">
                {item.name.toUpperCase()}
              </span>
              <span className="justify-self-end pt-3 text-[clamp(13px,1.3vw,18px)] tracking-[-.04em] max-sm:text-[12px]">
                ({item.count})
              </span>
            </button>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-2 text-[10px] italic tracking-[.11em] text-[#aaa5a2]">
          <span>[CATEGORIES]</span><span aria-hidden="true">····················</span>
        </div>
      </div>
    </section>
  );
}
