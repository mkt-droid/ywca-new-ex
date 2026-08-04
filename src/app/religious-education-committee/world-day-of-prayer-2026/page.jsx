"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import Gallery from '@/components/common/Gallery';

export default function WorldDayOfPrayerPage() {
  // Using placeholder array of images until they are downloaded from Google Drive
  const galleryImages = [
    '/images/religious/World-Day-of-Prayer/1.jpg',
    '/images/religious/World-Day-of-Prayer/2.jpg',
    '/images/religious/World-Day-of-Prayer/3.jpg',
    '/images/religious/World-Day-of-Prayer/4.jpg',
    '/images/religious/World-Day-of-Prayer/5.jpg',
    '/images/religious/World-Day-of-Prayer/6.jpg',
    '/images/religious/World-Day-of-Prayer/7.jpg',
    '/images/religious/World-Day-of-Prayer/8.jpg',
    '/images/religious/World-Day-of-Prayer/9.jpg',
    '/images/religious/World-Day-of-Prayer/10.jpg',
    '/images/religious/World-Day-of-Prayer/11.jpg'
  ];

  return (
    <main>
      <div className={styles.pageContentWrapper}>
        <section className="pt-4 pb-5">
          <div className="container">
            {/* Header Section */}
            <div className="mb-4 d-flex align-items-center" style={{ backgroundColor: '#fff', padding: '15px 20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div style={{ flex: '0 0 auto' }}>
                <Link href="/religious-education-committee" className={styles.backBtn}>
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
              <div className="flex-grow-1 text-center" style={{ padding: '0 15px' }}>
                <h2 className={styles.innerPageTitle}>World Day of Prayer 2026</h2>
                <p className="text-muted mb-0 mt-2">7 March 2026</p>
              </div>
              <div style={{ flex: '0 0 auto', width: '85px', visibility: 'hidden' }} className="d-none d-md-block"></div>
            </div>

            {/* Gallery Section */}
            <Gallery images={galleryImages} />

            {/* Content */}
            <div className="mt-5">
              <div className={styles.overviewText} style={{ textAlign: 'left', maxWidth: '1000px' }}>
                <p>YWCA of Delhi observed the World Day of Prayer on 7 March 2026, bringing together members and staff in a spirit of faith, prayer, and fellowship. The gathering provided an opportunity for spiritual reflection and collective worship, reinforcing the importance of prayer in daily life.</p>
                <p>The keynote message was delivered by Ms. Surinder Kaur Lal, Christian leader, speaker, writer, and journalist, who shared an inspiring reflection based on Matthew 11:28-30. Her message encouraged participants to find rest, hope, and strength in Christ amidst life’s challenges. The observance concluded with prayers and fellowship, strengthening the spiritual bonds within the YWCA community.</p>

              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
