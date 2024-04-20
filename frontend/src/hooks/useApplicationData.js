import { useReducer, useEffect } from 'react';

const ACTIONS = {
  UPDATE_FAV_PHOTO_IDS: 'UPDATE_FAV_PHOTO_IDS',
  SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FAV_PHOTO_IDS:
      return { ...state, favoritePhotos: action.payload.photoIds };
    case ACTIONS.SET_PHOTO_SELECTED:
      return { ...state, selectedPhoto: action.payload.photoId };
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

  const updateToFavPhotoIds = (photoIds) => {
    dispatch({ type: ACTIONS.UPDATE_FAV_PHOTO_IDS, payload: { photoIds } });
  };

  const setPhotoSelected = (photoId) => {
    dispatch({ type: ACTIONS.SET_PHOTO_SELECTED, payload: { photoId } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  useEffect(() => {
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;