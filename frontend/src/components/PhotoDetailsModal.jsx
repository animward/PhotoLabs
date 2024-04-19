import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose }) => {

	useEffect(() => {
    console.log('isOpen:', isOpen); // Log the value of isOpen when it changes
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`photo-details-modal${isOpen ? '-closed' : ''}`}>
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
