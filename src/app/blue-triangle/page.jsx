import React from "react";
import Link from "next/link";
import SideNavBanner from "@/components/partials/SideNavBanner";
import UserStories from "@/components/UserStories";
import styles from "./page.module.css";

const BlueTriangle = () => {
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

  return (
    <main>
      {/* HERO SECTION */}
      <SideNavBanner
        height="380px"
        bgImage="/images/blue-tringle/bt-bnr.png"
        navItems={bannerNavItems}
        activePath="/blue-triangle"

      >
        <div className={styles.heroLeft}>
          {/* <img
            src="/images/blue-tringle/stamp 1.png"
            alt="Book Now Stamp"
            className={styles.stamp}
          /> */}
          <h1 className={styles.heroTitle}>
            Your Preferred Choice<br />In New Delhi
          </h1>
        </div>
      </SideNavBanner>

      {/* GRADIENT WRAPPER */}
      <div>


        {/* OVERVIEW SECTION */}
        <section className={`container ${styles.overviewSection}`}>
          {/* Centered Overview Title & Welcome Message */}
          <div className="text-center mb-4">
            <h2 className="sectionTitle_2">Welcome to Blue Triangle Family Hostel (BTFH)</h2>

            <p style={{ maxWidth: '850px', margin: '15px auto 0', fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>
              Experience exceptional hospitality at YWCA of Delhi's Blue Triangle Family Hostel, where quality service meets comfort and purpose.
            </p>
          </div>

          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 mb-4">
              <div className={styles.overviewTextWrapper} style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#a212b5', fontWeight: '600', fontSize: '1.6rem', marginBottom: '15px' }}>
                  Where Restrained Luxury Shines
                </h3>
                <p>
                  Blue Triangle Family Hostel (BTFH), YWCA of Delhi, is a premier hospitality destination that has undergone thoughtful enhancements, preserving its heritage charm while embracing modern comforts. Nestled in the heart of the city near India Gate, BTFH offers serene views of lush surroundings, establishing it as a cherished landmark in Delhi's vibrant core. As part of recent upgrades, our property ensures a clean, healthy environment for all guests. BTFH provides spacious accommodations, including comfortable rooms and suites with captivating views of green gardens.
                </p>
              </div>
              <div className={styles.overviewImgWrapper}>
                <img src="/images/blue-tringle/bt-1.jpg" alt="Bedroom Overview" />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 mb-4">
              <div className={styles.overviewImgWrapper} style={{ marginBottom: '30px' }}>
                <img src="/images/blue-tringle/bt-2.jpg" alt="Building Overview" />
              </div>
              <div className={styles.overviewTextWrapper}>
                <h3 style={{ color: '#a212b5', fontWeight: '600', fontSize: '1.6rem', marginBottom: '15px' }}>
                  Highlights
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Blue Triangle Family Hostel (BTFH), YWCA of Delhi, is a cherished landmark in the nation's capital, offering serene garden views. With thoughtfully redesigned spacious accommodations, quality dining, and versatile event spaces ideal for conferences, exhibitions, trade fairs, and gatherings, this premier hospitality venue welcomes professionals, families, and global guests alike. Our exceptional amenities and personalized services, including state-of-the-art facilities, make it the perfect choice for productive stays—while every booking supports women's empowerment and community development.
                </p>


              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', border: '1px solid #f0f0f0', marginTop: '20px', boxShadow: '0 8px 24px rgba(162, 18, 181, 0.08)' }}>
            <h4 style={{ color: '#a212b5', fontWeight: '600', fontSize: '1.4rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="bi bi-cup-hot-fill"></i> Dining Excellence
            </h4>
            <p style={{ margin: 0, fontSize: '1.05rem', color: '#555', lineHeight: '1.6' }}>
              Indulge in diverse, flavorful options at our in-house venues, offering international, Indian, and global cuisines tailored for events and daily stays.
            </p>
          </div>
        </section>

        {/* UNPARALLELED OFFERS SECTION */}
        <section className={`container ${styles.unparalleledSection}`}>
          <h2 className="sectionTitle_2 text-center">Unparalleled Offers</h2>
          <div className={styles.unparalleledGrid}>

            {/* Offer 1 */}
            <div className={styles.unparalleledCard}>
              <div className={styles.unparalleledCardHeader}>
                <div className={styles.unparalleledIcon}>
                  <i className="bi bi-cup-hot-fill"></i>
                </div>
                <h3 className={styles.unparalleledTitle}>Breakfast Inclusive Rate</h3>
              </div>
              <p className={styles.unparalleledDesc}>
                Wake up to a symphony of flavours with our delectable breakfast spread and enjoy seamless internet connectivity and flexible cancellation for that added convenience.
              </p>
            </div>

            {/* Offer 2 */}
            <div className={styles.unparalleledCard}>
              <div className={styles.unparalleledCardHeader}>
                <div className={styles.unparalleledIcon}>
                  <i className="bi bi-stars"></i>
                </div>
                <h3 className={styles.unparalleledTitle}>Suite Surprises</h3>
              </div>
              <p className={styles.unparalleledDesc}>
                Discover a finessed way of life at our suites as you indulge in our superlative hospitality in an aura of extravagant themes.
              </p>
            </div>

            {/* Offer 3 */}
            <div className={styles.unparalleledCard}>
              <div className={styles.unparalleledCardHeader}>
                <div className={styles.unparalleledIcon}>
                  <i className="bi bi-person-heart"></i>
                </div>
                <h3 className={styles.unparalleledTitle}>She Makes Time For Her Own Self</h3>
              </div>
              <p className={styles.unparalleledDesc}>
                A time off from your everyday bustle should be nothing short of magical. City Woyage is a specially curated stay package that indulges you and your friends with exquisite experiences at our iconic city destinations. Every laugh, thrill, shared moment becomes a chapter in your unforgettable story.
              </p>
            </div>

            {/* Offer 4 */}
            <div className={styles.unparalleledCard}>
              <div className={styles.unparalleledCardHeader}>
                <div className={styles.unparalleledIcon}>
                  <i className="bi bi-house-heart-fill"></i>
                </div>
                <h3 className={styles.unparalleledTitle}>Find Your Oasis Close to Home</h3>
              </div>
              <p className={styles.unparalleledDesc}>
                Retreat into our tranquil urban havens and indulge in an unforgettable staycation that combines the best of experiences and relaxation. Enjoy added benefits as you unwind with our exclusive Perfect Staycations offer.
              </p>
            </div>

          </div>
        </section>

        {/* BOOKING CARDS SECTION */}
        <section className={styles.bookingCardsSection}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center">Booking</h2>
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
        {/* BOOK YOUR STAY / CONTACT SECTION */}
        <section className="container mb-5 mt-4">
          <div className={styles.contactCard}>
            <div className="row align-items-center">
              <div className={`col-lg-4 mb-4 mb-lg-0 text-center text-lg-start ${styles.contactCardLeft}`}>
                <h2 className={styles.contactTitle}>Book Your Stay</h2>
                <p className={styles.contactText}>
                  Get in touch with us to reserve your room or event space today.
                </p>
                <Link
                  href="https://ywcaofdelhi.org/public/public/GHBooking.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactBtn}
                >
                  Book Now <i className="bi bi-arrow-right-circle-fill ms-2"></i>
                </Link>
              </div>

              <div className="col-lg-8 ps-lg-5">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <div className={styles.contactIconWrapper}>
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <div>
                        <h5 className={styles.contactInfoTitle}>Address</h5>
                        <p className={styles.contactInfoText}>
                          1, Ashoka Road,<br />New Delhi-110001
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <div className={styles.contactIconWrapper}>
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <div>
                        <h5 className={styles.contactInfoTitle}>Contact Info</h5>
                        <p className={styles.contactInfoText}>
                          <strong>Tel:</strong> 011-23360133, 23365014, 23365441<br />
                          <strong>Mob:</strong> +91 70112 99044
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`col-md-12 mt-4 pt-3 ${styles.contactDivider}`}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                      <div className={styles.contactEmailWrapper}>
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <div>
                        <h5 className={styles.contactInfoTitle} style={{ marginBottom: '2px' }}>Email Us</h5>
                        <a href="mailto:btfh@ywcaofdelhi.org" className={styles.contactLink}>
                          btfh@ywcaofdelhi.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SPECIAL OFFERS SECTION */}
        {/* <section className={`container ${styles.offersSection}`}>
          <h2 className="sectionTitle_2 text-center">Special Offers</h2>
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
        </section> */}
        {/* PDF DOWNLOADS SECTION */}
        <section id="compliance-docs" className="container">
          <div className={styles.complianceSection}>
            <h2 className="sectionTitle_2 text-center" style={{ color: '#fff', marginBottom: '40px' }}>Download Brochure & Guidelines</h2>
            <div className={styles.complianceBtns}>
              {/* <a href="/images/blue-tringle/pdf/BTFH%20BROCHURE%20PROSPECTUS%20%20TARIFF%20CARD%20(1).pdf" download className={styles.purpleBtn} target="_blank" rel="noopener noreferrer"><i className="bi bi-file-earmark-pdf me-2"></i>BTFH Brochure & Tariff Card</a> */}
              <a href="/images/blue-tringle/pdf/Hotel%20Rule%20Book_BTFH.pdf" download className={styles.purpleBtn} target="_blank" rel="noopener noreferrer"><i className="bi bi-file-earmark-pdf me-2"></i>Hotel Rule Book</a>
              <a href="/images/blue-tringle/pdf/LAWN%20PROMOTION.pdf" download className={styles.purpleBtn} target="_blank" rel="noopener noreferrer"><i className="bi bi-file-earmark-pdf me-2"></i>Lawn Promotion</a>
            </div>
          </div>
        </section>

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
    </main>
  );
};

export default BlueTriangle;