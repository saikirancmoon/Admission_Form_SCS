"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./GlassCard.module.css";
import { clsx } from "clsx";

export default function GlassCard({ children, className, hoverEffect = true }) {
  return (
    <motion.div
      className={clsx(styles.glassCard, className)}
      whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={styles.glassBorder} />
      <div className={styles.glassContent}>{children}</div>
    </motion.div>
  );
}
