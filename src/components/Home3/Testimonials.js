'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "The dedication of the teachers and the comprehensive curriculum have transformed my child. We've seen remarkable growth not just academically, but in confidence and character.",
    author: "Priya Sharma",
    role: "Parent of Grade 8 Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    text: "Sri Chaitanya gave me the foundation I needed to crack competitive exams. The infrastructure and guidance from mentors are unparalleled.",
    author: "Rahul Verma",
    role: "Alumni, Class of 2023",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    text: "Moving to this school was the best decision. The balance between academics and co-curricular activities is exactly what we were looking for in an international school.",
    author: "Dr. Ananya Patel",
    role: "Parent of Grade 5 Student",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Voices of Our Community</h2>
          <p className={styles.subtitle}>
            Hear from our parents and students about their experiences and journey with us.
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={styles.swiper}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className={styles.slide}>
                <div className={styles.card}>
                  <Quote className={styles.quoteIcon} size={40} />
                  <p className={styles.text}>{item.text}</p>
                  
                  <div className={styles.authorInfo}>
                    <img src={item.image} alt={item.author} className={styles.authorImage} />
                    <div>
                      <h4 className={styles.authorName}>{item.author}</h4>
                      <p className={styles.authorRole}>{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
