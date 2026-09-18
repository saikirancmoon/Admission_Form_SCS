import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import styles from './NewsEvents.module.css';

const events = [
  {
    date: '15',
    month: 'Aug',
    title: 'Independence Day Celebrations',
    category: 'School Activity'
  },
  {
    date: '22',
    month: 'Aug',
    title: 'Inter-School Science Exhibition',
    category: 'Academic'
  },
  {
    date: '05',
    month: 'Sep',
    title: 'Teachers Day Special Assembly',
    category: 'Event'
  }
];

export default function NewsEvents() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>News & Events</h2>
          <Link href="#" className={styles.viewAllBtn}>
            View All Updates <ArrowRight size={20} />
          </Link>
        </div>

        <div className={styles.layout}>
          {/* Featured News (Left) */}
          <div className={styles.featured}>
            <div className={styles.featuredImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1546410531-bea4d4b645e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Annual Sports Meet" 
                className={styles.featuredImage}
              />
              <div className={styles.categoryTag}>Featured News</div>
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.meta}>
                <Calendar size={16} /> August 10, 2024
              </span>
              <h3 className={styles.featuredTitle}>Annual Sports Meet 2024 Highlights</h3>
              <p className={styles.featuredExcerpt}>
                Our students showcased exceptional talent and sportsmanship at the 25th Annual Sports Meet. Multiple records were broken across track and field events.
              </p>
              <Link href="#" className={styles.readMoreBtn}>
                Read Full Story
              </Link>
            </div>
          </div>

          {/* Upcoming Events (Right) */}
          <div className={styles.eventsSidebar}>
            <h3 className={styles.sidebarTitle}>Upcoming Events</h3>
            <div className={styles.eventsList}>
              {events.map((event, index) => (
                <div key={index} className={styles.eventCard}>
                  <div className={styles.eventDateBox}>
                    <span className={styles.eventDate}>{event.date}</span>
                    <span className={styles.eventMonth}>{event.month}</span>
                  </div>
                  <div className={styles.eventDetails}>
                    <span className={styles.eventCategory}>{event.category}</span>
                    <h4 className={styles.eventTitle}>{event.title}</h4>
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
