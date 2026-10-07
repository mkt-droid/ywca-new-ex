"use client";
import React, { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import styles from './UserStories.module.css';

export default function UserStories({ stories = [], title = "User Stories" }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  if (!stories || stories.length === 0) return null;

  // Group stories by 4 for a 4-column layout on large screens
  const chunkSize = 4;
  const groupedStories = [];
  for (let i = 0; i < stories.length; i += chunkSize) {
    groupedStories.push(stories.slice(i, i + chunkSize));
  }

  const handleShow = (story) => {
    setSelectedStory(story);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedStory(null);
  };

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section className={styles.storiesSection}>
      <div className="container">
        {title && <h2 className={"sectionTitle_2 text-center"}>{title}</h2>}
        <Carousel indicators={true} controls={true} className={`${styles.storyCarousel} pb-5`}>
          {groupedStories.map((group, groupIdx) => (
            <Carousel.Item key={groupIdx} className="pt-3">
              <div className="row">
                {group.map((story, idx) => (
                  <div className="col-lg-3 col-md-6 mb-4" key={story.id || idx}>
                    <div className={styles.storyCard}>
                      <div className={styles.storyHeader}>
                        <img src={story.avatar} alt={story.name} className={styles.storyAvatar} />
                        <div>
                          <h6 className={styles.storyName}>{story.name}</h6>
                          {story.subtitle && <p className={styles.storySubtitle}>{story.subtitle}</p>}
                        </div>
                      </div>
                      <p className={styles.storyQuote}>
                        "{truncateText(story.quote, 160)}"
                        {story.quote && story.quote.length > 160 && (
                          <span 
                            className={styles.readMore} 
                            onClick={() => handleShow(story)}
                          >
                             Read more
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className={styles.modalTitle}>
            {selectedStory?.name}'s Story
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <div className={styles.storyHeader} style={{marginBottom: '20px'}}>
            <img src={selectedStory?.avatar} alt={selectedStory?.name} className={styles.storyAvatar} style={{width: '60px', height: '60px'}} />
            <div>
              <h6 className={styles.storyName} style={{fontSize: '18px'}}>{selectedStory?.name}</h6>
              {selectedStory?.subtitle && <p className={styles.storySubtitle} style={{fontSize: '14px'}}>{selectedStory?.subtitle}</p>}
            </div>
          </div>
          <p style={{whiteSpace: 'pre-line', fontSize: '15px', color: '#444', lineHeight: '1.7'}}>
            "{selectedStory?.quote}"
          </p>
        </Modal.Body>
      </Modal>
    </section>
  );
}
