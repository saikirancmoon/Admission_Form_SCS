"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./FacilitiesSection.module.css";
import { clsx } from "clsx";

const FACILITIES = [
  { title: "Smart Classrooms", category: "Academic", size: "large", imgClass: styles.img1 },
  { title: "Advanced Robotics Lab", category: "Innovation", size: "medium", imgClass: styles.img2 },
  { title: "Olympic Swimming Pool", category: "Sports", size: "small", imgClass: styles.img3 },
  { title: "Modern Library", category: "Resources", size: "medium", imgClass: styles.img4 },
  { title: "Indoor Sports Complex", category: "Sports", size: "large", imgClass: styles.img5 },
];

export default function FacilitiesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>World-Class <span className={styles.highlight}>Facilities</span></h2>
          <p className={styles.description}>
            Experience a campus designed to foster creativity, athleticism, and intellectual growth.
          </p>
        </div>

        <div className={styles.masonryGrid}>
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={clsx(styles.gridItem, styles[facility.size])}
            >
              <div className={clsx(styles.imageBackground, facility.imgClass)} />
              <div className={styles.overlay}>
                <span className={styles.category}>{facility.category}</span>
                <h3 className={styles.itemTitle}>{facility.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
