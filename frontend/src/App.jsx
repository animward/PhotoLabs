import React from 'react';

import './App.scss';

import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';

const App = () => {

  return (
    <div className="App">
    <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;