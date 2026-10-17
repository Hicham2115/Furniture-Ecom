"use client";

import { useEffect } from "react";

export function MotionDirector() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const heroItems = document.querySelectorAll<HTMLElement>("[data-hero-motion]");
    heroItems.forEach((item, index) => {
      const isImage = item.hasAttribute("data-hero-image");
      item.animate(
        isImage
          ? [
              { opacity: 0, scale: 1.07, clipPath: "polygon(18% 0, 100% 0, 100% 84%, 82% 100%, 0 100%, 0 16%)" },
              { opacity: 1, scale: 1, clipPath: "polygon(10% 0, 100% 0, 100% 88%, 90% 100%, 0 100%, 0 12%)" },
            ]
          : [
              { opacity: 0, translate: "0 24px" },
              { opacity: 1, translate: "0 0" },
            ],
        {
          duration: isImage ? 1300 : 850,
          delay: isImage ? 180 : 120 + index * 130,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
        },
      );
    });

    document.querySelectorAll<HTMLElement>("[data-marquee]").forEach((marquee) => {
      marquee.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-33.333%)" }],
        { duration: Number(marquee.dataset.marqueeDuration) || 30000, iterations: Infinity, easing: "linear" },
      );
    });

    const sections = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
    const parallaxItems = document.querySelectorAll<HTMLElement>("[data-hero-parallax]");
    let scrollFrame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const scrollDistance = Math.min(window.scrollY, window.innerHeight);
        parallaxItems.forEach((item) => {
          const speed = Number(item.dataset.heroParallax) || 0;
          item.style.transform = `translate3d(0, ${-scrollDistance * speed}px, 0)`;
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.animate(
            [
              { opacity: 0, translate: "0 28px" },
              { opacity: 1, translate: "0 0" },
            ],
            { duration: 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
          );
          activeObserver.unobserve(element);
        });
      },
      { threshold: 0.14 },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateParallax);
      cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return null;
}
