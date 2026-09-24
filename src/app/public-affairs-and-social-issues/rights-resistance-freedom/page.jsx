"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import Gallery from '@/components/common/Gallery';

export default function RightsResistanceFreedomPage() {
  const galleryImages = [
    '/images/pasi/Rights-Resistance-Freedom-Gallery/1.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/2.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/3.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/4.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/5.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/6.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/7.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/8.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/9.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/10.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/11.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/12.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/13.jpg',
    '/images/pasi/Rights-Resistance-Freedom-Gallery/14.jpg'
  ];



  return (
    <main>
      <div className={styles.pageContentWrapper}>
        <section className="pt-4 pb-5">
          <div className="container">
            {/* Header Section */}
            <div className={styles.eventPageHeader}>
              <div style={{ flex: '0 0 auto' }}>
                <Link href="/public-affairs-and-social-issues" className={styles.backBtn}>
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
              </div>
              <div className={styles.eventPageHeaderTitle}>
                <h1 className="sectionTitle_1 text-center mx-800 mb-0">Rights • Resistance • Freedom</h1>
                <p className="text-muted mb-0 mt-2">13 February 2026</p>
              </div>
              <div style={{ flex: '0 0 auto', width: '85px', visibility: 'hidden' }} className="d-none d-md-block"></div>
            </div>

            {/* Gallery Section */}
            <Gallery images={galleryImages} />

            {/* Content */}
            <div className="mt-5">
              <div className={styles.overviewText} style={{ textAlign: 'left', maxWidth: '1000px' }}>
                <p>The Public Affairs and Social Issues (PASI) Department organized a programme titled “Rights • Resistance • Freedom” on 13 February 2026. The event aimed to raise awareness about women’s rights, gender justice, and the importance of collective action in creating an equitable society.</p>
                <p>The programme featured a panel discussion with experts from diverse fields, including representatives from the religious sector, psychology and sociology professionals, legal experts working on women's rights, and representatives from legal and police services. The panellists shared valuable insights on the challenges faced by women, legal protections available to them, and the role of society in promoting gender equality and justice. To encourage active participation and learning, a quiz on women's rights and laws was conducted, helping participants enhance their knowledge of important legal provisions and protections available to women. The event also included a Nukkad Natak (street play), which effectively highlighted key social issues affecting women and emphasized the need for awareness, resistance against injustice, and empowerment through knowledge and action. The programme provided an engaging platform for dialogue, education, and advocacy, inspiring participants to become informed and active contributors to social change.</p>

              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
