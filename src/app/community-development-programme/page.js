"use client";

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import ImpactStats from '@/components/partials/ImpactStats';
import OurValues from '@/components/partials/OurValues';
import CdpBlogSection from '@/components/partials/CdpBlogSection';
import { cdpBlogData } from '@/data/cdpBlogData';

export default function CDPOverviewPage() {
  const threeWaysValues = [
    {
      icon: "bi-heart-fill",
      title: "Donate",
      text: "Your gift funds a skill, a school kit, a sewing machine or tools for tailoring & beauty wellness. Every rupee is tracked to a real outcome.",
      link: "/fund-raising-publicity/donate",
      buttonText: "Donate Now →"
    },
    {
      icon: "bi-person-raised-hand",
      title: "Volunteer",
      text: "Teach a class, mentor a girl, lend your professional skills. A few hours can shift a life’s trajectory.",
      link: "/fund-raising-publicity/volunteer-and-partnership",
      buttonText: "Become a Volunteer →"
    },
    {
      icon: "bi-buildings",
      title: "Partner (CSR)",
      text: "Align your CSR mandate with measurable, audited impact in Delhi’s underserved settlements.",
      link: "/community-development-programme/csr",
      buttonText: "Explore CSR Partnerships →"
    }
  ];

  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/community-development-programme' },
    { title: 'ABOUT US', icon: 'bi-info-circle', link: '/community-development-programme/about-us' },
    { title: 'PROGRAMS', icon: 'bi-diagram-3', link: '/community-development-programme/programs' },
    { title: 'IMPACT', icon: 'bi-graph-up-arrow', link: '/community-development-programme/impact' },
    { title: 'STORIES', icon: 'bi-book', link: '/community-development-programme/stories' },
  ];

  const impactStats = [
    {
      id: 1,
      number: 12000,
      suffix: "+",
      text: "Women & girls directly reached",
      icon: "bi-people",
      color: "#c82333"
    },
    {
      id: 2,
      number: 45,
      suffix: "",
      text: "Urban settlements covered",
      icon: "bi-house-heart",
      color: "#3e8640"
    },
    {
      id: 3,
      number: 3200,
      suffix: "+",
      text: "Women trained in vocational skills",
      icon: "bi-person-gear",
      color: "#007bff"
    },
    {
      id: 4,
      number: 2100,
      suffix: "+",
      text: "Women placed in jobs or self-employment",
      icon: "bi-briefcase",
      color: "#86328a"
    },
    {
      id: 5,
      number: 180,
      suffix: "",
      text: "Active Self-Help Groups",
      icon: "bi-diagram-3",
      color: "#f39c12"
    },
    {
      id: 6,
      number: 42,
      suffix: "L+",
      text: "Total SHG savings mobilised",
      icon: "bi-piggy-bank",
      color: "#17a2b8"
    },
    {
      id: 7,
      number: 210,
      suffix: "+",
      text: "Health camps conducted",
      icon: "bi-heart-pulse",
      color: "#e83e8c"
    },
    {
      id: 8,
      number: 900,
      suffix: "+",
      text: "Girls supported back into formal education",
      icon: "bi-book",
      color: "#28a745"
    }
  ];



  return (
    <>
      <Head>
        <title>YWCA of Delhi | Community Development Programme - Empowering Women/Communities in Delhi’s Urban Settlements</title>
        <meta name="description" content="YWCA of Delhi’s Community Development Programme works with women, Young girls and children in Delhi’s urban slums and resettlement colonies through education, skill-building, awareness, and leadership training. Donate, volunteer, or partner with us today." />
        <meta name="keywords" content="women empowerment NGO Delhi, community development Delhi slums, NGO for women Delhi, skill training women Delhi, donate NGO Delhi" />
      </Head>

      <main>
        <SideNavBanner
          height="360px"
          title={<>Community Development<br />Programme</>}
          bgImage="/images/cdp/main-banner.jpg"
          navItems={bannerNavItems}
          activePath="/community-development-programme"
          contentMarginTop="25vh"
        />

        <div className={`${styles.pageBackground} pageContentWrapper`} style={{ paddingBottom: 0 }}>
          {/* Hero Section */}
          <section className={styles.sectionPadding}>
            <div className="container">
              <h1 className="sectionTitle_1 text-center mx-800">We measure success in changed lives - and we can show you the numbers.</h1>
              <p className={styles.overviewText}>
                For over years, the YWCA of Delhi’s Community Development Programme has walked alongside women, young girls & children in Delhi’s urban settlements - turning vulnerability into voice, and dependence into dignity.
              </p>

              <div className={styles.primaryButtons}>
                <Link href="/fund-raising-publicity/donate" className={styles.primaryBtn}>Donate Now</Link>
                <Link href="/fund-raising-publicity/volunteer-and-partnership" className={styles.primaryBtn}>Volunteer With Us</Link>
                <Link href="/community-development-programme/csr" className={styles.primaryBtn}>Partner With Us (CSR)</Link>
                <Link href="/community-development-programme/get-involved" className={styles.primaryBtn}>Get Involved</Link>
                <Link href="/community-development-programme/contact" className={styles.primaryBtn}>Contact Us</Link>
              </div>
              <p className={styles.supportingLine} style={{ textAlign: 'center', marginTop: '15px' }}>
                ₹500 can sponsor one woman’s tailoring training kit for a month. <Link href="/community-development-programme/impact">See what your gift can do →</Link>
              </p>
            </div>
          </section>

          {/* Impact Snapshot */}
          <div className={styles.impactSection}>
            <div className="container mt-5">
              <ImpactStats data={impactStats} animated={true} />
            </div>
          </div>

          {/* The Problem & Solution */}
          <section className={styles.introSection}>
            <div className="container">
              <h2 className="sectionTitle_2">Behind Delhi’s skyline, a quieter struggle continues</h2>
              <div className={styles.introPara}>
                <p>In Delhi’s crowded urban settlements - the informal colonies, resettlement clusters, and slum pockets that house millions of the city’s working poor - women, girls & children carry the heaviest, least visible burden. Limited access to education, early marriage, unsafe public spaces, low-wage or no work, and little say in household or community decisions keep generations of women locked out of opportunity.</p>
                <p>We believe this is not inevitable. It is solvable - with the right support, delivered consistently, at the community level.</p>
              </div>

              <h2 className="sectionTitle_2" style={{ marginBottom: '10px' }}>Our Solution</h2>
              <h4 className={styles.subTitle}>We don’t just help women. We work with them.</h4>
              <div className={styles.introPara}>
                <p>The YWCA of Delhi’s Community Development Programme takes a woman from where she is to where she wants to be - through four connected pathways:</p>
              </div>

              <div className="row mt-4 g-4">
                <div className="col-md-6">
                  <div className={styles.solutionBox}>
                    <h3 className={styles.solutionTitle}>
                      <i className="bi bi-book" style={{ color: '#a212b5', marginRight: '10px', fontSize: '1.6rem' }}></i>
                      Education & Literacy
                    </h3>
                    <p>Non-formal education, remedial classes, bridge classes and adult literacy so no one is left behind because they cannot sign or read a form, a payslip, or a prescription.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.solutionBox}>
                    <h3 className={styles.solutionTitle}>
                      <i className="bi bi-person-gear" style={{ color: '#a212b5', marginRight: '10px', fontSize: '1.6rem' }}></i>
                      Skill Building & Livelihoods
                    </h3>
                    <p>Vocational training in tailoring, beauty & wellness, food processing, knitting & garment construction followed by guiding them through career guidance & exploring ways to earn.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.solutionBox}>
                    <h3 className={styles.solutionTitle}>
                      <i className="bi bi-heart-pulse" style={{ color: '#a212b5', marginRight: '10px', fontSize: '1.6rem' }}></i>
                      Health & Well-being
                    </h3>
                    <p>Awareness on sexual & reproductive health rights, advocacy on SRHR, Menstrual health & hygiene, free eye screening, nutrition, hygiene, and mental well-being.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.solutionBox}>
                    <h3 className={styles.solutionTitle}>
                      <i className="bi bi-shield-check" style={{ color: '#a212b5', marginRight: '10px', fontSize: '1.6rem' }}></i>
                      Leadership & Rights
                    </h3>
                    <p>Community based organisations, community leadership training, and legal-rights & gov entitlement awareness so community members lead change in their own neighbourhoods.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-5 mb-2">
                <Link href="/community-development-programme/programs" className={styles.primaryBtn}>Explore Our Programs →</Link>
              </div>
            </div>
          </section>

          {/* Featured Story */}
          <div className="container">
            <div className={styles.storyTeaser}>
              <i className={`bi bi-quote ${styles.quoteIcon}`}></i>
              <div className={styles.quoteText}>
                I used to ask my parents for ₹100 - ₹400 to buy clothes. Now I am part of garment construction unit & run my own tailoring unit from my home.
              </div>
              <div className={styles.quoteAuthor}><strong>- Ankush, Najafgarh community</strong></div>
            </div>
          </div>

          {/* Why Trust Us */}
          <div className="container px-3">
            <div className={styles.trustSection}>
              <h2 className="sectionTitle_2" style={{ textAlign: 'center', marginBottom: '30px', color: '#a212b5' }}>
                Transparency isn’t a buzzword for us. It’s how we operate.
              </h2>
              <ul className={styles.trustList}>
                <li><i className="bi bi-check-circle-fill" style={{ color: '#a212b5', marginTop: '3px' }}></i> <span>Registered under the Societies Registration Act, affiliated to the YWCA of India</span></li>
                <li><i className="bi bi-check-circle-fill" style={{ color: '#a212b5', marginTop: '3px' }}></i> <span>12A & 80G registered - your donations are tax-deductible</span></li>
                <li><i className="bi bi-check-circle-fill" style={{ color: '#a212b5', marginTop: '3px' }}></i> <span>Annual reports and audited financial statements published every year</span></li>
                <li><i className="bi bi-check-circle-fill" style={{ color: '#a212b5', marginTop: '3px' }}></i> <span>Every rupee you donate goes directly to programmes on the ground</span></li>
              </ul>
              <div className="mt-5 text-center">
                <Link href="#" className={styles.primaryBtn}>View Our Financial Transparency →</Link>
              </div>
            </div>
          </div>

          {/* Three Ways to Be Part of the Change */}
          <section className={styles.introSection}>
            <div className="container">
              <OurValues title="Three Ways to Be Part of the Change" values={threeWaysValues} />
            </div>
          </section>

          {/* Blog Section */}
          <CdpBlogSection blogData={cdpBlogData} />



        </div>
      </main>
    </>
  );
}

