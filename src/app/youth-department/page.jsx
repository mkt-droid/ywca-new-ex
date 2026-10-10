"use client";

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function YouthDepartmentPage() {


  return (
    <main>
      <SideNavBanner
        height="400px"
        title={<>YOUTH<br />DEPARTMENT</>}
        bgImage="/images/yuva-department/01-Banner-Youth.jpg"
        activePath="/youth-department"
        contentMarginTop="25vh"
      />

      <div className="pageContentWrapper">
        <section className={styles.sectionPadding}>
          <div className="container">

            <h1 className="sectionTitle_1 text-center mx-800">Be the change you want to see</h1>

            <div className={styles.overviewText}>
              <p>The Youth Department of the YWCA of Delhi encourages young people to become active participants in social, political, and economic change. Through community development and outreach initiatives, the department collaborates with UDP, RDP, WTI, and neighbourhood schools to deepen awareness of social realities and promote the vision of “Justice Beyond Borders.”</p>
              <p>Through events, workshops, and competitions, the department nurtures leadership, teamwork, creativity, and healthy competition among children and young people. These initiatives provide opportunities for learning, community engagement, and holistic development while fostering a strong sense of social responsibility.</p>
            </div>

            {/* Programs Section */}
            <div className="mt-5 text-center">
              <h2 className='sectionTitle_2 text-center mx-800'>Programs Conducted in Past</h2>

              <div className="row justify-content-center mt-4">
                <div className="col-md-6 col-lg-4 mb-4">
                  <Link href="/youth-department/inter-school-debate" className={styles.programLink}>
                    <div className={styles.programCard}>
                      <img src="/images/yuva-department/01-Gallery-Inter-School Debate/1.jpg" alt="Inter-School Debate Competition 2026" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                      <div className={styles.cardIconWrapper}>
                        <i className="bi bi-chat-quote-fill"></i>
                      </div>
                      <h3 className={styles.cardTitle}>Inter-School Debate Competition 2026</h3>
                    </div>
                  </Link>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <Link href="/youth-department/thrive-music-festival" className={styles.programLink}>
                    <div className={styles.programCard}>
                      <img src="/images/yuva-department/02-Gallery-Thrive Music Festival/1.jpg" alt="Thrive Music Festival 2026" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                      <div className={styles.cardIconWrapper}>
                        <i className="bi bi-music-note-beamed"></i>
                      </div>
                      <h3 className={styles.cardTitle}>Thrive Music Festival 2026</h3>
                    </div>
                  </Link>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <Link href="/youth-department/new-program" className={styles.programLink}>
                    <div className={styles.programCard}>
                      <img src="/images/yuva-department/03-Gallery/1.jpeg" alt="Round Table on Technology-Facilitated Gender Violence" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                      <div className={styles.cardIconWrapper}>
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <h3 className={styles.cardTitle}>Round Table on Technology-Facilitated Gender Violence</h3>
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
