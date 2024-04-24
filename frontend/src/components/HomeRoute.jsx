import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import TopicList from './TopicList';
import topics from '../mocks/topics';
import photos from '../mocks/photos';
import PhotoDetailsModal from './PhotoDetailsModal';
import { useState } from 'react';
import PhotoListItem from './PhotoListItem';

const HomeRoute = ({ photos, topics, handleTopicSelect }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter((id) => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  const toggleModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(isModalOpen);
  };

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoriteCount={favoritePhotos.length}
        handleTopicSelect={handleTopicSelect}
      />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        toggleModal={toggleModal}
      />
      <TopicList topics={topics} />
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        selectedPhoto={selectedPhoto}
        similarPhotos={[]}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;
