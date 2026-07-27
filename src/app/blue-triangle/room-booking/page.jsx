import React from "react";
import Link from "next/link";
import SideNavBanner from "@/components/partials/SideNavBanner";
import UserStories from "@/components/UserStories";
import styles from "./page.module.css";

const BlueTriangle = () => {
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

  return (
    <main>
      {/* HERO SECTION */}
      <SideNavBanner
        height="380px"
        bgImage="/images/room-booking/room-booking-bnr.jpg"
        navItems={bannerNavItems}
        activePath="/blue-triangle"

      >
        <div className={styles.heroLeft}>
          <img
            src="/images/blue-tringle/stamp 1.png"
            alt="Book Now Stamp"
            className={styles.stamp}
          />
          <h1 className={styles.heroTitle}>
            Where<br />Restrained Luxury<br />Shines
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
                  BTFH-Room Booking. The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text.
                </p>
                <p>
                  For Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. For Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. For Letraset's Body Type sheets. It has survived not only many decades.
                </p>
              </div>

            </div>
            {/* Right Column */}
            <div className="col-lg-6">
              <div className={styles.overviewImgWrapper}>
                <img src="/images/room-booking/about-img.jpg" alt="Building Overview" />
              </div>

            </div>
          </div>
        </section>

        {/* BOOKING CARDS SECTION */}
        <section className={styles.bookingCardsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Rooms</h2>
            <div className={styles.bookingGrid}>
              <Link href="#" className={styles.bookingCardLink}>
                <div className={styles.bookingCard}>
                  <img src="/images/room-booking/room-booking-thumb.jpg" alt="Single room" />
                  <h4>Single room</h4>
                </div>
              </Link>
              <Link href="#" className={styles.bookingCardLink}>
                <div className={styles.bookingCard}>
                  <img src="/images/room-booking/room-booking-thumb.jpg" alt="Double Room (Double OCC.)" />
                  <h4>Double Room (Double OCC.)</h4>
                </div>
              </Link>
              <Link href="#" className={styles.bookingCardLink}>
                <div className={styles.bookingCard}>
                  <img src="/images/room-booking/room-booking-thumb.jpg" alt="Double Room (Single OCC.)" />
                  <h4>Double Room (Single OCC.)</h4>
                </div>
              </Link>
              <Link href="#" className={styles.bookingCardLink}>
                <div className={styles.bookingCard}>
                  <img src="/images/room-booking/room-booking-thumb.jpg" alt="Executive deluxe (Double OCC.)" />
                  <h4>Executive deluxe (Double OCC.)</h4>
                </div>
              </Link>
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
    </main>
  );
};

export default BlueTriangle;