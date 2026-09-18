"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './Home4Stats.module.css';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing function for smoother counting
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};

export default function Home4Stats() {
  const stats = [
    { number: 22, label: "STATES" },
    { number: 248, label: "CITIES" },
    { number: 40, label: "YEARS" },
    { number: 950, label: "SCHOOLS" },
    { number: 55000, label: "STAFF" },
    { number: 950000, label: "STUDENTS" },
    { number: 1361738, label: "PARENTS" },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>SRI CHAITANYA SCHOOLS</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.grid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.number}>
                <CountUp end={stat.number} />
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
