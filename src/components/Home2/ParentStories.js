"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./ParentStories.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Play, Star, ArrowRight, ArrowLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ParentStories() {
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

  const stories = [
    {
      id: 1,
      quote: "The best decision for my child's future.",
      author: "Priya Sharma",
      bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      rating: 5,
    },
    {
      id: 2,
      quote: "Amazing faculty and environment.",
      author: "Rajesh Kumar",
      bgImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      rating: 5,
    },
    {
      id: 3,
      quote: "Happy with the overall development.",
      author: "Anita Desai",
      bgImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      rating: 5,
    },
  ];

  return (
    <div 
      className={styles.bentoCard}
      ref={containerRef}
    >
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>PARENT STORIES</span>
          <h2 className={styles.title}>Voices That Inspire</h2>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={2.2}
          navigation={{
            nextEl: `.${styles.nextNavBtn}`,
          }}
          pagination={{ clickable: true, el: `.${styles.customPagination}` }}
          className={styles.swiper}
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div 
                className={styles.storyCard} 
                style={{ backgroundImage: `url(${story.bgImage})` }}
              >
                <div className={styles.overlay}></div>
                
                <button className={styles.playBtn}>
                  <Play fill="white" size={20} />
                </button>

                <div className={styles.cardContent}>
                  <p className={styles.quote}>"{story.quote}"</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.author}>- {story.author}</span>
                    <div className={styles.stars}>
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} size={10} fill="#EAB308" color="#EAB308" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation & Pagination overlap */}
          <button className={styles.nextNavBtn}>
            <ArrowRight size={20} />
          </button>
          
        </Swiper>
        <div className={styles.customPagination}></div>
      </div>
    </div>
  );
}
