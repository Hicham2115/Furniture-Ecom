import { ArrowUpRight } from "lucide-react";

export function MaisonSection() {
  return (
    <section data-scroll-reveal className="min-h-[420px] bg-[#fbf9f8] px-[7%] py-[115px] text-center max-md:min-h-0 max-md:py-[85px]" id="histoire">
      <p className="m-0 text-[9px] font-semibold uppercase tracking-[.18em]">A HOUSE, FULL OF STORIES</p>
      <h2 className="mx-auto mb-[18px] mt-[26px] text-[clamp(36px,5vw,66px)] font-normal leading-[1.03] tracking-[-.07em] max-md:text-[clamp(34px,8vw,57px)]">We don’t choose furniture.<br /><span className="text-[#9a978e]">We choose how we live.</span></h2>
      <p className="mx-auto mb-3 max-w-[460px] text-xs leading-[1.8] text-[#77756f]">Slow mornings. Long dinners. A quiet moment to yourself. We create singular pieces for the small moments that make a house a home.</p>
      <a className="mx-auto inline-flex items-center gap-3 border-b border-[#a8a59c] py-2 text-[9px] font-semibold uppercase tracking-[.1em] transition-all hover:gap-5 hover:border-ink" href="#matières">Our way of making <ArrowUpRight size={15} /></a>
    </section>
  );
}
