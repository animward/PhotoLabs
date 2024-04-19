import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


export const sampleDataForPhotoListItem = {
  id: '1',
  location: {
    city: 'Montreal',
    country: 'Canada',
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: 'Joe Example',
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

import React from 'react';

const PhotoListItem = ({ photoData, toggleModal, toggleFavorite }) => {
  const { imageSource, location, user, urls, id: photoId } = photoData;


  const handleClick = () => { 
    toggleModal();
  } 

  return (
    <div className="photo-list__item" onClick={handleClick}>
      <img className="photo-list__image" src={urls.full} alt="User uploaded" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt="User profile"
        />
        <div className="photo-list__user-info">
          <div>{user.username}</div>
          <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
        </div>
      </div>
      <PhotoFavButton toggleFavorite={toggleFavorite} photoId={photoId}/>
    </div>
  );
};

export default PhotoListItem;
