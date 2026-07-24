"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function ReligiousEducationCommitteePage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-info-circle', link: '#overview' },
    { title: 'Our Programmes', icon: 'bi-journal', link: '#programs' }
  ];

  return (
    <main>
      <SideNavBanner
        title={<>RELIGIOUS <br />EDUCATION<br /> COMMITTEE</>}
        bgImage="/images/01-Banner-insights-pub.jpg"
        activePath="/religious-education-committee"
        contentMarginTop="25vh"
      />

      <div className={styles.pageContentWrapper}>
        <section className={styles.sectionPadding} id="overview">
          <div className="container">
            <h2 className={styles.overviewTitle}>Religious Education Committee</h2>
            <div className={styles.overviewText}>
              <p>The Religious Education Committee of YWCA of Delhi nurtures the spiritual life of members through prayer, worship, fellowship, and faith-based activities. The Committee organizes regular prayer services, Bible studies, devotional gatherings, retreats, and special observances that provide opportunities for reflection, spiritual growth, and community building. Through these activities, it seeks to strengthen faith, encourage fellowship, and promote Christian values of love, service, and compassion among members and the wider YWCA community.</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <div className="mt-5 text-center">
          <h3 style={{ color: '#a212b5', fontWeight: '600', marginBottom: '35px', fontSize: '1.9rem', maxWidth: '900px', margin: '0 auto 20px' }}>Following are the programs conducted by the Religious Education Committee in the past</h3>

          <div className="row justify-content-center mt-4">
            <div className="col-md-6 col-lg-5 mb-4">
              <Link href="/religious-education-committee/world-day-of-prayer-2026" className={styles.programLink}>
                <div className={styles.programCard}>
                  <img src="/images/yuva-department/01-Gallery-Inter-School Debate/1.jpg" alt="World Day of Prayer 2026" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                  <div className={styles.cardIconWrapper}>
                    <i className="bi bi-calendar-event"></i>
                  </div>
                  <h3 className={styles.cardTitle}>World Day of Prayer 2026</h3>
                  <p className="text-muted mb-0 mt-2" style={{ fontSize: '0.9rem' }}>7 March 2026</p>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-5 mb-4">
              <Link href="/religious-education-committee/lenten-prayer-meeting-2026" className={styles.programLink}>
                <div className={styles.programCard}>
                  <img src="/images/yuva-department/02-Gallery-Thrive Music Festival/1.jpg" alt="Lenten Prayer Meeting 2026" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                  <div className={styles.cardIconWrapper}>
                    <i className="bi bi-book"></i>
                  </div>
                  <h3 className={styles.cardTitle}>Lenten Prayer Meeting 2026</h3>
                  <p className="text-muted mb-0 mt-2" style={{ fontSize: '0.9rem' }}>27 March 2026</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
