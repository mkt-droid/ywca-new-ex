import React from 'react';
import Head from 'next/head';
import SideNavBanner from '@/components/partials/SideNavBanner';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | YWCA Delhi Community Development Programme',
};

export default function TermsOfUsePage() {
  const bannerNavItems = [
    { title: 'Overview', icon: 'bi-house-door', link: '/community-development-programme' },
    { title: 'ABOUT US', icon: 'bi-info-circle', link: '/community-development-programme/about-us' },
    { title: 'PROGRAMS', icon: 'bi-diagram-3', link: '/community-development-programme/programs' },
    { title: 'IMPACT', icon: 'bi-graph-up-arrow', link: '/community-development-programme/impact' },
    { title: 'STORIES', icon: 'bi-book', link: '/community-development-programme/stories' },
    { title: 'GET INVOLVED', icon: 'bi-person-raised-hand', link: '/community-development-programme/get-involved' }
  ];

  return (
    <>
      <main style={{ backgroundColor: '#f8f9fa', paddingBottom: '100px' }}>
        <SideNavBanner
          height="360px"
          title={<>TERMS<br />OF USE</>}
          bgImage="/images/cdp/main-banner.jpg"
          navItems={bannerNavItems}
          activePath="/community-development-programme/terms-of-use"
          overlayStyle={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%)', zIndex: 1 }}
        />

        <section className="container mt-5">
          <div className="bg-white p-4 p-md-5 rounded shadow-sm border" style={{ borderColor: '#eaeaea' }}>
            <h1 className="sectionTitle_1 mb-3">Terms of Use</h1>
            <p className="text-muted mb-4">Last updated: [Date]</p>
            
            <div className="alert alert-warning mb-5">
              This is a template. Please have it reviewed by a qualified legal professional before publishing.
            </div>

            <h3 className="sectionTitle_3 mb-3">1. Acceptance of Terms</h3>
            <p className="mb-4">By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>

            <h3 className="sectionTitle_3 mb-3">2. About This Website</h3>
            <p className="mb-4">This website is operated by YWCA of Delhi for its Community Development Programme, to share information about our work, facilitate donations, volunteering, and partnerships, and engage with the public.</p>

            <h3 className="sectionTitle_3 mb-3">3. Use of Website Content</h3>
            <p className="mb-4">All content on this website — including text, images, logos, and design — is the property of YWCA of Delhi unless otherwise credited, and is protected under applicable intellectual property laws. You may share content for non-commercial purposes with proper attribution. Reproduction for commercial use requires prior written permission.</p>

            <h3 className="sectionTitle_3 mb-3">4. Donations</h3>
            <ul className="mb-4">
              <li>All donations made through this website are voluntary and, except where required by law or in cases of processing error, are non-refundable.</li>
              <li>Donors will receive an official 80G receipt via the email provided at the time of donation.</li>
              <li>We reserve the right to allocate undesignated donations to the area of greatest need within our programmes.</li>
              <li>Designated donations will be used for the specified purpose to the extent possible; where a specific need is fully funded or no longer applicable, we may redirect funds to a similar purpose within the same programme area, and will make reasonable efforts to inform the donor.</li>
            </ul>

            <h3 className="sectionTitle_3 mb-3">5. Volunteering & Partnerships</h3>
            <p className="mb-4">Participation as a volunteer or partner is subject to a separate agreement, orientation, and (for roles involving direct contact with beneficiaries) our Safeguarding Policy and background verification process.</p>

            <h3 className="sectionTitle_3 mb-3">6. User Conduct</h3>
            <p className="mb-4">You agree not to use this website to transmit unlawful, harmful, defamatory, or fraudulent content, or to attempt unauthorised access to our systems or data.</p>

            <h3 className="sectionTitle_3 mb-3">7. Third-Party Links</h3>
            <p className="mb-4">This website may contain links to third-party websites (e.g., payment gateways, social media). We are not responsible for the content or privacy practices of external websites.</p>

            <h3 className="sectionTitle_3 mb-3">8. Limitation of Liability</h3>
            <p className="mb-4">While we strive for accuracy, YWCA of Delhi makes no warranties regarding the completeness or accuracy of website content and is not liable for any loss or damage arising from its use, to the extent permitted by law.</p>

            <h3 className="sectionTitle_3 mb-3">9. Governing Law</h3>
            <p className="mb-4">These Terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts in New Delhi.</p>

            <h3 className="sectionTitle_3 mb-3">10. Changes to These Terms</h3>
            <p className="mb-4">We may revise these Terms periodically. Continued use of the website after changes constitutes acceptance of the revised Terms.</p>

            <h3 className="sectionTitle_3 mb-3">11. Contact</h3>
            <p className="mb-4">For questions about these Terms, contact <a href="mailto:info@ywcadelhicdp.org" className="text-decoration-none text-dark fw-medium">info@ywcadelhicdp.org</a>.</p>
          </div>
        </section>
      </main>
    </>
  );
}
