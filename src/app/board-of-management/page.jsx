'use client'
import InnerPageBanner from "@/components/partials/InnerPageBanner"
import styles from '@/styles/Inner.module.css'
import Link from "next/link"
import { useRef, useEffect } from "react"

// ── Single array with all members including President ──
const allMembers = [
  {
    name: 'Ms. Rhiya Varghese',
    title: 'President YWCA',
    image: '/images/President.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
    {
    name: 'Ms. Pragya Mohanty',
    title: 'General Secretary YWCA of Delhi',
    image: '/images/Ms.-Pragya-Monthly.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  


  {
    name: 'Ms. Nisha Samuel',
    title: 'Vice President YWCA',
    image: '/images/board-of-management/ms-nisha-samual.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Apphia Akansha Daniel',
    title: 'Vice President YWCA',
    image: '/images/board-of-management/ms-apphia-akanksha-daniel.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Peyyala Mercy Parimala',
    title: 'Treasurer',
    image: '/images/board-of-management/ms-peyyala-Mercy.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Suruchi D Dass',
    title: 'Asst. Treasurer',
    image: '/images/board-of-management/ms-suruchi-Dass.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Tripti Christina',
    title: 'Recording Secretary',
    image: '/images/board-of-management/ms-tripti.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Rachel Mercy Oommen',
    title: 'Chairperson, CDP',
    image: '/images/board-of-management/dummy.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Amelia Andrews',
    title: 'Chairperson, Youth',
    image: '/images/board-of-management/ms-amelia-andrews.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Anushka Rose',
    title: 'Chairperson, Personnel Committee',
    image: '/images/board-of-management/ms-anushka-rose.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Samantha Maria',
    title: 'Chairperson, Finance',
    image: '/images/board-of-management/ms-samantha.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Shweta S. Frederick',
    title: 'Member',
    image: '/images/board-of-management/ms-shweta-s.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Dheerender Bhola',
    title: 'Chairperson, REC',
    image: '/images/board-of-management/ms-dheerender-bhola.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Aradhna Peter',
    title: 'President YWCA',
    image: '/images/board-of-management/ms-aradhna-peter.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Bliss Peter',
    title: 'Vice President YWCA',
    image: '/images/board-of-management/dummy.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Leah John',
    title: 'Member',
    image: '/images/board-of-management/dummy.jpg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
  },
  {
    name: 'Ms. Ananya Das Gupta',
    title: 'Co-opted Member',
    image: '/images/board-of-management/anaya.jpeg',
    description: 'Dummy Ipsum is simply dummy filler text of the printing plus type setting and interactive media domain.'
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
      <InnerPageBanner
        title={<>BOARD <br /> OF MANAGEMENT</>}
        bgImage="/images/board-of-management/bom-bnr.jpg"
        contentMarginTop="25vh"
        overlayColor="linear-gradient(to right, rgba(146, 45, 157, 0.85), rgba(146, 45, 157, 0.4))"
        defaultGrayscale={false}
      />

      <section className={styles.innerPageSection} style={{ backgroundColor: '#FCF7F7' }}>
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
                      i === 0 ? <Link href={`/board-of-management/${m.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {m.image
                          ? <img src={m.image} alt={m.name} />
                          : <PlaceholderImg />
                        }
                        <p className={styles.memberName}>{m.name}</p>
                        <p className={styles.memberTitle}>{m.title}</p>
                        {/* <p className={styles.desc}>{m.description}</p> */}
                      </Link> : <>
                        {m.image
                          ? <img src={m.image} alt={m.name} />
                          : <PlaceholderImg />
                        }
                        <p className={styles.memberName}>{m.name}</p>
                        <p className={styles.memberTitle}>{m.title}</p>
                        {/* <p className={styles.desc}>{m.description}</p> */}
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