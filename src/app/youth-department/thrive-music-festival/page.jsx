"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import Gallery from '@/components/common/Gallery';

export default function ThriveMusicFestivalPage() {


  const galleryImages = [
    '/images/yuva-department/02-Gallery-Thrive Music Festival/1.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/2.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/3.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/4.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/5.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/6.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/7.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/8.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/9.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/10.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/11.jpg',
    '/images/yuva-department/02-Gallery-Thrive Music Festival/12.jpg'
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
                <h1 className="sectionTitle_1 text-center mx-800 mb-0">Thrive Music Festival 2026</h1>
              </div>
              <div style={{ flex: '0 0 auto', width: '85px', visibility: 'hidden' }} className="d-none d-md-block"></div>
            </div>

            {/* Gallery Section */}
            <Gallery images={galleryImages} />

            {/* Content */}
            <div className="mt-5">
              <div className={styles.overviewText} style={{ textAlign: 'left', maxWidth: '1000px' }}>
                <p>The Youth Department of the YWCA of Delhi organized Thrive Music Festival 2026, a vibrant celebration of creativity, talent, and self-expression. The festival brought together young performers from educational institutions, community organizations, and diverse backgrounds, creating an inclusive platform for music, poetry, rap, and group performances.</p>
                <p>The event featured inspiring performances that showcased the artistic abilities and unique voices of young people while fostering confidence, creativity, and cultural exchange. Participants from colleges, schools, community development centres, disability rights organizations, and independent artistic backgrounds contributed to the festival's dynamic atmosphere.</p>
                <p>Through music and creative expression, Thrive Music Festival 2026 celebrated diversity, encouraged youth engagement, and provided a meaningful space for participants to connect, perform, and share their talents with the wider community.</p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
