"use client";

import React from "react";
import Link from "next/link";
import styles from "./PremiumFooter.module.css";
import { MapPin, Phone, Mail } from "lucide-react";
import { clsx } from "clsx";

export default function PremiumFooter() {
  return (
    <footer className={styles.footer}>
      {/* Animated Background Layers */}
      <div className={styles.bgLayer1} />
      <div className={styles.bgLayer2} />
      
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Brand Info */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logoContainer}>
               <img
                  src="https://scs-main-v20.vercel.app/_next/image?url=%2Flogos%2Flogo_transparent_fixed.png&w=256&q=75"
                  alt="Sri Chaitanya Schools logo"
                  className={styles.logoImage}
                />
                <span className={styles.logoTitle}>Sri Chaitanya</span>
            </Link>
            <p className={styles.description}>
              India's Most Advanced Educational Institution, shaping bright futures with academic excellence and holistic development.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.list}>
              <li><Link href="/" className={styles.link}>About Us</Link></li>
              <li><Link href="/" className={styles.link}>Curriculum</Link></li>
              <li><Link href="/" className={styles.link}>Admissions</Link></li>
              <li><Link href="/" className={styles.link}>Gallery</Link></li>
              <li><Link href="/" className={styles.link}>Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.heading}>Contact Us</h4>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>Madhapur, Hyderabad, Telangana</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <span>+91 99999 99999</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>info@srichaitanyaschool.net</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h4 className={styles.heading}>Newsletter</h4>
            <p className={styles.subtext}>Subscribe to get the latest updates and news.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" className={styles.input} />
              <button type="submit" className={styles.submitBtn}>Subscribe</button>
            </form>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Sri Chaitanya Schools. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/" className={styles.link}>Privacy Policy</Link>
            <Link href="/" className={styles.link}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
