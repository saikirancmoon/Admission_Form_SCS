"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./StudentJourney.module.css";
import { ArrowRight, Baby, User, Users, GraduationCap, Award } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function StudentJourney() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const nodesRef = useRef(null);

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

    gsap.from(".journeyNode", {
      scrollTrigger: {
        trigger: nodesRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      scale: 0.9,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  const nodes = [
    {
      id: 1,
      title: "Pre-Primary",
      subtitle: "Foundation\nYears",
      icon: <Baby size={28} />,
      colorClass: styles.nodeGold,
    },
    {
      id: 2,
      title: "Primary",
      subtitle: "Building\nCuriosity",
      icon: <User size={28} />,
      colorClass: styles.nodeBlue,
    },
    {
      id: 3,
      title: "Middle School",
      subtitle: "Exploring\nPotential",
      icon: <Users size={28} />,
      colorClass: styles.nodeTeal,
    },
    {
      id: 4,
      title: "High School",
      subtitle: "Preparing for\nExcellence",
      icon: <GraduationCap size={28} />,
      colorClass: styles.nodePurple,
    },
    {
      id: 5,
      title: "Future Success",
      subtitle: "Leaders of\nTomorrow",
      icon: <Award size={28} />,
      colorClass: styles.nodeOrange,
    },
  ];

  return (
    <section className={styles.journeySection} ref={containerRef}>
      {/* Background Animated Stars */}
      <div className={styles.starsContainer}>
        <div className={`${styles.star} ${styles.star1}`}></div>
        <div className={`${styles.star} ${styles.star2}`}></div>
        <div className={`${styles.star} ${styles.star3}`}></div>
        <div className={`${styles.star} ${styles.star4}`}></div>
        <div className={`${styles.star} ${styles.star5}`}></div>
        <div className={`${styles.star} ${styles.star6}`}></div>
      </div>

      <div className={styles.container}>
        
        {/* Left Column: Text & CTA */}
        <div className={styles.leftCol} ref={leftColRef}>
          <span className={styles.eyebrow}>STUDENT JOURNEY</span>
          <h2 className={styles.title}>From Learning<br/>To Leadership</h2>
          <p className={styles.description}>
            A transformative journey that<br/>nurtures young minds at<br/>every stage.
          </p>
          <button className={styles.ctaBtn}>
            Know More <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Column: Timeline */}
        <div className={styles.rightCol}>
          <div className={styles.timelineWrapper}>
            
            {/* The continuous glowing line */}
            <div className={styles.connectingLine}></div>

            {/* Nodes */}
            <div 
              className={styles.nodesContainer}
              ref={nodesRef}
            >
              {nodes.map((node) => (
                <div key={node.id} className={`${styles.nodeItem} journeyNode`}>
                  
                  {/* Glowing Circle */}
                  <div className={`${styles.nodeCircle} ${node.colorClass}`}>
                    <div className={styles.nodeIconInner}>
                      {node.icon}
                    </div>
                  </div>

                  {/* Text Below */}
                  <div className={styles.nodeText}>
                    <h4>{node.title}</h4>
                    <p>
                      {node.subtitle.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
