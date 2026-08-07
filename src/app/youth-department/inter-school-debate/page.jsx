"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import Gallery from '@/components/common/Gallery';

export default function InterSchoolDebatePage() {


  const galleryImages = [
    '/images/yuva-department/01-Gallery-Inter-School Debate/1.jpg',
    '/images/yuva-department/01-Gallery-Inter-School Debate/2.jpg',
    '/images/yuva-department/01-Gallery-Inter-School Debate/3.jpg',
    '/images/yuva-department/01-Gallery-Inter-School Debate/4.jpg',
    '/images/yuva-department/01-Gallery-Inter-School Debate/5.jpg',
    '/images/yuva-department/01-Gallery-Inter-School Debate/6.jpg',
    '/images/yuva-department/01-Gallery-Inter-School Debate/7.jpg',
    '/images/yuva-department/01-Gallery-Inter-School Debate/8.jpg'
  ];



  return (
    <main>
      <div className={styles.pageContentWrapper}>
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
                <h1 className="sectionTitle_1 text-center mx-800">Inter-School Debate Competition 2026</h1>
                <p className="text-muted mb-0 mt-2">30 January 2026</p>
              </div>
              <div style={{ flex: '0 0 auto', width: '85px', visibility: 'hidden' }} className="d-none d-md-block"></div>
            </div>

            {/* Gallery Section */}
            <Gallery images={galleryImages} />

            {/* Content */}
            <div className="mt-5">
              <div className={styles.overviewText} style={{ textAlign: 'left', maxWidth: '1000px' }}>
                <p>The Youth Department of the YWCA of Delhi organized an Inter-School Debate Competition on 30 January 2026, bringing together students from various schools to engage in thoughtful discussion and critical analysis. The debate centred on the topic, “The Benefits of Artificial Intelligence Outweigh the Risks,” encouraging participants to explore both the opportunities and challenges presented by emerging technologies.</p>
                <p>The event provided a platform for young minds to express their perspectives, strengthen their public speaking skills, and engage in constructive dialogue on a contemporary global issue. Students demonstrated exceptional confidence, research, and analytical abilities, making the competition both insightful and inspiring.</p>
                <p>The YWCA of Delhi extends its gratitude to the Indian Society for Promoting Christian Knowledge (ISPCK) for sponsoring the prizes and supporting the promotion of academic excellence among youth.</p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
