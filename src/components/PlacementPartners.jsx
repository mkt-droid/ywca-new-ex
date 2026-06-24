"use client";

import React, { useState, useEffect } from 'react';
import styles from './PlacementPartners.module.css';

export default function PlacementPartners() {
  const originalLogos = Array.from({ length: 8 }).map((_, i) => `https://dummyimage.com/160x70/f0f0f0/888888.png&text=Logo+${i+1}`);
  
  // Duplicate for seamless infinite feeling
  const logos = [...originalLogos, ...originalLogos, ...originalLogos];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % originalLogos.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [originalLogos.length]);

  return (
    <section className="container mt-3 mb-5 text-center">
      <h2 className={styles.sectionTitle}>Our Placement Partners</h2>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(calc(-${currentIndex} * var(--slide-width)))` }}
        >
          {logos.map((logo, i) => (
            <div key={i} className={styles.logoSlide}>
              <img src={logo} alt={`Placement Partner ${i+1}`} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
