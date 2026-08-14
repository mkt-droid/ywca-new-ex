"use client";
import React, { useState } from "react";
import SideNavBanner from "@/components/partials/SideNavBanner";
import UserStories from "@/components/UserStories";
import styles from "./page.module.css";

const ExploreDelhi = () => {
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
      name: 'Lauren',
      subtitle: 'Incredible India',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: '/images/blue-tringle/user-4.png'
    }
  ];

  const sliderData = [
    {
      id: 1,
      title: "Jantar Mantar",
      image: "/images/Explore-Delhi/Jantar-Mantar.jpg",
      desc: "Located near Connaught Place, this 18th century, open-air astronomical observatory was one of five of its kind, commissioned to be built across India by Maharaja Sawai Jai Singh II - a brilliant mathematician and astronomer - to aid in the study of celestial bodies, determine time, track planets and predict eclipses. Amongst the 13 large-scale architectural instruments is Samrat Yantra (a giant sundial used to measure the precise time of day), Misra Yantra (designed to determine the longest and shortest days of the year) and Jayaprakash Yantra (used to determine the coordinates of celestial bodies).",
      distance: "2 km",
      hours: "6:00 am to 6:00 pm",
      bestTime: "Early mornings or late afternoons",
      duration: "1 - 2 hours",
      entry: "INR 25 (Indians) INR 300 (foreign nationals)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 2,
      title: "Qutub Minar",
      image: "/images/Explore-Delhi/Qutub-Minar.jpg",
      desc: "Built in the 12th century as a victory tower, the 73-metre-high minaret is crafted from red sandstone and marble, featuring intricate carvings and inscriptions from the Quran. The capital's most towering monument looms over you as you stroll through the Qutub complex. While it continues to capture the imagination of scientists, owing to its mysterious resistance to rust, there's a popular belief that good fortune awaits you can completely wrap your hands around the pillar with your back touching it.",
      distance: "10.5 km",
      hours: "7:00 am to 5:00 pm",
      bestTime: "Mornings",
      duration: "1 - 1.5 hours",
      entry: "INR 50 (Indians) INR 600 (foreign tourists)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 3,
      title: "National Museum",
      image: "/images/Explore-Delhi/National-Museum.jpg",
      desc: "Located on Janpath, one of the largest museums in India was established in 1949. It showcases a variety of articles ranging from the prehistoric era to modern works of art. Besides hosting a variety of workshops, yoga, meditation sessions and cultural performances in the evenings, it also offers visitors a unique chance to see art conservators in action.",
      distance: "6 km",
      hours: "0:00 am to 6:00 pm (weekdays) 10:00 am to 8:00 pm (weekends)",
      bestTime: "Mornings and afternoons",
      duration: "2 - 3 hours",
      entry: "INR 20 (Indians) INR 500 (foreign nationals)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 4,
      title: "India Gate",
      image: "/images/Explore-Delhi/India-Gate.jpg",
      desc: "Located on Rajpath, the awe-inspiring war memorial, a 42-metre-high archway of sandstone, rises majestically against the backdrop of Rashtrapati Bhawan. Enjoy ice cream from local vendors or pack a picnic to soak in the lively atmosphere. To experience the monument in a unique way, sign up for a session with Delhi City Segway Tour company from 5 pm to 9 pm, starting at INR 2500.",
      distance: "3 km",
      hours: "All day",
      bestTime: "Evenings",
      duration: "1 hour",
      entry: null,
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <main>
      {/* HERO SECTION */}
      <SideNavBanner
        height="360px"
        bgImage="/images/Explore-Delhi/me-bnr.jpg"
        navItems={bannerNavItems}
        activePath="/blue-triangle/explore-delhi"
      >
        <div className={styles.heroLeft}>
          <img
            src="/images/blue-tringle/stamp 1.png"
            alt="Book Now Stamp"
            className={styles.stamp}
          />
          <h1 className={styles.heroTitle}>
            EXPERIENCE<br />DELHI WITH US
          </h1>
        </div>
      </SideNavBanner>

      {/* GLIMPSES OF DELHI */}
      <section className={styles.glimpsesSection}>
        <div className="container">
          <h2 className="sectionTitle_2 text-center">Glimpses Of Delhi</h2>

          <div className={styles.glimpsesGrid}>
            <div className={styles.glimpsesCard}>
              <img src="/images/Explore-Delhi/IconicLandmarks.png" alt="Iconic Landmarks" />
              <div className={styles.glimpsesOverlay}>
                <h3 className={styles.glimpsesTitle}>Iconic<br />Landmarks</h3>
                <p className={styles.glimpsesSubtitle}>Delhi</p>
              </div>
            </div>

            <div className={styles.glimpsesCard}>
              <img src="/images/Explore-Delhi/Heritage-Architecture.png" alt="Heritage & Architecture" />
              <div className={styles.glimpsesOverlay}>
                <h3 className={styles.glimpsesTitle}>Heritage &<br />Architecture</h3>
                <p className={styles.glimpsesSubtitle}>Delhi</p>
              </div>
            </div>

            <div className={styles.glimpsesCard}>
              <img src="/images/Explore-Delhi/Old-Delhi -Charm.png" alt="Old Delhi Charm" />
              <div className={styles.glimpsesOverlay}>
                <h3 className={styles.glimpsesTitle}>Old Delhi<br />Charm</h3>
                <p className={styles.glimpsesSubtitle}>Delhi</p>
              </div>
            </div>

            <div className={styles.glimpsesCard}>
              <img src="/images/Explore-Delhi/Religious-Places.png" alt="Religious Places" />
              <div className={styles.glimpsesOverlay}>
                <h3 className={styles.glimpsesTitle}>Religious<br />Places</h3>
                <p className={styles.glimpsesSubtitle}>Delhi</p>
              </div>
            </div>
          </div>

          <div className={styles.introTextWrapper}>
            <p>
              Indulge in capital moments at YWCA New Delhi with our bespoke experiences, from romantic dining and curated activities to guided city tours, our team of expert concierges, culinary maestros, and dedicated associates ensure that you immerse in authentic connections and unexpected discoveries.
            </p>
            <p>
              India's capital city and political epicentre is the second largest urban agglomeration in the world. Home to historic monuments, stately buildings, scenic parks, glittering retail destinations and one of the country's most irresistible culinary scenes, this living heritage city - continuously inhabited since around 600 BC - is the storied heart of the nation.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED SLIDER (Jantar Mantar etc) */}
      <section className={styles.sliderSectionWrapper}>
        <div className={styles.sliderContainer}>
          <button className={`${styles.sliderNav} ${styles.sliderPrev}`} onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>

          <div key={currentSlideIndex} className={`${styles.sliderCard} ${styles.fadeEffect}`}>
            <div className={styles.sliderLeft}>
              <img
                src={sliderData[currentSlideIndex].image}
                alt={sliderData[currentSlideIndex].title}
                className={styles.sliderImage}
              />
            </div>

            <div className={styles.sliderRight}>
              <h3 className={styles.sliderTitle}>{sliderData[currentSlideIndex].title}</h3>
              <p className={styles.sliderDesc}>{sliderData[currentSlideIndex].desc}</p>

              <div className={styles.sliderDetails}>
                <div className={styles.sliderDetailsRow}>Distance: {sliderData[currentSlideIndex].distance}</div>
                <div className={styles.sliderDetailsRow}>Opening Hours: {sliderData[currentSlideIndex].hours}</div>
                <div className={styles.sliderDetailsRow}>Ideal time to visit: {sliderData[currentSlideIndex].bestTime}</div>
                <div className={styles.sliderDetailsRow}>Ideal duration of visit: {sliderData[currentSlideIndex].duration}</div>
                {sliderData[currentSlideIndex].entry && (
                  <div className={styles.sliderDetailsRow}>Entry Fees: {sliderData[currentSlideIndex].entry}</div>
                )}

                <div className={styles.sliderContact}>
                  <i>{sliderData[currentSlideIndex].contact}</i>
                </div>
              </div>
            </div>
          </div>

          <button className={`${styles.sliderNav} ${styles.sliderNext}`} onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* USER STORIES SECTION */}
      <UserStories stories={stories} title="User Stories" />

      {/* INSTAGRAM SECTION */}
      <section className={styles.instaSection}>
        <div className="container">
          <h2 className="sectionTitle_2 text-center" style={{ marginTop: 0 }}>Instagram</h2>
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

export default ExploreDelhi;
