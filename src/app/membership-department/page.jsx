"use client";

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function MembershipDepartmentPage() {
  return (
    <main>
      <SideNavBanner
        title={<>MEMBERSHIP AND<br />PROGRAM DEPARTMENT</>}
        bgImage="/images/History-banner-img-1.jpg"
        activePath="/membership-department"
        contentMarginTop="25vh"
      />

      <div className={styles.pageContentWrapper}>
        <section className={styles.sectionPadding}>
          <div className="container">

            <h2 className={styles.overviewTitle}>Membership and Program Department</h2>

            <div className={styles.overviewText}>
              <p>The YWCA of Delhi is a women-only, membership-based organisation that forms part of a global movement. It welcomes women from all walks of life to enroll and become active members of this international network.</p>
              <p>The Membership Department not only maintains accurate records of Electoral, Associate, and Junior members but also plays a vital role in upholding the governance and democratic functioning of the movement. It ensures structured engagement, continuity, and accountability while fostering an inclusive and participatory membership base that reflects the values and mission of the YWCA.</p>
            </div>

            {/* Programs Section */}
            <div className="mt-5 text-center">
              <h3 style={{ color: '#a212b5', fontWeight: '500', marginBottom: '35px', fontSize: '1.5rem' }}>Following are the programs conducted by the Membership Department in the past</h3>

              <div className="row justify-content-center mt-4">
                <div className="col-md-6 col-lg-5 mb-4">
                  <Link href="/membership-department/members-picnic" className={styles.programLink}>
                    <div className={styles.programCard}>
                      <img src="/images/map/01-Picnic.jpg" alt="Members' Picnic" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                      <div className={styles.cardIconWrapper}>
                        <i className="bi bi-tree-fill"></i>
                      </div>
                      <h3 className={styles.cardTitle}>Members’ Picnic – Lodhi Garden</h3>
                      <p className="text-muted">28 February 2026</p>
                    </div>
                  </Link>
                </div>

                <div className="col-md-6 col-lg-5 mb-4">
                  <Link href="/membership-department/international-womens-day" className={styles.programLink}>
                    <div className={styles.programCard}>
                      <img src="/images/map/02-International-Women-Day-Celebration.jpg" alt="International Women's Day Celebration" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                      <div className={styles.cardIconWrapper}>
                        <i className="bi bi-person-hearts"></i>
                      </div>
                      <h3 className={styles.cardTitle}>International Women’s Day Celebration & Adamya Nari Samman</h3>
                      <p className="text-muted">7 March 2026</p>
                    </div>
                  </Link>
                </div>

                <div className="col-md-6 col-lg-5 mb-4">
                  <Link href="/membership-department/mothers-day" className={styles.programLink}>
                    <div className={styles.programCard}>
                      <img src="/images/map/03-World-YCWA-Celebration.jpg" alt="Mother's Day Celebration" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                      <div className={styles.cardIconWrapper}>
                        <i className="bi bi-flower1"></i>
                      </div>
                      <h3 className={styles.cardTitle}>Mother’s Day Celebration 2026</h3>
                      <p className="text-muted">9th May 2026</p>
                    </div>
                  </Link>
                </div>

                <div className="col-md-6 col-lg-5 mb-4">
                  <Link href="/membership-department/world-environment-day" className={styles.programLink}>
                    <div className={styles.programCard}>
                      <img src="/images/map/04-World-Environment-Day-Celebration-2026.jpg" alt="World Environment Day Celebration" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                      <div className={styles.cardIconWrapper}>
                        <i className="bi bi-globe-americas"></i>
                      </div>
                      <h3 className={styles.cardTitle}>World Environment Day Celebration 2026</h3>
                      <p className="text-muted">13th June 2026</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
