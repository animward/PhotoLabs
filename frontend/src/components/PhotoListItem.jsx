import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import FavBadge from './FavBadge';

const PhotoListItem = ({
  photo,
  toggleFavourite,
  likedPhotos,
  id,
  toggleModal,
  isModal,
}) => {
  return (
    <div className={`photo-list__item ${isModal ? 'modal' : ''}`}>
      <PhotoFavButton
        toggleFavourite={toggleFavourite}
        likedPhotos={likedPhotos}
        id={id}
      />

      <div className="photo-list__photo-details">
        <p className="photo-list__photo-title">{photo.title}</p>
        <p className="photo-list__photo-description">{photo.description}</p>
      </div>
      <img
        className="photo-list__image"
        src={photo.urls.regular}
        onClick={() => toggleModal(photo)}
      ></img>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
        ></img>
        <div className="photo-list__user-info">
          <p className="">{photo.user.name}</p>
          <p className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
