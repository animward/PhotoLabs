import React from 'react';
import HomeRoute from './components/HomeRoute1';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import LikedPhotosModal from './components/LikedPhotosModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    showModal,
    modalPhoto,
    toggleModal,
    likedPhotos,
    toggleFavourite,
    photoData,
    topicData,
    handleTopicSelect,
    showLikedPhotos,
    toggleLikedPhotos,
  } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        toggleModal={toggleModal}
        likedPhotos={likedPhotos}
        toggleFavourite={toggleFavourite}
        isModal={showModal}
        handleTopicSelect={handleTopicSelect}
      />
      {showModal && (
        <PhotoDetailsModal
          closeModal={() => toggleModal(null)}
          isModal={showModal}
          modalPhoto={modalPhoto}
          likedPhotos={likedPhotos}
          toggleFavourite={toggleFavourite}
          toggleModal={toggleModal}
          photos={photoData}
        />
      )}
      {showLikedPhotos && (
        <LikedPhotosModal
          closeModal={() => toggleLikedPhotos(null)}
          likedPhotos={likedPhotos}
          toggleFavourite={toggleFavourite}
          isModal={showLikedPhotos}
          photos={photoData}
        />
      )}
    </div>
  );
};

export default App;
