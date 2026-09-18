"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./CampusLifeSection.module.css";
import GlassCard from "../Premium/GlassCard";

const EVENTS = [
  { title: "Annual Tech Fest", date: "October 15, 2026", color: "var(--color-primary-light)" },
  { title: "Cultural Extravaganza", date: "December 5, 2026", color: "var(--color-accent-purple)" },
  { title: "Sports Meet 2026", date: "January 20, 2027", color: "var(--color-secondary)" },
  { title: "Science Exhibition", date: "March 10, 2027", color: "var(--color-electric-blue)" },
];

export default function CampusLifeSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Vibrant <span className={styles.highlight}>Campus Life</span></h2>
          <p className={styles.description}>
            Experience the energy, creativity, and passion that define our student community.
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <motion.div style={{ x: x1 }} className={styles.sliderTrack}>
            {EVENTS.map((event, i) => (
              <GlassCard key={i} className={styles.eventCard}>
                <div className={styles.cardGlow} style={{ backgroundColor: event.color }} />
                <div className={styles.eventDate}>{event.date}</div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <button className={styles.exploreBtn} style={{ color: event.color }}>Explore &rarr;</button>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
