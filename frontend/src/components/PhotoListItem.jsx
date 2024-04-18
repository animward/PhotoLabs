

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

export const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

import React from "react";

const PhotoListItem = ({ photoData }) => {
  const { imageSource, location, username, profile } = photoData;

  return (
<div className="photo-list__item">
      <img src={imageSource} alt="User uploaded" />
      <div className="photo-list__item__details">
        <div className="photo-list__item__details__location">
          {location.city}, {location.country}
        </div>
        <div className="photo-list__item__details__user">
          <img src={profile} alt="User profile" />
          {username}
        </div>
        <PhotoFavButton />
      </div>
    </div>
  );
};

export default PhotoListItem;
