"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import InnerPageBanner from '@/components/partials/InnerPageBanner';

export default function InsightsPublicationsPage() {
  const [activeTab, setActiveTab] = useState('Annual Reports');

  const tabs = [
    { name: 'Annual Reports', icon: 'bi-file-earmark-bar-graph' },
    { name: 'Publications', icon: 'bi-journal-text' },
    { name: 'Adamya Nari Samman Year Book', icon: 'bi-book' },
    { name: 'Media Presence', icon: 'bi-camera-video' },
    { name: 'Financials', icon: 'bi-bank' }
  ];

  const annualReports = [
    { title: 'ANNUAL REPORT 2024-25', file: 'ANNUAL REPORT - 2024-25.pdf', thumbnail: '/images/insights-publication/Thumb-1.jpg' },
    { title: 'ANNUAL REPORT 2023-24', file: 'ANNUAL REPORT_2023-24.pdf', thumbnail: '/images/insights-publication/Thumb-2.jpg' },
    { title: 'ANNUAL REPORT 2022-23', file: 'ANNUAL REPORT -2022-2023.pdf', thumbnail: '/images/insights-publication/Thumb-3.jpg' },
    { title: 'ANNUAL REPORT 2017-18', file: 'ANNUAL REPORT- 2017 -2018.pdf', thumbnail: '/images/insights-publication/Thumb-4.jpg' },
    { title: 'ANNUAL REPORT 2016-17', file: 'ANNUAL REPORT- 2016-2017.pdf', thumbnail: '/images/insights-publication/Thumb-5.jpg' }
  ];

  return (
    <main>
      <InnerPageBanner
        title={<>INSIGHTS &<br />PUBLICATIONS</>}
        bgImage="/images/01-Banner-insights-pub.jpg"
        contentMarginTop="25vh"
        overlayColor="linear-gradient(to right, rgba(146, 45, 157, 0.85), rgba(146, 45, 157, 0.4))"
        defaultGrayscale={false}
      />

      <div className={styles.pageContentWrapper}>
        <section className={styles.sectionPadding}>
          <div className="container">
            <div className={styles.tabsContainer}>
              <div className="row">
                {/* Tabs Sidebar */}
                <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
                  <div className={styles.tabsList}>
                    {tabs.map((tab) => (
                      <button
                        key={tab.name}
                        className={`${styles.tabButton} ${activeTab === tab.name ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab(tab.name)}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className={`bi ${tab.icon}`}></i>
                          {tab.name}
                        </span>
                        <i className="bi bi-chevron-right" style={{ fontSize: '0.85rem', opacity: 0.7 }}></i>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tabs Content */}
                <div className="col-md-8 col-lg-9">
                  <div className={styles.tabContentPanel}>
                    <h3 className={styles.tabTitle}>{activeTab}</h3>

                    {activeTab === 'Annual Reports' && (
                      <div className="row mt-4">
                        {annualReports.map((report, idx) => (
                          <div className="col-md-6 col-lg-4 mb-4" key={idx}>
                            <a href={`/pdf-forms/insights-publication/${report.file}`} target="_blank" rel="noopener noreferrer" className={styles.reportCardLink}>
                              <div className={styles.reportCard}>
                                <div className={styles.thumbnailWrapper}>
                                  <img src={report.thumbnail} alt={report.title} className={styles.thumbnailImage} />
                                  <div className={styles.pdfIconBadge}>
                                    <i className="bi bi-file-earmark-pdf-fill"></i>
                                  </div>
                                </div>
                                <div className={styles.reportInfo}>
                                  <h4 className={styles.reportTitle}>{report.title}</h4>
                                  <span className={styles.viewBtn}>View More <i className="bi bi-arrow-right"></i></span>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab !== 'Annual Reports' && (
                      <div className={styles.placeholderContent}>
                        <p>Content for {activeTab} will be updated soon.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
