'use client'
import InnerPageBanner from "@/components/partials/InnerPageBanner";
import styles from './page.module.css';

const VisionMission = () => {
  return (
    <>
      <InnerPageBanner
        title={<>OUR <br /> VISION & MISSION</>}
        bgImage="/images/01-Banner-Vision-Mission.jpg"
        contentMarginTop="25vh"
        defaultGrayscale={true}
      />

      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <h2 className={styles.heading}>
              AN INTERNATIONAL MOVEMENT MOTIVATED BY ITS <br /> CONCERN FOR WOMEN
            </h2>

            <p className={styles.textParagraph}>
              The Young Women's Christian Association (YWCA) is an international movement motivated by its concern for women all over the world. It is deeply committed to the development and empowerment of women.
            </p>

            <p className={styles.textParagraph}>
              It is a movement with a mission to educate, train, to create awareness and counsel women to enable them contribute effectively to the socio-economic development of our nation.
            </p>

            <p className={styles.textParagraph}>
              The YWCA of Delhi was established in 1912 and affiliated to the world YWCA through the National Body, YWCA of India.
            </p>

            <p className={styles.textParagraph}>
              The YWCA of Delhi over the years has emerged as a platform for the present generation of women to assume new responsibilities in contributing towards the growth of the nation and the society in large. It is fully focused in its vision to empower women in all works of life. The job oriented vocational education imparted at YWCA has gone a long way to improve the financial and economical status of women.
            </p>

            <p className={styles.textParagraph}>
              The YWCA of Delhi through its multifarious activities in education, training, counseling and employment has been rendering acumen service to women and children.
            </p>

            <p className={styles.textParagraph}>
              The YWCA aims at empowering women in their struggle for justice, attaining higher social status and legitimate rights. The mission encourages equal participation of women at all levels and foresees a change in their role in Indian society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;