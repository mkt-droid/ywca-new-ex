"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import Gallery from '@/components/common/Gallery';

export default function WorldEnvironmentDayPage() {
  const galleryImages = [
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/1.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/2.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/3.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/4.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/5.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/6.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/7.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/8.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/9.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/10.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/11.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/12.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/13.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/14.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/15.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/16.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/17.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/18.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/19.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/20.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/21.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/22.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/23.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/24.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/25.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/26.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/27.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/28.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/29.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/30.jpg',
    '/images/pasi/PASI-World-Environment Day-Celebration-Gallery/31.jpg'
  ];



  return (
    <main>
      <div className={styles.pageContentWrapper}>
        <section className="pt-4 pb-5">
          <div className="container">
            {/* Header Section */}
            <div className="mb-4 d-flex align-items-center" style={{ backgroundColor: '#fff', padding: '15px 20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div style={{ flex: '0 0 auto' }}>
                <Link href="/public-affairs-and-social-issues" className={styles.backBtn}>
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
              <div className="flex-grow-1 text-center" style={{ padding: '0 15px' }}>
                <h1 className="sectionTitle_1 text-center mx-800">World Environment Day Celebration 2026</h1>
                <p className="text-muted mb-0 mt-2">13 June 2026</p>
              </div>
              <div style={{ flex: '0 0 auto', width: '85px', visibility: 'hidden' }} className="d-none d-md-block"></div>
            </div>

            {/* Gallery Section */}
            <Gallery images={galleryImages} />

            {/* Content */}
            <div className="mt-5">
              <div className={styles.overviewText} style={{ textAlign: 'left', maxWidth: '1000px' }}>
                <p>YWCA of Delhi celebrated World Environment Day on 13 June 2026 at its Ashoka Road Campus with members, shelter home residents, and staff coming together in a shared commitment towards environmental awareness and sustainable living. The programme featured engaging cultural performances, environmental awareness sessions focused on conservation and waste management, an interactive quiz, and a hands-on kitchen gardening workshop. Participants actively took part in sowing coriander seeds in biodegradable pots, learning simple and practical ways to grow their own food and promote green practices in daily life.</p>
                <p>A key highlight of the celebration was the inauguration of dedicated spaces for The Rehome Store and the Green Corner, initiatives that promote the donation, reuse, and exchange of pre-loved items, plants, seeds, and compost - encouraging circular economy practices and responsible consumption. The event also included the screening of a documentary trailer showcasing the resilience and journeys of women residing in YWCA shelter homes, adding a powerful human perspective to the environmental message. The celebration reflected collective action towards sustainability and reinforced YWCA of Delhi’s commitment to building a greener, more responsible future.</p>

              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
