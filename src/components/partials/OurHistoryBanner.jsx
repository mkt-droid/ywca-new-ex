'use client'
import Link from "next/link";
import styles from "@/styles/HistoryBanner.module.css";
import { useState, useEffect, useRef, useCallback } from "react";

const OurHistoryBanner = ({
  slides = [
    {
      image: "/images/History-banner-img-1.jpg",
      title: "YWCA",
      subTitle: "Building – 2026",
    },
  ],
  breadcrumb = [],
  bg = "#d4aa6a",
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      const next = (index + slides.length) % slides.length;
      setTextVisible(false);
      setTimeout(() => {
        setDisplayIndex(next);
        setCurrentIndex(next);
        setTextVisible(true);
      }, 500);
    },
    [slides.length]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, interval);
    return () => clearTimeout(timerRef.current);
  }, [currentIndex, paused, goNext, interval]);

  const current = slides[displayIndex];

  return (
    <div className={styles.innerBanner} style={{ backgroundColor: bg }}>
      <div className="container">
        <div className={styles.innerBannerWrapper}>

          <div className={styles.innerBannerLeft}>
            <h1 className={`${styles.slideText} ${textVisible ? styles.slideTextVisible : ""}`}>
              {current.title} <br /> {current.subTitle}
            </h1>
            <div className={styles.divider}></div>
            <p className={styles.breadcrumb}>
              {breadcrumb.map((item, index) => (
                <span key={index}>
                  <Link href={item.link}>{item.label}</Link>
                  {index !== breadcrumb.length - 1 && (
                    <span>{" "}<i className="bi bi-chevron-right"></i>{" "}</span>
                  )}
                </span>
              ))}
            </p>
          </div>

          <div className={styles.innerBannerRight}>
            <div className={styles.carouselWrapper}>

              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.title}
                  className={`${styles.carouselImage} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                />
              ))}

              {slides.length > 1 && (
                <>
                  <button
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={goPrev}
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={goNext}
                    aria-label="Next slide"
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                  <div className={styles.carouselDots}>
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`${styles.dot} ${
                          index === currentIndex ? styles.activeDot : ""
                        }`}
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurHistoryBanner;