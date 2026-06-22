'use client'
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/HeroBanner.module.css";
import LogoLoader from "./LogoLoader";

// ─── Slide Data ──────────────────────────────────────────────────
// images already have the golden panel on the right side built-in
const SLIDES = [
  {
    id: 1,
    image: "/images/Banner-1.jpg",        // 👈 apna path
    titleLine1: "STRENGTHENING",
    titleLine2: "COMMUNITIES",
    subtitle: "WeMpower – Leaving No One Behind",
    btnText: "Join the YWCA Movement",
    btnLink: "#",
  },
  {
    id: 2,
    image: "/images/Banner-2.jpg",        // 👈 apna path
    titleLine1: "BUILDING",
    titleLine2: "YOUTH",
    subtitle: "WeMpower – Leaving No One Behind",
    btnText: "Join the YWCA Movement",
    btnLink: "#",
  },
  {
    id: 3,
    image: "/images/Banner-3.jpg",        // 👈 apna path
    titleLine1: "NURTURING",
    titleLine2: "NATURE",
    subtitle: "WeMpower – Leaving No One Behind",
    btnText: "Join the YWCA Movement",
    btnLink: "#",
  }
  
];

const AUTO_PLAY = 5000;

const HeroBanner = () => {
  const [current, setCurrent]     = useState(0);
  const [prev, setPrev]           = useState(null);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress]   = useState(0);
  const [paused, setPaused]       = useState(false);

  const timerRef  = useRef(null);
  const rafRef    = useRef(null);
  const startTime = useRef(null);

  const goTo = (index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setPrev(current);
    setCurrent(index);
    setProgress(0);
    resetTimer();
    setTimeout(() => { setPrev(null); setAnimating(false); }, 900);
  };

  const goNext = () => goTo((current + 1) % SLIDES.length);
  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);

  const tickProgress = () => {
    if (!startTime.current) startTime.current = performance.now();
    const pct = Math.min(((performance.now() - startTime.current) / AUTO_PLAY) * 100, 100);
    setProgress(pct);
    if (pct < 100) rafRef.current = requestAnimationFrame(tickProgress);
  };

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    cancelAnimationFrame(rafRef.current);
    startTime.current = null;
    setProgress(0);
  };

  useEffect(() => {
    if (paused) { resetTimer(); return; }
    startTime.current = performance.now();
    rafRef.current = requestAnimationFrame(tickProgress);
    timerRef.current = setTimeout(goNext, AUTO_PLAY);
    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [current, paused]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, animating]);

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="YWCA Hero Banner"
    >
      <LogoLoader/>
      {/* Progress bar */}
      <div className={styles.progress}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      {/* Slides */}
      {SLIDES.map((slide, i) => {
        const isActive  = i === current;
        const isExiting = i === prev;

        return (
          <div
            key={slide.id}
            className={[
              styles.slide,
              isActive  ? styles.slideActive  : "",
              isExiting ? styles.slideExiting : "",
            ].join(" ")}
            aria-hidden={!isActive}
          >
            {/* Full image as background — zoom punch on entry */}
            <div
              className={[
                styles.bg,
                isActive  ? styles.bgActive  : "",
                isExiting ? styles.bgExiting : "",
              ].join(" ")}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Text overlay — positioned over the right golden panel */}
            <div className={[
              styles.content,
              isActive ? styles.contentVisible : "",
            ].join(" ")}>

              <h1 className={styles.title}>
                <span className={`${styles.line1}`}>{slide.titleLine1}</span>
                <span className={`${styles.line2}`}>{slide.titleLine2}</span>
              </h1>

              <p className={styles.subtitle}>{slide.subtitle}</p>

              <a href={slide.btnLink} className={styles.btn}>
                {slide.btnText}
              </a>

            </div>
          </div>
        );
      })}

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`}  onClick={goPrev} aria-label="Previous">
       <i className="bi bi-chevron-left"></i>
        </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={goNext} aria-label="Next">
       <i className="bi bi-chevron-right"></i>
        </button>

      {/* Dots */}
      {/* <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default HeroBanner;