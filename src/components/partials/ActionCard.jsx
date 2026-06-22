import React from 'react';
import Link from 'next/link';
import styles from '@/styles/ActionCard.module.css';

export default function ActionCard({ title, text, image, link = "#" }) {
  return (
    <Link href={link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
      <div className={styles.cardItem}>
        <div className={styles.cardImageWrapper}>
          <img src={image} alt={title} className={styles.cardImage} />
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>{title}</h4>
          <p className={styles.cardText}>{text}</p>
          <div className={styles.cardFooter}>
            <span className={styles.viewMoreBtn}>
              View More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
