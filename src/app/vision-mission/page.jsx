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
        overlayColor="linear-gradient(to right, rgba(146, 45, 157, 0.85), rgba(146, 45, 157, 0.4))"
        defaultGrayscale={false}
      />

      <section className={styles.visionSection}>
        <div className="container">
          
          {/* Vision Section */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <img 
                src="/images/01-Banner-Vision-Mission.jpg" 
                alt="Vision" 
                className={styles.sectionImage} 
              />
            </div>
            <div className="col-md-6">
              <h2 className="sectionTitle_2 mb-4" style={{ textAlign: 'left' }}>Vision</h2>
              <p className={styles.textParagraph}>
                YWCA of Delhi remains steadfast in its commitment to empowering women and girls to confront gender inequity, social and economic disparities, caste-based discrimination, and all forms of violence. In a world increasingly marked by environmental degradation and human rights violations, the YWCA - one of the largest women's movements globally - stands poised to be a powerful force for social transformation.
              </p>
            </div>
          </div>

          <div style={{ height: '40px' }}></div>

          {/* Mission Section */}
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2 mb-4 mb-md-0">
              <img 
                src="/images/Vission-Mission-banner.jpg" 
                alt="Mission" 
                className={styles.sectionImage} 
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h2 className="sectionTitle_2 mb-4" style={{ textAlign: 'left' }}>Mission</h2>
              <p className={styles.textParagraph}>
                In a rapidly changing world, YWCA of Delhi is called to respond with timely and effective interventions through programmes and projects that address the needs of marginalized communities. We strive to be inclusive of all people - regardless of age, class, caste, creed, or religion - while remaining firmly committed to upholding human dignity and protecting the environment.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default VisionMission;