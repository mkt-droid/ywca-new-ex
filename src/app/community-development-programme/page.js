"use client";

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import CountUp from 'react-countup';

export default function CDPOverviewPage() {
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
        <title>YWCA of Delhi | Community Development Programme — Empowering Women/Communities in Delhi’s Urban Settlements</title>
        <meta name="description" content="YWCA of Delhi’s Community Development Programme works with women, Young girls and children in Delhi’s urban slums and resettlement colonies through education, skill-building, awareness, and leadership training. Donate, volunteer, or partner with us today." />
        <meta name="keywords" content="women empowerment NGO Delhi, community development Delhi slums, NGO for women Delhi, skill training women Delhi, donate NGO Delhi" />
      </Head>

      <main>
        <SideNavBanner
          title={<>Community Development<br />Programme</>}
          bgImage="/images/working-women-hostels/main-banner.jpg"
          navItems={bannerNavItems}
          activePath="/community-development-programme"
          contentMarginTop="25vh"
        />

        <div className={styles.pageBackground}>
          {/* Hero Section */}
          <section className={styles.sectionPadding}>
            <div className="container">
              <h2 className={styles.overviewTitle} style={{ maxWidth: 800, margin: '0 auto 25px' }}>Every woman deserves the power to shape her own future.</h2>
              <p className={styles.overviewText}>
                For over <strong>[XX]</strong> years, the YWCA of Delhi’s Community Development Programme has walked alongside women, young girls & children in Delhi’s urban settlements — turning vulnerability into voice, and dependence into dignity.
              </p>

              <div className={styles.primaryButtons}>
                <Link href="/community-development-programme/donate" className={styles.primaryBtn}>Donate Now</Link>
                <Link href="/community-development-programme/get-involved" className={styles.primaryBtn}>Volunteer With Us</Link>
                <Link href="/community-development-programme/csr" className={styles.primaryBtn}>Partner With Us (CSR)</Link>
              </div>
              <p className={styles.supportingLine} style={{ textAlign: 'center', marginTop: '15px' }}>
                ₹500 can sponsor one woman’s tailoring training kit for a month. <Link href="/community-development-programme/impact">See what your gift can do →</Link>
              </p>
            </div>
          </section>

          {/* Impact Snapshot */}
          <div className={styles.impactSection}>
            <div className="container">
              <div className="row g-4">
                <div className="col-md-3 col-sm-6">
                  <div className={styles.impactBox}>
                    <div className={styles.impactNumber}>
                      <CountUp end={12000} duration={2.5} separator="," enableScrollSpy={true} scrollSpyOnce={true} />+
                    </div>
                    <div className={styles.impactText}>Women & girls reached</div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className={styles.impactBox}>
                    <div className={styles.impactNumber}>
                      <CountUp end={7} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} />
                    </div>
                    <div className={styles.impactText}>Urban settlements covered</div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className={styles.impactBox}>
                    <div className={styles.impactNumber}>
                      <CountUp end={3200} duration={2.5} separator="," enableScrollSpy={true} scrollSpyOnce={true} />+
                    </div>
                    <div className={styles.impactText}>Women trained in vocational skills</div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className={styles.impactBox}>
                    <div className={styles.impactNumber}>
                      <CountUp end={2000} duration={2.5} separator="," enableScrollSpy={true} scrollSpyOnce={true} />+
                    </div>
                    <div className={styles.impactText}>Women & Girls aware of SRHR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Problem & Solution */}
          <div className="container mt-5 pt-4">
            <h2 className={styles.sectionTitle}>Behind Delhi’s skyline, a quieter struggle continues</h2>
            <div className={styles.introPara}>
              <p>In Delhi’s crowded urban settlements — the informal colonies, resettlement clusters, and slum pockets that house millions of the city’s working poor — women, girls & children carry the heaviest, least visible burden. Limited access to education, early marriage, unsafe public spaces, low-wage or no work, and little say in household or community decisions keep generations of women locked out of opportunity.</p>
              <p>We believe this is not inevitable. It is solvable — with the right support, delivered consistently, at the community level.</p>
            </div>

            <h2 className={styles.sectionTitle}>Our Solution: We don’t just help women. We work with them.</h2>
            <div className={styles.introPara}>
              <p>The YWCA of Delhi’s Community Development Programme takes a woman from where she is to where she wants to be — through four connected pathways:</p>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className={styles.solutionBox}>
                  <div className={styles.solutionTitle}>Education & Literacy</div>
                  <p>Non-formal education, remedial classes, bridge classes and adult literacy so no one is left behind because they cannot sign or read a form, a payslip, or a prescription.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.solutionBox}>
                  <div className={styles.solutionTitle}>Skill Building & Livelihoods</div>
                  <p>Vocational training in tailoring, beauty & wellness, food processing, knitting & garment construction followed by guiding them through career guidance & exploring ways to earn.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.solutionBox}>
                  <div className={styles.solutionTitle}>Health & Well-being</div>
                  <p>Awareness on sexual & reproductive health rights, advocacy on SRHR, Menstrual health & hygiene, free eye screening, nutrition, hygiene, and mental well-being.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.solutionBox}>
                  <div className={styles.solutionTitle}>Leadership & Rights</div>
                  <p>Community based organisations, community leadership training, and legal-rights & gov entitlement awareness so community members lead change in their own neighbourhoods.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link href="/community-development-programme/programs" className={styles.primaryBtn}>Explore Our Programs →</Link>
            </div>
          </div>

          {/* Featured Story */}
          <div className="container">
            <div className={styles.storyTeaser}>
              <div className={styles.quoteText}>
                “I used to ask my parents for ₹100-Rs. 400 to buy clothes. Now I am part of garment construction unit & run my own tailoring unit from my home.”
              </div>
              <div className="mb-4"><strong>— Ankush, Najafgarh community</strong></div>
              <Link href="/community-development-programme/stories" className={styles.primaryBtn}>Read Ankush’s Story →</Link>
            </div>
          </div>

          {/* Why Trust Us */}
          <div className="container px-3">
            <div className={styles.trustSection}>
              <h2 className={styles.sectionTitle}>Transparency isn’t a buzzword for us. It’s how we operate.</h2>
              <ul className={styles.trustList}>
                <li>Registered under the Societies Registration Act, affiliated to the YWCA of India</li>
                <li>12A & 80G registered — your donations are tax-deductible</li>
                <li>FCRA compliant for international contributions</li>
                <li>Annual reports and audited financial statements published every year</li>
                <li>[XX]% of every rupee you donate goes directly to programmes on the ground</li>
              </ul>
              <div className="mt-5">
                <Link href="/community-development-programme/impact" className={styles.primaryBtn}>View Our Financial Transparency →</Link>
              </div>
            </div>
          </div>

          {/* Three Ways to Be Part of the Change */}
          <div className="container mt-5 pt-4">
            <h2 className={`${styles.sectionTitle} text-center d-block`}>Three Ways to Be Part of the Change</h2>
            <div className="row g-4 mt-2">
              <div className="col-md-4">
                <div className={styles.wayCard}>
                  <h4>Donate</h4>
                  <p>Your gift funds a skill, a school kit, a sewing machine or tools for tailoring & beauty wellness. Every rupee is tracked to a real outcome.</p>
                  <Link href="/community-development-programme/donate" className={styles.primaryBtn}>Donate Now →</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.wayCard}>
                  <h4>Volunteer</h4>
                  <p>Teach a class, mentor a girl, lend your professional skills. A few hours can shift a life’s trajectory.</p>
                  <Link href="/community-development-programme/get-involved" className={styles.primaryBtn}>Become a Volunteer →</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.wayCard}>
                  <h4>Partner (CSR)</h4>
                  <p>Align your CSR mandate with measurable, audited impact in Delhi’s underserved settlements.</p>
                  <Link href="/community-development-programme/csr" className={styles.primaryBtn}>Explore CSR Partnerships →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="container">
            <div className={styles.newsletterStrip}>
              <h3>Stay close to the change you’re creating.</h3>
              <p className="mb-4">Get quarterly updates on the women, young girl or child you’re supporting — real stories, real numbers, no spam.</p>
              <form className="d-flex justify-content-center align-items-center flex-wrap" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className={styles.newsletterInput} required />
                <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
              </form>
            </div>
          </div> */}

        </div>
      </main>
    </>
  );
}
