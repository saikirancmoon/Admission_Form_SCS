"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightSmall, BookOpen, Users, Trophy, Lightbulb, Globe, Laptop } from "lucide-react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import styles from "./ChooseUs.module.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    title: "Academic\nExcellence",
    subtitle: "Curriculum designed for\nglobal standards",
    icon: <BookOpen size={24} />,
    themeClass: styles.cardBlue,
    bgImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Vibrant\nCampus Life",
    subtitle: "Nurturing talent beyond\nthe classroom",
    icon: <Users size={24} />,
    themeClass: styles.cardRed,
    bgImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Sports\nArena",
    subtitle: "World class facilities for\nchampions",
    icon: <Trophy size={24} />,
    themeClass: styles.cardPurple,
    bgImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Innovation\nLab",
    subtitle: "Technology & innovation\nfor future leaders",
    icon: <Lightbulb size={24} />,
    themeClass: styles.cardTeal,
    bgImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Global\nLearning",
    subtitle: "Global exposure with\ninternational mindset",
    icon: <Globe size={24} />,
    themeClass: styles.cardDarkBlue,
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Smart\nClasses",
    subtitle: "Smart classrooms for\nsmarter learning",
    icon: <Laptop size={24} />,
    themeClass: styles.cardYellow,
    bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    title: "Holistic\nDevelopment",
    subtitle: "Mental and physical\nwell-being",
    icon: <Users size={24} />,
    themeClass: styles.cardRed,
    bgImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    title: "Expert\nFaculty",
    subtitle: "Learn from the\nvery best",
    icon: <BookOpen size={24} />,
    themeClass: styles.cardPurple,
    bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
  }
];

export default function ChooseUs() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    gsap.from(leftColRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(rightColRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section className={styles.chooseUsSection} ref={containerRef}>
      <div className={styles.container}>
        
        {/* Left Column: Fixed Content */}
        <div className={styles.leftCol} ref={leftColRef}>
          <div className={styles.orbContainer}>
            <div className={styles.floatingOrb}></div>
          </div>
          
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>WHY PARENTS</span>
            <h2 className={styles.title}>CHOOSE US</h2>
          </div>

          <div className={styles.navButtons}>
            <button ref={prevRef} className={styles.navBtn}>
              <ArrowLeft size={20} />
            </button>
            <button ref={nextRef} className={styles.navBtn}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Column: Swiper Grid */}
        <div className={styles.rightCol} ref={rightColRef}>
          <Swiper
            modules={[Grid, Navigation]}
            slidesPerView={3}
            grid={{
              rows: 2,
              fill: 'row',
            }}
            spaceBetween={20}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Attach navigation to custom refs
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className={styles.swiperContainer}
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id} className={styles.swiperSlide}>
                <div className={`${styles.card} ${card.themeClass}`}>
                  
                  {/* Background Image with Mask */}
                  <div 
                    className={styles.cardBg} 
                    style={{ backgroundImage: `url(${card.bgImage})` }} 
                  />

                  {/* Content Overlay */}
                  <div className={styles.cardContent}>
                    <div className={styles.cardIcon}>
                      {card.icon}
                    </div>
                    
                    <div className={styles.cardTextWrapper}>
                      <h3 className={styles.cardTitle}>
                        {card.title.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </h3>
                      <p className={styles.cardSubtitle}>
                        {card.subtitle.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>

                    <button className={styles.cardBtn}>
                      <ArrowRightSmall size={16} strokeWidth={3} />
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
