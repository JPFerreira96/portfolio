"use client";

import { useEffect, useRef } from "react";
import { ProjectCard, type ProjectCardProps } from "@/components/ProjectCard";

type ProjectsCarouselProps = {
  projects: ProjectCardProps[];
  speed?: number;
};

export function ProjectsCarousel({ projects, speed = 0.45 }: ProjectsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pauseRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || projects.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const animate = () => {
      const halfTrack = carousel.scrollWidth / 2;

      if (!pauseRef.current && halfTrack > 0) {
        carousel.scrollLeft += speed;

        if (carousel.scrollLeft >= halfTrack) {
          carousel.scrollLeft -= halfTrack;
        }
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [projects.length, speed]);

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="projects-carousel-shell">
      <div
        ref={carouselRef}
        className="projects-carousel"
        onMouseEnter={() => {
          pauseRef.current = true;
        }}
        onMouseLeave={() => {
          pauseRef.current = false;
        }}
        onTouchStart={() => {
          pauseRef.current = true;
        }}
        onTouchEnd={() => {
          pauseRef.current = false;
        }}
        onFocusCapture={() => {
          pauseRef.current = true;
        }}
        onBlurCapture={() => {
          pauseRef.current = false;
        }}
        aria-label="Carrossel continuo de projetos"
      >
        <div className="projects-track">
          {duplicatedProjects.map((project, index) => (
            <ProjectCard key={`${project.name}-${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
