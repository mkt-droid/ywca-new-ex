"use client";

import React from 'react';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function ElectoralMemberFormPage() {
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
                    <p className="mb-0" style={{ fontSize: '14px', fontWeight: 'bold' }}>1, Ashoka Road, New Delhi-110001</p>
                  </div>
                  <div className="border border-dark p-2 text-center" style={{ minWidth: '100px' }}>
                    <small className="d-block mb-1">Form No:</small>
                    <span className="fs-5 text-danger">783</span>
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
                    <li className="mb-2"><strong>Education Committee:</strong> The Women's Training Institute and Vocational Training Institute provide vocational education at under graduate and post graduate levels to women in Delhi. The aim is to empower and impart skills training to women to make them independent and self-sufficient.</li>
                    <li className="mb-2"><strong>The Public Affairs and Social Issues Department (PASI)</strong> is responsible for gathering and dissemination of information regarding rights and justice concerns. It studies, analyses and advocates legislation and policies of Central and State Governments.</li>
                    <li className="mb-2"><strong>The Community Development Project (CDP)</strong> focuses on advancing rights of women & children through its various projects, the department works towards building self-confidence, leadership & knowledge on violence against women.</li>
                    <li className="mb-2"><strong>Working Women's Hostels (WWHs):</strong> The Centenary Hostel for working women and Jasola Working Women's Hostel provide hostels for the working women of Delhi.</li>
                    <li className="mb-2"><strong>Shelter Home:</strong> Maatritava Chhaya is a shelter home for destitute pregnant and lactating women. RKAK-short stay shelter home for distressed women. It also includes Neighbourhood School for underprivileged children (6-18 years).</li>
                    <li className="mb-2"><strong>The Blue Triangle Family Hostel (BTFH)</strong> provides safe and comfortable short stay accommodation for Domestic and International travelers. Funds generated from this service is used for the various Projects and Programmes of the YWCA of Delhi.</li>
                    <li className="mb-2"><strong>The Membership & Programme Department (MAP)</strong> aims to develop an active, vibrant and responsive membership. Its activities focus on the needs of women in the community. It organizes issue based empowerment programmes.</li>
                    <li className="mb-2"><strong>The Religious Education Department (REC)</strong> organizes faith based and interfaith dialogues and programmes.</li>
                    <li className="mb-0"><strong>The Youth Committee</strong> aims to develop leadership qualities in the youth and make them active participants in the "Y" movement.</li>
                  </ul>
                </div>

                <div className="bg-light p-4 rounded mb-5 border">
                  <h5 className="text-center text-white bg-primary py-2 mb-4">IMPORTANT INSTRUCTIONS</h5>
                  <ol className="small text-justify ps-3 mb-4">
                    <li className="mb-2">Each person will be given only one form for herself to be filled in personally at the YWCA of Delhi. Women who come without recommendation will be interviewed by the General Secretary/Membership Coordinator/Membership Committee Member.</li>
                    <li className="mb-2">Two recent photographs are to be submitted along with membership fee of Age 18-30 yrs ₹300, Age 31 yrs and above ₹500.</li>
                    <li className="mb-2">Form to be filled in by members in their own handwriting.</li>
                    <li className="mb-2">Women with continuous membership in another YWCA, now residing in NCR of Delhi, and wishing to seek membership in the YWCA of Delhi must bring proof of their previous membership.</li>
                    <li className="mb-2">There will be an orientation for all new members. Participation in the orientation is essential. The Form has to be filled in by new members after the orientation presentation.</li>
                  </ol>
                  <p className="small text-center text-white bg-primary p-2 fst-italic mb-0">Membership may be withdrawn if it has been found that the member by any act, word or deed has tarnished the image or has gone against the Aim and / or Basis of the YWCA of Delhi.</p>
                </div>

                <div className="bg-light p-4 rounded border mb-4 text-center">
                  <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                    <img src="/images/logo.png" alt="YWCA Logo" style={{ height: '50px' }} />
                    <div>
                      <h4 className="mb-0" style={{ color: '#243a76', fontWeight: 'bold' }}>YWCA OF DELHI</h4>
                      <p className="mb-0 small fw-bold">1, Ashoka Road, New Delhi-110001</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                    <span className="fw-bold">Membership Year</span>
                    <input type="text" className="form-control form-control-sm border-0 border-bottom border-dark rounded-0 px-0 bg-transparent" style={{ width: '150px' }} />
                  </div>

                  <div className="d-flex justify-content-between align-items-start text-start mb-3">
                    <div>
                      <h4 className="text-danger mb-3">783</h4>
                      <div className="d-flex gap-4">
                        <div>
                          <label className="small mb-0 text-muted">Form No.:</label>
                          <div className="border-bottom border-dark" style={{ height: '20px', width: '100px' }}></div>
                        </div>
                      </div>
                      <div className="d-flex gap-4 mt-2">
                        <div className="d-flex align-items-end gap-2">
                          <label className="small mb-0 text-muted">Receipt No.:</label>
                          <input type="text" className="form-control form-control-sm border-0 border-bottom border-dark rounded-0 px-0 bg-transparent" style={{ width: '100px' }} />
                        </div>
                        <div className="d-flex align-items-end gap-2">
                          <label className="small mb-0 text-muted">Date:</label>
                          <input type="date" className="form-control form-control-sm border-0 border-bottom border-dark rounded-0 px-0 bg-transparent" style={{ width: '120px' }} />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-end gap-3">
                      <div className="border border-dark p-2 text-center" style={{ minWidth: '150px' }}>
                        <small className="d-block text-muted">Membership No.</small>
                        <div className="mt-2" style={{ height: '25px' }}></div>
                      </div>
                      <div style={{ width: '120px', height: '140px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px' }}>
                        <small className="text-muted">Please paste recent passport size photograph here</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="small mb-2 text-muted">Membership year: 1st April to 31st March the following year</p>
                  <p>Having read the Aim and Basis of the YWCA of Delhi, I would like to be a member and actively participate in the Programmes, Projects and activities of the Association.</p>
                </div>

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

                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label className="form-label">4. Educational Qualifications:</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Occupation:</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">5. Church Affiliation:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">6. Residential Address:</label>
                    <textarea className="form-control" rows="2"></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">7. Address for Communication:</label>
                    <textarea className="form-control" rows="2"></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">8. E-mail-ID:</label>
                    <input type="email" className="form-control" />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <label className="form-label">9. Phone No (R):</label>
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
                    <label className="form-label">10. Nationality:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">11. Year of Original membership:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">12. Whether any break in membership, if so year of break (vital for election purpose):</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">13. Experience in Committees (Please tick relevant committees):</label>
                    <div className="row">
                      {['BTFH', 'FINANCE', 'MAP', 'PASI', 'PERSONNEL', 'REC', 'SH', 'WWHs', 'YOUTH', 'CDP', 'Edu. Committee'].map((committee, idx) => (
                        <div className="col-md-4 col-sm-6 mb-2" key={idx}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={`comm2_${idx}`} />
                            <label className="form-check-label" htmlFor={`comm2_${idx}`}>
                              {committee}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">14. Have you been an office bearer or a nominating Committee Chairperson? (Tick mark)</label>
                    <div className="d-flex flex-wrap gap-3 mt-2">
                      {['President', 'Vice President', 'Treasurer', 'Assistant Treasurer', 'Recording Secretary', 'Nominating Chairperson'].map((role, idx) => (
                        <div className="form-check" key={idx}>
                          <input className="form-check-input" type="checkbox" id={`role_${idx}`} />
                          <label className="form-check-label" htmlFor={`role_${idx}`}>
                            {role}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">15. Have you been a Board Member?</label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="boardMember" id="boardMemberYes" />
                        <label className="form-check-label" htmlFor="boardMemberYes">Yes</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="boardMember" id="boardMemberNo" />
                        <label className="form-check-label" htmlFor="boardMemberNo">No</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">16. Do you have any:</label>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>(A) Relative employed in the YWCA of Delhi</span>
                        <div className="d-flex gap-3">
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="relEmployed" id="relEmployedYes" />
                            <label className="form-check-label" htmlFor="relEmployedYes">Yes</label>
                          </div>
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="relEmployed" id="relEmployedNo" />
                            <label className="form-check-label" htmlFor="relEmployedNo">No</label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>(B) Any relative enrolled as member of YWCA of Delhi</span>
                        <div className="d-flex gap-3">
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="relEnrolled" id="relEnrolledYes" />
                            <label className="form-check-label" htmlFor="relEnrolledYes">Yes</label>
                          </div>
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="relEnrolled" id="relEnrolledNo" />
                            <label className="form-check-label" htmlFor="relEnrolledNo">No</label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>(C) Any service provider at the YWCA of Delhi</span>
                        <div className="d-flex gap-3">
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="serviceProv" id="serviceProvYes" />
                            <label className="form-check-label" htmlFor="serviceProvYes">Yes</label>
                          </div>
                          <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="serviceProv" id="serviceProvNo" />
                            <label className="form-check-label" htmlFor="serviceProvNo">No</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">17. If yes please write name and relationship:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">18. Recommended by (mention name of recommending member):</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">19. How much time can you devote for voluntary work in a month?</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">20. Areas of interest/Programmes/Department of YWCA you would like to be involved with:</label>
                    <div className="row">
                      {['BTFH', 'MAP', 'REC', 'WWHs', 'PASI', 'CDP', 'PERSONNEL', 'FINANCE', 'YOUTH', 'SHELTER HOME', 'ECUMENICAL', 'COMMUNICATION', 'Edu. Committee'].map((area, idx) => (
                        <div className="col-md-4 col-sm-6 mb-2" key={idx}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={`area_${idx}`} />
                            <label className="form-check-label" htmlFor={`area_${idx}`}>
                              {area}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">21. Any Other Specialization/experience (please specify details)<br /><small className="fw-normal">example: (Finance, Law, Social Justice, Education)</small></label>
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

                  <div className="d-flex justify-content-between align-items-end mt-5 pt-3 mb-5">
                    <div>
                      <p className="mb-1">Date: ________________</p>
                    </div>
                    <div className="text-end">
                      <p className="mb-1">Signature of applicant: ________________</p>
                      <p className="mb-0">Place, New Delhi</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center border-top border-dark pt-3 mt-4">
                    <p className="mb-0 small">The form has been signed in my presence</p>
                    <div className="text-end">
                      <div className="border-bottom border-dark mb-1" style={{ width: '200px', height: '20px' }}></div>
                      <p className="mb-0 small">Signature of Staff In-charge</p>
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
