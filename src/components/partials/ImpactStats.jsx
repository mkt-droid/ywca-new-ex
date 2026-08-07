"use client";
import React from 'react';
import CountUp from 'react-countup';
import styles from './ImpactStats.module.css';

export default function ImpactStats({ data, animated = false }) {
  return (
    <div className="row g-4 text-center justify-content-center">
      {data.map((stat, idx) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={stat.id || idx}>
          <div className={styles.impactBox} style={{ backgroundColor: stat.color }}>
            <div className={styles.impactIcon}>
              <i className={`bi ${stat.icon}`}></i>
            </div>
            <div className={styles.impactNumber}>
              {animated && stat.number !== undefined ? (
                <>
                  <CountUp 
                    end={stat.number} 
                    duration={2.5} 
                    separator="," 
                    enableScrollSpy={true} 
                    scrollSpyOnce={true} 
                  />
                  {stat.suffix}
                </>
              ) : (
                stat.value || `${stat.number || ''}${stat.suffix || ''}`
              )}
            </div>
            <div className={styles.impactText}>{stat.text || stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
