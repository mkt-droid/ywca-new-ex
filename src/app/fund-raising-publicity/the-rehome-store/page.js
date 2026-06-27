"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function TheRehomeStorePage() {
  const [activeTab, setActiveTab] = useState('drop-off');
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  const openLightbox = (images, index) => {
    setLightbox({
      isOpen: true,
      images: images,
      currentIndex: index
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  const showNext = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const showPrev = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const bannerNavItems = [
    { title: 'Overview & Donation', icon: 'bi-flower1', link: '/fund-raising-publicity' },
    { title: 'Support a Cause', icon: 'bi-heart', link: '/fund-raising-publicity/support-a-cause' },
    { title: 'The ReHome Store', icon: 'bi-shop', link: '/fund-raising-publicity/the-rehome-store' },
    { title: 'Eco-Justice Lab', icon: 'bi-tree', link: '/fund-raising-publicity/eco-justice-lab' },
    { title: 'Volunteer & Partnership', icon: 'bi-people', link: '/fund-raising-publicity/volunteer-and-partnership' },
    { title: 'Events & Announcements', icon: 'bi-calendar-event', link: '/fund-raising-publicity/events-and-announcements' },
  ];

  const donateItems = [
    { id: 1, label: "Clothes of all genders & age", image: "/images/the-rehome/Cloths-of-all-genders-age.jpg" },
    { id: 2, label: "Bags & Accessories", image: "/images/the-rehome/bags.png" },
    { id: 3, label: "Jewellery", image: "/images/the-rehome/Jewellery.png" },
    { id: 4, label: "Shoes & Footwear", image: "/images/the-rehome/Shoes-Footwear.png" },
    { id: 5, label: "Books", image: "/images/the-rehome/Books.png" },
    { id: 6, label: "Household Items", image: "/images/the-rehome/Household-Items.png" }
  ];

  const upcyclingGallery = [
    "/images/the-rehome/collection-1.png",
    "/images/the-rehome/collection-2.jpg",
    "/images/the-rehome/collection-3.jpg",
    "/images/the-rehome/collection-4.jpg",
    "/images/the-rehome/collection-5.jpg",
    "/images/the-rehome/collection-6.jpg",
    "/images/the-rehome/collection-7.jpg",
    "/images/the-rehome/collection-8.jpg"
  ];

  const launchGallery = [
    "/images/the-rehome/launch-event-1.jpg",
    "/images/the-rehome/launch-event-2.jpg",
    "/images/the-rehome/launch-event-3.jpg",
    "/images/the-rehome/launch-event-4.jpg",
    "/images/the-rehome/launch-event-5.jpg",
    "/images/the-rehome/launch-event-6.jpg",
    "/images/the-rehome/launch-event-7.jpg",
    "/images/the-rehome/launch-event-8.jpg"
  ];

  return (
    <main>
      <SideNavBanner
        title={
          <>
            SUPPORT WOMEN<br />
            SUPPORT SUSTAINABILITY<br />
            SUPPORT CHANGE
          </>
        }
        bgImage="/images/fund-raising/main-banner.png"
        navItems={bannerNavItems}
      />

      <div className={styles.pageContentWrapper}>
        <section className={styles.sectionPadding}>
          <div className="container">
            <h2 className={styles.sectionTitle}>THE REHOME STORE</h2>
            <p className={styles.sectionText}>
              In alignment with the Sustainable Development Goals and the commitment of YWCA of Delhi towards Strengthening Communities and Nurturing Nature, The ReHome Store is a sustainable and inclusive initiative that promotes the reuse and repurposing of pre-loved items. The initiative encourages responsible consumption while creating livelihood opportunities for women from shelter homes and local communities. By collecting gently used clothes, accessories, books, household items, and reusable products, The ReHome Store gives discarded items a second life with dignity and purpose. Guided by the philosophy “Gently Used, Warmly Given”, the initiative aims to reduce waste, support circular economy practices, and build a more environmentally conscious and compassionate community.
            </p>

            <h3 className={styles.subTitle}>What can you donate?</h3>
            <div className={styles.donateGrid}>
              {donateItems.map((item) => (
                <div key={item.id} className={styles.donateItem}>
                  <div className={styles.donateImgWrapper}>
                    <img src={item.image} alt={item.label} className={styles.donateImg} />
                  </div>
                  <div className={styles.donateLabel}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className={styles.exclusionText}>
              We don't accept torn or heavily damaged clothes and footwear, broken electronics or appliances, Used cosmetics or toiletries, heavily damaged or unusable books
            </p>

            <h3 className={styles.subTitle}>Donate your stuff</h3>
            <div className={styles.donateBox}>
              <div className={styles.tabsContainer}>
                <button
                  className={`${styles.tabBtn} ${activeTab === 'drop-off' ? styles.tabBtnActive : styles.tabBtnInactive}`}
                  onClick={() => setActiveTab('drop-off')}
                >
                  Drop-off request
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === 'pickup' ? styles.tabBtnActive : styles.tabBtnInactive}`}
                  onClick={() => setActiveTab('pickup')}
                >
                  Pickup Request
                </button>
              </div>

              {activeTab === 'drop-off' && (
                <div>
                  <h4 className={styles.boxTitle}>Visit our drop-off locations to donate</h4>
                  <div className={styles.locationsGrid}>
                    <div className={styles.locationItem}>
                      <h4>YWCA Vocational Training Inst.</h4>
                      <p>Gate No. 1, 1-Ashoka Road,</p>
                      <p>New Delhi - 110001</p>
                      <p>Phone: 011-23362779</p>
                    </div>
                    <div className={styles.locationItem}>
                      <h4>YWCA of Delhi - Main Office</h4>
                      <p>Gate No. 1, 1-Ashoka Road,</p>
                      <p>New Delhi - 110001</p>
                      <p>Phone: 011-23362779</p>
                    </div>
                    <div className={styles.locationItem}>
                      <h4>YWCA Working Women's Hostel</h4>
                      <p>Gate No. 1, 1-Ashoka Road,</p>
                      <p>New Delhi - 110001</p>
                      <p>Phone: 011-23362779</p>
                    </div>
                  </div>

                  <div>
                    <h4 className={styles.timingsTitle}>Collection Timings</h4>
                    <div className={styles.timingItem}>
                      <i className="bi bi-clock"></i> Monday - Friday
                    </div>
                    <div className={styles.timingItem}>
                      <i className="bi bi-clock-history"></i> 10:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pickup' && (
                <div>
                  <div className={styles.formHeader}>
                    <div className={styles.formHeaderIcon}>
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <div>
                      <h4 className={styles.formHeaderTitle}>Pickup request form</h4>
                      <p className={styles.formHeaderSubtitle}>Please fill in your details to proceed with pickup</p>
                    </div>
                  </div>

                  <form>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Title <span className={styles.requiredStar}>*</span></label>
                        <select className={styles.formSelect}>
                          <option>Select Title</option>
                          <option>Mr.</option>
                          <option>Ms.</option>
                          <option>Mrs.</option>
                        </select>
                      </div>
                      <div className={styles.formGroup} style={{ flex: 2 }}>
                        <label className={styles.formLabel}>Full Name <span className={styles.requiredStar}>*</span></label>
                        <input type="text" className={styles.formInput} />
                      </div>
                      <div className={styles.formGroup} style={{ flex: 2 }}>
                        <label className={styles.formLabel}>Mobile Number <span className={styles.requiredStar}>*</span></label>
                        <input type="text" className={styles.formInput} />
                      </div>
                      <div className={styles.formGroup} style={{ flex: 2 }}>
                        <label className={styles.formLabel}>Email Address <span className={styles.requiredStar}>*</span></label>
                        <input type="email" className={styles.formInput} />
                      </div>
                    </div>

                    <h5 className={styles.formSectionTitle}>Pickup Details</h5>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>City <span className={styles.requiredStar}>*</span></label>
                        <input type="text" className={styles.formInput} />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>State <span className={styles.requiredStar}>*</span></label>
                        <input type="text" className={styles.formInput} />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>PIN <span className={styles.requiredStar}>*</span></label>
                        <input type="text" className={styles.formInput} />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Preferred time slot</label>
                        <select className={styles.formSelect}>
                          <option>Select time slot</option>
                          <option>Morning (10 AM - 12 PM)</option>
                          <option>Afternoon (12 PM - 4 PM)</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email Address <span className={styles.requiredStar}>*</span></label>
                        <input type="email" className={styles.formInput} />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email Address <span className={styles.requiredStar}>*</span></label>
                        <input type="email" className={styles.formInput} />
                      </div>
                    </div>

                    <h5 className={styles.formSectionTitle}>Donation Details</h5>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Type of Items for Donation <span className={styles.requiredStar}>*</span></label>
                        <input type="text" className={styles.formInput} />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Approximate Quantity of Items <span className={styles.requiredStar}>*</span></label>
                        <input type="text" className={styles.formInput} />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Condition of Items <span className={styles.requiredStar}>*</span></label>
                        <input type="text" className={styles.formInput} />
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>

            <h3 className={styles.subTitle}>We do everything - Collection, Sorting & Upcycling</h3>
            <div className={styles.galleryGrid}>
              {upcyclingGallery.map((img, index) => (
                <div key={`upcycle-${index}`} className={styles.galleryImgWrapper} onClick={() => openLightbox(upcyclingGallery, index)}>
                  <img src={img} alt={`Upcycling ${index + 1}`} className={styles.galleryImg} />
                </div>
              ))}
            </div>

            <h3 className={styles.subTitle}>Our Launch Event</h3>
            <div className={styles.galleryGrid}>
              {launchGallery.map((img, index) => (
                <div key={`launch-${index}`} className={styles.galleryImgWrapper} onClick={() => openLightbox(launchGallery, index)}>
                  <img src={img} alt={`Launch Event ${index + 1}`} className={styles.galleryImg} />
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {lightbox.isOpen && (
        <div className={styles.lightboxOverlay}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <i className="bi bi-x-lg"></i>
          </button>
          <button className={styles.lightboxPrev} onClick={showPrev}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <img src={lightbox.images[lightbox.currentIndex]} className={styles.lightboxImage} alt="Gallery view" />
          <button className={styles.lightboxNext} onClick={showNext}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </main>
  );
}
