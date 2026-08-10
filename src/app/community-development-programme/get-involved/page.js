import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../page.module.css';
import SideNavBanner from '@/components/partials/SideNavBanner';
import OurValues from '@/components/partials/OurValues';

export const metadata = {
    title: 'Get Involved | Volunteer & Take Action | YWCA Delhi CDP',
    description: 'Volunteer your time or skills with YWCA Delhi’s Community Development Programme. Teach, mentor, or contribute professional expertise to empower women in Delhi’s urban settlements.',
};

export default function CDPGetInvolvedPage() {
    const bannerNavItems = [
        { title: 'Overview', icon: 'bi-house-door', link: '/community-development-programme' },
        { title: 'ABOUT US', icon: 'bi-info-circle', link: '/community-development-programme/about-us' },
        { title: 'PROGRAMS', icon: 'bi-diagram-3', link: '/community-development-programme/programs' },
        { title: 'IMPACT', icon: 'bi-graph-up-arrow', link: '/community-development-programme/impact' },
        { title: 'STORIES', icon: 'bi-book', link: '/community-development-programme/stories' }
    ];

    const howItWorksValues = [
        {
            icon: "bi-pencil-square",
            title: "Apply",
            text: "Fill out our short volunteer interest form"
        },
        {
            icon: "bi-person-video3",
            title: "Orientation",
            text: "Attend a mandatory orientation on our communities, safeguarding policy, and code of conduct"
        },
        {
            icon: "bi-people",
            title: "Match",
            text: "We match you to a programme based on your skills, interest, and availability"
        },
        {
            icon: "bi-rocket",
            title: "Start",
            text: "Begin your engagement with a dedicated field or programme coordinator as your point of contact"
        }
    ];

    const otherWaysValues = [
        {
            icon: "bi-gift",
            title: "Fundraise for us",
            text: "Run a birthday fundraiser, a marathon, or a workplace giving campaign.",
            link: "#",
            buttonText: "Start a Fundraiser →"
        },
        {
            icon: "bi-box2-heart",
            title: "Donate in kind",
            text: "Sewing machines, books, health camp supplies, laptops for our digital literacy classes.",
            link: "#",
            buttonText: "See our In-Kind Wishlist →"
        },
        {
            icon: "bi-share",
            title: "Spread the word",
            text: "Follow, share, and talk about our work.",
            link: "#",
            buttonText: "Follow us on social media →"
        }
    ];

    return (
        <>
            <main>
                <SideNavBanner
                    height="360px"
                    title={<>GET INVOLVED<br />CDP</>}
                    bgImage="/images/cdp/main-banner.jpg"
                    navItems={bannerNavItems}
                    activePath="/community-development-programme/get-involved"
                    contentMarginTop="25vh"
                />

                <div className={`${styles.pageBackground} pageContentWrapper`}>
                    <div className="container">
                        <h1 className="sectionTitle_1 text-center mx-840">You don’t need a title to change a life. You need a few hours and a willingness to show up.</h1>

                        <section className="mt-5">
                            <h2 className="sectionTitle_2 text-center mb-5">Ways to Volunteer</h2>
                            <div className="row justify-content-center g-4 mx-auto">
                                <div className="col-md-6">
                                    <div className="card h-100 interactiveCard" style={{ border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderRadius: '8px', overflow: 'hidden' }}>
                                        <div className="row g-0 h-100">
                                            <div className="col-4" style={{ minHeight: '160px' }}>
                                                <img src="/images/Community-development.jpg" alt="Teach & Mentor" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body d-flex flex-column h-100" style={{ padding: '20px' }}>
                                                    <h3 className="mb-2" style={{ color: '#1a1c6a', fontWeight: '700', fontSize: '1.3rem' }}>Teach & Mentor</h3>
                                                    <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.95rem' }}>Run or assist literacy classes, skill-training sessions, or digital literacy workshops. Ideal for retired professionals, educators, and college students.</p>
                                                    <div className="mt-auto">
                                                        <span style={{ backgroundColor: '#f8f0fa', color: '#a212b5', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', border: '1px solid #f2e3f5' }}>
                                                            <i className="bi bi-clock-history me-2"></i> Commitment: 2–4 hours/week, minimum 3 months
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 interactiveCard" style={{ border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderRadius: '8px', overflow: 'hidden' }}>
                                        <div className="row g-0 h-100">
                                            <div className="col-4" style={{ minHeight: '160px' }}>
                                                <img src="/images/high-1.jpg" alt="Skilled Volunteering" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body d-flex flex-column h-100" style={{ padding: '20px' }}>
                                                    <h3 className="mb-2" style={{ color: '#1a1c6a', fontWeight: '700', fontSize: '1.3rem' }}>Skilled Volunteering</h3>
                                                    <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.95rem' }}>Lend your professional expertise — legal aid, healthcare, finance, marketing, design, HR — to strengthen our programmes or train our women beneficiaries directly.</p>
                                                    <div className="mt-auto">
                                                        <span style={{ backgroundColor: '#f8f0fa', color: '#a212b5', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', border: '1px solid #f2e3f5' }}>
                                                            <i className="bi bi-clock-history me-2"></i> Commitment: Flexible, project-based
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 interactiveCard" style={{ border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderRadius: '8px', overflow: 'hidden' }}>
                                        <div className="row g-0 h-100">
                                            <div className="col-4" style={{ minHeight: '160px' }}>
                                                <img src="/images/high-2.jpg" alt="Health Camp Support" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body d-flex flex-column h-100" style={{ padding: '20px' }}>
                                                    <h3 className="mb-2" style={{ color: '#1a1c6a', fontWeight: '700', fontSize: '1.3rem' }}>Health Camp Support</h3>
                                                    <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.95rem' }}>Assist doctors and nurses at community health camps — registration, translation, and awareness activities.</p>
                                                    <div className="mt-auto">
                                                        <span style={{ backgroundColor: '#f8f0fa', color: '#a212b5', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', border: '1px solid #f2e3f5' }}>
                                                            <i className="bi bi-clock-history me-2"></i> Commitment: One-day camps, periodic
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 interactiveCard" style={{ border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderRadius: '8px', overflow: 'hidden' }}>
                                        <div className="row g-0 h-100">
                                            <div className="col-4" style={{ minHeight: '160px' }}>
                                                <img src="/images/high-3.jpg" alt="Corporate Volunteering Days" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body d-flex flex-column h-100" style={{ padding: '20px' }}>
                                                    <h3 className="mb-2" style={{ color: '#1a1c6a', fontWeight: '700', fontSize: '1.3rem' }}>Corporate Volunteering Days</h3>
                                                    <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.95rem' }}>Bring your team for a structured, one-day engagement — from skills workshops to donation drives.</p>
                                                    <div className="mt-auto d-flex flex-column align-items-start">
                                                        <span className="mb-2" style={{ backgroundColor: '#f8f0fa', color: '#a212b5', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', border: '1px solid #f2e3f5' }}>
                                                            <i className="bi bi-clock-history me-2"></i> Commitment: Flexible
                                                        </span>
                                                        <Link href="#" style={{ color: '#a212b5', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.95rem' }}>See our CSR page →</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 interactiveCard" style={{ border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderRadius: '8px', overflow: 'hidden' }}>
                                        <div className="row g-0 h-100">
                                            <div className="col-4" style={{ minHeight: '160px' }}>
                                                <img src="/images/high-4.jpg" alt="Remote / Virtual Volunteering" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body d-flex flex-column h-100" style={{ padding: '20px' }}>
                                                    <h3 className="mb-2" style={{ color: '#1a1c6a', fontWeight: '700', fontSize: '1.3rem' }}>Remote / Virtual Volunteering</h3>
                                                    <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.95rem' }}>Help with content writing, social media, translation, grant research, or data entry — from anywhere.</p>
                                                    <div className="mt-auto">
                                                        <span style={{ backgroundColor: '#f8f0fa', color: '#a212b5', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', border: '1px solid #f2e3f5' }}>
                                                            <i className="bi bi-clock-history me-2"></i> Commitment: 3–5 hours/week
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <section className="mt-5 py-5" style={{ background: 'linear-gradient(135deg, #fdf8ff 0%, #f3e5f5 100%)', borderTop: '1px solid #efe4f2', borderBottom: '1px solid #efe4f2' }}>
                        <div className="container">
                            <h2 className="sectionTitle_2 text-center mb-4">What You’ll Gain</h2>
                            <ul className="mx-800 mx-auto" style={{ listStyle: 'none', fontSize: '1.15rem', lineHeight: '1.8', background: '#fff', padding: '40px 50px', borderRadius: '15px', boxShadow: '0 8px 30px rgba(162, 18, 181, 0.08)' }}>
                                <li className="mb-3 d-flex align-items-start">
                                    <i className="bi bi-check-circle-fill me-3 mt-1" style={{ color: '#a212b5', fontSize: '1.3rem' }}></i>
                                    <span style={{ color: '#444' }}>Direct, on-ground exposure to grassroots development work</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <i className="bi bi-check-circle-fill me-3 mt-1" style={{ color: '#a212b5', fontSize: '1.3rem' }}></i>
                                    <span style={{ color: '#444' }}>A certificate of volunteering and letter of recommendation for consistent volunteers</span>
                                </li>
                                <li className="d-flex align-items-start">
                                    <i className="bi bi-check-circle-fill me-3 mt-1" style={{ color: '#a212b5', fontSize: '1.3rem' }}></i>
                                    <span style={{ color: '#444' }}>The kind of perspective that doesn’t come from a classroom or a boardroom</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="container">
                        <section className="mt-5 pt-4">
                            <OurValues values={howItWorksValues} title="How It Works" className="" />
                            <div className="text-center mt-5">
                                <Link href="/fund-raising-publicity/volunteer-and-partnership" className={styles.primaryBtn}>Apply to Volunteer →</Link>
                            </div>
                        </section>

                        <section className="mt-5 pt-4">
                            <h2 className="sectionTitle_2 text-center">Our Safeguarding Commitment</h2>
                            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: '#fff3cd', color: '#856404', padding: '20px', borderRadius: '8px', border: '1px solid #ffeeba' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '15px' }}>
                                    Every volunteer engaging directly with women and children undergoes a background check and mandatory safeguarding orientation. We maintain a zero-tolerance policy toward any form of abuse, harassment, or exploitation.
                                </p>
                                <div className="mt-4">
                                    <Link href="#" className={styles.primaryBtn}>Read our Safeguarding Policy →</Link>
                                </div>
                            </div>
                        </section>

                        <section className="mt-5 pt-4 mb-0">
                            <OurValues values={otherWaysValues} title="Other Ways to Get Involved" className="" />
                        </section>

                    </div>
                </div>
            </main>
        </>
    );
}
