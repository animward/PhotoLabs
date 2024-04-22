import React from 'react';

import './App.scss';

import HomeRoute from './components/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        state={state}
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onLoadTopic={onLoadTopic}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
    </div>
  );
};

export default App;
