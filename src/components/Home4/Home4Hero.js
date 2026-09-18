"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Home4Hero.module.css";

export default function Home4Hero() {
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp"
  ];

  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Autoplay, Navigation]}
        speed={1000}
        spaceBetween={30}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        className={styles.swiperContainer}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className={styles.bgImage} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
