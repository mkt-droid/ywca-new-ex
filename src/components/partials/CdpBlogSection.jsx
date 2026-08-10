"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NewsCarousel from '@/components/partials/NewsCarousel';
import styles from '@/app/community-development-programme/page.module.css';

export default function CdpBlogSection({ blogData }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Beneficiary Stories', 'Programme Updates', 'Events & Camps', 'Volunteer Voices', 'Policy & Advocacy', 'Annual Reports'];

  const filteredData = activeCategory === 'All'
    ? blogData
    : blogData.filter(post => post.category === activeCategory);

  return (
    <section className="container mt-5 pt-4 mb-5 pb-5">
      <h2 className="sectionTitle_2 text-center d-block mb-4">Stories, Updates, and Lessons</h2>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
        {categories.map((category, idx) => (
          <span
            key={idx}
            onClick={() => setActiveCategory(category)}
            className={`badge rounded-pill px-3 py-2 fw-medium ${activeCategory === category ? styles.categoryPillActive : styles.categoryPill}`}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="mt-3">
        {filteredData.length > 0 ? (
          <NewsCarousel newsData={filteredData} linkPrefix="/news" />
        ) : (
          <p className="text-center py-5 text-muted">No posts found in this category.</p>
        )}
      </div>

      <div className="text-center mt-5">
        <Link href="/news?category=Community Development Programme" className={styles.primaryBtn}>
          View All <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
}
