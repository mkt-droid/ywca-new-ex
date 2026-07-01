import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import PlacementPartners from '@/components/PlacementPartners';
import EducationFooterLinks from '@/components/EducationFooterLinks';

export const metadata = {
  title: 'Education Institute | YWCA of Delhi',
};

export default function EducationInstitutePage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-flower1', link: '/education-institute' },
    { title: 'Programs', icon: 'bi-mortarboard', link: '/education-institute/programs' },
    { title: 'Admission', icon: 'bi-person-vcard', link: '/education-institute/admission' },
    { title: 'Life@YWCA', icon: 'bi-building', link: '#' },
    { title: 'Contact us', icon: 'bi-telephone', link: '/education-institute/contact' },
  ];

  const academicNews = [
    {
      id: 1,
      image: '/images/education-institute/aca-1.jpg',
      title: 'Academic News heading will go here'
    },
    {
      id: 2,
      image: '/images/education-institute/aca-2.jpg',
      title: 'Academic News heading will go here'
    },
    {
      id: 3,
      image: '/images/education-institute/aca-1.jpg',
      title: 'Academic News heading will go here'
    },
    {
      id: 4,
      image: '/images/education-institute/aca-3.jpg',
      title: 'Academic News heading will go here'
    }
  ];

  const alumni = [
    {
      id: 1,
      name: 'Name Surname',
      designation: 'Designation/Organization',
      quote: "Lorem elit in mollis integer id cursus. Elit enim magna aliquet aenean. Adipiscing magna felis lorem integer."
    },
    {
      id: 2,
      name: 'Name Surname',
      designation: 'Designation/Organization',
      quote: "Lorem elit in mollis integer id cursus. Elit enim magna aliquet aenean. Adipiscing magna felis lorem integer."
    },
    {
      id: 3,
      name: 'Name Surname',
      designation: 'Designation/Organization',
      quote: "Lorem elit in mollis integer id cursus. Elit enim magna aliquet aenean. Adipiscing magna felis lorem integer."
    },
    {
      id: 4,
      name: 'Name Surname',
      designation: 'Designation/Organization',
      quote: "Lorem elit in mollis integer id cursus. Elit enim magna aliquet aenean. Adipiscing magna felis lorem integer."
    }
  ];

  return (
    <main>
      {/* Banner Section with Enquiry Form */}
      <SideNavBanner
        bgImage="/images/education-institute/aca-bnr.jpg"
        navItems={bannerNavItems}
        sectionStyle={{ overflow: 'visible' }}
        activePath="/education-institute"
      >
        <div className={styles.bannerContent}>
          <div className={styles.enquiryFormCard}>
            <h3 className={styles.formTitle}>Enquiry form</h3>
            <form>
              <input type="text" placeholder="Your name" className={styles.formInput} />
              <input type="text" placeholder="Your phone" className={styles.formInput} />
              <input type="email" placeholder="Your email" className={styles.formInput} />
              <input type="text" placeholder="Course Interested" className={styles.formInput} />
              <textarea placeholder="Your comment" className={styles.formTextarea} rows="3"></textarea>
              <button type="button" className={styles.submitBtn}>Submit</button>
            </form>
          </div>
        </div>
      </SideNavBanner>

      {/* About Section */}
      <section className={`container mb-5 text-center ${styles.aboutSection}`} style={{ marginTop: '120px' }}>
        <h2 className={styles.sectionTitle}>About YWCA Institute</h2>
        <p className={styles.sectionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions.
        </p>
      </section>

      {/* Academic News Section */}
      <section className="container mb-5">
        <h2 className={`${styles.sectionTitle} text-center`}>Academic News</h2>
        <div className="row mt-4">
          {academicNews.map(news => (
            <div className="col-md-3 mb-4" key={news.id}>
              <div className={styles.newsCard}>
                <img src={news.image} alt="Academic News" className={styles.newsImage} />
                <div className={styles.newsContent}>
                  <h5 className={styles.newsTitle} style={{ fontSize: '1rem', fontWeight: 'normal', margin: 0 }}>{news.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Programs Section */}
      <section className={styles.learningSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 text-center pr-lg-5">
              <h2 className={styles.learningTitle}>Learning Programs - Unlock Your Full<br />Potential, Join Now</h2>
              <p className={styles.learningText}>
                Welcome to YWCA Academy, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to the success.
              </p>
              <button className={styles.startLearningBtn}>Start your learning journey</button>

              <div className={styles.pillsContainer}>
                <span className={styles.pillLine}>Interior Designing</span>
                <span className={styles.pillLine}>Health Care Sector</span>
                <span className={styles.pillLine}>Beauty & Wellness</span>
                <span className={styles.pillLine}>Office Management</span>
                <span className={styles.pillLine}>Information Technology</span>
                <span className={styles.pillLine}>Fashion Technology</span>
                <span className={styles.pillLine}>Travel & Tourism</span>
                <span className={styles.pillLine}>Personality Dev</span>
                <span className={styles.pillLine}>Foreign Languages</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center position-relative">
              <img src="/images/education-institute/pills-image.png" alt="Learning Programs" className={styles.learningImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whyUsSection}>
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>Why Us?</h2>
          <div className={styles.whyUsGrid}>
            <span className={styles.whyUsPill}>Career Focused Learning</span>
            <span className={styles.whyUsPill}>Industrial Exposure</span>
            <span className={styles.whyUsPill}>50+ year Legacy</span>
            <span className={styles.whyUsPill}>Expert Faculty Guidance</span>
            <span className={styles.whyUsPill}>AI Integrated Curriculum</span>
            <span className={styles.whyUsPill}>Placement Assistance</span>
            <span className={styles.whyUsPill}>Well Equipped Lab and <br/> AC Classrooms</span>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="container mt-5 mb-5 text-center">
        <h2 className={styles.sectionTitle} style={{ fontWeight: 400, color: '#222', fontSize: '32px' }}>Our Alumni Are Shaping The Future</h2>
        <div className="row mt-4">
          {alumni.map(person => (
            <div className="col-md-3 col-sm-6 mb-4" key={person.id}>
              <div className={styles.alumniCard}>
                <img src="/images/education-institute/alumani.jpg" alt="Alumni" className={styles.alumniImage} />
                <div className={styles.alumniContent}>
                  <h5 className={styles.alumniName}>{person.name}</h5>
                  <p className={styles.alumniDesignation}>{person.designation}</p>
                  <hr className={styles.alumniDivider} />
                  <p className={styles.alumniQuote}>{person.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/education-institute/alumni" className={styles.viewMoreBtn}>
            View more
          </Link>
        </div>
      </section>

      {/* Placement Partners */}
      <PlacementPartners />

      {/* Footer Links Section */}
      <EducationFooterLinks />
    </main>
  );
}
