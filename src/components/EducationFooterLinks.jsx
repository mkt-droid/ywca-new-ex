import React from 'react';
import Link from 'next/link';
import styles from './EducationFooterLinks.module.css';

export default function EducationFooterLinks() {
  const footerLinks = [
    {
      title: 'Office Management',
      links: [
        { label: 'Diploma in Office Management', link: '#' },
        { label: 'Diploma in Office Management Advance', link: '#' },
        { label: 'Diploma in Office Management Advance 2nd Yr Direct Entry', link: '#' },
        { label: 'Data Analytics', link: '#' },
        { label: 'Diploma in Office Assistant', link: '#' },
        { label: 'Diploma in Stenography', link: '#' },
        { label: 'Course name seven', link: '#' }
      ]
    },
    {
      title: 'Fashion Technology',
      links: [
        { label: 'Course name one', link: '#' }, { label: 'Course name two', link: '#' }, { label: 'Course name three', link: '#' }, { label: 'Course name four', link: '#' }, { label: 'Course name five', link: '#' }, { label: 'Course name six', link: '#' }, { label: 'Course name seven', link: '#' }
      ]
    },
    {
      title: 'Information Technology',
      links: [
        { label: 'Course name one', link: '#' }, { label: 'Course name two', link: '#' }, { label: 'Course name three', link: '#' }, { label: 'Course name four', link: '#' }, { label: 'Course name five', link: '#' }, { label: 'Course name six', link: '#' }, { label: 'Course name seven', link: '#' }
      ]
    },
    {
      title: 'Foreign Languages',
      links: [
        { label: 'Course name one', link: '#' }, { label: 'Course name two', link: '#' }, { label: 'Course name three', link: '#' }, { label: 'Course name four', link: '#' }, { label: 'Course name five', link: '#' }, { label: 'Course name six', link: '#' }, { label: 'Course name seven', link: '#' }
      ]
    },
    {
      title: 'Interior Designing',
      links: [
        { label: 'Course name one', link: '#' }, { label: 'Course name two', link: '#' }, { label: 'Course name three', link: '#' }, { label: 'Course name four', link: '#' }, { label: 'Course name five', link: '#' }, { label: 'Course name six', link: '#' }, { label: 'Course name seven', link: '#' }
      ]
    },
    {
      title: 'Travel & Tourism',
      links: [
        { label: 'Course name one', link: '#' }, { label: 'Course name two', link: '#' }, { label: 'Course name three', link: '#' }, { label: 'Course name four', link: '#' }, { label: 'Course name five', link: '#' }, { label: 'Course name six', link: '#' }, { label: 'Course name seven', link: '#' }
      ]
    },
    {
      title: 'Communication',
      links: [
        { label: 'Course name one', link: '#' }, { label: 'Course name two', link: '#' }, { label: 'Course name three', link: '#' }, { label: 'Course name four', link: '#' }, { label: 'Course name five', link: '#' }, { label: 'Course name six', link: '#' }, { label: 'Course name seven', link: '#' }
      ]
    },
    {
      title: 'Beauty & Wellness',
      links: [
        { label: 'Course name one', link: '#' }, { label: 'Course name two', link: '#' }, { label: 'Course name three', link: '#' }, { label: 'Course name four', link: '#' }, { label: 'Course name five', link: '#' }, { label: 'Course name six', link: '#' }, { label: 'Course name seven', link: '#' }
      ]
    },
    {
      title: 'Health Care Sector',
      links: [
        { label: 'Course name one', link: '#' }, { label: 'Course name two', link: '#' }, { label: 'Course name three', link: '#' }, { label: 'Course name four', link: '#' }, { label: 'Course name five', link: '#' }, { label: 'Course name six', link: '#' }, { label: 'Course name seven', link: '#' }
      ]
    }
  ];

  return (
    <section className={styles.footerLinksSection}>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {footerLinks.map((col, idx) => (
            <div className="col mb-4" key={idx}>
              <h6 className={styles.footerColTitle}>{col.title}</h6>
              <ul className={styles.footerLinkList}>
                {col.links.map((item, lIdx) => (
                  <li key={lIdx} className={styles.footerLinkItem}>
                    <Link href={item.link} className={styles.footerLink}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
