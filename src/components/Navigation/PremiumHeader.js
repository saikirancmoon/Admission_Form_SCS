"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./PremiumHeader.module.css";
import { clsx } from "clsx";
import MagneticButton from "../Premium/MagneticButton";
import { Search, Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "About",
    href: "/",
    dropdown: [
      { label: "Our School", href: "/" },
      { label: "CBSE Houses", href: "/aboutus/cbse-houses" },
    ],
  },
  { label: "Curriculum", href: "/" },
  { label: "Life With Us", href: "/" },
  { label: "Admissions", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Contact", href: "/" },
];

export default function PremiumHeader() {
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
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className={styles.logoContainer}>
            <img
              src="https://scs-main-v20.vercel.app/_next/image?url=%2Flogos%2Flogo_transparent_fixed.png&w=256&q=75"
              alt="Sri Chaitanya Schools logo"
              className={styles.logoImage}
            />
            <div className={styles.logoTextContainer}>
              <span className={styles.logoTitle}>Sri Chaitanya</span>
              <span className={styles.logoSubtitle}>Madhapur, Hyderabad</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {NAV_ITEMS.map((item, index) => (
              <div key={index} className={styles.navItemGroup}>
                {item.dropdown ? (
                  <div className={styles.dropdownTrigger}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.label}
                    </Link>
                    <div className={styles.dropdownMenu}>
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={styles.dropdownItem}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                )}
                {index < NAV_ITEMS.length - 1 && (
                  <span className={styles.separator} />
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={styles.actions}>
            <button className={styles.searchButton}>
              <Search size={20} />
            </button>
            <MagneticButton className={styles.applyButton}>
              APPLY NOW
            </MagneticButton>
            <button
              className={styles.mobileMenuToggle}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className={styles.mobileMenuHeader}>
              <div className={styles.logoContainer}>
                <img
                  src="https://scs-main-v20.vercel.app/_next/image?url=%2Flogos%2Flogo_transparent_fixed.png&w=256&q=75"
                  alt="Sri Chaitanya Schools logo"
                  className={styles.logoImageMobile}
                />
                <div className={styles.logoTextContainer}>
                  <span className={styles.logoTitle}>Sri Chaitanya</span>
                </div>
              </div>
              <button
                className={styles.closeButton}
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className={styles.mobileNav}>
              {NAV_ITEMS.map((item, index) => (
                <div key={index} className={styles.mobileNavItem}>
                  <Link href={item.href} className={styles.mobileNavLink}>
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className={styles.mobileDropdown}>
                      {item.dropdown.map((sub, i) => (
                        <Link key={i} href={sub.href} className={styles.mobileDropdownLink}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className={styles.mobileApplyContainer}>
                 <button className={styles.mobileApplyButton}>APPLY NOW</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
