import React from 'react';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export const metadata = {
  title: 'Contact Us | Blue Triangle Family Hostel | YWCA of Delhi',
  description: 'Book your stay at Blue Triangle Family Hostel in Central Delhi. Clean, secure, and affordable accommodation for women and families.',
};

export default function ContactPage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/blue-triangle' },
    { title: 'Room Booking', icon: 'bi-door-closed', link: '/blue-triangle/room-booking' },
    { title: 'Meeting & Event Spaces', icon: 'bi-people', link: '/blue-triangle/meeting-event-spaces' },
    { title: 'Explore Delhi', icon: 'bi-geo-alt', link: '/blue-triangle/explore-delhi' },
    { title: 'Contact Us', icon: 'bi-telephone', link: '/blue-triangle/contact' },
  ];

  return (
    <main>
      {/* Banner Section */}
      <SideNavBanner
        height="360px"
        title={
          <>
            CONTACT<br />US
          </>
        }
        bgIframe="https://maps.google.com/maps?q=YWCA%20of%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        navItems={bannerNavItems}
        activePath="/blue-triangle/contact"
        overlayStyle={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%)', zIndex: 1 }}
      >
      </SideNavBanner>

      <section className={styles.contactSection}>
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12">
              <div className={styles.leftColumn}>
                <h2 className="sectionTitle_2" style={{ textAlign: 'left', marginBottom: '15px' }}>
                  Book your stay
                </h2>
                <p className={styles.subText}>
                  Located in Central Delhi, Blue Triangle Family Hostel offers clean, secure, and affordable accommodation for women and families. Backed by YWCA’s trusted legacy, it’s a perfect blend of comfort and care.
                </p>

                {/* Address */}
                <div className={styles.contactCard}>
                  <div className={styles.iconCircle}>
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <strong>Address:</strong>
                    <span>1, Ashoka Road, New Delhi-110001</span>
                  </div>
                </div>

                {/* Phone & Mobile */}
                <div className={styles.contactCard}>
                  <div className={styles.iconCircle}>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <strong>Phone / Mob:</strong>
                    <span>011-23360133, 23365014, 23365441 &nbsp;|&nbsp; +91 7011299044</span>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.contactCard}>
                  <div className={styles.iconCircle}>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <strong>Email:</strong>
                    <a href="mailto:btfh@ywcaofdelhi.org" className={styles.contactLink}>
                      btfh@ywcaofdelhi.org
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className={styles.contactCard}>
                  <div className={styles.iconCircle}>
                    <i className="bi bi-globe"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <strong>Website:</strong>
                    <a 
                      href="https://www.ywcaofdelhi.org" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.contactLink}
                    >
                      www.ywcaofdelhi.org
                    </a>
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
