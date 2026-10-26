"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Search, ArrowRight, Menu, X } from "lucide-react";
import styles from "./Home2Header.module.css";
import Image from "next/image";
import { home2Routes } from "./home2InnerPagesData";

export default function Home2Header() {
  const headerRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: headerRef });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

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
            <Link href="/admissions" className={styles.ctaBtn}>
              Enquire Now <ArrowRight size={16} />
            </Link>
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
          {home2Routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={styles.sidebarLink}
              onClick={closeSidebar}
            >
              {route.label}
            </Link>
          ))}
        </div>

        <div className={styles.sidebarFooter}>
          <Link
            href="/admissions"
            className={styles.sidebarCtaBtn}
            onClick={closeSidebar}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}
