"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./PreFooterCTA.module.css";
import { ArrowRight } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function PreFooterCTA() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section 
      className={styles.section}
      ref={containerRef}
    >
      <div className={styles.container}>
        
        <img 
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200" 
          alt="Indian School Kids with Bags" 
          className={styles.studentsImg}
        />
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>READY TO SHAPE</span>
          <h2 className={styles.title}>YOUR CHILD'S <span className={styles.highlight}>FUTURE?</span></h2>
          <p className={styles.subtitle}>Admissions Open for Academic Year 2024-25. Join a community dedicated to academic excellence and holistic growth.</p>
          <button className={styles.applyBtn}>
            Apply Now <ArrowRight size={18} />
          </button>
        </div>

        <div className={styles.admissionBlock}>
          <div>
            <span className={styles.admTitle}>Admissions</span>
            <span className={styles.admYear}>2024 - 2025</span>
          </div>
          <button className={styles.circleBtn}><ArrowRight size={20} color="#04061A" /></button>
        </div>

      </div>
    </section>
  );
}
