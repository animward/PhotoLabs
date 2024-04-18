import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import TopicList from './TopicList';
import topics from '../mocks/topics';
import photos from '../mocks/photos';

const HomeRoute = ({ photos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList photos={ photos } />
      <TopicList topics={ topics } />
    </div>
  );
};

export default HomeRoute;