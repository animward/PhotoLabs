import React from 'react';

import '../styles/PhotoFavButton.scss';

function PhotoFavButton({likedPhotos, toggleFavourite, id}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => toggleFavourite(id)}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={likedPhotos.includes(id) ? 'red' : 'none'}
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.61a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
    </div>
  );
}

export default PhotoFavButton;