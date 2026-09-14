import Highlights from "@/components/Highlights";
import ImpactSection from "@/components/ImpactSection";
import PresenceMap from "@/components/PresenceMap";

import HeroBanner from "@/components/partials/HeroBanner2";
export default function Home() {
  return (
    <>
      <HeroBanner />
      {/* ════════════════════ NEWS BAR ════════════════════ */}
      <div className="news-bar">
        <div className="news-label">NEWS</div>
        <div className="news-items">
          <div className="news-item">
            <img src="/images/News-Thumb/World-YCWA-Day.jpg" alt="brand" />
            <span className="n-text">
              <span className="n-label">World YWCA Day - Celebrating Sisterhood and Solidarity
                <span className="n-date">25th April, 2026</span>
              </span>
              <a className="n-more" href="/news/world-ywca-day-2026">
                Read More <i className="bi bi-arrow-up-right-circle" />
              </a>
            </span>
          </div>
          <div className="news-item">
            <img src="/images/News-Thumb/Lenten-Prayer-Meet.jpg" alt="brand" />
            <span className="n-text">
              <span className="n-label"> Lenten Prayer Meeting
                <span className="n-date">27th March 2026 </span>
              </span>
              <a className="n-more" href="#">
                Read More <i className="bi bi-arrow-up-right-circle" />
              </a>
            </span>
          </div>
          <div className="news-item">
            <img src="/images/News-Thumb/Thrive-Music-Fest.jpg" alt="brand" />
            <span className="n-text">
              <span className="n-label">Thrive Music Festival
                <span className="n-date">14th March 2026</span>
              </span>
              <a className="n-more" href="#">
                Read More <i className="bi bi-arrow-up-right-circle" />
              </a>
            </span>
          </div>
          <div className="news-item">
            <img src="/images/News-Thumb/Int-Women-day.jpg" alt="brand" />
            <span className="n-text">
              <span className="n-label">
                International Women’s Day
                <span className="n-date">7th March 2026</span>
              </span>

              <a className="n-more" href="#">
                Read More <i className="bi bi-arrow-up-right-circle" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <section className="hl-sec-2">
        <div className="container">
          <h2 className="sec-title white-text">Our Focus Areas</h2>
          <div className="sec-sub" />
          <Highlights />
          {/* <div className="row">
        <div className="col-lg-5 pdr-0">
          <div className="hl-item1">
            <div
              className="hl-bg ph-h3"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <img src="/images/high-main.jpg" alt="" />
            </div>
            <div className="hl-cap-2">
              Girls Not Brides - A Rights Based Issue
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hl-grid">
 
            <div className="hl-item">
              <div
                className="hl-bg ph-h1"
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <img src="/images/high-1.jpg" alt="" />
              </div>
              <div className="hl-cap-2">Right to Equal Representation</div>
            </div>
   
            <div className="hl-item">
              <div
                className="hl-bg ph-h2"
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <img src="/images/high-2.jpg" alt="" />
              </div>
              <div className="hl-cap-2">Women Reservation Bill</div>
            </div>
  
            <div className="hl-item">
              <div
                className="hl-bg ph-h4"
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <img src="/images/high-4.jpg" alt="" />
              </div>
              <div className="hl-cap-2">Democratic Equality Rights</div>
            </div>
            <div className="hl-item">
              <div
                className="hl-bg ph-h3"
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <img src="/images/high-3.jpg" alt="" />
              </div>
              <div className="hl-cap-2">Fair Representation in Legislation</div>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </section>
      <>
        {/* <section className="hello-sec">
    <h2 className="sec-title">Our Presence in Delhi</h2>
    <div className="map-section">
      <img src="/images/Map.png" alt="img" />
    </div>
  </section> */}

        {/* New Interactive Presence Map added below the static one as requested */}
        <PresenceMap />

        {/* ════════════════════ IMPACT IN ACTION ════════════════════ */}
        <section className="impact-sec">
          <div className="container ">
            <section className="impact-sec-inner">
              <h2 className="sec-title">Our Impact In Action</h2>
              <ImpactSection />
              {/* <div className="row text-center mb-2">
          <div className="col-4 pl">
            <div className="stat-box stat-box-color-1">
              <img src="/images/icons/motivational.png" alt="brand" />
              <span className="stat-num color-1">5,590</span>
              <div className="stat-lbl">
                Individuals empowered through education &amp; advocacy
              </div>
            </div>
           
          </div>
          <div className="col-4 pl">
            <div className="stat-box stat-box-color-2">
              <img src="/images/icons/vocational.png" alt="brand" />
              <span className="stat-num color-2">150</span>
              <div className="stat-lbl">
                Women &amp; children received care and protection in Shelter
                Homes
              </div>
            </div>
         
          </div>
          <div className="col-4">
            <div className="stat-box stat-box-color-3">
              <img src="/images/icons/care.png" alt="brand" />
              <span className="stat-num color-3">452</span>
              <div className="stat-lbl">
                Women gained vocational skills through institutes and community
                programs
              </div>
            </div>
          </div>
        </div>
     
        <div className="row text-center mt-4">
          <div className="col-4 pl">
      
            <div className="stat-box stat-box-color-4">
              <img src="/images/icons/civil-rights.png" alt="brand" />
              <span className="stat-num color-4">1816</span>
              <div className="stat-lbl">
                Households engaged in community problem solving &amp; rights
                awareness
              </div>
            </div>
          </div>
          <div className="col-4 pl">
  
            <div className="stat-box stat-box-color-5">
              <img src="/images/icons/vegitarian.png" alt="brand" />
              <span className="stat-num color-5">140</span>
              <div className="stat-lbl">
                Children received remedial education and daily nutritious meals
              </div>
            </div>
          </div>
          <div className="col-4  pl">
            <div className="stat-box stat-box-color-6">
              <img src="/images/icons/apple.png" alt="brand" />
              <span className="stat-num color-6">60</span>
              <div className="stat-lbl">
                Children provided doorstep education to prevent dropouts
              </div>
            </div>
          </div>
        </div> */}
            </section>
          </div>
        </section>
      </>

    </>
  );
}
