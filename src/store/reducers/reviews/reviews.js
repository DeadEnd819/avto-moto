import {extend} from '../../../utils';
import {ActionType, STORE_NAME} from '../../../const';
import {REVIEWS_MOCKS} from '../../../mocks';

const {ADD_REVIEW} = ActionType;

const initialState = (localStorage[STORE_NAME]) ?
  JSON.parse(localStorage[STORE_NAME]) :
  {
    reviews: REVIEWS_MOCKS
  };

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return extend(state, {
        reviews: [...state.reviews, action.payload],
      });
    default:
      return state;
  }
};

export {reviews};
