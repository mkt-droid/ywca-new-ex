import React from 'react';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export const metadata = {
  title: 'Admission Enquiry | Education Institute | YWCA of Delhi',
};

export default function AdmissionPage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-flower1', link: '/education-institute' },
    { title: 'Programs', icon: 'bi-mortarboard', link: '/education-institute/programs' },
    { title: 'Admission', icon: 'bi-person-vcard', link: '/education-institute/admission' },
    { title: 'Life@YWCA', icon: 'bi-building', link: '#' },
    { title: 'Student Corner', icon: 'bi-people', link: '#' },
    { title: 'Contact us', icon: 'bi-telephone', link: '/education-institute/contact' },
  ];

  return (
    <main>
      {/* Banner Section */}
      <SideNavBanner
        height="380px"
        title={
          <>
            EDUCATIONAL<br />INSTITUTE
          </>
        }
        bgImage="/images/education-institute/aca-bnr.jpg"
        navItems={bannerNavItems}
        activePath="/education-institute/admission"
      />

      <section className={styles.admissionSection}>
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12">
              <div className={styles.leftColumn}>
                <h2 className={styles.heading}>Admission enquiry</h2>
                <p className={styles.subText}>
                  Connect Curriculum To Careers<br />
                  Strengthen Employment Outcomes<br />
                  Enhance Learning Experiences
                </p>

                <div className={styles.contactCard}>
                  <div className={styles.iconCircle}>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <span>admission@domain.com</span>
                    <span>enroll@domain.com</span>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.iconCircle}>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <span>011-66664444</span>
                    <span>+91-9999888822</span>
                  </div>
                </div>

                <p className={styles.bottomText}>
                  "No Other Institution Offers Students The Same Breadth Of Learning Opportunities As YWCA. Our Programs Are Thoughtfully Designed To Align With Industry Needs, Making Them Highly Relevant To Students' Career Aspirations. YWCA Also Plays A Vital Role In Bridging The Gap Between Education And Meaningful Employment."
                </p>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="col-lg-6 col-md-12">
              <div className={styles.formContainer}>
                <form>
                  <input type="text" placeholder="Your name" className={styles.formInput} />
                  <input type="text" placeholder="Your phone" className={styles.formInput} />
                  <input type="email" placeholder="Your email" className={styles.formInput} />
                  <input type="text" placeholder="Which best describe your need" className={styles.formInput} />
                  <textarea placeholder="Your comment" className={styles.formTextarea}></textarea>

                  <button type="button" className={styles.submitBtn}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
