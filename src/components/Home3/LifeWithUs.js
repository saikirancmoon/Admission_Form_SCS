import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './LifeWithUs.module.css';

export default function LifeWithUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>Life With Us</h2>
            <p className={styles.subtitle}>
              Beyond academics, we offer a vibrant campus life that encourages exploration, creativity, and personal growth.
            </p>
          </div>
          <Link href="#" className={styles.exploreBtn}>
            Explore Campus Life <ArrowRight size={20} />
          </Link>
        </div>

        <div className={styles.gallery}>
          <div className={`${styles.galleryItem} ${styles.large}`}>
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Campus Life" 
            />
            <div className={styles.overlay}>
              <h3>Campus Life</h3>
              <p>A home away from home</p>
            </div>
          </div>
          
          <div className={styles.galleryCol}>
            <div className={`${styles.galleryItem} ${styles.medium}`}>
              <img 
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Sports" 
              />
              <div className={styles.overlay}>
                <h3>Sports</h3>
                <p>Building character and teamwork</p>
              </div>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.medium}`}>
              <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Arts & Culture" 
              />
              <div className={styles.overlay}>
                <h3>Arts & Culture</h3>
                <p>Nurturing creative expression</p>
              </div>
            </div>
          </div>
          
          <div className={`${styles.galleryItem} ${styles.tall}`}>
            <img 
              src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Events" 
            />
            <div className={styles.overlay}>
              <h3>Events & Activities</h3>
              <p>Celebrating milestones together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
