import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopNavigation from 'components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigation/>
      <PhotoListItem/>

    </div>
  );
};

export default App;
