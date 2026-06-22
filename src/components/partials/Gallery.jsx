"use client";
import React, { useState } from 'react';
import styles from '@/styles/Gallery.module.css';

export default function Gallery({ title, items = [], columns = 3 }) {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Calculate the Bootstrap column class based on the requested number of columns
  // For 3 columns: 12 / 3 = 4 (col-md-4)
  // For 4 columns: 12 / 4 = 3 (col-md-3)
  const colClass = `col-md-${Math.floor(12 / columns)} mb-4`;

  const openLightbox = (item) => {
    if (item.photos && item.photos.length > 0) {
      setSelectedGallery(item);
      setCurrentPhotoIndex(0);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setSelectedGallery(null);
    setCurrentPhotoIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = (e) => {
    if (e) e.stopPropagation();
    if (selectedGallery && selectedGallery.photos) {
      setCurrentPhotoIndex((prev) => 
        prev === selectedGallery.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = (e) => {
    if (e) e.stopPropagation();
    if (selectedGallery && selectedGallery.photos) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? selectedGallery.photos.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <div className={styles.galleryContainer}>
        {title && <h3 className={styles.galleryTitle}>{title}</h3>}
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className={colClass}>
              <div 
                className={`${styles.galleryItem} ${item.photos?.length ? styles.clickable : ''}`}
                onClick={() => openLightbox(item)}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={styles.galleryImage} 
                  />
                </div>
                <p className={styles.itemTitle}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedGallery && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeLightbox}>
              &#10005;
            </button>

            <div className={styles.lightboxBody}>
              <div className={styles.mainImageRow}>
                {selectedGallery.photos.length > 1 ? (
                  <button className={styles.navBtn} onClick={prevPhoto}>
                    <i className="bi bi-chevron-left"></i>
                  </button>
                ) : (
                  <div className={styles.navBtnSpacer} />
                )}
                
                <div className={styles.mainImageBox}>
                  <img 
                    src={selectedGallery.photos[currentPhotoIndex].src} 
                    alt={selectedGallery.photos[currentPhotoIndex].description || 'Gallery image'} 
                    className={styles.mainImage}
                  />
                  {selectedGallery.photos[currentPhotoIndex].description && (
                    <div className={styles.imageDescriptionBar}>
                      {selectedGallery.photos[currentPhotoIndex].description}
                    </div>
                  )}
                </div>

                {selectedGallery.photos.length > 1 ? (
                  <button className={styles.navBtn} onClick={nextPhoto}>
                    <i className="bi bi-chevron-right"></i>
                  </button>
                ) : (
                  <div className={styles.navBtnSpacer} />
                )}
              </div>

              {/* Thumbnails */}
              {selectedGallery.photos.length > 1 && (
                <div className={styles.thumbnailContainer}>
                  <div className={styles.thumbnailStrip}>
                    {selectedGallery.photos.map((photo, idx) => (
                      <div 
                        key={idx} 
                        className={`${styles.thumbnailWrapper} ${idx === currentPhotoIndex ? styles.activeThumbnail : ''}`}
                        onClick={() => setCurrentPhotoIndex(idx)}
                      >
                        <img 
                          src={photo.src} 
                          alt={`Thumbnail ${idx + 1}`} 
                          className={styles.thumbnailImage}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
