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
    { title: 'Life@YWCA', icon: 'bi-building', link: '#' },
    { title: 'Contact us', icon: 'bi-telephone', link: '/education-institute/contact' },
  ];

  const handleCategoryChange = (cat) => {
    const slug = generateSlug(cat);
    router.push(`/education-institute/programs?category=${slug}`, { scroll: false });
  };

  const filteredCourses = activeCategory === 'All'
    ? coursesData
    : coursesData.filter(c => c.category === activeCategory);

  const stories = [
    {
      id: 1,
      name: 'Rachel L.',
      course: 'Diploma in Stenography',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=RL'
    },
    {
      id: 2,
      name: 'Luke',
      course: 'Diploma in Office Assistant',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=L'
    },
    {
      id: 3,
      name: 'Daniel A.',
      course: 'Diploma in Office Management',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=DA'
    },
    {
      id: 4,
      name: 'Lauren',
      course: 'Diploma in Stenography',
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since then.",
      avatar: 'https://dummyimage.com/150x150/f0f0f0/333333.png&text=L'
    }
  ];

  return (
    <main>
      {/* Banner Section */}
      <SideNavBanner
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
                {filteredCourses.map(course => (
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={course.id}>
                    <Link href="/education-institute/admission" className={styles.courseCardLink}>
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
                          <span className={styles.admissionBtn}>Admission</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <button className={styles.exploreMoreBtn}>Explore more</button>
              </div>
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

      {/* User Stories */}
      <section className={styles.storiesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>User Stories</h2>
          <div className="row">
            {stories.map(story => (
              <div className="col-lg-3 col-md-6 mb-4" key={story.id}>
                <div className={styles.storyCard}>
                  <div className={styles.storyHeader}>
                    <img src={story.avatar} alt={story.name} className={styles.storyAvatar} />
                    <div>
                      <h6 className={styles.storyName}>{story.name}</h6>
                      <p className={styles.storyCourse}>{story.course}</p>
                    </div>
                  </div>
                  <p className={styles.storyQuote}>"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <PlacementPartners />

      {/* Footer Links Section */}
      <EducationFooterLinks />

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
