import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';

export const metadata = {
  title: 'Contact Us | YWCA Delhi Community Development Programme',
  description: 'Get in touch with YWCA Delhi’s Community Development Programme for donations, volunteering, partnerships, or media enquiries.',
};

export default function CDPContactPage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/community-development-programme' },
    { title: 'ABOUT US', icon: 'bi-info-circle', link: '/community-development-programme/about-us' },
    { title: 'PROGRAMS', icon: 'bi-diagram-3', link: '/community-development-programme/programs' },
    { title: 'IMPACT', icon: 'bi-graph-up-arrow', link: '/community-development-programme/impact' },
    { title: 'STORIES', icon: 'bi-book', link: '/community-development-programme/stories' }
  ];

  return (
    <>
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
          activePath="/community-development-programme/contact"
          overlayStyle={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%)', zIndex: 1 }}
        >
        </SideNavBanner>

        <section className={styles.contactSection}>
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-6 col-md-12">
                <div className={styles.leftColumn}>
                  <h1 className="sectionTitle_1 mx-800" style={{ textAlign: 'left', marginBottom: '15px' }}>Let’s Talk</h1>
                  <p className={styles.subText} style={{ fontSize: '1.05rem', marginBottom: '35px' }}>
                    Whether you want to donate, volunteer, explore a CSR partnership, or you’re a journalist working on a story — we’d love to hear from you.
                  </p>

                  <div className={styles.contactCard}>
                    <div className={styles.iconCircle}>
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className={styles.contactInfo}>
                      <span className="mb-1"><strong>General enquiries:</strong> <br /><a href="mailto:info@ywcadelhicdp.org" className="text-muted text-decoration-none small">info@ywcadelhicdp.org</a></span>
                      <span className="mb-1"><strong>Donations & donor relations:</strong> <br /><a href="mailto:donate@ywcadelhicdp.org" className="text-muted text-decoration-none small">donate@ywcadelhicdp.org</a></span>
                      <span className="mb-1"><strong>Volunteering:</strong> <br /><a href="mailto:volunteer@ywcadelhicdp.org" className="text-muted text-decoration-none small">volunteer@ywcadelhicdp.org</a></span>
                      <span className="mb-1"><strong>CSR & partnerships:</strong> <br /><a href="mailto:csr@ywcadelhicdp.org" className="text-muted text-decoration-none small">csr@ywcadelhicdp.org</a></span>
                      <span><strong>Media enquiries:</strong> <br /><a href="mailto:media@ywcadelhicdp.org" className="text-muted text-decoration-none small">media@ywcadelhicdp.org</a></span>
                    </div>
                  </div>

                  <div className={styles.contactCard} style={{ alignItems: 'center !important' }}>
                    <div className={styles.iconCircle}>
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className={styles.contactInfo}>
                      <span><strong>Phone:</strong> <a href="tel:+911123362975" className="text-muted text-decoration-none fw-normal">+91 11 2336 2975</a></span>
                    </div>
                  </div>

                  <div className={styles.contactCard}>
                    <div className={styles.iconCircle}>
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className={styles.contactInfo}>
                      <span className="mb-2"><strong>Office address:</strong> <br /><span className="text-muted fw-normal">YWCA of Delhi, Community Development Programme, 1 Ashoka Road, New Delhi – 110001</span></span>
                      <span><strong>Office hours:</strong> <br /><span className="text-muted fw-normal">Monday–Saturday, 9:30 AM – 5:30 PM</span></span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column (Form) */}
              <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
                <div className={styles.formContainer}>
                  <form>
                    <input type="text" placeholder="Full Name*" className={styles.formInput} required />
                    <input type="email" placeholder="Email*" className={styles.formInput} required />
                    <input type="tel" placeholder="Phone" className={styles.formInput} />

                    <select className={styles.formSelect} required defaultValue="">
                      <option value="" disabled>I’m interested in...</option>
                      <option value="Donating">Donating</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="CSR Partnership">CSR Partnership</option>
                      <option value="Media Enquiry">Media Enquiry</option>
                      <option value="General Question">General Question</option>
                    </select>

                    <textarea placeholder="Message*" className={styles.formTextarea} required></textarea>

                    <button type="button" className={styles.submitBtn}>Submit</button>
                  </form>
                </div>

                <div className="mt-5 pt-2">
                  <h5 className="mb-3 fw-bold" style={{ color: '#2e1c8a' }}>Follow Us</h5>
                  <div className="d-flex gap-2">
                    <a href="#" className="text-secondary d-flex justify-content-center align-items-center rounded-circle" style={{ width: '35px', height: '35px', backgroundColor: '#e9ecef', fontSize: '1.1rem' }}><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-secondary d-flex justify-content-center align-items-center rounded-circle" style={{ width: '35px', height: '35px', backgroundColor: '#e9ecef', fontSize: '1.1rem' }}><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-secondary d-flex justify-content-center align-items-center rounded-circle" style={{ width: '35px', height: '35px', backgroundColor: '#e9ecef', fontSize: '1.1rem' }}><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-secondary d-flex justify-content-center align-items-center rounded-circle" style={{ width: '35px', height: '35px', backgroundColor: '#e9ecef', fontSize: '1.1rem' }}><i className="bi bi-youtube"></i></a>
                    <a href="#" className="text-secondary d-flex justify-content-center align-items-center rounded-circle" style={{ width: '35px', height: '35px', backgroundColor: '#e9ecef', fontSize: '1.1rem' }}><i className="bi bi-twitter-x"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full width bottom section */}
            <div className="mt-5 p-5 rounded bg-white text-center" style={{ border: '1px solid #f2cce6' }}>
              <h2 className="sectionTitle_2 mb-3">For Beneficiaries & Community Members</h2>
              <p className="text-muted mb-4 fs-6">Looking for programme information or want to enrol yourself or a family member in a CDP programme?</p>
              <Link href="/community-development-programme/programs" className={styles.primaryBtn} style={{ display: 'inline-block' }}>
                Find your nearest CDP centre →
              </Link>
              <p className="text-muted mt-4 mb-0 fs-6">or call our community helpline: <strong className="text-dark">+91 11 2336 2975</strong></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
