"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function ShelterHomesPage() {
  const bannerNavItems = [
    { title: 'Home / Overview', icon: 'bi-house-door', link: '#' },
    {
      title: (
        <div>
          Raj Kumari Amrit Kaur<br />
          Short Stay Shelter Home
        </div>
      ),
      icon: 'bi-house-heart',
      link: '#rkak'
    },
    {
      title: (
        <div>
          Maatritva Chhaya<br />
          Shelter Home
        </div>
      ),
      icon: 'bi-building',
      link: '#maatritva'
    }
  ];

  const hopeCards = [
    {
      id: 1,
      image: '/images/shelter-homes/bhl-1.jpg',
      title: 'Ray of Hope',
      desc: 'A 25year old woman got admitted in Maatritav Chhaya Shelter home, Jahangir Puri by P.S Roop Nagar. She was 5 months pregnant when she came to our center...',
    },
    {
      id: 2,
      image: '/images/shelter-homes/bhl-2.jpg',
      title: 'A home away from home',
      desc: 'A 19-year-old girl experienced acute emotional trauma and distress after being abandoned by her boyfriend upon disclosing her pregnancy. Her situation worsened...',
    },
    {
      id: 3,
      image: '/images/shelter-homes/bhl-3.jpg',
      title: 'Uganda diaries',
      desc: 'A 21 year old young woman was brought to Shelter home for care and support. She belongs from Uganda and arrived to India the very first time. She belongs from Lower middle class...',
    },
    {
      id: 4,
      image: '/images/shelter-homes/bhl-1.jpg',
      title: 'Ray of Hope',
      desc: 'A 25year old woman got admitted in Maatritav Chhaya Shelter home, Jahangir Puri by P.S Roop Nagar. She was 5 months pregnant when she came to our center...',
    },
    {
      id: 5,
      image: '/images/shelter-homes/bhl-2.jpg',
      title: 'A home away from home',
      desc: 'A 19-year-old girl experienced acute emotional trauma and distress after being abandoned by her boyfriend upon disclosing her pregnancy. Her situation worsened...',
    },
    {
      id: 6,
      image: '/images/shelter-homes/bhl-3.jpg',
      title: 'Uganda diaries',
      desc: 'A 21 year old young woman was brought to Shelter home for care and support. She belongs from Uganda and arrived to India the very first time. She belongs from Lower middle class...',
    },
    {
      id: 7,
      image: '/images/shelter-homes/bhl-1.jpg',
      title: 'Ray of Hope',
      desc: 'A 25year old woman got admitted in Maatritav Chhaya Shelter home, Jahangir Puri by P.S Roop Nagar. She was 5 months pregnant when she came to our center...',
    },
    {
      id: 8,
      image: '/images/shelter-homes/bhl-2.jpg',
      title: 'A home away from home',
      desc: 'A 19-year-old girl experienced acute emotional trauma and distress after being abandoned by her boyfriend upon disclosing her pregnancy. Her situation worsened...',
    },
    {
      id: 9,
      image: '/images/shelter-homes/bhl-3.jpg',
      title: 'Uganda diaries',
      desc: 'A 21 year old young woman was brought to Shelter home for care and support. She belongs from Uganda and arrived to India the very first time. She belongs from Lower middle class...',
    },
    {
      id: 10,
      image: '/images/shelter-homes/bhl-1.jpg',
      title: 'Ray of Hope',
      desc: 'A 25year old woman got admitted in Maatritav Chhaya Shelter home, Jahangir Puri by P.S Roop Nagar. She was 5 months pregnant when she came to our center...',
    }
  ];

  const galleryImages = Array.from({ length: 25 }, (_, i) => `/images/shelter-homes/Gallery/gallery-img-${i + 1}.jpg`);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailContainerRef = useRef(null);
  const hopeSliderRef = useRef(null);

  const scrollHopeLeft = () => {
    if (hopeSliderRef.current) {
      hopeSliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollHopeRight = () => {
    if (hopeSliderRef.current) {
      hopeSliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const scrollLeftBtn = () => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <SideNavBanner
        title={<>SHELTER<br />HOMES</>}
        bgImage="/images/shelter-homes/shelter-bnr.jpg"
        navItems={bannerNavItems}
        activePath="/shelter-homes"
        contentMarginTop="25vh"
      />

      <div className={styles.gradientBgWrap}>
        <section className={`container ${styles.introSection}`}>
          <p className={styles.introText}>
            YWCA of Delhi is committed to supporting women in distress by providing safe shelter, care, and opportunities for rehabilitation. We operate two dedicated shelter home programs designed to meet the diverse needs of vulnerable women, helping them rebuild their lives with dignity and independence.
          </p>
        </section>

        <section className={`container ${styles.hopeSection}`}>
          <h2 className={styles.sectionHeading}>Bringing Hope To Lives</h2>

          <div className={styles.sliderContainer}>
            <button className={styles.sliderArrowLeft} onClick={scrollHopeLeft}><i className="bi bi-chevron-left"></i></button>
            <div className={styles.hopeCardsRow} ref={hopeSliderRef}>
              {hopeCards.map((card) => (
                <div className={styles.hopeCardWrapper} key={card.id}>
                  <div className={styles.hopeCard}>
                    <img src={card.image} alt={card.title} className={styles.hopeCardImg} />
                    <div className={styles.hopeCardBody}>
                      <h5 className={styles.hopeCardTitle}>{card.title}</h5>
                      <p className={styles.hopeCardText}>{card.desc}</p>
                      <button className={styles.readMoreBtn}>Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.sliderArrowRight} onClick={scrollHopeRight}><i className="bi bi-chevron-right"></i></button>
          </div>
        </section>
      </div>

      {/* Raj Kumari Amrit Kaur Section */}
      <div id="rkak" style={{ scrollMarginTop: '100px' }}>
        <div className={styles.blueBanner}>
          <h2>Raj Kumari Amrit Kaur<br /><span>(Short Stay Shelter Home)</span></h2>
        </div>

        <section className={`container ${styles.detailSection}`}>
          <p className={styles.centerDesc}>
            Located at Ashoka Road, Delhi, this shelter home provides temporary accommodation and support to women aged 18–60 years who are facing difficult circumstances such as domestic violence, homelessness, trafficking, or lack of family support.
          </p>

          <div className={styles.infoBox}>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h4 style={{ color: '#000000', fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px' }}>Key highlights</h4>
              <p style={{ margin: 0, fontSize: '1rem', color: '#000', display: 'flex', alignItems: 'flex-start' }}>
                <span className={styles.highlightCircle}></span>Shelter Home Capacity: 12 residents
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Safe and secure accommodation with nutritious meals</li>
                  <li><i className="bi bi-circle"></i>Clothing and essential toiletries</li>
                  <li><i className="bi bi-circle"></i>Emotional and psychological counselling</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Medical care as needed</li>
                  <li><i className="bi bi-circle"></i>Skill development and vocational training</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.focusBox}>
            <h4>Our Focus</h4>
            <p>We aim to help women rebuild their lives by promoting self-reliance, emotional well-being, and successful reintegration into society.</p>
          </div>

          <div className={styles.contactSupport}>
            <p><span style={{ fontWeight: 500 }}>If you or someone you know needs support, please contact us through the hiplines
              below. Our team is here to provide a safe space, care, and guidance.</span></p>
            <div className={styles.contactButtons}>
              <div className={styles.splitBtnWrap}>
                <div className={styles.splitBtnLeft}>For Inquiry/More Info Call</div>
                <div className={styles.splitBtnRight}>+91-7011299046</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Maatritva Chhaya Section */}
      <div id="maatritva" style={{ scrollMarginTop: '100px' }}>
        <div className={styles.blueBanner}>
          <h2>Maatritva Chhaya <br /><span>(Shelter Home)</span></h2>
        </div>

        <section className={`container ${styles.detailSection}`}>
          <p className={styles.centerDesc}>
            This shelter home is specially designed for destitute pregnant and lactating women. It operates at two locations- Sarai Rohilla and Jahangirpuri-in collaboration with the Department of Women & Child Development, Government of NCT of Delhi.
          </p>



          <div className={styles.infoBox}>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h4 style={{ color: '#000000', fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px' }}>Key highlights</h4>
              <ul style={{ margin: 0, listStyle: 'none', paddingLeft: 0, color: '#000' }}>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start' }}><span className={styles.highlightCircle}></span>Jahangirpuri Shelter Home: 10 residents</li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}><span className={styles.highlightCircle}></span>Sarai Rohilla Shelter Home: 14 residents</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Safe and comfortable accommodation with food</li>
                  <li><i className="bi bi-circle"></i>Clothing and basic necessities</li>
                  <li><i className="bi bi-circle"></i>Pre-natal (ANC) and post-natal (PNC) medical care</li>
                  <li><i className="bi bi-circle"></i>Psychiatric consultation (through IHBAS Hospital)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Individual and group counseling</li>
                  <li><i className="bi bi-circle"></i>Guidance on child care and parenting</li>
                  <li><i className="bi bi-circle"></i>Vocational training for financial independence</li>
                  <li><i className="bi bi-circle"></i>Support for rehabilitation and reintegration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.focusBox}>
            <h4>Our Focus</h4>
            <p>Our Focus is to ensure the health, safety, and dignity of mothers and their children, while empowering women to lead independent and secure lives.</p>
          </div>

          <div className={styles.requirementsBox}>
            <div className="row">
              <div className="col-md-6">
                <h5 className={styles.reqTitle}>Our shelter homes are for:</h5>
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Women in distress (18 - 60 years)</li>
                  <li><i className="bi bi-circle"></i>Destitute pregnant and lactating women without shelter (18 year & above)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className={styles.reqTitle}>Women may:</h5>
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Approach the shelter directly</li>
                  <li><i className="bi bi-circle"></i>Be referred by Police, NGOs, or any concerned individual</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitlePink}>Gallery</h2>
            <div className={styles.inlineGalleryContainer}>
              <div className={styles.mainImageDisplay}>
                <img
                  src={galleryImages[currentImageIndex]}
                  alt="Main Gallery Image"
                  className={styles.mainGalleryImage}
                />
              </div>

              <div className={styles.thumbnailSliderWrapper}>
                <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={scrollLeftBtn}>
                  <i className="bi bi-chevron-left"></i>
                </button>

                <div className={styles.thumbnailRow} ref={thumbnailContainerRef}>
                  {galleryImages.map((src, idx) => (
                    <div
                      key={idx}
                      className={`${styles.thumbnailItem} ${idx === currentImageIndex ? styles.activeThumbnail : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <img src={src} alt={`Thumbnail ${idx + 1}`} />
                    </div>
                  ))}
                </div>

                <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={scrollRightBtn}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </section>

          <div className={styles.contactSupport}>
            <p><span style={{ fontWeight: 500 }}>If you or someone you know needs support, please contact us through the hiplines
              below. Our team is here to provide a safe space, care, and guidance.</span></p>
            <p className={styles.contactSubtitle}>Contact Us For More Information</p>
            <div className={styles.contactButtonsStack}>
              <div className={styles.splitBtnWrap}>
                <div className={styles.splitBtnLeft}>Maatritva Chhaya, Jahangirpuri</div>
                <div className={styles.splitBtnRight}>+91-7011299050</div>
              </div>
              <div className={styles.splitBtnWrap}>
                <div className={styles.splitBtnLeft}>Maatritva Chhaya, Sarai Rohilla</div>
                <div className={styles.splitBtnRight}>+91-7011299064</div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
