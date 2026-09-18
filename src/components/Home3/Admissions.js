'use client';
import React from 'react';
import { Download, CheckCircle } from 'lucide-react';
import styles from './Admissions.module.css';

export default function Admissions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Side: Process & CTA */}
          <div className={styles.infoContent}>
            <div className={styles.badge}>Admissions 2024-25</div>
            <h2 className={styles.title}>Join Our Community of Learners</h2>
            <p className={styles.description}>
              We welcome students who are curious, motivated, and ready to embrace a challenging yet supportive educational environment.
            </p>
            
            <div className={styles.process}>
              <h3 className={styles.processTitle}>Admission Process</h3>
              <ul className={styles.processList}>
                <li>
                  <CheckCircle className={styles.processIcon} size={20} />
                  <span>Submit the online enquiry form</span>
                </li>
                <li>
                  <CheckCircle className={styles.processIcon} size={20} />
                  <span>Campus visit and interaction</span>
                </li>
                <li>
                  <CheckCircle className={styles.processIcon} size={20} />
                  <span>Student assessment</span>
                </li>
                <li>
                  <CheckCircle className={styles.processIcon} size={20} />
                  <span>Offer of admission and enrollment</span>
                </li>
              </ul>
            </div>
            
            <div className={styles.actions}>
              <button className={styles.primaryBtn}>Apply Now</button>
              <button className={styles.secondaryBtn}>
                <Download size={18} /> Download Brochure
              </button>
            </div>
          </div>
          
          {/* Right Side: Enquiry Form */}
          <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>Quick Enquiry</h3>
              <p className={styles.formSubtitle}>Fill out the form below and our admissions team will contact you shortly.</p>
              
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                  <label htmlFor="parentName">Parent's Name *</label>
                  <input type="text" id="parentName" placeholder="Enter your full name" required />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" placeholder="example@domain.com" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="studentName">Student's Name</label>
                    <input type="text" id="studentName" placeholder="Enter student's name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="grade">Grade Applying For *</label>
                    <select id="grade" required>
                      <option value="">Select Grade</option>
                      <option value="pre-primary">Pre-Primary</option>
                      <option value="primary">Primary (1-5)</option>
                      <option value="middle">Middle (6-8)</option>
                      <option value="secondary">Secondary (9-12)</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
