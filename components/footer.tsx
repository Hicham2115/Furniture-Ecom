import { ArrowUpRight, Camera, Mail, MapPin } from "lucide-react";
import { CurrentYear } from "@/components/current-year";

const footerLinks = [
  { title: "Explore", links: [["All products", "/products"], ["Living room", "/products"], ["Bedroom", "/products"], ["Our story", "/#histoire"]] },
  { title: "Here to help", links: [["Delivery & care", "/#faq-title"], ["Contact us", "mailto:hello@maison.com"], ["Your wishlist", "/favorites"], ["Your bag", "/products"]] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#242320] px-[6.3%] pb-7 pt-[66px] text-[#f8f7f4] max-md:px-[7%] max-md:pt-12">
      <div className="pointer-events-none absolute right-[5%] top-[-130px] select-none font-serif text-[clamp(260px,40vw,570px)] leading-none text-white/[.025]" aria-hidden="true">M</div>
      <div className="relative grid grid-cols-[1.35fr_.65fr_.65fr_.8fr] gap-[6%] pb-[78px] max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-10 max-md:pb-12">
        <div className="max-md:col-span-2">
          <a className="inline-block text-[clamp(42px,6vw,74px)] font-bold leading-none tracking-[-.09em] transition-opacity hover:opacity-75" href="#top" aria-label="MAISON home">
            MAISON<span className="ml-1 align-top text-[10px] tracking-normal">®</span>
          </a>
          <p className="mb-6 mt-6 max-w-[270px] font-serif text-[23px] leading-[1.15] text-[#c4c1b8]">
            A home for the<br />moments that matter.
          </p>
          <div className="grid gap-2.5 text-[12px] text-[#a6a39b]">
            <span className="inline-flex items-center gap-2"><MapPin size={14} strokeWidth={1.4} /> Casablanca, Morocco</span>
            <a className="group inline-flex w-fit items-center gap-2 text-[#a6a39b] transition-colors duration-300 hover:text-[#d9c995] focus-visible:text-[#d9c995]" href="mailto:hello@maison.com"><Mail size={14} strokeWidth={1.4} /> <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#c6b995] after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">hello@maison.com</span></a>
          </div>
        </div>

        {footerLinks.map((column) => (
          <nav aria-label={column.title} key={column.title}>
            <h2 className="mb-5 mt-1 text-[11px] font-semibold uppercase tracking-[.19em] text-[#c6b995]">
              {column.title}
            </h2>
            <ul className="m-0 grid list-none gap-3.5 p-0">
              {column.links.map(([label, href]) => (
                <li key={label}>
                  <a className="group inline-flex items-center gap-1.5 text-[14px] text-[#d0cec7] transition-colors duration-300 hover:translate-x-1 hover:text-[#d9c995] focus-visible:translate-x-1 focus-visible:text-[#d9c995]" href={href}>
                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#c6b995] after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">{label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="max-md:col-span-2">
          <h2 className="mb-5 mt-1 text-[11px] font-semibold uppercase tracking-[.19em] text-[#c6b995]">Follow our world</h2>
          <a className="group inline-flex items-center gap-2 text-[14px] text-[#d0cec7] transition-colors duration-300 hover:text-[#d9c995] focus-visible:text-[#d9c995]" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Camera size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" /> <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#c6b995] after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">Instagram</span> <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="mt-4 max-w-[240px] text-[12px] leading-[1.7] text-[#a6a39b]">Spaces, materials, and small details we keep coming back to.</p>
        </div>
      </div>

      <div className="relative flex items-end justify-between gap-5 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[.13em] text-[#a6a39b] max-md:flex-col max-md:items-start">
        <span>© MAISON <CurrentYear /> · Casablanca, Morocco</span>
        <div className="flex gap-5 max-md:order-first">
          <a className="transition-colors duration-300 hover:text-[#d9c995] focus-visible:text-[#d9c995]" href="#faq-title">Delivery & care</a>
          <a className="transition-colors duration-300 hover:text-[#d9c995] focus-visible:text-[#d9c995]" href="mailto:hello@maison.com">Contact</a>
        </div>
        <a className="inline-flex items-center gap-1 text-[#d9d6ce] transition-all duration-300 hover:-translate-y-1 hover:text-[#d9c995] focus-visible:text-[#d9c995]" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <p className="mx-auto mb-0 mt-8 max-w-[1440px] px-6 pb-2 pt-4 text-center text-[14px] text-white/70 sm:px-8 lg:px-12">
        Designed &amp; developed by{" "}
        <a
          href="https://www.stallionadvertising.ma/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-20 underline decoration-transparent underline-offset-2 transition-colors duration-200 hover:text-white hover:decoration-teal-400"
        >
          Stallion Advertising
        </a>
      </p>
    </footer>
  );
}
