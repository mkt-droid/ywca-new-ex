"use client";

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function MembershipDepartmentPage() {
  return (
    <main>
      <SideNavBanner
        height="380px"
        title={<>MEMBERSHIP AND<br />PROGRAM DEPARTMENT</>}
        bgImage="/images/map/01-Banner-MAP.jpg"
        activePath="/membership-and-programs"
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

          </div>
        </section>



        <section className={styles.sectionPadding} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="container">

            {/* Programs Section */}
            <div className=" text-center">
              <h3 className='sectionTitle mx-600'>Programs conducted by the Membership Department in the past</h3>

              <div className="row justify-content-center mt-4">
                <div className="col-md-6 col-lg-5 mb-4">
                  <Link href="/membership-and-programs/members-picnic" className={styles.programLink}>
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
                  <Link href="/membership-and-programs/international-womens-day" className={styles.programLink}>
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
                  <Link href="/membership-and-programs/mothers-day" className={styles.programLink}>
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
                  <Link href="/membership-and-programs/world-environment-day" className={styles.programLink}>
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
        {/* Learning Programs Section (Adapted from Education Institute) */}
        <section className={styles.learningSection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 pr-lg-5">
                <h3 className={`${styles.formGroupTitle} mt-0`}>New Membership Forms</h3>
                <div className={styles.pdfButtonsContainer}>
                  <a href="/pdf-forms/Form-Associate-Member.pdf" target="_blank" rel="noopener noreferrer" className={styles.pdfButton}>
                    <i className={`bi bi-file-earmark-pdf-fill ${styles.pdfIcon}`}></i> <span>Associate Member</span>
                  </a>
                  <a href="/pdf-forms/Electoral%20Members.pdf" target="_blank" rel="noopener noreferrer" className={styles.pdfButton}>
                    <i className={`bi bi-file-earmark-pdf-fill ${styles.pdfIcon}`}></i> <span>Electoral Members</span>
                  </a>
                </div>

                <h3 className={styles.formGroupTitle}>Renewal of Membership</h3>
                <div className={styles.pdfButtonsContainer}>
                  <a href="/pdf-forms/Associate%20Renewal.pdf" target="_blank" rel="noopener noreferrer" className={styles.pdfButton}>
                    <i className={`bi bi-file-earmark-pdf-fill ${styles.pdfIcon}`}></i> <span>Associate Renewal</span>
                  </a>
                  <a href="/pdf-forms/Electoral-Renewal.pdf" target="_blank" rel="noopener noreferrer" className={styles.pdfButton}>
                    <i className={`bi bi-file-earmark-pdf-fill ${styles.pdfIcon}`}></i> <span>Electoral Renewal</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-center position-relative">
                <img src="/images/map/Thumb-img.jpg" alt="Learning Programs" className={styles.learningImage} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
