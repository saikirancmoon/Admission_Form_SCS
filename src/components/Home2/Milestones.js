"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Milestones.module.css";
import { Trophy, Star, Users, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Milestones() {
  const containerRef = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);

  const awards = [
    { id: 1, title: "National Education Excellence Award", year: "2024" },
    { id: 2, title: "Best School for Innovation", year: "2023" },
    { id: 3, title: "Academic Excellence Award", year: "2022" },
    { id: 4, title: "Outstanding Community Impact", year: "2021" },
  ];

  useGSAP(() => {
    // Container Entrance
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Staggered Stat Cards
    gsap.from(".statCard", {
      scrollTrigger: {
        trigger: ".statsGrid",
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)",
    });

    // Number Counters
    const animateCounter = (ref, target) => {
      gsap.to({ val: 0 }, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".statsGrid",
          start: "top 85%",
        },
        onUpdate: function () {
          if (ref.current) {
            ref.current.innerText = Math.floor(this.targets()[0].val);
          }
        },
      });
    };

    animateCounter(num1Ref, 25);
    animateCounter(num2Ref, 150);
    animateCounter(num3Ref, 100);

    // Staggered Awards Grid with 3D Reveal
    gsap.from(".awardCard", {
      scrollTrigger: {
        trigger: ".awardsGrid",
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      rotationX: -45,
      transformOrigin: "top center",
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

  }, { scope: containerRef });

  return (
    <div className={styles.container} ref={containerRef}>
      
      {/* Background Glowing Blobs */}
      <div className={styles.bgElements}>
        <div className={`${styles.glowBlob} ${styles.glow1}`}></div>
        <div className={`${styles.glowBlob} ${styles.glow2}`}></div>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>ACHIEVEMENTS</span>
        <h2 className={styles.title}>A Legacy of Excellence</h2>
        <p className={styles.subtitle}>
          Decades of commitment to shaping brilliant minds and achieving extraordinary outcomes globally.
        </p>
      </div>

      {/* Large Stats */}
      <div className={`${styles.statsGrid} statsGrid`}>
        
        <div className={`${styles.statCard} statCard`}>
          <div className={styles.iconWrapper}>
            <Trophy color="white" size={32} />
          </div>
          <div className={styles.numberWrapper}>
            <span className={styles.number} ref={num1Ref}>0</span>
            <span className={styles.suffix}>+</span>
          </div>
          <span className={styles.label}>Years of Experience</span>
        </div>

        <div className={`${styles.statCard} statCard`}>
          <div className={styles.iconWrapper}>
            <Users color="white" size={32} />
          </div>
          <div className={styles.numberWrapper}>
            <span className={styles.number} ref={num2Ref}>0</span>
            <span className={styles.suffix}>k+</span>
          </div>
          <span className={styles.label}>Successful Alumni</span>
        </div>

        <div className={`${styles.statCard} statCard`}>
          <div className={styles.iconWrapper}>
            <GraduationCap color="white" size={32} />
          </div>
          <div className={styles.numberWrapper}>
            <span className={styles.number} ref={num3Ref}>0</span>
            <span className={styles.suffix}>%</span>
          </div>
          <span className={styles.label}>Academic Success Rate</span>
        </div>

      </div>

      {/* Awards */}
      <div className={`${styles.awardsGrid} awardsGrid`}>
        {awards.map((award) => (
          <div key={award.id} className={`${styles.awardCard} awardCard`}>
            <span className={styles.awardYear}>{award.year}</span>
            <h4 className={styles.awardTitle}>{award.title}</h4>
            <Star fill="#EAB308" color="#EAB308" size={24} />
          </div>
        ))}
      </div>

    </div>
  );
}
