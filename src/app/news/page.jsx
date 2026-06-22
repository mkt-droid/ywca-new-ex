'use client'
import InnerBanner from "@/components/partials/InnerBanner"
import styles from '@/styles/News.module.css'
import Link from "next/link"
import { useRef, useEffect } from "react"

// ── News data array ──
const newsItems = [
  {
    id: 1,
    title: 'World YWCA Day – Celebrating Sisterhood and Solidarity – 25th April, 2026',
    image: '/images/News-item-1.jpg',
    slug: 'world-ywca-day-2026',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
  },
  {
    id: 2,
    title: 'Lenten Prayer Meeting – 27th March 2026',
    image: '/images/News-item-2.jpg',
    slug: 'lenten-prayer-meeting-2026',
     description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
  },
  {
    id: 3,
    title: 'Thrive Music Festival – 14th March 2026',
    image: '/images/News-item-3.jpg',
    slug: 'thrive-music-festival-2026',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
  },
  {
    id: 4,
    title: "International Women's Day – 7th March 2026",
    image: '/images/News-item-4.jpg',
    slug: 'international-womens-day-2026',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
  }
]

const News = () => {
  const sectionRef = useRef(null)

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
  }, [])

  return (
    <>
      <InnerBanner
         title="Lorem Ipsum is dummy text of type setting"
     subTitle=""
       images ={ [
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

          {/* ── Cards Grid ── */}
          <div className={`row g-4`} ref={sectionRef}>
            {newsItems.map((item, i) => (
              <div
                key={item.id}
                className={`col-12 col-md-6 col-lg-4 ${styles.animateCard}`}
                data-delay={i * 100}
              >
                {
                  i === 0 ?    <Link href={`/news/${item.slug}`}>
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
                    <span  className={`${styles.cardTitle} ${styles.gradientText}`}>
                      {item.title}
                    </span>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.contentWrapper}>
                    <p className={styles.cardText}>{item.description}</p>
                    </div>
                  </div>

                </div>
                </Link> : <div className={styles.newsCard}>

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
                    <span  className={`${styles.cardTitle} ${styles.gradientText}`}>
                      {item.title}
                    </span>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.contentWrapper}>
                    <p className={styles.cardText}>{item.description}</p>
                    </div>
                  </div>

                </div>
                }
             
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default News