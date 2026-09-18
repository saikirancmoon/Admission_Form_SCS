import React from 'react';
import { Award, GraduationCap, Globe, Star } from 'lucide-react';
import styles from './Achievements.module.css';

const achievements = [
  {
    icon: <GraduationCap size={32} />,
    number: '99%',
    label: 'Academic Results',
    description: 'Consistently topping board examinations across all branches.'
  },
  {
    icon: <Award size={32} />,
    number: '500+',
    label: 'National Awards',
    description: 'Recognized for excellence in education and infrastructure.'
  },
  {
    icon: <Globe size={32} />,
    number: '120+',
    label: 'Olympiad Success',
    description: 'Students excelling in national and international Olympiads.'
  },
  {
    icon: <Star size={32} />,
    number: '50K+',
    label: 'Alumni Network',
    description: 'Successful alumni placed in top universities worldwide.'
  }
];

export default function Achievements() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>A Legacy of Excellence</h2>
          <p className={styles.subtitle}>
            Our commitment to quality education reflects in the outstanding achievements of our students year after year.
          </p>
        </div>

        <div className={styles.grid}>
          {achievements.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className={styles.number}>{item.number}</h3>
              <h4 className={styles.label}>{item.label}</h4>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
