import InnerBanner from "@/components/partials/InnerBanner";
import styles from '@/styles/Inner.module.css'
import Link from "next/link";
const BlueTringle = () => {
    return (
        <>
      <InnerBanner 
      title="Blue Triangle Family Hostel"
      subTitle="(Guest House)"
    //   image="/images/Blue-triangle-banner.jpg"
       images ={ [
    "/images/Blue-Triangle-Hospital-Banner-1.jpg",
    "/images/Blue-Triangle-Hospital-Banner-2.jpg",
    "/images/Blue-Triangle-Hospital-Banner-3.jpg"
  ]}
      breadcrumb={[
    {
      label: "Focus Area",
      link: "/blue-triangle",
    },
  ]}/>
            <section className={styles.innerPageSection}>

                <div className="container">
                    <div className={styles.historyContent}>
                        <div className={styles.imageCol2}>
                            <img src="/images/Blue-triangle-thumb-1.jpg" alt="Mary Jane Kinnaird" />
                  
                        </div>
                        <div className={styles.textCol}>
                            <div className={styles.sectionHeading2}>
                                <h2><span className={styles.highlight}>Overview</span></h2>

                            </div>
                            <p>Welcome to Blue Triangle Family Hostel (BTFH) <br />
                                Experience exceptional hospitality at YWCA of Delhi's Blue Triangle Family Hostel, where quality
                                service meets comfort and purpose.
                            </p>

                            <div className={styles.sectionHeading2}>
                                <h2><span className={styles.highlight}>Where restrained luxury shines</span></h2>

                            </div>
                            <p>Blue Triangle Family Hostel (BTFH), YWCA of Delhi, is a premier hospitality destination that has
                                undergone thoughtful enhancements, preserving its heritage charm while embracing modern
                                comforts. Nestled in the heart of the city near india Gate, BTFH offers serene views of lush
                                surroundings, establishing it as a cherished landmark in Delhi's vibrant core. As part of recent
                                upgrades, our property ensures a clean, healthy environment for all guests. BTFH provides
                                spacious accommodations, including comfortable rooms and suites with captivating views of
                                green gardens,
                            </p>
                        </div>
                    </div>

                    {/* ── Second block: Emma Roberts ── */}
                    <div className={styles.historyContent}>
                        <div className={styles.imageCol2}>
                            <img src="/images/Blue-triangle-thumb-2.jpg" alt="Emma Roberts" />

                        </div>
                        <div className={styles.textCol}>
                            <div className={styles.sectionHeading2}>
                                <h2><span className={styles.highlight}>Highlights</span></h2>

                            </div>
                            <p>Blue Triangle Family Hostel (BTFH), YWCA of Delhi, is a cherished landmark in the nation’s capital,
                                offering serene garden views. With thoughtfully redesigned spacious accommodations, quality
                                dining, and versatile event spaces ideal for conferences, exhibitions, trade fairs, and gatherings,
                                comes professionals, families, and global guests alike. Our

                                this premier hospitality venue we
                                exceptional amenities and personalized services, including state-of-the-art facilities, make it the

                                perfect choice for productive stays - while every booking supports women's empowerment and
                                community development.
                            </p>
                            <Link href={'/'} className={styles.readMore}>Read More</Link>

                            <div className={styles.bookNow}>
                                <Link href={'/'}>Book Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default BlueTringle