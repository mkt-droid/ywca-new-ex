'use client'
import InnerBanner from "@/components/partials/InnerBanner"
import styles from '@/styles/Inner.module.css'
import Link from "next/link"
import { useRef, useEffect } from "react"

const members = [
  {
    name: 'MS. PRAGYAN MOHANTY1',
    title: 'General Secretary',
    image: '/images/Ms.-Pragya-Monthly.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. RUBY RAJEEV',
    title: 'Admin Manager',
    image: '/images/executive-team-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. CRISTY',
    title: 'Asst. Manager, HR',
    image: '/images/executive-team-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. AMRITA UPALI SINGH',
    title: 'HOD CDP',
    image: '/images/executive-team-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. LINDA GANGMEI',
    title: 'HOD Shelter Homes',
    image: '/images/executive-team-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. LOVNITA DOGRA',
    title: 'Communications Coordinator & Coordinator, FRAP',
    image: '/images/executive-team-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. RAJNI RAWAT',
    title: 'Coordinator, Youth, REC, PASI',
    image: '/images/executive-team-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MR. SANJEV MASIH',
    title: 'HOD BTFH',
    image: '/images/executive-member-male-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. VANDANA MASHIH',
    title: 'Deputy Director Education Institutes',
    image: '/images/executive-team-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
]

// ── Placeholder silhouette ──
const PlaceholderImg = () => (
  <div className={styles.placeholderImg}>
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="22" fill="#9aa" />
      <path d="M10 110 Q10 70 50 70 Q90 70 90 110Z" fill="#9aa" />
    </svg>
  </div>
)

const ExecutiveTeam = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const delay = parseInt(el.dataset.delay || 0)
          setTimeout(() => el.classList.add(styles.visible), delay)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })

    const cards = sectionRef.current?.querySelectorAll('[data-delay]')
    cards?.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <InnerBanner
        title="Lorem Ipsum is dummy text of type setting"
        subTitle=""
        images={["/images/Executive-team-banner.jpg"]}
        breadcrumb={[
          { label: "About Us", link: "/about" },
          { label: "Executive Team", link: "/about/history" },
        ]}
      />

      <section className={styles.innerPageSection}>
        <div className="container">
          <section className={styles.boardSection} ref={sectionRef}>

            <div className="row">
              {members.map((m, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-20"
                >
                  <div
                    className={styles.memberCard}
                    data-delay={i * 80}
                  >
                    {/* <Link href={`/executive-team/${m.name.toLowerCase().replace(/\s+/g, '-')}`}> */}
                    {m.image
                      ? <img src={m.image} alt={m.name} />
                      : <PlaceholderImg />
                    }
                    <p className={styles.memberName}>{m.name}</p>
                    <p className={styles.memberTitle}>{m.title}</p>
                    <p className={styles.desc}>{m.description}</p>
                    {/* </Link> */}
                  </div>
                </div>
              ))}
            </div>

          </section>
        </div>
      </section>
    </>
  )
}

export default ExecutiveTeam