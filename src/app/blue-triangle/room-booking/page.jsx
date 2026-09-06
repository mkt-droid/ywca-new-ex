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
    }
  ];

  const roomTypes = [
    { name: 'Single Room', subtitle: '', tariff: '2,368' },
    { name: 'Double Room', subtitle: '(Double OCC.)', tariff: '3,929' },
    { name: 'Double Room', subtitle: '(Single OCC.)', tariff: '3,177' },
    { name: 'Executive Deluxe', subtitle: '(Double OCC.)', tariff: '4,128' },
    { name: 'Executive Deluxe', subtitle: '(Single OCC.)', tariff: '3,365' },
    { name: 'Family Suite', subtitle: '', tariff: '4,877' },
    { name: 'Dormitory', subtitle: '(6 Bedded)', tariff: '5,662' }
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <SideNavBanner
        height="360px"
        bgImage="/images/room-booking/room-booking-bnr.jpg"
        navItems={bannerNavItems}
        activePath="/blue-triangle/room-booking"

      >
        <div className={styles.heroLeft}>

          <h1 className={styles.heroTitle}>
            Where Restrained <br /> Luxury Shines
          </h1>
        </div>
      </SideNavBanner>

      {/* GRADIENT WRAPPER */}
      <div className={''}>


        {/* OVERVIEW SECTION */}
        <section className={`container ${styles.overviewSection}`}>
          <div className="row mb-4">
            <div className="col-12 text-center">
              <div className={styles.overviewTextWrapper} style={{ marginBottom: '40px', maxWidth: '900px', margin: '0 auto' }}>
                <h3 style={{ color: '#242278', marginBottom: '20px', fontWeight: 600 }}>Exceptional Hotel Offers at BTFH, New Delhi</h3>
                <p>
                  Enhance your stay at BTFH, New Delhi with these limited-time offers. From dining to room upgrades, our promotions bring an extra touch of indulgence to your next BTFH experience. Take advantage of these enticing hotel offers to create lasting memories during your visit.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className={styles.overviewImgWrapper} style={{ height: '300px' }}>
                <img src="/images/blue-tringle/book-1.jpg" alt="Hotel Offer 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.overviewImgWrapper} style={{ height: '300px' }}>
                <img src="/images/blue-tringle/book-2.jpg" alt="Hotel Offer 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING CARDS SECTION */}
        <section className={styles.bookingCardsSection}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center">Rooms</h2>
            <h4 className="text-center" style={{ marginBottom: '40px' }}>TYPES OF ACCOMMODATION</h4>
            <div className={styles.bookingGrid}>
              {roomTypes.map((room, index) => (
                <Link key={index} href="#" className={styles.bookingCardLink}>
                  <div className={styles.bookingCard}>
                    <img src="/images/room-booking/room-booking-thumb.jpg" alt={room.name} />
                    <div className={styles.cardContent}>
                      <div className={styles.titleContainer}>
                        <h4 className={styles.cardTitle}>{room.name}</h4>
                        {room.subtitle && <span className={styles.cardSubtitle}>{room.subtitle}</span>}
                      </div>
                      <div className={styles.tariffWrapper}>
                        <span className={styles.tariffLabel}>Tariff</span>
                        <span className={styles.tariffPrice}>₹{room.tariff}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* BOOKING BAR */}
        <section className={`container  ${styles.bookingSection}`}>
          <Link
            href="https://ywcaofdelhi.org/public/public/GHBooking.aspx"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', maxWidth: '900px', margin: '0 auto', paddingBottom: 70 }}
          >
            <img
              src="/images/Booking-Banner.jpg"
              alt="Booking Banner"
              style={{ width: '100%', display: 'block', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            />
          </Link>
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
    </main>
  );
};

export default BlueTriangle;