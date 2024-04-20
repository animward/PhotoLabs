import { useReducer } from 'react';

const ACTIONS = {
  UPDATE_FAV_PHOTO: 'UPDATE_FAV_PHOTO',
  SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FAV_PHOTO:
      const { photoId } = action.payload;
      const isFav = state.favoritePhotos.includes(photoId);
      const updatedFavPhotos = isFav
        ? state.favoritePhotos.filter((id) => id !== photoId)
        : [...state.favoritePhotos, photoId];
      return { ...state, favoritePhotos: updatedFavPhotos };
    case ACTIONS.SET_PHOTO_SELECTED:
      const { photoDetails } = action.payload;
      return { ...state, selectedPhoto: photoDetails };
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return { ...state, displayModal: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    favoritePhotos: [],
    selectedPhoto: null,
    displayModal: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.UPDATE_FAV_PHOTO, payload: { photoId } });
  };

  const setPhotoSelected = (photoDetails) => {
    dispatch({ type: ACTIONS.SET_PHOTO_SELECTED, payload: { photoDetails } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  return {
    state,
    updateToFavPhoto,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;