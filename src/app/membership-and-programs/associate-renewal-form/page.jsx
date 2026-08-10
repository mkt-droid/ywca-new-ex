"use client";

import React from 'react';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function AssociateRenewalFormPage() {
  return (
    <main>
      <SideNavBanner
        height="360px"
        title={<>MEMBERSHIP AND<br />PROGRAM DEPARTMENT</>}
        bgImage="/images/map/01-Banner-MAP.jpg"
        activePath="/membership-and-programs"
        contentMarginTop="25vh"
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card shadow-sm">
              <div className="card-header bg-white text-center py-4 border-bottom">
                <h1 className="mb-1" style={{ color: '#243a76', fontWeight: 'bold' }}>YWCA OF DELHI</h1>
                <p className="mb-3" style={{ fontSize: '14px', fontWeight: 'bold' }}>1, Ashoka Road, New Delhi-110001</p>
                <img src="/images/logo.png" alt="YWCA Logo" style={{ height: '80px', marginBottom: '15px' }} />
                <p className="mb-3" style={{ fontStyle: 'italic', fontFamily: 'serif', fontSize: '18px', color: '#243a76' }}>By Love Serve One Another</p>
                <div className="bg-danger text-white py-2 mt-3">
                  <h2 className="mb-0 fs-4" style={{ fontWeight: 'bold' }}>FORM FOR RENEWAL OF MEMBERSHIP</h2>
                </div>
              </div>
              <div className="card-body p-4 p-md-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex gap-3 align-items-center">
                    <label className="mb-0 fw-bold">Date:</label>
                    <input type="date" className="form-control" style={{ width: '200px' }} />
                  </div>
                </div>

                <form>
                  <div className="mb-3">
                    <label className="form-label">1. Name:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">2. Education Qualification (If upgraded):</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">3. Residential Address:</label>
                    <textarea className="form-control" rows="2"></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">4. Address for Communication:</label>
                    <textarea className="form-control" rows="2"></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">5. Email Address:</label>
                    <input type="email" className="form-control" />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <label className="form-label">6. Phone No (R):</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                      <label className="form-label">Phone No (O):</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Mobile:</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">7. Whether any break in membership:</label>
                    <div className="d-flex gap-4 mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="breakInMembership" id="breakYes" />
                        <label className="form-check-label" htmlFor="breakYes">a. Yes</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="breakInMembership" id="breakNo" />
                        <label className="form-check-label" htmlFor="breakNo">b. No</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">7.1 If yes, year of break in membership:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">8. Declaration : Do you have any</label>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>a. Any Relative employed in the YWCA of Delhi</span>
                        <div className="d-flex gap-3">
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="relEmployed2" id="relEmp2Yes" />
                            <label className="form-check-label" htmlFor="relEmp2Yes">Yes</label>
                          </div>
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="relEmployed2" id="relEmp2No" />
                            <label className="form-check-label" htmlFor="relEmp2No">No</label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>b. Any relative enrolled as member of YWCA of Delhi</span>
                        <div className="d-flex gap-3">
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="relEnrolled2" id="relEnrolled2Yes" />
                            <label className="form-check-label" htmlFor="relEnrolled2Yes">Yes</label>
                          </div>
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="relEnrolled2" id="relEnrolled2No" />
                            <label className="form-check-label" htmlFor="relEnrolled2No">No</label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>c. Any service provider associated with YWCA of Delhi</span>
                        <div className="d-flex gap-3">
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="serviceProv2" id="serviceProv2Yes" />
                            <label className="form-check-label" htmlFor="serviceProv2Yes">Yes</label>
                          </div>
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="serviceProv2" id="serviceProv2No" />
                            <label className="form-check-label" htmlFor="serviceProv2No">No</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">8.1 If yes for any of the above, please share the detail:</label>
                    <textarea className="form-control" rows="2"></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">9. Experience in Committees (Please tick the relevant committee):</label>
                    <div className="row">
                      {['BTFH', 'FINANCE', 'MAP', 'PASI', 'PERSONNEL', 'REC', 'SH', 'WWHs', 'YOUTH', 'CDP', 'EDUCATION', 'FRAP', 'BUILDING'].map((committee, idx) => (
                        <div className="col-md-4 col-sm-6 mb-2" key={idx}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={`comm3_${idx}`} />
                            <label className="form-check-label" htmlFor={`comm3_${idx}`}>
                              {committee}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">10. Areas of Interest/Programmes/Departments of YWCA you would like to be involved in:</label>
                    <div className="row">
                      {['BTFH', 'FINANCE', 'MAP', 'PASI', 'PERSONNEL', 'REC', 'SH', 'WWHs', 'YOUTH', 'CDP', 'EDUCATION', 'FRAP', 'BUILDING'].map((area, idx) => (
                        <div className="col-md-4 col-sm-6 mb-2" key={idx}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={`area2_${idx}`} />
                            <label className="form-check-label" htmlFor={`area2_${idx}`}>
                              {area}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">11. Any other specialization/ experience (Please specify details)<br /><small className="fw-normal">example - (Finance, Law, Social Work, Education)</small></label>
                    <textarea className="form-control" rows="2"></textarea>
                  </div>

                  <hr className="my-4" />

                  <div className="bg-light p-4 rounded mb-4 border">
                    <h5 className="text-center mb-3">Statement of Commitment</h5>
                    <p>I _______________________________ hereby commit to YWCA of Delhi to:</p>
                    <ul className="mb-0 ps-3">
                      <li className="mb-2">Give time, expertise and endeavour to generate resources for the Association's work.</li>
                      <li className="mb-2">Commit myself to work for the benefit of the Association and endeavour at all times to uphold the spirit of the YWCA and maintain the basic standards of the Movement in all aspects.</li>
                      <li className="mb-2">Abide by the Constitution and rules of the YWCA of Delhi.</li>
                      <li>Undertake not to bring disrepute by any action of mine and shall follow the due procedure of grievance redressal and arbitration.</li>
                    </ul>
                  </div>

                  <div className="bg-light p-4 rounded mb-5 border">
                    <h5 className="text-center mb-3">DISCLAIMER</h5>
                    <p className="small mb-3 text-justify">
                      Membership in the YWCA of Delhi is open to women who are committed to its Aim, Basis and Mission. Members who subscribe to the Christian Basis and accept the Aims shall be entitled to stand and vote at election of the YWCA of Delhi subject to fulfilling required conditions. Members who are in sympathy with the Aim but do not subscribe to the Christian Basis shall not carry a right to stand or vote at election of the YWCA of Delhi.
                    </p>
                    <p className="fw-bold mb-0">I hereby declare that the information given herein is true to the best of my knowledge.</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-end mt-5 pt-3">
                    <div>
                      <p className="mb-1">Date: ________________</p>
                    </div>
                    <div className="text-end">
                      <p className="mb-1">Signature of applicant: ________________</p>
                      <p className="mb-0">Place, New Delhi</p>
                    </div>
                  </div>

                  <div className="text-center mt-5">
                    <button type="submit" className="primaryBtn">Submit Renewal</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
