import React from 'react';
import styles from './InnerPageBanner.module.css';

export default function InnerPageBanner({
  title,
  children,
  bgImage,
  overlayColor,      
  defaultGrayscale = false, 
  contentMarginTop = '25vh',
  minHeight = '280px',
  marginBottom,
}) {
  return (
    <section 
      className={styles.heroSection} 
      style={{ minHeight }}
    >
      <div 
        className={`${styles.heroBg} ${defaultGrayscale ? styles.defaultGrayscale : ''}`}
        style={{
          '--bg-image': `url('${bgImage}')`,
          '--overlay-color': overlayColor || 'transparent'
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 3, ...(marginBottom ? { marginBottom } : {}) }}>
        <div className={styles.heroContent} style={{ marginTop: contentMarginTop }}>
          {title && <h1 className={styles.heroTitle}>{title}</h1>}
          {children}
        </div>
      </div>
    </section>
  );
}
