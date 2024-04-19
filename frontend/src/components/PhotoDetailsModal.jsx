import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photoData }) => {

	useEffect(() => {
    console.log('isOpen:', isOpen); // Log the value of isOpen when it changes
  }, [isOpen]);

	useEffect(() => {
    console.log('photoData:', photoData);
  }, [photoData]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`photo-details-modal${isOpen ? '' : '-closed'}`}>
      <button
        className="photo-details-modal__close-button"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
