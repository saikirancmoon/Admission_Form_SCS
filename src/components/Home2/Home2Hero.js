"use client";

import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "./Home2Hero.module.css";
import { ArrowRight, Play, Users, Trophy, Award, Home, BookOpen, Microscope, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Home2Hero() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' ' + styles.customBullet + '"></span>';
    },
  };

  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.from(".heroOverlayStat", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(".heroRightNav", {
      opacity: 0,
      x: 50,
      duration: 0.8,
      delay: 0.8,
      ease: "power2.out",
    });

    gsap.from(".heroPlayBtn", {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      delay: 1,
      ease: "power2.out",
    });
  }, { scope: heroRef });

  return (
    <section className={styles.heroSection} ref={heroRef}>
      {/* Dynamic Deep Space/Sunset Background Elements (Fixed behind slider) */}
      <div className={styles.globalBgElements}>
        <div className={styles.glowOrbPlanet} />
        <div className={styles.glowOrbTopLeft} />
        <div className={styles.glowOrbBottomRight} />
        <div className={styles.starsOverlay} />
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={pagination}
        className={styles.swiperContainer}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          {({ isActive }) => (
            <div className={styles.slideWrapper}>
              <div className={styles.container}>
                
                {/* Main Content (Left Side) */}
                <div className={styles.content}>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                    transition={{ duration: 0.8 }}
                    className={styles.title}
                  >
                    EDUCATION FOR <br />
                    THE <span className={styles.highlight}>NEXT</span> <br />
                    GENERATION
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.subtitle}
                  >
                    Empowering Future Innovators, <br />
                    Leaders & Global Citizens
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.actions}
                  >
                    <button className={styles.primaryBtn}>
                      Explore Campus <ArrowRight size={18} />
                    </button>
                    <button className={styles.secondaryBtn}>
                      Admissions <ArrowRight size={18} />
                    </button>
                  </motion.div>
                </div>

              {/* Floating Island Asset (Center/Right) */}
              <div className={styles.centerAsset}>
                <motion.div 
                  className={styles.islandContainer}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  {/* Generated Image */}
                  <Image 
                    src="/images/school-img.png" 
                    alt="School Building" 
                    layout="fill" 
                    objectFit="contain"
                    priority
                  />
                </motion.div>

                {/* Floating Glassmorphic Badges */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className={`${styles.floatingBadge} ${styles.badgeTop}`}
                >
                  <div className={styles.badgeText}>
                    <strong>25+</strong>
                    <span>Years of<br/>Excellence</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className={`${styles.floatingBadge} ${styles.badgeRight}`}
                >
                  <div className={styles.badgeText}>
                    <strong>100%</strong>
                    <span>Results<br/>Driven</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className={`${styles.floatingBadge} ${styles.badgeLeft}`}
                >
                  <div className={styles.badgeText}>
                    <strong>Future</strong>
                    <span>Ready<br/>Students</span>
                  </div>
                </motion.div>

                {/* Small floating gems/bubbles */}
                <motion.div className={`${styles.gem} ${styles.gem1}`} animate={{ opacity: isActive ? 0.8 : 0, y: [0, -15, 0], rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
                <motion.div className={`${styles.gem} ${styles.gem2}`} animate={{ opacity: isActive ? 0.8 : 0, y: [0, -20, 0], rotate: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} />
                <motion.div className={`${styles.gem} ${styles.gem3}`} animate={{ opacity: isActive ? 0.8 : 0, y: [0, -10, 0], rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }} />
              </div>
              
            </div>
          </div>
          )}
        </SwiperSlide>

        {/* You can add more slides here if needed for auto-play, replicating the structure with different content */}
        <SwiperSlide>
          {({ isActive }) => (
            <div className={styles.slideWrapper}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                    transition={{ duration: 0.8 }}
                    className={styles.title}
                  >
                    DISCOVER A <br />
                    <span className={styles.highlight}>WORLD CLASS</span> <br />
                    ENVIRONMENT
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.subtitle}
                  >
                    State-of-the-art facilities designed for <br />
                    holistic student development.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.actions}
                  >
                    <button className={styles.primaryBtn}>
                      Take a Tour <ArrowRight size={18} />
                    </button>
                  </motion.div>
                </div>
              <div className={styles.centerAsset}>
                <motion.div 
                  className={styles.islandContainer}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  {/* Same image for demo, could be different */}
                  <Image src="/images/school-img.png" alt="Facilities" layout="fill" objectFit="contain" priority />
                </motion.div>
              </div>
            </div>
          </div>
          )}
        </SwiperSlide>
      </Swiper>

      {/* Static Elements overlaying the slider (Stats Bar, Right Nav, Play Button) */}
      
      {/* Bottom Stats Bar */}
      <div className={`${styles.statsBarWrapper} heroOverlayStat`}>
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statIconWrapper}><Users size={20} /></div>
            <div className={styles.statContent}>
              <strong>15,000+</strong>
              <span>Happy Students</span>
            </div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <div className={styles.statIconWrapper}><Trophy size={20} /></div>
            <div className={styles.statContent}>
              <strong>25+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <div className={styles.statIconWrapper}><Award size={20} /></div>
            <div className={styles.statContent}>
              <strong>100%</strong>
              <span>Results Achieved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Vertical Quick Links */}
      <div className={`${styles.rightNav} heroRightNav`}>
        <div className={styles.rightNavContainer}>
          <button className={styles.rightNavItem}><Home size={18} /></button>
          <button className={styles.rightNavItem}><BookOpen size={18} /></button>
          <button className={styles.rightNavItem}><Microscope size={18} /></button>
          <button className={styles.rightNavItem}><ImageIcon size={18} /></button>
        </div>
      </div>

      {/* Play Video Button (Right Bottom) */}
      <button className={`${styles.playVideoBtn} heroPlayBtn`}>
        <Play size={24} fill="currentColor" />
      </button>

    </section>
  );
}
