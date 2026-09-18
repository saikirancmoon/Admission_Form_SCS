'use client';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './Curriculum.module.css';

const stages = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary',
    age: 'Age 3 - 5 Years',
    description: 'A play-based approach fostering curiosity, social skills, and foundational learning in a nurturing environment.',
    features: ['Play-way Methodology', 'Motor Skills Development', 'Sensory Learning', 'Creative Expression']
  },
  {
    id: 'primary',
    title: 'Primary',
    age: 'Grades 1 - 5',
    description: 'Building strong academic foundations while encouraging critical thinking and independent exploration.',
    features: ['Integrated Curriculum', 'Activity-based Learning', 'Language Development', 'Mathematical Thinking']
  },
  {
    id: 'middle',
    title: 'Middle School',
    age: 'Grades 6 - 8',
    description: 'Transitioning to more structured learning with a focus on conceptual clarity and real-world application.',
    features: ['Subject-specific Focus', 'Project-based Learning', 'Life Skills Training', 'Technology Integration']
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    age: 'Grades 9 - 12',
    description: 'Rigorous academic preparation for board examinations and competitive success with comprehensive career guidance.',
    features: ['Board Exam Preparation', 'Career Counseling', 'Leadership Development', 'Advanced Laboratories']
  }
];

export default function Curriculum() {
  const [activeStage, setActiveStage] = useState(stages[0].id);

  const activeContent = stages.find(s => s.id === activeStage);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Academic Journey</h2>
          <p className={styles.subtitle}>
            A meticulously designed curriculum that evolves with your child, ensuring comprehensive development at every stage.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Timeline Navigation */}
          <div className={styles.timeline}>
            {stages.map((stage) => (
              <button 
                key={stage.id}
                className={`${styles.timelineBtn} ${activeStage === stage.id ? styles.active : ''}`}
                onClick={() => setActiveStage(stage.id)}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineText}>
                  <span className={styles.timelineTitle}>{stage.title}</span>
                  <span className={styles.timelineAge}>{stage.age}</span>
                </div>
                <ChevronRight className={styles.timelineIcon} size={20} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className={styles.contentArea}>
            <div className={styles.contentCard} key={activeContent.id}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{activeContent.title}</h3>
                <span className={styles.cardBadge}>{activeContent.age}</span>
              </div>
              <p className={styles.cardDescription}>{activeContent.description}</p>
              
              <h4 className={styles.featuresTitle}>Key Focus Areas</h4>
              <ul className={styles.featuresList}>
                {activeContent.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <div className={styles.featureBullet}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
