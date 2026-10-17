import { ArrowUpRight } from "lucide-react";

const questions = [
  {
    number: "01",
    question: "Is delivery included with my order?",
    answer:
      "Delivery is on us for orders over 2,000 DH. For larger pieces, our team will get in touch to arrange a delivery time that works for you.",
  },
  {
    number: "02",
    question: "Can I try a mattress before buying?",
    answer:
      "We’d love you to experience the materials and comfort in person. Get in touch to arrange a visit to our Casablanca showroom.",
  },
  {
    number: "03",
    question: "How should I care for my furniture?",
    answer:
      "Every piece comes with care guidance tailored to its materials. If you need a hand, our team is always happy to help you keep it looking its best.",
  },
  {
    number: "04",
    question: "When will my order arrive?",
    answer:
      "Availability and delivery timing can vary by piece. We’ll confirm the expected timing with you after your order is placed and keep you updated along the way.",
  },
];

export function FaqSection() {
  return (
    <section
      data-scroll-reveal
      className="grid grid-cols-[.78fr_1.22fr] gap-[9%] bg-[#f2f0eb] px-[9.8%] py-[112px] max-md:grid-cols-1 max-md:gap-10 max-md:px-[7%] max-md:py-[76px]"
      aria-labelledby="faq-title"
    >
      <div className="flex flex-col items-start">
        <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#747168]">
          A FEW HELPFUL DETAILS
        </p>
        <h2
          className="mb-6 mt-7 text-[clamp(50px,6vw,82px)] font-normal leading-[.9] tracking-[-.08em] max-md:mt-5 max-md:text-[clamp(47px,12vw,68px)]"
          id="faq-title"
        >
          Good to
          <br />
          <em className="font-serif text-[#89867d]">know.</em>
        </h2>
        <p className="mb-8 mt-0 max-w-[285px] text-[13px] leading-[1.8] text-[#747168]">
          The little things that make choosing your next piece feel simple.
        </p>
        <a
          className="inline-flex items-center gap-3 border-b border-[#a8a59c] py-2 text-[9px] font-semibold uppercase tracking-[.13em] transition-all hover:gap-5 hover:border-ink"
          href="mailto:hello@maison.com"
        >
          Still have a question? <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="border-t border-[#d3d0c8]">
        {questions.map(({ number, question, answer }) => (
          <details className="group border-b border-[#d3d0c8]" key={number}>
            <summary className="grid min-h-[91px] cursor-pointer list-none grid-cols-[42px_1fr_40px] items-center gap-3 [&::-webkit-details-marker]:hidden max-sm:min-h-[78px] max-sm:grid-cols-[32px_1fr_34px]">
              <span className="self-start pt-[33px] text-[9px] tracking-[.1em] text-[#9b978c] max-sm:pt-[29px]">
                {number}
              </span>
              <span className="py-5 text-[clamp(15px,1.5vw,19px)] font-medium tracking-[-.025em] transition-colors group-hover:text-[#8a7854] max-sm:text-[14px]">
                {question}
              </span>
              <span className="grid h-[34px] w-[34px] place-items-center rounded-full border border-[#c9c5bb] text-[17px] font-light transition-all group-open:rotate-45 group-open:border-[#242320] group-open:bg-[#242320] group-open:text-white max-sm:h-[30px] max-sm:w-[30px]">
                +
              </span>
              <p className="col-start-2 mb-0 max-w-[520px] pb-7 pr-5 text-[12px] leading-[1.8] text-[#747168] max-sm:pb-6 max-sm:text-[11px]">
                {answer}
              </p>
            </summary>
          </details>
        ))}
      </div>
    </section>
  );
}
