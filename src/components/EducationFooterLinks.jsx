import React from 'react';
import Link from 'next/link';
import styles from './EducationFooterLinks.module.css';
import coursesData from '@/data/courses.json';

export default function EducationFooterLinks() {
  const coursesByCategory = coursesData.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <section className={styles.footerLinksSection}>
      <div className="container-fluid px-lg-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {Object.entries(coursesByCategory).map(([category, courses]) => {
            const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <div className="col mb-4" key={category}>
                <h6 className={styles.footerColTitle}>{category}</h6>
                <ul className={styles.footerLinkList}>
                  {courses.map((course) => (
                    <li key={course.id} className={styles.footerLinkItem}>
                      <Link href={`/education-institute/programs?category=${slug}`} className={styles.footerLink}>
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
