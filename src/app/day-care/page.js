"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import galleryStyles from '@/styles/Gallery.module.css';
import Gallery from '@/components/common/Gallery';
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
    '/images/day-care/1.jpg',
    '/images/day-care/2.jpg',
    '/images/day-care/3.jpg',
    '/images/day-care/4.jpg',
    '/images/day-care/5.jpg',
    '/images/day-care/6.jpg',
    '/images/day-care/7.jpg',
    '/images/day-care/8.jpg',
    '/images/day-care/9.jpg',
    '/images/day-care/10.jpg',
    '/images/day-care/11.jpg',
    '/images/day-care/12.jpg',
    '/images/day-care/13.jpg',
    '/images/day-care/14.jpg',
    '/images/day-care/15.jpg'
  ];



  return (
    <main>
      <SideNavBanner
        height="360px"
        title={<>DAY CARE<br /> CENTRE</>}
        bgImage="/images/day-care/banner-image.jpg"
        navItems={bannerNavItems}
        activePath="#overview"
      />

      <section className="container mt-5">
        <div className={styles.titleContainer} id="overview">
          <h1 className="sectionTitle_1 text-center mx-800">Raj Kumari Amrit Kaur Day Care Centre</h1>
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
          <h2 className="sectionTitle_2 text-center">Our Services & Facilities</h2>
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
            <h2 className="sectionTitle_2 text-center">Our Core Values</h2>
            <p className={styles.coreValuesDesc}>
              This shelter home is specially designed for destitute pregnant and lactating women. It operates at two locations- Sarai Rohilla and Jahangirpuri-in collaboration with the Department of Women & Child development, Government of NCT of Delhi.
            </p>
          </div>
          <div className={styles.coreValuesBottom}>
            <div className={`row ${styles.coreValuesRow}`}>
              <div className={`col-md-6 ${styles.coreValuesColLeft}`}>
                <h4 className={styles.valueTitleLeft}><i className="bi bi-emoji-smile"></i>Children</h4>
                <p className={styles.valueTextLeft}>
                  We value each child as a unique individual with distinct talents and abilities. Our approach focuses on age-appropriate development, ensuring healthy and balanced growth.
                </p>
              </div>
              <div className={`col-md-6 ${styles.coreValuesColRight}`}>
                <h4 className={styles.valueTitleLeft}><i className="bi bi-people"></i>Families</h4>
                <p className={styles.valueTextLeft}>
                  We believe in building strong and positive relationships with families. A collaborative partnership with parents is essential for the successful development of every child.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services & Facilities (List) */}
        <div className={styles.cardSectionServices} id="services">
          <h2 className="sectionTitle_2 text-center">Our Services & Facilities</h2>
          <p className={styles.servicesDesc}>
            We provide a comprehensive range of services to ensure safety, learning, and overall well-being
          </p>
          <ul className={styles.servicesList}>
            {[
              { text: "Safe and secure environment for children 6 months to 12 years", icon: "bi-shield-check" },
              { text: "Comfortable bedding arrangements, cots and baby cradles", icon: "bi-moon-stars" },
              { text: "Feeding chairs for infants and toddlers", icon: "bi-cup-hot" },
              { text: "CCTV surveillance for enhanced safety", icon: "bi-camera-video" },
              { text: "Age-appropriate educational toys and learning materials", icon: "bi-puzzle" },
              { text: "Early Childhood Education (numbers, letters, basic concepts such as big/small)", icon: "bi-book" },
              { text: "Focus on physical development through outdoor activities", icon: "bi-bicycle" },
              { text: "Storytelling sessions and interactive learning", icon: "bi-chat-dots" },
              { text: "Creative play and pretend play activities", icon: "bi-palette" },
              { text: "Activities that promote imagination and creativity", icon: "bi-lightbulb" },
              { text: "Festival-based fun and learning activities", icon: "bi-stars" },
              { text: "After-school support, including homework assistance", icon: "bi-pencil-square" },
              { text: "Craft activities for school going children", icon: "bi-scissors" },
              { text: "Counseling and emotional support for parents, if required", icon: "bi-heart-pulse" }
            ].map((item, index) => (
              <li key={index}>
                <i className={`bi ${item.icon}`}></i>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Section */}
        <Gallery images={galleryImages} title="Gallery" />

        {/* Why Choose Us */}
        <div className={styles.whyChooseUsSection}>
          <div style={{ display: 'inline-block', width: '100%' }}>
            <h2 className="sectionTitle_2 text-center">Why Choose Us?</h2>
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
            YWCA Of Delhi
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
</main>
  );
}
