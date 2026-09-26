import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import PlacementPartners from '@/components/PlacementPartners';
import EducationFooterLinks from '@/components/EducationFooterLinks';
import newsData from '@/data/news.json';
import NewsCarousel from '@/components/partials/NewsCarousel';
import UserStories from '@/components/UserStories';

export const metadata = {
  title: 'Education Institute | YWCA of Delhi',
};

export default function EducationInstitutePage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-flower1', link: '/education-institute' },
    { title: 'Programs', icon: 'bi-mortarboard', link: '/education-institute/programs' },
    { title: 'Admission', icon: 'bi-person-vcard', link: '/education-institute/admission' },
    // { title: 'Life@YWCA', icon: 'bi-building', link: '#' },
    { title: 'Life@YWCA', icon: 'bi-people', link: '/news?category=Academic+News' },
    { title: 'Contact us', icon: 'bi-telephone', link: '/education-institute/contact' },
  ];

  const academicNews = newsData
    .filter(news => news.category === 'Academic News')
    .slice(0, 8);

  const alumni = [
    {
      id: 1,
      name: 'Mrs. Shikha Arora',
      designation: 'Medical Laboratory Technologist',
      quote: "After completing my 12th with Science, I wanted to enter the healthcare field quickly while gaining practical skills. Joining the DMLT program at YWCA ...",
      image: '/images/education-institute/shikha_arora_full.jpg'
    },
    {
      id: 2,
      name: 'Name Surname',
      designation: 'Designation/Organization',
      quote: "Lorem elit in mollis integer id cursus. Elit enim magna aliquet aenean. Adipiscing magna felis lorem integer.",
      image: '/images/education-institute/alumani.jpg'
    },
    {
      id: 3,
      name: 'Name Surname',
      designation: 'Designation/Organization',
      quote: "Lorem elit in mollis integer id cursus. Elit enim magna aliquet aenean. Adipiscing magna felis lorem integer.",
      image: '/images/education-institute/alumani.jpg'
    },
    {
      id: 4,
      name: 'Name Surname',
      designation: 'Designation/Organization',
      quote: "Lorem elit in mollis integer id cursus. Elit enim magna aliquet aenean. Adipiscing magna felis lorem integer.",
      image: '/images/education-institute/alumani.jpg'
    }
  ];

  const stories = [
    {
      id: 1,
      name: 'Anu Kumari',
      subtitle: 'DMLT Graduate | MediBuddy, Gurugram',
      quote: `My experience at the Women's Training Institute, YWCA of Delhi, has been truly rewarding. The dedicated faculty, practical training, and supportive environment helped me build a strong foundation in Medical Laboratory Technology. Today, I am proud to be working at MediBuddy, Gurugram. I sincerely thank my teachers and YWCA for guiding me towards a successful career.`,
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=AK'
    },
    {
      id: 2,
      name: 'Manisha',
      subtitle: 'BMLT Graduate | Junior Research Fellow, AIIMS, New Delhi',
      quote: `YWCA of Delhi provided me with excellent academic knowledge, practical skills, and the confidence to excel in my career. The guidance and encouragement of my teachers helped me achieve my goals, from postgraduate studies to becoming a Junior Research Fellow at AIIMS, New Delhi. I am grateful to YWCA for shaping my professional journey.`,
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=M'
    },
    {
      id: 3,
      name: 'Sarika Yadav',
      subtitle: 'DMLT, Batch (2022-2024)',
      quote: `Completing my *Diploma In Medical Laboratory Technology (DMLT),* *(2022-2024)* ,at *Women's training institute (YWCA of Delhi),* has been a truly transformative experience.The institute provided us with a wonderfully supportive, disciplined, and empowering environment to learn and grow. From the well-equipped labs to the structured curriculum, YWCA Delhi gave me the perfect foundation for me careers in healthcare.\n\nI want to express my deepest gratitude to *[Jolly Ma'am].* Thank you for your patience, your dedication to teaching us complex diagnostic procedures, and for always motivating us to do our best. Teachers like you are rare, and I feel incredibly fortunate to have been your student. I carry the skills and confidence you gave me into my professional career.\n\nWith gratitude and respect,\n*[Sarika Yadav]*\nDMLT, Batch (2022-2024)`,
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=SY'
    },
    {
      id: 4,
      name: 'Shivani Binjola',
      subtitle: 'DMLT',
      quote: `Hello my dear friends,\nI am Shivani Binjola and I am very glad to share my life's story with you. I have completed my DMLT from Y.W.C.A. Y.W.C.A. is one of the reputed institutes for pursuing MLT. As a result, I'm elated to be a part of such a reputed organization.\nNo wonder the teachers are also amazing. They teach extremely well and do not show partiality on any basis. Instead, the teachers behave in an extremely positive manner with everyone.\nI wanted to share my personal experience with my institution as I feel nostalgic about my college days. I would like to bring to your notice that I completely adore my teachers as they are excellent in teaching and behave like friends with the students. The teaching methods are powerful and student-friendly.\nActually, I used to be a weak student in my class. There were so many activities that we used to have during our lectures. I owe my success to my institution and my dear teachers.\nI would like to thank Y.W.C.A. from the bottom of my heart and thank my dear teachers once again.\nRegards,\nShivani Binjola`,
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=SB'
    },
    {
      id: 5,
      name: 'Drishti Sharma',
      subtitle: 'DMLT, Batch (2016-2018)',
      quote: `Drishti Sharma is a proud alumna of the Diploma in Medical Laboratory Technology (DMLT) programme at the Women's Training Institute, YWCA of Delhi (Batch 2016-2018). She is currently working in the Department of Molecular Diagnostics at Rajiv Gandhi Cancer Institute & Research Centre, Rohini, Delhi.\n\nThe Diploma in Medical Laboratory Technology at YWCA of Delhi gave me the knowledge, confidence, and practical skills needed to build a successful career. The faculty members were exceptionally supportive and guided me throughout my academic journey. Their encouragement helped me discover my potential and paved the way for my professional success. I am grateful to YWCA for providing me with a strong foundation in the field of medical laboratory technology.`,
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=DS'
    }
  ];

  return (
    <main>
      {/* Banner Section with Enquiry Form */}
      <SideNavBanner
        height="480px"
        bgImage="/images/education-institute/aca-bnr.jpg"
        navItems={bannerNavItems}
        sectionStyle={{ overflow: 'visible' }}
        activePath="/education-institute"
      >
        <div className={styles.bannerContent}>
          <div className={styles.enquiryFormCard}>
            <h3 className="sectionTitle_3">Unlock Your Full Potential, Join Now</h3>
            <form>
              <input type="text" placeholder="Your name" className={styles.formInput} /><input type="text" placeholder="Your phone" className={styles.formInput} />
              <input type="email" placeholder="Your email" className={styles.formInput} />
              <input type="text" placeholder="Course Interested" className={styles.formInput} />
              <textarea placeholder="Your comment" className={styles.formTextarea} rows="3"></textarea>
              <button type="button" className={styles.submitBtn}>Submit</button>
            </form>
          </div>
        </div>
      </SideNavBanner>

      {/* About Section */}
      <section className={`container mb-5 text-center ${styles.aboutSection}`} style={{ marginTop: '120px' }}>
        <h1 className="sectionTitle_1 text-center mx-800">About YWCA Institute</h1>
        <p className={styles.sectionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions.
        </p>
      </section>

      {/* Academic News Section */}
      <section className="container mb-5">
        <h2 className="sectionTitle_2 text-center d-block">Life@YWCA</h2>
        <div className="mt-4">
          <NewsCarousel newsData={academicNews} />
        </div>
        <div className="text-center mt-3">
          <Link href="/news?category=Academic+News" className={styles.viewMoreBtn}>View All</Link>
        </div>
      </section>

      {/* Learning Programs Section */}
      <section className={styles.learningSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 text-center pr-lg-5">
              <h2 className="sectionTitle_2 text-center text-white">Learning Programs - Unlock Your Full<br />Potential, Join Now</h2>
              <p className={styles.learningText}>
                Welcome to YWCA Academy, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to the success.
              </p>
              <Link href={'/education-institute/programs'} className={styles.startLearningBtn}>Start your learning journey</Link>

              <div className={styles.pillsContainer}>
                {[
                  'Office Management', 'Fashion Technology', 'Information Technology',
                  'Foreign Languages', 'Interior Designing', 'Travel & Tourism',
                  'Beauty & Wellness', 'Personality Development', 'Health Care Sector'
                ].map((cat, idx) => {
                  const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <Link key={idx} href={`/education-institute/programs?category=${slug}`} className={styles.pillLine} style={{ textDecoration: 'none' }}>
                      {cat}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center position-relative">
              <img src="/images/education-institute/pills-image.png" alt="Learning Programs" className={styles.learningImage} />
            </div>
          </div>
        </div>
      </section>


      {/* Why Us Section */}
      <section className={styles.whyUsSection}>
        <div className="container text-center">
          <h2 className="sectionTitle_2 text-center d-block">Why Choose YWCA OF DELHI Education Institute</h2>
          <div className={styles.whyUsGrid}>
            <span className={styles.whyUsPill}><i className="bi bi-bullseye me-2"></i>Career Focused Learning</span>
            <span className={styles.whyUsPill}><i className="bi bi-building me-2"></i>Industrial Exposure</span>
            <span className={styles.whyUsPill}><i className="bi bi-award me-2"></i>50+ year Legacy</span>
            <span className={styles.whyUsPill}><i className="bi bi-person-workspace me-2"></i>Expert Faculty Guidance</span>
            <span className={styles.whyUsPill}><i className="bi bi-cpu me-2"></i>AI Integrated Curriculum</span>
            <span className={styles.whyUsPill}><i className="bi bi-briefcase me-2"></i>Placement Assistance</span>
            <span className={styles.whyUsPill}><i className="bi bi-display me-2"></i>Well Equipped Lab and <br /> AC Classrooms</span>
            <span className={styles.whyUsPill}><i className="bi bi-house-heart me-2"></i>Hostel facility for Girls</span>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      {/* <section className="container mt-5 mb-5 text-center">
        <h2 className="sectionTitle_2 text-center d-block">Our Alumni Are Shaping The Future</h2>
        <div className="row mt-4">
          {alumni.map(person => (
            <div className="col-md-3 col-sm-6 mb-4" key={person.id}>
              <div className={styles.alumniCard}>
                <img src={person.image || "/images/education-institute/alumani.jpg"} alt="Alumni" className={styles.alumniImage} />
                <div className={styles.alumniContent}>
                  <h3 className={styles.alumniName}>{person.name}</h3>
                  <p className={styles.alumniDesignation}>{person.designation}</p>
                  <hr className={styles.alumniDivider} />
                  <p className={styles.alumniQuote}>{person.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/education-institute/alumni" className={styles.viewMoreBtn}>
            View more
          </Link>
        </div>
      </section> */}

      {/* Student Reviews */}
      <UserStories stories={stories} title="Student Reviews" />

      {/* Placement Partners */}
      <PlacementPartners />

      {/* Footer Links Section */}
      <EducationFooterLinks />
    </main>
  );
}
