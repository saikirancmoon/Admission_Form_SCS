"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileBottomNav.module.css";
import { Home, BookOpen, ImageIcon, Phone } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const admissionPath = "/home2/admissions";

  useEffect(() => {
    // Only show on mobile screens
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 768);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.bottomNav}>
      <Link href={admissionPath} className={`${styles.navItem} ${pathname === admissionPath ? styles.active : ""}`}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      
      <Link href={admissionPath} className={styles.navItem}>
        <BookOpen size={24} />
        <span>Academics</span>
      </Link>
      
      <Link href={admissionPath} className={styles.navItem}>
        <ImageIcon size={24} />
        <span>Gallery</span>
      </Link>
      
      <Link href={admissionPath} className={styles.navItem}>
        <Phone size={24} />
        <span>Contact</span>
      </Link>
    </div>
  );
}
