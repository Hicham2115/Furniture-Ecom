"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "The sofa changed the rhythm of our living room. We gather around it, settle in, and somehow every evening lasts a little longer.",
    name: "Salma B.",
    location: "Casablanca, Morocco",
    product: "Nuage Sofa · Living room",
    initials: "SB",
  },
  {
    quote:
      "Beautifully made, comfortable from the first night, and even better in person. It feels like the bedroom finally belongs to us.",
    name: "Yasmine E.",
    location: "Rabat, Morocco",
    product: "Serein Mattress · Bedroom",
    initials: "YE",
  },
  {
    quote:
      "The proportions are perfect and the material feels so considered. It is the first chair everyone reaches for when they visit.",
    name: "Omar A.",
    location: "Marrakech, Morocco",
    product: "Ligne Armchair · Lounge",
    initials: "OA",
  },
];

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);
  const review = reviews[activeReview];
  const goToReview = (direction: number) => {
    setActiveReview((current) => (current + direction + reviews.length) % reviews.length);
  };

  return (
    <section
      data-scroll-reveal
      className="relative overflow-hidden bg-[#eeece6] px-[9.8%] py-[108px] text-[#242320] max-md:px-[7%] max-md:py-[76px]"
      aria-label="Customer reviews"
    >
      <div className="pointer-events-none absolute -right-4 top-[-100px] select-none font-serif text-[clamp(250px,39vw,570px)] leading-none text-[#242320]/[.035]">
        “
      </div>
      <div className="relative grid grid-cols-[.7fr_1.3fr] gap-[10%] max-md:grid-cols-1 max-md:gap-12">
        <div className="flex flex-col justify-between">
          <div>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#8a7854]">
              WORDS FROM HOME
            </p>
            <h2 className="mb-0 mt-7 max-w-[340px] text-[clamp(47px,6vw,82px)] font-normal leading-[.9] tracking-[-.08em]">
              Loved in
              <br />
              <em className="font-serif text-[#89867d]">real life.</em>
            </h2>
          </div>
          <div className="mt-14 max-md:mt-0">
            <div className="flex items-center gap-2">
              <span className="font-serif text-[37px] leading-none">5.0</span>
              <span className="flex gap-1 text-[#d9bf7d]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={13} fill="currentColor" strokeWidth={1} />
                ))}
              </span>
            </div>
            <p className="mb-0 mt-3 text-[9px] uppercase tracking-[.15em] text-[#77746c]">
              AVERAGE FROM 49 CUSTOMER REVIEWS
            </p>
          </div>
        </div>

        <div className="relative flex min-h-[360px] flex-col justify-between border-l border-[#242320]/15 pl-[8%] max-md:min-h-0 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-9">
          <div>
            <span className="font-serif text-[46px] leading-none text-[#8a7854]">“</span>
            <blockquote
              key={activeReview}
              className="mb-0 mt-3 max-w-[820px] font-serif text-[clamp(28px,3.7vw,52px)] leading-[1.15] tracking-[-.035em] text-[#302e2a]"
            >
              {review.quote}
            </blockquote>
          </div>

          <div className="mt-10 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#242320]/25 font-serif text-[13px] text-[#8a7854]">
                {review.initials}
              </span>
              <div>
                <p className="mb-1 mt-0 text-[12px] font-medium uppercase tracking-[.11em]">
                  {review.name}
                </p>
                <p className="m-0 text-[10px] text-[#77746c]">
                  {review.location} <span className="px-1.5">·</span> {review.product}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <span className="text-[10px] tracking-[.13em] text-[#77746c]">
                0{activeReview + 1} <span className="px-1">/</span> 0{reviews.length}
              </span>
              <button
                className="grid h-11 w-11 place-items-center rounded-full border border-[#242320]/30 transition-colors hover:border-[#d9bf7d] hover:bg-[#d9bf7d] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9bf7d]"
                type="button"
                onClick={() => goToReview(-1)}
                aria-label="Previous review"
              >
                <ArrowLeft size={16} strokeWidth={1.5} />
              </button>
              <button
                className="grid h-11 w-11 place-items-center rounded-full border border-[#242320]/30 transition-colors hover:border-[#d9bf7d] hover:bg-[#d9bf7d] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9bf7d]"
                type="button"
                onClick={() => goToReview(1)}
                aria-label="Next review"
              >
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
