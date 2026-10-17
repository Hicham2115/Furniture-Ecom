import { NewsletterForm } from "@/components/newsletter-form";

export function ContactSection() {
  return (
    <section data-scroll-reveal className="bg-[#efeee9] px-6 py-[105px] text-center max-md:py-[76px]" id="newsletter">
      <p className="m-0 text-[9px] font-semibold uppercase tracking-[.18em]">LE JOURNAL DE LA MAISON</p>
      <h2 className="mb-[13px] mt-6 text-[clamp(49px,7vw,80px)] font-normal leading-[.9] tracking-[-.08em]">De belles choses<br /><em className="font-serif text-[#8b887f]">à recevoir.</em></h2>
      <p className="mx-auto mb-[25px] mt-0 text-[11px] leading-6 text-[#65635d]">Nos inspirations, nouveautés et petites attentions. Une lettre de temps en temps.</p>
      <NewsletterForm />
    </section>
  );
}
