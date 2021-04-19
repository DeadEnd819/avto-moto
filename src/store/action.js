import {ActionType} from '../const';

const {ADD_REVIEW, POPUP_OPEN, POPUP_CLOSE} = ActionType;

export const setReview = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});

export const setPopupOpen = () => ({
  type: POPUP_OPEN,
});

export const setPopupClose = () => ({
  type: POPUP_CLOSE,
});
