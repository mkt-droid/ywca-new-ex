import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import OurValues from '@/components/partials/OurValues';

export const metadata = {
  title: 'Donate to YWCA Delhi CDP | Empower Women in Delhi’s Urban Settlements',
  description: 'Donate to YWCA Delhi’s Community Development Programme. 80G tax-deductible. Choose a one-time gift, monthly giving, or sponsor a specific programme for women’s empowerment.'
};

export default function CDPDonatePage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/community-development-programme' },
    { title: 'ABOUT US', icon: 'bi-info-circle', link: '/community-development-programme/about-us' },
    { title: 'PROGRAMS', icon: 'bi-diagram-3', link: '/community-development-programme/programs' },
    { title: 'IMPACT', icon: 'bi-graph-up-arrow', link: '/community-development-programme/impact' },
    { title: 'STORIES', icon: 'bi-book', link: '/community-development-programme/stories' }
  ];

  const impactTiers = [
    { amount: '₹500', desc: 'One woman’s literacy learning kit for a month' },
    { amount: '₹800', desc: 'One month of a girl’s bridge-education support to return to school' },
    { amount: '₹1,500', desc: 'One month of skill-training materials for one woman' },
    { amount: '₹3,500', desc: 'Full vocational training course for one woman (tailoring/beauty/computer)' },
    { amount: '₹10,000', desc: 'Seed funding to launch one new Self-Help Group' },
    { amount: '₹15,000', desc: 'One full community health camp reaching 150+ women and children' }
  ];

  const otherWaysValues = [
    {
      icon: "bi-people",
      title: "Sponsor a Programme",
      text: "Fund an entire health camp, SHG, or training batch and receive a detailed impact report.",
      link: "#",
      buttonText: "Contact partnerships team →"
    },
    {
      icon: "bi-gift",
      title: "Gifts in Memory or Celebration",
      text: "Mark a birthday, anniversary, or memorial with a gift that empowers a woman.",
      link: "#",
      buttonText: "Give in Honour →"
    },
    {
      icon: "bi-bank",
      title: "Legacy Giving",
      text: "Include YWCA Delhi CDP in your will.",
      link: "#",
      buttonText: "Learn about legacy giving →"
    },
    {
      icon: "bi-box2-heart",
      title: "In-Kind Donations",
      text: "Sewing machines, books, laptops, health camp supplies.",
      link: "#",
      buttonText: "See our wishlist →"
    },
    {
      icon: "bi-globe",
      title: "International Donors",
      text: "We are FCRA-registered and can receive international contributions.",
      link: "#",
      buttonText: "International giving guide →"
    }
  ];

  return (
    <main>
      <SideNavBanner
        height="360px"
        title={<>DONATE<br />CDP</>}
        bgImage="/images/cdp/main-banner.jpg"
        navItems={bannerNavItems}
        activePath="/community-development-programme/donate"
        contentMarginTop="25vh"
      />

      <div className={`${styles.pageBackground} pageContentWrapper`}>
        <div className="container">
          <h1 className="sectionTitle_1 text-center mx-800" style={{ paddingTop: '50px' }}>Your donation doesn’t fund an organisation. It funds a woman’s next step forward.</h1>
          <p className={`${styles.introPara} text-center`}>
            100% of programme donations are tracked to real outcomes. Every gift is tax-deductible under Section 80G.
          </p>

          {/* Choose Your Impact Section */}
          <section className="mt-4 pt-2">
            <h2 className="sectionTitle_2 text-center">Choose Your Impact</h2>
            <div className="row g-4 mt-3 justify-content-center mx-lg-5">
              {impactTiers.map((tier, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div style={{ background: '#fff', padding: '30px 20px', borderRadius: '12px', border: '1px solid #eaeaea', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 4px 20px rgba(162, 18, 181, 0.15)', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                    <h3 style={{ fontSize: '2.2rem', color: '#a212b5', fontWeight: '700', marginBottom: '15px' }}>{tier.amount}</h3>
                    <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: '0' }}>{tier.desc}</p>
                  </div>
                </div>
              ))}
              <div className="col-md-6 col-lg-4">
                <div style={{ background: '#fdf5ff', padding: '30px 20px', borderRadius: '12px', border: '2px dashed #a212b5', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}>
                  <h3 style={{ fontSize: '1.8rem', color: '#a212b5', fontWeight: '700', marginBottom: '15px' }}>Custom Amount</h3>
                  <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: '0' }}>Enter your own amount to contribute</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
              <Link href="#" className={styles.primaryBtn} style={{ padding: '12px 30px', fontSize: '1.1rem' }}>DONATE NOW →</Link>
              <Link href="#" className={styles.primaryBtn} style={{ padding: '12px 30px', fontSize: '1.1rem', backgroundColor: '#BE00C4' }}>BECOME A MONTHLY DONOR →</Link>
            </div>
          </section>

          {/* Why Monthly Giving Matters */}
          <section className="mt-5 pt-5 pb-2">
            <div style={{ background: '#fcf5ff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>

              <div className="row align-items-center m-0">
                <div className="col-lg-6 p-4 p-md-5">
                  <h2 className="sectionTitle_2 mb-4" style={{ textAlign: 'left' }}>Why Monthly Giving Matters</h2>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '0' }}>
                    A one-time gift funds a moment. A monthly gift funds a journey. Our most transformative outcomes — a woman completing a full training cycle, a girl staying in school for a full academic year, an SHG becoming self-sustaining — happen over months, not days. Monthly donors let us plan and commit resources with confidence.
                  </p>
                </div>
                <div className="col-lg-6 p-0 d-none d-lg-block">
                  <img src="/images/fund-raising/thumb-1.png" alt="Monthly Giving" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Monthly giving tiers (full width) */}
              <div style={{ padding: '50px 40px', borderTop: '2px solid #f1e0f3' }}>
                <h4 className="text-center" style={{ color: '#a212b5', fontSize: '1.8rem', marginBottom: '40px', fontWeight: '700' }}>Monthly Giving Tiers</h4>
                <div className="row g-4 justify-content-center">
                  <div className="col-md-4">
                    <div style={{ background: '#fff', padding: '30px 20px', borderRadius: '12px', border: '1px solid #eaeaea', boxShadow: '0 4px 15px rgba(162, 18, 181, 0.08)', height: '100%', textAlign: 'center', transition: 'transform 0.3s' }}>
                      <i className="bi bi-book" style={{ fontSize: '2.5rem', color: '#BE00C4', marginBottom: '15px', display: 'block' }}></i>
                      <h5 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#333' }}>₹500 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#666' }}>/month</span></h5>
                      <p style={{ color: '#555', marginBottom: '0', marginTop: '10px' }}>Sponsor one woman’s literacy journey</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{ background: '#fff', padding: '30px 20px', borderRadius: '12px', border: '1px solid #eaeaea', boxShadow: '0 4px 15px rgba(162, 18, 181, 0.08)', height: '100%', textAlign: 'center', transition: 'transform 0.3s' }}>
                      <i className="bi bi-mortarboard" style={{ fontSize: '2.5rem', color: '#BE00C4', marginBottom: '15px', display: 'block' }}></i>
                      <h5 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#333' }}>₹1,000 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#666' }}>/month</span></h5>
                      <p style={{ color: '#555', marginBottom: '0', marginTop: '10px' }}>Sponsor one girl’s continued education</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{ background: '#fff', padding: '30px 20px', borderRadius: '12px', border: '1px solid #eaeaea', boxShadow: '0 4px 15px rgba(162, 18, 181, 0.08)', height: '100%', textAlign: 'center', transition: 'transform 0.3s' }}>
                      <i className="bi bi-briefcase" style={{ fontSize: '2.5rem', color: '#BE00C4', marginBottom: '15px', display: 'block' }}></i>
                      <h5 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#333' }}>₹3,000 <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#666' }}>/month</span></h5>
                      <p style={{ color: '#555', marginBottom: '0', marginTop: '10px' }}>Sponsor a woman through a full skill-training cycle</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5 pt-3">
                  <Link href="#" className={styles.primaryBtn}>Join Our Monthly Giving Circle →</Link>
                </div>
              </div>

            </div>
          </section>

          {/* Other Ways to Give */}
          <section className="mt-4 pt-2">
            <OurValues values={otherWaysValues} title="Other Ways to Give" />
          </section>

          {/* Safe & Tax-Deductible */}
          <section className="mt-5 pt-4">
            <h2 className="sectionTitle_2 text-center">Your Donation Is Safe & Tax-Deductible</h2>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', background: '#fff3cd', color: '#856404', padding: '40px', borderRadius: '12px', border: '1px solid #ffeeba' }}>
              <div className="row g-4 text-start justify-content-center">
                <div className="col-md-6 d-flex align-items-center">
                  <i className="bi bi-shield-lock-fill me-3" style={{ fontSize: '2.2rem', color: '#856404' }}></i>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Secure payment gateway (cards, UPI, net banking, wallets)</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <i className="bi bi-file-earmark-text-fill me-3" style={{ fontSize: '2.2rem', color: '#856404' }}></i>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Instant 80G tax receipt via email</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill me-3" style={{ fontSize: '2.2rem', color: '#856404' }}></i>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>12A and 80G registered; FCRA compliant for foreign contributions</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <i className="bi bi-bar-chart-fill me-3" style={{ fontSize: '2.2rem', color: '#856404' }}></i>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Annual impact report sent to all donors</span>
                </div>
              </div>
              <hr style={{ borderColor: '#e5d7a6', margin: '30px 0' }} />
              <div className="text-center mt-4">
                <p style={{ fontSize: '1.25rem', marginBottom: '20px', fontWeight: '600', color: '#6a4f00' }}>Have questions before you give?</p>
                <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                  <Link href="#" style={{ border: '2px solid #856404', color: '#856404', fontWeight: '600', padding: '10px 25px', borderRadius: '30px', textDecoration: 'none', background: 'transparent' }}>
                    Talk to our donor relations team →
                  </Link>
                  <span style={{ fontSize: '1.1rem', color: '#856404', fontWeight: '500' }}>or</span>
                  <Link href="#donorFaqAccordion" style={{ background: '#856404', color: '#fff', fontWeight: '600', padding: '10px 25px', borderRadius: '30px', textDecoration: 'none', border: '2px solid #856404' }}>
                    Read our Donor FAQs ↓
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mt-5 pt-5 pb-5 mb-4">
            <h2 className="sectionTitle_2 text-center mb-4">Donor FAQs</h2>
            <div className="mx-800 mx-auto bg-white p-4" style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div className="accordion accordion-flush" id="donorFaqAccordion">
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#242278', background: 'transparent' }}>
                      Is my donation tax-deductible?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#donorFaqAccordion">
                    <div className="accordion-body" style={{ color: '#444' }}>
                      Yes. YWCA of Delhi is registered under Section 80G of the Income Tax Act. You will receive an official receipt for tax purposes immediately after your donation.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#242278', background: 'transparent' }}>
                      How much of my donation goes directly to programmes?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#donorFaqAccordion">
                    <div className="accordion-body" style={{ color: '#444' }}>
                      Programme donations go directly to on-ground work; the remainder supports essential monitoring, staff training, and governance that keep our programmes effective and accountable.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#242278', background: 'transparent' }}>
                      Can I choose exactly what my donation funds?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#donorFaqAccordion">
                    <div className="accordion-body" style={{ color: '#444' }}>
                      Yes — you can direct your gift to a specific programme (education, skills, health, or leadership) at checkout, or contact our team for larger designated gifts.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#242278', background: 'transparent' }}>
                      Will I know how my donation was used?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#donorFaqAccordion">
                    <div className="accordion-body" style={{ color: '#444' }}>
                      Yes. Donors receive periodic impact updates, and donors of ₹10,000 or above receive a personalised report on the community or programme their gift supported.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#242278', background: 'transparent' }}>
                      Can international donors contribute?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#donorFaqAccordion">
                    <div className="accordion-body" style={{ color: '#444' }}>
                      Yes, we are FCRA-registered and accept international donations in compliance with Indian law.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
