import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | YWCA of Delhi',
};

export default function PrivacyPolicyPage() {

  return (
    <>
      <main style={{ backgroundColor: '#f8f9fa', paddingBottom: '100px' }}>
        <section className="container mt-4">
          <div className="bg-white p-4 p-md-5 rounded shadow-sm border" style={{ borderColor: '#eaeaea' }}>
            <h1 className="sectionTitle_1 mb-3">Privacy Policy</h1>
            <p className="text-muted mb-4">Last updated: August 10, 2026</p>
            
            <p className="mb-4">
              YWCA of Delhi (“we,” “us,” “our”) is committed to protecting the privacy of everyone who interacts with us — donors, volunteers, partners, beneficiaries, and website visitors. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
            </p>
            <div className="alert alert-warning mb-5">
              This is a template. Please have it reviewed by a qualified legal professional familiar with Indian data protection law (including the Digital Personal Data Protection Act, 2023) before publishing.
            </div>

            <h3 className="sectionTitle_3 mb-3">1. Information We Collect</h3>
            <ul className="mb-4">
              <li className="mb-2"><strong>Information you provide directly:</strong> name, email, phone number, postal address, payment details (processed by our secure payment gateway partner, not stored by us), and any information submitted through forms (donation, volunteer, contact, newsletter).</li>
              <li className="mb-2"><strong>Beneficiary information:</strong> collected only with informed consent, used solely for programme delivery, monitoring, and (where separately consented) storytelling/communications purposes.</li>
              <li><strong>Automatically collected information:</strong> IP address, browser type, pages visited, and cookies, used to improve website performance and user experience.</li>
            </ul>

            <h3 className="sectionTitle_3 mb-3">2. How We Use Your Information</h3>
            <ul className="mb-4">
              <li>To process donations and issue 80G tax receipts</li>
              <li>To respond to enquiries and process volunteer or partnership applications</li>
              <li>To send updates, newsletters, and impact reports (you may opt out at any time)</li>
              <li>To comply with legal, regulatory, and audit requirements</li>
              <li>To improve our website and services</li>
            </ul>

            <h3 className="sectionTitle_3 mb-3">3. How We Protect Your Information</h3>
            <p className="mb-4">We use industry-standard security measures, including encrypted payment processing, to protect your personal data. Payment card details are handled directly by our PCI-DSS-compliant payment gateway partner and are never stored on our servers.</p>

            <h3 className="sectionTitle_3 mb-3">4. Sharing of Information</h3>
            <p className="mb-2">We do not sell or rent your personal information. We may share information with:</p>
            <ul className="mb-4">
              <li>Payment gateway and technology service providers strictly for operational purposes</li>
              <li>Regulatory or government authorities where legally required</li>
              <li>Auditors, for compliance verification</li>
            </ul>

            <h3 className="sectionTitle_3 mb-3">5. Beneficiary Privacy & Safeguarding</h3>
            <p className="mb-4">We take special care with the privacy and safety of the women, girls, and children we work with. Photos, names, or stories of beneficiaries are used publicly only with documented, informed consent, and names may be changed to protect identity where requested. Our safeguarding policy governs all beneficiary-facing communications and media use. <Link href="#" className="text-decoration-none fw-medium" style={{ color: '#c94f9e' }}>[Read our Safeguarding Policy →]</Link></p>

            <h3 className="sectionTitle_3 mb-3">6. Cookies</h3>
            <p className="mb-4">Our website uses cookies to enhance browsing experience and analyse site traffic. You can disable cookies through your browser settings; some site features may not function fully if you do.</p>

            <h3 className="sectionTitle_3 mb-3">7. Your Rights</h3>
            <p className="mb-4">You may request access to, correction of, or deletion of your personal data by contacting <a href="mailto:privacy@ywcadelhi.org" className="text-decoration-none text-dark fw-medium">privacy@ywcadelhi.org</a>. You may unsubscribe from communications at any time via the link in our emails or by contacting us directly.</p>

            <h3 className="sectionTitle_3 mb-3">8. Children’s Privacy</h3>
            <p className="mb-4">We do not knowingly collect personal information from children through this website. Information about minor beneficiaries is collected only through our formal programme consent processes involving parents/guardians.</p>

            <h3 className="sectionTitle_3 mb-3">9. Changes to This Policy</h3>
            <p className="mb-4">We may update this Privacy Policy periodically. The “last updated” date at the top reflects the most recent revision.</p>

            <h3 className="sectionTitle_3 mb-3">10. Contact Us</h3>
            <p className="mb-4">For privacy-related questions, contact <a href="mailto:privacy@ywcadelhi.org" className="text-decoration-none text-dark fw-medium">privacy@ywcadelhi.org</a>.</p>
          </div>
        </section>
      </main>
    </>
  );
}
