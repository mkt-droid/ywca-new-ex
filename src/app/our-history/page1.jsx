import InnerBanner from "@/components/partials/InnerBanner";
import OurHistoryBanner from "@/components/partials/OurHistoryBanner";
import styles from '@/styles/Inner.module.css'
const OurHistory = () => {
  return (
    <>

    <OurHistoryBanner
      slides={[
    {
      image: "/images/History-banner-img-2.jpg",
      title: "YWCA",
      subTitle: "Building -  1912",
    },
     {
      image: "/images/History-banner-img-1.jpg",
      title: "YWCA",
      subTitle: "Building - 2026",
    }
  ]}
    
       breadcrumb={[
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Our History",
      link: "/about/history",
    },
       ]}
    />
   
         <section className={styles.innerPageSection}>
       
      <div className="container">

        <div className={styles.sectionHeading}>
          <h2><span className={styles.highlight}>Our</span> History</h2>
          <p className={styles.subtitle}>Discover the work that YWCA of Delhi does.</p>
        </div>

        <div className={styles.historyContent}>
          <div className={styles.imageCol}>
            <img src="/images/mary-jane-kinnaird.jpg" alt="Mary Jane Kinnaird" />
            <p className={styles.caption}>Mary Jane Kinnaird</p>
          </div>
          <div className={styles.textCol}>
            <p>The Young Women's Christian Association (YWCA) is one of the world's oldest and most impactful women's movements, committed to advancing gender equality, social justice, and the holistic empowerment of women. For over a century, it has worked to create inclusive spaces where women can access opportunities, build skills, and lead change within their communities.</p>
            <p>The movement began in 1855, when two visionary women, Mary Jane Kinnaird and Emma Robarts, came together to support and uplift young women facing social and economic challenges. Their shared commitment laid the foundation for a powerful global movement that continues to inspire and empower women across generations and geographies.</p>
            <p>Established in 1912, YWCA of Delhi has been serving the community for over a century. As an affiliate of the YWCA of India and part of the global World YWCA network, the organization carries forward this legacy with dedication and purpose. Since its inception, YWCA of Delhi has focused on reaching the most vulnerable and marginalized sections of society - those who are often overlooked and face the greatest hardships.</p>
          </div>
        </div>

        {/* ── Second block: Emma Roberts ── */}
        <div className={styles.historyContent}>
          <div className={styles.imageCol}>
            <img src="/images/emma-roberts.jpg" alt="Emma Roberts" />
            <p className={styles.caption}>Emma Roberts</p>
          </div>
          <div className={styles.textCol}>
            <p>Guided by its core values of compassion, inclusivity, and service, YWCA of Delhi strives to provide support, protection, and opportunities for women seeking dignity, safety, and self-reliance. It serves as a beacon of hope for women from diverse backgrounds, irrespective of caste, creed, religion, or race, particularly those recovering from difficult circumstances and aspiring to rebuild their lives.</p>
            <p>Over the years, the organization has grown from strength to strength through the active engagement of its members, staff, and partners. Its diverse departments and initiatives focus on education, vocational training, and skill development, enabling women and youth to achieve economic independence. In addition, YWCA of Delhi extends support through shelter homes, community outreach programmes, and advocacy for women's rights and safety. The organization is also committed to environmental sustainability and actively engages in initiatives that promote ecological responsibility. Through platforms for interfaith dialogue, it fosters mutual respect and understanding among different communities, promoting harmony and social cohesion.</p>
            <p>In its continued journey, YWCA of Delhi has worked collaboratively with civil society, communities, and government institutions. These partnerships have played a vital role in strengthening its impact and advancing its mission. With a steadfast commitment to empowering women and creating inclusive communities, YWCA of Delhi continues to drive meaningful change and uphold its vision of a just and equitable society.</p>
          </div>
        </div>

      </div>
    </section>
    </>

  )
}

export default OurHistory