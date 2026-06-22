import InnerBanner from "@/components/partials/InnerBanner";
import styles from '@/styles/Inner.module.css'
export default async function Page({ params }) {
  const { slug } = await params;
  const memberData = {
  name: 'Ms. Rhiya Varghese',
  designation: 'President YWCA',
  tagline: 'Leading YWCA Delhi to New heights',
  image: '/images/bom-1.jpg',
  since: 'January 1, 2015',
  funFact: 'Lorem Ipsum is simply dummy text of typesetting.',
  quote: "I lead YWCA Delhi's long-term strategy and emerging growth initiatives",
  bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries, but also the leap into 
  electronic typesetting, remaining essentially unchanged.`,
  linkedin: 'https://linkedin.com'
}

  return (
    <>
       {/* <InnerBanner 
      image="/images/Board-of-Management-Member-banner.jpg"
      breadcrumb={[
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Board of Management",
      link: "/about/history",
    },
  ]}/> */}


        <section className={styles.innerPageSection}>
            <div className="container">

        {/* ── Hero Card ── */}
        <div className={styles.memberHero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroName}>{memberData.name}</h1>
            <div className={styles.heroBottom}>
              <p className={styles.heroDesignation}>{memberData.designation}</p>
              <h2 className={styles.heroTagline}>{memberData.tagline}</h2>
            </div>
          </div>
          <div className={styles.heroRight}>
            <img src={memberData.image} alt={memberData.name} />
          </div>
        </div>

        {/* ── Details Section ── */}
        <div className={styles.memberDetails}>

          <div className={styles.detailsLeft}>
            <p className={styles.detailLabel}>Been with YWCA since</p>
            <p className={styles.detailValue}>{memberData.since}</p>

            <p className={styles.detailLabel}>What you won't learn from my bio</p>
            <p className={`${styles.detailValue} ${styles.funFact}`}>
              {memberData.funFact}
            </p>

            <a
              href={memberData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinBtn}
            >
              Connect on LinkedIn
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className={styles.detailsDivider} />

          <div className={styles.detailsRight}>
            <p className={styles.quoteText}>{memberData.quote}</p>
            <p className={styles.bioText}>{memberData.bio}</p>
          </div>

        </div>
        </div>
      </section>
    </>
  )
}