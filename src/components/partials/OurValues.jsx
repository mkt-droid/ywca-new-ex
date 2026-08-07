import React from 'react';
import Link from 'next/link';
import styles from './OurValues.module.css';

export default function OurValues({ values = [], title = "Our Values", className = "mt-5 pt-4" }) {
  if (!values || values.length === 0) return null;

  return (
    <div className={className}>
      {title && (
        <h2 className="sectionTitle_2 text-center d-block" style={{ color: '#a212b5', marginBottom: '20px' }}>
          {title}
        </h2>
      )}
      <div className="row g-4 justify-content-center mt-3">
        {values.map((value, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className={`bi ${value.icon}`}></i>
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueText}>{value.text}</p>
              {value.link && value.buttonText && (
                <div className="text-center mt-3" style={{ marginTop: 'auto' }}>
                  <Link href={value.link} className={styles.primaryBtn}>{value.buttonText}</Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
