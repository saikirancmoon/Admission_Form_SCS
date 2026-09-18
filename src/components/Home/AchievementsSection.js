"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./AchievementsSection.module.css";
import GlassCard from "../Premium/GlassCard";
import { Trophy, Medal, Award, Star } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <Trophy size={40} />,
    title: "Best International School",
    organization: "Education World 2025",
    color: "var(--color-golden)",
  },
  {
    icon: <Medal size={40} />,
    title: "Excellence in STEM",
    organization: "Global Tech Education Awards",
    color: "var(--color-electric-blue)",
  },
  {
    icon: <Award size={40} />,
    title: "Top 10 Innovators",
    organization: "Future Schools Network",
    color: "var(--color-accent-emerald)",
  },
  {
    icon: <Star size={40} />,
    title: "Outstanding Leadership",
    organization: "National Education Board",
    color: "var(--color-accent-purple)",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span className={styles.highlight}>Achievements</span></h2>
          <p className={styles.description}>
            Recognized globally for setting new benchmarks in academic excellence and holistic education.
          </p>
        </div>

        <div className={styles.grid}>
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
            >
              <GlassCard className={styles.card} hoverEffect={true}>
                <div className={styles.iconWrapper} style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardOrg}>{item.organization}</p>
                <div className={styles.glow} style={{ background: item.color }} />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
