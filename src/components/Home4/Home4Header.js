"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import styles from "./Home4Header.module.css";
import Image from "next/image";

export default function Home4Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarLeft}>
            <a href="tel:+911234567890" className={styles.topBarLink}>
              <Phone size={14} /> +91 12345 67890
            </a>
            <a href="mailto:info@srichaitanya.net" className={styles.topBarLink}>
              <Mail size={14} /> info@srichaitanya.net
            </a>
          </div>
          <div className={styles.topBarRight}>
            <Link href="#" className={styles.topBarLink}>Apply Now</Link>
            <span className={styles.topBarDivider}>|</span>
            <Link href="#" className={styles.topBarLink}>Admission Enquiry Form</Link>
          </div>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          
          {/* Logo (Left) */}
          <Link href="/home4" className={styles.logoContainer}>
            <Image src="/images/logo.png" alt="Sri Chaitanya Logo" width={200} height={50} className={styles.logoMark} style={{ objectFit: 'contain' }} />
          </Link>

          {/* Navigation & Actions (Right) */}
          <nav className={styles.desktopNav}>
            <Link href="/home4" className={styles.navLink}>Home</Link>
            <Link href="#" className={styles.navLink}>About</Link>
            <Link href="#" className={styles.navLink}>Academics</Link>
            <Link href="#" className={styles.navLink}>Facilities</Link>
            <Link href="#" className={styles.navLink}>Admissions</Link>
            <Link href="#" className={styles.navLink}>Gallery</Link>
            
            <button className={styles.searchBtn} aria-label="Search">
              <Search size={18} />
            </button>
            <button className={styles.ctaBtn}>
              Contact Us <ArrowRight size={16} />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileToggle} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
            <Link href="/home4" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="#" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="#" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Academics</Link>
            <Link href="#" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
            <Link href="#" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Admissions</Link>
            <Link href="#" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link href="#" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            <button className={styles.mobileCtaBtn}>Contact Us</button>
          </div>
        </div>
      )}
    </>
  );
}
