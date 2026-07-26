"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import SideNavBanner from '@/components/partials/SideNavBanner';
import ActionCard from '@/components/partials/ActionCard';
import Counter from '@/components/partials/Counter';

export default function EcoJusticeLabPage() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  const bannerNavItems = [
    { title: 'Overview & Donation', icon: 'bi-flower1', link: '/fund-raising-publicity' },
    { title: 'Support a Cause', icon: 'bi-heart', link: '/fund-raising-publicity/support-a-cause' },
    { title: 'The ReHome Store', icon: 'bi-shop', link: '/fund-raising-publicity/the-rehome-store' },
    { title: 'Eco-Justice Lab', icon: 'bi-tree', link: '/fund-raising-publicity/eco-justice-lab' },
    { title: 'Volunteer & Partnership', icon: 'bi-people', link: '/fund-raising-publicity/volunteer-and-partnership' },
    { title: 'Events & Announcements', icon: 'bi-calendar-event', link: '/fund-raising-publicity/events-and-announcements' },
  ];

  const activities = [
    {
      title: "Eco-Club Youth",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/justice-lab/cho-club-youth.jpg"
    },
    {
      title: "Youth Training",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/justice-lab/youth-training.jpg"
    },
    {
      title: "Kitchen Compost Bin",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/justice-lab/kichen-compost.jpg"
    },
    {
      title: "Plastic Collection Bin",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/justice-lab/plastic-collection.jpg"
    },
    {
      title: "Regrow Manure",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/justice-lab/regrow.jpg"
    },
    {
      title: "RO Water's waste management",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/justice-lab/ro-watter.jpg"
    },
    {
      title: "Youth Action",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/justice-lab/youth-story.jpg"
    }
  ];

  const galleryImages = [
    "/images/fund-raising/gallery/eco-justice-lab/-01.jpg",
    "/images/fund-raising/gallery/eco-justice-lab/-02.jpg",
    "/images/fund-raising/gallery/eco-justice-lab/-03.jpg",
    "/images/fund-raising/gallery/eco-justice-lab/-04.jpg",
    "/images/fund-raising/gallery/eco-justice-lab/-05.jpg",
    "/images/fund-raising/gallery/eco-justice-lab/-06.jpg",
    "/images/fund-raising/gallery/eco-justice-lab/-07.jpg",
    "/images/fund-raising/gallery/eco-justice-lab/-08.jpg"
  ];

  const openLightbox = (images, index) => {
    setLightbox({
      isOpen: true,
      images: images,
      currentIndex: index
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  const showNext = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const showPrev = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <main>
      <SideNavBanner
        title={
          <>
            SUPPORT WOMEN<br />
            SUPPORT SUSTAINABILITY<br />
            SUPPORT CHANGE
          </>
        }
        bgImage="/images/justice-lab/01-banner-eco-justice-lab.jpg"
        navItems={bannerNavItems}
        activePath="/fund-raising-publicity/eco-justice-lab"
      />

      <div className={styles.pageContentWrapper}>
        <section className={styles.sectionPadding}>
          <div className="container">
            <h2 className={styles.sectionTitle}>ECO- JUSTICE LAB</h2>
            <p className={styles.sectionSubtitle}>Building Climate Leadership Through Community Action</p>

            <div className={styles.statsContainer}>
              <div className={`${styles.statBlock} ${styles.statRed}`}>
                <div className={styles.statNumber}><Counter end={200} /></div>
                <div className={styles.statText}>participants engaged in Awareness and Waste Collection Walks</div>
              </div>
              <div className={`${styles.statBlock} ${styles.statGreen}`}>
                <div className={styles.statNumber}><Counter end={3200} /></div>
                <div className={styles.statText}>kgs Kitchen waste collected and processed through sustainable waste management systems</div>
              </div>
              <div className={`${styles.statBlock} ${styles.statBlue}`}>
                <div className={styles.statNumber}><Counter end={432} /></div>
                <div className={styles.statText}>kgs Organic manure produced from recycled kitchen waste</div>
              </div>
              <div className={`${styles.statBlock} ${styles.statOrange}`}>
                <div className={styles.statNumber}><Counter end={1000} suffix="+" /></div>
                <div className={styles.statText}>Over thousand litres of wastewater reused daily</div>
              </div>
              <div className={`${styles.statBlock} ${styles.statDarkBlue}`}>
                <div className={styles.statNumber}><Counter end={84} /></div>
                <div className={styles.statText}>kgs Plastic waste collected for recycling initiatives</div>
              </div>
            </div>

            <p className={styles.introText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.
            </p>

            <h3 className={styles.subTitle}>Our Activities</h3>
            <div className={styles.activitiesGrid}>
              {activities.map((activity, index) => (
                <ActionCard
                  key={index}
                  title={activity.title}
                  text={activity.text}
                  image={activity.image}
                  link="#"
                />
              ))}
            </div>

            <div className={styles.partnershipSection}>
              <div className={styles.partnershipImgWrapper}>
                <img src="/images/justice-lab/partnership-with ipca.jpg" alt="Partnership with IPCA" className={styles.partnershipImg} />
              </div>
              <div className={styles.partnershipContent}>
                <h3>Partnership with IPCA</h3>
                <p>
                  Indian Pollution Control Association (IPCA) has been a key technical partner supporting the sustainability initiatives of YWCA of Delhi. Through this collection.
                </p>
                <ul>
                  <li>Plastic collection and segregation systems have been introduced to promote responsible recycling practices</li>
                  <li>Waste management systems across campuses are strengthened</li>
                  <li>Capacity-building support is provided for youth, women, and staff</li>
                  <li>Environmental interventions align with professional sustainability standards</li>
                  <li>Three large-capacity Aerobins have been installed at the Ashoka Road campus</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.bannerBand}>
            <div className="container">
              <img src="/images/justice-lab/ywca-big.jpg" alt="YWCA Organic Manure" className={styles.bigBannerImg} />
            </div>
          </div>

          <div className="container">
            <div className={styles.regrowSection}>
              <div className={styles.regrowContent}>
                <h3>ReGrow Organic Manure</h3>
                <h4>Turning Waste into Worth</h4>
                <p>
                  Developed under the Eco-Justice Lab initiative, ReGrow Organic Manure is a sustainable product made from recycled kitchen waste generated at YWCA of Delhi campuses as part of its journey towards becoming a zero-waste campus.
                </p>
                <p>
                  The initiative demonstrates how waste can be transformed into a valuable community resource while promoting environmental responsibility, sustainable gardening, and circular economy practices.
                </p>
                <ul>
                  <li>100% Organic & Chemical-Free</li>
                  <li>Made from Recycled Kitchen Waste</li>
                  <li>Nourishes Plants & Improves Soil Health</li>
                  <li>Eco-Friendly & Sustainable</li>
                  <li>Supports Community Livelihoods</li>
                  <li>Ideal for Home Gardens</li>
                </ul>
              </div>
              <div className={styles.regrowTableWrapper}>
                <h4>Available Sizes & Prices</h4>
                <table className={styles.regrowTable}>
                  <thead>
                    <tr>
                      <th>Product Size</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Small Box (Serves 10 Plants)</td>
                      <td>₹40</td>
                    </tr>
                    <tr>
                      <td>Big Box (Serves 20 Plants)</td>
                      <td>₹70</td>
                    </tr>
                    <tr>
                      <td>1 KG Pack</td>
                      <td>₹120</td>
                    </tr>
                    <tr>
                      <td>5 KG Pack</td>
                      <td>₹400</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.tableNote} style={{ textAlign: 'left' }}>
                  <strong style={{ color: '#000' }}>To order</strong><br />
                  <i className="bi bi-telephone-fill" style={{ color: '#666', marginRight: '5px' }}></i> 7011299056<br />
                  <i className="bi bi-envelope-fill" style={{ color: '#666', marginRight: '5px' }}></i> frap@ywcaofdelhi.org
                </div>
              </div>
            </div>

            <h3 className={styles.subTitle}>Lab Inaugural Event - 4th Sept 2025</h3>
            <div className={styles.galleryGrid}>
              {galleryImages.map((img, index) => (
                <div key={index} className={styles.galleryImgWrapper} onClick={() => openLightbox(galleryImages, index)}>
                  <img src={img} alt={`Gallery Event ${index + 1}`} className={styles.galleryImg} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {lightbox.isOpen && (
        <div className={styles.lightboxOverlay}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <i className="bi bi-x-lg"></i>
          </button>
          <button className={styles.lightboxPrev} onClick={showPrev}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <img src={lightbox.images[lightbox.currentIndex]} className={styles.lightboxImage} alt="Gallery view" />
          <button className={styles.lightboxNext} onClick={showNext}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </main>
  );
}
