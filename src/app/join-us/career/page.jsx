"use client";

import React from 'react';
import InnerPageBanner from '@/components/partials/InnerPageBanner';
import styles from './page.module.css';

export default function CareerPage() {
  const scrollToJob = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main>
      <InnerPageBanner
        title={<>CAREERS</>}
        bgImage="/images/join-us/main-banner.jpeg"
        contentMarginTop="25vh"
        overlayColor="linear-gradient(to right, rgba(146, 45, 157, 0.85), rgba(146, 45, 157, 0.4))"
        defaultGrayscale={false}
      />

      <div className={styles.pageContentWrapper}>
        <div className="container">
          <div className={styles.careerContainer}>
            
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.stickySidebar}>
                <div className={styles.latestOpenings}>
                  <div className={styles.latestOpeningsHeader}>
                    <span>Latest Openings</span>
                    <span className={styles.openingCount}>2 Active</span>
                  </div>
                  <ul className={styles.latestOpeningsList}>
                    <li onClick={() => scrollToJob('job-cao')} className={styles.openingItem}>
                      <div>
                        <div className={styles.openingTitle}>Chief Accounts Officer</div>
                        <div className={styles.openingMeta}>Full Time • New Delhi</div>
                      </div>
                      <span className={styles.newBadge}>New</span>
                    </li>
                    <li onClick={() => scrollToJob('job-resident-secretary')} className={styles.openingItem}>
                      <div>
                        <div className={styles.openingTitle}>Resident Secretary</div>
                        <div className={styles.openingMeta}>Full Time (Residential)</div>
                      </div>
                      <span className={styles.newBadge}>New</span>
                    </li>
                  </ul>
                </div>

                <div className={styles.helpBox}>
                  <h4>Need Help with Application?</h4>
                  <p>Check the guidelines or contact us if you face any issues while applying.</p>
                  <a href="/contact-us" className={styles.contactBtn}>Contact Us</a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className={styles.mainContent}>
              
              {/* JOB 1: Chief Accounts Officer */}
              <article id="job-cao" className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <div className={styles.jobHeaderMain}>
                    <div className={styles.badgeGroup}>
                      <span className={styles.tagBadge}>Full Time</span>
                      <span className={styles.locationBadge}><i className="bi bi-geo-alt-fill me-1" /> New Delhi, India</span>
                    </div>
                    <h2 className={styles.jobTitle}>Chief Accounts Officer (CAO)</h2>
                    <div className={styles.orgName}>YWCA of Delhi</div>
                  </div>
                  <div className={styles.headerMeta}>
                    <div className={styles.deadlineBadge}>
                      Deadline: <strong>25th August 2026</strong>
                    </div>
                    <a 
                      href="https://forms.gle/4doKjVTf1mJcoH3633" 
                      target="_blank" 
                      rel="noreferrer" 
                      className={styles.applyTopBtn}
                    >
                      Apply Now <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>

                <div className={styles.jobBody}>
                  {/* About Organization */}
                  <div className={styles.sectionBlock}>
                    <h3 className={styles.blockTitle}>
                      <i className="bi bi-building me-2" /> About Organization
                    </h3>
                    <p className={styles.blockText}>
                      YWCA of Delhi is a leading NGO in Delhi. Its projects and programs provide safe places to working women through its Hostels and Shelter Homes. Further, it runs Vocational Training Institutes, works towards ending violence against women. One of its aims is to empower women while creating awareness about their individual rights.
                    </p>
                  </div>

                  {/* Position Overview */}
                  <div className={styles.sectionBlock}>
                    <h3 className={styles.blockTitle}>
                      <i className="bi bi-briefcase me-2" /> Position Overview
                    </h3>
                    <p className={styles.blockText}>
                      The position of Chief Accounts Officer (CAO) is based at Ashoka Road administrative office of the organization where the person will be working as a head of the finance team. The incumbent will be responsible for the overall financial, accounting, related work and transaction processing matters of the organization. The CAO will be accountable in meeting statutory compliances as are applicable to various financial laws of non profit organization and ensuring safety of records and their safe-keeping. The Chief Primary responsibilities include assisting in maintaining all aspects of the organization's finances and accounting, human resources and administrative initiatives.
                    </p>
                    <ul className={styles.customCheckList}>
                      <li>Oversee all finance operations and ensure compliance with regulatory standards.</li>
                      <li>Develop and implement financial strategies to support the organization's goals and objectives.</li>
                      <li>Manage budgeting, forecasting, and financial reporting processes.</li>
                      <li>Supervise accounting staff and provide leadership, guidance, and mentorship.</li>
                      <li>Evaluate and improve internal controls to safeguard financial assets.</li>
                      <li>Collaborate with other departments to optimize resource allocation and efficiency.</li>
                      <li>Liaise with external auditors, donors, and regulatory agencies as required.</li>
                    </ul>
                  </div>

                  {/* Qualification and Skills */}
                  <div className={styles.sectionBlock}>
                    <h3 className={styles.blockTitle}>
                      <i className="bi bi-mortarboard me-2" /> Qualification & Skills
                    </h3>
                    <ul className={styles.customBulletList}>
                      <li>M.Com / Masters in Finance / MBA (Finance) or related field (accounting, management, etc.)</li>
                      <li>15 years of experience in handling independent charge of Account, preferably in a NGO / non-profit organization</li>
                      <li>Proficiency in Excel</li>
                      <li>Working experience in Tally Prime, working knowledge on GST, IT and TDS.</li>
                      <li>Verbal and written communication skills in English</li>
                    </ul>
                  </div>

                  {/* Key Responsibilities */}
                  <div className={styles.sectionBlock}>
                    <h3 className={styles.blockTitle}>
                      <i className="bi bi-list-check me-2" /> Key Responsibilities
                    </h3>
                    <ul className={styles.customBulletList}>
                      <li>To supervise and guide the staff in the accounts department and to ensure cordial working relationships</li>
                      <li>To institute and ensure that proper internal controls and internal check systems are in operation.</li>
                      <li>To implement and ensure that proper banking arrangements exist at all times.</li>
                      <li>To keep management appraised on all financial and accounting matters.</li>
                      <li>Allotment of specific duties to accounts assistant and cashier and oversee their functioning.</li>
                      <li>Monthly reports including Cash Flow, to be prepared and presented to the Management.</li>
                      <li>Suggest ways and means to controls expenditure and increase revenue.</li>
                      <li>To ensure that the books of accounts, supporting vouchers, registers and all allied documents are maintained up to date and in a proper manner.</li>
                      <li>Verify the monthly bank reconciliations.</li>
                      <li>To ensure compliance of the various statutory acts that apply to the Association, including management of PF, pension and gratuity of staff.</li>
                      <li>Submission of all applicable returns on time.</li>
                      <li>Represent the Association and coordinate with Govt. Depts, and authorities as may be applicable.</li>
                      <li>Preparation of Budget in consultation with Department Heads and the General Secretary.</li>
                      <li>Finalization of Accounts and preparation of Balance Sheet.</li>
                      <li>To execute and monitor suitable budgetary and internal controls</li>
                    </ul>
                  </div>

                  {/* How to Apply */}
                  <div className={styles.applyCard}>
                    <div className={styles.applyCardContent}>
                      <h4>Ready to Apply?</h4>
                      <p>
                        Submit your details, upload your recent resume and cover letter (250 - 300 words) on or before <strong>25th August 2026</strong>.
                      </p>
                      <p className={styles.equalOppText}>
                        * YWCA of Delhi is an equal opportunity employer. Qualified women candidates and candidates from marginalized communities are encouraged to apply.
                      </p>
                    </div>
                    <a 
                      href="https://forms.gle/4doKjVTf1mJcoH3633" 
                      target="_blank" 
                      rel="noreferrer" 
                      className={styles.applyBigBtn}
                    >
                      Fill Application Form <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </article>

              {/* JOB 2: Resident Secretary */}
              <article id="job-resident-secretary" className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <div className={styles.jobHeaderMain}>
                    <div className={styles.badgeGroup}>
                      <span className={styles.womenOnlyBadge}>Only Women Candidates</span>
                      <span className={styles.tagBadge}>Full Time (Residential)</span>
                      <span className={styles.locationBadge}><i className="bi bi-geo-alt-fill me-1" /> New Delhi, India</span>
                    </div>
                    <h2 className={styles.jobTitle}>Resident Secretary</h2>
                    <div className={styles.orgName}>YWCA of Delhi</div>
                  </div>
                  <div className={styles.headerMeta}>
                    <div className={styles.deadlineBadge}>
                      Deadline: <strong>22nd August 2026</strong>
                    </div>
                    <a 
                      href="https://forms.gle/DeDqt2R735KRRkAU9" 
                      target="_blank" 
                      rel="noreferrer" 
                      className={styles.applyTopBtn}
                    >
                      Apply Now <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>

                <div className={styles.jobBody}>
                  {/* About Organization */}
                  <div className={styles.sectionBlock}>
                    <h3 className={styles.blockTitle}>
                      <i className="bi bi-building me-2" /> About Organization
                    </h3>
                    <p className={styles.blockText}>
                      A leading NGO/ social service organization. YWCA of Delhi was established in the year 1912 and is affiliated to National YWCA through the National body YWCA of India. Based in Delhi, YWCA of Delhi has projects and programs through which it provides safe places to working women and has working women's Hostels, shelter homes, has vocational training institutes, engages in advocacy for gender justice, promotes child rights, works towards ending violence against women and empowering them while creating awareness about their individual rights.
                    </p>
                  </div>

                  {/* Position Overview */}
                  <div className={styles.sectionBlock}>
                    <h3 className={styles.blockTitle}>
                      <i className="bi bi-briefcase me-2" /> Position Overview
                    </h3>
                    <p className={styles.blockText}>
                      We are seeking a committed and responsible Resident Secretary for our Working Women's Hostel. The incumbent will be required to stay within the hostel premises and will be responsible for managing hostel operations efficiently, while ensuring the wellbeing and safety of all residents.
                    </p>
                  </div>

                  {/* Qualification and Skills */}
                  <div className={styles.sectionBlock}>
                    <h3 className={styles.blockTitle}>
                      <i className="bi bi-mortarboard me-2" /> Qualification & Skills
                    </h3>
                    <ul className={styles.customBulletList}>
                      <li>Graduate with good communication skills in English (Written & Verbal)</li>
                      <li>Working experience 3 years and above preferably in Hostels</li>
                      <li>Age: 35 and above</li>
                      <li>Proficiency in MS - Word and Google tools</li>
                      <li>Team Player</li>
                      <li>Ability to withstand stress / working residentially</li>
                    </ul>
                  </div>

                  {/* Key Responsibilities */}
                  <div className={styles.sectionBlock}>
                    <h3 className={styles.blockTitle}>
                      <i className="bi bi-list-check me-2" /> Key Responsibilities
                    </h3>
                    
                    <div className={styles.subCategory}>Administrative Management:</div>
                    <ul className={styles.customBulletList}>
                      <li>Assist the Head of Department in day-to-day operations and hostel management.</li>
                      <li>Handle admission formalities and maintain accurate resident records as per SOP.</li>
                      <li>Manage occupancy registers, stock registers, leave logs, logbooks, and other official documents.</li>
                    </ul>

                    <div className={styles.subCategory}>Billing & Finance:</div>
                    <ul className={styles.customBulletList}>
                      <li>Prepare and issue monthly bills to residents.</li>
                      <li>Maintain records of payments and outstanding dues.</li>
                    </ul>

                    <div className={styles.subCategory}>Facility Supervision:</div>
                    <ul className={styles.customBulletList}>
                      <li>Oversee cleanliness, security arrangements, maintenance (electrical, plumbing, etc.), and catering services.</li>
                      <li>Conduct routine inspections of premises and services.</li>
                    </ul>

                    <div className={styles.subCategory}>Resident Relations:</div>
                    <ul className={styles.customBulletList}>
                      <li>Address and resolve grievances of hostel residents promptly and empathetically.</li>
                      <li>Ensure a safe, supportive, and disciplined living environment.</li>
                    </ul>

                    <div className={styles.subCategory}>Technology & Reporting:</div>
                    <ul className={styles.customBulletList}>
                      <li>Operate hostel management software and generate periodic reports.</li>
                      <li>Maintain digital and manual records systematically.</li>
                    </ul>

                    <div className={styles.subCategory}>Crisis & Stress Management:</div>
                    <ul className={styles.customBulletList}>
                      <li>Effectively manage conflict, emergencies, and resident welfare concerns.</li>
                    </ul>
                  </div>

                  {/* How to Apply */}
                  <div className={styles.applyCard}>
                    <div className={styles.applyCardContent}>
                      <h4>Ready to Apply?</h4>
                      <p>
                        Submit your application via Google Form on or before <strong>22nd August 2026</strong>. Upload your recent resume and cover letter (250 - 300 words).
                      </p>
                      <div className={styles.importantNotes}>
                        <strong>Important Notes:</strong>
                        <ul>
                          <li>Incomplete applications will not be considered.</li>
                          <li>Only shortlisted candidates will be contacted.</li>
                          <li>Applications without a cover letter will not be considered.</li>
                        </ul>
                      </div>
                    </div>
                    <a 
                      href="https://forms.gle/DeDqt2R735KRRkAU9" 
                      target="_blank" 
                      rel="noreferrer" 
                      className={styles.applyBigBtn}
                    >
                      Fill Application Form <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
