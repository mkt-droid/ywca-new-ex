"use client";

import React, { useState, useEffect } from 'react';
import styles from './PlacementPartners.module.css';

export default function PlacementPartners({ title = "Our Placement Partners", className = "container mt-3 mb-5 text-center" }) {
  const originalLogos = [
    '/images/placement-partners/pp-1.png',
    '/images/placement-partners/pp-2.png',
    '/images/placement-partners/pp-3.png',
    '/images/placement-partners/pp-4.png',
    '/images/placement-partners/pp-6.png',
  ];

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
    <section className={className}>
      <h2 className="sectionTitle_2 mb-4">{title}</h2>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(calc(-${currentIndex} * var(--slide-width)))` }}
        >
          {logos.map((logo, i) => (
            <div key={i} className={styles.logoSlide}>
              <img src={logo} alt={`Placement Partner ${i + 1}`} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
