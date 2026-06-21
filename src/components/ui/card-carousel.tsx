"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ExternalLink } from "lucide-react";
import { ArchitectureFlow } from "@/components/portfolio/ArchitectureFlow";

interface CardCarouselItem {
  title: string;
  desc: string;
  pills: string[];
  stages: string[];
  repo?: string;
}

interface CardCarouselProps {
  items: CardCarouselItem[];
  autoplayDelay?: number;
}

export function CardCarousel({ items, autoplayDelay = 4000 }: CardCarouselProps) {
  return (
    <div className="cardCarouselWrapper">
      <style>{`
        .cardCarouselWrapper .swiper {
          width: 100%;
          padding-bottom: 56px;
        }
        .cardCarouselWrapper .swiper-slide {
          width: 340px;
        }
        .cardCarouselWrapper .swiper-pagination-bullet {
          background: var(--accent, #4258e6);
          opacity: 0.35;
        }
        .cardCarouselWrapper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .cardCarouselWrapper .swiper-3d .swiper-slide-shadow-left,
        .cardCarouselWrapper .swiper-3d .swiper-slide-shadow-right {
          background: none;
        }
        .carouselCard {
          background: var(--surface, #fff);
          border: 1px solid var(--line, #e5e7eb);
          border-radius: 18px;
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .swiper-slide-active .carouselCard,
        .carouselCard:hover {
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
        }
        .carouselVisual {
          background: linear-gradient(135deg, #1a2480 0%, #2a45d6 100%);
          padding: 28px 24px;
          position: relative;
        }
        .carouselVisualLabel {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .carouselBody {
          padding: 24px;
        }
        .carouselTitle {
          font-size: 18px;
          font-weight: 700;
          color: var(--ink, #0f172a);
          letter-spacing: -0.02em;
          margin: 0 0 10px;
        }
        .carouselDesc {
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--muted, #6b7280);
          margin: 0 0 16px;
        }
        .carouselPills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .carouselPills span {
          font-size: 11.5px;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid var(--line, #e5e7eb);
          color: var(--ink-2, #374151);
          font-weight: 500;
        }
        .carouselLink {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent, #4258e6);
          text-decoration: none;
        }
        .carouselLink:hover { opacity: 0.75; }
      `}</style>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
      >
        {items.map((item) => (
          <SwiperSlide key={item.repo ?? item.title}>
            <div className="carouselCard">
              <div className="carouselVisual">
                <div className="carouselVisualLabel">Architecture</div>
                <ArchitectureFlow stages={item.stages} />
              </div>
              <div className="carouselBody">
                <h3 className="carouselTitle">{item.title}</h3>
                <p className="carouselDesc">{item.desc}</p>
                <div className="carouselPills">
                  {item.pills.map((p) => <span key={p}>{p}</span>)}
                </div>
                {item.repo && (
                  <a href={item.repo} target="_blank" rel="noopener noreferrer" className="carouselLink">
                    <ExternalLink size={14} /> View on GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
