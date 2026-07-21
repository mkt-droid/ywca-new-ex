"use client";

import React, { useState, useRef } from 'react';
import styles from '../page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function ThriveMusicFestivalPage() {


  // Gallery 2 images
  const galleryImages = Array.from({ length: 14 }, (_, i) => `/images/yuva-department/gallery-2/img-${i + 1}.jpg`);

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
        title={<>THRIVE MUSIC<br />FESTIVAL</>}
        bgImage="/images/yuva-department/gallery-2/img-2.jpg"
        activePath="/youth-department/thrive-music-festival"
        contentMarginTop="25vh"
      />

      <div className={styles.pageBackground}>
        <div className={`container ${styles.featuresSection}`}>
          
          <div className="mb-5 text-center">
            <h2 style={{ color: '#a212b5', fontWeight: '700', marginBottom: '25px', fontSize: '2.5rem' }}>Thrive Music Festival 2026</h2>
          </div>

          <div className={styles.introPara}>
            <p>The Youth Department of the YWCA of Delhi organized Thrive Music Festival 2026, a vibrant celebration of creativity, talent, and self-expression. The festival brought together young performers from educational institutions, community organizations, and diverse backgrounds, creating an inclusive platform for music, poetry, rap, and group performances.</p>
            <p>The event featured inspiring performances that showcased the artistic abilities and unique voices of young people while fostering confidence, creativity, and cultural exchange. Participants from colleges, schools, community development centres, disability rights organizations, and independent artistic backgrounds contributed to the festival's dynamic atmosphere.</p>
            <p>Through music and creative expression, Thrive Music Festival 2026 celebrated diversity, encouraged youth engagement, and provided a meaningful space for participants to connect, perform, and share their talents with the wider community.</p>
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
