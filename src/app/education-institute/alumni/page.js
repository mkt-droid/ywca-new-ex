import React from 'react';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import PlacementPartners from '@/components/PlacementPartners';
import EducationFooterLinks from '@/components/EducationFooterLinks';

export const metadata = {
  title: 'Our Alumni | Education Institute | YWCA of Delhi',
};

export default function AlumniPage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-flower1', link: '/education-institute' },
    { title: 'Programs', icon: 'bi-mortarboard', link: '/education-institute/programs' },
    { title: 'Admission', icon: 'bi-person-vcard', link: '/education-institute/admission' },
    { title: 'Life@YWCA', icon: 'bi-building', link: '#' },
    { title: 'Contact us', icon: 'bi-telephone', link: '/education-institute/contact' },
  ];

  const alumniData = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: 'NAME SURNAME',
    subtitle: 'Lorem Ipsum',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    image: '/images/education-institute/alumani.jpg'
  }));

  return (
    <main>
      {/* Banner Section */}
      <SideNavBanner
        title={
          <>
            OUR<br />ALUMNI
          </>
        }
        bgImage="/images/education-institute/aca-bnr.jpg"
        navItems={bannerNavItems}
        activePath="#"
      />

      <section className={styles.alumniSection}>
        <div className="container">
          <div className="row">
            {alumniData.map(alumni => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={alumni.id}>
                <div className={styles.alumniCard}>
                  <img src={alumni.image} alt={alumni.name} className={styles.alumniImage} />
                  <div className={styles.alumniContent}>
                    <h3 className={styles.alumniName}>{alumni.name}</h3>
                    <p className={styles.alumniSubtitle}>{alumni.subtitle}</p>
                    <p className={styles.alumniDesc}>{alumni.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PlacementPartners />
    </main>
  );
}
