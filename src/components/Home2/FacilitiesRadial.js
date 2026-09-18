"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./FacilitiesRadial.module.css";
import { ArrowRight, Trophy, FlaskConical, Building, ShieldCheck, Bus, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FacilitiesRadial() {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const facilities = [
    {
      id: 1,
      title: "Advanced Laboratories",
      desc: "State-of-the-art equipment for physics, chemistry, and biology.",
      icon: <FlaskConical size={24} color="#f59e0b" />,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Sports Complex",
      desc: "Olympic-standard facilities for indoor and outdoor sports.",
      icon: <Trophy size={24} color="#3b82f6" />,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Digital Library",
      desc: "Extensive collection of books, journals, and digital resources.",
      icon: <BookOpen size={24} color="#10b981" />,
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Premium Hostel",
      desc: "Safe, comfortable, and homely residential facilities.",
      icon: <Building size={24} color="#8b5cf6" />,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Safe Transport",
      desc: "GPS-enabled fleet ensuring secure commute for students.",
      icon: <Bus size={24} color="#ec4899" />,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    },
  ];

  useGSAP(() => {
    // Entrance Animation
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

    // Gallery staggered entrance
    gsap.from(".facilityCard", {
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 85%",
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  // Handle accordion hover using GSAP
  const handleMouseEnter = (index) => {
    setActiveCard(index);
    const cards = gsap.utils.toArray(".facilityCard");
    const desc = gsap.utils.toArray(".cardDesc");

    gsap.to(cards, {
      flex: (i) => (i === index ? 4 : 1),
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(desc, {
      opacity: (i) => (i === index ? 1 : 0),
      y: (i) => (i === index ? 0 : 20),
      duration: 0.4,
      delay: (i) => (i === index ? 0.2 : 0),
      ease: "power2.out",
    });
  };

  return (
    <div className={styles.container} ref={containerRef}>
      
      {/* Header Area */}
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <span className={styles.eyebrow}>WORLD CLASS FACILITIES</span>
          <h2 className={styles.title}>Nurturing Growth <br /> Beyond Academics</h2>
        </div>
        
        <button className={styles.exploreBtn}>
          Explore All Facilities <ArrowRight size={18} />
        </button>
      </div>

      {/* Interactive Gallery */}
      <div className={styles.gallery} ref={galleryRef}>
        {facilities.map((facility, index) => (
          <div 
            key={facility.id}
            className={`${styles.card} facilityCard`}
            style={{ flex: index === activeCard ? 4 : 1 }}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <img 
              src={facility.image} 
              alt={facility.title} 
              className={styles.cardImage} 
            />
            <div className={styles.cardOverlay}></div>
            
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                {facility.icon}
              </div>
              <div>
                <h3 className={styles.cardTitle}>{facility.title}</h3>
                <p 
                  className={`${styles.cardDesc} cardDesc`}
                  style={{ 
                    opacity: index === activeCard ? 1 : 0, 
                    transform: `translateY(${index === activeCard ? '0px' : '20px'})` 
                  }}
                >
                  {facility.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
