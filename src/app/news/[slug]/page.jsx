'use client'
import InnerBanner from "@/components/partials/InnerBanner"
import styles from '@/styles/NewsDetail.module.css'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useParams } from 'next/navigation'
import newsData from '@/data/news.json'

const NewsDetail = () => {
  const params = useParams()
  const slug = params?.slug

  const newsDetail = newsData.find(item => item.slug === slug) || newsData[0]
  const relatedNews = newsData.filter( item => 
    item.slug !== slug &&
    item.category === newsDetail.category
  ).slice(0, 4)
  const categories = [...new Set(newsData.map(obj => obj.category))]

  const contentRef = useRef(null)
  const galleryRef = useRef(null)
  const relatedRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = parseInt(el.dataset.delay || 0)
            setTimeout(() => el.classList.add(styles.visible), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )

    const animateEls = document.querySelectorAll('.' + styles.animate)
    animateEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* <InnerBanner
        title={newsDetail.title}
        subTitle=""
        images={["/images/News-banner.jpg"]}
        bg="#E1D8C6"
        breadcrumb={[
          { label: 'News & Updates', link: '/news' },
          { label: 'News Detail', link: '#' },
        ]}
      /> */}

      <section className={styles.detailSection}>
        <div className="container">
          <div className="row g-5">

            {/* ── Main Content ── */}
            <div className="col-12 col-lg-8">

              {/* Hero Image */}
              <div className={`${styles.heroImageWrap} ${styles.animate}`} data-delay="0">
                <img
                  src={newsDetail.image}
                  alt={newsDetail.title}
                  className={styles.heroImage}
                />
                <div className={styles.imageBadge}>{newsDetail.category}</div>
              </div>

              {/* Meta Row */}
              <div className={`${styles.metaRow} ${styles.animate}`} data-delay="100">
                <span className={styles.metaItem}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {newsDetail.date}
                </span>
                {/* <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  {newsDetail.author}
                </span> */}
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  {newsDetail.category}
                </span>
              </div>

              <div className={styles.dividerLine} />

              {/* Article Title */}
              <h1 className={`${styles.articleTitle} ${styles.animate}`} data-delay="150">
                {newsDetail.title}
              </h1>

              {/* Article Body */}
              <div className={`${styles.articleBody} ${styles.animate}`} data-delay="200" ref={contentRef}>
                <p className={styles.para}>{newsDetail.description}</p>
              </div>
   {/* Share */}
              <div className={`${styles.shareRow} ${styles.animate}`} data-delay="300">
                <span className={styles.shareLabel}>Share this article:</span>
                <div className={styles.shareIcons}>
                  {['Facebook', 'LinkedIn', 'Instagram'].map((s) => (
                    <button key={s} className={styles.shareBtn} aria-label={`Share on ${s}`}>
                      {s === 'Facebook' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      )}
                      {s === 'LinkedIn' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                        </svg>
                      )}
                      {s === 'Instagram' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              {/* Gallery */}
              <div className={`${styles.gallerySection} ${styles.animate}`} data-delay="250" ref={galleryRef}>
                <h3 className={styles.galleryTitle}>Gallery</h3>
                <div className={styles.galleryGrid}>
                  {newsDetail.gallery && newsDetail.gallery.map((img, i) => (
                    <div
                      key={i}
                      className={styles.galleryItem}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className={styles.galleryImg}
                      />
                      <div className={styles.galleryOverlay}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

           

              {/* Back button */}
              <div className={`${styles.backWrap} ${styles.animate}`} data-delay="350">
                <Link href="/news" className={styles.backBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                  </svg>
                  Back to News
                </Link>
              </div>

            </div>

            {/* ── Sidebar ── */}
            <div className="col-12 col-lg-4">
              <div className={styles.sidebar}>

                {/* Related News */}
                <div className={`${styles.sideWidget} ${styles.animate}`} data-delay="200" ref={relatedRef}>
                  <h4 className={styles.widgetTitle}>Related News</h4>
                  <div className={styles.relatedList}>
                    {relatedNews.map((item, i) => (
                      <Link href={`/news/${item.slug}`} key={item.id} className={styles.relatedCard}>
                        <div className={styles.relatedImgWrap}>
                          <img src={item.image} alt={item.title} className={styles.relatedImg} />
                        </div>
                        <div className={styles.relatedInfo}>
                          <span className={styles.relatedDate}>{item.date}</span>
                          <p className={styles.relatedTitle}>{item.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className={`${styles.sideWidget} ${styles.animate}`} data-delay="300">
                  <h4 className={styles.widgetTitle}>Categories</h4>
                  <div className={styles.categoryList}>
                    {categories.map((cat) => (
                      <Link key={cat} href="#" className={styles.categoryTag}>
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Widget */}
                {/* <div className={`${styles.ctaWidget} ${styles.animate}`} data-delay="400">
                  <div className={styles.ctaInner}>
                    <h4 className={styles.ctaTitle}>Stay Connected</h4>
                    <p className={styles.ctaText}>Subscribe to our newsletter and never miss an update from YWCA Delhi.</p>
                    <div className={styles.subscribeForm}>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className={styles.subscribeInput}
                      />
                      <button className={styles.subscribeBtn}>Subscribe</button>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Image Popup */}
{selectedImage && (
  <div
    className={styles.popupOverlay}
    onClick={() => setSelectedImage(null)}
  >
    <div
      className={styles.popupContent}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={styles.closeBtn}
        onClick={() => setSelectedImage(null)}
      >
        ×
      </button>

      <img
        src={selectedImage}
        alt="Preview"
        className={styles.popupImage}
      />
    </div>
  </div>
)}
    </>
  )
}

export default NewsDetail