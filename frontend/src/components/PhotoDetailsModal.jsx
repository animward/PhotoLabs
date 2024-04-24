import React, { useEffect, useState } from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss';
import TopicList from './TopicList';

const PhotoDetailsModal = ({
  closeModal,
  modalPhoto,
  likedPhotos,
  toggleFavourite,
  photos,
  toggleModal,
  isModal,
}) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <div
      className={`photo-details-modal${
        isModal ? '-open' : '-closed'
      }`}
    >
      <div className="photo-details-modal__header">
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__top-bar">
        <div>
          <PhotoFavButton
            toggleFavourite={toggleFavourite}
            likedPhotos={likedPhotos}
            id={modalPhoto.id}
          />
          <img
            className="photo-details-modal__image"
            src={modalPhoto.urls.full}
            onClick={() => toggleModal(modalPhoto)}
          />
          <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={modalPhoto.user.profile}
            />
            <div className="photo-details-modal__photographer-info">
              <p className="">{modalPhoto.user.name}</p>
              <p className="photo-details-modal__photographer-location">
                {modalPhoto.location.city}, {modalPhoto.location.country}
              </p>
            </div>
          </div>
          <h5>Similar Photos</h5>
          <div className="photo-details-modal__images">
            <PhotoList
              isModal={isModal}
              photos={photos}
              toggleFavourite={toggleFavourite}
              likedPhotos={likedPhotos}
              handleTopicSelect={() => {}}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
