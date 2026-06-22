'use client'
import InnerBanner from "@/components/partials/InnerBanner"
import styles from '@/styles/NewsDetail.module.css'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// ── Mock detail data (replace with real fetch by slug) ──
const newsDetail = {
  id: 1,
  title: 'World YWCA Day – Celebrating Sisterhood and Solidarity – 25th April, 2026',
  image: '/images/News-item-1.jpg',
  date: '25th April, 2026',
  category: 'Events',
  author: 'YWCA Delhi',
  slug: 'world-ywca-day-2026',
  content: [
    {
      type: 'paragraph',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      type: 'paragraph',
      text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      type: 'quote',
      text: '"Empowering women, empowering communities – together we rise, together we thrive."',
    },
    {
      type: 'paragraph',
      text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      type: 'subheading',
      text: 'Highlights of the Celebration',
    },
    {
      type: 'list',
      items: [
        'Cultural performances by YWCA members from across regions',
        'Panel discussion on women\'s leadership and solidarity',
        'Recognition ceremony for outstanding contributors',
        'Community lunch and networking session',
        'Exhibition of artwork by YWCA youth program participants',
      ],
    },
    {
      type: 'paragraph',
      text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    },
  ],
  gallery: [
    '/images/News-item-1.jpg',
    '/images/News-item-1.jpg',
    '/images/News-item-1.jpg',
    '/images/News-item-1.jpg',
    '/images/News-item-1.jpg',
    '/images/News-item-1.jpg',
  ],
}

// ── Related news ──
const relatedNews = [
  {
    id: 2,
    title: 'Lenten Prayer Meeting – 27th March 2026',
    image: '/images/News-item-2.jpg',
    slug: 'lenten-prayer-meeting-2026',
    date: '27th March, 2026',
  },
  {
    id: 3,
    title: 'Thrive Music Festival – 14th March 2026',
    image: '/images/News-item-3.jpg',
    slug: 'thrive-music-festival-2026',
    date: '14th March, 2026',
  },
  {
    id: 4,
    title: "International Women's Day – 7th March 2026",
    image: '/images/News-item-4.jpg',
    slug: 'international-womens-day-2026',
    date: '7th March, 2026',
  },
]

const NewsDetail = () => {
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
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  {newsDetail.author}
                </span>
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
                {newsDetail.content.map((block, i) => {
                  if (block.type === 'paragraph') {
                    return <p key={i} className={styles.para}>{block.text}</p>
                  }
                  if (block.type === 'quote') {
                    return (
                      <blockquote key={i} className={styles.blockquote}>
                        <span className={styles.quoteIcon}>"</span>
                        <p>{block.text.replace(/"/g, '')}</p>
                      </blockquote>
                    )
                  }
                  if (block.type === 'subheading') {
                    return <h3 key={i} className={styles.subheading}>{block.text}</h3>
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={i} className={styles.articleList}>
                        {block.items.map((item, j) => (
                          <li key={j} className={styles.articleListItem}>
                            <span className={styles.listDot} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return null
                })}
              </div>
   {/* Share */}
              <div className={`${styles.shareRow} ${styles.animate}`} data-delay="300">
                <span className={styles.shareLabel}>Share this article:</span>
                <div className={styles.shareIcons}>
                  {['Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map((s) => (
                    <button key={s} className={styles.shareBtn} aria-label={`Share on ${s}`}>
                      {s === 'Facebook' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      )}
                      {s === 'Twitter' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      )}
                      {s === 'LinkedIn' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                        </svg>
                      )}
                      {s === 'WhatsApp' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              {/* Gallery */}
              {/* <div className={`${styles.gallerySection} ${styles.animate}`} data-delay="250" ref={galleryRef}>
                <h3 className={styles.galleryTitle}>Gallery</h3>
     <div className={styles.galleryGrid}>
  {newsDetail.gallery.map((img, i) => (
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
              </div> */}

           

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
                    {['Events', 'Programs', 'Announcements', 'Community', 'Advocacy'].map((cat) => (
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