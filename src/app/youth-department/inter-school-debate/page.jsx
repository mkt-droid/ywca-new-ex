"use client";

import React, { useState, useRef } from 'react';
import styles from '../page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

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
      <SideNavBanner
        title={<>INTER-SCHOOL<br />DEBATE COMPETITION</>}
        bgImage="/images/yuva-department/gallery-1/img-3.jpg"
        activePath="/youth-department/inter-school-debate"
        contentMarginTop="25vh"
      />

      <div className={styles.pageBackground}>
        <div className={`container ${styles.featuresSection}`}>
          
          <div className="mb-5 text-center">
            <h2 style={{ color: '#a212b5', fontWeight: '700', marginBottom: '25px', fontSize: '2.5rem' }}>Inter-School Debate Competition 2026</h2>
          </div>

          <div className={styles.introPara}>
            <p>The Youth Department of the YWCA of Delhi organized an Inter-School Debate Competition on 30 January 2026, bringing together students from various schools to engage in thoughtful discussion and critical analysis. The debate centred on the topic, “The Benefits of Artificial Intelligence Outweigh the Risks,” encouraging participants to explore both the opportunities and challenges presented by emerging technologies.</p>
            <p>The event provided a platform for young minds to express their perspectives, strengthen their public speaking skills, and engage in constructive dialogue on a contemporary global issue. Students demonstrated exceptional confidence, research, and analytical abilities, making the competition both insightful and inspiring.</p>
            <p>The YWCA of Delhi extends its gratitude to the Indian Society for Promoting Christian Knowledge (ISPCK) for sponsoring the prizes and supporting the promotion of academic excellence among youth.</p>
          </div>

        </div>

        {/* Gallery Section */}
        <section className={styles.gallerySection}>
          <h2 className={styles.galleryTitlePink}>Gallery</h2>
          <div className={styles.inlineGalleryContainer}>
            <div className={styles.mainImageDisplay}>
              <img
                src={galleryImages[currentImageIndex]}
                alt="Main Gallery Image"
                className={styles.mainGalleryImage}
              />
            </div>

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
          </div>
        </section>
      </div>
    </main>
  );
}
