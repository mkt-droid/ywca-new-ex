import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import SideNavBanner from '@/components/partials/SideNavBanner';
import HopeSlider from './HopeSlider';
import ImpactHighlights from './ImpactHighlights';

export const metadata = {
  title: 'Fund Raising & Publicity | YWCA of Delhi',
};

export default function FundRaisingPage() {
  const bannerNavItems = [
    { title: 'Overview & Donation', icon: 'bi-flower1', link: '/fund-raising-publicity' },
    { title: 'Support a Cause', icon: 'bi-heart', link: '/shelter-homes' },
    { title: 'The ReHome Store', icon: 'bi-shop', link: '/fund-raising-publicity/the-rehome-store' },
    { title: 'Eco-Justice Lab', icon: 'bi-tree', link: '/fund-raising-publicity/eco-justice-lab' },
    { title: 'Volunteer & Partnership', icon: 'bi-people', link: '/fund-raising-publicity/volunteer-and-partnership' },
    { title: 'Events & Announcements', icon: 'bi-calendar-event', link: '/fund-raising-publicity/events-and-announcements' },
  ];

  return (
    <main>
      {/* Banner remains the same as requested */}
      <SideNavBanner
        height="360px"
        title={
          <>
            SUPPORT WOMEN<br />SUPPORT SUSTAINABILITY<br />
            SUPPORT CHANGE
          </>
        }
        bgImage="/images/01-Banner-FRAp.jpg"
        navItems={bannerNavItems}
        activePath="/fund-raising-publicity"
      />

      <div className={`${styles.contentWrapper} pageContentWrapper`} style={{ paddingBottom: 0 }}>

        {/* HOW YOU CAN HELP */}
        <section className={`container ${styles.newSection}`} style={{ paddingTop: 0 }}>

          <div className="row g-3 justify-content-center">
            <div className="col-lg col-md-6 col-sm-12 mb-3">
              <div className={styles.helpCard}>
                <div className={styles.helpCardIcon} style={{ backgroundColor: 'rgba(123, 68, 162, 0.1)' }}><i className="bi bi-heart-fill" style={{ color: '#7b44a2' }}></i></div>
                <h4>Donate</h4>
                <p>Make a financial contribution towards our programs and help create lasting impact.</p>
                <Link href="/fund-raising-publicity/donate" className={styles.helpCardLink}>DONATE NOW <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg col-md-6 col-sm-12 mb-3">
              <div className={styles.helpCard}>
                <div className={styles.helpCardIcon} style={{ backgroundColor: 'rgba(226, 68, 134, 0.1)' }}><i className="bi bi-people-fill" style={{ color: '#e24486' }}></i></div>
                <h4>Support a Cause</h4>
                <p>Support women survivors of violence, shelter homes and specific community needs.</p>
                <Link href="/fund-raising-publicity/support-a-cause" className={styles.helpCardLink}>EXPLORE CAUSES <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg col-md-6 col-sm-12 mb-3">
              <div className={styles.helpCard}>
                <div className={styles.helpCardIcon} style={{ backgroundColor: 'rgba(85, 155, 85, 0.1)' }}><i className="bi bi-gift-fill" style={{ color: '#559b55' }}></i></div>
                <h4>Give with Purpose</h4>
                <p>Support community through recycling, composting, water conservation and other green initiatives.</p>
                <Link href="/fund-raising-publicity/the-rehome-store" className={styles.helpCardLink}>DONATE ITEMS <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>

            <div className="col-lg col-md-6 col-sm-12 mb-3">
              <div className={styles.helpCard}>
                <div className={styles.helpCardIcon} style={{ backgroundColor: 'rgba(74, 122, 181, 0.1)' }}><i className="bi bi-briefcase-fill" style={{ color: '#4a7ab5' }}></i></div>
                <h4>Partner With Us</h4>
                <p>Collaborate through CSR, sponsorships, volunteering or institutional partnerships.</p>
                <Link href="/fund-raising-publicity/volunteer-and-partnership" className={styles.helpCardLink}>PARTNER WITH US <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE YOUR SUPPORT CREATES IMPACT */}
        <section className={`container ${styles.newSection}`}>
          <div className="text-center mb-5">
            <h2 className="sectionTitle_2">Where Your Support Creates Impact</h2>

          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.impactCard}>
                <div className={styles.impactImgWrapper}>
                  <img src="/images/fund-raising/thumb-1.png" alt="Strengthening Communities" />
                  <div className={`${styles.impactIconBadge} ${styles.purple}`}><i className="bi bi-people-fill"></i></div>
                </div>
                <div className={styles.impactContent}>
                  <h4>Strengthening Communities</h4>
                  <p>We work with women, children and communities through education, skills, livelihoods and community development initiatives.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.impactCard}>
                <div className={styles.impactImgWrapper}>
                  <img src="/images/fund-raising/small-help.png" alt="Supporting Women in Safety & Recovery" />
                  <div className={`${styles.impactIconBadge} ${styles.purple}`} style={{ backgroundColor: '#e24486' }}><i className="bi bi-shield-fill-check"></i></div>
                </div>
                <div className={styles.impactContent}>
                  <h4>Supporting Women in Safety & Recovery</h4>
                  <p>We provide safety, shelter, care and opportunities for women survivors of violence and women in distress to rebuild their lives with dignity.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.impactCard}>
                <div className={styles.impactImgWrapper}>
                  <img src="/images/fund-raising/thumb-2.png" alt="Nurturing Nature" />
                  <div className={`${styles.impactIconBadge} ${styles.green}`}><i className="bi bi-flower1"></i></div>
                </div>
                <div className={styles.impactContent}>
                  <h4>Nurturing Nature</h4>
                  <p>We promote sustainable practices through waste management, recycling, composting, water conservation, upcycling and youth-led environmental action.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRINGING HOPE TO LIVES SLIDER (Includes Support Banner) */}
        <HopeSlider />

        {/* Impact Highlights from ReHome Store */}
        <ImpactHighlights />

        {/* The ReHome Store & The Green Corner */}
        <section className={`container ${styles.newSection}`}>
          <div className="row g-4">
            <div className="col-md-6">
              <div className={styles.rehomeBox}>
                {/* <span className={styles.boxLabel}>THE REHOME STORE</span> */}
                <h2 className="sectionTitle_2">Give Things a Second Life</h2>
                <p className={styles.boxText}>The ReHome Store promotes reuse and repurposing of pre-loved items while creating livelihood opportunities for women and supporting the environment.</p>

                <div className={styles.flowchart}>
                  <div className={styles.flowchartStep}>
                    <i className="bi bi-box-seam" style={{ color: '#242278' }}></i>
                    <h6>Donate</h6>
                    <p>We collect useful items from you</p>
                  </div>
                  <div className={styles.flowchartArrow}>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                  <div className={styles.flowchartStep}>
                    <i className="bi bi-recycle" style={{ color: '#242278' }}></i>
                    <h6>Reuse</h6>
                    <p>Items are sorted, reused or repurposed</p>
                  </div>
                  <div className={styles.flowchartArrow}>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                  <div className={styles.flowchartStep}>
                    <i className="bi bi-people" style={{ color: '#242278' }}></i>
                    <h6>Empower</h6>
                    <p>Supporting women, communities and livelihoods</p>
                  </div>
                </div>

                <div className={`${styles.statsRowLeft} justify-content-center`}>
                  <div className={styles.statItemLeft}>
                    <i className="bi bi-bag-heart" style={{ fontSize: '2rem', color: '#242278', marginRight: '15px' }}></i>
                    <div>
                      <h5>150 kg</h5>
                      <span>Textile Waste<br />Reused</span>
                    </div>
                  </div>
                  <div className={styles.statItemLeft}>
                    <i className="bi bi-person-gear" style={{ fontSize: '2rem', color: '#242278', marginRight: '15px' }}></i>
                    <div>
                      <h5>20 Youth</h5>
                      <span>Trained in Upcycling<br />& Skill Building</span>
                    </div>
                  </div>


                  <div className={styles.statItemLeft}>
                    <i className="bi bi-flower2" style={{ fontSize: '2rem', color: '#242278', marginRight: '15px' }}></i>
                    <div>
                      <h5>Plant & Pots</h5>
                      <span>Donate plants,<br />pots etc</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 mt-4 justify-content-center">
                  {/* <Link href="/fund-raising-publicity/the-rehome-store" className={styles.outlinePurpleBtn}>WHAT CAN I DONATE?</Link> */}
                  <Link href="/fund-raising-publicity/the-rehome-store#pickup" className={styles.solidGreenBtn}>REQUEST A PICKUP</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className={styles.greenBox}>
                {/* <span className={styles.boxLabel}>THE GREEN CORNER<sup>&reg;</sup></span> */}
                <h2 className="sectionTitle_2">Support a Greener Future</h2>
                <p className={styles.boxText}>Your support helps us build environmentally responsible and sustainable communities.</p>

                <div className={styles.iconGrid}>
                  <div className={styles.iconItemGreen}>
                    <div className={styles.circleIcon}>
                      <i className="bi bi-recycle"></i>
                    </div>
                    <h6>Recycle Plastic</h6>
                    <p>Support collection,<br />segregation and<br />recycling initiatives.</p>
                  </div>
                  <div className={styles.iconItemGreen}>
                    <div className={styles.circleIcon}>
                      <i className="bi bi-tree"></i>
                    </div>
                    <h6>Organic manure</h6>
                    <p>Support composting<br />and organic manure<br />production.</p>
                  </div>
                  <div className={styles.iconItemGreen}>
                    <div className={styles.circleIcon}>
                      <i className="bi bi-droplet-half"></i>
                    </div>
                    <h6>Conserve Water</h6>
                    <p>Support wastewater<br />reuse and water<br />conservation initiatives.</p>
                  </div>
                  <div className={styles.iconItemGreen}>
                    <div className={styles.circleIcon}>
                      <i className="bi bi-house-heart"></i>
                    </div>
                    <h6>Communities</h6>
                    <p>Youth engagement<br />and climate action.</p>
                  </div>
                </div>

                <div className={styles.statsGridFour}>
                  <div className={styles.statItemLeft}>
                    <i className="bi bi-building-add" style={{ fontSize: '1.8rem', color: '#559b55', marginRight: '10px' }}></i>
                    <div>
                      <strong>3,200 kg</strong>
                      <span>Kitchen Waste<br />Processed</span>
                    </div>
                  </div>
                  <div className={styles.statItemLeft}>
                    <i className="bi bi-flower1" style={{ fontSize: '1.8rem', color: '#559b55', marginRight: '10px' }}></i>
                    <div>
                      <strong>432 kg</strong>
                      <span>Organic Manure<br />Produced</span>
                    </div>
                  </div>
                  <div className={styles.statItemLeft}>
                    <i className="bi bi-droplet" style={{ fontSize: '1.8rem', color: '#559b55', marginRight: '10px' }}></i>
                    <div>
                      <strong>1,000+ litres</strong>
                      <span>Wastewater<br />Reused Daily</span>
                    </div>
                  </div>
                  <div className={styles.statItemLeft}>
                    <i className="bi bi-recycle" style={{ fontSize: '1.8rem', color: '#559b55', marginRight: '10px' }}></i>
                    <div>
                      <strong>84 kg</strong>
                      <span>Plastic Waste<br />Recycled</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <Link href="/fund-raising-publicity/eco-justice-lab" className={styles.solidGreenBtn}>
                    <i className="bi bi-heart"></i> SUPPORT GREEN ACTION <span style={{ marginLeft: '4px' }}>&#9656;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner with YWCA & Trust */}
        <section className={`container ${styles.newSection}`}>
          <div className="row g-4">
            <div className="col-md-12">
              <div className={styles.partnerBox}>
                <span className={styles.boxLabel}>Partner with YWCA</span>
                <h2 className="sectionTitle_2">Let's Create Change Together</h2>
                <p className={styles.boxText}>We welcome individuals, corporates, institutions and organisations to partner with us in advancing women's empowerment, community development and environmental sustainability.</p>

                <div className="row g-3 mb-4">
                  <div className="col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#444' }}><i className="bi bi-briefcase text-purple"></i> CSR Partnerships</div>
                  <div className="col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#444' }}><i className="bi bi-currency-rupee text-purple"></i> Financial Support</div>
                  <div className="col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#444' }}><i className="bi bi-gift text-purple"></i> In-kind Contributions</div>
                  <div className="col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#444' }}><i className="bi bi-person-hearts text-purple"></i> Employee Engagement</div>
                  <div className="col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#444' }}><i className="bi bi-tools text-purple"></i> Skill Development</div>
                  <div className="col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#444' }}><i className="bi bi-award text-purple"></i> Sponsorships</div>
                  <div className="col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#444' }}><i className="bi bi-globe text-purple"></i> Sustainability Partnerships</div>
                  <div className="col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: '#444' }}><i className="bi bi-people text-purple"></i> Community Projects</div>
                </div>

                <Link href="/fund-raising-publicity/volunteer-and-partnership" className={styles.solidGreenBtn}>Partner With Us &gt;</Link>
              </div>
            </div>

            {/* <div className="col-md-4">
              <div className={styles.trustBox}>
                <span className={styles.boxLabel}>Trust & Transparency</span>
                <h2 className="sectionTitle_2" style={{fontSize: '1.5rem'}}>Your Contribution.<br/>Accountable Impact.</h2>
                
                <div className={styles.trustIcons}>
                  <div>
                    <i className="bi bi-building"></i>
                    <span>Registered<br/>Organisation</span>
                  </div>
                  <div>
                    <i className="bi bi-receipt"></i>
                    <span>80G<br/>Tax Benefits</span>
                  </div>
                  <div>
                    <i className="bi bi-check-circle"></i>
                    <span>CSR<br/>Eligible</span>
                  </div>
                </div>
                
                <p style={{fontSize: '0.8rem', textAlign: 'center', color: '#555', marginBottom: '20px'}}>We are committed to transparency and accountability in all that we do.</p>
                <Link href="#compliance-docs" className={styles.solidBlueBtn}>VIEW REGISTRATION & COMPLIANCE DOCUMENTS &gt;</Link>
              </div>
            </div> */}
          </div>
        </section>

        <section id="compliance-docs" className="container">
          <div className={styles.complianceSection}>
            <h2 className="sectionTitle_2 text-center" style={{ color: '#fff' }}>One Organisation. Many Ways to Create Change.</h2>
            <p style={{ maxWidth: 1000, margin: '0 auto 30px', color: '#fff' }}>Whether you donate, support a cause, contribute items, go green or partner with us—
              your support can help create meaningful and lasting change.</p>
            {/* <h3 className="sectionTitle_3 text-center" style={{ marginBottom: '30px', color: '#fff' }}>Transparency in our operations</h3> */}
            <div className={styles.complianceBtns}>
              <Link href="#" className={styles.purpleBtn}>80G Certificate</Link>
              <Link href="#" className={styles.purpleBtn}>CSR Eligibility Documents</Link>
              <Link href="#" className={styles.purpleBtn}>NGO Registration Certificates</Link>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className={styles.featuresBar}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-6 mb-3 mb-md-0">
                <div className={styles.featureItem}>
                  <i className="bi bi-shield-lock"></i> Secure Donations<br />Safe & Trusted
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3 mb-md-0">
                <div className={styles.featureItem}>
                  <i className="bi bi-file-earmark-text"></i> 80G Tax Benefits<br />Available
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.featureItem}>
                  <i className="bi bi-clipboard-data"></i> Transparent<br />Impact Reporting
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.featureItem}>
                  <i className="bi bi-heart-pulse"></i> Your Support<br />Creates Change
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Old Registration & Compliance Documents Section - moved to very bottom as requested */}


        {/* --- OLD CODE COMMENTED OUT BELOW --- */}
        {/*
        <section className={styles.sectionPadding}>
          <div className="container">
            <h1 className="sectionTitle_1 text-center mx-800">Overview</h1>
            <p className={styles.overviewText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.
            </p>
          </div>
        </section>

        <section className={styles.helpSection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0 pr-md-5">
                <h2 className="sectionTitle_2" style={{ marginBottom: '10px' }}>Your Small Help</h2>
                <h3 className="sectionTitle_3" style={{ marginBottom: '15px' }}>Can brighten up someone's life</h3>
                <p className={styles.helpText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Link href="/fund-raising-publicity/donate" className={styles.primaryBtn}>
                  <i className="bi bi-heart-fill"></i> Donate Us
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/fund-raising/small-help.png"
                  alt="Help brightens someone's life"
                  className={styles.imageBox}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionPaddingWhite}>
          <div className="container">
            <div className="row align-items-center flex-column-reverse flex-md-row">
              <div className="col-md-6 mt-4 mt-md-0">
                <img
                  src="/images/fund-raising/thumb-1.png"
                  alt="Event Gallery"
                  className={styles.imageBox}
                />
              </div>
              <div className="col-md-6 pl-md-5">
                <h2 className="sectionTitle_2" style={{ marginBottom: '10px' }}>Event gallery</h2>
                <h3 className="sectionTitle_3" style={{ marginBottom: '15px' }}>Glimpses of our recent activities</h3>
                <p className={styles.helpText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                </p>
                <Link href="/fund-raising-publicity/events-and-announcements" className={styles.primaryBtn}>
                  More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.helpSection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0 pr-md-5">
                <h2 className="sectionTitle_2" style={{ marginBottom: '10px' }}>Volunteer with us</h2>
                <h3 className="sectionTitle_3" style={{ marginBottom: '15px' }}>Be a part of our journey</h3>
                <p className={styles.helpText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                </p>
                <Link href="/fund-raising-publicity/volunteer-and-partnership" className={styles.primaryBtn}>
                  More
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/fund-raising/thumb-2.png"
                  alt="Volunteer with us"
                  className={styles.imageBox}
                />
              </div>
            </div>
          </div>
        </section>
        */}

      </div>
    </main>
  );
}
