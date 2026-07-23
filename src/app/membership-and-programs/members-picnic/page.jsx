"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function MembersPicnicPage() {
  const galleryImages = [
    '/images/map/gallery/01-Members Picnic/1.jpg',
    '/images/map/gallery/01-Members Picnic/2.jpg',
    '/images/map/gallery/01-Members Picnic/3.jpg',
    '/images/map/gallery/01-Members Picnic/4.jpg',
    '/images/map/gallery/01-Members Picnic/5.jpg',
    '/images/map/gallery/01-Members Picnic/6.jpg',
    '/images/map/gallery/01-Members Picnic/7.jpg',
    '/images/map/gallery/01-Members Picnic/8.jpg',
    '/images/map/gallery/01-Members Picnic/9.jpg',
    '/images/map/gallery/01-Members Picnic/10.jpg',
    '/images/map/gallery/01-Members Picnic/11.jpg',
    '/images/map/gallery/01-Members Picnic/12.jpg',
    '/images/map/gallery/01-Members Picnic/13.jpg',
    '/images/map/gallery/01-Members Picnic/14.jpg'
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
                <Link href="/membership-and-programs" className={styles.backBtn}>
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
              <div className="flex-grow-1 text-center" style={{ padding: '0 15px' }}>
                <h2 className={styles.innerPageTitle}>Members’ Picnic – Lodhi Garden</h2>
                <p className="text-muted mb-0 mt-2">28 February 2026</p>
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
                <p>The Membership & Program Department of YWCA of Delhi organised a joyful picnic for Y Members at Lodhi Garden, bringing together members for a day of fellowship, connection, and shared experiences.</p>
                <p>The programme began with a prayer session featuring soulful hymns, followed by warm introductions that set the tone for a day rooted in togetherness and community bonding. Members then shared a delightful potluck breakfast, creating an informal space for conversation and interaction.</p>
                <p>This was followed by a refreshing nature walk through Lodhi Garden, where participants explored the natural surroundings, appreciated blooming flowers, and engaged in an interactive learning session on plant identification.</p>
                <p>The afternoon was filled with engaging and fun activities, including the spoon and lemon race, action imitation games, and group formation activities, which encouraged participation, laughter, and team spirit. A lively round of Tambola added excitement, with winners receiving chocolate tokens as appreciation.</p>
                <p>The programme concluded with a shared potluck lunch, where members came together once again to enjoy traditional homemade dishes and strengthen bonds through stories, conversations, and fellowship.</p>
                <p>The picnic was a meaningful day of community building, joy, and sisterhood, reflecting the spirit and values of YWCA of Delhi.</p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
