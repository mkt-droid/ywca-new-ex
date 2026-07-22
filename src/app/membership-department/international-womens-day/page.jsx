"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function InternationalWomensDayPage() {
  const galleryImages = [
    '/images/map/02-International-Women-Day-Celebration.jpg',
    '/images/shelter-homes/Gallery/gallery-img-1.jpg',
    '/images/shelter-homes/Gallery/gallery-img-2.jpg',
    '/images/shelter-homes/Gallery/gallery-img-3.jpg',
    '/images/shelter-homes/Gallery/gallery-img-4.jpg',
    '/images/shelter-homes/Gallery/gallery-img-5.jpg',
    '/images/shelter-homes/Gallery/gallery-img-6.jpg'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailContainerRef = useRef(null);

  const scrollLeftBtn = () => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <div className={styles.pageContentWrapper}>
        <section className="pt-4 pb-5">
          <div className="container">
            {/* Header Section */}
            <div className="mb-4 d-flex align-items-center" style={{ backgroundColor: '#fff', padding: '15px 20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div style={{ flex: '0 0 auto' }}>
                <Link href="/membership-department" className={styles.backBtn}>
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
              <div className="flex-grow-1 text-center" style={{ padding: '0 15px' }}>
                <h2 className={styles.innerPageTitle}>International Women’s Day Celebration & Adamya Nari Samman</h2>
                <p className="text-muted mb-0 mt-2">7 March 2026</p>
              </div>
              <div style={{ flex: '0 0 auto', width: '85px', visibility: 'hidden' }} className="d-none d-md-block"></div>
            </div>

            {/* Gallery Section */}
            <section className={styles.gallerySection}>
              <div className={styles.inlineGalleryContainer}>
                <div className={styles.mainImageDisplay}>
                  <img
                    src={galleryImages[currentImageIndex]}
                    alt="Main Gallery Image"
                    className={styles.mainGalleryImage}
                  />
                </div>

                {galleryImages.length > 1 && (
                  <div className={styles.thumbnailSliderWrapper}>
                    <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={scrollLeftBtn}>
                      <i className="bi bi-chevron-left"></i>
                    </button>

                    <div className={styles.thumbnailRow} ref={thumbnailContainerRef}>
                      {galleryImages.map((src, idx) => (
                        <div
                          key={idx}
                          className={`${styles.thumbnailItem} ${idx === currentImageIndex ? styles.activeThumbnail : ''}`}
                          onClick={() => setCurrentImageIndex(idx)}
                        >
                          <img src={src} alt={`Thumbnail ${idx + 1}`} />
                        </div>
                      ))}
                    </div>

                    <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={scrollRightBtn}>
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Content */}
            <div className="mt-5">
              <div className={styles.overviewText} style={{ textAlign: 'left', maxWidth: '1000px' }}>
                <p>YWCA of Delhi celebrated International Women’s Day on 7 March 2026 with a vibrant and meaningful programme honouring the strength, creativity, and resilience of women and youth. The event showcased powerful performances by Shelter Home residents, community women, and students, reflecting lived experiences and collective journeys through dance, theatre, and the impactful “Unsung Heroes” Dramatic Walk. These performances highlighted themes of women’s struggles, aspirations, achievements, and the importance of solidarity and empowerment.</p>
                <p>A key highlight of the celebration was the Adamya Nari Samman, an initiative of YWCA of Delhi now in its third year. The recognition honours women who have overcome violence, discrimination, and adversity to rebuild their lives with courage, dignity, and determination.</p>
                <p>The programme was graced by esteemed Guests of Honour, including:</p>
                <ul>
                  <li>Ms. Lakshmi Dubey, Assistant Commissioner of Police, Special Police Unit for Women and Children (SPUWAC), Delhi Police</li>
                  <li>Ms. Gauri Dewal, CSR Coordinator, National School of Drama</li>
                  <li>Ms. Shruti Bajaj, Senior Manager – CSR, Indian Oil Corporation Limited</li>
                  <li>Mr. Shashi Chandra Maan, Senior Manager – CSR, Indian Oil Corporation Limited</li>
                </ul>
                <p>The celebration stood as a powerful tribute to women who are truly Adamya—unstoppable in spirit, resilience, and courage.</p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
