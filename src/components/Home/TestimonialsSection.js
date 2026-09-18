"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TestimonialsSection.module.css";
import GlassCard from "../Premium/GlassCard";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "The dedication of the teachers and the world-class infrastructure have truly transformed my child's learning experience.",
    author: "Priya Sharma",
    role: "Parent of Grade 9 Student",
  },
  {
    text: "Sri Chaitanya Schools provided me with the foundation I needed to excel not just academically, but in life.",
    author: "Rahul Verma",
    role: "Alumni, Batch of 2020",
  },
  {
    text: "An institution that perfectly balances traditional values with modern, tech-driven education methodologies.",
    author: "Dr. Anjali Desai",
    role: "Education Consultant",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.bgGradient} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What <span className={styles.highlight}>People Say</span></h2>
        </div>

        <div className={styles.carouselContainer}>
          <button className={styles.navBtn} onClick={prevSlide}><ChevronLeft size={32} /></button>
          
          <div className={styles.cardWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                style={{ width: "100%" }}
              >
                <GlassCard className={styles.testimonialCard}>
                  <Quote size={48} className={styles.quoteIcon} />
                  <p className={styles.text}>"{TESTIMONIALS[currentIndex].text}"</p>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{TESTIMONIALS[currentIndex].author}</h4>
                    <p className={styles.authorRole}>{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navBtn} onClick={nextSlide}><ChevronRight size={32} /></button>
        </div>

        <div className={styles.dots}>
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
