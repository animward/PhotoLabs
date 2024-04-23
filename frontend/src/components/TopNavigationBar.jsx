import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import LikedPhotosModal from './LikedPhotosModal';

const TopNavigation = ({
  topics,
  likedPhotos,
  handleTopicSelect,
  toggleLikedPhotos,
}) => {
  const hasLikedPhotos = likedPhotos && likedPhotos.length > 0;
  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={() => handleTopicSelect(null)}
      >
        PhotoLabs
      </span>
      <TopicList topics={topics} handleTopicSelect={handleTopicSelect} />
      <FavBadge
        likedPhotosLength={likedPhotos.length > 0}
        toggleLikedPhotos={toggleLikedPhotos}
        likedPhotos={likedPhotos}
      />
      <button className="top-nav-bar_darkmode" onClick={() => {document.body.classList.toggle('dark-mode')}}>Dark Mode</button>
    </div>
  );
};

export default TopNavigation;
