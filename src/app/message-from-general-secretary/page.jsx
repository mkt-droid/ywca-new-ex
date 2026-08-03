'use client'
import InnerPageBanner from "@/components/partials/InnerPageBanner";
import styles from '@/styles/Inner.module.css'

export default function MessageGeneralSecretary() {
  const memberData = {
    name: 'Ms. Pragya Mohanty',
    designation: 'General Secretary YWCA of Delhi',
    tagline: 'Leading YWCA of Delhi to New heights',
    image: '/images/Ms.-Pragya-Monthly.png',
    since: 'January 1, 2015',
    linkedin: '#'
  }

  return (
    <>
      <InnerPageBanner
        bgImage="/images/board-of-management/bom-bnr.jpg"
        overlayColor="linear-gradient(to right, rgba(146, 45, 157, 0.85), rgba(146, 45, 157, 0.4))"
        defaultGrayscale={false}
        contentMarginTop="25px"
        marginBottom="25px"
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
                Remaining steadfast to our commitment to gender equality and social inclusion, we carried forward our mission through the three pillars of Strengthening Communities, Building Youth, and Nurturing Nature.
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
              <h3 className={styles.detailHeading}>General Secretary Message</h3>
              <div className={styles.bioText}>
                <p>As I reflect on the journey of the past year, I feel humbled for the work we have done, for the impact we have made, for the collective growth and resilience we have built, smiles we have brought to many faces and the blessings of the Almighty we have received. The year 2024 – 2025, with all its achievements, learning and challenges has deepened our conviction that empowerment, when rooted in faith and collective action, has the power to transform lives and communities.</p>
                <p>Remaining steadfast to our commitment to gender equality and social inclusion, we carried forward our mission through the three pillars of Strengthening Communities, Building Youth, and Nurturing Nature. Our Community Resource Centres continue to thrive as non-judgmental safe spaces where women come together to claim their rights, access entitlements, skilling and livelihood opportunities, strengthen their agency and resilience. In the three Shelter Homes, women in distress and unimaginable situations of violence have found safety, solidarity, healing and pathways to reintegrate. Women survivors of violence, abandonment, and trafficking were supported with dignity and compassion.</p>
                <p>Youth empowerment remained a cornerstone. Hundreds of young people were equipped with employable skill training, industry-linked skills, and life orientation—preparing them for taking up leadership and being responsible citizens. Initiatives addressing career exploration, financial literacy sessions, life skill education, gender equality, sexual and reproductive health rights have enabled them to envision futures shaped by resilience and responsibility. Through these efforts, many first-generation learners and earners began rewriting the narratives of their lives differently.</p>
                <p>We have dived deeper and made more conscious efforts in strengthening our efforts towards sustainability and care for the nature. While the Eco-Justice Lab has enabled youth to lead sustainable practices, and The ReHome Store became a symbol of dignity and mindful consumption. These were part of a wider effort where communities embraced composting, recycling, and eco entrepreneurship.</p>
                <p>This journey was not without challenges. Managing human resource and financial difficulties have led us towards navigating and finding new ways of collective work and system strengthening. Each challenge became an opportunity to strengthen our systems, invest in our staff, and remain faithful to the vision entrusted to us. We learned once again that resilience lies in community, teamwork, and God's grace.</p>
                <p>I extend my sincere gratitude to the President, the Board of Management, the Committees, members, staff, partners, and well-wishers for their unwavering dedication and support. The YWCA of Delhi will continue to stand alongside women, children, and youth enabling them to rise with dignity, lead with courage, and live with equality.<br />The legacy continues.</p>
                <div className={styles.signatureBlock}>
                  <strong>Pragya Mohanty</strong><br />
                  <span>General Secretary</span><br />
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
