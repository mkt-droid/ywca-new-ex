"use client";
import React, { useState } from "react";
import Link from "next/link";
import SideNavBanner from "@/components/partials/SideNavBanner";
import UserStories from "@/components/UserStories";
import styles from "./page.module.css";

const MeetingEventSpaces = () => {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/blue-triangle' },
    { title: 'Room Booking', icon: 'bi-door-closed', link: '/blue-triangle/room-booking' },
    { title: 'Meeting & Event Spaces', icon: 'bi-people', link: '/blue-triangle/meeting-event-spaces' },
    { title: 'Explore Delhi', icon: 'bi-geo-alt', link: '/blue-triangle/explore-delhi' },
    { title: 'Contact Us', icon: 'bi-telephone', link: '/blue-triangle/contact' },
  ];

  const stories = [
    {
      id: 1,
      name: 'Rachel L.',
      subtitle: 'From Abu Dhabi',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: '/images/blue-tringle/user-1.png'
    },
    {
      id: 2,
      name: 'Luke',
      subtitle: 'A wanderer from Sweden',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: '/images/blue-tringle/user-2.png'
    },
    {
      id: 3,
      name: 'Daniel A',
      subtitle: 'First to the old charm of magical...',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: '/images/blue-tringle/user-3.png'
    },
    {
      id: 4,
      name: 'Emma',
      subtitle: 'Explorer',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: '/images/blue-tringle/user-4.png'
    }
  ];

  const spacesData = [
    {
      id: 0,
      title: "Conference Room 1",
      subtitle: "Up to 30 guests",
      image: "/images/meetings-and-event/Conference-Room- 1.jpg",
      desc: "Up to 30 guests",
      tariffs: [
        { type: "CONFERENCE NO. 1", tariff: "5,310", timing: "9am to 5pm / 10am to 6pm" }
      ]
    },
    {
      id: 1,
      title: "Conference Room 2",
      subtitle: "Up to 40 guests",
      image: "/images/meetings-and-event/Conference-Room - 2.jpg",
      desc: "Up to 40 guests",
      tariffs: [
        { type: "CONFERENCE NO. 2", tariff: "5,900", timing: "9am to 5pm / 10am to 6pm" }
      ]
    },
    {
      id: 2,
      title: "Conference Room 3",
      subtitle: "Up to 20 guests",
      image: "/images/meetings-and-event/Conference-Room - 3.jpg",
      desc: "Up to 20 guests",
      tariffs: [
        { type: "CONFERENCE NO. 3", tariff: "4,130", timing: "9am to 5pm / 10am to 6pm" }
      ]
    },
    {
      id: 3,
      title: "Constantia Hall",
      subtitle: "Up to 200 guests",
      image: "/images/meetings-and-event/Conference-Room - 4.jpg",
      desc: "Up to 200 guests",
      tariffs: [
        { type: "CONSTANTIA HALL (FULL DAY)", tariff: "29,500", timing: "10am to 5pm" },
        { type: "CONSTANTIA HALL (HALF DAY)", tariff: "16,520", timing: "10am to 1pm / 2pm to 5pm / 6pm to 9pm" }
      ]
    },
    {
      id: 4,
      title: "YWCA Lawn Space",
      subtitle: "Up to 500 guests",
      image: "/images/meetings-and-event/big-space.jpg",
      desc: "A unique option for larger events, with a relaxed and serene atmosphere. Up to 500 guests.",
      tariffs: []
    }
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSpaceIndex, setCurrentSpaceIndex] = useState(0);

  const openPopup = (index) => {
    setCurrentSpaceIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const nextSpace = (e) => {
    e.stopPropagation();
    setCurrentSpaceIndex((prev) => (prev + 1) % spacesData.length);
  };

  const prevSpace = (e) => {
    e.stopPropagation();
    setCurrentSpaceIndex((prev) => (prev - 1 + spacesData.length) % spacesData.length);
  };

  return (
    <main>
      {/* HERO SECTION */}
      <SideNavBanner
        height="360px"
        bgImage="/images/meetings-and-event/me-bnr.jpg"
        navItems={bannerNavItems}
        activePath="/blue-triangle/meeting-event-spaces"
      >
        <div className={styles.heroLeft}>

          <h1 className={styles.heroTitle}>
            MEETING &amp; EVENTS<br />SPACES
          </h1>
        </div>
      </SideNavBanner>

      {/* GRADIENT WRAPPER */}
      <div className={''}>


        {/* OVERVIEW SECTION */}
        <section className={`container ${styles.overviewSection}`}>
          <div className="row align-items-center g-5">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className={styles.overviewTextWrapper}>
                <h3 style={{ color: '#242278', marginBottom: '20px', fontWeight: 600, fontSize: '2rem' }}>Exceptional Venues</h3>
                <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
                  BTFH, New Delhi is a pinnacle of hospitality in the heart of Lutyens’ Delhi, making it a prime choice for landmark occasions. With a wide array of venues that are suitable for the most intimate to the grandest of celebrations, our conference halls in New Delhi are second to none.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
                  So whether you are celebrating personal or corporate milestones, awards, galas or retreats, let our signature BTFH service help you deliver an impeccable event. For business meetings and conferences, our conference halls in Delhi offer sophisticated settings that promote productivity and collaboration.
                </p>
              </div>
            </div>
            {/* Right Column */}
            <div className="col-lg-6">
              <div className={styles.overviewImgWrapper}>
                <img 
                  src="/images/blue-tringle/mas-main.png" 
                  alt="About Meeting & Event Spaces" 
                  style={{ borderRadius: '16px', boxShadow: '0 15px 40px rgba(0,0,0,0.12)', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SPACES SECTION */}
        <section className={styles.bookingCardsSection}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center">Spaces</h2>
            <div className={styles.bookingGrid}>
              {spacesData.slice(0, 4).map((space, index) => (
                <Link key={space.id} href="https://ywcaofdelhi.org/public/Public/Login.aspx" target="_blank" rel="noopener noreferrer" className={styles.bookingCardLink} style={{textDecoration: 'none'}}>
                  <div className={styles.bookingCard}>
                    <img src={space.image} alt={space.title} />
                    <div className={styles.cardContent}>
                      <div className={styles.titleContainer}>
                        <h4 className={styles.cardTitle}>{space.title}</h4>
                        {space.subtitle && <span className={styles.cardSubtitle}>{space.subtitle}</span>}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="https://ywcaofdelhi.org/public/Public/Login.aspx" target="_blank" rel="noopener noreferrer" className={styles.bigSpaceWrapper} style={{textDecoration: 'none', display: 'block'}}>
              <div className={styles.bookingCard}>
                <img src={spacesData[4].image} alt={spacesData[4].title} style={{ height: '350px' }} />
                <div className={styles.cardContent}>
                  <div className={styles.titleContainer}>
                    <h4 className={styles.cardTitle}>{spacesData[4].title}</h4>
                    {spacesData[4].subtitle && <span className={styles.cardSubtitle}>{spacesData[4].subtitle}</span>}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* USER STORIES SECTION */}
        {/* <UserStories stories={stories} title="User Stories" /> */}
      </div>

      {/* INSTAGRAM SECTION */}
      {/* <section className={styles.instaSection}>
        <div className="container">
          <h2 className="sectionTitle_2 text-center">Instagram</h2>
          <div className={styles.instaGrid}>
            <img src="/images/blue-tringle/insta-1.jpg" alt="Instagram 1" />
            <img src="/images/blue-tringle/insta-2.png" alt="Instagram 2" />
            <img src="/images/blue-tringle/insta-3.png" alt="Instagram 3" />
            <img src="/images/blue-tringle/insta-4.png" alt="Instagram 4" />
            <img src="/images/blue-tringle/insta-5.png" alt="Instagram 5" />
          </div>
        </div>
      </section> */}

      {/* POPUP MODAL */}
      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <button className={styles.closeBtn} onClick={closePopup}>&times;</button>

          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSpace}>
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className={styles.popupImageWrapper}>
              <img src={spacesData[currentSpaceIndex].image} alt={spacesData[currentSpaceIndex].title} />
            </div>
            <div className={styles.popupTextWrapper}>
              <h3 className={styles.popupTitle}>{spacesData[currentSpaceIndex].title}</h3>
              <p className={styles.popupDesc}>{spacesData[currentSpaceIndex].desc}</p>

              {spacesData[currentSpaceIndex].tariffs && spacesData[currentSpaceIndex].tariffs.length > 0 && (
                <div className={styles.tariffTableContainer}>
                  <table className={styles.tariffTable}>
                    <thead>
                      <tr>
                        <th>TYPES OF VENUE</th>
                        <th>TARIFF (₹)</th>
                        <th>TIMING</th>
                      </tr>
                    </thead>
                    <tbody>
                      {spacesData[currentSpaceIndex].tariffs.map((t, i) => (
                        <tr key={i}>
                          <td>{t.type}</td>
                          <td style={{ fontWeight: 600 }}>{t.tariff}</td>
                          <td>{t.timing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <Link href="https://ywcaofdelhi.org/public/Public/Login.aspx" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <button className={styles.popupBookBtn}>Book Now</button>
              </Link>
            </div>

            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSpace}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
      {/* BOOKING BAR */}
      <section className={`container  ${styles.bookingSection}`}>
        <Link
          href="https://ywcaofdelhi.org/public/public/GHBooking.aspx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', maxWidth: '900px', margin: '0 auto', paddingBottom: 70 }}
        >
        </Link>
      </section>
    </main>
  );
};

export default MeetingEventSpaces;
