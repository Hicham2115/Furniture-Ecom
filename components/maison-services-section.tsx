import { ArrowUpRight } from "lucide-react";
import { photo } from "@/data/furniture-products";

const services = [
  ["01", "Considered materials", "Natural finishes, chosen for comfort and made to age beautifully."],
  ["02", "At home, with care", "Thoughtful delivery and setup, right where you need each piece."],
  ["03", "Made to stay", "Quiet, lasting forms designed to feel at home for years."],
];

export function MaisonServicesSection() {
  return (
    <>
      <section
        data-scroll-reveal
        className="grid min-h-[760px] grid-cols-[1.08fr_.92fr] items-center gap-[9%] bg-[#e8e5df] px-[9.9%] py-[92px] max-md:min-h-0 max-md:grid-cols-1 max-md:gap-10 max-md:px-[6%] max-md:py-[65px]"
        id="materials"
      >
        <figure className="group relative m-0 h-[min(57vw,724px)] min-h-[470px] overflow-hidden bg-[#d5d1c7] [clip-path:polygon(0_0,100%_0,100%_88%,88%_100%,0_100%)] max-md:h-[min(105vw,560px)] max-md:min-h-0">
          <img
            className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            src={photo("photo-1616486338812-3dadae4b4ace", 1600)}
            alt="Soft neutral living room with natural textures and warm light"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/[.04]" />
          <figcaption className="absolute bottom-5 left-6 text-[9px] font-medium tracking-[.17em] text-white max-md:bottom-4 max-md:left-4">
            NATURAL MATERIALS · MADE TO LAST
          </figcaption>
        </figure>

        <div className="relative py-8 max-md:py-0">
          <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#4c4944]">
            THE ART OF TAKING YOUR TIME
          </p>
          <h2 className="mb-7 mt-9 max-w-[590px] text-[clamp(62px,7.5vw,116px)] font-normal leading-[.82] tracking-[-.09em] max-md:mb-6 max-md:mt-7 max-md:text-[clamp(59px,14vw,92px)]">
            A softer way
            <br />
            to live, taken
            <br />
            <em className="font-serif text-[#858177]">seriously.</em>
          </h2>
          <p className="mb-6 mt-0 max-w-[410px] text-[14px] leading-[1.8] text-[#65625c] max-md:text-[13px]">
            From the first thread to the final detail, we choose materials for
            the way they feel, how they hold up, and how beautifully they grow
            with you.
          </p>
          <a
            className="inline-flex items-center gap-4 border-b border-[#9e9a91] py-3 text-[10px] font-semibold uppercase tracking-[.15em] transition-all hover:gap-6 hover:border-ink"
            href="#newsletter"
          >
            Our standards <ArrowUpRight size={16} />
          </a>
          <span className="pointer-events-none absolute -bottom-14 right-[-18px] text-[clamp(160px,17vw,260px)] font-bold leading-none tracking-[-.13em] text-ink/[.055] max-md:bottom-[-30px] max-md:right-0 max-md:text-[150px]">
            M.
          </span>
        </div>
      </section>

      <section
        className="grid grid-cols-3 gap-[8%] bg-[#fbf9f8] px-[9%] py-[82px] max-md:grid-cols-1 max-md:gap-[27px] max-md:px-[7%] max-md:py-[58px]"
        aria-label="The MAISON experience"
      >
        {services.map(([number, title, copy]) => (
          <article
            className="border-t border-[#d5d1c9] pt-4 max-md:grid max-md:grid-cols-[55px_1fr] max-md:gap-x-2"
            key={number}
          >
            <span className="text-[10px] tracking-[.12em] text-[#918d82] max-md:row-span-2">
              {number} —
            </span>
            <h3 className="mb-2 mt-7 text-[18px] font-medium tracking-[-.03em] max-md:mb-1 max-md:mt-0">
              {title}
            </h3>
            <p className="m-0 max-w-[260px] text-[12px] leading-[1.7] text-[#79766f] max-md:col-start-2 max-md:max-w-[310px]">
              {copy}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
