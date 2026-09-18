import React from 'react';
import styles from './StatsSection.module.css';

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '15,000+', label: 'Students Enrolled' },
  { value: '500+', label: 'Experienced Faculty' },
  { value: '100%', label: 'Outstanding Results' }
];

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
