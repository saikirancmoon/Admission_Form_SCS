"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileBottomNav.module.css";
import { Home, BookOpen, ImageIcon, Phone } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

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
      <Link href="/" className={`${styles.navItem} ${pathname === "/" ? styles.active : ""}`}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      
      <Link href="/academics" className={`${styles.navItem} ${pathname === "/academics" ? styles.active : ""}`}>
        <BookOpen size={24} />
        <span>Academics</span>
      </Link>
      
      <Link href="/gallery" className={`${styles.navItem} ${pathname === "/gallery" ? styles.active : ""}`}>
        <ImageIcon size={24} />
        <span>Gallery</span>
      </Link>
      
      <Link href="/contact" className={`${styles.navItem} ${pathname === "/contact" ? styles.active : ""}`}>
        <Phone size={24} />
        <span>Contact</span>
      </Link>
    </div>
  );
}
