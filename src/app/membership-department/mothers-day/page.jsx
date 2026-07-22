"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function MothersDayPage() {
  const galleryImages = [
    '/images/map/03-World-YCWA-Celebration.jpg',
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
                <h2 className={styles.innerPageTitle}>Mother’s Day Celebration 2026</h2>
                <p className="text-muted mb-0 mt-2">9th May 2026</p>
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
                <p>The Membership & Program Department of YWCA of Delhi celebrated Mother’s Day 2026 on 9 May with warmth, joy, and heartfelt appreciation for mothers and mother figures who embody strength, care, and unconditional love.</p>
                <p>The celebration brought together members and staff for an engaging and meaningful programme featuring inspiring messages, cultural performances, fun activities, and a graceful mothers’ ramp walk that honoured the spirit and individuality of every participant. The event created a joyful space of expression, gratitude, and togetherness.</p>
                <p>A special highlight of the celebration was the exchange of flowers and handmade bookmarks among members and staff, symbolising love, appreciation, and heartfelt connection, making the occasion even more personal and memorable.</p>
                <p>The programme concluded with a fellowship potluck lunch, where participants shared food, conversations, and moments of bonding, reflecting the warmth and spirit of community.</p>
                <p>The celebration stood as a beautiful tribute to the strength, care, and endless love of mothers, creating memories rooted in gratitude and togetherness.</p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
