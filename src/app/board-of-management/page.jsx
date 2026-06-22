'use client'
import InnerBanner from "@/components/partials/InnerBanner"
import styles from '@/styles/Inner.module.css'
import Link from "next/link"
import { useRef, useEffect } from "react"

// ── Single array with all members including President ──
const allMembers = [
  {
    name: 'MS. RHIYA VARGHESE',
    title: 'President YWCA',
    image: '/images/President.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry printing and type setting industry.'
  },
  {
    name: 'MS. NISHA SAMUEL',
    title: 'Vice President',
    image: '/images/board-of-management/ms-nisha-samual.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. APPHIA AKANSHA DANIEL',
    title: 'Vice President',
    image: '/images/board-of-management/ms-apphia-akanksha-daniel.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. PEYYALA MERCY PARIMALA',
    title: 'Parimala Treasurer',
    image: '/images/board-of-management/ms-peyyala-Mercy.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. SURUCHI D DASS',
    title: 'Asst. Treasurer',
    image: '/images/board-of-management/ms-suruchi-Dass.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. TRIPTI CHRISTINA',
    title: 'Recording Secretary',
    image: '/images/board-of-management/ms-tripti.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. RACHEL MERCY',
    title: 'Oommen Chairperson, CDP',
    image: '/images/board-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. AMELIA ANDREWS',
    title: 'Chairperson, Youth',
    image: '/images/board-of-management/ms-amelia-andrews.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. ANUSHKA ROSE',
    title: 'Chairperson, Personnel Committee',
    image: '/images/board-of-management/ms-anushka-rose.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. SAMANTHA MARIA',
    title: 'Fernandes Chairperson, Finance',
    image: '/images/board-of-management/ms-samantha.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. SHWETA S. FREDERICK',
    title: 'Member',
    image: '/images/board-of-management/ms-shweta-s.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. DHEERENDER BHOLA',
    title: 'Chairperson, REC',
    image: '/images/board-of-management/ms-dheerender-bhola.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. ARADHNA PETER',
    title: 'Chairperson, FRAP',
    image: '/images/board-of-management/ms-aradhna-peter.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. BLISS PETER',
    title: 'Member',
    image: '/images/board-member-thumb.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.'
  },
  {
    name: 'MS. LEAH JOHN',
    title: 'Member',
    image: '/images/board-member-thumb.jpg',
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

const BoardOfManagement = () => {
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
        images={["/images/Board-of-Management-Member-banner.jpg"]}
        breadcrumb={[
          { label: "About Us", link: "/about" },
          { label: "Board of Management", link: "/about/history" },
        ]}
      />

      <section className={styles.innerPageSection}>
        <div className="container">
          <section className={styles.boardSection} ref={sectionRef}>

            <div className="row">
              {allMembers.map((m, i) => (
                <div
                  key={i}
                  className="col-lg-4 col-md-4 col-sm-6 col-12 mb-20"
                >
                  <div
                    className={styles.memberCard}
                    data-delay={i * 80}
                  >
                    {
                      i === 0 ?  <Link href={`/board-of-management/${m.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {m.image
                        ? <img src={m.image} alt={m.name} />
                        : <PlaceholderImg />
                      }
                      <p className={styles.memberName}>{m.name}</p>
                      <p className={styles.memberTitle}>{m.title}</p>
                      <p className={styles.desc}>{m.description}</p>
                    </Link> : <>
                      {m.image
                        ? <img src={m.image} alt={m.name} />
                        : <PlaceholderImg />
                      }
                      <p className={styles.memberName}>{m.name}</p>
                      <p className={styles.memberTitle}>{m.title}</p>
                      <p className={styles.desc}>{m.description}</p>
                    </>
                    }
                   
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

export default BoardOfManagement