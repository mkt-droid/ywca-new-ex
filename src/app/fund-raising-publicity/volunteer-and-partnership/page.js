import React from 'react';
import SideNavBanner from '@/components/partials/SideNavBanner';
import styles from './page.module.css';

export const metadata = {
  title: 'Volunteer & Partnership | YWCA of Delhi',
};

export default function VolunteerAndPartnershipPage() {
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
        activePath="/fund-raising-publicity/volunteer-and-partnership"
      />

      <div className={styles.contentWrapper}>
        <section className={styles.sectionPadding}>
          <div className="container">
            <h2 className={styles.pageTitle}>VOLUNTEER & PARTNERSHIP</h2>
            <p className={styles.pageDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.
            </p>

            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <div className={styles.iconWrapper}>
                  <i className="bi bi-person-fill"></i>
                </div>
                <div>
                  <h3 className={styles.formTitle}>Volunteer application form</h3>
                  <p className={styles.formSubtitle}>Please fill in your details to proceed</p>
                </div>
              </div>

              <form>
                <div className="row">
                  {/* Row 1 */}
                  <div className="col-md-2">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Title <span className={styles.requiredStar}>*</span>
                      </label>
                      <select className={styles.formSelect} required>
                        <option value="">Select Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Full Name <span className={styles.requiredStar}>*</span>
                      </label>
                      <input type="text" className={styles.formControl} required />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Mobile Number <span className={styles.requiredStar}>*</span>
                      </label>
                      <input type="tel" className={styles.formControl} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Email Address <span className={styles.requiredStar}>*</span>
                      </label>
                      <input type="email" className={styles.formControl} required />
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Row 2 */}
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Organization / Institution Name</label>
                      <input type="text" className={styles.formControl} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Designation</label>
                      <input type="text" className={styles.formControl} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Website / Social Media (if applicable)</label>
                      <input type="text" className={styles.formControl} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Row 3 */}
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Choose your area of interest</label>
                      <select className={styles.formSelect}>
                        <option value="">Select</option>
                        {/* Options */}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Choose your Donation / Contribution Details</label>
                      <select className={styles.formSelect}>
                        <option value="">Select</option>
                        {/* Options */}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Choose your Availability / Timeline</label>
                      <select className={styles.formSelect}>
                        <option value="">Select</option>
                        {/* Options */}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Row 4 */}
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Preferred Start Date</label>
                      <select className={styles.formSelect}>
                        <option value="">Select</option>
                        {/* Options */}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Upload Supporting Documents</label>
                      <div className={styles.fileUploadWrapper}>
                        <input type="file" className={styles.fileInput} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button type="submit" className={styles.submitBtn}>Submit</button>
                  <span className={styles.termsText}>
                    By clicking on button, you agree to our <a href="#" className={styles.termsLink}>Terms & Conditions</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
