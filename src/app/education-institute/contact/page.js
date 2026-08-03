import React from 'react';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export const metadata = {
  title: 'Contact Us | Education Institute | YWCA of Delhi',
};

export default function ContactPage() {
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
            CONTACT<br />US
          </>
        }
        bgIframe="https://maps.google.com/maps?q=YWCA%20of%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        navItems={bannerNavItems}
        activePath="/education-institute/contact"
        overlayStyle={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%)', zIndex: 1 }}
      >

      </SideNavBanner>

      <section className={styles.contactSection}>
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12">
              <div className={styles.leftColumn}>
                <h2 className={styles.heading}>Contact YWCA Institute</h2>
                <p className={styles.subText}>
                  It Has Been A Hundred Years Since The YWCA Of Delhi Has Established Itself Firmly On The Social Sector Map Alongside Other Great Institutions. The Core Values Of YWCA Of Delhi Such As Emancipation Of The Scores Of Under Privileged, Economically Weak And Distressed People Of Society Of This Institution Have Remained Consistent Over The Past Century.
                </p>

                <div className={styles.contactCard}>
                  <div className={styles.iconCircle}>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <span>email@domain.com</span>
                    <span>email@domain.com</span>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.iconCircle}>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <span>011-66664444</span>
                    <span>011-66668888</span>
                  </div>
                </div>
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
