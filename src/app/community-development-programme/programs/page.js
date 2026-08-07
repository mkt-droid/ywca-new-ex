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
    { title: 'STORIES', icon: 'bi-book', link: '/community-development-programme/stories' },
    { title: 'GET INVOLVED', icon: 'bi-person-raised-hand', link: '/community-development-programme/get-involved' }
  ];

  const [selectedProgram, setSelectedProgram] = React.useState(null);

  const programsData = [
    {
      id: 1,
      title: "Education & Literacy",
      tagline: "Because independence starts with being able to read your own life.",
      thumbnail: "/images/Community-development.jpg",
      problem: "Many women in Delhi’s settlements were pulled out of school early - for marriage, housework, or to help earn. Without basic literacy and numeracy, they remain dependent on others for the simplest transactions.",
      solutions: [
        "Non-formal adult literacy classes (3 months, evening batches for working women)",
        "Remedial and bridge classes for out-of-school girls to re-enter formal school",
        "Digital literacy basics (using a smartphone safely, UPI payments, government portals)"
      ],
      whoItsFor: "Women aged 15-45 and adolescent girls at risk of dropping out.",
      outcomes: "Reading/writing proficiency, school re-enrolment rate, digital transaction confidence.",
      stats: [
        { value: "1,800", label: "Learners Enrolled" },
        { value: "78%", label: "Course Completion" },
        { value: "240", label: "Girls Re-enrolled" }
      ],
      ctaText: "Sponsor a Literacy Kit →",
      ctaPrice: "₹800/learner",
      ctaLink: "/fund-raising-publicity/donate"
    },
    {
      id: 2,
      title: "Skill Building & Livelihoods",
      tagline: "A skill is the shortest distance between hardship and hope.",
      thumbnail: "/images/01-Banner-Vision-Mission.jpg",
      problem: "Even when women want to work, they often lack a marketable skill, capital to start something small, or the confidence to seek employment outside the home.",
      solutions: [
        "Tailoring & garment-making (3-6 month certified courses)",
        "Beauty & wellness training",
        "Basic computer & office skills",
        "Food processing and packaging (pickles, spices, bakery)",
        "Post-training placement support and linkage to micro-loans and SHG credit"
      ],
      whoItsFor: "Women aged 18-50 seeking income independence.",
      outcomes: "Certification rate, placement/self-employment rate within 6 months, average monthly income increase.",
      stats: [
        { value: "1,100", label: "Women Trained" },
        { value: "68%", label: "Placed/Self-employed" },
        { value: "₹4,200", label: "Avg Monthly Increase" }
      ],
      ctaText: "Fund a Skill Training Seat →",
      ctaPrice: "₹3,500/woman",
      ctaLink: "/fund-raising-publicity/donate"
    },
    {
      id: 3,
      title: "Health & Well-being",
      tagline: "A healthy woman can build a healthy home - and a healthy community.",
      thumbnail: "/images/high-1.jpg",
      problem: "Poor sanitation, limited health literacy, and stigma around reproductive and mental health leave women managing serious issues silently.",
      solutions: [
        "Menstrual and reproductive health awareness sessions",
        "Nutrition counselling for women and children",
        "Mental health awareness and referral support",
        "Linkage to government health schemes (Ayushman Bharat, ANC/PNC services)",
        "Health camps in partnership with local clinics and hospitals"
      ],
      whoItsFor: "Women, adolescent girls, and mothers of young children.",
      outcomes: "Health camp attendance, scheme enrolment rate, reduction in self-reported health-seeking barriers.",
      stats: [
        { value: "35", label: "Health Camps" },
        { value: "6,500", label: "Beneficiaries Reached" },
        { value: "2,100", label: "Linked to Govt Schemes" }
      ],
      ctaText: "Support a Health Camp →",
      ctaPrice: "₹15,000",
      ctaLink: "/fund-raising-publicity/donate"
    },
    {
      id: 4,
      title: "Leadership & Rights",
      tagline: "She doesn’t just need a seat at the table. She needs to build the table.",
      thumbnail: "/images/01-Banner-insights-pub.jpg",
      problem: "Women in urban settlements are rarely consulted on decisions that affect their own communities - from local infrastructure to safety to household finances.",
      solutions: [
        "Self-Help Group (SHG) formation and financial literacy",
        "Community leadership training for women representatives",
        "Legal rights awareness (domestic violence law, property rights, POSH)",
        "Support to access grievance redressal and local governance structures"
      ],
      whoItsFor: "SHG members and emerging women leaders across settlements.",
      outcomes: "Number of active SHGs, savings mobilised, women taking on formal/informal leadership roles.",
      stats: [
        { value: "180", label: "Active SHGs" },
        { value: "₹42L", label: "Savings Mobilised" },
        { value: "95", label: "Women in Leadership" }
      ],
      ctaText: "Back a Self-Help Group →",
      ctaPrice: "₹10,000",
      ctaLink: "/fund-raising-publicity/donate"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Programs | Women Empowerment & Skill Training in Delhi Urban Settlements</title>
        <meta name="description" content="Explore YWCA Delhi CDP’s programmes in education, vocational training, health awareness, and leadership development for women in Delhi’s urban settlements." />
      </Head>

      <main>
        <SideNavBanner
          height="360px"
          title={<>PROGRAMS<br />CDP</>}
          bgImage="/images/cdp/main-banner.jpg"
          navItems={bannerNavItems}
          activePath="/community-development-programme/programs"
          contentMarginTop="25vh"
        />

        <div className={`${styles.pageBackground} pageContentWrapper`}>
          <div className="container">
            <h1 className="sectionTitle_1 text-center mx-800">Four Pathways. One Goal: A Woman’s Independence.</h1>
            <p className={styles.introPara}>
              Every woman who walks through our doors is at a different starting point. That’s why CDP runs four interconnected programme areas - designed to meet her there, and walk with her forward.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <section className={styles.programSection}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center">Our Programs</h2>
            <div className="row g-4">
              {programsData.map(program => (
                <div key={program.id} className="col-lg-3 col-md-6 mb-4">
                  <div className={styles.courseCard}>
                    <img src={program.thumbnail} alt={program.title} className={styles.courseImage} />
                    <div className={styles.courseContent}>
                      <h3 className={`${styles.courseTitle}`}>{program.title}</h3>
                      <p className={styles.cardTagline}>{program.tagline}</p>
                      <div className={styles.btnGroup}>
                        <button className={styles.viewMoreBtn} onClick={() => setSelectedProgram(program)}>
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal (Controlled by React state) */}
        {selectedProgram && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className={`modal-header ${styles.modalHeader}`}>
                  <h3 className={`modal-title ${styles.modalTitle}`}>{selectedProgram.title}</h3>
                  <button type="button" className="btn-close" onClick={() => setSelectedProgram(null)} aria-label="Close"></button>
                </div>
                <div className={`modal-body ${styles.modalBody}`}>
                  <div className={styles.programTagline}>{selectedProgram.tagline}</div>

                  <div className={styles.problemSolutionBox}>
                    <div className={styles.problemBox}>
                      <div className={styles.boxLabel}><i className="bi bi-exclamation-triangle-fill"></i> The Problem</div>
                      <p className={styles.boxText}>{selectedProgram.problem}</p>
                    </div>
                    <div className={styles.solutionBox}>
                      <div className={styles.boxLabel}><i className="bi bi-check-circle-fill"></i> What We Do</div>
                      <ul className={styles.solutionList}>
                        {selectedProgram.solutions.map((sol, idx) => (
                          <li key={idx}>{sol}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.infoCard}>
                      <div className={styles.infoCardTitle}>Who it’s for</div>
                      <p className={styles.infoCardText}>{selectedProgram.whoItsFor}</p>
                    </div>
                    <div className={styles.infoCard}>
                      <div className={styles.infoCardTitle}>Outcomes we track</div>
                      <p className={styles.infoCardText}>{selectedProgram.outcomes}</p>
                    </div>
                  </div>


                  <div className={styles.statsGrid}>
                    {selectedProgram.stats.map((stat, idx) => (
                      <div key={idx} className={styles.statCard}>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-4 mb-2">
                    <Link href={selectedProgram.ctaLink} className={styles.primaryBtn} onClick={() => setSelectedProgram(null)}>
                      {selectedProgram.ctaText}
                    </Link>
                    {selectedProgram.ctaPrice && (
                      <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px' }}>
                        {selectedProgram.ctaPrice}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
