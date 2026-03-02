"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type SoftSkill = {
  title: string;
  description: string;
  example: string;
};

type SoftSkillsCarouselProps = {
  items: SoftSkill[];
};

export function SoftSkillsCarousel({ items }: SoftSkillsCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [showGrid, setShowGrid] = useState(false);

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -24 },
      visible: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: prefersReducedMotion ? 0 : 0.6,
          delay: prefersReducedMotion ? 0 : index * 0.08,
          ease: "easeOut"
        }
      })
    }),
    [prefersReducedMotion]
  );

  const hoverMotion = prefersReducedMotion ? undefined : { scale: 1.05 };
  const tapMotion = prefersReducedMotion ? undefined : { scale: 0.98 };
  const slideSpeed = prefersReducedMotion ? 0 : 350;

  const renderCard = (item: SoftSkill, index: number) => (
    <motion.article
      key={item.title}
      className="soft-card"
      variants={cardVariants}
      custom={index}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      whileHover={hoverMotion}
      whileTap={tapMotion}
    >
      <h3>{item.title}</h3>
      <p className="soft-description">{item.description}</p>
      <p className="soft-example">
        <strong>Exemplo:</strong> {item.example}
      </p>
    </motion.article>
  );

  return (
    <div className="soft-carousel-shell" data-view={showGrid ? "grid" : "carousel"}>
      <div className="soft-carousel-header">
        <button
          type="button"
          className="soft-toggle"
          onClick={() => {
            setShowGrid((prev) => !prev);
          }}
          aria-pressed={showGrid}
          aria-controls="soft-skills-grid"
        >
          {showGrid ? "Ver Carrossel" : "Ver Todas"}
        </button>
      </div>

      <div
        className="soft-carousel"
        role="region"
        aria-label="Carrossel de soft skills"
        aria-roledescription="carousel"
        hidden={showGrid}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          speed={slideSpeed}
          keyboard={{ enabled: true, onlyInViewport: true }}
          pagination={{ clickable: true }}
          navigation
          a11y={{ enabled: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            900: { slidesPerView: 3, spaceBetween: 26 }
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.title}>
              {renderCard(item, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        id="soft-skills-grid"
        className="soft-grid"
        aria-hidden={!showGrid}
        hidden={!showGrid}
      >
        {items.map((item, index) => renderCard(item, index))}
      </div>
    </div>
  );
}
