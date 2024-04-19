import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from './PhotoList';
import photos from '../mocks/photos';
import PhotoListItem from './PhotoListItem';
import userEvent from '@testing-library/user-event';
import '../styles/PhotoList.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photoData, similarPhotos, photos }) => {


	useEffect(() => {
    console.log('isOpen:', isOpen);
  }, [isOpen]);

	useEffect(() => {
    console.log('photoData:', photoData);
  }, [photoData]);

  const handleClose = () => {
    onClose();
  };

	const imageUrl = photoData;
	const imageSource = `${process.env.PUBLIC_URL}${imageUrl}`;
	console.log('imageSource:', imageSource);
	
  return (
    <div className={`photo-details-modal${isOpen ? '' : '-closed'}`}>
      <button
        className="photo-details-modal__close-button"
        onClick={handleClose}
      >
        Close
      </button>
			<div className="selected-photo">
        <img src={imageSource} />
      </div>
      <div className="similar-photos">
       <PhotoList photos={similarPhotos} />
    </div>
		</div>
  );
};

export default PhotoDetailsModal;
