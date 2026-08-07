"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import Gallery from '@/components/common/Gallery';

export default function LentenPrayerMeetingPage() {
  // Using placeholder array of images until they are downloaded from Google Drive
  const galleryImages = [
    '/images/religious/Lenten-Prayer-Meet/1.jpg',
    '/images/religious/Lenten-Prayer-Meet/2.jpg',
    '/images/religious/Lenten-Prayer-Meet/3.jpg',
    '/images/religious/Lenten-Prayer-Meet/4.jpg',
    '/images/religious/Lenten-Prayer-Meet/5.jpg',
    '/images/religious/Lenten-Prayer-Meet/6.jpg',
    '/images/religious/Lenten-Prayer-Meet/7.jpg',
    '/images/religious/Lenten-Prayer-Meet/8.jpg',
    '/images/religious/Lenten-Prayer-Meet/9.jpg',
    '/images/religious/Lenten-Prayer-Meet/10.jpg',
    '/images/religious/Lenten-Prayer-Meet/11.jpg',
    '/images/religious/Lenten-Prayer-Meet/12.jpg',
    '/images/religious/Lenten-Prayer-Meet/13.jpg',
    '/images/religious/Lenten-Prayer-Meet/14.jpg',
    '/images/religious/Lenten-Prayer-Meet/15.jpg',
    '/images/religious/Lenten-Prayer-Meet/16.jpg',
    '/images/religious/Lenten-Prayer-Meet/17.jpg'
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
                <h1 className="sectionTitle_1 text-center mx-800">Lenten Prayer Meeting 2026</h1>
                <p className="text-muted mb-0 mt-2">27 March 2026</p>
              </div>
              <div style={{ flex: '0 0 auto', width: '85px', visibility: 'hidden' }} className="d-none d-md-block"></div>
            </div>

            {/* Gallery Section */}
            <Gallery images={galleryImages} />

            {/* Content */}
            <div className="mt-5">
              <div className={styles.overviewText} style={{ textAlign: 'left', maxWidth: '1000px' }}>
                <p>The Lenten Prayer Meeting was held on 27 March 2026 at YWCA of Delhi, bringing together members for a meaningful time of prayer, reflection, and spiritual renewal during the Lenten season.</p>
                <p>The programme began with an opening prayer, followed by a welcome address and scripture reading from Romans 5:6-11, reflecting on God’s love, grace, and the sacrifice of Christ. The Lenten message encouraged participants to deepen their faith and embrace the spirit of repentance, gratitude, and hope that characterizes the season.</p>
                <p>The gathering provided a sacred space for contemplation and fellowship, inspiring members to strengthen their spiritual journey and commitment to Christian values.</p>

              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
