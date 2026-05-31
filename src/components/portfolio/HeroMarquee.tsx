"use client";

/* eslint-disable @next/next/no-img-element */
import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

type Company = { id: string; name: string; logo: string; logoClass?: string };

const COMPANIES: Company[] = [
  { id: "barclays", name: "Barclays", logo: "/portfolio/logos/barclays.svg" },
  { id: "google", name: "Google", logo: "/portfolio/logos/google.svg" },
  { id: "amex", name: "American Express", logo: "/portfolio/logos/amex.png", logoClass: "rounded-[3px]" },
  { id: "hartford", name: "The Hartford", logo: "/portfolio/logos/hartford.svg", logoClass: "!h-8" },
  { id: "agtb", name: "Anglo Gulf Trade Bank", logo: "/portfolio/logos/agtb.png", logoClass: "!h-7" },
];

// duplicated so the looped track always stays full
const TRACK = [...COMPANIES, ...COMPANIES, ...COMPANIES];

export function HeroMarquee() {
  return (
    <div className="hero-marquee from-right reveal d4">
      <span className="lab">Delivered for</span>
      <div className="hm-shell">
        <Carousel
          opts={{ loop: true, align: "start", dragFree: true }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="ml-0">
            {TRACK.map((c, i) => (
              <CarouselItem
                key={`${c.id}-${i}`}
                className="flex basis-auto justify-center pl-0"
              >
                <div className="hm-item">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className={`hm-logo ${c.logoClass ?? ""}`}
                  />
                  <span className="hm-name">{c.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="hm-fade l" />
        <div className="hm-fade r" />
      </div>
    </div>
  );
}
