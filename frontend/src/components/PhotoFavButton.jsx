import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = () => {
    setIsFav(prevIsFav => !prevIsFav);
  }

  return (
    <div className={`photo-list__fav-icon ${isFav ? 'liked' : ''}`} onClick={handleFavClick}>
    <FavIcon isActive={isFav} />
  </div>
  );
};

export default PhotoFavButton;