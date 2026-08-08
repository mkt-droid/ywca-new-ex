import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import OurValues from '@/components/partials/OurValues';
import PlacementPartners from '@/components/PlacementPartners';

export const metadata = {
  title: "CSR Partnerships | Corporate Social Responsibility with YWCA Delhi CDP",
  description: "Partner your company’s CSR mandate with YWCA Delhi’s Community Development Programme. Measurable, audited, Section 135-compliant impact in women’s empowerment and community development.",
};

export default function CSRPage() {
  const partnershipModelsData = [
    {
      icon: "bi-gift-fill",
      title: "Programme Sponsorship",
      text: "Fund an entire vertical (e.g., vocational training for 200 women) with your brand recognised as the programme partner."
    },
    {
      icon: "bi-geo-alt-fill",
      title: "Location Adoption",
      text: "Adopt a full urban settlement and fund the complete CDP model — education, skills, health, and leadership — for that community, with co-branded reporting."
    },
    {
      icon: "bi-lightbulb-fill",
      title: "Co-Created Initiatives",
      text: "Work with our team to design a new intervention aligned with your company’s specific CSR themes or employee skill sets."
    },
    {
      icon: "bi-people-fill",
      title: "Employee Engagement",
      text: "Structured volunteering days, mentorship programmes, and skills-transfer workshops for your workforce."
    }
  ];

  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/community-development-programme' },
    { title: 'ABOUT US', icon: 'bi-info-circle', link: '/community-development-programme/about-us' },
    { title: 'PROGRAMS', icon: 'bi-diagram-3', link: '/community-development-programme/programs' },
    { title: 'IMPACT', icon: 'bi-graph-up-arrow', link: '/community-development-programme/impact' },
    { title: 'CSR', icon: 'bi-briefcase', link: '/community-development-programme/csr' },
    { title: 'GET INVOLVED', icon: 'bi-person-raised-hand', link: '/community-development-programme/get-involved' }
  ];

  return (
    <main>
      <SideNavBanner
        height="360px"
        title={<>CSR<br />PARTNERSHIPS</>}
        bgImage="/images/cdp/main-banner.jpg"
        navItems={bannerNavItems}
        activePath="/community-development-programme/csr"
        contentMarginTop="25vh"
      />

      <div className={`${styles.pageBackground} pageContentWrapper`}>
        <div className="container pt-5">
          <h1 className="sectionTitle_1 text-center mx-800 mb-4">
            CSR that goes beyond compliance — and delivers impact you can show your board.
          </h1>
          <div className={styles.introPara}>
            <p>
              Partnering with YWCA Delhi’s Community Development Programme means aligning your CSR mandate with a track record of measurable, audited, community-rooted impact — in the areas of women’s empowerment, skill development, health, and education, directly aligned with Schedule VII of the Companies Act, 2013.
            </p>
          </div>

          {/* Why Partner With Us */}
          <div className={`row align-items-center mt-5 pt-3 ${styles.zigzagRow}`}>
            <div className="col-md-6">
              <div className={styles.zigzagContent}>
                <h2 className="sectionTitle_2 mb-4">Why Partner With Us</h2>
                <ul className="list-unstyled">
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4 mt-1"></i>
                    <div>
                      <strong>Proven delivery model</strong>
                      <div className="text-muted mt-1">across 45 urban settlements and 12,000+ beneficiaries</div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4 mt-1"></i>
                    <div>
                      <strong>Full compliance</strong>
                      <div className="text-muted mt-1">registered under Section 8, 12A, 80G, and CSR-1 registered with MCA</div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4 mt-1"></i>
                    <div>
                      <strong>Transparent reporting</strong>
                      <div className="text-muted mt-1">quarterly progress reports and third-party evaluation options</div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4 mt-1"></i>
                    <div>
                      <strong>Flexible partnership models</strong>
                      <div className="text-muted mt-1">fund a programme, a location, or co-create a new initiative</div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4 mt-1"></i>
                    <div>
                      <strong>Employee engagement built in</strong>
                      <div className="text-muted mt-1">volunteering days, skill-based engagement, mentorship pairing</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <div className={styles.zigzagImageWrapper}>
                <img src="/images/Community-development.jpg" alt="Why Partner With Us" className={styles.zigzagImage} />
              </div>
            </div>
          </div>

          {/* What Our Partners Receive */}
          <div className={`row align-items-center flex-md-row-reverse ${styles.zigzagRow}`}>
            <div className="col-md-6">
              <div className={styles.zigzagContent}>
                <h2 className="sectionTitle_2 mb-4">What Our Partners Receive</h2>
                <ul className="list-unstyled">
                  <li className="mb-4 d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                    <span className="fw-medium">Formal MoU and CSR-compliant documentation</span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                    <span className="fw-medium">Quarterly impact and utilisation reports</span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                    <span className="fw-medium">Site visits for leadership and employees</span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                    <span className="fw-medium">Co-branded communication and recognition (with your consent)</span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                    <span className="fw-medium">Support for Impact Assessment reporting required under CSR rules</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <div className={styles.zigzagImageWrapper}>
                <img src="/images/01-Banner-Vision-Mission.jpg" alt="What Our Partners Receive" className={styles.zigzagImage} />
              </div>
            </div>
          </div>

          {/* CSR Focus Areas We Align To */}
          <div className="mt-5 pt-5">
            <h2 className="sectionTitle_2 text-center mb-5">CSR Focus Areas We Align To</h2>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                      <thead style={{ backgroundColor: '#fcf1ff' }}>
                        <tr>
                          <th className="py-4 px-4 text-uppercase fw-bold border-0" style={{ color: '#BE00C4', fontSize: '0.85rem', letterSpacing: '1px', width: '60%' }}>
                            Schedule VII Area
                          </th>
                          <th className="py-4 px-4 text-uppercase fw-bold border-0" style={{ color: '#BE00C4', fontSize: '0.85rem', letterSpacing: '1px', width: '40%' }}>
                            Our Programme
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                        <tr className={styles.focusRow}>
                          <td className="py-4 px-4 border-bottom border-light">
                            <div className="d-flex align-items-center">
                              <div className="me-3 fs-3" style={{ color: '#242278' }}>
                                <i className="bi bi-people-fill"></i>
                              </div>
                              <span className="fw-medium text-dark" style={{ fontSize: '1.05rem' }}>Promoting gender equality & women empowerment</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 border-bottom border-light">
                            <span className="badge px-3 py-2 fw-medium" style={{ backgroundColor: '#f0f0f0', color: '#444', fontSize: '0.95rem' }}>
                              Skill Building & Livelihoods, Leadership & Rights
                            </span>
                          </td>
                        </tr>
                        <tr className={styles.focusRow}>
                          <td className="py-4 px-4 border-bottom border-light">
                            <div className="d-flex align-items-center">
                              <div className="me-3 fs-3" style={{ color: '#242278' }}>
                                <i className="bi bi-book-half"></i>
                              </div>
                              <span className="fw-medium text-dark" style={{ fontSize: '1.05rem' }}>Education, including special education</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 border-bottom border-light">
                            <span className="badge px-3 py-2 fw-medium" style={{ backgroundColor: '#f0f0f0', color: '#444', fontSize: '0.95rem' }}>
                              Education & Literacy
                            </span>
                          </td>
                        </tr>
                        <tr className={styles.focusRow}>
                          <td className="py-4 px-4 border-bottom border-light">
                            <div className="d-flex align-items-center">
                              <div className="me-3 fs-3" style={{ color: '#242278' }}>
                                <i className="bi bi-heart-pulse-fill"></i>
                              </div>
                              <span className="fw-medium text-dark" style={{ fontSize: '1.05rem' }}>Health, including preventive healthcare</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 border-bottom border-light">
                            <span className="badge px-3 py-2 fw-medium" style={{ backgroundColor: '#f0f0f0', color: '#444', fontSize: '0.95rem' }}>
                              Health & Well-being
                            </span>
                          </td>
                        </tr>
                        <tr className={styles.focusRow}>
                          <td className="py-4 px-4 border-bottom border-light">
                            <div className="d-flex align-items-center">
                              <div className="me-3 fs-3" style={{ color: '#242278' }}>
                                <i className="bi bi-house-heart-fill"></i>
                              </div>
                              <span className="fw-medium text-dark" style={{ fontSize: '1.05rem' }}>Rural/urban poverty alleviation</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 border-bottom border-light">
                            <span className="badge px-3 py-2 fw-medium" style={{ backgroundColor: '#f0f0f0', color: '#444', fontSize: '0.95rem' }}>
                              Full CDP model
                            </span>
                          </td>
                        </tr>
                        <tr className={styles.focusRow}>
                          <td className="py-4 px-4 border-0">
                            <div className="d-flex align-items-center">
                              <div className="me-3 fs-3" style={{ color: '#242278' }}>
                                <i className="bi bi-briefcase-fill"></i>
                              </div>
                              <span className="fw-medium text-dark" style={{ fontSize: '1.05rem' }}>Livelihood enhancement projects</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 border-0">
                            <span className="badge px-3 py-2 fw-medium" style={{ backgroundColor: '#f0f0f0', color: '#444', fontSize: '0.95rem' }}>
                              Skill Building & Livelihoods
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Models */}
          <div className="mt-5 pt-5">
            <OurValues values={partnershipModelsData} title="Partnership Models" className="mt-2" />
          </div>

          {/* CTA */}
          <div className="text-center mt-5 py-5 px-4 rounded-4 shadow-sm" style={{ backgroundColor: '#fcf1ff', border: '1px solid #eab3f5' }}>
            <h3 className="sectionTitle_3 mb-4">Let’s Build Something Measurable Together</h3>
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
              <Link href="#" className={styles.primaryBtn}>
                <i className="bi bi-file-earmark-pdf"></i> Download our CSR Partnership Brochure
              </Link>
              <Link href="mailto:csr@ywcadelhicdp.org" className={styles.secondaryBtn} style={{ backgroundColor: '#fff' }}>
                Schedule a Call with Our Team <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <p className="mt-5 text-muted pt-4 border-top w-75 mx-auto" style={{ borderColor: '#eab3f5 !important' }}>
              <strong>Contact for CSR enquiries:</strong> <a href="mailto:csr@ywcadelhicdp.org" className="text-decoration-none fw-medium text-dark">csr@ywcadelhicdp.org</a> | +91 11 2336 2975
            </p>
          </div>

          {/* Our Corporate Partners */}
          <div className="pt-5 mb-0 pb-0">
            <PlacementPartners title="Our Corporate Partners" className="container mt-4 mb-2 pb-0 text-center" />
          </div>

        </div>
      </div>
    </main>
  );
}
