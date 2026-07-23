"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function InterSchoolDebatePage() {


  // Gallery 1 images (excluding img-20.mp4 which is a video)
  const galleryImages = Array.from({ length: 19 }, (_, i) => `/images/yuva-department/gallery-1/img-${i + 1}.jpg`);

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
                <Link href="/youth-department" className={styles.backBtn}>
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
              <div className="flex-grow-1 text-center" style={{ padding: '0 15px' }}>
                <h2 className={styles.innerPageTitle}>Inter-School Debate Competition 2026</h2>
                <p className="text-muted mb-0 mt-2">30 January 2026</p>
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
                <p>The Youth Department of the YWCA of Delhi organized an Inter-School Debate Competition on 30 January 2026, bringing together students from various schools to engage in thoughtful discussion and critical analysis. The debate centred on the topic, “The Benefits of Artificial Intelligence Outweigh the Risks,” encouraging participants to explore both the opportunities and challenges presented by emerging technologies.</p>
                <p>The event provided a platform for young minds to express their perspectives, strengthen their public speaking skills, and engage in constructive dialogue on a contemporary global issue. Students demonstrated exceptional confidence, research, and analytical abilities, making the competition both insightful and inspiring.</p>
                <p>The YWCA of Delhi extends its gratitude to the Indian Society for Promoting Christian Knowledge (ISPCK) for sponsoring the prizes and supporting the promotion of academic excellence among youth.</p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
