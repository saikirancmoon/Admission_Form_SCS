"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./NewsEvents.module.css";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function NewsEvents() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  const newsList = [
    {
      id: 1,
      title: "Science Exhibition 2024",
      date: "10 May 2024",
      image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      title: "Sports Meet 2024",
      date: "05 May 2024",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 3,
      title: "Education Summit 2024",
      date: "01 May 2024",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <div 
      className={styles.bentoCard}
      ref={containerRef}
    >
      
      {/* Header */}
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>NEWS & EVENTS</span>
          <h2 className={styles.title}>Stay Updated With<br/>Our Latest Happenings</h2>
        </div>
        <button className={styles.viewAllBtn}>
          View All <ArrowRight size={16} />
        </button>
      </div>

      <div className={styles.contentGrid}>
        
        {/* Left Featured Item */}
        <div className={styles.featuredCard} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=600)` }}>
          <div className={styles.overlay}></div>
          <button className={styles.playBtn}>
            <Play fill="white" size={20} />
          </button>
          <div className={styles.featuredContent}>
            <h3>Annual Day Celebration 2024</h3>
            <span className={styles.date}>15 May 2024</span>
            <p>A spectacular celebration of talent, creativity and excellence.</p>
          </div>
          <div className={styles.featuredArrow}>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Right List Items */}
        <div className={styles.listContainer}>
          {newsList.map((item) => (
            <div key={item.id} className={styles.listItem}>
              <div 
                className={styles.listImg} 
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className={styles.listContent}>
                <h4>{item.title}</h4>
                <span>{item.date}</span>
              </div>
              <ChevronRight size={16} className={styles.listArrow} />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
