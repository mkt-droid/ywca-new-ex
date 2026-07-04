import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import SideNavBanner from '@/components/partials/SideNavBanner';

export const metadata = {
  title: 'Fund Raising & Publicity | YWCA of Delhi',
};

export default function FundRaisingPage() {
  const bannerNavItems = [
    { title: 'Overview & Donation', icon: 'bi-flower1', link: '/fund-raising-publicity' },
    { title: 'Support a Cause', icon: 'bi-heart', link: '/fund-raising-publicity/support-a-cause' },
    { title: 'The ReHome Store', icon: 'bi-shop', link: '/fund-raising-publicity/the-rehome-store' },
    { title: 'Eco-Justice Lab', icon: 'bi-tree', link: '/fund-raising-publicity/eco-justice-lab' },
    { title: 'Volunteer & Partnership', icon: 'bi-people', link: '/fund-raising-publicity/volunteer-and-partnership' },
    { title: 'Events & Announcements', icon: 'bi-calendar-event', link: '/fund-raising-publicity/events-and-announcements' },
  ];

  return (
    <main>
      <SideNavBanner
        title={
          <>
            SUPPORT WOMEN<br />
            SUPPORT SUSTAINABILITY<br />
            SUPPORT CHANGE
          </>
        }
        bgImage="/images/fund-raising/main-banner.jpg"
        navItems={bannerNavItems}
        activePath="/fund-raising-publicity"
      />

      <div className={styles.contentWrapper}>
        {/* Overview Section */}
        <section className={styles.sectionPadding}>
          <div className="container">
            <h2 className={styles.overviewTitle}>OVERVIEW</h2>
            <p className={styles.overviewText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.
            </p>
          </div>
        </section>

        {/* Small Help Section */}
        <section className={styles.helpSection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0 pr-md-5">
                <h2 className={styles.helpTitle}>Your Small Help can brighten<br />up some one's life</h2>
                <p className={styles.helpText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Link href="/fund-raising-publicity/donate" className={styles.primaryBtn}>
                  <i className="bi bi-heart-fill"></i> Donate Us
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/fund-raising/small-help.png"
                  alt="Help brightens someone's life"
                  className={styles.imageBox}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Registration & Compliance Documents Section */}
        <section className="container">
          <div className={styles.complianceSection}>
            <h2 className={styles.complianceTitle}>Registration & Compliance Documents</h2>
            <div className={styles.complianceBtns}>
              <Link href="#" className={styles.purpleBtn}>80G Certificate</Link>
              <Link href="#" className={styles.purpleBtn}>CSR Eligibility Documents</Link>
              <Link href="#" className={styles.purpleBtn}>NGO Registration Certificates</Link>
            </div>
          </div>
        </section>

        {/* Event Gallery */}
        <section className={styles.sectionPaddingWhite}>
          <div className="container">
            <div className="row align-items-center flex-column-reverse flex-md-row">
              <div className="col-md-6 mt-4 mt-md-0">
                <img
                  src="/images/fund-raising/thumb-1.png"
                  alt="Event Gallery"
                  className={styles.imageBox}
                />
              </div>
              <div className="col-md-6 pl-md-5">
                <h2 className={styles.helpTitle}>Event gallery</h2>
                <p className={styles.helpText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                </p>
                <Link href="/fund-raising-publicity/events-and-announcements" className={styles.primaryBtn}>
                  More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer with us */}
        <section className={styles.helpSection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0 pr-md-5">
                <h2 className={styles.helpTitle}>Volunteer with us</h2>
                <p className={styles.helpText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                </p>
                <Link href="/fund-raising-publicity/volunteer-and-partnership" className={styles.primaryBtn}>
                  More
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/fund-raising/thumb-2.png"
                  alt="Volunteer with us"
                  className={styles.imageBox}
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
