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
        height="430px"
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
          <h2 className="sectionTitle_2 text-center">— Our Services &amp; Facilities —</h2>
          <div className={styles.newServicesTopGrid}>
            <div className={styles.newServiceTopCard}>
              <div className={styles.newServiceTopIconWrapper}>
                <i className="bi bi-clock"></i>
              </div>
              <div className={styles.newServiceTopText}>
                <h4 className={styles.newServiceTopTitle}>Full Day Care</h4>
                <p className={styles.newServiceTopDesc}>Complete day care with engaging activities, learning and healthy meals.</p>
              </div>
            </div>
            <div className={styles.newServiceTopCard}>
              <div className={styles.newServiceTopIconWrapper}>
                <i className="bi bi-clock"></i>
              </div>
              <div className={styles.newServiceTopText}>
                <h4 className={styles.newServiceTopTitle}>Half Day Care</h4>
                <p className={styles.newServiceTopDesc}>Flexible half-day care with focus on learning, play and personal attention.</p>
              </div>
            </div>
            <div className={styles.newServiceTopCard}>
              <div className={styles.newServiceTopIconWrapper}>
                <i className="bi bi-suit-heart"></i>
              </div>
              <div className={styles.newServiceTopText}>
                <h4 className={styles.newServiceTopTitle}>Guest Child Care</h4>
                <p className={styles.newServiceTopDesc}>Short-term care for your child with the same love, safety and learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className={styles.newCoreValuesContainer} id="core-values">
          <h2 className={styles.newCoreValuesTitle}>Our Core Values</h2>
          <p className={styles.newCoreValuesDesc}>
            This shelter home is specially designed for destitute pregnant and lactating women. It operates at two locations- Sarai Rohilla and Jahangirpuri-in collaboration with the Department of Women & Child development, Government of NCT of Delhi.
          </p>
          <div className={styles.newCoreValuesGrid}>
            <div className={styles.newCoreValueCard}>
              <div className={styles.newCoreValueCardIcon}><i className="bi bi-person"></i></div>
              <div className={styles.newCoreValueCardContent}>
                <h4 className={styles.newCoreValueCardTitle}>Children</h4>
                <p className={styles.newCoreValueCardDesc}>
                  We value each child as a unique individual with distinct talents and abilities. Our approach focuses on age-appropriate development, ensuring healthy and balanced growth.
                </p>
              </div>
            </div>
            <div className={styles.newCoreValueCard}>
              <div className={styles.newCoreValueCardIcon}><i className="bi bi-people"></i></div>
              <div className={styles.newCoreValueCardContent}>
                <h4 className={styles.newCoreValueCardTitle}>Families</h4>
                <p className={styles.newCoreValueCardDesc}>
                  We believe in building strong and positive relationships with families. A collaborative partnership with parents is essential for the successful development of every child.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services & Facilities (List) */}
        <div className={styles.newServicesGridContainer} id="services">
          <h2 className={styles.newServicesGridTitle}>Our Services &amp; Facilities</h2>
          <p className={styles.newServicesGridDesc}>
            We provide a comprehensive range of services to ensure safety, learning, and overall well-being
          </p>
          <div className={styles.newServicesGrid}>
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
            ].map((item, index) => {
              const pastelClass = styles[`bgPastel${index % 5}`];
              return (
                <div key={index} className={`${styles.newServiceGridCard} ${pastelClass}`}>
                  <div className={styles.newServiceGridIcon}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <p className={styles.newServiceGridText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Section */}
        <Gallery images={galleryImages} title="Gallery" />

        {/* Why Choose Us */}
        <div className={styles.newWhyChooseContainer}>
          <h2 className={'sectionTitle_2 text-center mt-5'}>Why Choose Us?</h2>
          <div className={styles.newWhyChooseGrid}>
            <div className={styles.newWhyChooseCard}>
              <i className={`bi bi-shield-check ${styles.newWhyChooseIcon}`}></i>
              <div className={styles.newWhyChooseText}>Safe and nurturing environment</div>
            </div>
            <div className={styles.newWhyChooseCard}>
              <i className={`bi bi-people ${styles.newWhyChooseIcon}`}></i>
              <div className={styles.newWhyChooseText}>Experienced and caring staff</div>
            </div>
            <div className={styles.newWhyChooseCard}>
              <i className={`bi bi-person-check ${styles.newWhyChooseIcon}`}></i>
              <div className={styles.newWhyChooseText}>Focus on holistic child development</div>
            </div>
            <div className={styles.newWhyChooseCard}>
              <i className={`bi bi-briefcase ${styles.newWhyChooseIcon}`}></i>
              <div className={styles.newWhyChooseText}>Strong parent-centre collaboration</div>
            </div>
            <div className={styles.newWhyChooseCard}>
              <i className={`bi bi-card-checklist ${styles.newWhyChooseIcon}`}></i>
              <div className={styles.newWhyChooseText}>Structured learning with fun-based activities</div>
            </div>
          </div>
        </div>

        {/* Help & Support */}
        <div className={styles.newContactContainer} id="contact">
          <div className={styles.newContactLeft}>
            <p className={styles.newContactDesc}>
              If you or someone you know needs support, please contact us through the helplines below. Our team is here to provide a safe space, care, and guidance.
            </p>
            {/* Using a placeholder SVG for the kids drawing or a suitable icon */}
            <div style={{ color: '#e6235b', fontSize: '3rem', marginTop: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
              <i className="bi bi-person-standing"></i>
              <i className="bi bi-person-standing" style={{ fontSize: '2rem' }}></i>
              <i className="bi bi-person-standing"></i>
            </div>
          </div>
          <div className={styles.newContactRight}>
            <p className={styles.newContactSubtitle}>YWCA Of Delhi</p>
            <div className={styles.newContactCardsList}>
              <div className={styles.newContactCard}>
                <div className={styles.newContactCardIcon}><i className="bi bi-geo-alt"></i></div>
                <div className={styles.newContactCardLabel}>Address</div>
                <div className={styles.newContactCardValue}>YWCA of Delhi, Ashoka Road</div>
              </div>
              <div className={styles.newContactCard}>
                <div className={styles.newContactCardIcon}><i className="bi bi-telephone"></i></div>
                <div className={styles.newContactCardLabel}>Phone</div>
                <div className={styles.newContactCardValue}>+91-07011299046</div>
              </div>
              <div className={styles.newContactCard}>
                <div className={styles.newContactCardIcon}><i className="bi bi-envelope"></i></div>
                <div className={`${styles.newContactCardLabel} pr-3`}>Email</div>
                <div className={styles.newContactCardValue}>Dc@ywcaofdelhi.Org, Sh@ywcaofdelhi.Org</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
