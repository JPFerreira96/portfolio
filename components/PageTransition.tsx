"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const enterAnimation = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } };
  const exitAnimation = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: -12, transition: { duration: 0.35, ease: "easeIn" } };
  const initialAnimation = prefersReducedMotion ? false : { opacity: 0, y: 12 };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className="page-shell"
        initial={initialAnimation}
        animate={enterAnimation}
        exit={exitAnimation}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
