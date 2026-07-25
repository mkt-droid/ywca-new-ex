"use client";

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function CDPProgramsPage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/community-development-programme' },
    { title: 'ABOUT US', icon: 'bi-info-circle', link: '/community-development-programme/about-us' },
    { title: 'PROGRAMS', icon: 'bi-diagram-3', link: '/community-development-programme/programs' },
    { title: 'IMPACT', icon: 'bi-graph-up-arrow', link: '/community-development-programme/impact' },
    { title: 'STORIES', icon: 'bi-book', link: '/community-development-programme/stories' }
  ];

  return (
    <>
      <Head>
        <title>Our Programs | Women Empowerment & Skill Training in Delhi Urban Settlements</title>
        <meta name="description" content="Explore YWCA Delhi CDP’s programmes in education, vocational training, health awareness, and leadership development for women in Delhi’s urban settlements." />
      </Head>

      <main>
        <SideNavBanner
          title={<>PROGRAMS<br />CDP</>}
          bgImage="/images/working-women-hostels/main-banner.jpg"
          navItems={bannerNavItems}
          activePath="/community-development-programme/programs"
          contentMarginTop="25vh"
        />

        <div className={styles.pageBackground}>
          <div className="container">
            <h1 className={styles.heroHeadline} style={{ maxWidth: 800, margin: '0 auto 25px' }}>Four Pathways. One Goal: A Woman’s Independence.</h1>
            <p className={styles.introPara}>
              Every woman who walks through our doors is at a different starting point. That’s why CDP runs four interconnected programme areas — designed to meet her there, and walk with her forward.
            </p>
          </div>
        </div>

        {/* Program 1 */}
        <section className={styles.programSection}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 className={styles.programTitle}>Program 1: Education & Literacy</h3>
                <div className={styles.programTagline}>Because independence starts with being able to read your own life.</div>

                <div className={styles.problemSolutionBox}>
                  <div className={styles.problemBox}>
                    <div className={styles.boxLabel}><i className="bi bi-exclamation-triangle-fill"></i> The Problem</div>
                    <p className={styles.boxText}>Many women in Delhi’s settlements were pulled out of school early — for marriage, housework, or to help earn. Without basic literacy and numeracy, they remain dependent on others for the simplest transactions.</p>
                  </div>
                  <div className={styles.solutionBox}>
                    <div className={styles.boxLabel}><i className="bi bi-check-circle-fill"></i> What We Do</div>
                    <ul className={styles.solutionList}>
                      <li>Non-formal adult literacy classes (3 months, evening batches for working women)</li>
                      <li>Remedial and bridge classes for out-of-school girls to re-enter formal school</li>
                      <li>Digital literacy basics (using a smartphone safely, UPI payments, government portals)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.infoRow}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>Who it’s for:</div>
                    <p className={styles.infoCardText}>Women aged 15–45 and adolescent girls at risk of dropping out.</p>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>Outcomes we track:</div>
                    <p className={styles.infoCardText}>Reading/writing proficiency, school re-enrolment rate, digital transaction confidence.</p>
                  </div>
                </div>

                <h5 className="mb-3">2023–24 Impact Snapshot <small className="text-muted">[VERIFY]</small></h5>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>1,800</div>
                    <div className={styles.statLabel}>Learners Enrolled</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>78%</div>
                    <div className={styles.statLabel}>Course Completion</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>240</div>
                    <div className={styles.statLabel}>Girls Re-enrolled</div>
                  </div>
                </div>

                <div className={styles.ctaWrapper}>
                  <Link href="/community-development-programme/donate" className={styles.primaryBtn}>Sponsor a Literacy Kit — ₹800/learner →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program 2 */}
        <section className={styles.programSection}>
          <div className="container">
            <div className="row flex-lg-row-reverse">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 className={styles.programTitle}>Program 2: Skill Building & Livelihoods</h3>
                <div className={styles.programTagline}>A skill is the shortest distance between hardship and hope.</div>

                <div className={styles.problemSolutionBox}>
                  <div className={styles.problemBox}>
                    <div className={styles.boxLabel}><i className="bi bi-exclamation-triangle-fill"></i> The Problem</div>
                    <p className={styles.boxText}>Even when women want to work, they often lack a marketable skill, capital to start something small, or the confidence to seek employment outside the home.</p>
                  </div>
                  <div className={styles.solutionBox}>
                    <div className={styles.boxLabel}><i className="bi bi-check-circle-fill"></i> What We Do</div>
                    <ul className={styles.solutionList}>
                      <li>Tailoring & garment-making (3–6 month certified courses)</li>
                      <li>Beauty & wellness training</li>
                      <li>Basic computer & office skills</li>
                      <li>Food processing and packaging (pickles, spices, bakery)</li>
                      <li>Post-training placement support and linkage to micro-loans and SHG credit</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.infoRow}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>Who it’s for:</div>
                    <p className={styles.infoCardText}>Women aged 18–50 seeking income independence.</p>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>Outcomes we track:</div>
                    <p className={styles.infoCardText}>Certification rate, placement/self-employment rate within 6 months, average monthly income increase.</p>
                  </div>
                </div>

                <h5 className="mb-3">2023–24 Impact Snapshot <small className="text-muted">[VERIFY]</small></h5>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>1,100</div>
                    <div className={styles.statLabel}>Women Trained</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>68%</div>
                    <div className={styles.statLabel}>Placed/Self-employed</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>₹4,200</div>
                    <div className={styles.statLabel}>Avg Monthly Increase</div>
                  </div>
                </div>

                <div className={styles.ctaWrapper}>
                  <Link href="/community-development-programme/donate" className={styles.primaryBtn}>Fund a Skill Training Seat — ₹3,500/woman →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program 3 */}
        <section className={styles.programSection}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 className={styles.programTitle}>Program 3: Health & Well-being</h3>
                <div className={styles.programTagline}>A healthy woman can build a healthy home — and a healthy community.</div>

                <div className={styles.problemSolutionBox}>
                  <div className={styles.problemBox}>
                    <div className={styles.boxLabel}><i className="bi bi-exclamation-triangle-fill"></i> The Problem</div>
                    <p className={styles.boxText}>Poor sanitation, limited health literacy, and stigma around reproductive and mental health leave women managing serious issues silently.</p>
                  </div>
                  <div className={styles.solutionBox}>
                    <div className={styles.boxLabel}><i className="bi bi-check-circle-fill"></i> What We Do</div>
                    <ul className={styles.solutionList}>
                      <li>Menstrual and reproductive health awareness sessions</li>
                      <li>Nutrition counselling for women and children</li>
                      <li>Mental health awareness and referral support</li>
                      <li>Linkage to government health schemes (Ayushman Bharat, ANC/PNC services)</li>
                      <li>Health camps in partnership with local clinics and hospitals</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.infoRow}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>Who it’s for:</div>
                    <p className={styles.infoCardText}>Women, adolescent girls, and mothers of young children.</p>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>Outcomes we track:</div>
                    <p className={styles.infoCardText}>Health camp attendance, scheme enrolment rate, reduction in self-reported health-seeking barriers.</p>
                  </div>
                </div>

                <h5 className="mb-3">2023–24 Impact Snapshot <small className="text-muted">[VERIFY]</small></h5>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>35</div>
                    <div className={styles.statLabel}>Health Camps</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>6,500</div>
                    <div className={styles.statLabel}>Beneficiaries Reached</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>2,100</div>
                    <div className={styles.statLabel}>Linked to Govt Schemes</div>
                  </div>
                </div>

                <div className={styles.ctaWrapper}>
                  <Link href="/community-development-programme/donate" className={styles.primaryBtn}>Support a Health Camp — ₹15,000 →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program 4 */}
        <section className={styles.programSection}>
          <div className="container">
            <div className="row flex-lg-row-reverse">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 className={styles.programTitle}>Program 4: Leadership & Rights</h3>
                <div className={styles.programTagline}>She doesn’t just need a seat at the table. She needs to build the table.</div>

                <div className={styles.problemSolutionBox}>
                  <div className={styles.problemBox}>
                    <div className={styles.boxLabel}><i className="bi bi-exclamation-triangle-fill"></i> The Problem</div>
                    <p className={styles.boxText}>Women in urban settlements are rarely consulted on decisions that affect their own communities — from local infrastructure to safety to household finances.</p>
                  </div>
                  <div className={styles.solutionBox}>
                    <div className={styles.boxLabel}><i className="bi bi-check-circle-fill"></i> What We Do</div>
                    <ul className={styles.solutionList}>
                      <li>Self-Help Group (SHG) formation and financial literacy</li>
                      <li>Community leadership training for women representatives</li>
                      <li>Legal rights awareness (domestic violence law, property rights, POSH)</li>
                      <li>Support to access grievance redressal and local governance structures</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.infoRow}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>Who it’s for:</div>
                    <p className={styles.infoCardText}>SHG members and emerging women leaders across settlements.</p>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>Outcomes we track:</div>
                    <p className={styles.infoCardText}>Number of active SHGs, savings mobilised, women taking on formal/informal leadership roles.</p>
                  </div>
                </div>

                <h5 className="mb-3">2023–24 Impact Snapshot <small className="text-muted">[VERIFY]</small></h5>
                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>180</div>
                    <div className={styles.statLabel}>Active SHGs</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>₹42L</div>
                    <div className={styles.statLabel}>Savings Mobilised</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>95</div>
                    <div className={styles.statLabel}>Women in Leadership</div>
                  </div>
                </div>

                <div className={styles.ctaWrapper}>
                  <Link href="/community-development-programme/donate" className={styles.primaryBtn}>Back a Self-Help Group — ₹10,000 →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Work */}
        <section className={styles.whereWeWork}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h2 className={styles.whereTitle}>Where We Work</h2>
                <p className={styles.whereText}>
                  We currently operate across <strong>45</strong> urban settlements, reaching communities that are often left out of mainstream civic and welfare infrastructure.
                </p>
                <Link href="/community-development-programme/impact" className={styles.whereBtn}>
                  View Our Coverage Map →
                </Link>

                <div className={styles.zonesGrid}>
                  <div className={styles.zonePill}>Sangam Vihar</div>
                  <div className={styles.zonePill}>Govindpuri</div>
                  <div className={styles.zonePill}>Madanpur Khadar</div>
                  <div className={styles.zonePill}>Nand Nagri</div>
                  <div className={styles.zonePill}>Seelampur</div>
                  <div className={styles.zonePill}>Najafgarh</div>
                  <div className={styles.zonePill}>Mangolpuri</div>
                  <Link href="/fund-raising-publicity" className={`${styles.zonePill} border-white fw-bold`}>+ See All 45 Locations</Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.whereImageWrapper}>
                  <img src="/images/high-1.jpg" alt="Women in community" className={styles.whereImage} />
                  <div className={styles.floatingCard1}>
                    <div style={{ color: '#0d6efd', fontWeight: 'bold', fontSize: '1.2rem' }}>45</div>
                    <div style={{ fontSize: '0.85rem', color: '#555', textAlign: 'center' }}>Urban Settlements</div>
                  </div>
                  <div className={styles.floatingCard2}>
                    <div className="d-flex" style={{ marginLeft: '10px' }}>
                      <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#dc3545', zIndex: 4, marginLeft: '-10px', border: '2px solid white' }}></div>
                      <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#198754', zIndex: 3, marginLeft: '-10px', border: '2px solid white' }}></div>
                      <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#ffc107', zIndex: 2, marginLeft: '-10px', border: '2px solid white' }}></div>
                      <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#0dcaf0', zIndex: 1, marginLeft: '-10px', border: '2px solid white' }}></div>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#555', fontWeight: '500', lineHeight: 1.2 }}>
                      Impacting<br /><span style={{ color: '#000', fontWeight: 'bold' }}>10,000+ Women</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
