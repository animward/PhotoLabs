import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList/>
    </div>
  );
};

export default App;