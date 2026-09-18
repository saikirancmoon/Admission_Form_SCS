"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroSection.module.css";
import GlassCard from "../Premium/GlassCard";
import MagneticButton from "../Premium/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal animation
      gsap.from(".heroTextLine", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // Floating card fade up
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div ref={bgRef} className={styles.backgroundContainer}>
        {/* We use an existing image as background */}
        <div className={styles.overlay} />
        <img
          src="https://scs-main-v20.vercel.app/_next/image?url=%2Fhero-banners%2Fhome%2F4.jpeg&w=3840&q=75"
          alt="Hero Background"
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <div className={styles.eyebrowContainer}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Future-Ready Learning</span>
          </div>

          <h1 ref={titleRef} className={styles.title}>
            <div className={styles.textLineWrapper}>
              <span className="heroTextLine">Shaping bright</span>
            </div>
            <div className={styles.textLineWrapper}>
              <span className="heroTextLine"><strong>futures with</strong></span>
            </div>
            <div className={styles.textLineWrapper}>
              <span className="heroTextLine"><strong>academic excellence</strong></span>
            </div>
          </h1>

          <p className={clsx("heroTextLine", styles.description)}>
            Discover a nurturing learning environment designed to help every student grow with confidence, discipline, and purpose.
          </p>

          <div className={styles.actionContainer}>
            <MagneticButton className="heroTextLine">
              Admission 2026-2027
            </MagneticButton>
          </div>
        </div>

        {/* Floating Academic Badges / Card */}
        <div ref={cardRef} className={styles.floatingCardContainer}>
          <GlassCard className={styles.statsCard}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>40+</span>
              <span className={styles.statLabel}>Years of Legacy</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>8M+</span>
              <span className={styles.statLabel}>Alumni Network</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>850+</span>
              <span className={styles.statLabel}>Branches India</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

// Simple clsx utility substitute for inline since it's just two class names
function clsx(...args) {
  return args.filter(Boolean).join(" ");
}
