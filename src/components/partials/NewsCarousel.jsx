"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './NewsCarousel.module.css';
import pageStyles from '@/app/education-institute/page.module.css';

export default function NewsCarousel({ newsData, linkPrefix = "/news" }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      // scroll by approx one item width
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.navButton} ${styles.leftBtn}`} onClick={scrollLeft} aria-label="Scroll left">
        <i className="bi bi-chevron-left"></i>
      </button>
      
      <div className={styles.scrollTrack} ref={scrollRef}>
        {newsData.map(news => (
          <div className={styles.slide} key={news.id}>
            <div className={pageStyles.newsCard}>
              <img src={news.image} alt="Academic News" className={pageStyles.newsImage} />
              <div className={pageStyles.newsContent}>
                <h3 className={pageStyles.newsTitle} style={{ fontSize: '0.95rem', fontWeight: news.excerpt ? 'bold' : 'normal', margin: 0 }}>{news.title}</h3>
                {news.excerpt && (
                  <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '10px', marginBottom: '10px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{news.excerpt}</p>
                )}
                <Link href={`${linkPrefix}/${news.slug}`} className={pageStyles.newsViewMore}>
                  View more <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.navButton} ${styles.rightBtn}`} onClick={scrollRight} aria-label="Scroll right">
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
