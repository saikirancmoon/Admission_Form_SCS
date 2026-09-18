'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/home3" className={styles.logoContainer}>
          <img 
            src="/images/logo.webp" 
            alt="Sri Chaitanya School" 
            className={styles.logo}
          />
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>
                About
                <span className={styles.chevron}></span>
              </Link>
              <div className={styles.dropdown}>
                <Link href="#" className={styles.dropdownItem}>Our School</Link>
                <Link href="#" className={styles.dropdownItem}>CBSE Houses</Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>Curriculum</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>Life With Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>Admissions</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>Resources</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>Careers</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.searchBtn} aria-label="Search">
            <Search size={20} />
          </button>
          <Link href="#" className={styles.applyBtn}>
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
