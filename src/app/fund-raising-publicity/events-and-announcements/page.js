import React from 'react';
import SideNavBanner from '@/components/partials/SideNavBanner';
import Gallery from '@/components/partials/Gallery';
import styles from './page.module.css';

export const metadata = {
  title: 'Events & Announcements | YWCA of Delhi',
};

export default function EventsAndAnnouncementsPage() {
  const bannerNavItems = [
    { title: 'Overview & Donation', icon: 'bi-flower1', link: '/fund-raising-publicity' },
    { title: 'Support a Cause', icon: 'bi-heart', link: '/fund-raising-publicity/support-a-cause' },
    { title: 'The ReHome Store', icon: 'bi-shop', link: '/fund-raising-publicity/the-rehome-store' },
    { title: 'Eco-Justice Lab', icon: 'bi-tree', link: '/fund-raising-publicity/eco-justice-lab' },
    { title: 'Volunteer & Partnership', icon: 'bi-people', link: '/fund-raising-publicity/volunteer-and-partnership' },
    { title: 'Events & Announcements', icon: 'bi-calendar-event', link: '/fund-raising-publicity/events-and-announcements' },
  ];

  const galleryItems = [
    {
      title: 'Fundraising Events',
      image: '/images/event-announsment/Fundraising-Events.jpg',
      photos: [
        { src: 'https://placehold.co/800x600/dcdcdc/333333?text=Fundraising+Photo+1', description: 'Lorem ipsum is descriptive text for Fundraising Photo 1' },
        { src: 'https://placehold.co/800x600/cccccc/333333?text=Fundraising+Photo+2', description: 'Lorem ipsum is descriptive text for Fundraising Photo 2' },
        { src: 'https://placehold.co/800x600/bcbcbc/333333?text=Fundraising+Photo+3', description: 'Lorem ipsum is descriptive text for Fundraising Photo 3' },
      ]
    },
    {
      title: 'Collection Drives',
      image: '/images/event-announsment/Collection-Drives.jpg',
      photos: [
        { src: 'https://placehold.co/800x600/dcdcdc/333333?text=Collection+Photo+1', description: 'Lorem ipsum is descriptive text for Collection Photo 1' },
        { src: 'https://placehold.co/800x600/cccccc/333333?text=Collection+Photo+2', description: 'Lorem ipsum is descriptive text for Collection Photo 2' },
      ]
    },
    {
      title: 'Donation Campaigns',
      image: '/images/event-announsment/Donation-Campaigns.jpg',
      photos: [
        { src: 'https://placehold.co/800x600/dcdcdc/333333?text=Donation+Photo+1', description: 'Lorem ipsum is descriptive text for Donation Photo 1' },
        { src: 'https://placehold.co/800x600/cccccc/333333?text=Donation+Photo+2', description: 'Lorem ipsum is descriptive text for Donation Photo 2' },
        { src: 'https://placehold.co/800x600/bcbcbc/333333?text=Donation+Photo+3', description: 'Lorem ipsum is descriptive text for Donation Photo 3' },
        { src: 'https://placehold.co/800x600/acacac/333333?text=Donation+Photo+4', description: 'Lorem ipsum is descriptive text for Donation Photo 4' },
      ]
    },
    {
      title: 'Workshops',
      image: '/images/event-announsment/Workshops.jpg',
      photos: [
        { src: 'https://placehold.co/800x600/dcdcdc/333333?text=Workshop+Photo+1', description: 'Lorem ipsum is descriptive text for Workshop Photo 1' },
        { src: 'https://placehold.co/800x600/cccccc/333333?text=Workshop+Photo+2', description: 'Lorem ipsum is descriptive text for Workshop Photo 2' },
      ]
    },
    {
      title: 'Eco-Justice Lab Inauguration',
      image: '/images/event-announsment/Eco-Justice-Lab-Inauguration.jpg',
      photos: [
        { src: 'https://placehold.co/800x600/dcdcdc/333333?text=Eco-Justice+Photo+1', description: 'Lorem ipsum is descriptive text for Eco-Justice Photo 1' },
        { src: 'https://placehold.co/800x600/cccccc/333333?text=Eco-Justice+Photo+2', description: 'Lorem ipsum is descriptive text for Eco-Justice Photo 2' },
      ]
    },
    {
      title: 'The Rehome Store Inauguration',
      image: '/images/event-announsment/The-Rehome-Store-Inauguration.jpg',
      photos: [
        { src: 'https://placehold.co/800x600/dcdcdc/333333?text=Rehome+Store+Photo+1', description: 'Lorem ipsum is descriptive text for Rehome Store Photo 1' },
        { src: 'https://placehold.co/800x600/cccccc/333333?text=Rehome+Store+Photo+2', description: 'Lorem ipsum is descriptive text for Rehome Store Photo 2' },
        { src: 'https://placehold.co/800x600/bcbcbc/333333?text=Rehome+Store+Photo+3', description: 'Lorem ipsum is descriptive text for Rehome Store Photo 3' },
      ]
    },
  ];

  return (
    <main>
      <SideNavBanner
        height="360px"
        title={
          <>
            SUPPORT WOMEN<br />SUPPORT SUSTAINABILITY<br />
            SUPPORT CHANGE
          </>
        }
        bgImage="/images/fund-raising/main-banner.jpg"
        navItems={bannerNavItems}
        activePath="/fund-raising-publicity/events-and-announcements"
      />

      <div className={`${styles.contentWrapper} pageContentWrapper`}>
        <section className={styles.sectionPadding}>
          <div className="container">
            <h1 className="sectionTitle_1 text-center mx-800">Events And Announcements</h1>
            <p className={styles.pageDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.
            </p>

            <h2 className="sectionTitle_2 text-center">Gallery</h2>
            <Gallery items={galleryItems} columns={4} />
          </div>
        </section>
      </div>
    </main>
  );
}
