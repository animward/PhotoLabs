import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = () => {
  return (
    <div className="App-header">
      <span className="top-nav-bar__logo">PhotoLabs</span>
     <TopicList/>

    </div>
  )
}

export default TopNavigation;