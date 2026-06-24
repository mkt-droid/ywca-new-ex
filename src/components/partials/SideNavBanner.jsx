import React from 'react';
import Link from 'next/link';
import styles from '@/styles/SideNavBanner.module.css';

export default function SideNavBanner({ 
  title, 
  bgImage, 
  bgIframe,
  navItems = [],
  children,
  sectionStyle = {},
  overlayStyle = {},
  activePath
}) {
  return (
    <section 
      className={styles.heroSection} 
      style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none', ...sectionStyle }}
    >
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
        <div className={styles.heroContent}>
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
            return (
              <Link href={item.link || '#'} key={idx} className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ''}`}>
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
