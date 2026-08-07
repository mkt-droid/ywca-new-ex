import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export const metadata = {
  title: 'Beneficiary Stories | Real Women, Real Change | YWCA Delhi CDP',
  description: 'Read real stories of women and girls from Delhi’s urban settlements whose lives have changed through YWCA Delhi’s Community Development Programme.',
};

export default function CDPStoriesPage() {
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
      <main>
        <SideNavBanner
          height="360px"
          title={<>STORIES<br />CDP</>}
          bgImage="/images/cdp/main-banner.jpg"
          navItems={bannerNavItems}
          activePath="/community-development-programme/stories"
          contentMarginTop="25vh"
        />

        <div className={`${styles.pageBackground} pageContentWrapper`}>
          <div className="container">
            <h1 className="sectionTitle_1 text-center mx-800">These are not case studies. These are her words, her journey, her win.</h1>
            <p className={styles.introPara}>
              All names below are used with consent; some have been changed at the individual’s request to protect privacy. Photographs are used with informed, written consent.
            </p>
          </div>
        </div>

        {/* Story 1 */}
        <section className={styles.storySection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <img src="/images/board-member-thumb.jpg" alt="Sunita's Sewing Machine" className="img-fluid rounded shadow" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
              </div>
              <div className="col-lg-7 ps-lg-5">
                <h2 className="sectionTitle_2" style={{ marginBottom: '10px' }}>Sunita’s Sewing Machine</h2>
                <h3 className={`sectionTitle_3 ${styles.storySubtitle}`}>From asking for ₹10 to running her own tailoring unit</h3>
                <p className={styles.storyText}>
                  Sunita, 34, lives in Sangam Vihar with her husband, a daily-wage electrician, and their two children. For over a decade, her days revolved entirely around the house - she had no independent income and relied on her husband for even the smallest purchases.
                </p>
                <p className={styles.storyText}>
                  In 2022, a CDP community worker visited her lane and invited women to a free tailoring orientation. Sunita almost didn’t go - “I thought, what use is stitching to me at this age?” Three months of training later, she could stitch salwar suits to order. Six months after that, with a small loan facilitated through her Self-Help Group, she bought her second sewing machine and began training two younger women from her own street.
                </p>
                <div className={styles.storyQuote}>
                  “I used to ask my husband for ₹10 to buy vegetables. Now I run my own tailoring unit and employ two other women. My daughter has seen me sign my own bank passbook. That changes what she believes is possible for herself.”
                </div>
                <p className={styles.storyText}>
                  Today, Sunita earns approximately ₹8,000-10,000 a month and has enrolled her daughter in a computer skills class through CDP’s education track.
                </p>
                <div className={styles.storyAction}>
                  <Link href="/fund-raising-publicity/donate" className={styles.primaryBtn}>
                    Support More Women Like Sunita →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story 2 */}
        <section className={`${styles.storySection} ${styles.altBg}`}>
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <img src="/images/board-member-thumb.jpg" alt="Reshma's Second Chance" className="img-fluid rounded shadow" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
              </div>
              <div className="col-lg-7 pe-lg-5">
                <h2 className="sectionTitle_2" style={{ marginBottom: '10px' }}>Reshma’s Second Chance at School</h2>
                <h3 className={`sectionTitle_3 ${styles.storySubtitle}`}>Pulled out at 13. Back in school at 15 - with a plan.</h3>
                <p className={styles.storyText}>
                  Reshma was withdrawn from school in Class 8 to help care for younger siblings while her mother worked as domestic help. For two years, her days had no structure and few options.
                </p>
                <p className={styles.storyText}>
                  A CDP field coordinator identified Reshma through door-to-door outreach and enrolled her in the bridge education programme, which combines remedial academics with confidence-building and career counselling. Within eight months, Reshma cleared the assessment required to rejoin formal schooling in Class 9.
                </p>
                <div className={styles.storyQuote}>
                  “I didn’t think I’d ever go back. Now I want to become a nurse. My didi at CDP told me my age doesn’t decide my future - my effort does.”
                </div>
                <div className={styles.storyAction}>
                  <Link href="/fund-raising-publicity/donate" className={styles.primaryBtn}>
                    Sponsor a Girl’s Education →
                  </Link>
                  <div style={{ marginTop: '8px', fontSize: '0.85rem', color: '#666', paddingLeft: '15px' }}>
                    ₹800/month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story 3 */}
        <section className={styles.storySection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <img src="/images/board-member-thumb.jpg" alt="Meena's Self-Help Group" className="img-fluid rounded shadow" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
              </div>
              <div className="col-lg-7 ps-lg-5">
                <h2 className="sectionTitle_2" style={{ marginBottom: '10px' }}>Meena’s Self-Help Group</h2>
                <h3 className={`sectionTitle_3 ${styles.storySubtitle}`}>From isolated homemaker to elected community representative</h3>
                <p className={styles.storyText}>
                  Meena joined a CDP-facilitated Self-Help Group in Govindpuri primarily to save small amounts of money safely. Over two years, regular SHG meetings became a space where she and other women discussed household issues, local infrastructure problems, and eventually, local governance.
                </p>
                <p className={styles.storyText}>
                  In 2023, Meena was elected as her SHG’s representative to a ward-level community forum - the first time a woman from her lane had held such a role.
                </p>
                <div className={styles.storyQuote}>
                  “Earlier, decisions about our lane’s water supply were made without asking us. Now, I sit in that meeting.”
                </div>
                <div className={styles.storyAction}>
                  <Link href="/fund-raising-publicity/donate" className={styles.primaryBtn}>
                    Back a Self-Help Group →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Stories */}
        <section className={styles.videoSection}>
          <div className="container">
            <h2 className="sectionTitle_2 text-center" style={{ color: 'white' }}>Video Testimonials</h2>
            <div className="row justify-content-center mt-5">
              <div className="col-md-4 mb-4">
                <div className={styles.videoPlaceholder}>
                  <i className="bi bi-play-circle-fill"></i>
                </div>
                <p className={styles.videoCaption}>Sunita shares her journey<br /><span style={{ opacity: 0.7, fontSize: '0.85rem' }}>Used with informed consent</span></p>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.videoPlaceholder}>
                  <i className="bi bi-play-circle-fill"></i>
                </div>
                <p className={styles.videoCaption}>Reshma talks about returning to school<br /><span style={{ opacity: 0.7, fontSize: '0.85rem' }}>Used with informed consent</span></p>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.videoPlaceholder}>
                  <i className="bi bi-play-circle-fill"></i>
                </div>
                <p className={styles.videoCaption}>Meena on leadership in Govindpuri<br /><span style={{ opacity: 0.7, fontSize: '0.85rem' }}>Used with informed consent</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section className={styles.shareStorySection}>
          <div className="container">
            <div className={styles.shareCard}>
              <div className={styles.shareIcon}>
                <i className="bi bi-chat-quote-fill"></i>
              </div>
              <h2 className="sectionTitle_2 text-center" style={{ marginBottom: '15px' }}>Share Your Story</h2>
              <p className="mb-4" style={{ color: '#555', fontSize: '1.15rem' }}>Are you a CDP alumna with a story to share?</p>
              <Link href="/contact" className={styles.primaryBtn}>
                Get in touch →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.ctaSection}>
          <div className="container px-3">
            <h2 className="sectionTitle_2 text-center" style={{ maxWidth: '800px', margin: '0 auto 25px auto', lineHeight: '1.4' }}>Every story here started with someone who gave, volunteered, or believed.</h2>
            <Link href="/fund-raising-publicity/donate" className={styles.primaryBtn}>
              Be the reason for the next one →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
