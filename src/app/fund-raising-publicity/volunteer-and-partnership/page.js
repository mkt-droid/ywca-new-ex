import React from 'react';
import SideNavBanner from '@/components/partials/SideNavBanner';
import MultiSelectDropdown from '@/components/partials/MultiSelectDropdown';
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

  const interestOptions = [
    { label: 'Volunteer with YWCA of Delhi', value: 'Volunteer with YWCA of Delhi' },
    { label: 'CSR Partnership', value: 'CSR Partnership' },
    { label: 'Corporate Donation', value: 'Corporate Donation' },
    { label: 'Internship Opportunity', value: 'Internship Opportunity' },
    { label: 'In-Kind Donation', value: 'In-Kind Donation' },
    { label: 'Event Collaboration', value: 'Event Collaboration' },
    { label: 'Sustainability & Waste Management Initiatives', value: 'Sustainability & Waste Management Initiatives' },
    { label: 'Skill Development Programs', value: 'Skill Development Programs' },
    { label: 'Community Outreach Activities', value: 'Community Outreach Activities' },
    { label: 'Other', value: 'Other' },
  ];

  const donationOptions = [
    { label: 'Financial Contribution', value: 'Financial Contribution' },
    { label: 'Products / Materials', value: 'Products / Materials' },
    { label: 'Professional Services', value: 'Professional Services' },
    { label: 'Sponsorship Support', value: 'Sponsorship Support' },
    { label: 'Venue / Logistics Support', value: 'Venue / Logistics Support' },
    { label: 'Educational Materials', value: 'Educational Materials' },
    { label: 'Other', value: 'Other' },
  ];

  return (
    <main>
      <SideNavBanner
        height="360px"
        title={
          <>
            SUPPORT WOMEN<br />SUPPORT SUSTAINABILITY<br />
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
            <h1 className="sectionTitle_1 text-center mx-800">VOLUNTEER & PARTNERSHIP</h1>
            <p className={styles.pageDescription}>
              Join hands with us to create lasting change and empower communities together.
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
                      <MultiSelectDropdown options={interestOptions} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Choose your Donation / Contribution Details</label>
                      <MultiSelectDropdown options={donationOptions} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Preferred Duration / Timeline</label>
                      <select className={styles.formSelect}>
                        <option value="">Select</option>
                        <option value="One-time Support">One-time Support</option>
                        <option value="Short-term Collaboration">Short-term Collaboration</option>
                        <option value="Long-term Partnership">Long-term Partnership</option>
                        <option value="Ongoing Volunteering">Ongoing Volunteering</option>
                        <option value="Internship (1-3 Months)">Internship (1-3 Months)</option>
                        <option value="Internship (3-6 Months)">Internship (3-6 Months)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Row 4 */}
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Preferred Start Date</label>
                      <input type="date" className={styles.formControl} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Supporting Documents (Optional)</label>
                      <div className={styles.fileUploadWrapper}>
                        <input type="file" className={styles.fileInput} />
                      </div>
                      <p className={styles.helpText}>
                        <strong>Examples:</strong> Company Profile, CSR Proposal, Resume/CV, Portfolio, Partnership Deck, Donation Details
                      </p>
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
