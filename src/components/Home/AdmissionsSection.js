"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./AdmissionsSection.module.css";
import MagneticButton from "../Premium/MagneticButton";

const STEPS = [
  { step: "01", title: "Inquiry", desc: "Submit your details online to receive the admission brochure." },
  { step: "02", title: "Campus Tour", desc: "Visit our campus to experience the infrastructure and environment." },
  { step: "03", title: "Interaction", desc: "A brief interactive session with the student and parents." },
  { step: "04", title: "Enrollment", desc: "Complete the documentation and join the Sri Chaitanya family." },
];

export default function AdmissionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Join Our <span className={styles.highlight}>Community</span></h2>
          <p className={styles.description}>
            Begin your journey towards academic excellence and holistic development.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {STEPS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={styles.stepContainer}
            >
              <div className={styles.dot} />
              <div className={styles.stepContent}>
                <span className={styles.stepNumber}>{item.step}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.actionContainer}>
          <MagneticButton className={styles.applyBtn}>Start Application</MagneticButton>
        </div>
      </div>
    </section>
  );
}
