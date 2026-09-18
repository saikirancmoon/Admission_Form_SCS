import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Premium International Education
          </div>
          <h1 className={styles.headline}>
            Empowering Young Minds for <span className={styles.highlight}>Tomorrow</span>
          </h1>
          <p className={styles.subheading}>
            A nurturing environment where academic excellence, innovation, creativity, and character development come together.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="#" className={styles.primaryBtn}>
              Explore School
            </Link>
            <Link href="#" className={styles.secondaryBtn}>
              Apply Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBackground}></div>
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Students on Campus" 
            className={styles.heroImage}
          />
          
          {/* Floating Card */}
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>🎓</div>
            <div className={styles.floatingText}>
              <span className={styles.floatingNumber}>100%</span>
              <span className={styles.floatingLabel}>Board Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
