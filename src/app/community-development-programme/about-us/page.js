"use client";

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import OurValues from '@/components/partials/OurValues';

export default function CDPAboutUsPage() {
  const aboutUsValues = [
    {
      icon: "bi-person-heart",
      title: "Dignity first",
      text: "We design every programme so women & children are treated as capable partners, never as charity cases."
    },
    {
      icon: "bi-people",
      title: "Community-led",
      text: "Local women & children help identify needs and shape solutions - we facilitate, they lead."
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Evidence over assumption",
      text: "We track outcomes, not just activities, and we adjust when something isn’t working."
    },
    {
      icon: "bi-globe",
      title: "Inclusion",
      text: "We serve regardless of religion, caste, ethnicity or background. We reach out to the marginalised."
    },
    {
      icon: "bi-shield-check",
      title: "Accountability",
      text: "To our beneficiaries first, and to our allies, donors and partners with equal seriousness."
    }
  ];

  const governanceValues = [
    {
      icon: "bi-bank",
      title: "Governing Board",
      text: "The YWCA of Delhi is governed by an elected Executive Committee comprising professionals, educators, and long-standing members committed to good governance."
    },
    {
      icon: "bi-diagram-3",
      title: "Programme Leadership",
      text: "The Community Development Programme is led by the Department Head, supported by field coordinators across our settlement locations."
    }
  ];

  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/community-development-programme' },
    { title: 'ABOUT US', icon: 'bi-info-circle', link: '/community-development-programme/about-us' },
    { title: 'PROGRAMS', icon: 'bi-diagram-3', link: '/community-development-programme/programs' },
    { title: 'IMPACT', icon: 'bi-graph-up-arrow', link: '/community-development-programme/impact' },
    { title: 'STORIES', icon: 'bi-book', link: '/community-development-programme/stories' },
    { title: 'GET INVOLVED', icon: 'bi-person-raised-hand', link: '/community-development-programme/get-involved' }
  ];

  return (
    <>
      <Head>
        <title>About Us | YWCA of Delhi Community Development Programme</title>
        <meta name="description" content="Learn about the YWCA of Delhi’s Community Development Programme - our history, mission, values, and the team working to empower women in Delhi’s urban settlements." />
      </Head>

      <main>
        <SideNavBanner
          height="360px"
          title={<>ABOUT US<br />CDP</>}
          bgImage="/images/cdp/main-banner.jpg"
          navItems={bannerNavItems}
          activePath="/community-development-programme/about-us"
          contentMarginTop="25vh"
        />

        <div className={`${styles.pageBackground} pageContentWrapper`}>
          <div className="container">
            <h1 className="sectionTitle_1 text-center mx-800">Rooted in a century of service. Focused on today’s most urgent need.</h1>
            <div className={styles.introPara}>
              <p>The YWCA (Young Women’s Christian Association) has stood for justice & dignity and empowerment of women worldwide for over 165 years. The YWCA of Delhi carries this legacy forward through its Community Development Programme (CDP) - a dedicated initiative working directly inside Delhi’s urban settlements, where the gap between opportunity and access is widest.</p>
              <p>We are not a programme that arrives with answers. We are a programme that arrives with time, trust, and tools - and lets women build their own answers.</p>
            </div>

            {/* Mission & Vision Zigzag */}
            <div className={styles.zigzagSection}>
              {/* Mission - Image Left, Text Right */}
              <div className={`row align-items-center ${styles.zigzagRow}`}>
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className={styles.zigzagImageWrapper}>
                    <img src="/images/Community-development.jpg" alt="Our Mission" className={styles.zigzagImage} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.zigzagContent}>
                    <h2 className="sectionTitle_2">Our Mission</h2>
                    <p className={styles.zigzagText}>To empower women, young women & children in Delhi’s urban settlements with the education, skills, awareness on rights, access to entitlements and leadership confidence they need to lead self-reliant, dignified lives - and to strengthen the communities around them in the process.</p>
                  </div>
                </div>
              </div>

              {/* Vision - Text Left, Image Right (using flex-md-row-reverse) */}
              <div className={`row align-items-center ${styles.zigzagRow} flex-md-row-reverse`}>
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className={styles.zigzagImageWrapper}>
                    <img src="/images/01-Banner-Vision-Mission.jpg" alt="Our Vision" className={styles.zigzagImage} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.zigzagContent}>
                    <h2 className="sectionTitle_2">Our Vision</h2>
                    <p className={styles.zigzagText}>To create a society where women and children from marginalized communities have equal access to opportunities, live with dignity, and actively participate in leading community development.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="mt-5 pt-4">
              <h2 className="sectionTitle_2 text-center d-block">How it started</h2>
              <div className={styles.introPara}>
                <p>The Community Development Programme grew out its core values to serve by love & care decades ago: welfare handouts changed a day; skills and confidence changed a life. Starting with a handful of literacy circles, the programme has since grown into a multi-pronged intervention spanning 7 urban settlements across Delhi, reaching more than 12,000 women and girls & children with education, livelihood, health, and leadership support.</p>
                <p>Today, CDP is run by a team of community workers, instructors and social workers - many of whom are graduates of our own programmes.</p>
              </div>
            </div>

            {/* Our Values */}
            <OurValues values={aboutUsValues} />

            {/* The CDP Model */}
            <div className={styles.cdpModelWrapper}>
              <h2 className="sectionTitle_2 text-center d-block">How change happens, step by step</h2>
              <div className="row mt-4 justify-content-center">
                <div className="col-md-6 mb-4">
                  <div className={`${styles.modelStep} h-100 mb-0`}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h3 className="sectionTitle_3">Enter the community</h3>
                      <p>Through door-to-door outreach and trusted local networks (anganwadi workers, community leaders, self-help groups).</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={`${styles.modelStep} h-100 mb-0`}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h3 className="sectionTitle_3">Listen and assess</h3>
                      <p>Needs assessments run with residents, not on them.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={`${styles.modelStep} h-100 mb-0`}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h3 className="sectionTitle_3">Enrol and support</h3>
                      <p>Women & children join programs based on their need e.g. CBO, literacy, skill, health, or leadership tracks suited to their stage of life.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={`${styles.modelStep} h-100 mb-0`}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h3 className="sectionTitle_3">Build toward independence</h3>
                      <p>Career guidance, livelihood unit, and assist in access to government schemes.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={`${styles.modelStep} h-100 mb-0`}>
                    <div className={styles.stepNumber}>5</div>
                    <div className={styles.stepContent}>
                      <h3 className="sectionTitle_3">Sustain through community ownership</h3>
                      <p>Community based groups and women leaders continue the work after direct intervention tapers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governance & Leadership */}
            <OurValues title="Governance & Leadership" values={governanceValues} />

            {/* Affiliations */}
            <div className="mt-5 pt-4">
              <h2 className="sectionTitle_2 text-center d-block">Our Affiliations & Allyship</h2>
              <div className={styles.affiliationsList}>
                <div className={styles.affiliationItem}><i className="bi bi-award"></i> YWCA of India</div>
                <div className={styles.affiliationItem}><i className="bi bi-shield-check"></i> Delhi Commission for Women</div>
                <div className={styles.affiliationItem}><i className="bi bi-building"></i> DWCD Office - Mangolpuri</div>
                <div className={styles.affiliationItem}><i className="bi bi-bank"></i> DLSA - Najafgarh & Mangolpuri</div>
                <div className={styles.affiliationItem}><i className="bi bi-people"></i> DCPU - Mangolpuri</div>
                <div className={styles.affiliationItem}><i className="bi bi-cash-coin"></i> Canara Bank - Mangolpuri</div>
                <div className={styles.affiliationItem}><i className="bi bi-globe"></i> Rotary Club of Delhi SouthEx</div>
              </div>
            </div>

            <div className="text-center mt-5">
              <Link href="/community-development-programme/impact" className={styles.primaryBtn}>See Where We Work →</Link>
              <Link href="/board-of-management" className={styles.secondaryBtn}>Meet the Team →</Link>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
