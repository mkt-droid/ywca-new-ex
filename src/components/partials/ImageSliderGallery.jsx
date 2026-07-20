"use client";
import React, { useState, useRef } from 'react';
import styles from './ImageSliderGallery.module.css';

export default function ImageSliderGallery({ images = [], title = "Gallery" }) {
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

  if (!images || images.length === 0) return null;

  return (
    <section className={styles.gallerySection}>
      {title && <h2 className={styles.galleryTitlePink}>{title}</h2>}
      <div className={styles.inlineGalleryContainer}>
        <div className={styles.mainImageDisplay}>
          <img
            src={images[currentImageIndex]}
            alt="Main Gallery Image"
            className={styles.mainGalleryImage}
          />
        </div>

        <div className={styles.thumbnailSliderWrapper}>
          <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={scrollLeftBtn}>
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className={styles.thumbnailRow} ref={thumbnailContainerRef}>
            {images.map((src, idx) => (
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
  );
}
