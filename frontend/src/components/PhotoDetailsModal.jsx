import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from './PhotoList';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto, similarPhotos }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`photo-details-modal${isOpen ? '' : '-closed'}`}>
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        Close
      </button>
      <div className="selected-photo">
				<h1>Photo Details</h1>
        {selectedPhoto && (
          <img src={selectedPhoto.urls.regular} alt={selectedPhoto.alt_description} />
        )}
      </div>
      <div className="similar-photos">
        <h2>Similar Photos</h2>
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;