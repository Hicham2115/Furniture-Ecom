import { ArrowUpRight } from "lucide-react";

export function ClosingCtaSection() {
  return (
    <section data-scroll-reveal className="flex items-center justify-between gap-5 border-y border-line px-[8%] py-[30px] max-md:flex-col max-md:items-start">
      <p className="m-0 text-[9px] font-semibold uppercase tracking-[.18em]">VOTRE MAISON VOUS ATTEND</p>
      <a className="flex items-center gap-3 font-serif text-[clamp(20px,3vw,31px)] transition-colors hover:text-[#867249]" href="/products">Trouvez votre prochaine pièce <ArrowUpRight size={17} /></a>
    </section>
  );
}
