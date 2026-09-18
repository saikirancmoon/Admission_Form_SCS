"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Search, ArrowRight, Menu, X, ChevronRight } from "lucide-react";
import styles from "./Home2Header.module.css";
import Image from "next/image";
import { home2Routes } from "./home2InnerPagesData";

export default function Home2Header() {
  const headerRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: headerRef });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = (menu) => setActiveDropdown(activeDropdown === menu ? null : menu);

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.container}>
          
          <div className={styles.leftGroup}>
            {/* Hamburger for mobile/tablet */}
            <button className={styles.hamburgerBtn} onClick={toggleSidebar}>
              <Menu size={24} color="white" />
            </button>
            
            <div className={styles.logo}>
              <Image src="/images/logo.webp" alt="Sri Chaitanya Logo" width={40} height={40} />
              <div className={styles.logoText}>
                <strong>Sri Chaitanya School</strong>
                <span>Madhapur, Hyderabad</span>
              </div>
            </div>
          </div>

          <nav className={styles.nav}>
            {home2Routes.map((route) => (
              <Link key={route.href} href={route.href} className={styles.navLink}>
                {route.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.searchBtn}>
              <Search size={18} />
            </button>
            <button className={styles.ctaBtn}>
              Enquire Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Left Sidebar Menu */}
      <div className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.open : ""}`} onClick={toggleSidebar}></div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <Image src="/images/logo.webp" alt="Sri Chaitanya Logo" width={40} height={40} />
            <div className={styles.logoTextDark}>
              <strong>Sri Chaitanya</strong>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.sidebarNav}>
          <Link href="/home2/admissions" className={styles.sidebarLink}>Home</Link>
          
          <div className={styles.dropdownGroup}>
            <button className={styles.sidebarLink} onClick={() => toggleDropdown('about')}>
              About Us <ChevronRight size={18} className={activeDropdown === 'about' ? styles.rotate : ""} />
            </button>
            <div className={`${styles.dropdownContent} ${activeDropdown === 'about' ? styles.show : ""}`}>
              <Link href="/home2/admissions">Our Legacy</Link>
              <Link href="/home2/admissions">Leadership</Link>
              <Link href="/home2/admissions">Vision & Mission</Link>
            </div>
          </div>

          <div className={styles.dropdownGroup}>
            <button className={styles.sidebarLink} onClick={() => toggleDropdown('academics')}>
              Academics <ChevronRight size={18} className={activeDropdown === 'academics' ? styles.rotate : ""} />
            </button>
            <div className={`${styles.dropdownContent} ${activeDropdown === 'academics' ? styles.show : ""}`}>
              <Link href="/home2/admissions">Curriculum</Link>
              <Link href="/home2/admissions">Co-Curricular</Link>
            </div>
          </div>

          <div className={styles.dropdownGroup}>
            <button className={styles.sidebarLink} onClick={() => toggleDropdown('facilities')}>
              Facilities <ChevronRight size={18} className={activeDropdown === 'facilities' ? styles.rotate : ""} />
            </button>
            <div className={`${styles.dropdownContent} ${activeDropdown === 'facilities' ? styles.show : ""}`}>
              <Link href="/home2/admissions">Labs & Library</Link>
              <Link href="/home2/admissions">Sports Complex</Link>
              <Link href="/home2/admissions">Transport</Link>
            </div>
          </div>

          <Link href="/home2/admissions" className={styles.sidebarLink}>Admissions</Link>
          <Link href="/home2/admissions" className={styles.sidebarLink}>Gallery</Link>
          <Link href="/home2/admissions" className={styles.sidebarLink}>Contact Us</Link>
        </div>

        <div className={styles.sidebarFooter}>
          <button className={styles.sidebarCtaBtn}>Apply Now</button>
        </div>
      </div>
    </>
  );
}
