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
          <h2 className={styles.mainTitle}>Raj Kumari Amrit Kaur<br />Day Care Centre</h2>
          <h4 className={styles.subTitle}>Nurturing Young Minds in a Safe & Caring Environment</h4>
          <p className={styles.description}>
            The Raj Kumari Amrit Kaur Day Care Centre is dedicated to supporting working parents through trusted childcare. The centre provides a safe, nurturing, and stimulating environment for up to 25 children, ensuring personalized care and attention. This enables parents to focus on their work with confidence and peace of mind. We emphasize the holistic development of children by nurturing their social, emotional, physical, and cognitive growth through thoughtfully designed programs that complement their home environment.
          </p>
        </div>

        {/* Our Programs */}
        <div className={styles.cardSectionPrograms} id="programs">
          <h3 className={styles.programsCardTitle}>Our Programs</h3>
          <p className={styles.programsCardSubtitle}>We Offer Flexible Childcare Services To Meet Diverse Family Needs</p>
          <div className={styles.programsFlex}>
            <div className={styles.programBox}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.programIcon} style={{ marginRight: '12px' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 8 16"></polyline>
              </svg>
              <span className={styles.programText}>Full Day Care</span>
            </div>
            <div className={styles.programBox}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.programIcon} style={{ marginRight: '12px' }}>
                <path d="M12 22a10 10 0 0 1 0-20v20z"></path>
                <path d="M12 2a10 10 0 0 1 0 20" strokeDasharray="2 3"></path>
              </svg>
              <span className={styles.programText}>Half Day Care</span>
            </div>
            <div className={styles.programBox}>
              <svg width="32" height="32" viewBox="0 0 576 512" fill="currentColor" className={styles.programIcon} style={{ marginRight: '12px' }}>
                <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" />
              </svg>
              <span className={styles.programText}>Guest Child Care</span>
            </div>
          </div>
          <p className={styles.programTiming}>
            <strong>From</strong> Monday To Friday | 8:30 AM - 6:00 PM
          </p>
        </div>

        {/* Our Core Values */}
        <div className={styles.cardSectionCoreValues} id="core-values">
          <h3 className={styles.programsCardTitle}>Our Core Values</h3>
          <p className={styles.coreValuesDesc}>
            This shelter home is specially designed for destitute pregnant and lactating women. It operates at two locations- Sarai Rohilla and Jahangirpuri-in collaboration with the Department of Women & Child development, Government of NCT of Delhi.
          </p>
          <div className="row text-left">
            <div className="col-12">
              <h4 className={styles.valueTitle}>Children</h4>
              <p className={styles.valueText}>
                We value each child as a unique individual with distinct talents and abilities. Our approach focuses on age-appropriate development, ensuring healthy and balanced growth.
              </p>
              <h4 className={styles.valueTitle}>Families</h4>
              <p className={styles.valueText}>
                We believe in building strong and positive relationships with families. A collaborative partnership with parents is essential for the successful development of every child.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services & Facilities */}
        <div className={styles.cardSectionServices} id="services">
          <h3 className={styles.programsCardTitle}>Our Services & Facilities</h3>
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
          <h2 className={styles.galleryTitle}>Gallery</h2>
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
          <div style={{ display: 'inline-block', textAlign: 'left' }}>
            <h3 className={styles.whyChooseUsTitle}>Why Choose Us?</h3>
            <ul className={styles.whyChooseUsList}>
              <li>Safe and nurturing environment</li>
              <li>Experienced and caring staff</li>
              <li>Focus on holistic child development</li>
              <li>Strong parent-centre collaboration</li>
              <li>Structured learning with fun-based activities</li>
            </ul>
          </div>
        </div>

        {/* Help & Support */}
        <div className={styles.cardSectionCoreValues} id="contact">
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
