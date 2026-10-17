import { ArrowDownRight } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";

export function ContactSection() {
  return (
    <section
      data-scroll-reveal
      className="relative overflow-hidden bg-[#fbf9f8] px-6 py-[82px] text-center max-md:py-[64px]"
      id="newsletter"
    >
      <span className="pointer-events-none absolute -left-10 top-[-110px] font-serif text-[clamp(250px,38vw,540px)] leading-none text-[#242320]/[.035]">
        M
      </span>
      <div className="relative mx-auto max-w-[850px]">
        <p className="m-0 text-[10px] font-semibold uppercase tracking-[.22em] text-[#706d65]">
          NOTES FROM MAISON
        </p>
        <h2 className="mb-5 mt-7 text-[clamp(52px,8vw,104px)] font-normal leading-[.85] tracking-[-.09em] max-md:mt-6 max-md:text-[clamp(48px,12vw,74px)]">
          Good things,
          <br />
          <em className="font-serif text-[#89867d]">well received.</em>
        </h2>
        <p className="mx-auto mb-6 mt-0 max-w-[400px] text-[13px] leading-[1.8] text-[#6e6b63]">
          New pieces, thoughtful spaces, and small notes for making home feel
          more like you. Only now and then.
        </p>
        <NewsletterForm />
        <div className="mt-10 flex items-center justify-center gap-3 text-[9px] font-medium uppercase tracking-[.16em] text-[#8d897f] max-md:mt-8">
          <span>Made for the moments that matter</span>
          <ArrowDownRight size={14} strokeWidth={1.4} />
          <span>Since 2026</span>
        </div>
      </div>
    </section>
  );
}
