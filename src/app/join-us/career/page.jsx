"use client";

import React from 'react';
import InnerPageBanner from '@/components/partials/InnerPageBanner';
import styles from './page.module.css';

export default function CareerPage() {
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
            <div className={styles.sidebar}>
              <div className={styles.latestOpenings}>
                <div className={styles.latestOpeningsHeader}>
                  Latest Openings <span>Hi</span>
                </div>
                <ul className={styles.latestOpeningsList}>
                  <li>
                    <span>1 Chief Accounts Officer</span>
                    <span className={styles.newBadge}>New</span>
                  </li>
                  <li>
                    <span>2 Resident Secretary</span>
                    <span className={styles.newBadge}>New</span>
                  </li>
                </ul>
              </div>
              <div className={styles.facultyRecruitment}>
                Faculty Recruitment <span>&gt;</span>
              </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
              
              {/* Job 1 */}
              <div className={styles.latestDate}>
                Latest by <span>25th August 2026</span>
              </div>
              <table className={styles.jobTable}>
                <tbody>
                  <tr>
                    <th>Position Name</th>
                    <td><strong>Chief Accounts Officer</strong></td>
                  </tr>
                  <tr>
                    <th>Post Type</th>
                    <td>Full Time</td>
                  </tr>
                  <tr>
                    <th>Organization</th>
                    <td>YWCA of Delhi</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>New Delhi, INDIA</td>
                  </tr>
                  <tr>
                    <th>About Organization :</th>
                    <td>
                      <p>YWCA of Delhi is a leading NGO in Delhi. Its projects and programs provide safe places to working women through its Hostels and Shelter Homes. Further, it runs Vocational Training Institutes, works towards ending violence against women. One of its aims is to empower women while creating awareness about their individual rights.</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Position Overview :</th>
                    <td>
                      <p>The position of Chief Accounts Officer (CAO) is based at Ashoka Road administrative office of the organization where the person will be working as a head of the finance team. The incumbent will be responsible for the overall financial, accounting, related work and transaction processing matters of the organization. The CAO will be accountable in meeting statutory compliances as are applicable to various financial laws of non profit organization and ensuring safety of records and their safe-keeping. The Chief Primary responsibilities include assisting in maintaining all aspects of the organization's finances and accounting, human resources and administrative initiatives.</p>
                      <ol>
                        <li>Oversee all finance operations and ensure compliance with regulatory standards.</li>
                        <li>Develop and implement financial strategies to support the organization's goals and objectives.</li>
                        <li>Manage budgeting, forecasting, and financial reporting processes.</li>
                        <li>Supervise accounting staff and provide leadership, guidance, and mentorship.</li>
                        <li>Evaluate and improve internal controls to safeguard financial assets.</li>
                        <li>Collaborate with other departments to optimize resource allocation and efficiency.</li>
                        <li>Liaise with external auditors, donors, and regulatory agencies as required.</li>
                      </ol>
                    </td>
                  </tr>
                  <tr>
                    <th>Qualification and Skills :</th>
                    <td>
                      <ul className={styles.listArrow}>
                        <li>M.Com / Masters in Finance/ MBA (Finance) or related field (accounting, management, etc.)</li>
                        <li>15 years of experience in handling independent charge of Account, preferably in a NGO/ non profit organization</li>
                        <li>Proficiency in Excel</li>
                        <li>Working experience in Tally Prime, working knowledge on GST, IT and TDS.</li>
                        <li>Verbal and written communication skills in English</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Key Responsibilities:</th>
                    <td>
                      <ul className={styles.listArrow}>
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
                    </td>
                  </tr>
                  <tr>
                    <th>How to Apply :</th>
                    <td>
                      <ul className={styles.listArrow}>
                        <li>Please provide your details through the below google form link - <br /> <a href="https://forms.gle/4doKjVTf1mJcoH3633" target="_blank" rel="noreferrer" className={styles.applyLink}>https://forms.gle/4doKjVTf1mJcoH3633</a> and upload your most recent resume and a cover letter justifying why do you consider yourself the right fit for the position (in 250 - 300 words) on or before <strong>25th August 2026</strong>.</li>
                        <li>YWCA of Delhi is an equal opportunity employer and qualifies women candidates are encouraged to apply. We also encourage candidates from marginalized communities to apply.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Gap */}
              <div style={{ height: '20px' }}></div>

              {/* Job 2 */}
              <div className={styles.womenOnlyText}>ONLY WOMEN CANDIDATES TO APPLY</div>
              <div className={styles.latestDate}>
                Latest by <span>22nd August 2026</span>
              </div>
              
              <table className={styles.jobTable}>
                <tbody>
                  <tr>
                    <th>Position Name</th>
                    <td>Resident Secretary</td>
                  </tr>
                  <tr>
                    <th>Post Type</th>
                    <td>Full Time (RESIDENTIAL)</td>
                  </tr>
                  <tr>
                    <th>Organization</th>
                    <td>YWCA of Delhi</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>New Delhi, INDIA</td>
                  </tr>
                  <tr>
                    <th>About Organization :</th>
                    <td>
                      <p>A leading NGO/ social service organization. YWCA of Delhi was established in the year 1912 and is affiliated to National YWCA through the National body YWCA of India. Based in Delhi, YWCA of Delhi has projects and programs through which it provides safe places to working women and has working women's Hostels, shelter homes, has vocational training institutes, engages in advocacy for gender justice, promotes child rights, works towards ending violence against women and empowering them while creating awareness about their individual rights.</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Position Overview :</th>
                    <td>
                      <p>We are seeking a committed and responsible Resident Secretary for our Working Women's Hostel. The incumbent will be required to stay within the hostel premises and will be responsible for managing hostel operations efficiently, while ensuring the wellbeing and safety of all residents.</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Qualification and Skills :</th>
                    <td>
                      <ul className={styles.listArrow}>
                        <li>Graduate with good communication skills in English (Written & Verbal)</li>
                        <li>Working experience 3 years and above preferably in Hostels</li>
                        <li>Age: 35 and above</li>
                        <li>Proficiency in MS - Word and Google tools</li>
                        <li>Team Player</li>
                        <li>Ability to withstand stress / working residentially</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>KEY RESPONSIBILITIES:</th>
                    <td>
                      <div className={styles.subHeading}>Administrative Management:</div>
                      <ul className={styles.listArrow}>
                        <li>Assist the Head of Department in day-to-day operations and hostel management.</li>
                        <li>Handle admission formalities and maintain accurate resident records as per SOP.</li>
                        <li>Manage occupancy registers, stock registers, leave logs, logbooks, and other official documents.</li>
                      </ul>

                      <div className={styles.subHeading}>Billing & Finance:</div>
                      <ul className={styles.listArrow}>
                        <li>Prepare and issue monthly bills to residents.</li>
                        <li>Maintain records of payments and outstanding dues.</li>
                      </ul>

                      <div className={styles.subHeading}>Facility Supervision:</div>
                      <ul className={styles.listArrow}>
                        <li>Oversee cleanliness, security arrangements, maintenance (electrical, plumbing, etc.), and catering services.</li>
                        <li>Conduct routine inspections of premises and services.</li>
                      </ul>

                      <div className={styles.subHeading}>Resident Relations:</div>
                      <ul className={styles.listArrow}>
                        <li>Address and resolve grievances of hostel residents promptly and empathetically.</li>
                        <li>Ensure a safe, supportive, and disciplined living environment.</li>
                      </ul>

                      <div className={styles.subHeading}>Technology & Reporting:</div>
                      <ul className={styles.listArrow}>
                        <li>Operate hostel management software and generate periodic reports.</li>
                        <li>Maintain digital and manual records systematically.</li>
                      </ul>

                      <div className={styles.subHeading}>Crisis & Stress Management:</div>
                      <ul className={styles.listArrow}>
                        <li>Effectively manage conflict, emergencies, and resident welfare concerns.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>How to Apply :</th>
                    <td>
                      <ul className={styles.listArrow}>
                        <li>Submit your application via below Google form link by or before 22nd August 2026. <br /><a href="https://forms.gle/DeDqt2R735KRRkAU9" target="_blank" rel="noreferrer" className={styles.applyLink}>https://forms.gle/DeDqt2R735KRRkAU9</a> and upload your most recent resume and a cover letter justifying why do you consider yourself the right fit for the position (in 250 - 300 words) on or before <strong>22nd August 2026</strong>.</li>
                      </ul>
                      <div style={{ marginTop: '15px' }}>
                        <strong>Important Notes:</strong>
                        <ol style={{ marginTop: '5px' }}>
                          <li>Incomplete applications will not be considered</li>
                          <li>Only shortlisted candidates will be contacted</li>
                          <li>Applications without a cover letter will not be considered</li>
                        </ol>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
