"use client";

import { motion, useReducedMotion, easeOut } from "framer-motion";

export type StackItem = {
  name: string;
  icon: string;
  alt?: string;
};

type StackGroupProps = {
  category: string;
  items: StackItem[];
};

export function StackGroup({ category, items }: StackGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: easeOut }
    }
  };

  return (
    <article className="stack-card">
      <h3>{category}</h3>
      <motion.ul
        className="stack-icon-grid"
        variants={listVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {items.map((item) => (
          <motion.li className="stack-item" key={item.name} variants={itemVariants}>
            <img
              className="stack-icon"
              src={item.icon}
              alt={item.alt ?? item.name}
              loading="lazy"
              width={36}
              height={36}
            />
            <span>{item.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </article>
  );
}
