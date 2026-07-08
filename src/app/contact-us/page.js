import React from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | YWCA of Delhi',
};

const departments = [
  {
    title: "Reception",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    email: "g.s@ywcadelhi.org",
  },
  {
    title: "HR Department",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    email: "g.s@ywcadelhi.org",
  },
  {
    title: "Accounts Office",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Rajkumari Amrit Kaur Project (RKAK) Shelter Home",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Matritva Chayya Shelter Home, Jahangirpuri",
    address: "A block, Community Centre, 1st floor, next to NDPL office, Jahangirpuri, New Delhi-110033",
    mob: "9971892146",
    email: "sh@ywcadelhi.org",
  },
  {
    title: "Matritva Chayya Shelter Home, Sarai Rohilla",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Community Development Programme (CDP)",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Working Women Hostel, Ashoka Road",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Working Women Hostel, Jasola",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Blue Triangle Family Hostel (BTFH)",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Education Institute, Ashoka Road",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Education Institute, Dwarka",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Conference Hall Booking",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Membership & Programme (MAP)",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Religious Education Committee (REC)",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Public Awareness & Social Issues (PASI)",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Youth",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
  },
  {
    title: "Purchase Office",
    address: "YWCA of Delhi, 1, Ashoka Road, New Delhi 110001",
    tel: "+91-11-23362779",
    mob: "7011299042",
    email: "pa@ywcadelhi.org",
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
                  <p className={styles.contactDetails}>E-mail : <a href="mailto:g.s@ywcadelhi.org">g.s@ywcadelhi.org</a></p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.261947833446!2d77.21175651508226!3d28.621913182421867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd34e022f6a1%3A0xc66ea6d0fa284166!2sYWCA%20of%20Delhi!5e0!3m2!1sen!2sin!4v1689123456789!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
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
