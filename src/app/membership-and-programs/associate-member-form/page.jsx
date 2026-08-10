"use client";

import React from 'react';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function AssociateMemberFormPage() {
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
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="text-start">
                    <h1 className="mb-1" style={{ color: '#243a76', fontWeight: 'bold' }}>YWCA OF DELHI</h1>
                  </div>
                  <div className="border border-dark p-2 text-center" style={{ minWidth: '100px' }}>
                    <small className="d-block mb-1">Form No:</small>
                    <span className="fs-5 text-danger">091</span>
                  </div>
                </div>
                <img src="/images/logo.png" alt="YWCA Logo" style={{ height: '80px', marginBottom: '15px' }} />
                <div className="bg-primary text-white py-2 mb-3">
                  <h2 className="mb-0 fs-4">APPLICATION FOR MEMBERSHIP</h2>
                </div>
                <p className="mb-4" style={{ fontStyle: 'italic', fontFamily: 'serif', fontSize: '18px', color: '#243a76' }}>By Love Serve One Another</p>

                <div className="text-start border border-dark mb-4">
                  <div className="d-flex border-bottom border-dark">
                    <div className="p-3 border-end border-dark" style={{ minWidth: '100px', fontWeight: 'bold', color: '#243a76', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center', fontSize: '20px' }}>AIM</div>
                    <div className="p-3" style={{ fontSize: '14px', textAlign: 'justify' }}>
                      The Young Women's Christian Association of Delhi rooted in the Christian faith and subscribing to its Basis as stated below endeavours to promote the full development of women and girls irrespective of race, culture and creed. It seeks to develop a membership that is responsive through service, to the changing needs of the whole community in changing world.
                    </div>
                  </div>
                  <div className="d-flex border-bottom border-dark">
                    <div className="p-3 border-end border-dark" style={{ minWidth: '100px', fontWeight: 'bold', color: '#243a76', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center', fontSize: '20px' }}>BASIS</div>
                    <div className="p-3" style={{ fontSize: '14px', textAlign: 'justify' }}>
                      Faith in God the Father Almighty, and Jesus Christ His only son, our Lord and Saviour, and in the Holy Spirit.
                    </div>
                  </div>
                  <div className="bg-primary text-white text-center p-2">
                    <small className="fw-bold d-block">AFFILIATION</small>
                    <small>The YWCA of Delhi is affiliated to the YWCA of India and to the World YWCA</small>
                  </div>
                </div>
              </div>
              <div className="card-body p-4 p-md-5">
                <div className="bg-light p-4 rounded mb-4 border">
                  <h5 className="text-center text-white bg-primary py-2 mb-3">YWCA OF DELHI</h5>
                  <p className="small text-justify mb-4">
                    YWCA since its inception in the late 19th century as an organization for women's welfare has grown into a widespread international network of great repute. Today it is the largest "Membership based Women's Movement" in the world that strives to act as a driving force to empower women, to demand justice and struggle against social, cultural, economic and political injustice. As inheritor of the Christian faith and heritage, it works towards initiating changes through a process of partnership in action.
                  </p>

                  <h5 className="text-center text-white bg-primary py-2 mb-3">THE VARIOUS DEPARTMENTS OF YWCA OF DELHI</h5>
                  <ul className="small text-justify ps-3 mb-0" style={{ listStyleType: 'disc' }}>
                    <li className="mb-2"><strong>The Women's Training Institute</strong> provides vocational education at undergraduate and post graduate levels to women in Delhi. The aim is to empower and impart skills training to women to make them independent and self-sufficient.</li>
                    <li className="mb-2"><strong>The Public Affairs and Social Issues Department (PASI)</strong> is responsible for gathering and dissemination of information regarding rights and justice concerns. It studies, analyses and advocates legislation and policies of Central and State Governments.</li>
                    <li className="mb-2"><strong>The Urban Development Project</strong> works for the uplift of women and children. Outreach programmes include Shelter Home, Community Centre, Family Counselling, Project for Street Children, vocational training and a Creche.</li>
                    <li className="mb-2"><strong>The Rural Development Project</strong> reaches out to various sections of society through civic education, health programmes, vocational training and Self Help Groups.</li>
                    <li className="mb-2"><strong>The Centenary Hostel for Working Women, Priyadarshini Working Women's Hostel, Rohini Working Women's Hostel and Jasola Working Women Hostel</strong> provide hostels for the working women of Delhi.</li>
                    <li className="mb-2"><strong>Shelter Home: Matritava Chaya</strong> is a shelter home for destitute pregnant and lactating women. RKAK-short stay shelter home for distressed women. It also includes Neighbourhood School for underprivileged children (6-18 years).</li>
                    <li className="mb-2"><strong>The Blue Triangle Family Hostel (BTFH)</strong> provides safe and comfortable short stay accommodation for domestic and international travellers. Funds generated from this service is used for the various Projects and Programmes of the YWCA of Delhi.</li>
                    <li className="mb-2"><strong>The Membership & Programme Department (MAP)</strong> aims to develop an active, vibrant and responsive membership. Its activities focus on the needs of women in the community. It organizes issue based empowerment programmes.</li>
                    <li className="mb-2"><strong>The Religious Education Department (REC)</strong> organizes faith based and interfaith dialogues and programmes.</li>
                    <li className="mb-0"><strong>The Youth Committee</strong> aims to develop leadership qualities in the youth and make them active participants in the "Y" movement.</li>
                  </ul>
                </div>

                <div className="bg-light p-4 rounded mb-5 border">
                  <h5 className="text-center text-white bg-primary py-2 mb-4">IMPORTANT INSTRUCTIONS</h5>
                  <ol className="small text-justify ps-3 mb-4">
                    <li className="mb-2">Each person will be given only one form for herself to be filled in personally at the YWCA of Delhi. Women who come without recommendation will be interviewed by the General Secretary/Membership Coordinator/Membership Committee Member.</li>
                    <li className="mb-2">Women with continuous membership in another YWCA, now residing in NCR of Delhi, and wishing to seek membership in the YWCA of Delhi must bring proof of their previous membership.</li>
                    <li className="mb-2">There will be an orientation for all new members. Participation in the orientation is essential. The Form has to be filled in by new members after the orientation presentation.</li>
                    <li className="mb-2">Two recent photographs are to be submitted along with membership fee of Age 18-30 yrs ₹300, Age 31 yrs and above ₹500.</li>
                    <li className="mb-2">Form to be filled in by members in their own handwriting.</li>
                  </ol>
                  <p className="small text-center text-white bg-primary p-2 fst-italic mb-0">Membership may be withdrawn if it has been found that the member by any act, word or deed has tarnished the image or has gone against the Aim and/or Basis of the YWCA of Delhi.</p>
                </div>

                <div className="bg-primary text-white py-2 mb-4">
                  <h5 className="mb-0 text-center fs-5">YWCA OF DELHI MEMBERSHIP FORM (ASSOCIATE MEMBER)</h5>
                </div>

                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="text-muted">Application Form No:</span>
                      <h4 className="text-danger mb-0">091</h4>
                      <div className="border-bottom border-dark" style={{ width: '100px' }}></div>
                    </div>
                    <div className="d-flex gap-4">
                      <div className="d-flex align-items-end gap-2">
                        <label className="mb-0 text-muted">Receipt</label>
                        <input type="text" className="form-control form-control-sm border-0 border-bottom border-dark rounded-0 px-0 bg-transparent" style={{ width: '120px' }} />
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <div className="d-flex align-items-end gap-2">
                        <label className="mb-0 text-muted">Date:</label>
                        <input type="date" className="form-control form-control-sm border-0 border-bottom border-dark rounded-0 px-0 bg-transparent" style={{ width: '150px' }} />
                      </div>
                    </div>

                    <p className="mt-4 mb-0" style={{ maxWidth: '400px' }}>Having read the Aim and Basis of the YWCA of Delhi, I would like to be a member and actively participate in the Programmes, Projects and activities of the Association.</p>
                  </div>

                  <div style={{ width: '120px', height: '140px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px' }}>
                    <small className="text-muted">Please paste recent passport size photograph here</small>
                  </div>
                </div>

                <hr className="border-dark border-2 opacity-100 mb-4" />

                <form>
                  <div className="mb-3">
                    <label className="form-label">1. Name in Full:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label className="form-label">2. Date of Birth:</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">3. Age Group:</label>
                      <div className="d-flex flex-wrap gap-3 mt-2">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="ageGroup" id="age18" />
                          <label className="form-check-label" htmlFor="age18">18-30 yrs.</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="ageGroup" id="age31" />
                          <label className="form-check-label" htmlFor="age31">31-50 yrs.</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="ageGroup" id="age51" />
                          <label className="form-check-label" htmlFor="age51">51-65 yrs.</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="ageGroup" id="age65" />
                          <label className="form-check-label" htmlFor="age65">65+</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">4. Educational Qualifications:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">5. Residential Address:</label>
                    <textarea className="form-control" rows="2"></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">6. Address for Communication:</label>
                    <textarea className="form-control" rows="2"></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">7. E-mail-ID:</label>
                    <input type="email" className="form-control" />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <label className="form-label">8. Phone No (R):</label>
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

                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label className="form-label">9. Nationality:</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Occupation:</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">10. Year of Original membership:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">11. Whether any break in membership, if so year of break (vital for election purpose):</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">12. Experience in Committees (Please tick relevant committees):</label>
                    <div className="row">
                      {['WTI', 'BTFH', 'UDP', 'RDP', 'MAP', 'REC', 'CHWW', 'PWWH', 'JWWH', 'PASI', 'FRAP', 'PERSONNEL', 'FINANCE', 'YOUTH', 'MATRITAV CHAYA'].map((committee, idx) => (
                        <div className="col-md-4 col-sm-6 mb-2" key={idx}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={`comm_${idx}`} />
                            <label className="form-check-label" htmlFor={`comm_${idx}`}>
                              {committee}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="form-label fw-bold">13. Have you been co-opted on the Board of Management?</label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="boardOpt" id="boardYes" />
                        <label className="form-check-label" htmlFor="boardYes">Yes</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="boardOpt" id="boardNo" />
                        <label className="form-check-label" htmlFor="boardNo">No</label>
                      </div>
                    </div>
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

                  <div className="d-flex justify-content-between mt-5 pt-3">
                    <div>
                      <p className="mb-0">Date:</p>
                    </div>
                    <div className="text-center">
                      <p className="mb-0 border-top border-dark pt-1 px-3">Signature of applicant</p>
                    </div>
                  </div>

                  <div className="text-center mt-5">
                    <button type="submit" className="primaryBtn">Submit Application</button>
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
