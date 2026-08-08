import InnerPageBanner from "@/components/partials/InnerPageBanner";
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
            <InnerPageBanner
                bgImage="/images/board-of-management/bom-bnr.jpg"
                overlayColor="linear-gradient(to right, rgba(146, 45, 157, 0.85), rgba(146, 45, 157, 0.4))"
                defaultGrayscale={false}
                contentMarginTop="35px"
                marginBottom="35px"
            >
                <div className={styles.heroInner}>
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
            </InnerPageBanner>

            <section className={styles.innerPageSection} style={{ backgroundColor: '#FCF7F7' }}>
                <div className="container">
                    {/* ── Details Section ── */}
                    <div className={styles.memberDetails}>

                        <div className={styles.detailsLeft}>
                            <p className={styles.detailLabel}>Been with YWCA since</p>
                            <p className={styles.detailValue}>{memberData.since}</p>

                            <p className={styles.bioText} style={{ marginBottom: "30px" }}>
                                Psalm 106:3 Blessed are those who act justly, who always do what is right.
                            </p>

                            <a
                                href={memberData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkedinBtn}
                            >
                                Connect on LinkedIn
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "10px" }}>
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className={styles.detailsDivider} />

                        <div className={styles.detailsRight}>
                            <h3 className={styles.detailHeading}>President YWCA Message</h3>
                            <div className={styles.bioText}>
                                <p>The YWCA of Delhi remains steadfast in its mission to empower women and girls, creating a just, inclusive society where every individual can thrive regardless of caste, creed, race, or economic background. Through our Women’s Training Institute, Working Women’s Hostels, Shelter Homes, and development programmes, we equip women with skills, safety, and support for a life of dignity and independence.</p>
                                <p>Our dedication to community development reaches beyond urban centers, with our comprehensive Rural and Urban Development Initiatives (RDP & UDP) driving positive change. Our grassroots initiatives aim to transform the lives of girls and women by increasing access to vital resources, including healthcare, education, and protection, ultimately driving lasting positive change.</p>

                                <p>Guided by the Quadrennium Goals, we are committed to strengthening communities, building resilient youth, and nurturing nature. Our ecumenical and interfaith efforts further our vision of unity, justice, and social change. Rooted in faith and service, the YWCA of Delhi is a space of transformation where voices rise, talents bloom, and dreams take flight. Let us continue this journey together, building a future where every woman not only survives but truly thrives.</p>



                                <div className={styles.signatureBlock}>
                                    <strong>Ms. Rhiya Varghese</strong><br />
                                    <span>President YWCA</span><br />
                                    <span>YWCA of Delhi</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}