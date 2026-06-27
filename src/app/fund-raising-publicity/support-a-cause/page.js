import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import SideNavBanner from '@/components/partials/SideNavBanner';
import ActionCard from '@/components/partials/ActionCard';

export const metadata = {
  title: 'Support A Cause | YWCA of Delhi',
};

export default function SupportACausePage() {
  const bannerNavItems = [
    { title: 'Overview & Donation', icon: 'bi-flower1', link: '/fund-raising-publicity' },
    { title: 'Support a Cause', icon: 'bi-heart', link: '/fund-raising-publicity/support-a-cause' },
    { title: 'The ReHome Store', icon: 'bi-shop', link: '/fund-raising-publicity/the-rehome-store' },
    { title: 'Eco-Justice Lab', icon: 'bi-tree', link: '/fund-raising-publicity/eco-justice-lab' },
    { title: 'Volunteer & Partnership', icon: 'bi-people', link: '/fund-raising-publicity/volunteer-and-partnership' },
    { title: 'Events & Announcements', icon: 'bi-calendar-event', link: '/fund-raising-publicity/events-and-announcements' },
  ];

  const causes = [
    {
      id: 1,
      title: "Help Women Survivors Of Violence Find Safety And Shelter",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/support-and-cause/sac-1.jpg",
    },
    {
      id: 2,
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/support-and-cause/sac-2.jpg",
    },
    {
      id: 3,
      title: "Simply Dummy Text Of The Printing And Typesetting",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/support-and-cause/sac-3.jpg",
    },
    {
      id: 4,
      title: "Dummy Text Of The Printing And Typesetting",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/support-and-cause/sac-2.jpg",
    },
    {
      id: 5,
      title: "Lpsum Is Simply Dummy Text Of The Printing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/support-and-cause/sac-1.jpg",
    },
    {
      id: 6,
      title: "Lorem Is Simply Dummy Text Of The Printing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      image: "/images/support-and-cause/sac-4.jpg",
    }
  ];

  return (
    <main>
      <SideNavBanner
        title={
          <>
            SUPPORT WOMEN<br />
            SUPPORT SUSTAINABILITY<br />
            SUPPORT CHANGE
          </>
        }
        bgImage="/images/fund-raising/main-banner.png"
        navItems={bannerNavItems}
      />

      <div className={styles.pageContentWrapper}>
        <section className={styles.sectionPadding}>
          <div className="container">
            <h2 className={styles.sectionTitle}>SUPPORT A CAUSE</h2>
            <p className={styles.sectionText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.
            </p>

            <div className={styles.cardsGrid}>
              {causes.map((cause, index) => (
                <ActionCard
                  key={index}
                  title={cause.title}
                  text={cause.text}
                  image={cause.image}
                  link="#"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
