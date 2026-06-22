'use client'

import { useState, useRef } from "react";
import styles from "@/styles/Highlights.module.css";
import Link from "next/link";

const PAGES = [

  // ── Slide 1 ──
  [
    {
      src: "/images/focus/slide-1/Blue-Triangle-Family-Hostel.jpg",
      caption: "Blue Triangle Family Hostel",
      link:'/blue-triangle'
    },
    {
      src: "/images/focus/slide-1/Community-Development-Program.jpg",
      caption: "Community Development Program",
      link:''
    },
    {
      src: "/images/focus/slide-1/Day-care.jpg",
      caption: "Day Care",
       link:''
    },
    {
      src: "/images/focus/slide-1/Education-Institutes.jpg",
      caption: "Education Institutes",
       link:''
    },
    {
      src: "/images/focus/slide-1/Fund-Raising-and-Publicity.jpg",
      caption: "Fund Raising and Publicity",
       link:''
    },
  ],

  // ── Slide 2 ──
  [
    {
      
       src: "/images/focus/slide-2/Public-Affairs-and-Social-Issue.jpg",
      caption: "Public Affairs and Social Issues",
       link:''
    },
    {
          src: "/images/focus/slide-2/Membership-Programs.jpg",
      caption: "Membership and Programs",
       link:''
    },
     {
        src: "/images/focus/slide-2/Religious.jpg",
  
      caption: "Religious Education Committee",
       link:''
    },
    {
      src: "/images/focus/slide-2/Working-women-hostel.jpg",
      caption: "Working Women Hostels",
       link:''
    },
   
    {
      src: "/images/focus/slide-2/Shelter-Homes.jpg",
      caption: "Shelter Homes",
       link:''
    },
    {
      src: "/images/focus/slide-2/Youth.jpg",
      caption: "Youth",
       link:''
    },
  ],

];

const Highlights = () => {

  const [page, setPage] = useState(0);

  const [direction, setDirection] = useState("next");

  const [animating, setAnimating] = useState(false);

  const [displayPage, setDisplayPage] = useState(0);

  const timerRef = useRef(null);

  const goTo = (newPage, dir) => {

    if (animating || newPage === page) return;

    setDirection(dir);

    setAnimating(true);

    setPage(newPage);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {

      setDisplayPage(newPage);

      setAnimating(false);

    }, 420);

  };

  // const goNext = () => {

  //   if (page < PAGES.length - 1) {
  //     goTo(page + 1, "next");
  //   }

  // };

  // const goPrev = () => {

  //   if (page > 0) {
  //     goTo(page - 1, "prev");
  //   }

  // };

  const goNext = () => {
  const nextPage = (page + 1) % PAGES.length;
  goTo(nextPage, "next");
};

const goPrev = () => {
  const prevPage = (page - 1 + PAGES.length) % PAGES.length;
  goTo(prevPage, "prev");
};

  const current = PAGES[displayPage] || [];

  const mainImg = current[0];

  // ── Grid images logic ──
  const gridImgs =
    displayPage === 1
      ? current.slice(2)
      : current.slice(1);

  return (

    <div className={styles.wrapper}>

      {/* Left Arrow */}
      <button
  className={`${styles.arrow} ${styles.arrowLeft}`}
  onClick={goPrev}
  aria-label="Previous"
>
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* Sliding content */}
      <div
        className={[
          styles.row,
          animating
            ? direction === "next"
              ? styles.exitLeft
              : styles.exitRight
            : styles.enterVisible,
        ].join(" ")}
      >

        {/* LEFT SIDE */}
        <div className="col-lg-5 pdr-15">

          {displayPage === 1 ? (

            // ── Second slide: 2 stacked images ──
            <div className="d-flex flex-column gp-11 h-100">

              <div className="hl-item1" style={{height:245}}>
                   <Link href={current[0]?.link}>
                <div
                  className="hl-bg ph-h3"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={current[0]?.src}
                    alt={current[0]?.caption}
                    className="bw-hover"
                  />
                </div>

                <div className="hl-cap-2">
                  {current[0]?.caption}
                </div>
</Link>
              </div>

              <div className="hl-item1" style={{height:245}}>
 <Link href={current[1]?.link}>
                <div
                  className="hl-bg ph-h3"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={current[1]?.src}
                    alt={current[1]?.caption}
                    className="bw-hover"
                  />
                </div>

                <div className="hl-cap-2">
                  {current[1]?.caption}
                </div>
</Link>
              </div>

            </div>

          ) : (

            // ── First slide normal ──
            mainImg && (

              <div className="hl-item1">
                 <Link href={mainImg.link}>
                <div
                  className="hl-bg ph-h3"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={mainImg.src}
                    alt={mainImg.caption}
                    className="bw-hover"
                  />
                </div>

                <div className="hl-cap-2">
                  {mainImg.caption}
                </div>
</Link>
              </div>

            )

          )}

        </div>

        {/* RIGHT SIDE GRID */}
        <div className="col-lg-7">

          <div className="hl-grid">

            {gridImgs.map((img, i) => (

              <div className="hl-item" key={i}>
 <Link href={img.link}>
                <div
                  className={`hl-bg ph-h${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="bw-hover"
                  />
                </div>

                <div className="hl-cap-2">
                  {img.caption}
                </div>
</Link>
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Right Arrow */}
    <button
  className={`${styles.arrow} ${styles.arrowRight}`}
  onClick={goNext}
  aria-label="Next"
>
        <i className="bi bi-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className={styles.dots}>

        {PAGES.map((_, i) => (

          <button
            key={i}
            className={`${styles.dot} ${
              i === page ? styles.dotActive : ""
            }`}
            onClick={() =>
              goTo(i, i > page ? "next" : "prev")
            }
            aria-label={`Page ${i + 1}`}
          />

        ))}

      </div>

    </div>
  );
};

export default Highlights;