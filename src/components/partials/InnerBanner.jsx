'use client'
import Link from "next/link";
import styles from "@/styles/InnerBanner.module.css";
import { useState, useEffect, useRef, useCallback } from "react";

const InnerBanner = ({
  title = "YWCA",
  subTitle = "Building - 2026",
  images = [
    "/images/History-banner-img-1.jpg",
  ],
  breadcrumb = [],
  bg = "#d4aa6a",
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      setCurrentIndex((index + images.length) % images.length);
      setProgress(0);
    },
    [images.length]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Auto-slide timer
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, interval);
    return () => clearTimeout(timerRef.current);
  }, [currentIndex, paused, goNext, interval]);

  // Progress bar animation
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = 100 / (interval / 50);
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressRef.current);
          return 100;
        }
        return prev + step;
      });
    }, 50);
    return () => clearInterval(progressRef.current);
  }, [currentIndex, paused, interval]);

  return (
    <div className={styles.innerBanner} style={{ backgroundColor: bg }}>
      <div className="container">
        <div className={styles.innerBannerWrapper}>

          <div className={styles.innerBannerLeft}>
            <h1>
              {title} <br /> {subTitle}
            </h1>
            <div className={styles.divider}></div>
            <p className={styles.breadcrumb}>
              {breadcrumb.map((item, index) => (
                <span key={index}>
                  <Link href={item.link}>{item.label}</Link>
                  {index !== breadcrumb.length - 1 && (
                    <span>
                      {" "}<i className="bi bi-chevron-right"></i>{" "}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* ── Fade Carousel ── */}
          <div className={styles.innerBannerRight}>
            <div
              className={styles.carouselWrapper}
              // onMouseEnter={() => setPaused(true)}
              // onMouseLeave={() => setPaused(false)}
            >
              {/* Slides */}
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`YWCA Building ${index + 1}`}
                  className={`${styles.carouselImage} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                />
              ))}

              {/* Prev / Next Arrows */}
              {
                images && images.length > 1 && <>
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
              </button></>
              }
             {
                images && images.length > 1 && <>

              {/* Dot Indicators */}
              <div className={styles.carouselDots}>
                {images.map((_, index) => (
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
}

              {/* Progress Bar */}
           {/* { images && images.length > 1 && <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${progress}%`,
                    transition: paused ? "none" : "width 0.05s linear",
                  }}
                />
              </div>} */}

           
                {/* {paused && (
                <div className={styles.pauseBadge}>
                  <i className="bi bi-pause-fill"></i>
                </div>
              )} */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InnerBanner;