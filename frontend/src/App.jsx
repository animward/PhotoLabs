import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import FavIcon from 'components/FavIcon';

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList/>
      <FavIcon isActive={true} />
    </div>
  );
};

export default App;