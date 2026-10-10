'use client'
import InnerBanner from "@/components/partials/InnerBanner"
import styles from '@/styles/News.module.css'
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import newsData from '@/data/news.json'
import { Suspense, useRef, useEffect, useState } from "react"

const NewsContent = () => {
  const sectionRef = useRef(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams ? searchParams.get('category') : null
  
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    } else {
      setSelectedCategory('All')
    }
  }, [categoryParam])

  const newsForPage = newsData.filter(item => !item.isHome);
  const categories = ['All', ...new Set(newsForPage.map(item => item.category))]

  const filteredNews = selectedCategory === 'All'
    ? newsForPage
    : newsForPage.filter(item => item.category === selectedCategory)

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'All') {
      router.push('/news', { scroll: false })
    } else {
      router.push(`/news?category=${encodeURIComponent(cat)}`, { scroll: false })
    }
  }

  // ── Same IntersectionObserver logic as BoardOfManagement ──
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

    const cards = sectionRef.current?.querySelectorAll('.' + styles.animateCard)
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [selectedCategory])

  return (
    <>
      <InnerBanner
        title="News & Updates"
        subTitle=""
        images={[
          "/images/News-banner.jpg"
        ]}

        bg="#E1D8C6"
        breadcrumb={[
          { label: 'News & Updates', link: '/news' },
        ]}
      />

      <section className={styles.newsSection}>
        <div className="container">

          {/* ── Section Title ── */}
          <h2 className={styles.sectionTitle}>NEWS</h2>

          {/* ── Category Tabs ── */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={selectedCategory === cat ? styles.categoryBtnActive : styles.categoryBtn}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Cards Grid ── */}
          <div className={`row g-4`} ref={sectionRef}>
            {filteredNews.map((item, i) => (
              <div
                key={item.id}
                className={`col-12 col-md-6 col-lg-4 ${styles.animateCard}`}
                data-delay={i * 100}
              >
                <Link href={`/news/${item.slug}`} style={{ textDecoration: 'none' }}>
                  <div className={styles.newsCard}>
                    {/* Image */}
                    <div className={styles.cardImgWrap}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.cardImg}
                      />
                    </div>

                    {/* Body */}
                    <div className={styles.cardBody}>
                      <div className={styles.titleWrapper}>
                        <span className={`${styles.cardTitle} ${styles.gradientText}`}>
                          {item.title}
                        </span>
                      </div>
                      <hr className={styles.divider} />
                      <div className={styles.contentWrapper}>
                        <p className={styles.cardText}>
                          {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

const News = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsContent />
    </Suspense>
  )
}

export default News