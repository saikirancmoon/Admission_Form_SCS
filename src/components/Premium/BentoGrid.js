"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./BentoGrid.module.css";
import { clsx } from "clsx";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={clsx(styles.bentoGrid, className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={clsx(styles.bentoItem, className)}
    >
      {header}
      <div className={styles.itemContent}>
        {icon}
        <div className={styles.itemText}>
          <div className={styles.itemTitle}>{title}</div>
          <div className={styles.itemDescription}>{description}</div>
        </div>
      </div>
    </motion.div>
  );
};
