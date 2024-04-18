import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import TopicList from './TopicList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList photoData={ photos } />
      <TopicList TopicList={ topics } />
    </div>
  );
};

export default HomeRoute;