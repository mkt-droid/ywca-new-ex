'use client'
import InnerBanner from "@/components/partials/InnerBanner";
import styles from '@/styles/Inner.module.css'

const VisionMission = () => {
  return (
    <>
      <InnerBanner
        images={["/images/Vission-Mission-banner.jpg"]}
        breadcrumb={[
          { label: "About Us", link: "/about" },
          { label: "Vision & Mission", link: "/vission-mission" },
        ]}
      />

      <section style={{ padding: "60px 0 80px", background: "#fff" }}>

        {/* ── Section Heading ── */}
        <div className="container">
          <div className={styles.sectionHeading}>
            <h2>
              <span className={styles.highlight}>Vision</span> &amp; Mission
            </h2>
          </div>
        </div>

        {/* ── Vision Banner ── */}
        <div style={{
          background: "linear-gradient(135deg, #1B2D6B 0%, #0F1A45 100%)",
          margin: "40px 0",
          padding: "0",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "5px", background: "#C9A43A" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "#C9A43A" }} />

          {/* Decorative background text */}
          <div style={{
            position: "absolute", right: "-20px", top: "50%",
            transform: "translateY(-50%)",
            fontSize: "200px", fontWeight: 900,
            color: "rgba(201,164,58,0.06)",
            lineHeight: 1, userSelect: "none", pointerEvents: "none",
            letterSpacing: "-10px",
          }}>VISION</div>

          <div className="container" style={{ position: "relative", zIndex: 1, padding: "60px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap" }}>

              {/* Gold quote mark */}
              <div style={{
                fontSize: "120px", lineHeight: 1, color: "#C9A43A",
                fontFamily: "Georgia, serif", marginTop: "-20px", flexShrink: 0,
              }}>&ldquo;</div>

              <div style={{ flex: 1, minWidth: "280px" }}>
                <p style={{ color: "#fff", fontSize: "20px", lineHeight: 1.8, fontStyle: "italic", margin: "0 0 24px" }}>
                  The Young Women's Christian Association (YWCA) is an international movement motivated by
                  its concern for women all over the world. It is deeply committed to the development and
                  empowerment of women. It is a movement with a mission to educate, train, to create awareness
                  and counsel women to enable them contribute effectively to the socio-economic development of
                  our nation.
                </p>
                <div style={{ display: "inline-block", borderLeft: "4px solid #C9A43A", paddingLeft: "16px" }}>
                  <p style={{ color: "#C9A43A", fontWeight: 600, margin: 0, fontSize: "15px" }}>
                    YWCA of Delhi — Est. 1912
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.6)", margin: "4px 0 0", fontSize: "13px" }}>
                    Affiliated to YWCA of India &amp; World YWCA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body Content ── */}
        <div className="container">
          <div style={{
            display: "flex", alignItems: "flex-start",
            gap: "40px", margin: "48px 0 0", flexWrap: "wrap",
          }}>
            {/* Accent bar */}
            <div style={{ flex: "0 0 auto" }}>
              <div style={{
                width: "6px", height: "100%", minHeight: "180px",
                background: "linear-gradient(180deg, #C9A43A, #1B2D6B)",
                borderRadius: "3px",
              }} />
            </div>

            <div style={{ flex: 1, minWidth: "260px" }}>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: '25px', margin: "0 0 20px" }}>
                The YWCA of Delhi was established in 1912 and affiliated to the world YWCA through the
                National Body, YWCA of India. The YWCA of Delhi over the years has emerged as a platform
                for the present generation of women to assume new responsibilities in contributing towards
                the growth of the nation and the society in large. It is fully focused in its vision to
                empower women in all works of life. The job-oriented vocational education imparted at YWCA
                has gone a long way to improve the financial and economical status of women.
              </p>

              <p style={{ color: "#555", fontSize: "15px", lineHeight: '25px', margin: 0 }}>
                The YWCA of Delhi through its multifarious activities in education, training, counselling
                and employment has been rendering acumen service to women and children. The YWCA aims at
                empowering women in their struggle for justice, attaining higher social status and legitimate
                rights. The mission encourages equal participation of women at all levels and foresees a
                change in their role in Indian society.
              </p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default VisionMission;