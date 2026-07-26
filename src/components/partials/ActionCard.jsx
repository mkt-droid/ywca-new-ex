import React from 'react';
import Link from 'next/link';
import styles from '@/styles/ActionCard.module.css';

export default function ActionCard({ title, text, image, link = "#", onClick }) {
  const content = (
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
  );

  if (onClick) {
    return (
      <div onClick={onClick} style={{ cursor: 'pointer', display: 'block', height: '100%' }}>
        {content}
      </div>
    );
  }

  return (
    <Link href={link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
      {content}
    </Link>
  );
}
