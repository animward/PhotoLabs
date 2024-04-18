import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopNavigation from 'components/TopNavigationBar';
import { sampleDataForPhotoListItem } from './components/PhotoListItem';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigation/>
      <PhotoListItem photoData={ sampleDataForPhotoListItem }/>

    </div>
  );
};

export default App;
