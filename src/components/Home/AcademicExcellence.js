"use client";

import React from "react";
import styles from "./AcademicExcellence.module.css";
import { BentoGrid, BentoGridItem } from "../Premium/BentoGrid";
import { BookOpen, Brain, Microscope, Globe, Code, Music } from "lucide-react";

const ACADEMIC_DATA = [
  {
    title: "Advanced STEM Curriculum",
    description: "State-of-the-art laboratories and tech-driven classrooms fostering analytical thinking.",
    icon: <Microscope className={styles.icon} />,
    header: <div className={`${styles.headerImg} ${styles.img1}`} />,
  },
  {
    title: "Global Perspectives",
    description: "International exchange programs and diverse cultural integration.",
    icon: <Globe className={styles.icon} />,
    header: <div className={`${styles.headerImg} ${styles.img2}`} />,
  },
  {
    title: "Coding & Robotics",
    description: "Preparing students for the future with hands-on coding and robotics.",
    icon: <Code className={styles.icon} />,
    header: <div className={`${styles.headerImg} ${styles.img3}`} />,
  },
  {
    title: "Holistic Development",
    description: "Balancing academics with sports, arts, and personal growth.",
    icon: <Brain className={styles.icon} />,
    header: <div className={`${styles.headerImg} ${styles.img4}`} />,
  },
  {
    title: "Performing Arts",
    description: "Nurturing creativity through comprehensive music and theater programs.",
    icon: <Music className={styles.icon} />,
    header: <div className={`${styles.headerImg} ${styles.img5}`} />,
  },
];

export default function AcademicExcellence() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Academic <span className={styles.highlight}>Excellence</span></h2>
          <p className={styles.description}>
            Our curriculum is designed to challenge, inspire, and prepare students for the complexities of the modern world.
          </p>
        </div>

        <BentoGrid className={styles.grid}>
          {ACADEMIC_DATA.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              index={i}
              className={i === 0 || i === 3 ? styles.largeItem : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
