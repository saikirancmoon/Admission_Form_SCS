"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./CampusGallery.module.css";
import { ArrowRight } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function CampusGallery() {
  const containerRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600",
  ];

  useGSAP(() => {
    gsap.from(".galleryCol", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div className={styles.bentoCard} ref={containerRef}>
      <div className={styles.leftContent}>
        <span className={styles.eyebrow}>CAMPUS LIFE</span>
        <h2 className={styles.title}>Experience Our<br/>Vibrant Campus</h2>
        <button className={styles.galleryBtn}>
          View Gallery <ArrowRight size={16} />
        </button>
      </div>

      <div className={styles.rightGrid}>
        {/* Col 1: Tall */}
        <div className={`${styles.gridCol1} galleryCol`}>
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[0]})` }} />
        </div>

        {/* Col 2: Stacked */}
        <div className={`${styles.gridCol2} galleryCol`}>
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[1]})` }} />
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[2]})` }} />
        </div>

        {/* Col 3: Stacked */}
        <div className={`${styles.gridCol2} galleryCol`}>
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[3]})` }} />
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[4]})` }} />
        </div>

        {/* Col 4: Stacked */}
        <div className={`${styles.gridCol2} galleryCol`}>
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[5]})` }} />
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[6]})` }} />
        </div>

        {/* Col 5: Stacked */}
        <div className={`${styles.gridCol2} galleryCol`}>
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[7]})` }} />
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[8]})` }} />
        </div>

        {/* Col 6: Stacked */}
        <div className={`${styles.gridCol2} galleryCol`}>
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[9]})` }} />
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[10]})` }} />
        </div>

        {/* Col 7: Tall */}
        <div className={`${styles.gridCol1} galleryCol`}>
          <div className={styles.imgBlock} style={{ backgroundImage: `url(${images[11]})` }} />
        </div>
      </div>
    </div>
  );
}
