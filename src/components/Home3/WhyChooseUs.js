import React from 'react';
import { BookOpen, Building2, Trophy, Lightbulb, ShieldCheck, HeartPulse } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    icon: <BookOpen className={styles.icon} />,
    title: 'Academic Excellence',
    description: 'A rigorous curriculum designed to challenge and inspire students to achieve their highest potential.'
  },
  {
    icon: <Building2 className={styles.icon} />,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities providing an optimal environment for learning and growth.'
  },
  {
    icon: <Trophy className={styles.icon} />,
    title: 'Sports & Activities',
    description: 'Comprehensive physical education and extracurricular programs for balanced development.'
  },
  {
    icon: <Lightbulb className={styles.icon} />,
    title: 'Innovation & Technology',
    description: 'Future-ready classrooms equipped with the latest educational technology.'
  },
  {
    icon: <ShieldCheck className={styles.icon} />,
    title: 'Safe Campus',
    description: 'Secure, nurturing environment where every student feels valued and protected.'
  },
  {
    icon: <HeartPulse className={styles.icon} />,
    title: 'Holistic Development',
    description: 'Focusing on character building, emotional intelligence, and social responsibility.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.subtitle}>
            Discover the Sri Chaitanya difference. We provide a comprehensive educational experience that prepares students for global success.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
