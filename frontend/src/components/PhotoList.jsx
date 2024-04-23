import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({photos, toggleFavourite, likedPhotos, toggleModal, isModal}) => {

  if (!photos) {
    return null;
  }

  const containerOfPhotos = photos.map((photo) => <PhotoListItem key={photo.id} id={photo.id} photo={photo} toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} toggleModal={toggleModal} isModal={isModal}/>)
  return (
    <ul className={`photo-list ${isModal? 'modal' : ''}`}>
      {containerOfPhotos}
    </ul>
  );
};

export default PhotoList;
