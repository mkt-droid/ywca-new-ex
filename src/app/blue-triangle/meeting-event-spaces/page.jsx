"use client";
import React, { useState } from "react";
import Link from "next/link";
import SideNavBanner from "@/components/partials/SideNavBanner";
import UserStories from "@/components/UserStories";
import styles from "./page.module.css";

const MeetingEventSpaces = () => {
  const bannerNavItems = [
    { title: 'Home / Overview', icon: 'bi-house-door', link: '/blue-triangle' },
    { title: 'Room Booking', icon: 'bi-door-closed', link: '/blue-triangle/room-booking' },
    { title: 'Meeting & Event Spaces', icon: 'bi-people', link: '/blue-triangle/meeting-event-spaces' },
    { title: 'Explore Delhi', icon: 'bi-geo-alt', link: '/blue-triangle/explore-delhi' },
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
      title: "Conference Room - 1",
      image: "/images/meetings-and-event/Conference-Room- 1.jpg",
      desc: "Sample Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 1,
      title: "Conference Room - 2",
      image: "/images/meetings-and-event/Conference-Room - 2.jpg",
      desc: "Sample Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 2,
      title: "Conference Room - 3",
      image: "/images/meetings-and-event/Conference-Room - 3.jpg",
      desc: "Sample Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 3,
      title: "Hall",
      image: "/images/meetings-and-event/Conference-Room - 4.jpg",
      desc: "Sample Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 4,
      title: "Lawn Space",
      image: "/images/meetings-and-event/big-space.jpg",
      desc: "Sample Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged."
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
        bgImage="/images/meetings-and-event/me-bnr.jpg"
        navItems={bannerNavItems}
        activePath="/blue-triangle/meeting-event-spaces"
      >
        <div className={styles.heroLeft}>
          <img
            src="/images/blue-tringle/stamp 1.png"
            alt="Book Now Stamp"
            className={styles.stamp}
          />
          <h1 className={styles.heroTitle}>
            INDOOR &amp; OUTDOOR<br />MEETING &amp; EVENTS<br />SPACES
          </h1>
        </div>
      </SideNavBanner>

      {/* GRADIENT WRAPPER */}
      <div className={styles.gradientBackground}>
        {/* BOOKING BAR */}
        <section className={`container ${styles.bookingSection}`}>
          <div className={styles.bookingBar}>
            <h3 className={styles.bookingTitle}>Booking</h3>
            <div className={styles.bookingForm}>
              <div className={styles.formGroup}>
                <i className="bi bi-map"></i>
                <select className={styles.formInput}>
                  <option>Select Option</option>
                  <option>Room</option>
                  <option>Event Space</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <i className="bi bi-calendar-event"></i>
                <input type="text" placeholder="Check In" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <i className="bi bi-calendar-event"></i>
                <input type="text" placeholder="Check out" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <i className="bi bi-people-fill"></i>
                <input type="text" placeholder="Travellers" className={styles.formInput} />
              </div>
              <button className={styles.bookBtn}>Book Now</button>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className={`container ${styles.overviewSection}`}>
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className={styles.overviewTextWrapper} style={{ marginBottom: '40px' }}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text.
                </p>
                <p>
                  For Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. For Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. For Letraset's Body Type sheets. It has survived not only many decades.
                </p>
              </div>

            </div>
            {/* Right Column */}
            <div className="col-lg-6">
              <div className={styles.overviewImgWrapper}>
                <img src="/images/meetings-and-event/about-img.jpg" alt="About Meeting & Event Spaces" />
              </div>

            </div>
          </div>
        </section>

        {/* SPACES SECTION */}
        <section className={styles.bookingCardsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Spaces</h2>
            <div className={styles.bookingGrid}>
              {spacesData.slice(0, 4).map((space, index) => (
                <div key={space.id} className={styles.bookingCardLink} onClick={() => openPopup(index)}>
                  <div className={styles.bookingCard}>
                    <img src={space.image} alt={space.title} />
                    <h4>{space.title}</h4>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.bigSpaceWrapper} onClick={() => openPopup(4)}>
              <img src={spacesData[4].image} alt={spacesData[4].title} />
              <div className={styles.bigSpaceTitle}>{spacesData[4].title}</div>
            </div>
          </div>
        </section>

        {/* USER STORIES SECTION */}
        <UserStories stories={stories} title="User Stories" />
      </div>

      {/* INSTAGRAM SECTION */}
      <section className={styles.instaSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Instagram</h2>
          <div className={styles.instaGrid}>
            <img src="/images/blue-tringle/insta-1.jpg" alt="Instagram 1" />
            <img src="/images/blue-tringle/insta-2.png" alt="Instagram 2" />
            <img src="/images/blue-tringle/insta-3.png" alt="Instagram 3" />
            <img src="/images/blue-tringle/insta-4.png" alt="Instagram 4" />
            <img src="/images/blue-tringle/insta-5.png" alt="Instagram 5" />
          </div>
        </div>
      </section>

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
              <button className={styles.popupBookBtn}>Book Now</button>
            </div>

            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSpace}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default MeetingEventSpaces;
