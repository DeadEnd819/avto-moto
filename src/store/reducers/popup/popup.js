import {extend} from '../../../utils';
import {ActionType} from '../../../const';

const {
  POPUP_OPEN,
  POPUP_CLOSE
} = ActionType;

const initialState = {
  isPopupOpen: false
};

const popup = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_OPEN:
      return extend(state, {
        isPopupOpen: true
      });
    case POPUP_CLOSE:
      return extend(state, {
        isPopupOpen: false
      });
    default:
      return state;
  }
};

export {popup};
