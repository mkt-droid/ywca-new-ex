"use client";
import React, { useState } from "react";
import SideNavBanner from "@/components/partials/SideNavBanner";
import UserStories from "@/components/UserStories";
import styles from "./page.module.css";

const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  // Reset index when images array changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src={images[currentIndex]}
        alt={alt}
        className={styles.sliderImage}
        style={{ transition: "opacity 0.5s ease-in-out" }}
      />
      {images.length > 1 && (
        <div style={{ position: "absolute", bottom: "15px", width: "100%", display: "flex", justifyContent: "center", gap: "8px" }}>
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: currentIndex === idx ? "#fff" : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                boxShadow: "0 0 3px rgba(0,0,0,0.3)",
                transition: "background-color 0.3s ease"
              }}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

const ExploreDelhi = () => {
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
      name: 'Lauren',
      subtitle: 'Incredible India',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: '/images/blue-tringle/user-4.png'
    }
  ];

  const sliderData = [
    {
      id: 1,
      title: "Purana Qila",
      images: ["/images/blue-tringle/explore-delhi/tomb.jpg"],
      desc: "One of Delhi’s oldest and most significant historical monuments stands as a symbol of the capital’s multi-layered history, from its mythological association with Indraprastha - capital of the Pandavas in the Mahabharata epic - to its Mughal heritage. Stretching across 300 acres, it features three prominent gateways, bastions, moats, a mosque and a library. Look out for the Sher Mandal, an octagonal red sandstone tower. It was on the steps of this very structure that Humayun fell to his death in 1556, marking a tragic end to a ruler whose life was filled with both triumph and turmoil.",
      distance: "4 km",
      hours: "8:00 am to 6:00 pm",
      bestTime: "Mornings",
      duration: "1 – 2 hours",
      entry: "INR 25 (Indians) INR 300 (foreign nationals)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 2,
      title: "Red Fort (Lal Qila)",
      images: [
        "/images/blue-tringle/explore-delhi/red-ford-1.jpg",
        "/images/blue-tringle/explore-delhi/red-ford-2.jpg",
        "/images/blue-tringle/explore-delhi/red-ford-3.jpg",
        "/images/blue-tringle/explore-delhi/red-ford-4.jpg"
      ],
      desc: "Built by Shah Jahan in 1648, Delhi’s most recognized red sandstone landmark was said to have been designed by Ustad Ahmad Lahori, the architect behind the Taj Mahal. Wander across the octagonal-shaped UNESCO World Heritage Site, exploring expansive courtyards, the Diwan-i-Aam (Hall of Public Audience) - a marvel of Mughal geometry - Diwan-i-Khas (Hall of Private Audience) and the women’s only Rang Mahal (Palace of Colours). Jai Hind, the fort’s light and sound show vividly narrates India's history in the baritone voice of renowned actor, Amitabh Bachchan.",
      distance: "4-5 km",
      hours: "9:30 am to 4:30 pm (Light & Sound Show Timings: 7:00 pm to 8:00 pm Hindi, 8:15 pm to 9:00 pm English)",
      bestTime: "Morning or Evening",
      duration: "2 - 3 hours",
      entry: "INR 50 (Indians) INR 500 (foreign nationals) | Light & Sound Show Ticket Cost: INR 500 - 1500",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 3,
      title: "Jai Hind – Sound and Light Show At Red Fort",
      images: ["/images/blue-tringle/explore-delhi/red-ford-1.jpg"],
      desc: "Two shows daily Hindi & English in the evening. Named among the world’s finest by National Geographic, this is a world-class immersive experience of 400 years of history tracing from the 17th century to the present, featuring narration by Amitabh Bachchan, projection mapping, powerful sound design and cinematic storytelling with live actors, dancers and puppets. Where history rises in theatrical performance: The royal Mughal empire & the power struggle between Dara Shikoh and Aurangzeb; The invasion of Nadir Shah (1739); The Revolt of 1857; India’s journey to independence, rise of the INA and beyond.",
      distance: "4-5 km",
      hours: "Evening",
      bestTime: "Evening",
      duration: "1 - 2 hours",
      entry: null,
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 4,
      title: "Red Fort Centre & Museum Experience",
      images: ["/images/blue-tringle/explore-delhi/national-mueseam.jpg"],
      desc: "Best explored during the day before attending the Jai Hind show in the evening. Located within the Red Fort (Lal Qila) complex. Offers a deeper insight into India’s history where echoes of the Mughal era lingers in every arch & corridor. Showcases rich culture and legacy of the Mughal monument. One of the most educational places to visit in Delhi NCR. Features curated exhibits on stories of empire, craft and history. Highlights India’s freedom struggle through museum displays.",
      distance: "4-5 km",
      hours: "Daytime",
      bestTime: "Before evening show",
      duration: "1 - 2 hours",
      entry: null,
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 5,
      title: "Jantar Mantar",
      images: ["/images/blue-tringle/explore-delhi/jantar manter.jpg"],
      desc: "Located near Connaught Place, this 18th century, open-air astronomical observatory was one of five of its kind, commissioned to be built across India by Maharaja Sawai Jai Singh II - a brilliant mathematician and astronomer - to aid in the study of celestial bodies, determine time, track planets and predict eclipses. Amongst the 13 large-scale architectural instruments is Samrat Yantra (a giant sundial used to measure the precise time of day), Misra Yantra (designed to determine the longest and shortest days of the year) and Jayaprakash Yantra (used to determine the coordinates of celestial bodies).",
      distance: "2 km",
      hours: "6:00 am to 6:00 pm",
      bestTime: "Early mornings or late afternoons",
      duration: "1 - 2 hours",
      entry: "INR 25 (Indians) INR 300 (foreign nationals)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 6,
      title: "National Museum",
      images: ["/images/blue-tringle/explore-delhi/national-mueseam.jpg"],
      desc: "Located on Janpath, one of the largest museums in India was established in 1949. It showcases a variety of articles ranging from the prehistoric era to modern works of art. Besides hosting a variety of workshops, yoga, meditation sessions and cultural performances in the evenings, it also offers visitors a unique chance to see art conservators in action.",
      distance: "6 km",
      hours: "10:00 am to 6:00 pm (weekdays) 10:00 am to 8:00 pm (weekends)",
      bestTime: "Mornings and afternoons",
      duration: "2 - 3 hours",
      entry: "INR 20 (Indians) INR 500 (foreign nationals)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 7,
      title: "Qutub Minar",
      images: ["/images/blue-tringle/explore-delhi/qutub-minar.jpg"],
      desc: "Built in the 12th century as a victory tower, the 73-metre-high minaret is crafted from red sandstone and marble, featuring intricate carvings and inscriptions from the Quran. The capital’s most towering monument looms over you as you stroll through the Qutub complex, which includes the Quwwat-ul-Islam Mosque, the Tomb of Imam Zamin, Major Smith’s Cupola, Sanderson’s Sundial and the Alai Darwaza. The most interesting legend here is related to the six-tonne, seven-metre-tall Iron Pillar. While it continues to capture the imagination of scientists, owing to its mysterious resistance to rust, there’s a popular belief that good fortune awaits you can completely wrap your hands around the pillar with your back touching it.",
      distance: "10.5 km",
      hours: "7:00 am to 5:00 pm",
      bestTime: "Mornings",
      duration: "1 - 1.5 hours",
      entry: "INR 50 (Indians) INR 600 (foreign tourists)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 8,
      title: "Lotus Temple",
      images: ["/images/blue-tringle/explore-delhi/lotus-temple.jpg"],
      desc: "A marvellous symbol of unity and peace, the Lotus Temple - Baháʼí House of Worship - is distinguished by its exterior made of 27 free-standing marble ‘petals’ arranged in clusters of three to form nine sides, a number that is considered auspicious in the Baha’i faith. Explore the lush, idyllic temple complex that encompasses nine water pools lined with each petal, which glimmer in daylight. You can also meditate inside the prayer hall.",
      distance: "10.5 km",
      hours: "9:00 am to 5:30 pm (Closed on Mondays)",
      bestTime: "Weekdays",
      duration: "1 - 2 hours",
      entry: null,
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 9,
      title: "India Gate",
      images: ["/images/blue-tringle/explore-delhi/india-gate.jpg"],
      desc: "Located on Rajpath, the awe-inspiring war memorial, a 42-metre-high archway of sandstone, rises majestically against the backdrop of Rashtrapati Bhawan. Enjoy ice cream from local vendors or pack a picnic to soak in the lively atmosphere. To experience the monument in a unique way, sign up for a session with Delhi City Segway Tour company from 5 pm to 9 pm, starting at INR 2500.",
      distance: "3 km",
      hours: "All day",
      bestTime: "Evenings",
      duration: "1 hour",
      entry: null,
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 10,
      title: "Safdarjung Tomb",
      images: ["/images/blue-tringle/explore-delhi/tomb.jpg"],
      desc: "Considered to be the last monumental tomb garden of the time, this magnificent marble and sandstone structure marked the end of an era of Mughal art and architecture that began with the Taj Mahal in Agra. It was built by the son of Safdarjung, the Wazir ul-Hindustan (Prime Minister) of the Indian subcontinent during the rule of Ahmad Shah Bahadur. Located in Jor Bagh, it’s one of the lesser-frequented yet grand monuments in the capital. Besides exploring the mausoleum, you can stroll around the lush gardens and perimetre wall.",
      distance: "7 km",
      hours: "7:00 am to 5:00 pm",
      bestTime: "Mornings",
      duration: "1 - 2 hours",
      entry: "INR 25 (Indians) INR 300 (foreign nationals)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 11,
      title: "Humayun's Tomb",
      images: ["/images/blue-tringle/explore-delhi/humayu-tomb.jpg"],
      desc: "Mughal architecture meets tranquil greenery in the first Persian-style garden-tomb in the Indian subcontinent. Commissioned by Humayun’s wife Hamida Banu Begum, this rare memorial built by a woman for her husband, was later known as ‘Dormitory of the Mughals’, housing a 100 tombs inside a single complex. Wander along the pathways of this remarkable UNESCO World Heritage Site to marvel at its sublime proportions, seemingly floating over symmetrical gardens.",
      distance: "7 km",
      hours: "6:00 am to 6:00 pm",
      bestTime: "Early mornings or late afternoons",
      duration: "1 - 2 hours",
      entry: "INR 50 (Indians) INR 500 (foreign nationals)",
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 12,
      title: "Connaught Place",
      images: ["/images/blue-tringle/explore-delhi/connaught-place.jpg"],
      desc: "The unofficial social epicentre of Delhi, affectionately called CP, this British built commercial and retail hub is a great place to window shop, people watch, visit art galleries and stroll the gargantuan underground Palika Bazaar. A key financial and business centre, the area offers several delights, from antique cinemas and toy shops to leading contemporary art galleries.",
      distance: "4 km",
      hours: "10:00 am to 9:00 pm",
      bestTime: "Evenings",
      duration: "2 hours",
      entry: null,
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 13,
      title: "Chandni Chowk",
      images: ["/images/blue-tringle/explore-delhi/chadni-chauk.jpg"],
      desc: "Delhi’s oldest and biggest market epitomises the capital’s lively, diverse culture. Designed as a half-moon-shaped square adorned with trees, canals and pools for 17th century royal Mughal processions, it’s now the epicentre of Delhi’s irresistible food scene, serving iconic paranthas, bedmi puris, samosas, kebabs and jalebis along with textiles, antiques and everything in between.",
      distance: "8 km",
      hours: "10:00 am to 8:00 pm",
      bestTime: "Late mornings to early evenings",
      duration: "2 - 3 hours",
      entry: null,
      contact: "For assistance with transportation and tour guide services, please reach out to the hotel concierge."
    },
    {
      id: 14,
      title: "Dilli Haat",
      images: ["/images/blue-tringle/explore-delhi/dilli-hat.jpg"],
      desc: "Designed to resemble a traditional village market (haat), this cultural and entertainment hub features artisan stalls on a rotating basis, offering a staggering variety of handlooms, jewellery, accessories, decor, toys and small goods. Stay back after a shopping spree to enjoy cultural performances in the evening.",
      distance: "6 km",
      hours: "10:30 am to 10:00 pm",
      bestTime: "Evenings",
      duration: "2-3 hours",
      entry: "INR 30 (adults) INR 10 (children)",
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

          <div className={styles.originalIntroText}>
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
              <ImageCarousel 
                images={sliderData[currentSlideIndex].images} 
                alt={sliderData[currentSlideIndex].title} 
              />
            </div>

            <div className={styles.sliderRight}>
              <h3 className={styles.sliderTitle}>{sliderData[currentSlideIndex].title}</h3>
              <p className={styles.sliderDesc}>{sliderData[currentSlideIndex].desc}</p>

              <div className={styles.sliderDetails}>
                {sliderData[currentSlideIndex].distance && <div className={styles.sliderDetailsRow}>Distance: {sliderData[currentSlideIndex].distance}</div>}
                {sliderData[currentSlideIndex].hours && <div className={styles.sliderDetailsRow}>Opening Hours: {sliderData[currentSlideIndex].hours}</div>}
                {sliderData[currentSlideIndex].bestTime && <div className={styles.sliderDetailsRow}>Ideal time to visit: {sliderData[currentSlideIndex].bestTime}</div>}
                {sliderData[currentSlideIndex].duration && <div className={styles.sliderDetailsRow}>Ideal duration of visit: {sliderData[currentSlideIndex].duration}</div>}
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
      {/* <UserStories stories={stories} title="User Stories" /> */}

      {/* SPECIAL OFFERS SECTION */}
      <section className={`container ${styles.offersSection}`}>
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
      </section>

      <div className="text-center mb-4">
            <h2 className="sectionTitle_2">Itenaries</h2>

            <p style={{ maxWidth: '850px', margin: '15px auto 0', fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>
              Discover the captivating heritage and contemporary charm of the capital through immersive storytelling. Blending structure with flexibility, our itineraries are an expertly curated blend of must-visit landmarks and offbeat things to do in Delhi.
            </p>
          </div>


          <div className="text-center mb-4">
            <h2 className="sectionTitle_4 mb-4">Half Day Tours</h2>
            <h3 className="sectionTitle_3">Capital Connect</h3>

            <p style={{ maxWidth: '850px', margin: '15px auto 0', fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>
             Designed for a breezy introduction to the monuments and markets that define the capital’s cultural and political landscape, this itinerary covers some must-see attractions in Delhi along with lesser-known spots.
            </p>
            <p>Timings: 10:00 am to 3:00 pm</p>
            <p>Suitable for All age groups</p>
            <p>Best time to visit Throughout the year</p>

            <h3 className="sectionTitle_3">Highlights</h3>
            <p  style={{ maxWidth: '850px', margin: '15px auto 0', fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>Travel back in time, right in the midst of Connaught Place - the busy commercial heart of Delhi - with a pit-stop at Agrasen Ki Baoli. The 14th century step well that was built when the area was a scrubland populated by kikar trees and jackals, is the best-preserved of ten baolis in Delhi.</p>
          </div>


      {/* INSTAGRAM SECTION */}
      {/* <section className={styles.instaSection}>
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
      </section> */}
    </main>
  );
};

export default ExploreDelhi;
