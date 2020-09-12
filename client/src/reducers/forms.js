import {SET_FORM} from '../actions/forms'

const defaultState = {
    form: null,
    selections: {
        // 1: []
    }
};

const forms = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FORM: {
      return {
        ...state,
        form: action.value
      };
    }

    default:
      return state;
  }
};

export default forms;
