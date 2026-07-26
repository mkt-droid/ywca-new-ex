"use client";

import React from 'react';
import InnerPageBanner from '@/components/partials/InnerPageBanner';
import styles from './page.module.css';
import Link from 'next/link';

export default function JoinUsPage() {
  const joinOptions = [
    {
      title: 'Be a Member',
      desc: 'Join our community and support our mission for empowerment and equality.',
      icon: 'bi-person-heart',
      link: '/membership-and-programs'
    },
    {
      title: 'Be a Volunteer',
      desc: 'Give your time and skills to make a real positive impact in society.',
      icon: 'bi-people',
      link: '/join-us/be-a-volunteer'
    },
    {
      title: 'Donate us',
      desc: 'Your valuable contributions help us sustain and expand our social initiatives.',
      icon: 'bi-box2-heart',
      link: '/fund-raising-publicity'
    },
    {
      title: 'Work With Us',
      desc: 'Explore career opportunities and work with our dedicated professional team.',
      icon: 'bi-person-workspace',
      link: '/contact-us'
    },
    {
      title: 'Intern With Us',
      desc: 'Gain valuable experience by contributing to our various ongoing projects.',
      icon: 'bi-journal-bookmark',
      link: '/contact-us'
    },
    {
      title: 'Partner / Collaborate',
      desc: 'Collaborate with us to create broader social change and public awareness.',
      icon: 'bi-briefcase',
      link: '/contact-us'
    }
  ];

  return (
    <main>
      <InnerPageBanner
        title={<>JOIN US<br /> YWCA</>}
        bgImage="/images/01-Banner-insights-pub.jpg"
        contentMarginTop="25vh"
        defaultGrayscale={true}
      />

      <div className={styles.pageContentWrapper}>
        <section className={styles.sectionPadding}>
          <div className="container">
            <h2 className={styles.overviewTitle}>Join Us</h2>

            <div className={styles.overviewText} style={{ marginBottom: '40px' }}>
              <p>There are many ways to support our mission. Choose an opportunity that aligns with your passion and help us make a difference.</p>
            </div>

            {/* The 6 Boxes */}
            <div className="row g-4">
              {joinOptions.map((option, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className={styles.boxCard}>
                    <div className={styles.iconWrapper}>
                      <i className={`bi ${option.icon}`}></i>
                    </div>
                    <h4 className={styles.boxTitle}>{option.title}</h4>
                    <p className={styles.boxDesc}>{option.desc}</p>
                    <Link href={option.link} className={styles.viewMoreBtn}>
                      View More <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
