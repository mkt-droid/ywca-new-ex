import React from 'react';
import styles from './UserStories.module.css';

export default function UserStories({ stories = [], title = "User Stories" }) {
  if (!stories || stories.length === 0) return null;

  return (
    <section className={styles.storiesSection}>
      <div className="container">
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        <div className="row">
          {stories.map((story, idx) => (
            <div className="col-lg-6 col-md-6 mb-4" key={story.id || idx}>
              <div className={styles.storyCard}>
                <div className={styles.storyHeader}>
                  <img src={story.avatar} alt={story.name} className={styles.storyAvatar} />
                  <div>
                    <h6 className={styles.storyName}>{story.name}</h6>
                    {story.subtitle && <p className={styles.storySubtitle}>{story.subtitle}</p>}
                  </div>
                </div>
                <p className={styles.storyQuote}>"{story.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
