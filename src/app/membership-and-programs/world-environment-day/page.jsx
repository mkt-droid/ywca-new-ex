"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function WorldEnvironmentDayPage() {
  const galleryImages = [
    '/images/map/gallery/05-World Environment Day Celebration/1.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/2.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/3.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/4.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/5.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/6.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/7.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/8.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/9.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/10.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/11.jpg',
    '/images/map/gallery/05-World Environment Day Celebration/12.jpg'
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
            <div className={styles.eventPageHeader}>
              <div style={{ flex: '0 0 auto' }}>
                <Link href="/membership-and-programs" className={styles.backBtn}>
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
              <div className={styles.eventPageHeaderTitle}>
                <h1 className="sectionTitle_1 text-center mx-800 mb-0">World Environment Day Celebration 2026</h1>
                <p className="text-muted mb-0 mt-2">13th June 2026</p>
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
                <p>YWCA of Delhi celebrated World Environment Day on 13 June 2026 at its Ashoka Road Campus with members, shelter home residents, and staff coming together in a shared commitment towards environmental awareness and sustainable living.</p>
                <p>The programme featured engaging cultural performances, environmental awareness sessions focused on conservation and waste management, an interactive quiz, and a hands-on kitchen gardening workshop. Participants actively took part in sowing coriander seeds in biodegradable pots, learning simple and practical ways to grow their own food and promote green practices in daily life.</p>
                <p>A key highlight of the celebration was the inauguration of dedicated spaces for The Rehome Store and the Green Corner, initiatives that promote the donation, reuse, and exchange of pre-loved items, plants, seeds, and compost-encouraging circular economy practices and responsible consumption.</p>
                <p>The event also included the screening of a documentary trailer showcasing the resilience and journeys of women residing in YWCA shelter homes, adding a powerful human perspective to the environmental message.</p>
                <p>The celebration reflected collective action towards sustainability and reinforced YWCA of Delhi’s commitment to building a greener, more responsible future.</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
