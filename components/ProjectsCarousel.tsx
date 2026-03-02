"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectCard, type ProjectCardProps } from "@/components/ProjectCard";

type ProjectsCarouselProps = {
  projects: ProjectCardProps[];
  speed?: number;
};

export function ProjectsCarousel({ projects, speed = 0.45 }: ProjectsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track || projects.length === 0) {
      return;
    }

    const updateDuration = () => {
      const distance = track.scrollWidth / 2;
      if (distance <= 0) {
        return;
      }
      const pixelsPerSecond = Math.max(1, speed * 60);
      const duration = Math.max(22, Math.min(140, distance / pixelsPerSecond));
      track.style.setProperty("--projects-marquee-duration", `${duration}s`);
    };

    updateDuration();

    const resizeObserver = new ResizeObserver(updateDuration);
    resizeObserver.observe(track);
    return () => {
      resizeObserver.disconnect();
    };
  }, [projects.length, speed]);

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="projects-carousel-shell" data-paused={paused ? "true" : "false"}>
      <div
        ref={carouselRef}
        className="projects-carousel"
        onTouchStart={() => {
          setPaused(true);
        }}
        onTouchEnd={() => {
          setPaused(false);
        }}
        aria-label="Carrossel continuo de projetos"
      >
        <div ref={trackRef} className="projects-track">
          {duplicatedProjects.map((project, index) => (
            <ProjectCard
              key={`${project.name}-${index}`}
              {...project}
              onPauseChange={(paused) => {
                setPaused(paused);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
