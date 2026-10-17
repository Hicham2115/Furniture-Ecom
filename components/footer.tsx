import { CurrentYear } from "@/components/current-year";

export function Footer() {
  return (
    <footer className="bg-ink px-[5.3%] pb-[21px] pt-8 text-paper">
      <div className="flex min-h-[150px] items-start justify-between max-md:min-h-[125px]">
        <a className="text-[31px] font-bold tracking-[-.07em]" href="#top">DAR<span className="ml-0.5 align-top text-[8px] tracking-normal">®</span></a>
        <p className="m-1 font-serif text-lg leading-tight text-[#c4c1b8] max-md:text-[15px]">Un intérieur qui<br />vous ressemble.</p>
        <a className="mt-2 text-[8px] tracking-[.14em] text-[#d9d6ce]" href="#top">RETOUR EN HAUT ↑</a>
      </div>
      <div className="flex min-h-10 items-end justify-between gap-4 border-t border-[#4b4943] text-[8px] tracking-[.1em] text-[#a6a39b] max-md:flex-col max-md:items-start max-md:pt-[18px]">
        <span>© DAR <CurrentYear /> — CASABLANCA</span>
        <div className="flex gap-5 max-md:order-first"><a className="hover:text-paper" href="#top">INSTAGRAM</a><a className="hover:text-paper" href="mailto:bonjour@dar.ma">CONTACT</a><a className="hover:text-paper" href="#top">MENTIONS LÉGALES</a></div>
        <span>FAIT AVEC SOIN, AU MAROC</span>
      </div>
    </footer>
  );
}
