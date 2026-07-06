"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import galleryStyles from '@/styles/Gallery.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function DayCarePage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-flower1', link: '#overview' },
    { title: 'Our Programmes', icon: 'bi-journal', link: '#programs' },
    { title: 'Our core values', icon: 'bi-heart', link: '#core-values' },
    { title: 'Our Services', icon: 'bi-gear', link: '#services' },
    { title: 'Contact Us', icon: 'bi-telephone', link: '#contact' },
  ];

  const galleryImages = [
    '/images/day-care/gallery-img-1.jpg',
    '/images/day-care/gallery-img-2.png',
    '/images/day-care/gallery-img-3.jpg',
    '/images/day-care/gallery-img-4.png',
    '/images/day-care/gallery-img-5.jpg',
    '/images/day-care/gallery-img-6.jpg',
    '/images/day-care/gallery-img-7.jpg',
    '/images/day-care/gallery-img-8.jpg',
    '/images/day-care/gallery-img-9.jpg',
    '/images/day-care/gallery-img-10.jpg',
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
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

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <main>
      <SideNavBanner
        title={<>OUR <br />DAY CARE<br /> CENTRE</>}
        bgImage="/images/day-care/banner-image.jpg"
        navItems={bannerNavItems}
        activePath="#overview"
      />

      <section className="container mt-5">
        <div className={styles.titleContainer} id="overview">
          <h2 className={styles.mainTitle}>Raj Kumari Amrit Kaur Day Care Centre</h2>
          <h4 className={styles.subTitle}>Nurturing Young Minds in a Safe & Caring Environment</h4>
          <p className={styles.description}>
            The Raj Kumari Amrit Kaur Day Care Centre is dedicated to supporting working parents
            through trusted childcare. The centre provides a safe, nurturing, and stimulating
            environment for up to 25 children, ensuring personalized care and attention. This enables
            parents to focus on their work with confidence and peace of mind.
            We emphasize the holistic development of children by nurturing their social, emotional,
            physical, and cognitive growth through thoughtfully designed programs that complement their home environment.
          </p>
        </div>

        {/* Services Icons (No background box) */}
        <div className={styles.servicesIconsSection} id="programs">
          <h3 className={styles.sectionTitlePink}>Our Services & Facilities</h3>
          <div className={styles.servicesIconsFlex}>
            <div className={styles.serviceIconItem}>
              <div className={styles.iconCircleWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a011af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 15 15"></polyline>
                </svg>
              </div>
              <span className={styles.serviceIconText}>Full Day Care</span>
            </div>
            <div className={styles.serviceIconItem}>
              <div className={styles.iconCircleWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a011af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 15 15"></polyline>
                </svg>
              </div>
              <span className={styles.serviceIconText}>Half Day Care</span>
            </div>
            <div className={styles.serviceIconItem}>
              <div className={styles.iconCircleWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a011af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  <path d="M7 21h10" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <span className={styles.serviceIconText}>Guest Child Care</span>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className={styles.coreValuesOuterBox} id="core-values">
          <div className={styles.coreValuesTop}>
            <h3 className={styles.sectionTitlePink}>Our Core Values</h3>
            <p className={styles.coreValuesDesc}>
              This shelter home is specially designed for destitute pregnant and lactating women. It operates at two locations- Sarai Rohilla and Jahangirpuri-in collaboration with the Department of Women & Child development, Government of NCT of Delhi.
            </p>
          </div>
          <div className={styles.coreValuesBottom}>
            <div className={`row ${styles.coreValuesRow}`}>
              <div className={`col-md-6 ${styles.coreValuesColLeft}`}>
                <h4 className={styles.valueTitleLeft}>Children</h4>
                <p className={styles.valueTextLeft}>
                  We value each child as a unique individual with distinct talents and abilities. Our approach focuses on age-appropriate development, ensuring healthy and balanced growth.
                </p>
              </div>
              <div className={`col-md-6 ${styles.coreValuesColRight}`}>
                <h4 className={styles.valueTitleLeft}>Families</h4>
                <p className={styles.valueTextLeft}>
                  We believe in building strong and positive relationships with families. A collaborative partnership with parents is essential for the successful development of every child.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services & Facilities (List) */}
        <div className={styles.cardSectionServices} id="services">
          <h3 className={styles.sectionTitlePink}>Our Services & Facilities</h3>
          <p className={styles.servicesDesc}>
            We provide a comprehensive range of services to ensure safety, learning, and overall well-being
          </p>
          <ul className={styles.servicesList}>
            <li>Safe and secure environment for children 6 months to 12 years</li>
            <li>Comfortable bedding arrangements, cots and baby cradles</li>
            <li>Feeding chairs for infants and toddlers</li>
            <li>CCTV surveillance for enhanced safety</li>
            <li>Age-appropriate educational toys and learning materials</li>
            <li>Early Childhood Education (numbers, letters, basic concepts such as big/small)</li>
            <li>Focus on physical development through outdoor activities</li>
            <li>Storytelling sessions and interactive learning</li>
            <li>Creative play and pretend play activities</li>
            <li>Activities that promote imagination and creativity</li>
            <li>Festival-based fun and learning activities</li>
            <li>After-school support, including homework assistance</li>
            <li>Craft activities for school going children</li>
            <li>Counseling and emotional support for parents, if required</li>
          </ul>
        </div>

        {/* Gallery Section */}
        <section className={styles.gallerySection}>
          <h2 className={styles.sectionTitlePink}>Gallery</h2>
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

        {/* Why Choose Us */}
        <div className={styles.whyChooseUsSection}>
          <div style={{ display: 'inline-block', width: '100%' }}>
            <h3 className={styles.sectionTitlePink}>Why Choose Us?</h3>
            <div className={styles.whyChooseUsGrid}>
              <div className={styles.whyChooseUsItem}>
                <i className="bi bi-check-circle-fill" style={{ color: '#a011af', marginRight: '10px', fontSize: '1.2rem' }}></i>
                Safe and nurturing environment
              </div>
              <div className={styles.whyChooseUsItem}>
                <i className="bi bi-check-circle-fill" style={{ color: '#a011af', marginRight: '10px', fontSize: '1.2rem' }}></i>
                Experienced and caring staff
              </div>
              <div className={styles.whyChooseUsItem}>
                <i className="bi bi-check-circle-fill" style={{ color: '#a011af', marginRight: '10px', fontSize: '1.2rem' }}></i>
                Focus on holistic child development
              </div>
              <div className={styles.whyChooseUsItem}>
                <i className="bi bi-check-circle-fill" style={{ color: '#a011af', marginRight: '10px', fontSize: '1.2rem' }}></i>
                Strong parent-centre collaboration
              </div>
              <div className={styles.whyChooseUsItemFull}>
                <i className="bi bi-check-circle-fill" style={{ color: '#a011af', marginRight: '10px', fontSize: '1.2rem' }}></i>
                Structured learning with fun-based activities
              </div>
            </div>
          </div>
        </div>

        {/* Help & Support */}
        <div className={styles.cardSectionContact} id="contact">
          <p className={styles.contactDesc}>
            If you or someone you know needs support, please contact us through the hiplines below. Our team is here to provide a safe space, care, and guidance.
          </p>
          <p className={styles.contactSubtitle}>
            YWCA Of Delhi, Ashoka Road
          </p>
          <div className={styles.contactTableWrapper}>
            <table className={styles.contactTable}>
              <tbody>
                <tr>
                  <th>Address</th>
                  <td>YWCA Of Delhi, Ashoka Road</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>+91-07011299046</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>Dc@ywcaofdelhi.Org , Sh@ywcaofdelhi.Org</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className={galleryStyles.lightboxOverlay} onClick={closeLightbox}>
          <div className={galleryStyles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={galleryStyles.closeBtn} onClick={closeLightbox}>
              &#10005;
            </button>
            <div className={galleryStyles.lightboxBody}>
              <div className={galleryStyles.mainImageRow}>
                <button className={galleryStyles.navBtn} onClick={prevImage}>
                  <i className="bi bi-chevron-left"></i>
                </button>

                <div className={galleryStyles.mainImageBox}>
                  <img
                    src={galleryImages[currentImageIndex]}
                    alt={`Gallery ${currentImageIndex + 1}`}
                    className={galleryStyles.mainImage}
                  />
                  <div className={galleryStyles.imageDescriptionBar}>
                    Day Care Gallery {currentImageIndex + 1}
                  </div>
                </div>

                <button className={galleryStyles.navBtn} onClick={nextImage}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>

              {/* Thumbnails */}
              <div className={galleryStyles.thumbnailContainer}>
                <div className={galleryStyles.thumbnailStrip}>
                  {galleryImages.map((src, idx) => (
                    <div
                      key={idx}
                      className={`${galleryStyles.thumbnailWrapper} ${idx === currentImageIndex ? galleryStyles.activeThumbnail : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <img
                        src={src}
                        alt={`Thumbnail ${idx + 1}`}
                        className={galleryStyles.thumbnailImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
