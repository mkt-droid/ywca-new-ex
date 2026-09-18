"use client";

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import PlacementPartners from '@/components/PlacementPartners';
import EducationFooterLinks from '@/components/EducationFooterLinks';
import coursesData from '@/data/courses.json';

function ProgramsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [visibleCount, setVisibleCount] = React.useState(12);
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const generateSlug = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const categories = [
    'All', 'Office Management', 'Fashion Technology', 'Information Technology',
    'Foreign Languages', 'Interior Designing', 'Travel & Tourism',
    'Beauty & Wellness', 'Personality Development', 'Health Care Sector'
  ];

  const slugParam = searchParams.get('category') || 'all';
  const activeCategory = categories.find(cat => generateSlug(cat) === slugParam) || 'All';

  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-flower1', link: '/education-institute' },
    { title: 'Programs', icon: 'bi-mortarboard', link: '/education-institute/programs' },
    { title: 'Admission', icon: 'bi-person-vcard', link: '/education-institute/admission' },
    { title: 'Life@YWCA', icon: 'bi-people', link: '/news?category=Academic+News' },
    { title: 'Contact us', icon: 'bi-telephone', link: '/education-institute/contact' },
  ];

  const handleCategoryChange = (cat) => {
    const slug = generateSlug(cat);
    router.push(`/education-institute/programs?category=${slug}`, { scroll: false });
    setVisibleCount(12);
  };

  const filteredCourses = activeCategory === 'All'
    ? coursesData
    : coursesData.filter(c => c.category === activeCategory);

  const visibleCourses = filteredCourses.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <main>
      {/* Banner Section */}
      <SideNavBanner
        height="360px"
        title={
          <>
            EDUCATIONAL<br />INSTITUTE
          </>
        }
        bgImage="/images/education-institute/aca-bnr.jpg"
        navItems={bannerNavItems}
        activePath="/education-institute/programs"
      />

      {/* Filter Bar */}
      <section className={styles.filterBar}>
        <div className="container">
          <div className={styles.filterContainer}>
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className={`${styles.filterPill} ${activeCategory === cat ? styles.filterPillActive : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.coursesSection}>
        <div className="container">
          {filteredCourses.length > 0 ? (
            <>
              <div className="row">
                {visibleCourses.map(course => (
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={course.id}>
                    <div className={styles.courseCard}>
                      <img src={course.image} alt={course.title} className={styles.courseImage} />
                      <div className={styles.courseContent}>
                        <h5 className={styles.courseTitle}>{course.title}</h5>
                        <div className={styles.courseDetail}>
                          <span className={styles.courseDetailLabel}>Duration</span>
                          <span>{course.duration}</span>
                        </div>
                        <div className={styles.courseDetail}>
                          <span className={styles.courseDetailLabel}>Eligibility</span>
                          <span>{course.eligibility}</span>
                        </div>
                        <div className={styles.btnGroup}>
                          <button className={styles.viewMoreBtn} onClick={() => setSelectedCourse(course)}>
                            View More
                          </button>
                          <Link href="/education-institute/admission" className={styles.admissionBtn}>Admission</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {visibleCount < filteredCourses.length && (
                <div className="text-center mt-4">
                  <button className={styles.exploreMoreBtn} onClick={handleLoadMore}>Load more</button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-5">
              <h4 style={{ color: '#666', marginBottom: '10px' }}>No programs found</h4>
              <p style={{ color: '#888', marginBottom: '20px' }}>We currently don't have any programs listed in this category.</p>
              <button
                className={styles.exploreMoreBtn}
                onClick={() => handleCategoryChange('All')}
              >
                View All Programs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Placement Partners */}
      <PlacementPartners />

      {/* Footer Links Section */}
      <EducationFooterLinks />

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className={styles.modalOverlay} onClick={() => setSelectedCourse(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedCourse(null)}>&times;</button>
            <div className={styles.modalHeader}>
              <h3 className="sectionTitle_3">{selectedCourse.title}</h3>
            </div>
            <div className={styles.modalBody}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
                <div style={{ flex: '1 1 30%' }}><strong>Category:</strong><br />{selectedCourse.category}</div>
                <div style={{ flex: '1 1 30%' }}><strong>Duration:</strong><br />{selectedCourse.duration}</div>
                <div style={{ flex: '1 1 30%' }}><strong>Eligibility:</strong><br />{selectedCourse.eligibility}</div>
              </div>

              {selectedCourse.description && (
                <div style={{ marginBottom: '20px' }}>
                  <strong style={{ color: '#a212b5', fontSize: '18px' }}>About Course / Objective</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>{selectedCourse.description}</p>
                </div>
              )}

              {selectedCourse.structure && selectedCourse.structure.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <strong style={{ color: '#a212b5', fontSize: '18px' }}>Programme Structure</strong>
                  <ul style={{ paddingLeft: '0', marginTop: '10px', color: '#444', listStyle: 'none' }}>
                    {selectedCourse.structure.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                        <i className={styles.customCircleIcon}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedCourse.content && selectedCourse.content.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <strong style={{ color: '#a212b5', fontSize: '18px' }}>Core Subjects / Content</strong>
                  <ul style={{ paddingLeft: '0', marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px', color: '#444', listStyle: 'none' }}>
                    {selectedCourse.content.map((item, idx) => (
                      <li key={idx} style={{ width: '45%', marginBottom: '5px', display: 'flex', alignItems: 'flex-start' }}>
                        <i className={styles.customCircleIcon}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedCourse.career && selectedCourse.career.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <strong style={{ color: '#a212b5', fontSize: '18px' }}>Career Opportunities</strong>
                  <ul style={{ paddingLeft: '0', marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px', color: '#444', listStyle: 'none' }}>
                    {selectedCourse.career.map((item, idx) => (
                      <li key={idx} style={{ width: '45%', marginBottom: '5px', display: 'flex', alignItems: 'flex-start' }}>
                        <i className={styles.customCircleIcon}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <Link href="/education-institute/admission" className={styles.admissionBtn} style={{ padding: '12px 40px', fontSize: '16px' }}>Apply for Admission</Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

export default function ProgramsPage() {
  return (
    <Suspense fallback={<div>Loading programs...</div>}>
      <ProgramsContent />
    </Suspense>
  );
}
