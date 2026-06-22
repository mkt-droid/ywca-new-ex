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
    "/images/justice-lab/gallery-1.jpg",
    "/images/justice-lab/gallery-2.jpg",
    "/images/justice-lab/gallery-3.jpg",
    "/images/justice-lab/gallery-4.jpg",
    "/images/justice-lab/gallery-5.jpg",
    "/images/justice-lab/gallery-6.jpg",
    "/images/justice-lab/gallery-7.jpg",
    "/images/justice-lab/gallery-8.jpg"
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
        bgImage="/images/fund-raising/main-banner.png"
        navItems={bannerNavItems}
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
              The Eco-Justice Lab is an environmental sustainability initiative of YWCA of Delhi focused on promoting climate-conscious practices, waste management, and community-led environmental action across its campuses and surrounding communities. The initiative aims to nurture young women and communities as environmental leaders by encouraging sustainable lifestyles, responsible waste management, water conservation, upcycling practices, and climate awareness. Through hands-on interventions, community engagement, and skill-building activities, the Eco-Justice Lab works towards building environmentally conscious communities and strengthening institutional sustainability practices. By integrating climate action with women's empowerment and community participation, the initiative reflects YWCA of Delhi's commitment towards creating a cleaner, greener, and more sustainable future.
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
                  Indian Pollution Control Association (IPCA) has been taking forward the Swachh Bharat Mission in many ways across the country by promoting solid waste management practices:
                </p>
                <ul>
                  <li>Providing door to door waste collection services, segregation of waste and organizing training/awareness programs.</li>
                  <li>Working with the government, corporate houses, local authorities and communities towards the implementation of solid waste management rules.</li>
                  <li>Promoting source segregation, recycling, co-processing, and upcycling of plastic waste.</li>
                  <li>Running a pan India project to execute Extended Producer Responsibility (EPR) on Plastic Packaging.</li>
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
                <h4>Nurturing Nature with Nature</h4>
                <p>
                  We upcycle waste to nurture plants. Our "Organic Manure" is carefully prepared to enrich your plants with essential nutrients. Join us in cultivating green spaces with our organic, sustainable products!
                </p>
                <p>
                  Our natural, chemical-free product revitalizes your garden while protecting the environment. Experience the joy of watching your plants thrive with our organic products.
                </p>
                <ul>
                  <li>100% Organic Manure</li>
                  <li>Enhances Soil Quality and Texture</li>
                  <li>Boosts Plant Growth & Root Health</li>
                  <li>Eco-Friendly and Sustainable</li>
                  <li>Supports Community Livelihoods</li>
                  <li>Safe for All Plants</li>
                </ul>
              </div>
              <div className={styles.regrowTableWrapper}>
                <h4>Available Manure & Prices</h4>
                <table className={styles.regrowTable}>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Amritmati Vermi Compost</td>
                      <td>₹ 70</td>
                    </tr>
                    <tr>
                      <td>Regrow Manure 2L (Bottle)</td>
                      <td>₹ 100</td>
                    </tr>
                    <tr>
                      <td>Cocopeat</td>
                      <td>₹ 150</td>
                    </tr>
                    <tr>
                      <td>Eco Brick</td>
                      <td>₹ 150</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.tableNote}>
                  * Note: For bulk orders: 📧 enquiry@ywcaofdelhi.org
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
