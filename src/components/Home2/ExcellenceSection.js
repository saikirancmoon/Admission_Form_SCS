"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./ExcellenceSection.module.css";
import { Trophy, Award, Target, BookOpen, Star } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ExcellenceSection() {
  const containerRef = useRef(null);
  const orbitalRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(orbitalRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      x: 30,
      duration: 0.8,
      delay: 0.4,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.excellenceSection} ref={containerRef}>
      {/* Subtle Background Elements */}
      <div className={styles.bgGrid}></div>
      <div className={`${styles.bgGlow} ${styles.glowLeft}`}></div>
      <div className={`${styles.bgGlow} ${styles.glowRight}`}></div>

      <div className={styles.container}>
        
        {/* Left Area: The Orbital UI */}
        <div className={styles.orbitalArea} ref={orbitalRef}>
          
          {/* Orbital Rings */}
          <div className={`${styles.orbitRing} ${styles.ring1}`}></div>
          <div className={`${styles.orbitRing} ${styles.ring2}`}></div>
          <div className={`${styles.orbitRing} ${styles.ring3}`}></div>

          {/* Central Neumorphic Circle */}
          <div className={styles.centerCircle}>
            <h2 className={styles.percentage}>100<span className={styles.percentSymbol}>%</span></h2>
            <div className={styles.centerText}>
              <strong>RESULT</strong>
              <strong>DRIVEN</strong>
            </div>
          </div>

          {/* Floating Badges */}
          <div className={`${styles.floatingBadge} ${styles.badgeTop}`}>
            <Trophy size={20} className={styles.iconRed} />
          </div>
          <div className={`${styles.floatingBadge} ${styles.badgeRight}`}>
            <Award size={20} className={styles.iconBlue} />
          </div>
          <div className={`${styles.floatingBadge} ${styles.badgeBottom}`}>
            <Target size={20} className={styles.iconOrange} />
          </div>
          <div className={`${styles.floatingBadge} ${styles.badgeLeft}`}>
            <BookOpen size={20} className={styles.iconTeal} />
          </div>

        </div>

        {/* Center Area: Typography & Pills */}
        <div className={styles.textArea} ref={textRef}>
          <span className={styles.eyebrow}>ACADEMIC EXCELLENCE</span>
          <h2 className={styles.title}>
            Excellence Through <br />
            <span className={styles.gradientText}>Innovation</span>
          </h2>
          <p className={styles.description}>
            Delivering outstanding academic results through <br />
            innovative teaching and personalized learning.
          </p>
          
          <div className={styles.pillContainer}>
            <span className={styles.pill}>CBSE</span>
            <span className={styles.pill}>IIT</span>
            <span className={styles.pill}>NEET</span>
            <span className={styles.pill}>Olympiads</span>
          </div>
        </div>

        {/* Right Area: Achievement Card */}
        <div className={styles.cardArea} ref={cardRef}>
          <div className={styles.achievementCard}>
            <p className={styles.cardEyebrow}>Our Achievements</p>
            <h3 className={styles.cardValue}>25+</h3>
            <p className={styles.cardLabel}>Awards Won</p>
            
            <div className={styles.cardIconWrapper}>
              <Star fill="#EAB308" color="#EAB308" size={24} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
