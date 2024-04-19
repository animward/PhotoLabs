import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import TopicList from './TopicList';
import topics from '../mocks/topics';
import photos from '../mocks/photos';
import { useState } from 'react';

const HomeRoute = ({ photos }) => {

	const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoriteCount={favoritePhotos.length} />
      <PhotoList photos={ photos } toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} />
      <TopicList topics={ topics } />
    </div>
  );
};

export default HomeRoute;