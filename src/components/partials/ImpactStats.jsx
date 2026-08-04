"use client";
import React from 'react';
import CountUp from 'react-countup';
import styles from './ImpactStats.module.css';

export default function ImpactStats({ data, animated = false }) {
  return (
    <div className="row g-4">
      {data.map((stat, idx) => (
        <div className="col-md-3 col-sm-6" key={stat.id || idx}>
          <div className={styles.impactBox} style={{ borderTop: `4px solid ${stat.color}` }}>
            <div className={styles.impactIcon} style={{ color: stat.color }}>
              <i className={`bi ${stat.icon}`}></i>
            </div>
            <div className={styles.impactNumber} style={{ color: stat.color }}>
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
