"use client";

import type { ReactNode } from "react";
import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, {
    amount: threshold,
    margin: "0px 0px -10% 0px",
    once
  });

  const variants = useMemo(() => {
    const offset = resolveOffset(direction, distance);
    const transition = {
      duration: duration / 1000,
      delay: delay / 1000,
      ease: [0.16, 1, 0.3, 1] as const
    };

    return {
      hidden: {
        opacity: 0,
        x: offset.x,
        y: offset.y
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition
      }
    };
  }, [delay, direction, distance, duration]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.reveal}${className ? ` ${className}` : ""}`}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={prefersReducedMotion || isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
