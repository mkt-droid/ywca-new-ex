import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export const metadata = {
  title: 'Shelter Homes | YWCA of Delhi',
};

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
    }
  ];

  const galleryImages = Array.from({ length: 10 }, (_, i) => `/images/shelter-homes/gallery-${i + 1}.jpg`);

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
            <button className={styles.sliderArrowLeft}><i className="bi bi-chevron-left"></i></button>
            <div className="row g-4">
              {hopeCards.map((card) => (
                <div className="col-md-4" key={card.id}>
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
            <button className={styles.sliderArrowRight}><i className="bi bi-chevron-right"></i></button>
          </div>
        </section>
      </div>

      {/* Raj Kumari Amrit Kaur Section */}
      <div id="rkak">
        <div className={styles.blueBanner}>
          <h2>Raj Kumari Amrit Kaur<br /><span>(Short Stay Shelter Home)</span></h2>
        </div>

        <section className={`container ${styles.detailSection}`}>
          <p className={styles.centerDesc}>
            Located at Ashoka Road, New Delhi, this shelter home provides temporary accommodation and support to women aged 18-45 years who are facing crisis due to domestic violence, marital conflict, or other emergencies.
          </p>

          <div className={`row row-cols-2 row-cols-md-5 g-3 ${styles.galleryGrid}`}>
            {galleryImages.map((src, idx) => (
              <div className="col" key={idx}>
                <img src={src} alt="Gallery" className={styles.galleryImg} />
              </div>
            ))}
          </div>

          <div className={styles.infoBox}>
            <div className="row">
              <div className="col-md-6">
                <ul className={styles.customList}>
                  <li>Safe and secure environment</li>
                  <li>Counselling and emotional support</li>
                  <li>Medical help and healthcare monitoring</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className={styles.customList}>
                  <li>Vocational training</li>
                  <li>Rehabilitation support and legal counselling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.focusBox}>
            <h4>Our Focus</h4>
            <p>Our focus is to help women rebuild their lives by promoting self-reliance, emotional well-being, and successful reintegration into society.</p>
          </div>

          <div className={styles.contactSupport}>
            <p><strong>If you or someone you know needs support, please contact us through the helpline below. Our team is here to provide a safe space, care, and guidance.</strong></p>
            <div className={styles.contactButtons}>
              <button className={styles.purpleBtn}>Raj Kumari Amrit Kaur Shelter Home | +91-11-23360133</button>
              <button className={styles.purpleBtn}>Helpline | +91-11-23360134</button>
            </div>
          </div>
        </section>
      </div>

      {/* Maatritva Chhaya Section */}
      <div id="maatritva">
        <div className={styles.blueBanner}>
          <h2>Maatritva Chhaya<br /><span>(Shelter Home)</span></h2>
        </div>

        <section className={`container ${styles.detailSection}`}>
          <p className={styles.centerDesc}>
            This shelter home is specially designed for destitute pregnant and lactating women. It provides a safe heaven with care, medical support, and guidance to ensure the well-being of women & their newborns during the most critical times of their lives.
          </p>

          <div className={`row row-cols-2 row-cols-md-5 g-3 ${styles.galleryGrid}`}>
            {galleryImages.map((src, idx) => (
              <div className="col" key={idx}>
                <img src={src} alt="Gallery" className={styles.galleryImg} />
              </div>
            ))}
          </div>

          <div className={styles.infoBox}>
            <div className="row">
              <div className="col-md-6">
                <ul className={styles.customList}>
                  <li>Safe and secure shelter for destitute pregnant women</li>
                  <li>Nutritious diet and medical care</li>
                  <li>Pre-natal and Post-natal care (regular health checkups)</li>
                  <li>Yoga and meditation classes (stress management)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className={styles.customList}>
                  <li>Emotional and psychological counselling</li>
                  <li>Guidance on child care and parenting</li>
                  <li>Vocational training for self-reliance and empowerment</li>
                  <li>Support for rehabilitation and safe integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.focusBox}>
            <h4>Our Focus</h4>
            <p>Our focus is to ensure the health, safety, and dignity of mothers and their children while empowering women to lead independent and secure lives.</p>
          </div>

          <div className={styles.requirementsBox}>
            <div className="row">
              <div className="col-md-6">
                <h5 className={styles.reqTitle}>Our shelter homes care for:</h5>
                <ul className={styles.customList}>
                  <li>Aged between 18-45 years</li>
                  <li>Women facing crisis or domestic violence, or destitute (for Maatritva)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className={styles.reqTitle}>Women only:</h5>
                <ul className={styles.customList}>
                  <li>Single and without any male child</li>
                  <li>Above 5 years male child may be conditionally allowed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.contactSupport}>
            <p><strong>If you or someone you know needs support, please contact us through the helpline below. Our team is here to provide a safe space, care, and guidance.</strong></p>
            <p className={styles.smallText}>Contact Us For Further Information</p>
            <div className={styles.contactButtonsStack}>
              <button className={styles.purpleBtnFull}>Short Stay Home, Jahangirpuri | +91-11-23360133</button>
              <button className={styles.purpleBtnFull}>Short Stay Home, Nawada | +91-11-23360134</button>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
