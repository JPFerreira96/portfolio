"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./RevealOnScroll.module.css";

type Direction = "up" | "down" | "left" | "right";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
};

const resolveOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "up":
    default:
      return { x: 0, y: distance };
  }
};

export function RevealOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 720,
  distance = 28,
  threshold = 0.2,
  once = true
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -9% 0px"
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  const offset = resolveOffset(direction, distance);
  const customStyles = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
    "--reveal-offset-x": `${offset.x}px`,
    "--reveal-offset-y": `${offset.y}px`
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`${styles.reveal}${className ? ` ${className}` : ""}`}
      data-visible={isVisible ? "true" : "false"}
      style={customStyles}
    >
      {children}
    </div>
  );
}
