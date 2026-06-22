import React from 'react';
import Link from 'next/link';
import styles from '@/styles/SideNavBanner.module.css';

export default function SideNavBanner({ 
  title, 
  bgImage, 
  navItems = [] 
}) {
  return (
    <section 
      className={styles.heroSection} 
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className={styles.heroOverlay}></div>
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {title}
          </h1>
        </div>
      </div>
      
      {/* Right side floating menu */}
      {navItems.length > 0 && (
        <div className={styles.heroRightMenu}>
          {navItems.map((item, idx) => (
            <Link href={item.link || '#'} key={idx} className={styles.menuItem}>
              {item.icon && <i className={`bi ${item.icon}`}></i>}
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
