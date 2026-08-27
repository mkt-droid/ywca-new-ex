'use client'
import InnerPageBanner from "@/components/partials/InnerPageBanner";
import innerStyles from '@/styles/Inner.module.css';
import styles from './page.module.css';
import { useRef, useEffect } from "react";

const executiveTeam = [
  {
    name: 'Ms. Pragyan Mohanty',
    title: 'Communications Coordinator & Coordinator, PRAP',
    image: '/images/executive/team/Ms.-Pragyan-Mohanty.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  },
  {
    name: 'Ms. Ruby Rajeev',
    title: 'Administrative Manager',
    image: '/images/executive/team/Ms.-Ruby-Rajeev.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  },
  {
    name: 'Ms. Cristy',
    title: 'Asst. Manager HR',
    image: '/images/executive/team/Ms.-Cristy.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  },
  {
    name: 'Ms. Amrita Upali Singh',
    title: 'HOD CPC',
    image: '/images/executive/team/Ms.Amrita-Upali-Singh.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  },
  {
    name: 'Ms. Linda Gangmei',
    title: 'HOD Shelter Homes',
    image: '/images/executive/team/Ms.-Linda-Gangmei.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  },
  {
    name: 'Ms. Kasturi',
    title:'Designation',
    image: '/images/executive/team/Ms.-Pragyan-Mohanty.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  },
  {
    name: 'Ms. Rajni Rawat',
    title: 'Coordinator, Youth, REC, PASI',
    image: '/images/executive/team/Ms.-Rajni-Rawat.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  },
  {
    name: 'Mr. Sanjeev Masih',
    title: 'HOD STFH',
    image: '/images/executive/team/Mr.-Sanjeev-Masih.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  },
  {
    name: 'Ms. Vandana Mashis',
    title: 'Deputy Director Education Institutes',
    image: '/images/executive/team/Ms.-Vandana-Mashis.png',
    description: 'Dummy Ipsum is simply dummy filler text of the printing and type setting & interactive media.'
  }
];

const PlaceholderImg = () => (
  <div className={innerStyles.placeholderImg}>
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="22" fill="#9aa" />
      <path d="M10 110 Q10 70 50 70 Q90 70 90 110Z" fill="#9aa" />
    </svg>
  </div>
);

const ExecutiveTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay || 0);
          setTimeout(() => el.classList.add(innerStyles.visible), delay);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    const cards = sectionRef.current?.querySelectorAll('[data-delay]');
    cards?.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <InnerPageBanner
        title={<>EXECUTIVE <br /> TEAM</>}
        bgImage="/images/01-Banner-Ex-team.jpg"
        contentMarginTop="25vh"
        overlayColor="linear-gradient(to right, rgba(146, 45, 157, 0.85), rgba(146, 45, 157, 0.4))"
        defaultGrayscale={false}
      />

      <section className={innerStyles.innerPageSection} style={{ backgroundColor: '#FCF7F7' }}>
        <div className="container">
          <section className={innerStyles.boardSection} ref={sectionRef}>
            <div className="row">
              {executiveTeam.map((member, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-20"
                >
                  <div className={`${innerStyles.memberCard} ${styles.execCard}`} data-delay={i * 80}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <PlaceholderImg />
                    )}
                    <p className={innerStyles.memberName}>{member.name}</p>
                    <p className={`${innerStyles.memberTitle} ${styles.execTitle}`}>{member.title}</p>
                    {/* <p className={`${innerStyles.desc} ${styles.execDesc}`}>{member.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default ExecutiveTeam;
