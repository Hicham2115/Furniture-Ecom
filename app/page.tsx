import { CategorySection } from "@/components/category-section";
import { ClosingCtaSection } from "@/components/closing-cta-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { EditorialCollectionSection } from "@/components/editorial-collection-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MaisonSection } from "@/components/maison-section";
import { MaisonServicesSection } from "@/components/maison-services-section";
import { ReviewsSection } from "@/components/reviews-section";
import { Header } from "@/layout/header";

export default function Home() {
  return (
    <>
      <div id="top">
        <Header />
      </div>
      <main className="w-full overflow-hidden">
        <Hero />
        <div
          className="flex h-14 items-center overflow-hidden bg-[#eeece6]"
          aria-label="Our commitments"
        >
          <div
            data-marquee
            className="flex min-w-max items-center gap-7 px-6 text-[10px] font-semibold tracking-[.14em] md:mx-auto md:gap-10"
          >
            {Array.from({ length: 3 }, (_, index) => (
              <span key={index}>
                CRAFTED STORIES <b className="px-4 text-[#a98f59]">✦</b> PREMIUM
                MATERIALS <b className="px-4 text-[#a98f59]">✦</b> SUSTAINABLE
                SOURCES <b className="px-4 text-[#a98f59]">✦</b> TIMELESS DESIGN
              </span>
            ))}
          </div>
        </div>
        <EditorialCollectionSection />
        <CategorySection />
        <MaisonServicesSection />
        <ReviewsSection />
        <FaqSection />
        <ClosingCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
