"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import Gallery from '@/components/common/Gallery';

export default function NewProgramPage() {


  const galleryImages = [
    '/images/yuva-department/03-Gallery/1.jpeg',
    '/images/yuva-department/03-Gallery/2.jpeg',
    '/images/yuva-department/03-Gallery/3.jpeg'
  ];



  return (
    <main>
      <div className="pageContentWrapper">
        <section className="pt-4 pb-5">
          <div className="container">
            {/* Header Section */}
            <div className="mb-4 d-flex align-items-center" style={{ backgroundColor: '#fff', padding: '15px 20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div style={{ flex: '0 0 auto' }}>
                <Link href="/youth-department" className={styles.backBtn}>
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
              <div className="flex-grow-1 text-center" style={{ padding: '0 15px' }}>
                <h1 className="sectionTitle_1 text-center mx-800 mb-0">Round Table on Technology-Facilitated Gender Violence</h1>
              </div>
              <div style={{ flex: '0 0 auto', width: '85px', visibility: 'hidden' }} className="d-none d-md-block"></div>
            </div>

            {/* Gallery Section */}
            <Gallery images={galleryImages} />

            {/* Content */}
            <div className="mt-5">
              <div className={styles.overviewText} style={{ textAlign: 'left', maxWidth: '1000px' }}>
                <p>On the occasion of 16 days of activism to end violence against women, YWCA of Delhi's Youth Committee organized a round table on Technology-Facilitated gender violence with young people, youth staff and advisors. With representation from Orthodox Church, like-minded organisations such as All India Dalit Mahila Adhikar Manch, Yes We can- organisation working with people with disabilities, ADF India, New Delhi YMCA, National Council of YMCA and YWCA Delhi's youth members.</p>
                <p>Young people expressed the need to address technology-facilitated gender violence not by just teaching women and girls to survive it. But by supporting them in demanding their rights and holding their space whether physical or digital.</p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
