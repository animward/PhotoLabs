import PhotoDetailsModal from 'components/PhotoDetailsModal';
import { useReducer, useEffect } from 'react';

const ACTIONS = {
  UPDATE_FAV_PHOTO: 'UPDATE_FAV_PHOTO',
  SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
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
      case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    favoritePhotos: [],
    selectedPhoto: null,
    displayModal: false,
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  const updateToFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.UPDATE_FAV_PHOTO, payload: { photoId } });
  };

  const setPhotoSelected = (photoDetails) => {
    dispatch({ type: ACTIONS.SET_PHOTO_SELECTED, payload: { photoDetails } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  const onLoadTopic = () => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  };

  return {
    state,
    updateToFavPhoto,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onLoadTopic,
  };
};

export default useApplicationData;