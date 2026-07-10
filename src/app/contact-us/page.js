import React from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | YWCA of Delhi',
};

const departments = [
  {
    title: "General Secretary",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    email: "g_s@ywcadelhi.org",
  },
  {
    title: "General Secretary's Office",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Reception",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 11000",
    tel: "+91-23362975",
  },
  {
    title: "HR Department",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-23362975 Extn - 213",
    mob: "7011299057",
    email: "hr@ywcadelhi.org",
  },
  {
    title: "Accounts Office",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-23362975, +91-11-23361043 Extn. 20",
    email: "cao@ywcadelhi.org",
  },
  {
    title: "Rajkumari Amrit Kaur Project (RKAK) Shelter Home",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 1100",
    tel: "7011299046",
    email: "sh@ywcadelhi.org",
  },
  {
    title: "Matritva Chayya Shelter Home, Jahangirpuri",
    address: "A block, Community Centre, 1st floor, next to NDPL office, Jehangirpuri, New Delhi-110033",
    mob: "9971802146",
    email: "sh@ywcadelhi.org",
  },
  {
    title: "Matritva Chayya Shelter Home, Sarai Rohilla",
    address: "MCD Community Centre, Chandrashekhar Azad Colony Budh Bazar, Pratap Nagar Met station New Delhi - 110007",
    mob: "9971802146",
    email: "sh@ywcadelhi.org",
  },
  {
    title: "Community Development Programme (CDP)",
    tel: "+91-23362975 Extn - 223",
    mob: "7011299052",
    email: "cdp@ywcadelhi.org",
  },
  {
    title: "Working Women Hostel, Ashoka Road",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-23362975 Extn - 214, +91-11-2374480",
    mob: "7011299048",
    email: "ddhostel@ywcadelhi.org",
  },
  {
    title: "Working Women Hostel, Jasola",
    address: "Pocket 6, Plot no 4, Near D.A.V School, Jasola, New Delhi 110025",
    tel: "+91-11-40604930",
    email: "ddhostel@ywcadelhi.org",
  },
  {
    title: "Blue Triangle Family Hostel (BTFH)",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23360133 , +91-11-25365104",
    mob: "7011299044",
    email: "btfhywcaofdelhi01@gmail.com, hodbtfh@ywcadelhi.org",
  },
  {
    title: "Education Institute, Ashoka Road",
    address: "Women's Training Institute, YWCA of Delhi 1, Ashoka Road, New Delhi 11000",
    tel: "+91-11-23362975 Ext. 209, +91-11-23743238",
    mob: "7011299055",
    email: "dd@ywcadelhi.org",
  },
  {
    title: "Education Institute, Dwarka",
    address: "Vocational Training Institute, Dwarka - Sec 10, Between plot No 6 & 7",
    tel: "+91-11-25076180, +91-11-2507618",
    mob: "7011299061",
    email: "dd@ywcadelhi.org",
  },
  {
    title: "Conference Hall Booking",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23360133 , +91-11-2536510",
    mob: "7011299044",
    email: "conference@ywcadelhi.org",
  },
  {
    title: "Membership & Programme (MAP)",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 11000",
    tel: "+91-23362975 Ext. 226",
    mob: "7011299051",
    email: "map@ywcadelhi.org",
  },
  {
    title: "Religious Education Committee (REC)",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 11000",
    tel: "+91-23362975 Extn. 226",
    mob: "7011299051",
    email: "rec@ywcadelhi.org",
  },
  {
    title: "Public Awareness & Social Issues (PASI)",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-23362975 Ext. 226",
    mob: "7011299051",
    email: "pasi@ywcadelhi.org",
  },
  {
    title: "Youth",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    email: "youth@ywcadelhi.org",
  },
  {
    title: "Purchase Office",
    address: "YWCA of Delhi 1, Ashoka Road, New Delhi 110001",
    tel: "+91-23362975 Ext. 221",
  }
];

export default function ContactUsPage() {
  return (
    <main className={styles.mainContainer}>
      {/* Top Banner Section */}
      <section className={styles.topSection}>
        <div className="container">
          <div className="row">
            {/* Left Col */}
            <div className="col-lg-7 col-md-12 d-flex flex-column justify-content-start pt-lg-2">
              <div className={styles.leftContentWrapper}>
                <h1 className={styles.mainTitle}>We'd love to hear<br/>from you</h1>
                <p className={styles.subText}>
                  Have any question in mind or want to enquire? Please feel<br/>to contact us through the form or the following details.
                </p>
              </div>
            </div>
            
            {/* Right Col */}
            <div className="col-lg-5 col-md-12 mt-5 mt-lg-0">
              <div className={styles.letsTalkBlock}>
                <div className={styles.talkHeaderBlock}>
                  <h3 className={styles.letsTalkTitle}>Let's talk!</h3>
                </div>
                
                <div className={styles.contactBlock}>
                  <h4 className={styles.contactTitle}>General Secretary</h4>
                  <p className={styles.contactDetails}>YWCA of Delhi 1, Ashoka Road, New Delhi 110001</p>
                  <p className={styles.contactDetails}>Tel : +91-11-23362779</p>
                  <p className={styles.contactDetails}>E-mail : <a href="mailto:g_s@ywcadelhi.org">g_s@ywcadelhi.org</a></p>
                </div>

                <div className={styles.contactBlockLast}>
                  <h4 className={styles.contactTitle}>General Secretary's Office</h4>
                  <p className={styles.contactDetails}>YWCA of Delhi 1, Ashoka Road, New Delhi 110001</p>
                  <p className={styles.contactDetails}>Tel : +91-11-23362779</p>
                  <p className={styles.contactDetails}>Mob : 7011299042</p>
                  <p className={styles.contactDetails}>E-mail : <a href="mailto:pa@ywcadelhi.org">pa@ywcadelhi.org</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className="container">
          <form className={styles.contactForm}>
            <div className="row mb-4">
              <div className="col-md-6 mb-4 mb-md-0">
                <label className={styles.formLabel}>First Name</label>
                <input type="text" className={styles.formInput} placeholder="Your first name" />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Last name</label>
                <input type="text" className={styles.formInput} placeholder="Your last name" />
              </div>
            </div>
            
            <div className="row mb-4">
              <div className="col-md-6 mb-4 mb-md-0">
                <label className={styles.formLabel}>Email id</label>
                <input type="email" className={styles.formInput} placeholder="johndoe@gmail.com" />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Subject</label>
                <input type="text" className={styles.formInput} placeholder="Subject of message" />
              </div>
            </div>
            
            <div className="row mb-4">
              <div className="col-12">
                <label className={styles.formLabel}>Message</label>
                <textarea className={styles.formTextarea} rows="5" placeholder="Type your Message"></textarea>
              </div>
            </div>
            
            <div className="text-center">
              <button type="button" className={styles.submitBtn}>Send message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.289066903638!2d77.210756!3d28.62543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4c62218e29%3A0xc210cfdf8972010b!2sYoung%20Women%20Christian%20Association!5e0!3m2!1sen!2sus!4v1783647857005!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin">
        </iframe>
      </section>

      {/* Directory Section */}
      <section className={styles.directorySection}>
        <div className="container">
          <div className={styles.directoryWrapper}>
            <div className="row">
              {departments.map((dept, index) => (
                <div key={index} className="col-lg-6 col-md-6 mb-4">
                  <div className={styles.deptCard}>
                    <h5 className={styles.deptTitle}>{dept.title}</h5>
                    <p className={styles.deptText}>{dept.address}</p>
                    {dept.tel && <p className={styles.deptText}>Tel : {dept.tel}</p>}
                    {dept.mob && <p className={styles.deptText}>Mob : {dept.mob}</p>}
                    {dept.email && <p className={styles.deptText}>E-mail : <a href={`mailto:${dept.email}`}>{dept.email}</a></p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
