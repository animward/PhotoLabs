import React from 'react';
import PhotoList from './components/PhotoList'; // Import PhotoList component
import PhotoFavButton from './components/PhotoFavButton'; // Import PhotoFavButton component
import './App.scss'; // Import App.scss for styling
import TopNavigation from './components/TopNavigationBar'; // Import TopNavigation component

const App = () => {
  return (
    <div className="App">

      <TopNavigation />
      <PhotoList/>
    </div>
  );
};

export default App;