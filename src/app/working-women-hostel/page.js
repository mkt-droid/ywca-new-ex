"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Gallery from '@/components/common/Gallery';
import SideNavBanner from '@/components/partials/SideNavBanner';

export default function WorkingWomenHostelPage() {
  const bannerNavItems = [
    { title: 'Home / Overview', icon: 'bi-house-door', link: '#' },
    {
      title: (
        <div>
          Centenary Working<br />
          Women's Hostel
        </div>
      ),
      icon: 'bi-building',
      link: '#chww'
    },
    {
      title: (
        <div>
          Jasola Working<br />
          Women's Hostel
        </div>
      ),
      icon: 'bi-building',
      link: '#jwwh'
    }
  ];

  const galleryImages = [
    '/images/working-women-hostels/gallery/1.jpg',
    '/images/working-women-hostels/gallery/2.jpg',
    '/images/working-women-hostels/gallery/3.jpg',
    '/images/working-women-hostels/gallery/4.jpg',
    '/images/working-women-hostels/gallery/5.jpg',
    '/images/working-women-hostels/gallery/6.jpg',
    '/images/working-women-hostels/gallery/7.jpg',
    '/images/working-women-hostels/gallery/8.jpg',
    '/images/working-women-hostels/gallery/9.jpg',
    '/images/working-women-hostels/gallery/10.jpg',
    '/images/working-women-hostels/gallery/11.jpg',
    '/images/working-women-hostels/gallery/12.jpg',
    '/images/working-women-hostels/gallery/13.jpg',
    '/images/working-women-hostels/gallery/14.jpg'
  ];



  return (
    <main>
      <SideNavBanner
        title={<>WORKING WOMEN<br />HOSTEL</>}
        bgImage="/images/working-women-hostels/main-banner.jpg"
        navItems={bannerNavItems}
        activePath="/working-women-hostel"
        contentMarginTop="25vh"
      />

      <div className={styles.pageBackground}>
        <div className={`container ${styles.featuresSection}`}>
          <div className="row text-center">
            <div className="col-md-4">
              <div className={styles.featureBox}>
                <div className={styles.iconWrap}>
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h4>2+ Location</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.featureBox}>
                <div className={styles.iconWrap}>
                  <i className="bi bi-door-open"></i>
                </div>
                <h4>67 Rooms Available</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.featureBox}>
                <div className={styles.iconWrap}>
                  <i className="bi bi-send"></i>
                </div>
                <h4>Centrally located</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className={styles.introPara}>
            <p>With the progressive change in the socio-economic fabric of the country more and more women are leaving their homes in search of employment in big cities. One of the main difficulties faced by such women is lack of safe and conveniently located accommodation. The YWCA of Delhi, over the years, has emerged as a platform for working women to assume new responsibilities in contributing towards the growth of the nation and the society at large. Hence YWCA established Working Women's Hostels in different parts of Delhi to provide budget accommodation to women from different walks of life irrespective of their caste, class, creed and religion. At present moment YWCA of Delhi runs two Working Women's Hostels.</p>
          </div>
        </div>

        <div className={styles.hostelsSection}>
          <div className="container">
            {/* Hostel 1 */}
            <div className={`row align-items-center ${styles.hostelRow}`} id="chww">
              <div className="col-md-6">
                <img src="/images/working-women-hostels/wwh-1.png" alt="Centenary Working Women's Hostel" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <h3 className={styles.hostelTitle}>Centenary Working Women's Hostel (CHWW)</h3>
                <p className={styles.hostelDesc}>
                  Situated in the heart of the city in Ashoka Road has got 64 rooms with the total bed capacity of 168. In spite of the pandemic the hostel-maintained occupancy of 126 residents throughout this period.
                </p>
                <p className={styles.hostelDesc}>
                  The Centenary Hostel for Working Women of the YWCA of Delhi is a centrally located hostel for working women in the heart of New Delhi in Connaught Place. It provides a home away from home in an atmosphere both secure and pleasant and homely to accommodate 168 women in its warmth and embrace. CHWW has 67 rooms and three guest rooms with twin sharing basis and fees are marked accordingly with stay not beyond 33 months. Guest room accommodation is available for a maximum period of one month. Advance booking can be made for one month by depositing advance payment of 7 days.
                </p>
                <p className={styles.hostelDesc}>
                  Mess facility is available for Guests on payment. The mess provides subsided and homely meals for all the three meals times along with morning and evening tea.
                </p>
              </div>
            </div>

            {/* Hostel 2 */}
            <div className={`row align-items-center ${styles.hostelRow} flex-row-reverse`} id="jwwh">
              <div className="col-md-6">
                <img src="/images/working-women-hostels/wwh-2.png" alt="Jasola Working Women's Hostel" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <h3 className={styles.hostelTitle}>Jasola Working Women's Hostel (JWWH)</h3>
                <p className={styles.hostelDesc}>
                  The Ministry of Women and Child Development jointly with Ministry of Development of North Eastern Region, Government of India has set up the Working Women's Hostel in Jasola Vihar, New Delhi for women of the North Eastern states and other working women. The Management of the JWWH was entrusted to the YWCA of Delhi in August 2011. JWWH has got 167 rooms with attached bathroom and total bed capacity of 501. During the pandemic the hostel was able to maintain occupancy of 166 throughout.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5" style={{ color: '#333' }}>
          {/* Mission */}
          <div className="mb-5">
            <h3 style={{ color: '#a212b5', fontWeight: '600', marginBottom: '15px' }}>Mission of the Working Women Hostel of YWCA</h3>
            <p style={{ lineHeight: '1.8' }}>The Mission for running this Hostel is to make the hostel facilities available to the maximum number of girls and women who are coming to work in Delhi from different parts of India, irrespective of their caste, religion and creed. Our main objective is to make the Hostel facilities available at an affordable price to those candidates who are coming from low income groups. However, the requirement of the high income groups is also not ignored. We always strive hard to strike a balance between these two groups.</p>
          </div>

          {/* Values */}
          <div className="mb-5">
            <h3 style={{ color: '#a212b5', fontWeight: '600', marginBottom: '15px' }}>Values we follow</h3>
            <p style={{ lineHeight: '1.8' }}><strong>Justice Beyond Borders :-</strong> The CHWW respects the freedom of all who come in, be it staff, resident, housekeeping or security personnel and each one is given their due to make them feel that all are a part of the big setup called CHWW and it cannot progress without the contribution and support of all concerned.</p>
            <p style={{ lineHeight: '1.8' }}><strong>Visioning with the Young :-</strong> In our efforts to bring out the best in the youth, all Festivals like Dussehra, Diwali, Independence Day, Lohri and Holi are celebrated by the Hostel Residents with great enthusiasm. This gives them all freedom of expression in various forms and an opportunity to express themselves. The various hazzles of different professions which they face each day is shared among the residents resulting in more appreciation and regard for each one.</p>
          </div>

          <div className={styles.infoBox}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h3 style={{ color: '#a212b5', fontWeight: '600', marginBottom: '15px' }}>Working Procedures</h3>
                <h5 className="fw-bold mt-4 mb-3">Eligibility Criteria:</h5>
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Candidates should be new to Delhi (having lived in Delhi for less than 3 years).</li>
                  <li><i className="bi bi-circle"></i>Candidates should not be more than 40 years.</li>
                  <li><i className="bi bi-circle"></i>Candidates must have a Local Lady Guardian.</li>
                  <li><i className="bi bi-circle"></i>Candidate’s monthly income should not be less than Rs. 10,000 and should not be more than Rs. 50,000.</li>
                </ul>
                
                <h5 className="fw-bold mt-4 mb-3">Admission Procedure:</h5>
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Buy Prospectus with Accommodation form (cost: Rs. 100).</li>
                  <li><i className="bi bi-circle"></i>Fill in the Accommodation form completely and submit it to our office.</li>
                  <li><i className="bi bi-circle"></i>Wait for the interview call for selection.</li>
                  <li><i className="bi bi-circle"></i>Come for an interview along with your Local Lady Guardian.</li>
                  <li><i className="bi bi-circle"></i>After selection the candidate is required to submit the documents given to her at that time and make the payment.</li>
                  <li><i className="bi bi-circle"></i>A Medical Certificate from a recognized MBBS Doctor is required.</li>
                </ul>
              </div>
              
              <div className="col-md-6 mb-4">
                <h3 style={{ color: '#a212b5', fontWeight: '600', marginBottom: '15px' }}>Facilities Available</h3>
                <ul className={styles.customList}>
                  <li><i className="bi bi-circle"></i>Round the clock water and electricity supply and back up.</li>
                  <li><i className="bi bi-circle"></i>Internet facility (on payment).</li>
                  <li><i className="bi bi-circle"></i>Security Provided at the Main Gate.</li>
                  <li><i className="bi bi-circle"></i>Availability of a small Library.</li>
                  <li><i className="bi bi-circle"></i>Green environment with Green Lawn and flowers.</li>
                  <li><i className="bi bi-circle"></i>Mess facility (packed lunch is also available).</li>
                  <li><i className="bi bi-circle"></i>Aqua Guard Filtered drinking water.</li>
                  <li><i className="bi bi-circle"></i>Beautiful Visitor’s Room (having fixed visiting hours).</li>
                  <li><i className="bi bi-circle"></i>Prayer Room.</li>
                  <li><i className="bi bi-circle"></i>Common room for T.V. (open till 11.00 p.m.).</li>
                  <li><i className="bi bi-circle"></i>Providing Housekeeping service daily for cleaning of rooms, bathrooms etc.</li>
                  <li><i className="bi bi-circle"></i>Providing Room Coolers (on payment in summers)</li>
                  <li><i className="bi bi-circle"></i>Catering to the needs of the sick residents</li>
                  <li><i className="bi bi-circle"></i>Providing Parking area for Car and Scooter on payment</li>
                  <li><i className="bi bi-circle"></i>First Aid Facility</li>
                  <li><i className="bi bi-circle"></i>Laundry Facility</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h3 style={{ color: '#a212b5', fontWeight: '600', marginBottom: '15px' }}>Festival Celebrations</h3>
            <p style={{ lineHeight: '1.8' }}>Festivals like Holi, Easter, Lohri, Diwali and Christmas are celebrated with great fervor in the hostel.</p>
            <h5 className="fw-bold mt-3 mb-2">Cultural Evenings:</h5>
            <p style={{ lineHeight: '1.8' }}>Four Cultural Evenings in a year are organized for the hostel residents (April, July, October and December), giving opportunity to the residents to relax and have fun together and get to know each other and build the bond of friendship and support away from their family and friends.</p>
          </div>

          <div className="row mb-4">
            <div className="col-md-4 mb-4">
              <div className={styles.infoCard}>
                <div className={styles.cardIconWrapper}>
                  <i className="bi bi-tools"></i>
                </div>
                <h3 className={styles.cardTitle}>Maintenance</h3>
                <p className={styles.cardDesc}>Each Resident has access to the “Requirement Book'', related to maintenance work. Electrician, Plumber and Carpenter are available any time whenever the need arises.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={styles.infoCard}>
                <div className={styles.cardIconWrapper}>
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3 className={styles.cardTitle}>Hostel Committee</h3>
                <p className={styles.cardDesc}>There is a new Hostel Committee every year. It comprises of the Chairperson and its Members. The General Secretary and President are invited for every Committee meeting. The Head of the Department of CHWW convenes the Committee Meetings and various issues of the Hostel are discussed and solved by the Committee Members.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={styles.infoCard}>
                <div className={styles.cardIconWrapper}>
                  <i className="bi bi-person-badge"></i>
                </div>
                <h3 className={styles.cardTitle}>Hostel Staff</h3>
                <p className={styles.cardDesc}>“Ready to Help” service is provided by the Hostel staff which comprises, the Head of Department, two Resident Secretaries, 4 Establishment Staff, one Gardner and 6 Housekeeping staff.</p>
              </div>
            </div>
          </div>

          {/* Downloads Section */}
          <div className="mb-5 text-center">
            <h3 style={{ color: '#a212b5', fontWeight: '600', marginBottom: '25px' }}>Download Documents</h3>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="/images/working-women-hostels/HOSTEL FLYER.pdf" download className="btn btn-primary" style={{ backgroundColor: '#a212b5', borderColor: '#a212b5', padding: '10px 25px', borderRadius: '30px', fontWeight: '500' }}>
                <i className="bi bi-file-earmark-pdf me-2"></i>Hostel Flyer
              </a>
              <a href="/images/working-women-hostels/Prospectus  - CHWW.pdf" download className="btn btn-primary" style={{ backgroundColor: '#a212b5', borderColor: '#a212b5', padding: '10px 25px', borderRadius: '30px', fontWeight: '500' }}>
                <i className="bi bi-file-earmark-pdf me-2"></i>Prospectus (CHWW)
              </a>
              <a href="/images/working-women-hostels/Prospectus - JWWH.pdf" download className="btn btn-primary" style={{ backgroundColor: '#a212b5', borderColor: '#a212b5', padding: '10px 25px', borderRadius: '30px', fontWeight: '500' }}>
                <i className="bi bi-file-earmark-pdf me-2"></i>Prospectus (JWWH)
              </a>
              <a href="/images/working-women-hostels/Prospectus-JWWH.pdf" download className="btn btn-primary" style={{ backgroundColor: '#a212b5', borderColor: '#a212b5', padding: '10px 25px', borderRadius: '30px', fontWeight: '500' }}>
                <i className="bi bi-file-earmark-pdf me-2"></i>Prospectus (JWWH Alt)
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <Gallery images={galleryImages} title="Gallery" />
      </div>
    </main>
  );
}
