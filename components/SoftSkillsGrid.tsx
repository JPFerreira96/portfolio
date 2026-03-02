"use client";

import { motion, useReducedMotion } from "framer-motion";

export type SoftSkill = {
  title: string;
  description: string;
  example: string;
};

type SoftSkillsGridProps = {
  items: SoftSkill[];
};

export function SoftSkillsGrid({ items }: SoftSkillsGridProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="soft-grid"
      variants={containerVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item) => (
        <motion.article
          key={item.title}
          className="soft-card"
          variants={cardVariants}
          whileHover={prefersReducedMotion ? undefined : { y: -4 }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p className="soft-example">
            <strong>Exemplo:</strong> {item.example}
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}
