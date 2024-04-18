

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
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

const PhotoListItem = () => {
  return (
    <div className="photo-list__item">
      <img src={sampleDataForPhotoListItem.imageSource} alt="User uploaded" />
      <div className="photo-list__item__details">
        <div className="photo-list__item__details__location">
          {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}
        </div>
        <div className="photo-list__item__details__user">
          <img src={sampleDataForPhotoListItem.profile} alt="User profile" />
          {sampleDataForPhotoListItem.username}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
