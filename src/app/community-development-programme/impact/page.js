import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import ImpactStats from '@/components/partials/ImpactStats';
import GrowthCharts from '@/components/partials/GrowthCharts';
import FinancialChart from '@/components/partials/FinancialChart';
import OurValues from '@/components/partials/OurValues';

export const metadata = {
  title: 'Our Impact | Measurable Results from Delhi’s Urban Settlements',
  description: 'See the real, measurable impact of YWCA Delhi CDP’s work - women trained, families supported, income generated, and lives changed, backed by data and audited reports.',
};

export default function CDPImpactPage() {
  const measureImpactValues = [
    {
      icon: "bi-people-fill",
      title: "Output",
      text: "How many women attended training, sessions, or camps."
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Outcome",
      text: "What changed for them: income earned, literacy gained, health scheme enrolment."
    },
    {
      icon: "bi-award-fill",
      title: "Longer-term impact",
      text: "Sustained income 12 months on, girls who stayed in school, SHGs still active after 2 years."
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

  const cumulativeImpacts = [
    { label: 'Women & girls directly reached', number: 12000, suffix: '+', icon: 'bi-people', color: '#c82333' },
    { label: 'Urban settlements covered', number: 45, suffix: '', icon: 'bi-house-heart', color: '#3e8640' },
    { label: 'Women trained in vocational skills', number: 3200, suffix: '+', icon: 'bi-person-gear', color: '#007bff' },
    { label: 'Women placed in jobs or self-employment', number: 2100, suffix: '+', icon: 'bi-briefcase', color: '#86328a' },
    { label: 'Active Self-Help Groups', number: 180, suffix: '', icon: 'bi-diagram-3', color: '#f39c12' },
    { label: 'Total SHG savings mobilised', number: 42, suffix: 'L+', icon: 'bi-piggy-bank', color: '#17a2b8' },
    { label: 'Health camps conducted', number: 210, suffix: '+', icon: 'bi-heart-pulse', color: '#e83e8c' },
    { label: 'Girls supported back into formal education', number: 900, suffix: '+', icon: 'bi-book', color: '#28a745' }
  ];

  const financialData = [
    { label: 'Programmes (education, livelihoods, health, leadership)' },
    { label: 'Community outreach & staff training' },
    { label: 'Administration & governance' },
    { label: 'Fundraising & communications' }
  ];

  return (
    <>
      <main>
        <SideNavBanner
          height="360px"
          title={<>IMPACT<br />CDP</>}
          bgImage="/images/cdp/main-banner.jpg"
          navItems={bannerNavItems}
          activePath="/community-development-programme/impact"
          contentMarginTop="25vh"
        />

        <div className={`${styles.pageBackground} pageContentWrapper`}>
          <div className="container">
            <h1 className="sectionTitle_1 text-center mx-800">We measure success in changed lives - and we can show you the numbers.</h1>
            <p className={styles.introPara}>
              We believe donors, partners, and the communities we serve all deserve honesty about what’s working and what isn’t. Here is our impact, verified and updated annually.
            </p>
          </div>
        </div>

        {/* Cumulative Impact */}
        <section className={styles.impactSection}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center d-block">Cumulative Impact Since</h2>
            <ImpactStats data={cumulativeImpacts} animated={true} />

          </div>
        </section>

        {/* Year-on-Year Growth */}
        <section className={`${styles.impactSection} ${styles.altBg}`}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center d-block">Year-on-Year Growth</h2>
            <GrowthCharts />

          </div>
        </section>

        {/* How We Measure Impact */}
        <section className={styles.impactSection}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center d-block">How We Measure Impact</h2>
            <p className={styles.measureIntro}>We track outcomes at three levels:</p>
            <OurValues values={measureImpactValues} title="" className='mt-3' />
            {/* <p className={styles.measureOutro}>
              We conduct [quarterly/annual] outcome surveys and third-party evaluations [VERIFY frequency and evaluator] to ensure our numbers reflect real change, not just activity counts.
            </p> */}
          </div>
        </section>

        {/* Financial Transparency */}
        <section className={`${styles.impactSection} ${styles.altBg}`}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center d-block">Where every rupee goes</h2>

            <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #eaeaea' }}>
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <FinancialChart />
                </div>
                <div className="col-lg-6">
                  <div className={styles.financialList}>
                    {financialData.map((item, idx) => (
                      <div key={idx} className={styles.financialItem}>
                        <span className={styles.finLabel}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.commitmentBox} style={{ marginTop: '50px' }}>
              <p>
                <strong>Our commitment:</strong> We publish audited financials every year, undergo independent statutory audit, and make our registration documents available to any donor or partner on request.
              </p>
            </div>
          </div>
        </section>

        <div className="container px-3">
          <div className={styles.downloadSection}>
            <h2 className={styles.downloadTitle}>Reports & Statements</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#" className={styles.downloadBtn}>
                <i className="bi bi-file-earmark-pdf me-2"></i>Download Annual Report FY 2024-25 (PDF)
              </a>
              <a href="#" className={styles.downloadBtn}>
                <i className="bi bi-file-earmark-pdf me-2"></i>Download Audited Financial Statement FY 2024-25 (PDF)
              </a>
              <a href="#" className={styles.downloadBtn}>
                <i className="bi bi-file-earmark-pdf me-2"></i>View 12A/80G Registration Certificates
              </a>
              <a href="#" className={styles.downloadBtn}>
                <i className="bi bi-file-earmark-pdf me-2"></i>View FCRA Registration Certificate
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container px-3">
            <h2 className="sectionTitle_2 text-center d-block">Your donation, tracked.</h2>
            <Link href="/fund-raising-publicity/donate" className={styles.primaryBtn}>
              Donate and receive a personalised impact update →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
