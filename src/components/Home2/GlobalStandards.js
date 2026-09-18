"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe, Lightbulb, ShieldCheck, Cpu } from "lucide-react";
import styles from "./GlobalStandards.module.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function GlobalStandards() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Header animation
    gsap.from(".globalHeader", {
      scrollTrigger: {
        trigger: ".globalHeader",
        start: "top 90%",
      },
      opacity: 0,
      y: -20,
      duration: 0.7,
    });

    // Grid staggering animation
    gsap.from(".globalCard", {
      scrollTrigger: {
        trigger: ".globalGrid",
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.globalStandards} ref={containerRef}>
      {/* Background Orbs */}
      <div className={styles.bgGlowTop} />
      <div className={styles.bgGlowBottom} />

      <div className={styles.container}>
        <div className={`${styles.header} globalHeader`}>
          <span className={styles.eyebrow}>WORLD CLASS</span>
          <h2 className={styles.title}>Global Standards of <span className={styles.highlight}>Education</span></h2>
          <p className={styles.subtitle}>
            We blend international pedagogies with advanced technological infrastructure to provide a truly global learning experience.
          </p>
        </div>

        <div className={`${styles.grid} globalGrid`}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.cardLarge} globalCard`}>
            <div className={styles.iconWrapper}>
              <Globe size={28} className={styles.iconBlue} />
            </div>
            <h3>International Curriculum</h3>
            <p>Benchmarked against the best educational systems worldwide, fostering global competitiveness.</p>
            <div className={styles.cardImageGlow} />
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} globalCard`}>
            <div className={styles.iconWrapper}>
              <Lightbulb size={28} className={styles.iconYellow} />
            </div>
            <h3>Innovative Pedagogy</h3>
            <p>Moving beyond rote learning to foster critical thinking and practical application.</p>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} globalCard`}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={28} className={styles.iconGreen} />
            </div>
            <h3>Safe & Secure Campus</h3>
            <p>State-of-the-art security measures ensuring a safe environment for all students.</p>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} ${styles.cardWide} globalCard`}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <Cpu size={28} className={styles.iconPurple} />
              </div>
              <h3>Tech-Enabled Classrooms</h3>
              <p>Smart boards, digital libraries, and AI-assisted learning tools integrated into every classroom.</p>
            </div>
            <div className={styles.techGraphic}>
              <div className={styles.dotGrid}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
