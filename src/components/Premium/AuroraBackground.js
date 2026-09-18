"use client";

import React from "react";
import styles from "./AuroraBackground.module.css";
import { clsx } from "clsx";

export default function AuroraBackground({ children, className }) {
  return (
    <div className={clsx(styles.auroraWrapper, className)}>
      <div className={styles.auroraContainer}>
        <div className={clsx(styles.blob, styles.blob1)} />
        <div className={clsx(styles.blob, styles.blob2)} />
        <div className={clsx(styles.blob, styles.blob3)} />
        <div className={clsx(styles.blob, styles.blob4)} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
