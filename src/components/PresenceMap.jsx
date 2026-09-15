"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './PresenceMap.module.css';

const LOCATIONS = [
  {
    id: 1,
    title: "Women Training Institute, Ashoka Road",
    name: "Women Training Institute",
    bldg: "Women Training Institute",
    address: "YWCA OF DELHI, 1, ASHOKA ROAD, NEW DELHI 110001",
    tel: "+91-11-23362779, +91-11-23361414",
    email: "wti@ywcaofdelhi.org",
    image: "/images/locations/Womens-Training-Institute,-Ashoka-Road.jpg",
    top: "30%", left: "55%"
  },
  {
    id: 2,
    title: "Shelter Home for Women, Jahangirpuri",
    name: "Shelter Home for Women",
    bldg: "Manikika Chhaya Shelter Home",
    address: "F-Block, Community Centre, Jahangirpuri, Delhi 110033",
    tel: "011-27632731",
    email: "info@ywcaofdelhi.org",
    image: "/images/locations/Shelter Home for Women, Jahangirpuri.jpg",
    top: "15%", left: "45%"
  },
  {
    id: 3,
    title: "Community Resource Center, Mangolpuri",
    name: "Community Resource Center",
    bldg: "Mangolpuri Center",
    address: "Mangolpuri, New Delhi",
    tel: "9810620240 / 9312065839",
    email: "cdp@ywcaofdelhi.org",
    image: "/images/Map-Placeholder.jpg",
    top: "35%", left: "25%"
  },
  {
    id: 4,
    title: "Head Office, Ashoka Road",
    name: "Young Women Christian Association of Delhi (YWCA)",
    bldg: "General Secretary's Office",
    address: "YWCA OF DELHI, 1, ASHOKA ROAD, NEW DELHI 110001",
    tel: "+91-11-23362779",
    email: "g_s@ywcaofdelhi.org",
    image: "/images/Map-Placeholder-2.jpg",
    top: "45%", left: "57%" // Central blue pin
  },
  {
    id: 5,
    title: "Blue Triangle Family Hostel, Ashoka Road",
    name: "Blue Triangle Family Hostel",
    bldg: "Blue Triangle Family Hostel (BTFH)",
    address: "YWCA OF DELHI, 1, ASHOKA ROAD, NEW DELHI 110001",
    tel: "+91-11-23362779, +91-11-23361414",
    email: "btfhashoka@ywcaofdelhi.org",
    image: "/images/locations/1-BTFH.jpg",
    top: "50%", left: "59%"
  },
  {
    id: 6,
    title: "Vocational Training Institute, Dwarka",
    name: "Vocational Training Institute",
    bldg: "Education Institute, Dwarka",
    address: "Plot No. 6-7, Sector - 10, Dwarka, New Delhi 110075",
    tel: "+91-11-25075600, +91-11-25075602",
    email: "vti@ywcaofdelhi.org",
    image: "/images/locations/Vocational Training Institute, Dwarka.jpg",
    top: "65%", left: "20%"
  },
  {
    id: 7,
    title: "Shelter Home for Women, Sarai Rohilla",
    name: "Shelter Home for Women",
    bldg: "Manikika Chhaya Shelter Home",
    address: "MCD Community Centre, Daya Basti, Pratap Bagh, Inderlok, Delhi 110035",
    tel: "+91-9810620240",
    email: "info@ywcaofdelhi.org",
    image: "/images/locations/Shelter Home for Women, Sarai Rohilla.jpg",
    top: "40%", left: "48%"
  },
  {
    id: 8,
    title: "Community Resource Center, Najafgarh",
    name: "Community Resource Center",
    bldg: "Najafgarh Center",
    address: "Najafgarh, New Delhi",
    tel: "+91-11-XXXXXXX",
    email: "info@ywcaofdelhi.org",
    image: "/images/locations/Community Resource Center, Najafgarh.jpg",
    top: "60%", left: "15%"
  },
  {
    id: 9,
    title: "Community Resource Center, Govindpuri",
    name: "Community Resource Center",
    bldg: "Govindpuri Center",
    address: "Govindpuri, New Delhi",
    tel: "+91-11-XXXXXXX",
    email: "info@ywcaofdelhi.org",
    image: "/images/Map-Placeholder.jpg",
    top: "75%", left: "70%"
  },
  {
    id: 10,
    title: "Community resource center Khadar",
    name: "Community resource center Khadar",
    bldg: "Resource Center Khadar",
    address: "Khadar, New Delhi",
    tel: "+91-11-XXXXXXX",
    email: "info@ywcaofdelhi.org",
    image: "/images/Map-Placeholder.jpg",
    top: "85%", left: "60%"
  },
  {
    id: 11,
    title: "Centenary Working Women's Hostel, Ashoka Road",
    name: "Centenary Working Women's Hostel",
    bldg: "Centenary Working Women's Hostel",
    address: "YWCA OF DELHI, 1, ASHOKA ROAD, NEW DELHI 110001",
    tel: "+91-11-23362779, +91-11-23362470",
    email: "wwhashoka@ywcaofdelhi.org",
    image: "/images/locations/2-Centenary Working Women's Hostel, Ashoka Road.jpg",
    top: "55%", left: "58%"
  },
  {
    id: 12,
    title: "Working Women's hostel, Jasola",
    name: "Working Women's Hostel",
    bldg: "Working Women's Hostel, Jasola",
    address: "PLOT NO. 14, SECTOR - 14, JASOLA, NEW DELHI 110025",
    tel: "011-40195500",
    email: "wwhjasola@ywcaofdelhi.org",
    image: "/images/locations/3-Working Women's hostel, Jasola.jpg",
    top: "72%", left: "80%"
  }
];

export default function PresenceMap() {
  const [activeId, setActiveId] = useState(4); // Default to Head Office
  const [lines, setLines] = useState([]);

  const containerRef = useRef(null);
  const listRefs = useRef([]);
  const dotRefs = useRef([]);

  const activeLocation = LOCATIONS.find(loc => loc.id === activeId);

  // Function to calculate SVG paths connecting list items to map dots
  const drawLines = () => {
    if (!containerRef.current) return;

    // Only draw lines on desktop (when list and map are side by side)
    if (window.innerWidth <= 1100) {
      setLines([]);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const newLines = LOCATIONS.map((loc, index) => {
      const listEl = listRefs.current[index];
      const dotEl = dotRefs.current[index];

      if (!listEl || !dotEl) return null;

      const listRect = listEl.getBoundingClientRect();
      const dotRect = dotEl.getBoundingClientRect();

      // Start point: right middle of the list item text
      const startX = listRect.right - containerRect.left + 15;
      const startY = listRect.top - containerRect.top + (listRect.height / 2);

      // End point: center of the map dot
      const endX = dotRect.left - containerRect.left + (dotRect.width / 2);
      const endY = dotRect.top - containerRect.top + (dotRect.height / 2);

      // Orthogonal step line (Horizontal -> Vertical -> Horizontal)
      // We choose a bend point at 40% of the distance between text and dot
      const bendX = startX + (endX - startX) * 0.4;
      const path = `M ${startX} ${startY} L ${bendX} ${startY} L ${bendX} ${endY} L ${endX} ${endY}`;

      return {
        id: loc.id,
        path
      };
    }).filter(Boolean);

    setLines(newLines);
  };

  useEffect(() => {
    // Initial draw
    // Use a slight timeout to ensure fonts/images are loaded and layout is complete
    const timer = setTimeout(drawLines, 100);

    window.addEventListener('resize', drawLines);
    return () => {
      window.removeEventListener('resize', drawLines);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Our Presence in Delhi</h2>

      <div className={styles.container} ref={containerRef}>

        {/* DYNAMIC SVG OVERLAY FOR LINES */}
        <svg className={styles.svgOverlay} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}>
          {lines.map(line => (
            <path
              key={line.id}
              d={line.path}
              stroke={activeId === line.id ? '#1a1c6a' : '#b0b0b0'}
              strokeWidth={activeId === line.id ? '2' : '1'}
              fill="none"
              style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
            />
          ))}
        </svg>

        {/* LEFT: LIST */}
        <div className={styles.listColumn}>
          {LOCATIONS.map((loc, index) => (
            <div
              key={loc.id}
              ref={el => listRefs.current[index] = el}
              className={`${styles.listItem} ${activeId === loc.id ? styles.listItemSelected : ''}`}
              onMouseEnter={() => setActiveId(loc.id)}
              onClick={() => setActiveId(loc.id)}
            >
              {loc.title}
            </div>
          ))}
        </div>

        {/* MIDDLE: MAP */}
        <div className={styles.mapColumn}>
          {/* We use a map placeholder or the existing map without text if available. 
              Since Map.png has the text on it, using it as a background might show double text.
              I will use a placeholder or Map.png if needed, but styling it carefully. 
              For now, let's use the actual Map.png as an underlay, but the points might overlap. */}
          <div style={{ position: 'relative' }}>
            {/* Note: In a real scenario, this image should be just the map outline without the baked-in text */}
            <img src="/images/India-gate-Map.png" alt="Delhi Map" className={styles.mapImage}
              onError={(e) => { e.target.src = "/images/Map.png" }} />

            <div className={styles.mapPointsContainer}>
              {LOCATIONS.map((loc, index) => (
                <div
                  key={loc.id}
                  ref={el => dotRefs.current[index] = el}
                  className={`${styles.dot} ${activeId === loc.id ? styles.dotSelected : ''}`}
                  style={{ top: loc.top, left: loc.left }}
                  onMouseEnter={() => setActiveId(loc.id)}
                  onClick={() => setActiveId(loc.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: CARD */}
        <div className={styles.cardColumn}>
          <div key={activeId} className={`${styles.infoCard} ${styles.infoCardAnimated}`}>
            <img
              src={activeLocation?.image}
              alt={activeLocation?.title}
              className={styles.cardImage}
              onError={(e) => { e.target.src = "/images/YWCA-Index-2.jpg" }}
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>{activeLocation?.name}</h4>

              <div className={styles.cardDetails}>
                <div className={styles.cardLabel}>Bldg.</div>
                <div className={styles.cardValue}>{activeLocation?.bldg}</div>

                <div className={styles.cardLabel}>Address</div>
                <div className={styles.cardValue}>{activeLocation?.address}</div>

                <div className={styles.cardLabel}>Tel.</div>
                <div className={styles.cardValue}>{activeLocation?.tel}</div>

                <div className={styles.cardLabel}>Email</div>
                <div className={styles.cardValue}>{activeLocation?.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
