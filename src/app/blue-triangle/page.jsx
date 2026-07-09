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
        bgImage="/images/blue-tringle/bt-bnr.png"
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
            Your<br />Preferred Choice<br />In New Delhi
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
                  <strong>Blue Triangle Family Hostel (BTFH), YWCA of Delhi,</strong> is a premier hospitality destination that has undergone thoughtful enhancements, preserving its heritage charm while embracing modern comforts. Nestled in the heart of the city near India Gate, BTFH offers serene views of lush surroundings, establishing it as a cherished landmark in Delhi's vibrant core. As part of recent upgrades, our property ensures a clean, healthy environment for all guests. BTFH provides spacious accommodations, including comfortable rooms and suites with captivating views of green gardens.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
              <div className={styles.overviewImgWrapper}>
                <img src="/images/blue-tringle/hotel-1.jpg" alt="Building Overview" />
              </div>
            </div>
            {/* Right Column */}
            <div className="col-lg-6">
              <div className={styles.overviewImgWrapper} style={{ marginBottom: '40px' }}>
                <img src="/images/blue-tringle/hotel-2.jpg" alt="Bedroom Overview" />
              </div>
              <div className={styles.overviewTextWrapper}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING CARDS SECTION */}
        <section className={styles.bookingCardsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Booking</h2>
            <div className={styles.bookingGrid}>
              <Link href="/blue-triangle/room-booking" className={styles.bookingCardLink}>
                <div className={styles.bookingCard}>
                  <img src="/images/blue-tringle/Book-A-Room.png" alt="Room Booking" />
                  <h4>Room Booking</h4>
                </div>
              </Link>
              <Link href="/blue-triangle/meeting-event-spaces" className={styles.bookingCardLink}>
                <div className={styles.bookingCard}>
                  <img src="/images/blue-tringle/Meeting-Event-Spaces.png" alt="Meeting & Event Spaces" />
                  <h4>Meeting & Event Spaces</h4>
                </div>
              </Link>
              <Link href="/blue-triangle/explore-delhi" className={styles.bookingCardLink}>
                <div className={styles.bookingCard}>
                  <img src="/images/blue-tringle/Explore-Delhi.png" alt="Explore Delhi" />
                  <h4>Explore Delhi</h4>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* USER STORIES SECTION */}
        <UserStories stories={stories} title="User Stories" />

        {/* SPECIAL OFFERS SECTION */}
        <section className={`container ${styles.offersSection}`}>
          <h2 className={styles.sectionTitle}>Special Offers</h2>
          <div className={styles.offersGrid}>
            <div className={styles.offerCard}>
              <img src="/images/blue-tringle/all-offers.png" alt="Seasons Greeting" />
            </div>
            <div className={styles.offerCard}>
              <img src="/images/blue-tringle/all-offers.png" alt="Seasons Greeting" />
            </div>
            <div className={styles.offerCard}>
              <img src="/images/blue-tringle/all-offers.png" alt="Seasons Greeting" />
            </div>
          </div>
        </section>
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