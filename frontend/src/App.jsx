import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';
import { sampleDataForPhotoListItem } from './components/PhotoListItem';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(sampleDataForPhotoListItem);
  return (
    <div className="App">
      <TopNavigation/>
      {photos.map((photo, index) => (
        <PhotoListItem key={index} photoData={photo} />
      ))}
      <PhotoFavButton />
    </div>
  );
};

export default App;
