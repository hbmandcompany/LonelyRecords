"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger index — multiplied by 0.08s for grid stagger. */
  index?: number;
  delay?: number;
  y?: number;
  className?: string;
};

export default function Reveal({
  children,
  index = 0,
  delay = 0,
  y = 24,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: delay + index * 0.08,
      }}
    >
      {children}
    </motion.div>
  );
}
