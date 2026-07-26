"use client";

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function YouthDepartmentPage() {


  return (
    <main>
      <SideNavBanner
        title={<>YOUTH<br />DEPARTMENT</>}
        bgImage="/images/yuva-department/01-Banner-Youth.jpg"
        activePath="/youth-department"
        contentMarginTop="25vh"
      />

      <div className={styles.pageContentWrapper}>
        <section className={styles.sectionPadding}>
          <div className="container">

            <h2 className={styles.overviewTitle}>Youth Department</h2>

            <div className={styles.overviewText}>
              <p>The Youth Department of the YWCA of Delhi promotes meaningful and active participation of young people in the organisation’s programmes, enabling them to recognise their role as agents of social, political, and economic change in society. The department works to nurture leadership, awareness, and responsibility among youth, encouraging them to engage with issues that shape their communities and the wider world.</p>
              <p>Through a range of community development and outreach initiatives, the Youth Department collaborates with UDP, RDP, WTI, and neighbourhood schools to deepen understanding of social realities and contribute to the vision of “Justice Beyond Borders.” These engagements provide young people with opportunities to learn, reflect, and actively participate in community-based action.</p>
              <p>The department also organises various events, workshops, and competitions designed to build teamwork, creativity, and healthy competition among children and young people of today’s generation. Through these initiatives, the Youth Department fosters holistic development, leadership skills, and a strong sense of social responsibility.</p>
            </div>

            {/* Programs Section */}
            <div className="mt-5 text-center">
              <h3 className='sectionTitle mx-800'>Programs Conducted in Past</h3>

              <div className="row justify-content-center mt-4">
                <div className="col-md-6 col-lg-5 mb-4">
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

                <div className="col-md-6 col-lg-5 mb-4">
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
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
