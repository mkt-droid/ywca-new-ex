import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export const metadata = {
  title: 'Public Affairs and Social Issues | YWCA of Delhi',
};

export default function PublicAffairsPage() {
  const programs = [
    { id: 1, title: 'World Environment Day Celebration', date: '2026 - 13th June 2026', image: '/images/pasi/article-thumb.jpg' },
    { id: 2, title: 'World Environment Day Celebration', date: '2026 - 13th June 2026', image: '/images/pasi/article-thumb.jpg' },
    { id: 3, title: 'World Environment Day Celebration', date: '2026 - 13th June 2026', image: '/images/pasi/article-thumb.jpg' },
    { id: 4, title: 'World Environment Day Celebration', date: '2026 - 13th June 2026', image: '/images/pasi/article-thumb.jpg' },
    { id: 5, title: 'World Environment Day Celebration', date: '2026 - 13th June 2026', image: '/images/pasi/article-thumb.jpg' },
  ];

  return (
    <main>
      <SideNavBanner
        height="360px"
        title={<>PUBLIC AFFAIRS<br />AND SOCIAL ISSUES</>}
        bgImage="/images/01-Banner-Pasi.jpg"
        contentMarginTop="35vh"
      />

      <div className="pageContentWrapper">
        <section className={styles.sectionPadding}>
          <div className="container">
            <div className={styles.headerText}>
              <h1 className="sectionTitle_1 text-center mx-800">Social Engagement & Advocacy</h1>
          <p className={styles.subHeading}>
            Violence is a fundamental instrument of patriarchy, and its multiple forms of systemic oppression are
            deeply interconnected. The Public Affairs and Social Issues (PASI) Department of the YWCA of Delhi
            responds to these realities by studying community conditions that impact women and girls and
            encouraging collective awareness and action for their empowerment, dignity, and well-being.
          </p>
        </div>

        <div className={`row align-items-center ${styles.contentRow}`}>
          <div className="col-md-6 mb-4 mb-md-0">
            <p className={styles.paragraphText}>
              As an integral part of the YWCA, PASI functions as a platform for social engagement and advocacy,
              working towards the extension of the values of justice, equality, and compassion. The department actively
              engages with public issues that are critical to women and girls, with a strong commitment to building a
              more just and inclusive society.
              All PASI initiatives are rooted in the principles of gender equality, social justice, and community
              development. The department collaborates with NGOs and civil society organisations across India
              working in the areas of women’s rights and empowerment, strengthening collective responses to pressing
              social challenges.
              Through awareness generation, dialogue, and partnerships, PASI plays a vital role in highlighting critical
              social issues affecting women and society at large, while fostering informed action and community-led
              change.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/images/pasi/about-img.jpeg" alt="Social Engagement" className={styles.aboutImg} />
          </div>
          </div>
          </div>
        </section>

        <section className={styles.programsSection}>
        <div className="container text-center">
          <h2 className='sectionTitle_2 text-center'>Our Programs</h2>
          <div className="row justify-content-center mt-4">
            {/*
            {programs.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                <Link href="#" className={styles.programCardLink}>
                  <div className={styles.programCard}>
                    <div className={styles.cardImageWrapper}>
                      <img src={item.image} alt={item.title} className={styles.cardImage} />
                    </div>
                    <div className={styles.cardBody}>
                      <h5 className={styles.cardTitle}>{item.title}</h5>
                      <p className={styles.cardDate}>{item.date}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            */}

            <div className="col-md-6 col-lg-5 mb-4">
              <Link href="/public-affairs-and-social-issues/rights-resistance-freedom" className={styles.newProgramLink}>
                <div className={styles.newProgramCard}>
                  <img src="/images/pasi/Rights-Resistance-Freedom-Gallery/1.jpg" alt="Rights • Resistance • Freedom" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                  <div className={styles.newCardIconWrapper}>
                    <i className="bi bi-chat-quote-fill"></i>
                  </div>
                  <h3 className={styles.newCardTitle}>Rights • Resistance • Freedom</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-5 mb-4">
              <Link href="/public-affairs-and-social-issues/world-environment-day-celebration-2026" className={styles.newProgramLink}>
                <div className={styles.newProgramCard}>
                  <img src="/images/pasi/PASI-World-Environment%20Day-Celebration-Gallery/5.jpg" alt="World Environment Day Celebration 2026" className="img-fluid rounded mb-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                  <div className={styles.newCardIconWrapper}>
                    <i className="bi bi-globe"></i>
                  </div>
                  <h3 className={styles.newCardTitle}>World Environment Day Celebration 2026</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
        </section>
      </div>
    </main>
  );
}
