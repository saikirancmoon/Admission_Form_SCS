"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./LegacySection.module.css";
import GlassCard from "../Premium/GlassCard";
import { School, UsersRound, GraduationCap, ShieldCheck } from "lucide-react";

const LEGACY_DATA = [
  {
    icon: <School size={32} />,
    value: "850+",
    title: "Schools",
    description: "Academic Excellence Across India",
    color: "var(--color-accent-emerald)",
  },
  {
    icon: <UsersRound size={32} />,
    value: "8M+",
    title: "Students",
    description: "Shaping Future Achievers",
    color: "var(--color-secondary)",
  },
  {
    icon: <GraduationCap size={32} />,
    value: "50k+",
    title: "Staffs",
    description: "Experienced Teaching & Support Team",
    color: "var(--color-golden)",
  },
  {
    icon: <ShieldCheck size={32} />,
    value: "40+",
    title: "Years",
    description: "Trusted Educational Legacy",
    color: "var(--color-primary-light)",
  },
];

export default function LegacySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className={styles.legacySection}>
      <div className={styles.backgroundDecorations}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <div className={styles.eyebrow}>
            <span className={styles.line} />
            <span className={styles.star}>★</span>
            <span className={styles.line} />
          </div>
          <h2 className={styles.title}>
            An Illustrious Legacy<br />
            we continue to <span className={styles.highlight}>Shape</span>
          </h2>
          <p className={styles.description}>
            A journey of excellence, innovation, and leadership that inspires generations and builds a better tomorrow.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {LEGACY_DATA.map((item, index) => (
            <motion.div
              key={index}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className={styles.cardWrapper}
            >
              <GlassCard className={styles.card}>
                <div
                  className={styles.iconWrapper}
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className={styles.value} style={{ color: item.color }}>
                  {item.value}
                </h3>
                <div className={styles.labelWrapper}>
                  <span className={styles.labelLine} style={{ backgroundColor: item.color }} />
                  <span className={styles.label}>{item.title}</span>
                  <span className={styles.labelLine} style={{ backgroundColor: item.color }} />
                </div>
                <p className={styles.cardDesc}>{item.description}</p>
                <div
                  className={styles.bottomLine}
                  style={{ backgroundColor: item.color }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
