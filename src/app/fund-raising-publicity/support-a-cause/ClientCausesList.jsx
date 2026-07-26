"use client";
import React, { useState, useEffect } from 'react';
import ActionCard from '@/components/partials/ActionCard';
import styles from './page.module.css';

export default function ClientCausesList({ causes }) {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCard]);

  return (
    <>
      <div className={styles.cardsGrid}>
        {causes.map((cause, index) => (
          <ActionCard
            key={index}
            title={cause.title}
            text={cause.text}
            image={cause.image}
            onClick={() => setSelectedCard(cause)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className={styles.modalOverlay} onClick={() => setSelectedCard(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setSelectedCard(null)}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className={styles.modalBody}>
              <div className={styles.modalImageWrapper}>
                <img src={selectedCard.image} alt={selectedCard.title} />
              </div>
              <div className={styles.modalTextContent}>
                <h2 className={styles.modalTitle}>{selectedCard.title}</h2>
                <p className={styles.modalDesc}>{selectedCard.fullDesc || selectedCard.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
