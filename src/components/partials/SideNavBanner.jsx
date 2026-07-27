"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/SideNavBanner.module.css';

export default function SideNavBanner({ 
  title, 
  bgImage, 
  bgIframe,
  navItems = [],
  children,
  sectionStyle = {},
  overlayStyle = {},
  activePath,
  contentMarginTop,
  grayscale = true,
  height
}) {
  return (
    <section 
      className={styles.heroSection} 
      style={{ ...sectionStyle, ...(height ? { minHeight: height } : {}) }}
    >
      <div 
        className={styles.heroBg} 
        style={{ 
          backgroundImage: bgImage ? `url('${bgImage}')` : 'none',
          filter: grayscale ? undefined : 'grayscale(0%)'
        }}
      ></div>
      {bgIframe && (
        <iframe
          src={bgIframe}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, zIndex: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
      <div className={styles.heroOverlay} style={overlayStyle}></div>
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div 
          className={styles.heroContent} 
          style={contentMarginTop ? { marginTop: contentMarginTop } : undefined}
        >
          {title && <h1 className={styles.heroTitle}>
            {title}
          </h1>}
          {children}
        </div>
      </div>
      
      {/* Right side floating menu */}
      {navItems.length > 0 && (
        <div className={styles.heroRightMenu}>
          {navItems.map((item, idx) => {
            const isActive = activePath && (activePath === item.link || activePath === item.title);
            
            const handleNavClick = (e) => {
              if (item.link && item.link.startsWith('#')) {
                e.preventDefault();
                const targetId = item.link.substring(1);
                const elem = document.getElementById(targetId);
                if (elem) {
                  elem.scrollIntoView({ behavior: 'smooth' });
                }
              }
            };

            return (
              <Link 
                href={item.link || '#'} 
                key={idx} 
                className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ''}`}
                onClick={handleNavClick}
              >
                {item.icon && <i className={`bi ${item.icon}`}></i>}
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
      
    </section>
  );
}
