"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./NewsAndTestimonials.module.css";
import { ArrowRight, Play, Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Priya Sharma", title: "The best decision for my child's future.", img: "https://scs-main-v20.vercel.app/_next/image?url=%2Fhero-banners%2Fhome%2F1.jpeg&w=3840&q=75" },
  { name: "Rajesh Kumar", title: "Amazing faculty and environment.", img: "https://scs-main-v20.vercel.app/_next/image?url=%2Fhero-banners%2Fhome%2F2.jpeg&w=3840&q=75" },
];

const NEWS = [
  { title: "Science Exhibition 2024", date: "10 May 2024", thumb: "https://scs-main-v20.vercel.app/_next/image?url=%2Fhero-banners%2Fhome%2F4.jpeg&w=3840&q=75" },
  { title: "Sports Meet 2024", date: "05 May 2024", thumb: "https://scs-main-v20.vercel.app/_next/image?url=%2Fhero-banners%2Fhome%2F5.jpeg&w=3840&q=75" },
  { title: "Education Summit 2024", date: "01 May 2024", thumb: "https://scs-main-v20.vercel.app/_next/image?url=%2Fhero-banners%2Fhome%2F3.jpeg&w=3840&q=75" },
];

export default function NewsAndTestimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left: Testimonials */}
        <div className={styles.testimonialsSide}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>PARENT STORIES</span>
              <h2 className={styles.title}>Voices That Inspire</h2>
            </div>
          </div>

          <div className={styles.videoCards}>
            {TESTIMONIALS.map((test, idx) => (
              <motion.div 
                key={idx}
                className={styles.videoCard}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ backgroundImage: `url('${test.img}')` }}
              >
                <div className={styles.cardOverlay} />
                <button className={styles.playBtn}><Play size={20} fill="currentColor" /></button>
                <div className={styles.cardContent}>
                  <p className={styles.quote}>"{test.title}"</p>
                  <span className={styles.author}>- {test.name}</span>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} color="#FFD700" fill="#FFD700" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className={styles.navDots}>
            <span className={styles.dotActive} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>

        {/* Right: News & Events */}
        <div className={styles.newsSide}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>NEWS & EVENTS</span>
              <h2 className={styles.title}>Stay Updated With <br />Our Latest Happenings</h2>
            </div>
            <button className={styles.viewAllBtn}>
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className={styles.newsContainer}>
            {/* Featured News */}
            <motion.div 
              className={styles.featuredNews}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: `url('https://scs-main-v20.vercel.app/_next/image?url=%2Fhero-banners%2Fhome%2F3.jpeg&w=3840&q=75')` }}
            >
              <div className={styles.featuredOverlay} />
              <div className={styles.featuredContent}>
                <button className={styles.playBtnSmall}><Play size={16} fill="currentColor" /></button>
                <h3>Annual Day Celebration 2024</h3>
                <span>15 May 2024</span>
              </div>
            </motion.div>

            {/* News List */}
            <div className={styles.newsList}>
              {NEWS.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={styles.newsListItem}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <img src={item.thumb} alt={item.title} className={styles.newsThumb} />
                  <div className={styles.newsInfo}>
                    <h4>{item.title}</h4>
                    <span>{item.date}</span>
                  </div>
                  <ArrowRight size={16} className={styles.newsArrow} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
